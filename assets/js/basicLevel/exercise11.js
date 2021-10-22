//Condicionales
const btnUser = document.getElementById("btnUser");
const netflix = () => {
  let userName = prompt("Ingresa tu nombre");
  let age = prompt("Ingresa tu edad");
  let epilepsia = prompt(
    "Sufres ataques de epilepsia \n Responde : \n Si \n No"
  );
  //epilepsia = epilepsia.toLowerCase(); //toUpperCase() para mayusculas
  //userName = userName.toLowerCase();

  //1 - validaciones (mayusculas y minusculas) (si el dato no coincide)
  //2 - tipos de datos
  //validamos nulos
  if (
    userName == null ||
    userName == "" ||
    age == null ||
    age == "" ||
    epilepsia == null ||
    epilepsia == ""
  ) {
    return alert("Error en el momento de ingresar alguno de los datos");
  }
  epilepsia = epilepsia.toLowerCase();
  userName = userName.toLowerCase();
  //se valida edad y epilepsia
  if (age >= 18 && epilepsia == "no") {
    alert("Tienes permiso al catalogo de peliculas violentas");
  } else {
    if (epilepsia == "si" || epilepsia == "no") {
      alert("No tienes permiso para ver este catalogo");
    } else {
      alert("Favor ingresar en epilepsia solo Si o No");
    }
  }

  if (age <= 10) {
    alert("Desbloqueaste la seccion junior");
  }
  //o que se llame juan o que tenga 100 años
  if (age == 100 || userName == "juan") {
    alert("Recuerda que no tienes que pagar subscripcion");
  }
};

//evento
btnUser.onclick = () => {
  netflix();
};

/**
 * > Mayor  (numeros)
 * >= Mayor o igual (numericos)
 * < Menor (numericos)
 * <= Menor o igual (numericos)
 * == Igual (todo)
 * === (tipo de dato y valor)
 *  != Diferente( todo valor)
 *  !== Diferente( tipo de dato y valor)
 *
 * Logicos
 *
 * && - y
 * || - o
 */
