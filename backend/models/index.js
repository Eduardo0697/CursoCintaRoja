//Se encargara de realizar una cadena de conexion

const mongose = require('mongoose')

const User = require('./User')
const Perro = require('./Perro')

//const URL_MONGO = '';

const URL_MONGO = 'mongodb+srv://sa1:qwerty1234@cluster0-14rri.mongodb.net/test?retryWrites=true&w=majority';

mongose.connect(URL_MONGO, { useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(!err) console.log('Conexion exitosa')
    else console.log(err)
});

module.exports = {
    User,
    Perro
}