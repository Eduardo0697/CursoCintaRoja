//24/02

//Hacer una función que pida el nombre del pokemon, se conecte a la pokeapi 
//y me imprima el nombre y su o sus tipos.

const request = require('request');

function getPokemonByName(pokemonName){
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,(err,response,body) =>{
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json.forms[0].name);
        //console.log(json.types.length);
        /*
        for(var i=0;i<json.types.length;i++){
            console.log(json.types[i].type.name);
        }
        */
        //console.log('foreach');
        json.types.forEach(element => console.log(element.type.name));
    });
 }

 //getPokemonByName('bulbasaur');

 //getPokemonByName('pikachu');

//* Hacer una funcion que haga una peticion
//(Ejemplo: peticionLibro("i robot");http://openlibrary.org/search.json?q=i+robot) 
//buscar un libro y traer el o los autores del primer libro


function peiticionLibro(title){
    title = title.replace(/\s/g,"+");
    //console.log(title);
    request.get(`http://openlibrary.org/search.json?q=/${title}/`,(err,response,body) =>{
        //console.log(err);
        //console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json.docs[0].title);
        console.log('Authors');
        json.docs[0].author_name.forEach(element => console.log(element));

    });
 }

 //peiticionLibro('I robot');


 //* Hacer una petición por autor y devolver la lista de sus 
//libros (http://openlibrary.org/search.json?author=asimov)

function getLibrosPorAutor(author){
    author = author.replace(/\s/g,"+");
    //console.log(title);
    request.get(`http://openlibrary.org/search.json?author=${author}`,(err,response,body) =>{
        //console.log(err);
        //console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log()
        console.log(`----Libros de ${author}`);
        json.docs.forEach(element => console.log(element.title));

    });
 }

// getLibrosPorAutor('Woody Allen');


//* Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) 
//y devolver el género de la banda deseada

function getGenderBand(band){
    band = band.replace(/\s/g,"+");
    //console.log(title);
    request.get(`http://www.theaudiodb.com/api/v1/json/1/search.php?s=${band}`,(err,response,body) =>{
        //console.log(err);
        //console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(band);
        console.log(json.artists[0].strGenre);
        

    });
 }
 //getGenderBand('muse');



 //Traer los primeros 151 pokemon de la primera generacion 
 //y devolver un objeto con el nombre, sus moves, tipos, tamaño y peso


 function getFirstGenerationPokemon(number){
    var firstGeneration = [];
    var pokemon = {};
    for(var j=1;j<=number;j++){
       
        request.get(`https://pokeapi.co/api/v2/pokemon/${j}`,(err,response,body) =>{
            //console.log(err);
            //console.log(response.statusCode);
            const json = JSON.parse(body);
            pokemon.id = json.id;
            pokemon.name = json.forms[0].name;
            pokemon.moves = json.moves;
            for(var i =0; i< json.moves.length; i++){
                pokemon.moves[i].move = json.moves[i].move.name;
            }
            pokemon.types = json.types;
            for(var i =0; i< json.types.length; i++){
                pokemon.types[i].type = json.types[i].type.name;
            }
            pokemon.weight = json.weight;
            pokemon.height = json.height;

            firstGeneration[j-1] = pokemon;

            //console.log(pokemon)
            console.log(firstGeneration[j-1]);
           
        });
    }
 }

 getFirstGenerationPokemon(2);


 //json["key"]

 //Object.keys()


