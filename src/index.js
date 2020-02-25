import validator from './validator.js';
const btn1 = document.getElementById('btn');
let numCard = document.getElementById('cardN');
// console.log(btn1);
btn1.addEventListener('click', () => {
 //console.log(validator.isValid(numCard.value), 111111111111);
   let validatorF = validator.isValid(numCard.value);
   // console.log(validatorF.innerHTML)
   if (validatorF) {
      let ocultar = document.getElementById('maskify');
      ocultar.innerHTML = validator.maskify(numCard.value);
   }
   else {
      alert('El número de tarjeta ingresada no es inválido');
   }
});
  /*alert('si funciona');*/
/*
   let (variable cualquiera) = document.getElementById("nombre de tu input ");
const (variable cualquiera x) = document.getElementById ("nombre del boton que da el resultado");
variable cualquiera x.addEventListener("click",() => {
let y = validator.isValid(nombreinput.value);
if (y == true ) {
alert("que salga verificado");
} else {
alert("que salga NO verificado"); */