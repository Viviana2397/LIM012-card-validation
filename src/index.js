import validator from './validator.js';
const btn1 = document.getElementById('btn');
let numCard = document.getElementById('cardN');
// console.log(btn1);
btn1.addEventListener('click', () => {
 //console.log(validator.isValid(numCard.value), 111111111111) esto fue para validar que el boton funcione;
   let validatorF = validator.isValid(numCard.value);
   // console.log(validatorF.innerHTML)
   if (validatorF) {
     // let ocultar = document.getElementById('maskify');
      let ocultar = validator.maskify(numCard.value);
      //document.innerHTML='El número '+ ocultar +' fue validado con éxito';
      //para hacer mas dinámico el alert visité esta página y copie lo emojis https://emojipedia.org 
      alert( '👍 El número de tarjeta \n' + ocultar +'💳 fue validado con éxito');
      document.location.reload();
   }
   else {
      alert('❌ El número de tarjeta ingresada no es inválido ❌');
      //esto sirve para refrescar la página al momento de hacer click en aceptar
      document.location.reload(); 
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