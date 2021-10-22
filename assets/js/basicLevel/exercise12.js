let userName = prompt("Ingresa tu nombre");
let age = prompt("Ingresa tu edad");

switch (age) {
  case "18":
    alert("Tienes permiso al catalogo de peliculas violentas");
    break;

  default:
    alert("No tienes permiso para ver este catalogo");
    break;
}
