const express = require("express")
const app = express() //app roda o  os comandos do express
//============================
//   CODIGO AQUI EM BAIXO
//============================
app.get("/", function(req, res){
    res.send("Seja, bem vindo ao meu app")
})

app.get("/sobre", function(req, res){
    res.send("<h1>sobre</h1>")
})

app.get("/blog", function(req, res){
    res.send("<h1>Bem vindo ao meu blog</h1>")
})

//=============================
//Porta que vai ouvir, mensagem que vai aparecer no log do servidor
app.listen(8081, function(){
    console.log("localhost:8081")
})


