const axios = require("axios");
/*
axios
    .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(res => console.log(res.data.name))
    .catch(err => console.error(err));

*/

//const calificacion = 10;

const regalo = (calificacion) =>{
    return new Promise((resolve, reject) => {
        if(calificacion === 10) resolve('Te ganaste un iphone')
        else reject('Te quedaste con tu Nokia')
    })
} 
/*
regalo(9)
    .then(tel => console.log(tel))
    .catch(err => console.log(err));
*/

// json.types.forEach(element => console.log(element.type.name));

/*
axios
    .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //.then(res => console.log(res.data.abilities))
    .then(res => {
        res.data.abilities.forEach( element => console.log(element.ability.name))
    })
    .catch(err => console.error(err));

*/
 axios
    .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(res => res.data.abilities)
    .then(abilities => abilities.forEach( element => console.log(element.ability.name)))
    .catch(err => console.error(err));

//https://swapi.co/api/people/20


axios
    .get(`https://swapi.co/api/people/20`)
    .then(res => res.data.films)
    .then(films => axios.get(films[0]))
    .then(res => console.log(res.data.title))
    .catch(err => console.error(err));

