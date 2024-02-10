// DOM - document object model

// 1. Найти элемент(объект) в документе(html-файле)
// document.querySelector() возращает первый элемент, подощедщий по условию селектора

const par = document.querySelector('.first_par');

// console.log(par);


// 2. Перекрасить цвет текста в par в красный

// par.style.color = '#D70040';

// 3. Перекрасить цвет заднего фона в par в светло-розовый

// par.style.backgroundColor = 'lightpink';


// 4. Добавить в html-документ кнопку, при клике на которую цвет текста в par меняется на красный

// 5. Найти созданную кнопку в html-документе и записать ее в переменную

const changeColorBtn = document.querySelector('.change_color_btn');

changeColorBtn.addEventListener('click', () => par.style.color = '#D70040');
// add-добавлятель
// Event-событие
// Listener-слушатель
// addEventListener-добавить слушатель события

// 6. Создать кнопку и параграф. При клике на кнопку менять цвет заднего фона параграфа. Если длина параграфа >= 30 символов, то цвет заднего фона должен быть светло-зеленый. Если меньше, то светло-желтый. При клике на кнопку также меняется размер шрифта на 32px

// найти элементы, с которыми планирую взаимодействие

const changeBackBtn = document.querySelector('.change_back_color');
const secondPar = document.querySelector('.second_par');

// добавили к кнопке слушатель события

// changeBackBtn.addEventListener('click', () => {
//   if(secondPar.innerText.length >= 30){
//     secondPar.style.backgroundColor = 'lightgreen'
//   } else {
//     secondPar.style.backgroundColor = 'lightyellow'
//   }
// });



// changeBackBtn.addEventListener('click', () => {
//   secondPar.innerText.length >= 30 ? secondPar.style.backgroundColor = 'lightgreen' : secondPar.style.backgroundColor = 'lightyellow'
// });


changeBackBtn.addEventListener('click', () => {
  secondPar.style.backgroundColor = secondPar.innerText.length >= 30 ? 'lightgreen' : 'lightyellow';
  secondPar.style.fontSize = '32px';
});

// console.log(secondPar);
// console.log(secondPar.innerText.length);