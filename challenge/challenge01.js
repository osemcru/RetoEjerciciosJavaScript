// <!-- 1 - // Guardar los siguientes datos del usuario
// /**
//  * Nombre:
//  * Apellido:
//  * Edad:
//  * Telefono:
//  * Celular:
//  * Dirección:
//  */

// y hacer que se guarden en local storage y aparezcan de nuevo cada que la página se refresque -->

const view = document.getElementById("view");
const question = document.getElementById("question");

const saveData = () => {
  let userName = prompt("Ingrese su nombre");
  let lastName = prompt("Ingrese sus apellidos");
  let age = prompt("Ingrese su edad");
  let phone = prompt("Ingrese su telefono");
  let cellphone = prompt("Ingrese su celular");
  let address = prompt("Ingrese su direccion");
  if (userName == null || userName == "" || lastName == null || lastName == "" || age == null || age == "" || phone == null || phone == "" || cellphone == null || cellphone == "" || address == null || address == "") {
    return alert("Error en el momento de ingresar alguno de los datos");
  }
  view.innerHTML = `${userName} ${lastName} ${age} ${phone} ${cellphone} ${address}`;
  localStorage.setItem("name", userName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("age", age);
  localStorage.setItem("phone", phone);
  localStorage.setItem("cellphone", cellphone);
  localStorage.setItem("address", address);
};

view.innerHTML = `${localStorage.getItem("name")} ${localStorage.getItem(
  "lastName"
)} ${localStorage.getItem("age")} ${localStorage.getItem(
  "phone"
)} ${localStorage.getItem("cellphone")} ${localStorage.getItem("address")}`;

question.onclick = () => {
  saveData();
};
