class Animal {
constructor(nombre) {
this.nombre = nombre;
}

hacerSonido() {
console.log(`${this.nombre} hizo un sonido`);
}
}

class Perro extends Animal {
constructor(nombre) {

    
super(nombre);
}

hacerSonido() {
console.log(`${this.nombre} ladra guau`);
}
}

class Gato extends Animal {
constructor(nombre) {
super(nombre);
}

hacerSonido() { 
console.log(`${this.nombre} maulla miau`);
}
}

let jE1 = new Perro("Destructor");
let jE2 = new Gato("Agapit");

jE1.hacerSonido();
jE2.hacerSonido();