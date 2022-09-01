//variables
const modalSignos = new bootstrap.Modal(document.getElementById("modalSignos"));
const btnAries = document.getElementById("btnAries");
let modalTitulo = document.getElementById("modalTitulo");
let modalDescripcion = document.getElementById("modalDescripcion");

//eventos
btnAries.addEventListener("click", mostrarModal);

function mostrarModal() {
  modalSignos.show();
  mostrarDatos();
}
function mostrarDatos() {
  modalTitulo.innerHTML = "ARIES";
  modalDescripcion.innerHTML =
    "Son personas llenas de energía y entusiasmo por la vida. Aventureros por naturaleza, les encantan los retos, la libertad y las nuevas ideas, por lo que nunca tienen miedo a los comienzos o nuevas etapas. Son líderes y prefieren dar órdenes a recibirlas. La energía que emana de ellos les lleva a ser algo agresivos, tercos e inquietos. Si te cruzas con alguno de ellos ten cuidado de no ofenderlos, ya que pueden sentirse así de forma muy fácil. Es complicado hacer las paces con ellos. Aries es el primer signo del Zodiaco, de ahí que sean líderes y les guste empezar nuevos retos. Siempre lucharán si creen que la causa merece la pena.";
}
