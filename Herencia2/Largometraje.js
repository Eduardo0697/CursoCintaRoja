class Largometraje{
    constructor(precio,horariosAudencia,nombre){
        this.precio = precio;
        this.horariosAudencia=horariosAudencia;
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }
}

module.exports = Largometraje;