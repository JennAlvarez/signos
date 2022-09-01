//variables
const modalSignos = new bootstrap.Modal(document.getElementById("modalSignos"));
const btnAries = document.getElementById("btnAries");
const btnTauro = document.getElementById("btnTauro");
const btnGeminis = document.getElementById("btnGeminis");
const btnCancer = document.getElementById("btnCancer");
const btnLeo = document.getElementById("btnLeo");
const btnVirgo = document.getElementById("btnVirgo");
const btnLibra = document.getElementById("btnLibra");
const btnEscorpio = document.getElementById("btnEscorpio");
const btnSagitario = document.getElementById("btnSagitario");
const btnCapricornio = document.getElementById("btnCapricornio");
const btnAcuario = document.getElementById("btnAcuario");
const btnPiscis = document.getElementById("btnPiscis");
let modalTitulo = document.getElementById("modalTitulo");
let modalDescripcion = document.getElementById("modalDescripcion");

//eventos
btnAries.addEventListener("click", mostrarModalAries);
btnTauro.addEventListener("click", mostrarModalTauro);

function mostrarModalAries() {
  modalSignos.show();
  modalTitulo.innerHTML = "ARIES";
  modalDescripcion.innerHTML =
    "Son personas llenas de energía y entusiasmo por la vida. Aventureros por naturaleza, les encantan los retos, la libertad y las nuevas ideas, por lo que nunca tienen miedo a los comienzos o nuevas etapas. Son líderes y prefieren dar órdenes a recibirlas. La energía que emana de ellos les lleva a ser algo agresivos, tercos e inquietos. Si te cruzas con alguno de ellos ten cuidado de no ofenderlos, ya que pueden sentirse así de forma muy fácil. Es complicado hacer las paces con ellos. Aries es el primer signo del Zodiaco, de ahí que sean líderes y les guste empezar nuevos retos. Siempre lucharán si creen que la causa merece la pena.";
}
function mostrarModalTauro() {
  modalSignos.show();
  modalTitulo.innerHTML = "TAURO";
  modalDescripcion.innerHTML =
    "Es una persona que tiene una gran fuerza de voluntad, es práctico y decidido en la toma de decisiones. Suelen ser personas estables y conservadoras y no dudan en seguir a un líder si les despierta confianza. Son gente de paz, por lo que lo normal es que respeten las leyes y normas. El hecho de que tengan entusiasmo por la rutina y la continuidad hace que sean algo tozudos y de ideas fijas. No suelen hundirse en las dificultades y siempre salen adelante. Amantes de la buena comida, bebida y distintos placeres de la vida deben tener cuidado con los excesos.";
}

