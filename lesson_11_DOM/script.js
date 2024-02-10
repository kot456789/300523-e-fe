// 1. В html-документе создать кнопку и параграф. При клике на кнопку менять у параграфа размер текста на 26px и перекрашивать цвет заднего фона в светло-зеленый

const changeBtn = document.querySelector('.change_btn');
const changeText = document.querySelector('.change_text');

// changeBtn.addEventListener('click', () => {
//   changeText.style.fontSize = '26px';
//   changeText.style.backgroundColor = 'lightgreen'
// });


// 2. При клике на кнопку меняется цвет текста. Если текст содержит букву a, то цвет текста поменяется на красный. Если не содержит - то на синий

changeBtn.addEventListener('click', () => {
  changeText.style.color = changeText.innerText.includes('a') ? 'red' : 'blue'
});


// 3. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутрь контейнера добавляется параграф с текстом зеленого цвета Hello, world!

const addTextBtn = document.querySelector('.add_text_btn');
const addTextContainer = document.querySelector('.add_text_container');

addTextBtn.addEventListener('click', () => {
  // создать новый элемент p
  const new_text = document.createElement('p');

  // наполнить p текстом
  new_text.innerText = 'Hello, world!';

  // покрасить цвет текста в зеленый
  new_text.style.color = 'green';

  // добавить созданный p в div
  addTextContainer.append(new_text);
});


// 4. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутрь контейнера добавляется квадрат (div) красного цвета, высотой и шириной 30px и с border 3px solid purple

const addSquareBtn = document.querySelector('.add_square_btn');
const addSquareContainer = document.querySelector('.add_square_container');

// addSquareBtn.addEventListener('click', () => {
//   const square = document.createElement('div');

//   // square.style.backgroundColor = 'red';
//   // square.style.width = '30px';
//   // square.style.height = '30px';
//   // square.style.border = '3px solid purple';

//   square.classList.add('square');

//   addSquareContainer.append(square);
// });


// 4. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутрь контейнера добавляется квадрат (div) красного цвета и с border 3px solid purple. Первый квадрат добавится с 30х30px, каждый следующий квадрат будет высотой и шириной превышать предыдущий на 10px

let params = 20;

addSquareBtn.addEventListener('click', () => {
  const square = document.createElement('div');

  square.classList.add('square');

  params += 10;

  square.style.width = params + 'px';
  square.style.height = params + 'px';

  addSquareContainer.append(square);
});


// 5. В html-документе создать два квадрата 50х50 - синий и зеленый. При клике на синий квадрат - зеленый перекрашивается в желтый и уменьшается до размеров 30х30. При клике на зеленый - синий увеличивается до размеров 70х70 и у него появляется border

const blueSquare = document.querySelector('.blue_square');
const greenSquare = document.querySelector('.green_square');

blueSquare.addEventListener('click', () => {
  greenSquare.style.backgroundColor = 'yellow';
  greenSquare.style.width = '30px';
  greenSquare.style.height = '30px';
});

greenSquare.addEventListener('click', () => {
  blueSquare.style.width = '70px';
  blueSquare.style.height = '70px';
  blueSquare.style.border = '4px solid lightpink'
});


// 6. Создать кнопку и пустой контейнер. При клике на кнопку в контейнер добавляется два параграфа с произвольным текстом. Один параграф синего цвета, второй - зеленого

const addParsBtn = document.querySelector('.add_pars_btn');
const parsContainer = document.querySelector('.pars_container');

addParsBtn.addEventListener('click', () => {
  const par1 = document.createElement('p');
  const par2 = document.createElement('p');

  par1.innerText = 'this is the first paragraph';
  par2.innerText = 'this is the second paragraph';

  par1.style.color = 'blue';
  par2.style.color = 'green';

  parsContainer.append(par1, par2);
});