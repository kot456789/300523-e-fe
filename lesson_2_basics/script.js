// Задачи на функции

// 1. Написать функцию showMaxNumber(), которая принимает 2 числовых аргумента и возвращает наибольшее из них. Если числа равны, то возвращает сообщение 'Numbers are equal'. Вывести результат в консоль.

const showMaxNumber = (num1, num2) => {
    if(num1 > num2){
      return num1
    } else if (num2 > num1) {
      return num2
    } else {
      return 'Numbers are equal'
    }
  }
  
  // console.log(showMaxNumber(5, 23)); // 23
  // console.log(showMaxNumber(41, 1)); // 41
  // console.log(showMaxNumber(41, 41)); // 'Numbers are equal'
  
  
  // 2. Написать функцию getLongestString(), которая принимает две строки и возвращает самую длинную из них. Если длина строк одинаковая, возвращает сообщение 'Strings length equal'
  
  const getLongestString = (str1, str2) => {
    if(str1.length > str2.length){
      return str1
    } else if (str2.length > str1.length){
      return str2
    } else {
      return 'Strings length equal'
    }
  }
  
  // console.log(getLongestString('hello', 'hi')); // 'hello'
  // console.log(getLongestString('nelli', 'ekaterina')); // 'ekaterina'
  // console.log(getLongestString('apple1', 'orange')); // 'Stings length equal'
  
  
  // 3. Написать функцию, которая принимает строку и возвращает эту строку в верхнем регистре
  
  const getCapitalString = str => str.toUpperCase();
  
  // console.log(getCapitalString('hello')); // 'HELLO'
  
  
  // 4. Написать функцию getAgeMessage(), которая принимает число и возвращает строку в формате 'Your age is X'
  
  // конкатенация
  
  const getAgeMessage = age => 'Your age is ' + age;
  
  // интерполяция
  
  const getAgeMessage1 = age => `Your age is ${age}`;
  
  // console.log(getAgeMessage(8));  // 'Your age is 8'
  // console.log(getAgeMessage(23));  // 'Your age is 23'
  
  
  // 5. Написать функцию getMaxAgeMessage(), которая принимает два числовых значения и возвращает строку в формате 'Your age is X' (вместо Х подставить наибольшее из двух переданных значений)
  
  // if ... else ...
  
  const getMaxAgeMessage = (num1, num2) => {
    if(num1 > num2){
      return `Your age is ${num1}`
    } else {
      return `Your age is ${num2}`
    }
  }
  
  // тернарный оператор
  
  const getMaxAgeMessage1 = (num1, num2) => num1 > num2 ? `Your age is ${num1}` : `Your age is ${num2}`;
  
  
  // условие ? true : false
  
  // console.log(getMaxAgeMessage(8, 4));  // 'Your age is 8'
  // console.log(getMaxAgeMessage(23, 37));  // 'Your age is 37'
  // console.log(getMaxAgeMessage(23, 23));  // 'Your age is 23'
  
  
  // 6. Написать функцию showMaxNumber1(), которая принимает 2 числовых аргумента и возвращает наибольшее из них. Если числа равны, то возвращает одно из них.
  
  const showMaxNumber1 = (a, b) => a > b ? a : b;
  
  // console.log(showMaxNumber1(5, 23)); // 23
  // console.log(showMaxNumber1(41, 1)); // 41
  
  
  // 7. Написать функцию checkStringLength(), которая принимает два аргумента - строку и число. Если число равно длине строки, то вывести сообщение 'Длина строки равна ЧИСЛО'. Если число не равно длине строки, то вывести сообщение 'Error'
  
  const checkStringLength = (str, num) => str.length === num ? `Длина строки равна ${num}` : 'Error';
  
  // console.log(checkStringLength('hello', 5)); // 'Длина строки равна 5'
  // console.log(checkStringLength('good morning', 3)); // 'Error'
  
  
  // 8. Написать функцию showMessage(), которая принимает 2 числа и возвращает строку в формате: First number is X, second number is XX. Если второй аргумент не передан, то подставить вместо него 10
  
  
  const showMessage = (num1, num2=10) => `First number is ${num1}, second number is ${num2}`;
  
  // console.log(showMessage(2, 5)); // 'First number is 2, second number is 5'
  // console.log(showMessage(2)); // 'First number is 2, second number is 10'
  
  
  // 9. Напишите функцию, powerNums(), которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
  
  const powerNums = (num1, num2=2) => num1 ** num2;
  
  // console.log(powerNums(2, 2)); // 2 ** 2 = 4
  // console.log(powerNums(2, 3)); // 2 ** 3 = 8
  // console.log(powerNums(2)); // 2 ** 2 = 4
  
  
  
  // ДЗ на 05.10
  // 1. Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.
  // 2. Напишите функцию, которая принимает число в качестве аргумента и возвращает его факториал (произведение всех положительных целых чисел от 1 до этого числа).
  // 3. Напишите функцию, которая принимает число в качестве аргумента и возвращает true, если число четное, и false, если число нечетное.
  // 4. Напишите функцию, которая принимает строку в качестве аргумента и возвращает true, если строка является палиндромом (читается одинаково слева направо и справа налево), и false в противном случае.
  // 5. Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее длину