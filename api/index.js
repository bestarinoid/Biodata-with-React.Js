const express = require("express");
const app = express();

const { biodata } = require("./models");
const db = require('./models')

app.get('/biodata', (req, res) => {
  biodata.findByPk(1)
  .then((biodata) => {
    res.send(biodata);
  })
  .catch((err) => {
    console.log(err);
  });
})

db.sequelize.sync().then((req) => {
  app.listen(5001, () => {
    console.log("server running PORT 5001");
  });
});
