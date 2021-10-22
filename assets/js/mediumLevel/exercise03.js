//Array
//lista vacia
let people = [];
//lista de datos

let animal = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];

/**
 * Posiciones  0      1          2        3        4          5
 * ANIMALES "Perro","Gato","Serpiente","Lobo","Escorpion","Conejo"
 * Item        1       2         3        4         5         6
 */

// console.log(people);
// console.log(animal);

//for (let i = 0; i < animal.length; i++) {
//    console.log(animal[i]);
//}

//forin
// for (const an in animal) {
//    console.log(animal[an]);
// }

// animal.forEach((an) => {
//   console.log(an);
// });

// animal[6]="Dragon"; // agrega un item  nuevo al array si conocemos el valor de la posicion
// animal[6]="Cocodrilo"; // agrega un item nuevo al array pero puede sobreescribir el valor

animal.push("Ardilla"); // añade un item al final del array sin saber la posicion

animal.unshift("Tigre"); // añade un item al inicio del array
delete animal[5]; // No usar delete ya que elimina el item pero no la posicion en el array osea que queda el espacio en memoria undefined
animal.splice(5,1); // elimina la posicion 5 y luego va la cantidad de elementos despues del la posicion 5 que se quiere eliminar es decir que borra la cantidad de posiciones despues de la posicion 5, si no se coloca un segundo parametro borra todo de esa posicion en adelante

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}

// animal.forEach((an) => {
//        console.log(an);
//      });
