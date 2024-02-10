// const userForm = document.querySelector('user_form');

// userForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // console.log(event.target);

//     userForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // отменяет поведение формы по умолчанию
        
//         const { firstname, lastname, age } = event.target;
      
//         const user = {
//           id: Date.now(),
//           firstname: firstname.value,
//           lastname: lastname.value,
//           age: +age.value
//         }
      
//         console.log(user);
//       });

//     // console.log(firstname.value);
//     // console.log(lastname.value);
//     // console.log(age.value);
    
// });



// // ЗАДАЧА
// // Создать форму с 3 инпутами + кнопка: название товара, его цена, страна производства
// // При сабмите формы - формируется объект с 4 ключами (id, title, price, country) и выводится этот объект в консоль


// const addProductForm = document.querySelector('.add_product_form');

// addProductForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const { title, price, country } = event.target;

//   const product = {
//     id: Date.now(),
//     title: title.value,
//     price: +price.value,
//     country: country.value
//   }

//   console.log(product);
// });

// -------------------
// -------------------
// -------------------
const userForm = document.querySelector('.user_form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault(); // отменяет поведение формы по умолчанию (сдесь обновление страницы)
  
  const { firstname, lastname, age } = event.target;

  const user = {
    id: Date.now(),// создаёт уникальный id
    firstname: firstname.value,
    lastname: lastname.value,
    age: +age.value // c + строка трансформируется в число
  }

  console.log(user);
});

// event.target - ссылка на элемент, с которым происходит событие

// деструктуризация объекта 

//+'28'   - унарный оператор(один знак и одна цифра)
//2 + 2   - бинарный оператор(две цифры и один знак)
//условие ? true : false  - тернарный оператор(три значения и ...)



// ЗАДАЧА
// Создать форму с 3 инпутами + кнопка: название товара, его цена, страна производства
// При сабмите формы - формируется объект с 4 ключами (id, title, price, country) и выводится этот объект в консоль

const addProductForm = document.querySelector('.add_product_form');

addProductForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { title, price, country } = event.target;

  const product = {
    id: Date.now(),
    title: title.value,
    price: +price.value,
    country: country.value
  }

  console.log(product);
});
