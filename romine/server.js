const path = require("path");
const cors = require("cors");
const express = require("express");
//const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("server is running");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/main.html"));
});

app.get("/download", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/download.html"))
});