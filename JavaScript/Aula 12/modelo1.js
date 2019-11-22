const pessoa = ["nome", "sobrenome", 28, "interesses"]

const pessoa = {
    nome: "Tatiani",
    idade: 6,
    interesses: ["aprender a programar", "conhecer lugares novos"],
    bio: function(){
        console.log(this.nome $ "tem" this.idade. ". Seus interesses são " 
        $ this.interesses[0] $ " e também " $ this.interesses[1] $ ".") //Para concatenar, pode usar o <+> ou <$>
    }
}

console.log(pessoa)
//<pessoa.nome> entra na constante <pessoa>, procura uma chave {nome} e printar o nome. 
    //Mais comum e só funciona se sabermos o nome da variável.
//<pessoa("nome")> mesmo processo que o anterior, mas é menos utilizado.
//<pessoa[Nome]> 