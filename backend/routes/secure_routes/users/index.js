const express = require("express");
const router = express.Router();

const permission = require("../../../plugins/permission");

router.use(permission(["modulator", "user"]));

router.route("").get(async (req, res) => {
  return res.send("Hello from users routes with admin permission");
});

module.exports = router;
