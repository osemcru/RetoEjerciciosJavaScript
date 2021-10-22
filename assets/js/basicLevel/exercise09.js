//DOM (Document Object Model)
//traemos el boton al que queremos darle click
const btnUser = document.getElementById("btnUser");

const userData = () =>{
    alert("Bienvenidos");
}

//Evento Click

btnUser.onclick = function () {
    userData();
    
}