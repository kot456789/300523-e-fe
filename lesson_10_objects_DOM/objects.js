const people = [
    {
      id: 1,
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia'
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Petrov',
      age: 12,
      city: 'Berlin',
      country: 'Germany'
    },
    {
      id: 3,
      first_name: 'irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France'
    },
    {
      id: 4,
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      city: 'Rome',
      country: 'Italy'
    }
  ];
  
  
  // 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]
  
  const people_info = people.map(el => `${el.first_name} ${el.last_name} (${el.city}, ${el.country})`);
  
  // console.log(people_info);
  
  
  // 2. Сформируйте массив из людей, чьи имена начинаются на 'I' (регистр буквы может быть и нижним) => [{}, {}]
  
  const i_people = people.filter(el => el.first_name[0].toLowerCase() === 'i');
  const i_people1 = people.filter(el => el.first_name.charAt(0).toLowerCase() === 'i');
  const i_people2 = people.filter(el => el.first_name[0].toLowerCase().startsWith('i'));
  
  // console.log(i_people);
  // console.log(i_people1);
  // console.log(i_people2);
  
  
  // 3. Сформируйте массив строк из совершеннолетних пользователей - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]
  
  const adult_people_info = people.filter(el => el.age >= 18).map(el => `${el.first_name} ${el.last_name} (${el.city}, ${el.country})`);
  
  // console.log(adult_people_info);
  