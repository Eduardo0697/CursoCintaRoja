var myPenguin = {
    character : 'Pokey the penguin',
    origin : 'Pokey the penguin',
    autor : 'Steve Havelka',
    notes : ''
}

console.log('Hola, soy un pinguino y mi nombre es: '+ myPenguin.character);

myPenguin.puedeVolar = false;

console.log(myPenguin.puedeVolar)

myPenguin.graznar = function(){
    return 'Kaww kaww';
}
console.log(myPenguin.graznar());

myPenguin.saludar = function(){
    return 'Hola, soy un pinguino y mi nombre es: '+this.character;
}

console.log(myPenguin.saludar());

myPenguin.character='Señor Pingu';
console.log(myPenguin.saludar());

myPenguin.volar = function(){
    if(this.puedeVolar){
        return 'Puedo Volar!';
    }
    return 'No puedo volar :(';
}

console.log(myPenguin.volar());
myPenguin.puedeVolar = true;
console.log(myPenguin.volar());

var receta = {
    title = 'Mole',
    portions = 4,
    ingredients = ['canela','comino','cocoa']
}