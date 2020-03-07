const express = require('express')
const router = express.Router();
const {Abogados} = require('../models/abogados');

//Pruebas de .GET
router.get('/saludo', (req, res) => {
    res.send('Saludo');
})

module.exports = router