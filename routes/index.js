const express = require("express");
const home = require("./modules/home");
const restaurants = require("./modules/restaurants");
const auth = require('./modules/auth');
const users = require("./modules/users");
const authenticator = require("../middleware/middleware").authenticator;
const router = express.Router();


router.use("/users", users);
router.use("/restaurants",authenticator, restaurants);
router.use('/auth',auth);
router.use("/", authenticator,home);

module.exports = router;
