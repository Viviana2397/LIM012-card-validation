import validator from './validator.js';
const btn = document.getElementById('cardN');
//const numTarjeta=prompt("ingrese numero de tarjeta");
const cadena1=Array.from(cardN)
let numBer=cadena1.reverse();

btn.addEventListener('click', () => {
  let par = [];
  const impar = [];
  const sumP=[];
  const sumT=[];;
    for(let i=0;i<numBer.length;i++){
    console.log(i+": "+numBer[i]);
    if(i % 2 !== 0){
      par.push(numBer[i]*2);
    
    }else{
      impar.push(numBer[i]);
    }
    
  }

  for(let j=0;j<par.length;j++){
    if(par[j]>10)  {
      sumP.push((par[j]%10)+(parseInt(par[j]/10)));
     }else{
      par.push(par[j]);
    }
  }

  for(let k=0;k<numBer.length;k++){
    sumT=(par+impar+sumP);
    console.log(sumT);
    //cont = cont+parseInt(sumP[k]);
  }
  if (sumT%10===0){
    cardN=cardN.split("");
    for(m=0;m<numTarjeta.length-4;m++){
      numT.push(numTarjeta[m]="#");
    }
    console.log('La tarjeta'+ cardN+'fue validada con éxito');
    }
    else{
    console.log('tarjeta invalida');
    }
  });


/*console.log(validator);//
    const btn=getElementById('cardN');
    const numBer=Array.from('cardN').reverse;
    const par = [];
    const impar = [];
    const sum=[];
    let cont=0;
    let acum=0;
    let sumtotal=0;
 btn.addEventListener('click', () =>
 {
    for(let i=0;i<numBer.length;i++){
      console.log(i+": "+numBer[i]);
      if(i % 2 !== 0){
        par.push(numBer[i]*2);
       console.log(par);
      }else{
        impar.push(numBer[i]);
        console.log(impar);
      }
      
    }
  
    for(let j=0;j<par.length;j++){
      if(par[j]>10)  {
        sum.push((par[j]%10)+(Math.trunc(par[j]/10)));
       }else{
        sum.push(par[j]);
      }
    }
  
    for(let k=0;k<sum.length;k++){
      cont = cont+parseInt(sum[k]);
    }
    for(let l=0;l<impar.length; l++){
      acum = acum+parseInt(impar[l]);
      
    }
    sumatotal=parseInt (acum+cont);
    console.log(sum);
    console.log(impar);
    console.log(cont);
    console.log(sumtotal);
    console.log ('suma total es:' + ((cont+acum)%10));
    if (sumtotal%10===0){
      console.log('Tarjeta Valida');
      }
      else{
      console.log('tarjeta invalida');
      }
    }
  //validator('1234567890');*/
/*
import validator from './validator.js';
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  alert('Hola! Mucho gusto en conocerte');
});
const btn = document.getElementById('btn');*/