const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();
const db = require("./db");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "hbs");
app.use("/", require("./routes"));

app.listen(2424, () => {
  console.log("server started on http://localhost:2424");
});
