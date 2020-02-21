const Largometraje = require('./Largometraje');

class Documental extends Largometraje{
    constructor(duracion,precio,horariosAudencia,nombre){
        super(precio,horariosAudencia,nombre);
        this.duracion = duracion;
    }
}

module.exports = Documental;