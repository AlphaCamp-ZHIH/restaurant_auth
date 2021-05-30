const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restaurants", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("operate mongodb successfully");
});

module.exports = db;
