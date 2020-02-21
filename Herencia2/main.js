const Documental = require('./Documental');
const Pelicula = require('./Pelicula');
const Cine = require('./Cine');
const PartidoFutbol = require('./PartidoFutbol');

var documental1 = new Documental(115,40,['14:30','16:00'],'Tierra');
var pelicula1 = new Pelicula('C',40,['14:30','16:00'],'Parasitos');
var partido1 = new PartidoFutbol('Toluca','Santos',45,'14:30','Toluca vs Santos');
var cinepolis = new Cine('Toreo');

console.log(documental1);
console.log(pelicula1);
console.log(partido1);

console.log(cinepolis.reproducir(documental1));
console.log(cinepolis.reproducir(pelicula1));
console.log(cinepolis.reproducir(partido1));
