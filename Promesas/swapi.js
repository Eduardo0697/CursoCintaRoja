const request = require('request');

function getPeopleById(idPeople){
    return new Promise((resolve, reject) => {
        request.get(`https://swapi.co/api/people/${idPeople}`, (err, response, body) =>{          
            if(response.statusCode === 200){
                const json = JSON.parse(body);
                resolve(json);
            } else{
                reject('Error en tu peticion');
            }
        });
    });
}

function getMovieByUrl(urlMovie){
    return new Promise((resolve, reject) => {
        request.get(urlMovie, (err, response, body) => {
            if(response.statusCode === 200){
                const json = JSON.parse(body);
                resolve(json);
            } else{
                reject('Error en tu peticion peliculas');
            }
        });
    });
  
}
/*
getPeopleById(20)
    .then((jsonResponse) => {
        console.log(jsonResponse.name);
        //return jsonResponse.title;
    })
    .catch((error) => {
        console.log(error);
    });

getMovieByUrl('https://swapi.co/api/films/2/')
    .then((jsonResponse) => {
        console.log(jsonResponse.title);
    })
    .catch((error) => {
        console.log(error);
    });
*/

getPeopleById(20)
    .then((people) => {
        console.log(people.name);
        //console.log(people.films[0]);
        return getMovieByUrl(people.films[0]);
    })
    .then((movie) => { 
        console.log(movie.title);
    })
    .catch((error) => {
        console.log(error);
    });

getPeopleById(20)
    .then(people =>   getMovieByUrl(people.films[0]))
    .then(movie  =>   console.log(movie.title))
    .catch(error =>  console.log(error));


    

