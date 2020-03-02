const request = require('request');

function createAuthor(name, last_name, nationality, gender, age, biography){
    const json ={
        name : name,
        last_name : last_name,
        nacionalidad : nationality,
        gender : gender,
        age : age,
        biography : biography,
        is_alive : false
    }

    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    request.post({ url : URL, form : json}, (err,response,body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);
    });
}

//createAuthor('USER2', 'LASTNAME', 'MX', 'M', 34, 'Biography........');

const updateAuthorByID = (id, json) =>{
    
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`;
    request.patch({ url : URL, form : json}, (err,response,body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);
    });
}

const json ={
    age : 50,
    is_alive : true
}

//updateAuthorByID(3971, json);

const getAuthorById = (id) =>{
    request.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`,(err,response,body) =>{
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);
    });
 }
// getAuthorById(3971);

/**
 * SWAPI
 * Hacer una función que pida como parametros el idPeople y me devuelva el nombre y el titulo de la primera
 * pelicula
 */

 const getNameAndTitleById = (idPeople) =>{
    request.get(`https://swapi.co/api/people/${idPeople}`,(err,response,body) =>{
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json.name);
        //console.log(json.films[0]);

        request.get(json.films[0], (err,response,body) => {
            const json = JSON.parse(body);
            console.log(json.title);
           // console.log();
        });
    });
 }

 //getNameAndTitleById(1);

 // crear modificar obtener borrar obtener

 const createModifyGetDeleteAuthor =(name, last_name, nationality, gender, age, biography) => {
    const jsonAuthor ={
        name : name,
        last_name : last_name,
        nacionalidad : nationality,
        gender : gender,
        age : age,
        biography : biography,
        is_alive : false
    }

    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    request.post({ url : URL, form : jsonAuthor}, (err,response,body) => {
        console.log('CREANDO....');
        //console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);

        const jsonModifier ={
            age : 50,
            is_alive : true
        }
        const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${json.id}/`;
        request.patch({ url : URL, form : jsonModifier}, (err,response,body) => {
            console.log('MODIFICANDO...')
            console.log(response.statusCode);
            const json = JSON.parse(body);
            console.log(json);

            request.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${json.id}`, (err, response, body) =>{
                console.log('OBTENIENDO...')
                console.log(response.statusCode);
                const json = JSON.parse(body);
                console.log(json);
                request.delete(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${json.id}`, (err, response, body) =>{
                    console.log('Eliminando...')
                    console.log(response.statusCode);
                    request.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${json.id}`, (err, response, body) =>{
                        console.log('Obteniendo...')
                        console.log(response.statusCode);
                        const json = JSON.parse(body);
                        console.log(json);
                    });
                });
            });
        });
    });
}

createModifyGetDeleteAuthor('USER3', 'LASTNAME', 'MX', 'M', 34, 'Biography........');