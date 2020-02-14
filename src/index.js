//import validator from './validator.js';

//console.log(validator);//
//const Validator = document.getElementById('Ncredit');
//Validator.addEventListener('onclick', Validator ) => { 
 //       alert("El número debe ser de 16 dígitos");
const validate = document.getElementsByClassName('cardNumber');
let cardNumber='';
validate.onclick=function validate(){
    do{
        cardNumber=getElementsByClassName('cardNumber').value;
        if (cardNumber!==''){
            isValid(cardNumber);
        }
        else {
            alert('Ingresa un número de tajeta válido');
            document.getElementById('form1').reset();
        }
    }
while (cardNumber==='')
};