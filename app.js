const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/wikiDB",{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

const articleSchema = new mongoose.Schema({
  title:String,
  content:String
});

const Article = mongoose.model("Article",articleSchema);

app.get("/article",function(req,res){
  Article.find(function(err,foundArticles){
    if(err){
      res.send(err);
    }else{
      res.send(foundArticles);
    }
  });
});


app.post("/article",function(req,res){
  const newArticle = new Article({
    title:req.body.title,
    content:req.body.content
  });
  newArticle.save(function(err){
    if(err){
      res.send(err);
    }else{
      res.send("Successfully posted the data");
    }
  });
});


app.delete("/article",function(req,res){
  Article.deleteMany(function(err){
    if(err){
      res.send(err);
    }else{
      res.send("Successfully deleted all the data");
    }
  });
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
