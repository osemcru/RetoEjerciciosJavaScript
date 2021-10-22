//Variables globales
const btnUser = document.getElementById("btnUser");

//  Funciones
const userData = () => {
  let userName = prompt("Ingresa tu nombre");
  let age = prompt("Ingresa tu edad");
  alert("Bienvenido/a " + userName + " tu edad es: " + age);
  alert(`Bienvenido/a ${userName} tu edad es: ${age}`); //Extrapolacion sirve para no concatenar solo identificar variables
};

//Eventos
//No hacer codigo dentro de los eventos ni en las promesas solo llamamos el metodo

btnUser.onclick = function () {
  userData();
};
