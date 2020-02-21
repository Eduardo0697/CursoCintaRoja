/* Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones	 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antigüedad" que guarda un valor numérico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico. */

   class Maestro{
       constructor(nombre,materia,calificacionesAlumnos){
            this.nombre=nombre;
            this.materia = materia;
            this.calificacionesAlumnos = calificacionesAlumnos;
            this.promedioGrupo = this.calcularPromedioGrupo();
       }

       calcularPromedioGrupo(){
           var suma=0;
           for(var i=0; i<this.calificacionesAlumnos.length; i++){
                suma = suma + this.calificacionesAlumnos[i];
           }
           return suma/this.calificacionesAlumnos.length;
       }
   }

   class MaestroFisica extends Maestro{
    constructor(nombre,calificaciones,antiguedad){
        super(nombre,'Fisica',calificaciones);
        this.antiguedad = antiguedad;
    }
   }

   class MaestroMusica extends Maestro{
    constructor(nombre,calificaciones,edad){
        super(nombre,'Musica',calificaciones);
        this.edad = edad;
    }
   }

   var calificacionesMusica =  [8,9,8,9,10];
   var maestroMusica = new MaestroMusica('Mozart',calificacionesMusica,35);

   console.log(maestroMusica);

   console.log(maestroMusica.calcularPromedioGrupo());


   var calificacionesFisica =  [6,7,5,7,7];
   var maestroFisica = new MaestroFisica('Einstein',calificacionesFisica,40);

   console.log(maestroFisica);

   console.log(maestroFisica.calcularPromedioGrupo());


   /* 2.Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un metodo que regresa los metros 
       cuadrados
    c. Un metodo debe regresar la direccion
    d. Un metodo debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia
    */

    class Construction{
        constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
            this.numPuertas=numPuertas;
            this.numVentanas=numVentanas;
            this.numPisos = numPisos;
            this.direccion = direccion;
            this.altura = altura;
            this.largo = largo;
            this.ancho = ancho;
        }
    }

    class Casa extends Construction{

    }

    class Edificio  extends Construction{

    }

    /* 3.
    Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol. Crear los getters y setters
    correspondientes. */

    class Bebida {
        constructor(cantidad){
            this.cantidad=cantidad;
        }

        getCantidad(){
            return this.cantidad;
        }
        setCantidad(cantidad){
            this.cantidad=cantidad;
        }
    }

    class Cerveza extends Bebida{
        constructor(porcentajeAlcohol,cantidad){
            super(this.cantidad);
            this.porcentajeAlcohol=porcentajeAlcohol;
        }

        getPorcentajeAlcohol(){
            return this.porcentajeAlcohol;
        }

        setPorcentajeAlcohol(porcentajeAlcohol){
            this.porcentajeAlcohol=porcentajeAlcohol;
        }
    }

    class Refresco extends Bebida{
        constructor(azucar,cantidad){
            super(this.cantidad);
            this.azucar=azucar;
        }

        getAzucar(){
            return this.azucar;
        }

        setAzucar(azucar){
            this.azucar=azucar;
        }
    }


/*
4.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100
     */

class Electrodoméstico{
    constructor(precio,color,capacidad){
        this.precio=precio;
        this.color=color;
        this.capacidad=capacidad;
        this.consumoEnergetico = 100;
    }
}

/**
 * 5.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
 */

 class Lavadora extends Electrodoméstico{
     constructor(carga,precio,color,capacidad){
         super(precio,color,capacidad);
         this.carga=carga;
     }

     precioFinal(){
         return this.consumoEnergetico*this.carga;
     }
 }