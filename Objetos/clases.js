class Auto{
    constructor(llantas, motor, frenos, modelo){
        this.llantas = llantas;
        this.motor = motor;
        this.frenos = frenos;
        this.modelo = modelo;
    }

    //Metodos
    arrancar(){
        return 'Arrancando';
    }

    acelerar(nivelDeAcelerado){
        if(nivelDeAcelerado === 1)
            return '20KM/H'

        if(nivelDeAcelerado === 2)
            return '40KM/H'

        if(nivelDeAcelerado === 3){
            if(this.modelo === '64'){
                return 'Exploto';
            }
            return '60KM/H';
        }
            
    }

    getMotor(){
        return this.motor;
    }

    setMotor(motor){
        this.motor = motor;
    }
}

class Perro{
    constructor(nombre,patas,color,ojos,tamano,estaVivo){
        this.nombre=nombre;
        this.patas=patas;
        this.color=color;
        this.ojos=ojos;
        this.tamano=tamano;
        this.estaVivo=estaVivo;
    }

    ladrar(){
        console.log('Ladrando');
    }

    comer(alimento){
        if(alimento == 'carne'){
            return 'Yummy!';
        }
        return 'Ladrido';
    }
}

var bocho = new Auto(4,'V4','abs','64');
var chevy = new Auto(4,'V4','abs','90');

console.log(bocho.arrancar());
console.log(bocho.acelerar(3));
console.log(chevy.acelerar(2));

var ayudanteDeSanta = new Perro('Ayudante de Santa',4,'cafe',2,'grande',true);
var snoopy = new Perro('Snoopy',4,'blanco',2,'pequeño',true);

console.log(ayudanteDeSanta);
console.log(snoopy);

console.log(snoopy.comer('carne'));