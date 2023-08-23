//Variables para Cuadrado
const campLadoCuadro = document.querySelector("#cuadradoLadoL");
const resultadoCuadrado = document.querySelector("#output-cuadrado"); // Almacena el propio elemento de entrada
//Variables para cuadrado
const campBaseRectangulo = document.querySelector("#base-rectangle");
const campAlturaRectangulo = document.querySelector("#altura-rectangle");
const resultadoRectangulo = document.querySelector("#output-rectangulo");
//Variables para Rombo
const campDiagMayor = document.querySelector("#diag-mayor");
const campDiagMenor = document.querySelector("#diag-menor");
const resultadoRombo = document.querySelector("#output-rombo");
//Variables para Circulo
const campRadioCirculo = document.querySelector("#radio-circle");
const resultadoCirculo = document.querySelector("#output-circulo");
//Variables para Esfera
const campRadioEsfera = document.querySelector("#radio-esfera");
const resultadoEsfera = document.querySelector("#output-esfera");
//Variables para el Cubo
const campLadoCubo = document.querySelector("#lado-cubo");
const resultadoCubo = document.querySelector("#output-cubo");
//Variables para Cilindro
const campRadioCilindro = document.querySelector("#radio-cilindro");
const campAlturaCilindro = document.querySelector("#altura-cilindro");
const resultadoCilindro = document.querySelector("#output-cilindro");
//Variables para Cono
const campRadioCono = document.querySelector("#radio-cono");
const campAlturaCono = document.querySelector("#altura-cono");
const resultadoCono = document.querySelector("#output-cono");

function handleChangeCuadrado(event) {
  let value = Number(event.target.value);
  resultadoCuadrado.textContent = value * value;
}

function handleChangeRectangle() {
  let lado1 = Number(campBaseRectangulo.value);
  let lado2 = Number(campAlturaRectangulo.value);
  if (lado1 && lado2) {
    // Verifica si ambos campos están llenos
    let area = lado1 * lado2; // Calcula el área del cuadrado
    resultadoRectangulo.textContent = area;
  }
}

function handleChangeRombo() {
  let lado1 = Number(campDiagMayor.value);
  let lado2 = Number(campDiagMenor.value);
  if (lado1 && lado2) {
    // Verifica si ambos campos están llenos
    let area = (lado1 * lado2) / 2; // Calcula el área del cuadrado
    resultadoRombo.textContent = area;
  }
}

function handleChangeCirculo(event) {
  let value = Number(event.target.value);
  resultadoCirculo.textContent = 3.14 * value ** 2;
}

function handleChangeEsfera(event) {
  let value = Number(event.target.value);
  resultadoEsfera.textContent = (4 * 3.14 * value ** 2) / 3;
}

function handleChangeCubo(event) {
  let value = Number(event.target.value);
  resultadoCubo.textContent = value ** 3;
}

function handleChangeCilindro() {
  let lado1 = Number(campRadioCilindro.value);
  let lado2 = Number(campAlturaCilindro.value);
  if (lado1 && lado2) {
    // Verifica si ambos campos están llenos
    let volumen = 3.14 * lado1 ** 2 * lado2; // Calcula el área del cuadrado
    resultadoCilindro.textContent = volumen;
  }
}

function handleChangeCono() {
  let lado1 = Number(campRadioCono.value);
  let lado2 = Number(campAlturaCono.value);
  if (lado1 && lado2) {
    // Verifica si ambos campos están llenos
    let volumen = 3.14 * lado1 ** 2 * (lado2 / 3); // Calcula el área del cuadrado
    resultadoCono.textContent = volumen;
  }
}

//manejador de Eventos del Cuadrado
campLadoCuadro.addEventListener("change", handleChangeCuadrado); // Adjunta el escuchador de eventos
//manejador de Eventos del Rectangulo
campBaseRectangulo.addEventListener("change", handleChangeRectangle);
campAlturaRectangulo.addEventListener("change", handleChangeRectangle);
//manejador de Eventos del Rombo
campDiagMayor.addEventListener("change", handleChangeRombo);
campDiagMenor.addEventListener("change", handleChangeRombo);
//manejador de Eventos del Circulo
campRadioCirculo.addEventListener("change", handleChangeCirculo);
//manejador de Eventos del Esfera
campRadioEsfera.addEventListener("change", handleChangeEsfera);
//manejador de Eventos del Cubo
campLadoCubo.addEventListener("change", handleChangeCubo);
//manejador de Eventos del Cilindro
campRadioCilindro.addEventListener("change", handleChangeCilindro);
campAlturaCilindro.addEventListener("change", handleChangeCilindro);
//manejador de Eventos del Cono
campRadioCono.addEventListener("change", handleChangeCono);
campAlturaCono.addEventListener("change", handleChangeCono);
