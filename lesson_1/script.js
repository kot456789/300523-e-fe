// ФУНКЦИИ
// Шаблон какого-то действия

// 1. Function declaration (объявление функции через function)

function multNumber(num) {
    return num * 2
  }
  
  // console.log(multNumber(2)); // 4
  // console.log(multNumber(3)); // 6
  // console.log(multNumber(10)); // 20
  // console.log(multNumber(555)); // 1110
  
  // 2. Arrow function (стрелочные функции)
  
  const multNumber1 = (num) => {
    return num * 2
  }
  
  const multNumber2 = a => a * 2;
  
  // console.log(multNumber2(2)); // 4
  // console.log(multNumber2(3)); // 6
  // console.log(multNumber2(10)); // 20
  // console.log(multNumber2(555)); // 1110
  
  // ЗАДАЧИ
  // 1. Написать функцию, которая принимает числовой аргумент и возвращает это число умноженное на 2
  
  
  // 2. Написать функцию getSum(), которая принимает два числа и возвращает их сумму
  
  function getSum(a, b) {
    return a + b
  }
  
  const getSum1 = (a, b) => a + b;
  
  // console.log(getSum1(2, 3)); // 5
  // console.log(getSum1(23, 11)); // 34
  
  // 3. Написать функцию getMassage(), которая принимает число. Если число больше или равно 10, то возвращается сообщение 'hello!'. Если число меньше 10, то выводится сообщение 'good evening!'
  
  const getMessage = num => {
    if(num >= 10){
      return 'hello!'
    } else {
      return 'good evening!'
    }
  }
  
  /*
  
  console.log(getMessage(31)); // 'hello!'
  console.log(getMessage(8)); // 'good evening!'
  */
  
  
  // 4. Написать функцию getTotal(), которая принимает два числа. Если первое число больше второго, то функция вовзращает сумму этих двух чисел. Если числа равны или второе число больше первого, то функция возвращает их произведение
  
  const getTotal = (num1, num2) => {
    if(num1 > num2) {
      return num1 + num2
    } else {
      return num1 * num2
    }
  }
  
  // console.log(getTotal(2, 5)); // 2 * 5 = 10
  // console.log(getTotal(2, 2)); // 2 * 2 = 4
  // console.log(getTotal(6, 1)); // 6 + 1 = 7
  
  
  // 4. Написать функцию getTotal(), которая принимает два числа. Если первое число больше второго, то функция вовзращает сумму этих двух чисел. Если числа равны, то функция возвращает их произведение. Если второе число больше первого, то функция возвращает результат вычитания первого числа из второго
  
  const getTotal1 = (num1, num2) => {
    if(num1 > num2) {
      return num1 + num2
    } else if (num2 > num1) {
      return num2 - num1
    } else {
      return num1 * num2
    }
  }
  
  // console.log(getTotal1(2, 5)); // 5 - 2 = 3
  // console.log(getTotal1(2, 2)); // 2 * 2 = 4
  // console.log(getTotal1(6, 1)); // 6 + 1 = 7
  
  
  // 5. Написать функцию getStringLength(), которая принимает строку. Если длина строки больше 5 символов, то возвращается сообщение 'String length is more than 5'. Если длина строки меньше 5 символов, то возвращается сообщение 'String length is less than 5'. Если длина строки равна 5 символам, то возвращается сообщение 'String length is equal 5'
  
  const getStringLength = string => {
    if(string.length > 5){
      return 'String length is more than 5'
    } else if (string.length < 5) {
      return 'String length is less than 5'
    } else {
      return 'String length is equal 5'
    }
  }
  
  // console.log(getStringLength('hi')); // 'String length is less than 5'
  // console.log(getStringLength('hello')); // 'String length is equal 5'
  // console.log(getStringLength('good morning')); // 'String length is more than 5'