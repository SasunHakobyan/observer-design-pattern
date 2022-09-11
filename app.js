require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');

const Observable = require("./observable");
const Observer = require("./observer");

const saveToJson = require("./save-methods/saveToJson");
const saveToMongo = require("./save-methods/saveToMongo");
const saveToSql = require("./save-methods/saveToSql");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home');
});

app.post('/', (req,res) => {
    const observable = new Observable(req.body.userName, req.body.price);
    const jsonObserver = new Observer(saveToJson);
    const mongoObserver = new Observer(saveToMongo);
    const postgreServer = new Observer(saveToSql);

    observable.addObserver(jsonObserver);
    observable.addObserver(mongoObserver);
    observable.addObserver(postgreServer);
    observable.saveData();

    res.redirect("/");
});

app.listen(process.env.PORT, () => {
    console.log("Listening on PORT:"+process.env.PORT);
});