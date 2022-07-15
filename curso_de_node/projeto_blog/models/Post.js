const db = require("./db")

//Cria tabela de Postagens
const Post = db.sequelize.define("posts", {
    //Campos da tabela
    title:{
        type: db.Sequelize.STRING
    },

    content: {
        type:db.Sequelize.TEXT
    }
})

