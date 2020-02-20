console.log('Hola');

//Ciclos 1
for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

for (let i = 1000; i >= 1; i--) {
    console.log(i);
}

let resultado =0;
for (let i = 1; i <= 10; i++) {
    resultado += i;
}
console.log(resultado);

//Ciclos 2

let calificaciones = [8,9,7,8,9,10];
let suma = 0;
for (let i = 0; i < calificaciones.length ; i++) {
    suma += calificaciones[i];
}
let promedio = suma / calificaciones.length;
console.log(promedio);


for (let i = 0; i <= 1000; i++) {
    if( i%2 == 0){
        console.log(i);
    }
}

//ciclos 3

let nombres = ['Luis','Carlos','Andres','Javier','Jose'];
for (let i = 0; i < nombres.length ; i++) {
    console.log(nombres[i]);
}


//Ejercicios arreglos

//let palabra = prompt('palabra');

let nombres2 = ["Germán", "Daniel", "Melissa", "Marco", "Elias", "James", "Leslie"];

for (let i = 0; i < nombres2.length ; i++) {

    if(nombres2[i].length <= 3){
        console.log(nombres2[i] + nombres2[i].length +' letras' + ' Nombre Corto');

    }else if(nombres2[i].length > 3 && nombres2[i].length < 8 ){
        console.log(nombres2[i] + nombres2[i].length +' letras' + ' Nombre Medio');
    }else{
        console.log(nombres2[i] + nombres2[i].length +' letras' + ' Nombre Largo');
    }
}


//Funciones

function conversionEdadPerroHumano(edadPerro){
    console.log('tu perro tiene '+ edadPerro*7+ ' años');
}

conversionEdadPerroHumano(2);