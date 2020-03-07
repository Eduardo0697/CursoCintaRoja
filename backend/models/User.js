const mongoose = require('mongoose')

const schemaUser = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido : {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        enum: ['M', 'H', 'SN']  //Con este decimos que solo se puede escribir alguna de estas opciones
    }
});

//model(comoSeLlamaraModelo, Schema)
const User = mongoose.model('user', schemaUser);

module.exports = User;

