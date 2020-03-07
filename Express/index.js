const express = require('express');
const body_parser = require('body-parser')
const request = require('request')
const app = express();
const PORT = 3000;

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

app.get('/', (request, response) => {
    response.send({ message : 'Bienvenido a mi API'});
    console.log(response.statusCode);
});

app.get('/home', (request, response) => {
     response.send({ message : 'Bienvenido a home'});
     console.log(response.statusCode);
 });

 app.get( '/search', (req, res) => {
    console.log(req.query);
    const {q, color, vidas} = req.query;
    res.send({q, color, vidas})
 });

 app.get("/user/:id", (req, res, next) => {
    //console.log(req.params);
    const id = req.params.id;
    res.send({ message : `EL user id es: ${id}`});
    next();
 }, function(req, res, next) {
    console.log('Request', req.method);
    next();
 })

 app.get('/api/', (request, response) => {
    response.send({ message : 'Hola mundo'});
    console.log(response.statusCode);
});

app.get('/api/resta', (req, res)=> {
    const {num1, num2} = req.query;
    const resultado = (parseInt(num1) - parseInt(num2));
    res.status(200).send({resultado});
})

app.get('/api/suma', (req, res)=> {
    const {num1, num2} = req.query;
    const resultado = (parseInt(num1) + parseInt(num2));
    //es.send({'resultdo' : resultado})
    res.status(200).send({ 'res' : resultado});
})

/**
 * 3.- Agrega un endpoint '/api/usuario/' que responda a
        una petición de tipo GET con el nombre que sea
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {'usuario': 'Edwin'}
 */

app.get('/api/usuario/:nombre', (req, res)=> {
    const usuario = req.params.nombre;
    res.status(200).send({ 'usuario' : usuario});
})
/**
 * 4.- Agrega un endpoint '/api/swapi' que responda a una
        petición de tipo GET con el personaje solicitado de
                        https://swapi.co/
        El cliente debe mandar el número de personaje mediante
        params. La respuesta del servidor debe lucir algo así
                    {'personaje': {
                        'name': 'Luke Skywalker',
                        ...,
                    }}
 */
app.get('/api/swapi/:personaje', (req, res)=> {
    const {personaje} = req.params;
    request.get(`https://swapi.co/api/people/${personaje}`, (err, response, body)=>{
        const json = JSON.parse(body);
        res.status(200).send({ 'personaje' : json});
    });
    //res.status(200).send({ 'personaje' : json});
})

app.listen(PORT, () => console.log(`Server on ${PORT} `));