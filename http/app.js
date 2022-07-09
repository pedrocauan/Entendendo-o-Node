const http = require("http")

// Toda aplicação feita com o http é feita com uma requisição e uma resposta
// Usuario -> req -> res

//http.createServer()  /*Cria servidor*/

//http.createServer().listen(8080) /*Porta que o servidor vai rodar*/



/*http.createServer(function(req, res){
    req -> variavel que guarda requisição
    res -> variavel que guarda a resposta
    end -> resposta para o usuario
}).listen()*/

http.createServer(function(req, res){
    res.end("<h1>Resp: bem vindo ao site</h1>")
}).listen(3000)