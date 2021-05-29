const express = require("express");
const home = require("./modules/home");
const restaurants = require("./modules/restaurants");
const users = require("./modules/users");
const router = express.Router();

// router.use("/sort", sort);
router.use("/users", users);
router.use("/restaurants", restaurants);
router.use("/", home);

module.exports = router;
