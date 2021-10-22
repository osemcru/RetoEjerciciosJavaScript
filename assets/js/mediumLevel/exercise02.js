//Ciclo For

const btnUser = document.getElementById("btnUser");

//funcion

const spam = () =>{
    for (let i = 0; i < 5; i++) {
      //  console.log("Repeticion #",i);
      window.open("https://www.bing.com/images/search?q=Imagen+Kawaii&form=IRIBIP&first=1&tsc=ImageHoverTitle");
        
    }
}

//Evento
btnUser.onclick = () => {
    spam();
}