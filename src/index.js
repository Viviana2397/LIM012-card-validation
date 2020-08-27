import validator from './validator.js';
const validarButton = document.getElementById('btn');
let numCard = document.getElementById('cardN');
validarButton.addEventListener('click', () => {
   let validator_value = validator.isValid(numCard.value);
   if (validator_value) {
      let ocultar = validator.maskify(numCard.value);
      alert('👍 El número de tarjeta  ' + ocultar + ' fue validado con éxito ✔️');
      numCard.value = "";
      document.location.reload();
   }
   else {
      alert('❌ El número de tarjeta ingresado no es inválido ❌');
      numCard.value = "";
      document.location.reload();
   }

})