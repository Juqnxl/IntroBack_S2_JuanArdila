class Animal {
constructor(nombre) {
this.nombre = nombre;
}

hacerSonido() {
console.log(`${this.nombre} hizo un sonido`);
}

}
class Perro extends Animal {
constructor(nombre, raza) {

    
super(nombre);
this.raza = raza;
}

hacerSonido() {
console.log(`${this.nombre} ladra guau`);
}

}
const jE1 = new Perro("Cacaguate", "Husky");
jE1.hacerSonido();
