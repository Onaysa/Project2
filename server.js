const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require("express-session");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
// Set up session
const sess = {
  secret: "FI0omAnsQNyXBpeSIVzA",
  cookie: {
    // 2mins timeout
    // maxAge: 120000,
    maxAge: 1200000,
    sameSite: 'strict',
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize,
  }),
};
app.use(session(sess));
// Setting up handlebars
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine); // Define engine
app.set("view engine", "handlebars"); // Set view engine to handle bars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
      console.log(`Listening on port http://localhost:${PORT}`)
  );
});















