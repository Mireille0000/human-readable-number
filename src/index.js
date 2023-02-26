module.exports = function toReadable (number) {
    let oneNineteenArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimalsArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let numberToString = number.toString();

    let n = 1;
    let divise = number / 10;
    // let divise2 = number / 100;
    let fractional = Math.round((divise % 1) * Math.pow(10, n));
    // let fractional2 = Math.floor((divise2 % 1) * Math.pow(10, n));
    // let fractional3 = Math.round((divise2 % 1) * Math.pow(10, n));
    let int = (Math.floor(number / 10));
    // let int2 = (Math.floor(number / 100))

    if (number == 0) {
        return 'zero';
    }

    if (number < 20 || number == 0) {
        return oneNineteenArr[number];
    }
  if (number >= 100 && number % 100 >= 20) {
    return `${(oneNineteenArr[+numberToString[0]])} ${hundred} ${(decimalsArr[numberToString[1]])} ${oneNineteenArr[+numberToString[2]]}`.trim();
  }
if (number >= 100 && number % 100 < 20) {
    return `${(oneNineteenArr[+numberToString[0]])} ${hundred} ${oneNineteenArr[number % 100]}`.trim();
  }

   if (number >= 20 && number <= 99) {
        return `${(decimalsArr[int]).toString()} ${oneNineteenArr[fractional]}`.trim();
  }

}
