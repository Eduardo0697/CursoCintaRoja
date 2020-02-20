class Animal{
    constructor(legs, color, eyes, name){
        this.legs = legs;
        this.color = color;
        this.eyes = eyes;
        this.name = name;
        this.tail = true;
    }

    getName(){
        return this.name;
    }
}

module.exports = Animal;