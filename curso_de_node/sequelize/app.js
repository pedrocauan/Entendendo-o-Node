const express = require("express")
const res = require("express/lib/response")
const app = express()

app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao site</h1>")
})

app.get("/sobre", function(req,res) {
    res.send("<h1>sobre</h1>")
})

app.get("/blog", function(){
    res.send("<h1>blog</h1>")
})
