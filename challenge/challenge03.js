// 3 - Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)
const view = document.getElementById("view");
let word = prompt(
  "Ingrese alguna de las siguientes palabras \n casa \n mesa \n perro \n gato"
).toLowerCase();

switch (word) {
  case "casa":
    view.innerHTML = "house";
    break;
  case "mesa":
    view.innerHTML = "table";
    break;
  case "perro":
    view.innerHTML = "dog";
    break;
  case "gato":
    view.innerHTML = "cat";
    break;

  default:
    alert("Ingrese una de las palabras anteriormente mencionadas");
    break;
}
