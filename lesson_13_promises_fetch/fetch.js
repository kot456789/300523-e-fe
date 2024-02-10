// 1. Отправить fetch-запрос по ссылке https://jsonplaceholder.typicode.com/users и вывести полученные данные в консоль



fetch('https://jsonplaceholder.typicode.com/users') // отправляем запрос на сервер, получаем в ответ промис
  .then(res => res.json()) // преобразуем полученные данные в json
  
// res - response

//   .then(json => console.log(json)) 

  .then(json => renderUsers(json)) // полученный по запросу json выводим в консоль


// 2. Написать функцию renderUsers, которая будет принимать массив с объекта и для каждого объекта создавать карточку пользователя (имя, юзернэйм). Все созданные карточки добавить в div.users_container

// 3. Для каждого пользователя вывести кликабельный имэйл

// 4. Для каждой карточки добавить стили - border, border-radius, padding
// 5. Из usersContainer сделать flex
// 6. Если имя пользователя начинается на букву C (любой регистр), то покрасить карточку в светло-желтый, а если нет - то в светло-зеленый

// 7. Для каждого пользователя добавить параграф с адресом в формате: 'Address: city (zipcode), street, suit'

const usersContainer = document.querySelector('.users_container');

const renderUsers = arr => {
  arr.forEach(el => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const usernameElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const addressElem = document.createElement('p');

    nameElem.innerText = `Name: ${el.name}`;
    usernameElem.innerText = `Username: ${el.username}`;
    emailElem.innerText = el.email;

    addressElem.innerText = `Address: ${el.address.city} (${el.address.zipcode}), ${el.address.street}, ${el.address.suite}`;

    emailElem.href = `mailto:${el.email}`;

    cardElem.classList.add('user_card');
    cardElem.style.backgroundColor = el.name[0].toLowerCase() === 'c' ? 'lightyellow' : 'lightgreen';

    cardElem.append(nameElem, usernameElem, emailElem, addressElem);
    usersContainer.append(cardElem);
  })
}