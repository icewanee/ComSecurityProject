const express = require("express");
const router = express.Router();

//route
const post = require("./post");
const user = require("./users");
const comment = require("./comment"); 
router.use("/post", post);
router.use("/users", user);
router.use("/comment", comment); 

router.route("").get((req, res) => {
  return res.send("Welcome to auth routes");
});

module.exports = router;
