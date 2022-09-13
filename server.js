// requirements
const express = require("express");
const session = require("express-session");
const path = require("path");
const routes = require("./controllers");
const exphbs = require("express-handlebars");

// link to middleware
const app = express();
const PORT = process.env.PORT || 3006;
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const hbs = exphbs.create({ helpers });
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// establish session rules
const sess = {
  secret: process.env.secret,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// set routes
app.use(routes);

// set handlebar connection
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// set express rules
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// connect database with server via Sequelize
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Rolling deep on port ${PORT}!!`));
});
