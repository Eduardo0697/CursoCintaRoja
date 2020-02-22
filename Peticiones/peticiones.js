const request = require('request');

//request.get('URL','CALLBACK');
/*
request.get('https://swapi.co/api/people/20',(err,response,body) =>{
    console.log(err);
    console.log(response.statusCode);
    //console.log(body);
    const json = JSON.parse(body);
    console.log(json.name);
});
*/
function getPeopleById(id){
    var people;
    request.get(`https://swapi.co/api/people/${id}`,(err,response,body) =>{
        const json = JSON.parse(body);
        if(response == 404){
            console.log('No existe');
        }
        else{
            console.log(json.name);
        }
        
    });
 }

 getPeopleById(1);

 //https://swapi.co/api/films/6/

 function getFilmById(id){
    var people;
    request.get(`https://swapi.co/api/films/${id}`,(err,response,body) =>{
        const json = JSON.parse(body);
        if(response == 404){
            console.log('No existe');
        }
        else{
            console.log(json.title);
        }
        
    });
 }

 getFilmById(6);