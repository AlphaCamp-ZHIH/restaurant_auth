const passport = require("passport");
const LoccalStrategy = require("passport-local").Strategy;
const bcrypt = requrie("bcryptjs");
const User = require("../models/users");

module.exports = () => {
  passport.use(
    new LoccalStrategy(
      { usernameField: "email", passReqToCallback: true },
      (req, email, password, done) => {}
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((userId, done) => {
    User.findById(userId).then((user) => done(null, user));
  });
};
