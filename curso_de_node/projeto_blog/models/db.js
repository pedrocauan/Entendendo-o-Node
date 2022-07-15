const Sequelize = require("sequelize")

//Conexão com o a database
                                 /*db*/   /*user*/  /*pass*/
const sequelize = new Sequelize("postapp", "philia", "1234", {
    host: "localhost", /*Lugar que vai tar hospedado*/
    dialect: "mysql" /*tipo de banco de dados*/
})

//Da acesso da db ao arquivi Post.js
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}