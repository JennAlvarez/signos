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
btnGeminis.addEventListener("click", mostrarModalGeminis);
btnCancer.addEventListener("click", mostrarModalCancer);
btnLeo.addEventListener("click", mostrarModalLeo);
btnVirgo.addEventListener("click", mostrarModalVirgo);
btnLibra.addEventListener("click", mostrarModalLibra);
btnEscorpio.addEventListener("click", mostrarModalEscorpio);
btnSagitario.addEventListener("click", mostrarModalSagitario);

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
function mostrarModalGeminis() {
  modalSignos.show();
  modalTitulo.innerHTML = "GEMINIS";
  modalDescripcion.innerHTML =
    "Carácter doble, complejo y contradictorio es lo que mejor define a un Géminis . Al contrario que los Aries, los Géminis empiezan con entusiasmo nuevas aventuras, pero tienden a aburrirse rápido por la falta de constancia. Son personas cariñosas, amables y generosas , aunque tienen algo de mentirosos si quieren obtener algo. Eso sí, sin perder el encanto. Suelen ser personas que se desaniman con facilidad ante las dificultades, por lo que necesitan escuchar halagos y recibir atención. Inteligencia y capacidad para aprender la tienen, aunque suelen aburrirse en el proceso de aprendizaje.";
}
function mostrarModalCancer() {
  modalSignos.show();
  modalTitulo.innerHTML = "CANCER";
  modalDescripcion.innerHTML =
    "Son personas complicadas de clasificar, si se atiende a su carácter. Los hay tímidos y aburridos , pero también brillantes y famosos . De hecho, algunos presentan una alta capacidad literaria y artística, gracias a su capacidad imaginativa. Les encanta ser extrovertidos, pero también tienen tendencia a retraerse. El hogar es lo más importante para ellos, por la seguridad y el calor que encuentran en él.";
}
function mostrarModalLeo() {
  modalSignos.show();
  modalTitulo.innerHTML = "LEO";
  modalDescripcion.innerHTML =
    "Es el signo más dominante del Zodiaco. Es creativo y extrovertido. Tienen ambición, fuerza, valentía y seguridad en sus capacidades. No temen a los obstáculos y suelen ser buenos, idealistas e inteligentes. Para los Leo , el lujo y el poder están entre sus gustos. Asimismo, son capaces de utilizar trucos y mentiras para desacreditar a sus enemigos. A veces, también pueden caer en la superioridad y la prepotencia.";
}
function mostrarModalVirgo() {
  modalSignos.show();
  modalTitulo.innerHTML = "VIRGO";
  modalDescripcion.innerHTML =
    "Único signo zodiacal representado por una mujer . Los Virgo son observadores, pacientes y les cuesta hacer amigos por su carácter frío que muestran a veces. A pesar de ello tienen encanto y suelen ayudar a los demás cuando se presenta un problema. El método, el estudio y la lógica predominan en ellos, por eso les gusta aprender siempre, así como tener un análisis de la situación. Tanto se paran a pensar que a veces pueden retrasar la conclusión de los proyectos más complicados que llevan a cabo. Son intuitivos y capaces de ver todos los lados de un argumento.";
}
function mostrarModalLibra() {
  modalSignos.show();
  modalTitulo.innerHTML = "LIBRA";
  modalDescripcion.innerHTML =
    "El signo del Zodiaco más civilizado . Tienen encanto, elegancia, buen gusto y son amables y pacíficos, por lo que no es raro que ante conflictos sean imparciales y muestren su rechazo a ellos. Valoran el esfuerzo de los demás y les gusta trabajar en equipo. El lado negativo de Libra es que de lo curiosos que son a veces se entrometen en la vida de los demás . Están en contra de la rutina, y una vez que tengan una opinión de algo no les gusta que se les contradiga.";
}
function mostrarModalEscorpio() {
  modalSignos.show();
  modalTitulo.innerHTML = "ESCORPIO";
  modalDescripcion.innerHTML =
    "Es una persona tranquila que parece alejada de la realidad, aunque nunca dejan de observar todo a su alrededor con el ojo crítico. Tienen mucha fuerza de voluntad y muestran tenacidad , pero también les afecta al estado de ánimo las circunstancias que les rodean. Suelen ser críticos y esto les lleva, a veces, a ser algo resentidos con los demás. Sin embargo son excelentes amigos de aquellos a los que consideran que merecen su respeto.";
}
function mostrarModalSagitario() {
  modalSignos.show();
  modalTitulo.innerHTML = "SAGITARIO";
  modalDescripcion.innerHTML =
    "Es una persona tranquila que parece alejada de la realidad, aunque nunca dejan de observar todo a su alrededor con el ojo crítico. Tienen mucha fuerza de voluntad y muestran tenacidad , pero también les afecta al estado de ánimo las circunstancias que les rodean. Suelen ser críticos y esto les lleva, a veces, a ser algo resentidos con los demás. Sin embargo son excelentes amigos de aquellos a los que consideran que merecen su respeto.";
}

