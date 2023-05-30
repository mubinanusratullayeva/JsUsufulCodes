//10-lesson

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//   }

//   console.log(
//   getRandomIntInclusive(4, 40)
//   );


//   let number = 3.3676799889

//   console.log(number, 'ushbu sonning uyidagi methodlarda yaxlitlanishi');

//   console.log(Math.ceil(number), 'ceil');
//   console.log(Math.floor(number), 'floor');
//   console.log(Math.round(number), 'round');


//   console.log(2* 3.141592653589793 * 10);

//   let nowDate = new Date();
//   let nowTime = nowDate.getHours();

//   console.log(nowDate);
//   console.log(nowTime);



//   const notNumber = 's' * 2;
//   console.log(isNaN(notNumber));
//   console.log(!isNaN(notNumber));

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

//   function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
//   }
  
//   console.log(getFee(true));
//   // Expected output: "$2.00"
  
//   console.log(getFee(false));
//   // Expected output: "$10.00"
  
//   console.log(getFee(null));
//   // Expected output: "$10.00"




// console.log('CHarAT()');

// const anyString = "Brave new world";
// console.log(`The character at index 0   is '${anyString.charAt()}'`);
// // No index was provided, used 0 as default

// console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
// console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
// console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
// console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
// console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
// console.log(`The character at index 4   is '${anyString.charAt(5)}'`);
// console.log(`The character at index 4   is '${anyString.charAt(6)}'`);
// console.log(`The character at index 999 is '${anyString.charAt(999)}'`);






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




//11-LESSON

//Nested ARRAY

// let arr = [7,6,6,true, [5678, 8, false]]

// console.log(arr[4][2]);


// //Nested OBJECT

// let woo = {
//     //key    //value
//     myName: 'Mubina', //property
//     myAge: '15',
//     hobby: ["singing", 'reading', 'swimming', 'running'],
//     programming: true,
//     smth: false ,
//     place: {
//         univ: 'MIT',
//         country: 'New York'
//     },
//     func: function(){
//         return 'Hello World'
//     }
// }

// console.log(woo.place.univ);
// console.log(woo.hobby[1]);
// console.log(woo.func());
// console.log(woo['hobby'][2]);//Another way to take the value in object



//Dates

// let date = new Date();

// let bar = [
//     'yanvar',
//     'fevral',
//     'mart',
//     'aprel',
//     'may',
//     'iyun'
// ];

// console.log(bar[date.getMonth()]);








// //IF ELSE bo'yicha masalalar

// 1-MASALA

let a = +prompt('enter the number');

if (a > 0) {
  a += 1
  console.log(a);
}else if(0 > a){
    a *= 10
    console.log(a);
}



// //2-MASALA

// let a = Number(prompt('enter a number'))
// let b = Number(prompt('enter b number'))

// let maxiMum = Math.max(a, b)
// let miniMum = Math.min(a, b)

// if (maxiMum > miniMum) {
//     console.log(`${maxiMum} katta ${miniMum} dan`);
// }




// //3-MASALA

let x = Number(prompt('enter x number'))
let y = Number(prompt('enter y number'))
let z = Number(prompt('enter z number'))

let ree = Math.min(x,y,z)

console.log(ree);





// 12-LESSON
// Array qitmatini o'zgartirish

let arr = ['cobalt', 'jip', 'malibu'];

console.log(arr);

arr[2] = 'porsche'

console.log(arr);



// //STRING METHODS

let text = 'Hello World'
let subtitle = 'Nature'
let title = '            Blue Sky            '

console.log(`${text} :
// String methods`);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.concat(` ${subtitle}`));
console.log(subtitle.concat(` ${text}`));
console.log(text.length);
console.log(text.slice('1', '9'));
console.log(`${text.slice('0', '8')}...`);
console.log(text.replace('Hello', 'See you'));
console.log(title);
console.log(title.trim());
console.log(`charAt() => Nature.i = 0: ${subtitle.charAt(0)}`);
console.log(text.split(' '));

let numbers = "+9989292934 +9989292934 +9989292934"
console.log(numbers.split(' +'));
console.log(numbers.replaceAll('+', '').split(' '));
console.log(typeof numbers);


// //!IMPORTANT

// true = 1
// false = 0
let num = true * false

console.log(`expr: ${typeof num}`);



// // //BREAK;
// // //CONTINUE;

// //DON'T USE THIS CODE

// // for(let o = 1; o = 6; o++){
// //   if (o === 4) {
// //     // continue;
//     // break;

// //   }
// //   console.log(0);
// // }


// for(let i = 0; i < 5; i++){
//     if(i == 3){
//         // break
//         continue
//     }
//     console.log(i);
// }


// //JOIN 

let arr = [1, 2, 3, 4, 5, 6]

console.log(arr);
console.log(arr.join('-'));


// //5-MASALA

let foo = [3.05, -57, 4.5, 89, -10, 9, -8]


function NumType(array) {

    let boxArr = []

    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
           array[i] = array[1] * -1
        }

        boxArr.push(Math.round(array[i]))
    
    }
    
    return boxArr;

}

console.log(foo);
console.log(NumType(foo));



// //6-MASALA

let chai = [23,45,6]

function check(a, x) {
     for(let i = 0; i < a.length; i++){
       if(a[i]===x){
         return true
       }
     }
         return false
  }

  console.log(check(chai, 6));




//padS vs padE

let date = new Date();

let month = String(date.getSeconds());

console.log(`seconds: ${month}`);
console.log(month.padStart(5, '*'));
console.log(month.padEnd(5, '*'));





//BROUZER OBJECT MODEL // WEBKIT SPEECH (lang, onend, start, onresult)

// let btn = document.querySelector('.btn')
// let title = document.querySelector('.title')
// let body = document.querySelector("body")


// let record = new webkitSpeechRecognition();

// record.lang = 'en-Us'

// btn.addEventListener('click', ()=>{
//     record.start()
// })


// record.addEventListener('end', function () {
//     console.log('Tugadi');
// })

// record.addEventListener('result', (e)=>{
//     const command = e.results[0][0].transcript;

//     console.log(command);

//     //  title.textContent = command
//     // console.log(command[0][0].transcript);
//     // console.log(e);

//     body.style.backgroundColor = command;

// })

// record.addEventListener("error", ()=>{
//     console.log("error");
// })

// // console.log(record);


//FOR IN 

let cars = ['bmw', 'audi', 'chevrolet'];

for(let car in cars){
    console.log(cars[car]);
    // console.log(car);
}


//FOR OF

for(let mach of cars){
     console.log(mach);
}


//INCLUDES

let nums = [1,2,3,4,5,6,7,8,9]

let asNums = nums.includes(11)

console.log(asNums);