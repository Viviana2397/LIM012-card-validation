const validator = {

  isValid: (cardN) => {
    let numBer = Array.from(cardN).reverse();
    let par = [];
    const impar = [];
    const sumP = [];
    let sP = 0;
    let sI = 0;
    let sumT = 0;

    for (let i = 0; i < numBer.length; i++) {
      if (i % 2 !== 0) {
        par.push(numBer[i] * 2);
      } else {
        impar.push(parseInt(numBer[i]));
      }
    }

    for (let j = 0; j < par.length; j++) {
      if (par[j] >= 10) {
        sumP.push((par[j] % 10) + (parseInt(par[j] / 10)));
      } else {
        sumP.push(parseInt(par[j]));
      }
    }
    for (let l=0; l <sumP.length; l++){
        sP=sP+parseInt(sumP[l]);
    }
    for (let k=0; k <impar.length; k++){
       sI=sI+parseInt(impar[k]);
    }
    
    sumT=parseInt(sI+sP);
    /*console.log(numBer);
    console.log(par);
    console.log(impar);
    console.log(sumP);
    console.log(sI);
    console.log(sumT); */
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
    return cardNu.join('');
  }
};

export default validator; 