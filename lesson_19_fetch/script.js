// 1. Отправить запрос по ссылке https://api.escuelajs.co/api/v1/products и из полученных данных отрисовать карточки товаров (images, title, price) в div.products_container

// const productsContainer = document.querySelector('.products_container');

// fetch('https://api.escuelajs.co/api/v1/products')
//   .then(res => res.json())
//   .then(json => renderProducts(json))


// const renderProducts = arr => {
//   arr.forEach(el => {
//     const cardElem = document.createElement('div');
//     const imgElem = document.createElement('img');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');

//     titleElem.innerText = `Title: ${el.title}`;
//     priceElem.innerText = `Price: ${el.price}$`;

//     imgElem.src = el.images[0];
//     imgElem.alt = el.title;

//     cardElem.append(imgElem, titleElem, priceElem);
//     productsContainer.append(cardElem);
//   })
// }

// --------------------------
// -------------------------
//--------------------------

// 1. Отправить запрос по ссылке https://api.escuelajs.co/api/v1/products и из полученных данных отрисовать карточки товаров (images, title, price) в div.products_container

// 2. Создать форму (3 инпута + кнопка) - title, price, images. При сабмите - формируется объект и выводится в консоль

// Пример объекта

// {
//   title: input value,
//   price: input value,
//   description: "Description of the product...",
//   categoryId: 1,
//   images: [input value]
// }

// 3. Отправить post-запрос со сформированным объектом

const productsContainer = document.querySelector('.products_container');
const addProductForm = document.querySelector('.add_product_form');

const getProductsInfo = () => {
  fetch('https://api.escuelajs.co/api/v1/products')
  .then(res => res.json())
  .then(json => renderProducts(json))
}

getProductsInfo(); // первичная отрисовка карточек

const addNewProduct = new_product => {
  fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    body: JSON.stringify(new_product),
    headers:  {'Content-Type': 'application/json;charset=utf-8'}
  })
  .then(res => res.json())
  .then(json => console.log(json))
}

const renderProducts = arr => {
  productsContainer.innerText = '';
  arr.forEach(({ title, price, images }) => {

    // const { title, price, images } = el;

    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}$`;

    imgElem.src = images[0];
    imgElem.alt = title;

    cardElem.append(imgElem, titleElem, priceElem);
    productsContainer.append(cardElem);
  })
}

addProductForm.addEventListener('submit', event => {
  event.preventDefault();

  const { title, price, image } = event.target;

  const newProduct = {
    title: title.value,
    price: price.value,
    description: "Description of the product...",
    categoryId: 1,
    images: [image.value]
  }

  addNewProduct(newProduct);

  event.target.reset();
});