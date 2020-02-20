const Animal = require('./animales');

class Gato extends Animal{
    constructor(noVidas, isKaren,color,name){
        super(4,color,2,name);
        this.bigotes = true;
        this.noVidas = noVidas;
        this.isKaren = isKaren;
    }

    maullar(){
        return 'Miau';
    }
}

module.exports = Gato;