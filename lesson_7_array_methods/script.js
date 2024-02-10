// Array methods

// .forEach(el => {}) - выполняет переданную функцию для каждого элемента массива, ничего не возращает
// .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву

// .filter(el => {}) - возвращает новый массив, в который попадут только те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию

// .find(el => {})

// .reduce()
// .sort()


// -------------------------------
// 1. Напишите функцию getEvenNums(), которая принимает массив с числами и возвращает новый массив с четными числами из переданного массива

// const getEvenNums = arr => {
//   const new_arr = [];

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       new_arr.push(arr[i])
//     }
//   }

//   return new_arr 
// }

// // // решение c forEach:
// // const getEvenNums1 = arr => {
// //   const new_arr = [];

// //   arr.forEach(el => {
// //     if(el % 2 === 0){
// //       new_arr.push(el)
// //     }
// //   })

// // //    // или:
// // //   arr.forEach(el => el % 2 === 0 ? new_arr.push(el) : '');
// // //   //

// //   return new_arr 
// // }

// const evenNums = getEvenNums([1, 2, 3, 4, 5, 6, 7]); // [2, 4, 6]
// console.log(evenNums);


// // или так с filter:

// const getEvenNums2 = arr => arr.filter(el => el % 2 === 0)

// const evenNums2 = getEvenNums2([1, 2, 3, 4, 5, 6, 7]) // [2, 4, 6]
// console.log(evenNums2);

// ----------------------------------
// 2. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длиннее 5 символов

// const getLongStrings = arr => {
//   const new_arr = [];

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > 5){
//       new_arr.push(arr[i])
//     }
//   }

//   return new_arr
// }


// const getLongStrings1 = arr => arr.filter(el => el.length > 5);

// console.log(getLongStrings1(['hello', 'hi', 'good morning', 'good evening', 'hEllo!'])); // ['good morning','good evening', 'hEllo!']


// 3. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длиннее 5 символов и содержащими букву 'e'/'E'


// const getLongStrings2 = arr => arr.filter(el => el.length > 5 && (el.includes('e') || el.includes('E')));

// console.log(getLongStrings2(['hello', 'hi', 'good morning', 'good evening', 'hEllo!'])); // ['good evening', 'hEllo!']


// 4. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами

// const getNumbers = arr => arr.filter(el => typeof el === 'number');

// console.log(getNumbers([true, 3, 'hello', 98, 150, undefined])); // [3, 98, 150]


// 5. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами больше 50

// const getNumbers1 = arr => arr.filter(el => el > 50);

// console.log(getNumbers1([true, 3, 'hello', 98, 150, undefined])); // [98, 150]


// 6. Напишите функцию, которая принимает массив с числами и возвращает новый массив с положительными числами умноженными на 2

// const changeNums = arr => arr.filter(el => el > 0).map(el => el * 2);

// console.log(changeNums([2, -4, 90, -10, -500, 6])); // [4, 180, 12]


// ДЗ
// 1. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа   

// const getEvenNums = arr => {
//   const new_arr = [];

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       new_arr.push(arr[i])
//     }
//   }

//   return new_arr 
// }

// //--- с forEach:
// const getEvenNums1 = arr => {
//     const new_arr = [];
     
//     arr.forEach(el => {
//     if(el % 2 === 0) { 
//     new_arr.push(el)
// }

// })
// return new_arr
// }

// //--- с forEach:
// const getEvenNums2 = arr => {
//     const new_arr = [];
     
//     arr.forEach(el => el % 2 === 0 ? new_arr.push(el) : '');  
    
// return new_arr
// }

// const evenNums = getEvenNums2([1, 2, 3, 4, 5, 6, 7, 256]); // [2, 4, 6, 256]
// console.log(evenNums);

// // ---
// // // или так с filter:
// // ---
// const getEvenNums3 = arr => arr.filter(el => el % 2 === 0)

// const evenNums1 = getEvenNums3([10, 2, 3, 4, 5, 6, 7, 256]) // [2, 4, 6, 256]
// console.log(evenNums1);
// // ---


// 2. *Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые начинаются с буквы A.

// const getLongStrings = arr => arr.filter(el => el.includes('a') || el.includes('A'));

// console.log(getLongStrings(['Amazon ', 'anaconda', 'good morning', 'good evening', 'A pineapple!'])); 


// 3. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа


// const getEvenNums = arr => arr.filter(el => el > 0 )

// const evenNums = getEvenNums([-120, 2, 3, -4, 5, -6, 7, -256]) // [2, 4, 6, 256]
// console.log(evenNums);


// 4. *Напишите функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы


// function unique(arr) {
// let result = []

// for (let str of arr ) {
//     if (!result.includes(str)){
//         result.push(str);
//     }
  
// }
// return result;
// }
 
// let strings = ["Mercedes Benz", "BMW", "Mercedes Benz", "Volvo","Opel", "Volvo", "Mercedes Benz", "Opel"];

// alert(unique(strings));// //  ['Mercedes Benz', 'BMW', 'Volvo', 'Opel']

// ---
// const array = ["Mercedes Benz", "BMW", "Mercedes Benz", "Volvo","Opel", "Volvo", "Mercedes Benz", "Opel"];

// const getUnique = (arr) => {
//   return arr.filter((el, str) => str === arr.indexOf(el));
// };

// console.log(getUnique(array)); // => ['Mercedes Benz', 'BMW', 'Volvo', 'Opel']

// // ---
// console.log(Array.from(new Set(["Mercedes Benz", "BMW", "Mercedes Benz", "Volvo","Opel", "Volvo", "Mercedes Benz", "Opel"]))) 
 
 // ['Mercedes Benz', 'BMW', 'Volvo', 'Opel']

// console.log(Array.from(new Set([1, 2, 2, 3, 1, 2, 3, 4]))) 
 