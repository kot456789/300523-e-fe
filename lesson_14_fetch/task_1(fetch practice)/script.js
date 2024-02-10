// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products и вывести полученные данные в консоль

// 2. Из полученных по запросу данных сформировать карточки продуктов (title, description, price) и добавить их в div.products_container

// 3. К каждой карточке добавить картинку (первую) продукта в начало карточки

// 4. Стилизовать карточки - border, padding, border-radius, width 300px, выравнивание по центру, картинки во всех карточках сделать в формате 150х150px (без деформации изображения)
// 5. Стилизовать контейнер - сделать флекс

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  // .then(json => console.log(json.products))
  .then(json => renderProducts(json.products))

const productsContainer = document.querySelector('.products_container');

const renderProducts = arr => {
  arr.forEach(el => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const descrElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const avatarElem = document.createElement('img');

    titleElem.innerText = `Title: ${el.title}`;
    descrElem.innerText = `Description: ${el.description}`;
    priceElem.innerText = `Price: ${el.price}$`;

    avatarElem.src = el.images[0];// если несколько картинок, выбираем первую по индексу
    avatarElem.alt = el.title;// название к картинке

    cardElem.classList.add('product_card');

    cardElem.append(avatarElem, titleElem, descrElem, priceElem);
    productsContainer.append(cardElem);
  })
}