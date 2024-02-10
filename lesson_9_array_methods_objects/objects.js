// Объект - тип данных, в котором информация хранится в формате ключ: значение

const user = {
  id: 1,
  first_name: 'Oleg',
  last_name: 'Ivanov',
  age: 25,
  online: false,
  address: {
    city: 'Berlin',
    country: 'Germany',
    postcode: 10034
  },
  friends: ['Irina', 'Anna', 'Petr']
}

// console.log(user.first_name); // 'Oleg'
// console.log(user.age); // 25
// console.log(user.address); // {}
// console.log(user.address.city); // 'Berlin'
// console.log(user.address.postcode); // 10034


const users = [
  {
    id: 1,
    first_name: 'Oleg',
    last_name: 'Ivanov',
    age: 25
  },
  {
    id: 2,
    first_name: 'Anna',
    last_name: 'Petrova',
    age: 15
  },
  {
    id: 3,
    first_name: 'Irina',
    last_name: 'Sidorova',
    age: 35
  },
  {
    id: 4,
    first_name: 'igor',
    last_name: 'Ushanov',
    age: 57
  }
]


// 1. Вывести в консоль первый элемент массива users

// console.log(users[0]);


// 2. Вывести в консоль имя из второго элемента массива users

// console.log(users[1].first_name);


// 3. Вывести в консоль каждый элемент массива
// {}
// {}
// {}
// {}

// users.forEach(el => console.log(el));


// 4. Вывести в консоль имена всех пользователей

// users.forEach(el => console.log(el.first_name));


// 5. Для каждого пользователя вывести в консоль сообщение в следующем формате: 'Name: FIRST_NAME LAST_NAME, Age: AGE'
// 'Name: Oleg Ivanov, Age: 25'

// users.forEach(el => console.log(`Name: ${el.first_name} ${el.last_name}, Age: ${el.age}`));


// 6. Сформировать новый массив adult_users, в который попадут только совершеннолетние (>= 18) пользователи

const adult_users = users.filter(el => el.age >= 18);

const adult_users1 = [];
users.forEach(el => {
  if(el.age >= 18){
    adult_users1.push(el)
  }
});


// НЕПРАВИЛЬНО!!!
const adult_users2 = users.map(el => {
  if(el.age >= 18){
    return el
  }
});

// console.log('filter', adult_users);
// console.log('forEach', adult_users1);
// console.log('map', adult_users2);


// 7. Сформировать новый массив users_info, где для каждого элемента из массива users будет сформирована строка в формате 'Name: FIRST_NAME LAST_NAME, Age: AGE'
// ['...', '...', '...', '...']

const users_info = users.map(el => `Name: ${el.first_name} ${el.last_name}, Age: ${el.age}`);

// console.log(users_info);


// 8. Сформировать новый массив, в который попадут пользователи чье имя начинается на букву I / i
// [{}, {}]

const i_users = users.filter(el => el.first_name[0].toLowerCase() === 'i');

// console.log(i_users);


// 9. Создать новый массив users_sorted, в который попадут все элементы из массива users, отсортированные по возрасту в порядке возрастания

const users_sorted = users.slice().sort((a, b) => a.age - b.age);
const users_sorted1 = [...users].sort((a, b) => a.age - b.age);

// console.log(users_sorted);
// console.log(users_sorted1);


// ДЗ
// 1. Сформировать массив из пользователей, чья фамилия содержит букву S (любой регистр) => [{}, {}]
// 2. Сформировать массив из возрастов всех пользователей => [25, 15, 35, 57]
// 3. Сформировать массив из возрастов всех пользователей, отсортированными по возрасту в порядке убывания => [57, 35, 25, 15]

const age_sorted = users.map(el => el.age).sort((a, b) => b - a);

// console.log(age_sorted);

// 4. Сформировать массив из имен и фамилий пользователей => ['Oleg Ivanov', 'Anna Petrova', '...', '...']
// 5. Найти сумму возрастов всех пользователей, записать ее в переменную age_sum


// 6. *Найти первый элемент, который является палиндромом (читается одинаково с начала и с конца). => 'anna', 'sos', ...

const words = ['hello', 'sos', 'hi', 'anna', 'morning']; 

const palindrom_word = words.find(el => el.split('').reverse().join('') === el);

// console.log(palindrom_word);


// 7. Найти первый элемент, начинающийся с определенной буквы (s).

const s_word = words.find(el => el[0].toLowerCase() === 's');

// console.log(s_word);