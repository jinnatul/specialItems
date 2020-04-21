const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongo = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: false }))

var url = "mongodb://localhost:27017/";


app.post('/', (req, res) =>{

    mongo.connect(url, function(err, db){
        if(err) throw err;
        var dbName = db.db("back_end");

        var item = {
            name: req.body.name,
            email: req.body.email
        };

        dbName.collection("tests").insertOne(item, (err, res)=> {
            if(err) throw err;
            else console.log("Add One");
            db.close();
        });
    });
});

app.use(express.static('./'))

app.get("/", (req, res)=> {
    res.send("Connected");
});

app.listen(3003, ()=> {
    console.log("yesssss");
});
