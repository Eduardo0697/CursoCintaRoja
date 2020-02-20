var ayudanteDeSanta = {
    nombre : 'Ayudante de santa',
    patas : 4,
    color : 'cafe',
    ojos : 2,
    tamanio : 'grande',
    estaVivo : true
}

var snoopy = {
    nombre : 'Snoopy',
    patas : 4,
    color : 'blanco y negro',
    ojos : 2,
    tamanio : 'chico',
    estaVivo : true,
    ladrar: function(){
        //console.log('ladrando');
        return 'Ladrando';
    },
    comer: function(comida){
        if(comida == 'carne'){
            return 'Yummy!';
        }
        return 'Ladrido';
        
    }
}
//console.log(ayudanteDeSanta.nombre);
//console.log(snoopy.ladrar());

console.log(snoopy.comer('carne'));