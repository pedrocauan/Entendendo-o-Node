const Sequelize =  require("sequelize") 

//conecta com o banco de dados
const sequelize = new Sequelize("nexiste", "philia", "1234", {
    host:"localhost",
    dialect: "mysql"
})

/*authenticate -> retorna SUCESSO ou FALHA. Caso a conexão seja feita com sucesso, ele executa a funçã then,
 caso ocorra alguma falha, ele chama a função catch */

 //Verifica se ele se conectou
sequelize.authenticate().then(function(){
    console.log("Conexão feita")
}).catch(function(err){
    console.log(`Fala ao se conectar: ${err}`)
})



/* authenticate -> SUCESS OR NOT SUCESS
   then -> é executado quando a conexão é SUCESS
   catch -> é executado quando a conexão é NOT SUCESS
*/