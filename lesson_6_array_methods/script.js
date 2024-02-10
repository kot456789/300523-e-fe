// ДЗ

// *7. Создайте пустой массив vowels. Используя цикл, найдите и добавьте все гласные буквы из строки "Hello, World!" в массив с использованием метода push. Вам также понадобится использовать метод includes().

// const greeting = "Hello, WOrld!";
// const vowels = [];

// for(let i = 0; i < greeting.length; i++){
//   // const letter = greeting[i].toLowerCase();
//   const vow_letter = ['a', 'o', 'i', 'y', 'u', 'e', 'A', 'O', 'I', 'U', 'Y', 'E'];

//   if(vow_letter.includes(greeting[i])){
//     vowels.push(greeting[i])
//   }
// }

// console.log(vowels);


// Array methods (методы массивов)

// Простые (принимают значение или ничего не принимают)

// .push()
// .pop()
// .shift()
// .unshift()

// Сложные (примают callback-функцию)

// .forEach(el => {}) - выполняет переданную функцию для каждого элемента массива, ничего не возращает
// .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву

// .filter(el => {})
// .find(el => {})
// .reduce()
// .sort()


// 1. Написать функцию, принимающую массив с числами и вовзаращающую новый массив с этими числами умноженными на 2

// const multNumbers = arr => {
//   const new_arr = [];
  
//   for(let i = 0; i < arr.length; i++){
//     new_arr.push(arr[i] * 2)
//   }

//   return new_arr
// }


// const multNumbers2 = arr => {
//   const new_arr = [];

//   arr.forEach(num => new_arr.push(num * 2));

//   return new_arr
// }

// const multNumbers3 = arr => arr.map(el => el * 2);

// console.log(multNumbers2([2, 4, 10, 21])); // [4, 8, 20, 42]


// 2. Написать функцию, которая принимает массив чисел и значение и возвращает новый массив со всеми числами исходного массива, умноженными на значение второго аргумента

// const multNums = (arr, num) => {
//   const new_arr = [];
  
//   for(let i = 0; i < arr.length; i++){
//     new_arr.push(arr[i] * num)
//   }

//   return new_arr
// }

// const multNums2 = (arr, num) => {
//   const new_arr = [];
  
//   arr.forEach(el => new_arr.push(el * num))

//   return new_arr
// }


// const multNums3 = (arr, num) => arr.map(el => el * num);

// // Фя multNums принимает два аргумента: массив arr и число num. Она умножает каждый элемент массива на число num и возвращает новый массив new_arr с результатами.
// // Пример использования функции:

// const arr = [1, 2, 3, 4, 5];
// const num = 2;

// // const result = multNums3(arr, num); console.log(result); // [2, 4, 6, 8, 10]


// 3. Дан массив чисел numbers. Вывести в консоль все числа массива

// const numbers = [1, 2, 3, 4, 5];

// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }

// numbers.forEach(el => console.log(el));


// ДЗ
// 1. Дан массив чисел numbers. Вывести в консоль все четные числа массива

// const getEvenNums = arr => {
//     const new_arr = [];
     
//     arr.forEach(el => {
//     if(el % 2 === 0) { 
//     new_arr.push(el)
// }

// })
// return new_arr
// }
// const evenNums = getEvenNums([1, 2, 3, 4, 5, 6, 7, 256]); // [2, 4, 6, 256]
// console.log(evenNums);

// 2. Напишите функцию, которая принимает массив со строками и возвращает новый массив. Если строка длиннее 5 символов, то в новый массив добавляется строка 'longer than 5', а если 5 и короче - то 'shorter than 5'


function classifyStrings(arr) {
  const new_arr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      new_arr.push('longer than 5');
    } else {
      new_arr.push('shorter than 5');
    }
  }
  
  return new_arr
}

const arr = ['hello', 'hi', 'good morning', 'good evening', 'hEllo!'];
const result = classifyStrings(arr);
console.log(result); // ['shorter than 5', 'shorter than 5', 'longer than 5', 'longer than 5', 'longer than 5']


// 3. Написать функцию changeStrings(), которая принимает массив с разными типами данных и возвращает новый массив, где все строки будут заменены на строку 'XXXXX'

// const changeStrings = arr => {
// const new_arr = [];

//   for (let i = 0; i < arr.length; i++){
//     new_arr.push(arr[i] && 'XXXXX')

//   }
//   return new_arr
// }

// console.log(changeStrings([23, 'hello', 'hi', 12, 'good morning', 'good evening', 485, 'hEllo!']));
