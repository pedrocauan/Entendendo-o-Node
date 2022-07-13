// -  O express.js é um framework
// - Um framework é uma super biblioteca que contém varias ferramentas
// - não usar palavras reservadas

//Pega o express (importa biblioteca)
const express = require("express")
// Iniciando o express e passando ela pro app
const app = express()


// REQ => Dados enviados pelo usuario
// RES => resposta que será devolvida para o usuario

//Cria rota. A rota existe mas não faz nada. EM TODA A ROTA criada é necessário devolver uma resposta.
app.get("/", function(req, res) {
    res.send('Eai garai kkk')
    // res.send("<p>Olá</p>") //não enviar uma resposta mais de uma vez
})


// o ? define o parametro como não obrigatório
app.get("/blog/:artigo?", function(req, res) {
    const artigo = req.params.artigo

    //se o artigo existe mostra ele
    if(artigo)
        res.send(`<h1>Artigo ${artigo}</h1>`)
    //Se o artigo nao existe nao mostra
    if(!artigo)
        res.send(`<h1>Artigo Inexistente</h1>`)

})


//Passa o parametro por valores: ex domio/channel="pedrin12"
app.get("/canal/youtube", function(req,res) {
    //Canal  que vai ser passado pelo user ex: canal="pedrinhogameplay"
    const canal = req.query["canal"]
    //
    if(canal)
        res.send(`<h1>${canal}</h1>`)
    if(!canal)
        res.send("Nenhum Canal Fornecido")
    })  

//:nome define o parametro da rota
app.get("/ola/:nome/:empresa", function(req, res){
    //Req.params pega os parametros da requisição
    const nome = req.params.nome
    const empresa = req.params.empresa
    res.send(`<h1>Oi ${nome} do {empresa}</h1>`)
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