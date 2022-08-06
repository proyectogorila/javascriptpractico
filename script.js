const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btnCalcular")
const resultado = document.querySelector(".result");
const formulario = document.querySelector("#formulario");

formulario.addEventListener('click', btnOnClick);


function btnOnClick() {

    resultado.innerText = 'resultado es = ' + (parseInt(input1.value) + parseInt(input2.value));
}