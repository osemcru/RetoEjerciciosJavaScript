// Variables globales

const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

//funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    welcome.innerHTML = "Bienvenido/a : "+ userName;
}


//evento
btnUser.onclick = () =>{
    userData();
}