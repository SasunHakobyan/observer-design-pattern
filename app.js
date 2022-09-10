const express = require("express");
const bodyParser = require('body-parser');

const Observable = require("./observable");
const Observer = require("./observer");

const saveToJson = require("./save-methods/saveToJson");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home');
});

app.post('/', (req,res) => {
    const observable = new Observable(req.body.userName, req.body.price);
    const observer1 = new Observer(saveToJson);

    observable.addObserver(observer1);
    observable.saveData();

    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Listening");
});