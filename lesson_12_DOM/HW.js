// Дан массив с объектами (данные о людях).
// На основе этого массива создаются карточки людей (фото,имя, фамилия, возраст) и добавляются в контейнер из html-документа
// Стилизовать карточку пользователя через css - добавить border, padding и разместить текст по центру карточки.
// Стилизовать peopleContainer через css - сделать флекс
// * К каждой карточке добавить кликабельную почтую При клике на почту открывается приложение по работе с почтой по умолчанию (https://www.w3schools.com/tags/att_a_href.asp)


const people = [
  {
  id: 1,
  email: "michael.lawson@reqres.in",
  first_name: "Michael",
  last_name: "Lawson",
  avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
  id: 2,
  email: "lindsay.ferguson@reqres.in",
  first_name: "Lindsay",
  last_name: "Ferguson",
  avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
  id: 3,
  email: "tobias.funke@reqres.in",
  first_name: "Tobias",
  last_name: "Funke",
  avatar: "https://reqres.in/img/faces/9-image.jpg"
  }
];