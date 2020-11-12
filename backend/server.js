const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes/routes");
const authRoutes = require("./routes/secure_routes");
const passportPlugin = require("./plugins/passport");
const cors = require("cors")
require("dotenv").config();

const port = 8000;

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
// connect db
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => {
  logError(err);
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
