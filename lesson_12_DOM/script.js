
// // 1. В html-документе создать кнопку и пустой контейнер. При клике на кнопку в контейнере появляется карточка пользователя (div). Внутри карточки 3 параграфа - имя, фамилия, возраст
// // Стилизовать карточку пользователя через css - добавить border, padding и разместить текст по центру карточки.
// // Стилизовать usersContainer через css - сделать флекс
// // В параграфы подставить данные из объекта user_info

// const user_info = {
//   id: 1,
//   firstname: 'Anton',
//   lastname: 'Ivanov',
//   age: 30
// }

// const addUserBtn = document.querySelector('.add_user_btn');
// const usersContainer = document.querySelector('.users_container');

// addUserBtn.addEventListener('click', () => {
//   const cardElem = document.createElement('div');
//   const firstnameElem = document.createElement('p');
//   const lastnameElem = document.createElement('p');
//   const ageElem = document.createElement('p');

//   firstnameElem.innerText = `Firstname: ${user_info.firstname}`;
//   lastnameElem.innerText = `Lastname: ${user_info.lastname}`;
//   ageElem.innerText = `Age: ${user_info.age}`;

//   cardElem.classList.add('user_card');

//   cardElem.append(firstnameElem, lastnameElem, ageElem);
//   usersContainer.append(cardElem);
// });