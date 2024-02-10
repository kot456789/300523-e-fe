// 1. Создать форму (worker_form) с 3 инпутами + кнопка: first_name, last_name, avatar (https://reqres.in/img/faces/7-image.jpg)
// При сабмите формы формируется объект с данными работника и выводится в консоль

// Пример объекта

// {
//   id: unique,
//   first_name: '',
//   last_name: '',
//   avatar: ''
// }


// 2. Создать пустой массив workersData
// 3. При сабмите формы сформированный с данными работника объект добавлялся в массив workersData
// 4. Проверить как наполняет массив через console.log(workersData)

// 5. Написать функцию renderWorkers(), которая будет принимать в качестве аргумента массив с объектами, для каждого объекта создавать карточку с картинкой и двумя параграфами и добавлять карточку в div.workers_container

// 6. Стилизовать карточки - border, border-radius, padding, оцентровать текст и картинку внутри карточки
// 7. Из контейнера сделать грид - 4 колонки

// 8. К форме добавить 2 инпута - кол-во дней и ставка в день
// 9. В формирующимся объекте добавить 2 свойства - days и rate
// 10. Каждой карточке добавить параграф с информацией о зарплате сотрудника (зарплата = days * rate)

// 11. Добавить карточкам цвет заднего фона. Если зарплата сотрудника >= 1000, то цвет светло-зеленый, а если меньше 1000 - то светло-розовый

const workerForm = document.querySelector('.worker_form');
const workersContainer = document.querySelector('.workers_container');

const workersData = [];

workerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { first_name, last_name, avatar, days, rate } = event.target;

  const worker = {
    id: Date.now(),
    first_name: first_name.value,
    last_name: last_name.value,
    avatar: avatar.value,
    days: days.value,
    rate: rate.value
  }

  workersData.push(worker);
  renderWorkers(workersData);

  event.target.reset(); // очищаем инпуты после сабмита формы
});


const renderWorkers = workers_arr => {
  workersContainer.innerText = ''; // очищаем контейнер от отрисованных карточек из предыдущей версии массива workersData
  workers_arr.forEach(el => {
    const cardElem = document.createElement('div');
    const firstnameElem = document.createElement('p');
    const lastnameElem = document.createElement('p');
    const avatarElem = document.createElement('img');
    const salaryElem = document.createElement('p');

    firstnameElem.innerText = `Firstname: ${el.first_name}`;
    lastnameElem.innerText = `Lastname: ${el.last_name}`;
    salaryElem.innerText = `Salary: ${el.days * el.rate}$`;

    avatarElem.src = el.avatar;
    avatarElem.alt = `${el.first_name} ${el.last_name}`;

    cardElem.style.backgroundColor = el.days * el.rate >= 1000 ? 'lightgreen' : 'lightpink';

    cardElem.append(avatarElem, firstnameElem, lastnameElem, salaryElem);
    workersContainer.append(cardElem);
  })
}