//Fechas
let registerDate = new Date();
//Sacamos el año
let year = registerDate.getFullYear();
// Que en el codigo inicia desde cero
// 0 enero, 1 febrero ....
let month = registerDate.getMonth() + 1;

let day = registerDate.getDate();

let hour = registerDate.getHours();
let minutes = registerDate.getMinutes();
let seconds = registerDate.getSeconds();

console.log(`${day}/${month}/${year}`);
console.log(`${hour}:${minutes}:${seconds}`);