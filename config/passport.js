const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/users");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passReqToCallback: true },
      (req, email, password, done) => {
        User.findOne({email})
        .then(user =>{
          if(!user){
            //該用戶不存在
            return done(null,false)
          ;}
          bcrypt.compare(password,user.password)
          .then(isMatch =>{
            if(isMatch){
              //登入成功
              return done(null,user);
            }
            //請輸入正確密碼
            return done(null,false);
          })
        })


      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((userId, done) => {
    User.findById(userId).then((user) => done(null, user));
  });
};
