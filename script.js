const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = "Patito <br> feo";

p.innerHTML = "sdfsfdsfds";

console.log(h1.getAttribute('pantalla'));
/* console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo'); */
h1.classList.add('rojo');
h1.classList.remove('verde');
input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg')

pid.innerHTML = '';
pid.append(img);