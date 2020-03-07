const mongoose = require('mongoose')

const schemaPerro = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    raza : {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum: ['pequeño', 'mediano', 'grande']  //Con este decimos que solo se puede escribir alguna de estas opciones
    }
});

//model(comoSeLlamaraModelo, Schema)
const Perro = mongoose.model('Perro', schemaPerro);

module.exports = Perro;

