const express = require("express");

const exphbs = require("express-handlebars");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


const passport = require('passport');
const session = require('express-session');
const usePassport =require('./config/passport');

const router = require('./routes/index');
const { pass } = require("./config/mongoose");
require('./config/mongoose');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");


app.use(session({
  secret:"don not see",
  saveUninitialized:true,
  resave:false
}));
app.use(passport.initialize());
app.use(passport.session());

usePassport();


app.use(router);

app.listen(port, () => {
  console.log(`operate http://localhost:${port} successfully`);
});
