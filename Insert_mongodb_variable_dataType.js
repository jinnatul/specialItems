const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017/back_end');

var Schema = new mongoose.Schema({
    name: String,
    email: String
});

var user = mongoose.model('test', Schema);

app.post('/', (req, res) =>{
    new user({
        name: req.body.name,
        email: req.body.email
    }).save((err, doc) =>{
        if(err) res.json(err);
        else res.send("Success Insert");
    });
});

app.use(express.static('./'))

app.get("/", (req, res)=> {
    res.send("Connected");
});

app.listen(3003, ()=> {
    console.log("yesssss");
});
