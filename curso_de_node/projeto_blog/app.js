const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const Post = require("./models/Post")

//Config
    // bodyParser
    app.use(bodyParse.urlencoded({extended: false}))
    app.use(bodyParse.json())

// Rotas
    //Formulário de cadastro 
    app.get("/cad", function(req, res) {
        //Dirname = diretorio absoluto (pasta q ta o app.js)
        const form = `${__dirname}/html/form.html`
        res.sendFile(form)
    })

    app.post("/add", function(req,res){
        //Cria Postagem no banco de dados
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(function(){
            console.log("Postagem feita")
        }).catch(function(err) {
            console.log(`Erro na postagem ${err}`)
        })

        //Resposta pro usuarios
        res.send("Postagem feita")

    })

app.listen(8082, function(){
    console.log(`Rodou o servidor`)
})