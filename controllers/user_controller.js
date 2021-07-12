const { User } = require("../models/user_schema");

module.exports.profile = function (req, res) {
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id, (err, user) => {
      if (err) {
        console.log("error aa gya bhai ");
      }
      if (user) {
        res.render("index", {
          title: "Profile Page ",
          email: user.email,
          password: user.password,
        });
      }
    });
  } else {
    res.redirect("back");
  }
};

module.exports.signup = (req, res) => {
  return res.render("user_signup", {
    title: "Codeial | signup",
  });
};

module.exports.signin = (req, res) => {
  console.log("apple");
  console.log(req.cookies);
  return res.render("user_signin", {
    title: " Codeial | signin",
  });
};
module.exports.create = (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log("error aara hai ");
    }
    if (!user) {
      console.log("YEH WALA A", req.body);
      User.create(req.body, (err, user) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.redirect("/user/signin");
      });
    } else {
      return res.redirect("back");
    }
  });
};
module.exports.createSession = (req, res) => {
  //TODO LATER

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log("some error happened ");
    }
    if (user) {
      if (user.password == req.body.password) {
        res.cookie("user_id", user.id);
        res.redirect("/user/profile");
      } else {
        res.redirect("back");
      }
    } else {
      return res.redirect("back");
    }
  });
};
