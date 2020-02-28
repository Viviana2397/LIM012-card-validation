import validator from './validator.js';
const btn1 = document.getElementById('btn');
let numCard = document.getElementById('cardN');
btn1.addEventListener('click', () => {
   let validatorF = validator.isValid(numCard.value);
   if (validatorF) {
      let ocultar = validator.maskify(numCard.value);
      alert( '👍 El número de tarjeta  ' + ocultar + ' fue validado con éxito ✔️');
      document.location.reload();
   }
   else {
      alert('❌ El número de tarjeta ingresado no es inválido ❌');
      document.location.reload();
   }
})