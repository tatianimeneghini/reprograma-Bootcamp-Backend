const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/create", bodyParser.json(), controller.add)
router.get("/nome/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.delete("/delete/:id", controller.deleteById) //A rota delete deixa explícita.
router.patch("/update/:id", bodyParser.json(), controller.updateById)

module.exports = router