fetch('https://dummyjson.com/todos')
  .then(res => res.json())
  .then(json => renderTodos(json.todos))

const todosContainer = document.querySelector('.todos_container');

const renderTodos = arr => {
  arr.forEach(el => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const statusElem = document.createElement('p');

    titleElem.innerText = `Title: ${el.todo}`;
    statusElem.innerText = `Status: ${el.completed ? 'done' : 'not done'}`;

    cardElem.classList.add('todo_card');

    cardElem.append(titleElem, statusElem);
    todosContainer.append(cardElem);
  })
}