//localStorage

// Variables globales

const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

//funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    welcome.innerHTML = "Bienvenido/a : "+ userName;
    localStorage.setItem("name",userName);
}

if (localStorage.getItem("name")) {
    welcome.innerHTML = "Bienvenido/a : "+ localStorage.getItem("name");
}

//evento
btnUser.onclick = () =>{
    userData();
}