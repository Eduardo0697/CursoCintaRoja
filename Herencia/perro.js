const Animal = require('./animales');

class Perro extends Animal{
    constructor(raza,dueno,color,name){
        super(4,color,2,name);
        this.raza = raza;
        this.dueno = dueno;
        this.sonido = 'Wuau';
    }

    ladrar(){
        return 'Wuau Wuau';
    }
}

module.exports = Perro;