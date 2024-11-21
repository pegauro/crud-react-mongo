const {Router} = require("express")
const usuario = require("../models/UserModel")

const router = Router()

router.get("/test", (req,res) => res.send('testando a rota!'))

router.get("/", (req,res) => {
    usuario.find()
    .then(users => res.json(users))
    .catch(e => res.status(404).json({error: "Nenhum usuario encontrado!"}))
})

router.post("/", (req,res) => {
    usuario.create(req.body)
    .then(user => res.json({msg: "usuario adicionado!"}))
    .catch(e => res.status(404).json({error: "Impossivel adicionar usuario!"}))
})

router.put("/:id", (req,res) => {
    usuario.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({msg: "usuario atualizado"}))
    .catch(e => res.status(404).json({error: "Nenuhm usuario com esse id!"}))
})

router.delete("/:id", (req, res) => {
    usuario.findByIdAndDelete(req.params.id)
    .then(user => res.json({msg: "usuario deleteado com sucesso"}))
    .catch(e => res.status(404).json({error: "Nenhum usuario com esse id"}))
})

module.exports = router;