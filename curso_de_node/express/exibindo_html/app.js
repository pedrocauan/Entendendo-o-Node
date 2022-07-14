const express = require("express")
const app = express() //app roda o  os comandos do express
//======================================================
//              CODIGO AQUI EM BAIXO
//=====================================================

app.get("/", function(req, res){
    //__dirname retorna o diretório absoluto da aplicação (LUGAR ONDE ESTE ARQUIVO ESTÁ)

    const local = `${__dirname}/html/index.html` //Local do arquivo
    res.sendFile(local)

    // == Outras formas de mandar  um HTML para a página == 
    /* res.sendFile(__dirname + "/html" +  "/index.html")*/
    /* res.sendFile(`${__dirname}/html/index.html`)*/
})

app.get("/sobre", function(req, res){
    res.send("<h1>sobre</h1>")
})

app.get("/blog", function(req, res){
    res.send("<h1>Bem vindo ao meu blog</h1>")
})


app.get("/blog/video/:titulo", function(req,res ){
    res.send(`<h1>Video:${req.params.titulo}</h1>`)
})


//Nunca esqueça de colocar a barra no inicio da rota
app.get("/blog/:categoria/:sessao", function(req, res){
    res.send(`<h1>Categoria: ${req.params.categoria}</h1><h3>Sessao: ${req.params.sessao}`)
    
})


//=================================================================
//Porta que vai ouvir, mensagem que vai aparecer no log do servidor
app.listen(8081, function(){
    console.log("localhost:8081")
})


/*====================================*/
/*        CAMINHO ABSOLUTO
/*====================================*/
/*------------------------------------------------------------------
- Um caminho absoluto ou completo aponta para a mesma localização 
em um sistema de arquivos,independentemente do diretório de trabalho atual. 
Para fazer isso, é necessário incluir o diretório 
raiz.
*--------------------------------------------------------------------*/
// variavel com o diretório raiz -> __dirname
// No caso deste arquivo a raíz é o diretorio exibindo_html

/* ----------------------------------------------------------------- */
// Caminho absoluto -> pasta raíz