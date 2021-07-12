const { user } = require("../models/user_schema");

module.exports.home = function (req, res) {
  console.log(req.cookies);
  /*  user.create({ email: "alibaba", password: "1233" }, (err, user) => {
    if (err) {
      console.log("error happendnd ");
    }
    if (user) {
      console.log("user succesfully addded ");
    }
  }); */

  return res.end(`<h1>Express is up for a codeial </h1>`);
};
