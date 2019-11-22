const mongoose = require("mongoose")//extrair a lib mongoose
//DB_URL é nossa string de conexão
const DB_URL = "mongodb://localhost:27017/reprograma"//Porta do MongoDB padrão é 27017

//Cria a conexão com o Banco de Dados.
const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true}) //Chama a constante para conectar na URL
    //E o parâmetro obrigatório do connect.
    const connection = mongoose.connection
    connection.on("error", () => console.log("Erro ao conectar no mongo"))
    //On quando acontece o evento "error" repetidas vezes, próprio do Mongoose.
    connection.once("open", () => console.log("Conectamos no mongo"))
    //Once quando acontece um evento uma vez, próprio do Mongoose.
}

module.exports = {connect}