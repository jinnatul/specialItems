const express = require('express');
const bodyParser = require('body-parser');
const dataModel = require('./model');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// allow views
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/data', async(req, res) => {
  let data = req.body.data;
  //console.log(data)
  data = JSON.parse(data);
  //console.log(data);
  await dataModel.create(data);
  res.status(200).json({"status": "ok"});
})

module.exports = app;