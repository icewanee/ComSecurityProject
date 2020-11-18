const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes/routes");
const authRoutes = require("./routes/secure_routes");
const passportPlugin = require("./plugins/passport");
const frameguard = require("frameguard");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const port = 8000;

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(function (req, res, next) {
  res.header(
    "Content-Security-Policy",
    "script-src 'self';object-src 'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self';style-src 'self'"
  );
  next();
});

app.set('x-powered-by', false);

app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  next();
});


app.use(helmet.hidePoweredBy())
app.use(frameguard({ action: "SAMEORIGIN" }));
// connect db
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
mongoose.connection.on("connected", () => {
  console.log("Connected");
});

app.use("/api", routes);
app.use(
  "/api/auth",
  passportPlugin.authen,
  express.json({ limit: "50Mb" }),
  authRoutes
);

app.route("").get((req, res) => {
  res.send("Hello from Node.js RESTful API");
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
