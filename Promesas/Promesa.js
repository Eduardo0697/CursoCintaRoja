//Promesa recibe un callback
//Promise(callbackFunction)

const miPrimeraPromesa = (numero) => {
    return new Promise((resolve, reject)=>{
        if (numero > 5){
            resolve('Si paso');
        }else{
            reject('No paso');
        }
    });
}

//then y catch recibe un callback tambien
miPrimeraPromesa(7)
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })