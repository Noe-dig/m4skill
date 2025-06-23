const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welkom op de express api");
});
app.get("/contact", (req, res) => {
    res.send("Info = {name:'Bob Ross',email:asdf@aol.com,phone:'0118-999-881-999-119-725-3'}");
});
app.get("/random", (req, res) => {
    res.send(Math.ceil(Math.random()*9));
});
app.get("/echo/:word", (req, res) => {
    res.send(req);
});
app.get("/cat", (req, res) => {
    res.send("cat.png");
});
app.get("/dog", (req, res) => {
    res.send("dog.png");
});
app.get("/about", (req, res) => {
    res.send("index.html");
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});