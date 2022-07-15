const express = require("express")
const app = express()
const bodyParse = require("body-parser")

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
        res.send(`Titulo: ${req.body.title}</br>Texto: ${req.body.content}`)
    })

app.listen(8082, function(){
    console.log("Rodou o servidor")
})