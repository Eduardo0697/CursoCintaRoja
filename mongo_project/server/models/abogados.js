const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const abogadoSchema = new Schema({
    nombre: String,
    casosExitosos: Number,
    areaLaboral: String,
    img_url: String
});

const Abogados = mongoose.model("Abogados", abogadoSchema);

module.exports = {Abogados}