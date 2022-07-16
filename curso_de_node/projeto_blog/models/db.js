const Sequelize = require("sequelize")

//Conexão com o a database
                                 /*db*/   /*user*/  /*pass*/
const sequelize = new Sequelize("postapp", "philia", "1234", {
    host: "localhost", /*Lugar que vai tar hospedado*/
    dialect: "mysql" /*tipo de banco de dados*/
})

//Ve se ele se conectou na database
/*sequelize.authenticate().then(function() {
    console.log("Database Conectada")
}).catch(function(err) {
    console.log(`Falha ao se conectar na database ${err}`)
})*/

//Da acesso da db ao arquivo Post.js
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
