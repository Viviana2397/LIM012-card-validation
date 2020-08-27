const validator = {
  isValid: (inputCardNumber) => {
    if (inputCardNumber == "") {
      return false;
    } else {
      let containerNumber_creditCard = Array.from(inputCardNumber).reverse();
      let even = [];
      const odd = [];
      const sumOfPairsGreaterThan10 = [];
      let totalSumOfPairs = 0;
      let totalSumOfOddNumbers = 0;
      let total_amount = 0;

      for (let i = 0; i < containerNumber_creditCard.length; i++) {
        if (i % 2 !== 0) {
          even.push(containerNumber_creditCard[i] * 2);
        } else {
          odd.push(parseInt(containerNumber_creditCard[i]));
        }
      }

      for (let j = 0; j < even.length; j++) {
        if (even[j] >= 10) {
          sumOfPairsGreaterThan10.push((even[j] % 10) + (parseInt(even[j] / 10)));
        } else {
          sumOfPairsGreaterThan10.push(parseInt(even[j]));
        }
      }
      for (let l = 0; l < sumOfPairsGreaterThan10.length; l++) {
        totalSumOfPairs = totalSumOfPairs + parseInt(sumOfPairsGreaterThan10[l]);
      }
      for (let k = 0; k < odd.length; k++) {
        totalSumOfOddNumbers = totalSumOfOddNumbers + parseInt(odd[k]);
      }

      total_amount = parseInt(totalSumOfOddNumbers + totalSumOfPairs);
      if (total_amount % 10 == 0) {
        return true;
      }
    }
  },
  maskify: (inputCardNumber) => {
    let numberCreditCard = inputCardNumber.split('');
    for (let m = 0; m < numberCreditCard.length - 4; m++) {
      numberCreditCard[m] = "#";
    }
    return numberCreditCard.join('');
  }
};

export default validator; 