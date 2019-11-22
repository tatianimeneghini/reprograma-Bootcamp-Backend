//Schema estrutura os tipos de dados e pode criar uma validação para o Banco de Dados.
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ContatoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //Tipo dos dados: Number, Object, String.
        auto: true, //É autogerado?
        required: true //É obrigatório?
    },
    nome: {
        type: String,
        required: true,
        unique: true //É único?
    },
    celular: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    fotoPerfil: {
        type: String, //A URL da foto
        required: false
    }
})

ContatosCollection = mongoose.model("contato", ContatoSchema)
//Representação da Collection no Banco de Dados.
module.exports = ContatosCollection