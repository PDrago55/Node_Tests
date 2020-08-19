"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("express");
const app = express();

app.use(express.json());
//-----allows us to process our data-----//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//------------end points---------//
const test = [];
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
