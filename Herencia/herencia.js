const Perro = require('./perro');
const Gato = require('./gato');

var snoopy = new Perro('Beagle','Charlie','Blanco','Snoopy');
var garfield = new Gato('7',true,'Naranja','Garfield');
//var garfield = new Gato();

console.log(snoopy);
console.log(garfield);


console.log(snoopy.ladrar());
console.log(garfield.maullar());
console.log(snoopy.getName());
console.log(garfield.getName());