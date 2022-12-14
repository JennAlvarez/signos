// import cantidadCaracteres from "./helpers.js";

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
let formBuscarSigno = document.getElementById("formBuscarSigno");
let btnBuscarSigno = document.getElementById("btnBuscarSigno");
let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let formBuscarElemento = document.getElementById("formBuscarElemento");
let buscarElemento = document.getElementById("btnBuscarElemento");


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
btnCapricornio.addEventListener("click", mostrarModalCapricornio);
btnAcuario.addEventListener("click", mostrarModalAcuario);
btnPiscis.addEventListener("click", mostrarModalPiscis);
formBuscarSigno.addEventListener("submit", BuscarSigno);
dia.addEventListener("blur",()=>{cantidadCaracteres(dia)});
mes.addEventListener("blur",()=>{cantidadCaracteres(mes)});
formBuscarElemento.addEventListener("submit", buscarElemento);



function mostrarModalAries() {
  modalSignos.show();
  modalTitulo.innerHTML = "ARIES";
  modalDescripcion.innerHTML =
    "Son personas llenas de energ??a y entusiasmo por la vida. Aventureros por naturaleza, les encantan los retos, la libertad y las nuevas ideas, por lo que nunca tienen miedo a los comienzos o nuevas etapas. Son l??deres y prefieren dar ??rdenes a recibirlas. La energ??a que emana de ellos les lleva a ser algo agresivos, tercos e inquietos. Si te cruzas con alguno de ellos ten cuidado de no ofenderlos, ya que pueden sentirse as?? de forma muy f??cil. Es complicado hacer las paces con ellos. Aries es el primer signo del Zodiaco, de ah?? que sean l??deres y les guste empezar nuevos retos. Siempre luchar??n si creen que la causa merece la pena.";
}
function mostrarModalTauro() {
  modalSignos.show();
  modalTitulo.innerHTML = "TAURO";
  modalDescripcion.innerHTML =
    "Es una persona que tiene una gran fuerza de voluntad, es pr??ctico y decidido en la toma de decisiones. Suelen ser personas estables y conservadoras y no dudan en seguir a un l??der si les despierta confianza. Son gente de paz, por lo que lo normal es que respeten las leyes y normas. El hecho de que tengan entusiasmo por la rutina y la continuidad hace que sean algo tozudos y de ideas fijas. No suelen hundirse en las dificultades y siempre salen adelante. Amantes de la buena comida, bebida y distintos placeres de la vida deben tener cuidado con los excesos.";
}
function mostrarModalGeminis() {
  modalSignos.show();
  modalTitulo.innerHTML = "GEMINIS";
  modalDescripcion.innerHTML =
    "Car??cter doble, complejo y contradictorio es lo que mejor define a un G??minis . Al contrario que los Aries, los G??minis empiezan con entusiasmo nuevas aventuras, pero tienden a aburrirse r??pido por la falta de constancia. Son personas cari??osas, amables y generosas , aunque tienen algo de mentirosos si quieren obtener algo. Eso s??, sin perder el encanto. Suelen ser personas que se desaniman con facilidad ante las dificultades, por lo que necesitan escuchar halagos y recibir atenci??n. Inteligencia y capacidad para aprender la tienen, aunque suelen aburrirse en el proceso de aprendizaje.";
}
function mostrarModalCancer() {
  modalSignos.show();
  modalTitulo.innerHTML = "CANCER";
  modalDescripcion.innerHTML =
    "Son personas complicadas de clasificar, si se atiende a su car??cter. Los hay t??midos y aburridos , pero tambi??n brillantes y famosos . De hecho, algunos presentan una alta capacidad literaria y art??stica, gracias a su capacidad imaginativa. Les encanta ser extrovertidos, pero tambi??n tienen tendencia a retraerse. El hogar es lo m??s importante para ellos, por la seguridad y el calor que encuentran en ??l.";
}
function mostrarModalLeo() {
  modalSignos.show();
  modalTitulo.innerHTML = "LEO";
  modalDescripcion.innerHTML =
    "Es el signo m??s dominante del Zodiaco. Es creativo y extrovertido. Tienen ambici??n, fuerza, valent??a y seguridad en sus capacidades. No temen a los obst??culos y suelen ser buenos, idealistas e inteligentes. Para los Leo , el lujo y el poder est??n entre sus gustos. Asimismo, son capaces de utilizar trucos y mentiras para desacreditar a sus enemigos. A veces, tambi??n pueden caer en la superioridad y la prepotencia.";
}
function mostrarModalVirgo() {
  modalSignos.show();
  modalTitulo.innerHTML = "VIRGO";
  modalDescripcion.innerHTML =
    "??nico signo zodiacal representado por una mujer . Los Virgo son observadores, pacientes y les cuesta hacer amigos por su car??cter fr??o que muestran a veces. A pesar de ello tienen encanto y suelen ayudar a los dem??s cuando se presenta un problema. El m??todo, el estudio y la l??gica predominan en ellos, por eso les gusta aprender siempre, as?? como tener un an??lisis de la situaci??n. Tanto se paran a pensar que a veces pueden retrasar la conclusi??n de los proyectos m??s complicados que llevan a cabo. Son intuitivos y capaces de ver todos los lados de un argumento.";
}
function mostrarModalLibra() {
  modalSignos.show();
  modalTitulo.innerHTML = "LIBRA";
  modalDescripcion.innerHTML =
    "El signo del Zodiaco m??s civilizado . Tienen encanto, elegancia, buen gusto y son amables y pac??ficos, por lo que no es raro que ante conflictos sean imparciales y muestren su rechazo a ellos. Valoran el esfuerzo de los dem??s y les gusta trabajar en equipo. El lado negativo de Libra es que de lo curiosos que son a veces se entrometen en la vida de los dem??s . Est??n en contra de la rutina, y una vez que tengan una opini??n de algo no les gusta que se les contradiga.";
}
function mostrarModalEscorpio() {
  modalSignos.show();
  modalTitulo.innerHTML = "ESCORPIO";
  modalDescripcion.innerHTML =
    "Es una persona tranquila que parece alejada de la realidad, aunque nunca dejan de observar todo a su alrededor con el ojo cr??tico. Tienen mucha fuerza de voluntad y muestran tenacidad , pero tambi??n les afecta al estado de ??nimo las circunstancias que les rodean. Suelen ser cr??ticos y esto les lleva, a veces, a ser algo resentidos con los dem??s. Sin embargo son excelentes amigos de aquellos a los que consideran que merecen su respeto.";
}
function mostrarModalSagitario() {
  modalSignos.show();
  modalTitulo.innerHTML = "SAGITARIO";
  modalDescripcion.innerHTML =
    "Es el signo m??s positivo de todo el Zodiaco . Cuando las cosas se ponen complicadas un Sagitario siempre sacar?? la mejor versi??n y se olvidar?? de la negatividad. Entre sus mejores caracter??sticas est??n las de ser buenos organizadores y abarcar nuevos proyectos y aprender cosas nuevas. El lado negativo es el genio que pueden mostrar a veces, sobre todo cuando detectan que alguien no va a su ritmo. Muchas veces tambi??n son exigentes con los dem??s , porque cuando un objetivo se les pone enfrente no dudan en sacrificarse.";
}
function mostrarModalCapricornio() {
  modalSignos.show();
  modalTitulo.innerHTML = "CAPRICORNIO";
  modalDescripcion.innerHTML =
    "Estabilidad, seguridad y tranquilidad es lo que mejor define a un Capricornio . Son personas justas y exigentes con los dem??s, porque tambi??n lo son con ellos mismos. Suelen perder el control de sus emociones, por lo que es f??cil que sean pesimistas y melanc??licos, pero siempre tratan de buscar ayuda. Por eso es recomendable que mantengan la estabilidad emocional a trav??s de la meditaci??n, respiraci??n o actividades que les ayuden a relajarse.";
}
function mostrarModalAcuario() {
  modalSignos.show();
  modalTitulo.innerHTML = "ACUARIO";
  modalDescripcion.innerHTML =
    "Tienen una personalidad fuerte y atractiva, pero hay dos tipos : los que son t??midos, sensibles y pacientes; y los que son exuberantes, vivos y fr??volos. Eso s??, ambos son honestos y no dudar??n en cambiar su opini??n si estaban equivocados. Es el signo m??s tolerante de los doce, pero tampoco les gusta pertenecer a la multitud. Muchas veces sienten la necesidad de retirarse para meditar. No hacen amigos con facilidad, a pesar de la personalidad abierta que tienen.";
}
function mostrarModalPiscis() {
  modalSignos.show();
  modalTitulo.innerHTML = "PISCIS";
  modalDescripcion.innerHTML =
    "Son tranquilos, amables y pacientes. Los Piscis son sensibles a los sentimientos de los dem??s y responden con simpat??a al tacto y al sufrimiento. Son queridos por el resto de los signos, debido al car??cter afable, cari??oso y amable. Les preocupan m??s los problemas de los dem??s que los suyos propios. Eso s??, les cuesta mucho luchar por el poder establecido. Son creativos y art??sticos.";
}

function BuscarSigno(e) {
    e.preventDefault();
  console.log(dia.value, mes.value);
  if(dia.value>=21 && mes.value==3 || dia.value<=20 && mes.value ==4){
    mostrarModalAries();
  }else if(dia.value>=24 && mes.value==9 || dia.value<=23 && mes.value ==10){
    mostrarModalLibra();
  }else if(dia.value>=21 && mes.value==4 || dia.value<=21 && mes.value ==5){
    mostrarModalTauro();
  }else if(dia.value>=24 && mes.value==10 || dia.value<=22 && mes.value ==11){
    mostrarModalEscorpio();
  }else if(dia.value>=22 && mes.value==5 || dia.value<=21 && mes.value ==6){
    mostrarModalGeminis();
  }else if(dia.value>=23 && mes.value==12 || dia.value<=20 && mes.value ==01){
    mostrarModalCapricornio();
  }else if(dia.value>=24 && mes.value==7 || dia.value<=23 && mes.value ==8){
    mostrarModalLeo();
  }else if(dia.value>=22 && mes.value==6 || dia.value<=23 && mes.value ==7){
    mostrarModalCancer();
  }else if(dia.value>=21 && mes.value==1 || dia.value<=19 && mes.value ==2){
    mostrarModalAcuario();
  }else if(dia.value>=24 && mes.value==8 || dia.value<=23 && mes.value ==9){
    mostrarModalVirgo();
  }else if(dia.value>=20 && mes.value==2 || dia.value<=20 && mes.value ==3){
    mostrarModalPiscis();
}
}

function cantidadCaracteres(input){
    if(input.value.trim().length >= 1 && input.value.trim().length <= 2){
        console.log("dato valido");
        input.className = "form-control is-valid";
        return true;
    }else {
        console.log("dato invalido");
        input.className = "form-control is-invalid";
        return false;
    }
}


