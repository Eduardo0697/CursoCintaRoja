const request = require('request');

function createAuthor(name, last_name, nationality, gender, age, biography){
    return new Promise((resolve, reject) => {
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
            if(response.statusCode === 201){
                const json = JSON.parse(body);
                resolve(json);
            }else{
                reject('Error en la creacion de un autor');
            }
        });
    });
}

function updateAuthorById(id, json){
    return new Promise((resolve, reject) => {
        const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`;
        request.patch({ url : URL, form : json}, (err,response,body) => {
            if(response.statusCode === 200){
                const json = JSON.parse(body);
                resolve(json);
            }else{
                reject('Error al actualizar el autor');
            }
        });
    });

}

function getAuthorById(id){
    return new Promise((resolve, reject) => {
        request.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`,(err,response,body) =>{
            if(response.statusCode === 200){
                const json = JSON.parse(body);
                resolve(json);
            }else{
                reject('Error al obtener informacion del autor');
            }
        });
    });
}

function deleteAuthorById(id){
    return new Promise((resolve, reject) => {
        request.delete(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`,(err,response,body) =>{
            if(response.statusCode === 204){
                resolve('Eliminado Correctamente');
            }else{
                reject('Error al eliminar autor');
            }
        });
    });
}

 // crear modificar obtener borrar obtener
/*
 createAuthor('USER2', 'LASTNAME', 'MX', 'M', 34, 'Biography........')
    .then( authorCreated => { 
        const json = { is_alive : true }
        console.log(authorCreated);
        return updateAuthorById(authorCreated.id, json)
    })
    .then( authorModified => {
        console.log(authorModified);
        return getAuthorById(authorModified.id)
    })
    .then( authorInfo => {
        console.log(authorInfo)
        deleteAuthorById(authorInfo.id)
        return authorInfo.id
    })
    .then( id => {
        console.log(id);
        return getAuthorById(id)
    })
    .then ( author => console.log(author))
    .catch( error => console.log(error)); */
 

    createAuthor('USER2', 'LASTNAME', 'MX', 'M', 35, 'Biography........')
    .then( author => { 
        const json = { is_alive : true }
        return updateAuthorById(author.id, json)
    })
    .then( authorModified => getAuthorById(authorModified.id))
    .then(async author => {
        await deleteAuthorById(author.id)
        return author.id
    })
    .then( id =>  getAuthorById(id))
    .then ( author => console.log(author))
    .catch( error => console.log(error));

    /*
    getAuthorById(4015)
        .then( authorJson => console.log(authorJson))
        .catch( error => console.log(error)); */