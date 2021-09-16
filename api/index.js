const express = require("express");
const app = express();

const { Client } = require('pg');
const { User } = require("./models");
const db = require('./models')

app.get('/select', (req, res) => {
  dataUser.findAll({where: { id: 1}})
  .then((users) => {
    res.send(users);
  })
  .catch((err) => {
    console.log(err);
  });
})

db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log("server running");
  });
});
