const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = requiree("ejs");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true});

mongoose.connect("mongodb://localhost:27017/wikiDB",{
  useNewUrlParser:true,
  UseUnifiedTopology:true
});

const articleSchema = new mongoose.Schema({
  title:String,
  content:String
});

const Article = mongoose.model("Article",articleSchema);

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
