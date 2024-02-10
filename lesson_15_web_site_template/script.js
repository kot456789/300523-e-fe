const our_services = [
  {
    id: 1,
    title: 'Бухгалтерское обслуживание',
    img: './media/service_img.png'
  },
  {
    id: 2,
    title: 'Бухгалтерское обслуживание',
    img: './media/service_img.png'
  },
  {
    id: 3,
    title: 'Бухгалтерское обслуживание',
    img: './media/service_img.png'
  },
  {
    id: 4,
    title: 'Бухгалтерское обслуживание',
    img: './media/service_img.png'
  },
  {
    id: 5,
    title: 'Бухгалтерское обслуживание',
    img: './media/service_img.png'
  },
  {
    id: 6,
    title: 'Бухгалтерское обслуживание',
    img: './media/service_img.png'
  }
]

const servicesContainer = document.querySelector('.services_container');

our_services.forEach(el => {
  const cardElem = document.createElement('div');
  const titleElem = document.createElement('p');

  titleElem.innerText = el.title;

  cardElem.style.backgroundImage = `url('${el.img}')`;

  cardElem.append(titleElem);
  servicesContainer.append(cardElem);
});