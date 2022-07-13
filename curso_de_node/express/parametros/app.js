const express = require("express")
const app = express() //app roda o  os comandos do express
//======================================================
//              CODIGO AQUI EM BAIXO
//=====================================================

/*=== NUNCA ENVIE MAIS DE UMA RESPOSTA ===*/
/*== ERRO: Cannot set headers after they are sent to the client ==*/

app.get("/", function(req, res){
    res.send("Bem vindo ao blog")
})

app.get("/sobre", function(req, res){
    res.send("<h1>sobre</h1>")
})

app.get("/blog", function(req, res){
    res.send("<h1>Bem vindo ao meu blog</h1>")
})

// === PARAMETRO ===

// Quando um parametro é adicionado em uma rota, é obrigatório que esse parametro seja adicionado 
// route/:params -> adiciona parametro na rota
app.get("/blog/video/:titulo", function(req,res ){
    res.send(`<h1>Video:${req.params.titulo}</h1>`)
})


//Nunca esqueça de colocar a barra no inicio da rota


//Quando o usuario envia parametros, ele envia esses dados através de uma requisicao http para o servidor do nodejs
app.get("/blog/:categoria/:sessao", function(req, res){
    res.send(`<h1>Categoria: ${req.params.categoria}</h1><h3>Sessao: ${req.params.sessao}`)
    
})


//=================================================================
//Porta que vai ouvir, mensagem que vai aparecer no log do servidor
app.listen(8081, function(){
    console.log("localhost:8081")
})