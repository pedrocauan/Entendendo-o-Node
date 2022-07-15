const express = require("express")
const app = express()
const Sequelize = require("sequelize")

//Hanblebar é um renderizador de templates.

    // Conexão com a database 
    const sequelize = new Sequelize("handler", "philia", "1234", {
        host: "localhost",
        dialect: "mysql"
    })

// Rotas
    //Formulário de cadastro 
    app.get("/cad", function(req, res) {
        //Dirname = diretorio absoluto (pasta q ta o app.js)
        const form = `${__dirname}/html/form.html`
        res.sendFile(form)
    })

    app.post("/add", function(req,res){
        res.send("Dados recebidos com sucesso")
    })

app.listen(8082, function(){
    console.log("Rodou o servidor")
})