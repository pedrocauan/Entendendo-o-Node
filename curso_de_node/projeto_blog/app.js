const express = require("express")
const app = express()
const bodyParse = require("body-parser") //Pega  o POST do formulario
const modelPost = require("./models/Post") //Acessa database


//Config
    // bodyParser
    app.use(bodyParse.urlencoded({extended: false}))
    app.use(bodyParse.json())
    // estilo no css
    app.use(express.static(`${__dirname}/public`))

// Rotas
    //Dirname = diretorio absoluto (pasta q ta o app.js)
    app.get("/", function(req,res) {
        const indexHTML = `${__dirname}/html/index.html`
        modelPost.findAll().then(function(posts){
            res.sendFile(indexHTML)
        })    
    })


    //Formulário de cadastro 
    app.get("/cad", function(req, res) {
        const formHTML = `${__dirname}/html/form.html`
        res.sendFile(formHTML)
    })

    app.post("/add", function(req,res){
        //Cria Postagem no banco de dados
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(function(){
            //Manda de volta pra pagina principal caso o post tenha sido feito
            res.redirect("/")
        }).catch(function(err) {
            console.log(`Erro na postagem ${err}`)
        })
    })
    //=== SESSÃO DE POSTAGENS DO SITE ===

    

    app.get("/posts", function(req,res){
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Posts</title>
        </head>
        <body>
            <h1>Lista de postagens: </h1>
            <p></p>
            <div>
                <a href="/">Voltar</a>
            </div>
        </body>
        </html>
        `)
    })

app.listen(8082, function(){
    console.log(`Rodou o servidor`)
})