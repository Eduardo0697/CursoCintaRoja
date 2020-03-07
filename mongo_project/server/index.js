const express = require('express')
const mongoose = require('mongoose')
const abogados = require('../server/controllers/abogados')

const app = express()

const URL_MONGO = 'mongodb+srv://sa:<password>@cluster0-14rri.mongodb.net/test?retryWrites=true&w=majority';
app.use(express.json())
app.use('/abogados', abogados);

app.get('/', (req,res) => {
    res.send('Bienvenido')
});

app.listen(3000, console.log('Server on'));