function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  console.log(
  getRandomIntInclusive(4, 40)
  );


  let number = 3.3676799889

  console.log(number, 'ushbu sonning uyidagi methodlarda yaxlitlanishi');

  console.log(Math.ceil(number), 'ceil');
  console.log(Math.floor(number), 'floor');
  console.log(Math.round(number), 'round');


  console.log(2* 3.141592653589793 * 10);

  let nowDate = new Date();
  let nowTime = nowDate.getHours();

//   console.log(nowDate);
//   console.log(nowTime);



  const notNumber = 's' * 2;
  console.log(isNaN(notNumber));
  console.log(!isNaN(notNumber));

//   // formula 
//   let smthFormula = Math.round(Math.random() * 100);

//   console.log(smthFormula);

//   console.log('ABOUT toFixed');
//   function financial(x) {
//     return Number.parseFloat(x).toFixed(1);
//   }
  
//   console.log(financial(123.456));
//   // Expected output: "123.46"
  
//   console.log(financial(0.004));
//   // Expected output: "0.00"
  
//   console.log(financial('1.23e+5'));
//   // Expected output: "123000.00"


//   //TERNARY OPERATOR

// console.log('TERNARY OPERATORS');

  function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
//   // Expected output: "$2.00"
  
//   console.log(getFee(false));
//   // Expected output: "$10.00"
  
//   console.log(getFee(null));
//   // Expected output: "$10.00"




console.log('CHarAT()');

const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 4   is '${anyString.charAt(5)}'`);
console.log(`The character at index 4   is '${anyString.charAt(6)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);






// //FOR LOOP OY-KUN

// console.log('FOR LOOP');

// function monthBase(foo, bar){
//   for(let i = 1; i <= bar; i++){
//     console.log(`${foo} ${i}`);
//   }
// }

// monthBase('iyun', 30);


// //BREAK;
// //CONTINUE;



// // for(let o = 1; o = 6; o++){
// //   if (o === 4) {
// //     continue;
// //     // break;

// //   }
// //   console.log(0);
// // }