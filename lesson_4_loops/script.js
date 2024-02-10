// ДЗ

// 1. Выведите таблицу умножения для заданного числа N.

const getTable = num => {
    for(let i = 0; i <= 10; i++){
      console.log(`${num} * ${i} = ${num * i}`)
      // console.log(num * i)
    }
  }
  
  //getTable(7);
  
  
  const getTable1 = num => {
    let result = '';
    for(let i = 0; i <= 10; i++){
      result += `\n${num} * ${i} = ${num * i}`
    }
    return result
  }
  
  //console.log(getTable1(7))
  
  
  
  // ПРАКТИКА
  
  // 1. Написать функцию, которая принимает число в качестве аргумента и возращает сумму все нечетных чисел до этого числа (вкл)
  
  const getOddsSum = num => {
    let result = 0;
  
    for(let i = 1; i <= num; i++){
      if(i % 2 === 1){
        result += i
      }
    }
  
    return result
  }
  
  // console.log(getOddsSum(5)); // 1 + 3 + 5 = 9
  // console.log(getOddsSum(8)); // 1 + 3 + 5 + 7 = 16
  
  
  // 2. Написать функцию getEvenSum(), которая принимает два числа num1 и num2 и возвращает сумму всех четных чисел в диапазоне от num1 до num2
  
  const getEvenSum = (num1, num2) => {
    let sum = 0;
  
    if(num1 < num2){
      for(let i = num1; i <= num2; i++){
        if(i % 2 === 0){
          sum += i
        }
      }
    } else {
      for(let i = num1; i >= num2; i--){
        if(i % 2 === 0){
          sum += i
        }
      }
    }
  
    return sum
  }
  
  // console.log(getEvenSum(1, 4)); // 2 + 4 = 6
  // console.log(getEvenSum(6, 2)); // 6 + 4 + 2 = 12
  
  
  // 3. Написать функцию getEvenSum1(), которая принимает два числа num1 и num2 и возвращает сумму всех четных чисел в диапазоне между num1 и num2. Решить с использованием Math
  
  const getEvenSum1 = (num1, num2) => {
    let sum = 0;
  
    const start = Math.min(num1, num2);
    const finish = Math.max(num1, num2);
  
    for(let i = start; i <= finish; i++){
      if(i % 2 === 0){
        sum += i
      }
    }
  
    return sum
  }
  
  // console.log(getEvenSum1(1, 4)); // 2 + 4 = 6
  // console.log(getEvenSum1(6, 2)); // 6 + 4 + 2 = 12
  
  // Объект Math
  
  const a = Math.abs(7); // 7
  const b = Math.abs(-7); // 7
  
  const c = Math.min(2, 19, 3, -10, 9, 84); // -10
  const d = Math.max(2, 19, 3, -10, 9, 84); // 84
  
  const e = Math.pow(2, 4); // 2 ** 4 = 16
  
  const f = Math.floor(4.99); // 4 (вниз)
  const g = Math.ceil(4.000001); // 5 (вверх)
  const h = Math.round(4.32); // 4 (по правила математики)
  
  
  // 4. Сгенерировать случайное целое число от 0 до 10
  
  const step_1 = Math.random(); // случайное дробное число от 0 до 1
  const step_2 = step_1 * 10; // случайное дробное число от 0 до 10
  const step_3 = Math.round(step_2);
  
  const random_num = Math.round(Math.random() * 10);
  
  // console.log(step_1); // 0 - 1
  // console.log(step_2); // 0 - 10 (дробь)
  // console.log(step_3); // 0 - 10 (целое)
  
  // console.log(random_num);
  
  
  
  // 5. Сгенерировать случайное целое число от 0 до 100
  
  const random_num2 = Math.round(Math.random() * 100);
  
  // console.log(random_num2);
  
  
  // 6. Сгенерировать слуйчайное целое число от 10 до 20
  
  const random_num3 = Math.round(Math.random() * 10 + 10); 
  
  // console.log(random_num3);
  
  
  // 7. Сгенерировать слуйчайное целое число от 5 до 12
  
  const random_num4 = Math.round(Math.random() * 7 + 5); 
  
  // console.log(random_num4);