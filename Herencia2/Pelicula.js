const Largometraje = require('./Largometraje');

class Pelicula extends Largometraje{
    constructor(clasificacion,precio,horariosAudencia,nombre){
        super(precio,horariosAudencia,nombre);
        this.clasificacion = clasificacion;
    }
}

module.exports = Pelicula;