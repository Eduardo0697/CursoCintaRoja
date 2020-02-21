const Largometraje = require('./Largometraje');

class PartidoFutbol extends Largometraje{
    constructor(equipo1,equipo2,precio,horariosAudencia,nombre){
        super(precio,horariosAudencia,nombre);
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
    }
}

module.exports = PartidoFutbol;