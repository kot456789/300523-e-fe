// Array methods

// .forEach(el => {}) - выполняет переданную функцию для каждого элемента массива, ничего не возращает

// .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву

// .filter(el => {}) - возвращает новый массив, в который попадут только ВСЕ те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию

// .find(el => {}) - возвращает ОДИН элемент (первый), который отвечают переданному в callback-функцию условию

// .reduce((acc, el) => {}, start) - возвращает аккумулированное значение

// .sort((a, b) => a - b) - мутирует исходный массив, сортирует числовые значения в массиве
// .sort((a, b) => a.localeCompare(b)) - мутирует исходный массив, сортирует строчные значения в массиве


// 1. Дан массив из чисел, найти сумму всех чисел в массиве

const numbers = [22, 3, 5, 11, 10]; // 51

let numbers_sum = 0;
for(let i = 0; i < numbers.length; i++){
  numbers_sum += numbers[i]
}

// console.log(numbers_sum); // 51

const numbers_sum_reduce = numbers.reduce((box, el) => box + el, 0);

// console.log(numbers_sum_reduce); // 51


// 2. Создать копию массива numbers

const numbers_copy = [...numbers];
const numbers_copy1 = numbers.slice();
const numbers_copy2 = numbers.map(el => el);

// console.log(numbers);
// console.log(numbers_copy);
// console.log(numbers_copy1);
// console.log(numbers_copy2);