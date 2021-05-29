module.exports.authenticator = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("failure_msg", "請先登入");
    return res.redirect("/users/login");
  }
  next();
};
