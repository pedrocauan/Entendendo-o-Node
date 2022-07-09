// -  O express.js é um framework
// - Um framework é uma super biblioteca que contém varias ferramentas
// - não usar palavras reservadas

//Pega o express (importa biblioteca)
const express = require("express")
// Iniciando o express e passando ela pro app
const app = express()


//Cria rota. A rota existe mas não faz nada. EM TODA A ROTA criada é necessário devolver uma resposta.
app.get("/", function(req, res) {
    res.send("<h1>Olá, Amigo<h1>")
    // res.send("<p>Olá</p>") //não enviar uma resposta mais de uma vez
})

app.get("/blog", function(req, res) {
    res.send("Bem vindo ao blog")
})

app.get("/canal/youtube", function(req,res) {
    res.send("Bem vindo ao meu canal!")
})

//Inicia servidor
app.listen(8181,function(err){
    if(err)
        console.log("Ocorreu um erro")
    else
        console.log("Servidor iniciado com sucesso")


    // const error = (e) => e? true: false /*Ve se deu erro*/
    // if(!error(err))
    //     console.log("Foi")
})