const validator = {

  isValid: (cardN) => {
    let numBer = Array.from(cardN).reverse();
    let par = [];
    const impar = [];
    const sumP = [];
    let sumT =[];

    for (let i = 0; i < numBer.length; i++) {
      //console.log(i+": "+numBer[i]);
      if (i % 2 !== 0) {
        par.push(numBer[i] * 2);
      } else {
        impar.push(parseInt(numBer[i]));
      }
    }

    for (let j = 0; j < par.length; j++) {
      console.log(par);
      if (par[j] > 10) {
        sumP.push((par[j] % 10) + (Math.trunc(par[j] / 10)));
      } else {
        sumP.push(par[j]);
      }
    }
    console.log(sumP);
    //for (let k = 0; k < numBer.length; k++) {
      sumT=(par + impar + sumP);
   // }
    console.log(sumT);
    if (sumT % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: (cardN) => {
    let cardNu = cardN.split('');
    for (let m = 0; m < cardNu.length - 4; m++) {
      cardNu[m] = "#";
    }
    return cardNu.join('-');
  }
};

export default validator; 
