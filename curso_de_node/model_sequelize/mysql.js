//O sequelize é uma biblioteca que serve pra criar tabelas no banco de dados.

const Sequelize = require("sequelize") //Importa sequelize
//                             /*==   Database ==*/  /*user*/  /*password*/
const sequelize = new Sequelize("sistemadecadastro", "philia", "1234", {
    host: "localhost",/*lugar que ta o servidor*/
    dialect: "mysql", /* tipo do banco de dados*/
})

//Cria  o model na tabela (cria a tabela no banco de dados)
const Postagem = sequelize.define("postagens", {
    //Campos da tabela
    titulo:{
        type: Sequelize.STRING //String tem um limite de tamanho 

    },
    conteudo: {
        type: Sequelize.TEXT //texto é ilimitado
    },


})

Postagem.create({
    titulo: "POSTAGEM 2",
    conteudo: "POSTAGEM NUMERO 2"
})

//Sincroniza o model com o mysql
//Postagem.sync({force:true}/*da a certeza que a tabela vai ser gerada*/)

const Usuario = sequelize.define("usuarios", {
    name: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


Usuario.create({
    name: "Pedrinho",
    sobrenome: "Do caralho",
    idade: 8,
    email: "pedrinho@gmail.com"
})
// == SEMPRE APAGAR OU COMENTAR O  .sync({force:true}) PARA QUE ELE NÃO APAGUE A TABELA ==
/*Usuario.sync({force:true})*/





/* === RESULTADO NO TERMINAL == */

// == Significa que criou a tabela ===
/*
Executing (default): DROP TABLE IF EXISTS `postagens`;
Executing (default): CREATE TABLE IF NOT EXISTS `postagens` (`id` INTEGER NOT NULL auto_increment ,
 `titulo` VARCHAR(255), `conteudo` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, 
 PRIMARY KEY (`id`)) ENGINE=InnoDB;
*/
