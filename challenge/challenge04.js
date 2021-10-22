// 4 - ingresar uno de los 32 departamentos de colombia  en un prompt
// y decir cual es su respectiva capital en un alert de respuesta

let department = prompt("Ingrese uno de los 32 departamentos de colombia");
options();
function options() {
  if (department == null || department == "") {
    return alert("Error en el momento de ingresar alguno de los datos");
  }
  department = department.toLowerCase()
  if (department == "amazonas") {
    return alert("leticia");
  }
  if (department == "antioquia") {
    return alert("medellin");
  }
  if (department == "arauca") {
    return alert("arauca");
  }
  if (department == "atlantico") {
    return alert("barranquilla");
  }
  if (department == "bolivar") {
    return alert("cartagena");
  }
  if (department == "boyaca") {
    return alert("tunja");
  }
  if (department == "caldas") {
    return alert("manizales");
  }
  if (department == "caqueta") {
    return alert("florencia");
  }
  if (department == "casanare") {
    return alert("yopal");
  }
  if (department == "cauca") {
    return alert("popayan");
  }
  if (department == "cesar") {
    return alert("valledupar");
  }
  if (department == "choco") {
    return alert("quibdo");
  }
  if (department == "cordoba") {
    return alert("monteria");
  }
  if (department == "cundinamarca") {
    return alert("bogota");
  }
  if (department == "guainia") {
    return alert("inirida");
  }
  if (department == "guaviare") {
    return alert("san jose del guaviare");
  }
  if (department == "huila") {
    return alert("neiva");
  }
  if (department == "la guajira") {
    return alert("riohacha");
  }
  if (department == "magdalena") {
    return alert("santa marta");
  }
  if (department == "meta") {
    return alert("villavicencio");
  }
  if (department == "nariño") {
    return alert("pasto");
  }
  if (department == "norte de santander") {
    return alert("cucuta");
  }
  if (department == "putumayo") {
    return alert("mocoa");
  }
  if (department == "quindio") {
    return alert("armenia");
  }
  if (department == "risaralda") {
    return alert("pereira");
  }
  if (department == "san andres y providencia") {
    return alert("san andres");
  }
  if (department == "santander") {
    return alert("bucaramanga");
  }
  if (department == "sucre") {
    return alert("sincelejo");
  }
  if (department == "tolima") {
    return alert("ibague");
  }
  if (department == "valle del cauca") {
    return alert("cali");
  }
  if (department == "vaupes") {
    return alert("mitu");
  }
  if (department == "vichada") {
    return alert("puerto carreño");
  } else {
    alert(
      "Por favor ingrese un departamento de colombia para saber su capital"
    );
  }
}
