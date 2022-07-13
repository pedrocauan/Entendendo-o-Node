//sempre reiniciar o servidor quando fazer a alteração
const http = require("http")

http.createServer(function(req, res){
    res.end("<h1>Hello, world! welcome to my website</h1>")
}).listen(8081)

console.log("servidor rodando")