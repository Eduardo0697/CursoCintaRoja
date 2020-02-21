class Cine{
    constructor(nombre){
        this.nombre = nombre;

    }

    reproducir(largometraje){
        return 'Reproduciendo: ' + largometraje.getNombre();
    }
}

module.exports = Cine;