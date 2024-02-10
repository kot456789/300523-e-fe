// 1. При клике на .menu_icon у .nav_menu появляется класс active, если его нет. А если класс active у .nav_menu уже есть, то класс active удаляется


// .classList.add() - добавляет класс
// .classList.remove() - удаляет класс
// .classList.toggle() - добавляет класс, если его нет, и удаляет, если он есть


const menuIcon = document.querySelector('.menu_icon');
const navMenu = document.querySelector('.nav_menu');

menuIcon.addEventListener('click', () => navMenu.classList.toggle('active'));


// !ДЗ

// 2. Реализовать открытие модального окна при клике на Account
// При клике на account - к div.popup добавлять класс modal_active

// 3. Реализовать модального окна при клике на .close_modal_icon
// При клике на Х - у div.popup удалять класс modal_active

const accountBtn = document.querySelector('.account_btn');
const closeModalIcon = document.querySelector('.close_modal_icon');
const popupWindow = document.querySelector('.popup');

accountBtn.addEventListener('click', () => {
  popupWindow.classList.add('modal_active')
});

closeModalIcon.addEventListener('click', () => {
  popupWindow.classList.remove('modal_active')
});