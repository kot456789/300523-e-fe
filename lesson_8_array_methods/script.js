// ДЗ

// 4. *Напишите функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы


const getUniqueElems = arr => {
    const new_arr = [];
  
    arr.forEach(el => {
      if(!new_arr.includes(el)){
        new_arr.push(el)
      }
    })
  
    return new_arr
  }
  
  // console.log(getUniqueElems([1, 2, 3, 3, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
  
  const uniqueElements = arr => arr.filter((element, index, array) => array.indexOf(element) === index);
  
  // Пример использования:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = uniqueElements(inputArray);
  // console.log(resultArray); // Выведет [1, 2, 3, 4, 5]
  
  
  
  // Array methods
  
  // .forEach(el => {}) - выполняет переданную функцию для каждого элемента массива, ничего не возращает
  // .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву
  
  // .filter(el => {}) - возвращает новый массив, в который попадут только ВСЕ те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию
  
  // .find(el => {}) - возвращает ОДИН элемент (первый), который отвечают переданному в callback-функцию условию
  
  // .reduce()
  // .sort()
  
  
  const names = ['Anna', 'Ivan', 'Boris', 'Anna', 'Anton', 'Anton'];
  
  const boris_filter = names.filter(el => el === 'Boris');
  const boris_find = names.find(el => el === 'Boris');
  
  const anna_filter = names.filter(el => el === 'Anna');
  const anna_find = names.find(el => el === 'Anna');
  
  // console.log(boris_filter); // ['Boris']
  // console.log(boris_find); // 'Boris'
  
  // console.log(anna_filter); // ['Anna', 'Anna']
  // console.log(anna_find); // 'Anna'
  
  
  // Задачи на метод find()
  
  // 1. Найти первый четный элемент в массиве чисел.
  
  const numbers = [23, 41, 26, 32, 68, 71, 24];
  const first_even_num = numbers.find(el => el % 2 === 0);
  
  // console.log(first_even_num);
  
  
  // 2. Написать функцию, которая принимает массив и возвращает первую строку из этого массива, содержащую определенное ключевое слово.
  
  const getFirstStr = arr => arr.find(el => el.toLowerCase().includes('hello'));
  
  // 3. Написать функцию, которая принимает массив и возвращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.
  
  const getAllStrs = arr => arr.filter(el => el.toLowerCase().includes('hello'));
  
  
  // 'hello'
  // ['hello, world', 'hi', 'Hello, Anton']
  
  // console.log(getFirstStr(['hello, world', 'hi', 'Hello, Anton'])); // 'hello, world'
  // console.log(getAllStrs(['hello, world', 'hi', 'Hello, Anton'])); // ['hello, world', 'Hello, Anton']
  
  
  // 4. Написать функцию, которая принимает массив и ключевое слово и возвращает первую строку из этого массива, содержащую определенное ключевое слово.
  
  const getFirstStr1 = (arr, key_word) => arr.find(el => el.toLowerCase().includes(key_word));
  
  // 5. Написать функцию, которая принимает массив и ключевое слово и возвращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.
  
  const getAllStrs1 = (arr, key_word) => arr.filter(el => el.toLowerCase().includes(key_word));
  
  // console.log(getFirstStr1(['hello, world', 'hi', 'Hello, Anton'], 'hello')); // 'hello, world'
  // console.log(getAllStrs1(['hello, world', 'hi', 'Hello, Anton'], 'hi')); // ['hi']
  
  
  // 6. Найти первый элемент, который является положительным и четным числом
  const nums = [-10, 1, 31, 34, -64, 56, 84];
  
  const firstNum = nums.find(el => el > 0 && el % 2 === 0);
  
  // 7. Найти все элементы, которые являются положительными и четными числами
  
  const allNums = nums.filter(el => el > 0 && el % 2 === 0);
  
  
  // console.log(firstNum); // 34
  // console.log(allNums); // [34, 56, 84]
  
  
  
  
  // ДЗ
  
  // Найти первое положительное число в массиве.
  // Найти первое отрицательное число в массиве.
  // Найти первый элемент, больший 100.
  // Найти первый элемент, начинающийся с определенной буквы.
  // *Найти первый элемент, который является палиндромом (читается одинаково с начала и с конца). => 'anna', 'sos', ...