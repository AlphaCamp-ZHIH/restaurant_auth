const express = require("express");
const passport = require("passport");
const User = require("../../models/users");
const router = express.Router();
const bcrypt = require("bcryptjs");


router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
  })
);

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  // console.log(req.body)
  const { organizer, email, password, confirmPassword } = req.body;
  if (!organizer || !email || !password || !confirmPassword) {
    //每個欄位皆必填
    req.flash("failure_msg", "每個欄位皆必填");
    return res.render("register");
  }
  if (confirmPassword !== password) {
    //密碼與確認密碼須一致
    req.flash("failure_msg", "密碼與確認密碼須一致");
    return res.render("register");
  }
  User.findOne({ email }).then((user) => {
    if (!user) {
      // 該用戶已存在
      req.flash("failure_msg", "該用戶已存在");
      return res.render("register", { user: req.body });
    }
    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) =>
        User.create({
          organizer,
          email,
          password: hash,
        })
      )
      .then(() => {
        req.flash('success_msg','請重新登入')
        return res.redirect("/users/login");
      })
      .catch((e) => console.log("register error", e));
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "已成功登出");
  return  res.redirect("/users/login");
});

module.exports = router;
