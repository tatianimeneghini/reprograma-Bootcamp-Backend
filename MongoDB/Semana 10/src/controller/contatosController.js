const contatosCollection = require("../model/contatoSchema")

//contato.id = Math.random().toString(36).substr(-8)

const getAll = (request, response) => {
  console.log(request.url)
  contatosCollection.find((error, contatos) => {
    if (error) {
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })
};

const add = (request, response) => {
  let contatoDoBody = request.body
  let contato = new contatosCollection(contatoDoBody)
  //New é uma função construtura e retorna um novo objeto.
  contato.save((error) => {
    if (error) {
      return response.status(400).send(error)
    } else {
      return response.status(201).send(contato)
    }
  })
};

const getByName = (request, response) => {
  const nomeParam = request.params.nome
  const regex = new RegExp(nomeParam, "i") //RegExp é o regex do JavaScript.
  const filtro = { nome: regex }
  contatosCollection.filter(filtro, (error, contatos) => {
    //O primeiro é um filtro em forma de objeto.
    if (error) {
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })
};

const getById = (request, response) => {
  const idParam = request.params.id
  contatosCollection.findById(idParam, (error, contato) => {
    if (error) {
      return response.status(500).send("Usuário não cadastrado!")
    } else {
      //if(contato !== null && contato !== undefined)
      if (contato) {
        return response.status(200).send(contato)
      } else {
        return response.status(404).send("Usuário não encontrado. Tente outra vez!")
      }
    }
  })
};

const deleteById = (request, response) => {
  const idParam = request.params.id
  contatosCollection.findByIdAndDelete(idParam, (error, contato) => {
    //Existe o .deleteMany() e o .deleteOne() por ordem.
    if (error) {
      return response.status(500).send(error)
    } else {
      if (contato) {
        return response.status(200).send(contato + " foi excluído!")
      } else {
        return response.sendStatus(404)
      }
    }
  })
}

const updateById = (request, response) => {
  const idParam = request.params.id
  const contatoDoBody = request.body
  const options = { new: true}
  contatosCollection.findByIdAndUpdate(idParam, contatoDoBody, options, (error, contato) => {
  //Option mostra atualizado para o usuário.
    if (error) {
      return response.status(500).send(error)
    } else {
      if (contato) {
        //return response.sendStatus(204).send("Foi atualizado!").
        return response.status(200).send(contato + " foi atualizado")
      } else {
        return response.sendStatus(404)
      }
    }
  })
};

module.exports = {
  getAll,
  add,
  getByName,
  getById,
  deleteById,
  updateById
}