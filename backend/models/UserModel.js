const mongoose = require("mongoose")

const usuario = new mongoose.Schema(
    {
       nome: String,
       email: String,
       senha: String,
       tipo: String
    });

module.exports = mongoose.model("usuario", usuario);