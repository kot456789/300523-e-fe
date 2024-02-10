// 2. Дан массив с объектами (данные о пользователях).
// При клике на кнопку add_user_btn на основе этого массива создаются карточки пользователей (имя, фамилия, возраст)
// Если пользователь онлайн, то покрасить карточку в  светло-зеленый цвет. Если не онлайн - то в светло-серый
// Добавить в каждую карточку параграф со статусом. Если пользователь онлайн, то  "Status: online", если не онлайн - "Status: offline"
// Сделать так, что по клику на кнопку отрисовывались карточки только совершеннолетних пользователей (>=18)
// Каждой карточке добавить аватар с картинкоq, доступной по ссылке под ключом avatar
const users = [
    {
      id: 1,
      firstname: 'Anton',
      lastname: 'Ivanov',
      age: 30,
      online: true,
      avatar: 'https://reqres.in/img/faces/7-image.jpg'
    },
    {
      id: 2,
      firstname: 'Oleg',
      lastname: 'Petrov',
      age: 14,
      online: false,
      avatar: 'https://reqres.in/img/faces/8-image.jpg'
    },
    {
      id: 3,
      firstname: 'Boris',
      lastname: 'Ushanov',
      age: 27,
      online: true,
      avatar: 'https://reqres.in/img/faces/9-image.jpg'
    },
    {
      id: 4,
      firstname: 'Irina',
      lastname: 'Sokolova',
      age: 54,
      online: true,
      avatar: 'https://reqres.in/img/faces/10-image.jpg'
    },
    {
      id: 5,
      firstname: 'Anna',
      lastname: 'Gribova',
      age: 10,
      online: true,
      avatar: 'https://reqres.in/img/faces/11-image.jpg'
    },
    {
      id: 6,
      firstname: 'Liana',
      lastname: 'Ivanova',
      age: 33,
      online: false,
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
    }
  ]

// const users = [
//     {
//       id: 1,
//       firstname: 'Anton',
//       lastname: 'Ivanov',
//       age: 30,
//       online: true
//     },
//     {
//       id: 2,
//       firstname: 'Oleg',
//       lastname: 'Petrov',
//       age: 14,
//       online: false
//     },
//     {
//       id: 3,
//       firstname: 'Boris',
//       lastname: 'Ushanov',
//       age: 27,
//       online: true
//     },
//     {
//       id: 4,
//       firstname: 'Irina',
//       lastname: 'Sokolova',
//       age: 54,
//       online: true
//     },
//     {
//       id: 5,
//       firstname: 'Anna',
//       lastname: 'Gribova',
//       age: 10,
//       online: true
//     },
//     {
//       id: 6,
//       firstname: 'Liana',
//       lastname: 'Ivanova',
//       age: 33,
//       online: false
//     }
//   ]

// const users = [
//     {
//       id: 1,
//       firstname: 'Anton',
//       lastname: 'Ivanov',
//       age: 30
//     },
//     {
//       id: 2,
//       firstname: 'Oleg',
//       lastname: 'Petrov',
//       age: 14
//     },
//     {
//       id: 3,
//       firstname: 'Boris',
//       lastname: 'Ushanov',
//       age: 27
//     },
//     {
//       id: 4,
//       firstname: 'Irina',
//       lastname: 'Sokolova',
//       age: 54
//     },
//     {
//       id: 5,
//       firstname: 'Anna',
//       lastname: 'Gribova',
//       age: 10
//     }
//   ]
const usersContainer = document.querySelector('.users_container');
const addUsersBtn = document.querySelector('.add_user_btn');

addUsersBtn.addEventListener('click', () => {
  users.
  filter(el => el.age >= 18)
  forEach(el => {
    const cardElem = document.createElement('div');
    const firstnameElem = document.createElement('p');
    const lastnameElem = document.createElement('p');
    const ageElem = document.createElement('p');
  
    firstnameElem.innerText = `Firstname: ${el.firstname}`;
    lastnameElem.innerText = `Lastname: ${el.lastname}`;
    ageElem.innerText = `Age: ${el.age}`;
    statusElem.innerText = `Status: ${el.online ? 'online' : 'offline'}`;
    // statusElem.innerText = el.online ? "Status: online" : "Status: offline";
  
    cardElem.classList.add('user_card');
    
    cardElem.style.backgroundColor = el.online ? 'lightgreen' : 'lightgray';

    cardElem.append(firstnameElem, lastnameElem, ageElem);
    usersContainer.append(cardElem);
  })
});


// // ---------------------
// // ---------------------
// // -----------------------

// // 2. Дан массив с объектами (данные о пользователях).
// // При клике на кнопку add_user_btn на основе этого массива создаются карточки пользователей (имя, фамилия, возраст)
// // Если пользователь онлайн, то покрасить карточку в  светло-зеленый цвет. Если не онлайн - то в светло-серый
// // Добавить в каждую карточку параграф со статусом. Если пользователь онлайн, то  "Status: online", если не онлайн - "Status: offline"
// // Сделать так, что по клику на кнопку отрисовывались карточки только совершеннолетних пользователей (>=18)
// // Каждой карточке добавить аватар с картинкой, доступной по ссылке под ключом avatar

// const users = [
//   {
//     id: 1,
//     firstname: 'Anton',
//     lastname: 'Ivanov',
//     age: 30,
//     online: true,
//     avatar: 'https://reqres.in/img/faces/7-image.jpg'
//   },
//   {
//     id: 2,
//     firstname: 'Oleg',
//     lastname: 'Petrov',
//     age: 14,
//     online: false,
//     avatar: 'https://reqres.in/img/faces/8-image.jpg'
//   },
//   {
//     id: 3,
//     firstname: 'Boris',
//     lastname: 'Ushanov',
//     age: 27,
//     online: true,
//     avatar: 'https://reqres.in/img/faces/9-image.jpg'
//   },
//   {
//     id: 4,
//     firstname: 'Irina',
//     lastname: 'Sokolova',
//     age: 54,
//     online: true,
//     avatar: 'https://reqres.in/img/faces/10-image.jpg'
//   },
//   {
//     id: 5,
//     firstname: 'Anna',
//     lastname: 'Gribova',
//     age: 10,
//     online: true,
//     avatar: 'https://reqres.in/img/faces/11-image.jpg'
//   },
//   {
//     id: 6,
//     firstname: 'Liana',
//     lastname: 'Ivanova',
//     age: 33,
//     online: false,
//     avatar: 'https://reqres.in/img/faces/12-image.jpg'
//   }
// ]

// const usersContainer = document.querySelector('.users_container');
// const addUsersBtn = document.querySelector('.add_user_btn');

// addUsersBtn.addEventListener('click', () => {
//   users
//     .filter(el => el.age >= 18)
//     .forEach(el => {
//       const cardElem = document.createElement('div');
//       const firstnameElem = document.createElement('p');
//       const lastnameElem = document.createElement('p');
//       const ageElem = document.createElement('p');
//       const statusElem = document.createElement('p');
//       const avatarElem = document.createElement('img');
    
//       firstnameElem.innerText = `Firstname: ${el.firstname}`;
//       lastnameElem.innerText = `Lastname: ${el.lastname}`;
//       ageElem.innerText = `Age: ${el.age}`;
//       statusElem.innerText = `Status: ${el.online ? 'online' : 'offline'}`;
//       // statusElem.innerText = el.online ? "Status: online" : "Status: offline";
    
//       cardElem.classList.add('user_card');

//       cardElem.style.backgroundColor = el.online ? 'lightgreen' : 'lightgray';

//       // avatarElem.setAttribute('src', el.avatar);
//       // avatarElem.setAttribute('alt', `${el.firstname} ${el.lastname}`);

//       avatarElem.src = el.avatar;
//       avatarElem.alt = `${el.firstname} ${el.lastname}`;
    
//       cardElem.append(avatarElem, firstnameElem, lastnameElem, ageElem, statusElem);
//       usersContainer.append(cardElem);
//     })
// });

