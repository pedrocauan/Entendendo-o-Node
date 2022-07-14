const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const Sequelize = require("sequelize")

/* 

    
*/


//Hanblebar é um renderizador de templates.

//Config
    //Template engine
        /*== Resolve o B.O do handlebars == */
        const exphbs  = require('express-handlebars');
        let handle = exphbs.create({
        defaultLayout: 'main'
        });

        app.engine("handlebars", handle.engine) //template padrao
        app.set("viewengine", "handlebars")

    // Conexão com a database 
    const sequelize = new Sequelize("handler", "philia", "1234", {
        host: "localhost",
        dialect: "mysql"
    })

app.listen(8082, function(){
    console.log("Rodou o servidor")
})