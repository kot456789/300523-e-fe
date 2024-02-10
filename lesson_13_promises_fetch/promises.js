let number = 10;

// setTimeout(() => {
//   number = 45;
//   console.log(number); // 45
// }, 3000);

const new_number = new Promise((res) => {
  setTimeout(() => {
    res(number = 45);
  }, 3000)
})
.then(() => console.log(number))

console.log(number); // 10

/*
⁠Вопрос:
Что такое промисы (Promises)?

Ответ: 
Промисы — это один из приемов работы с асинхронным кодом в JS. Они возвращают результат асинхронной операции. Промисы были придуманы для решения проблемы так называемого «ада функций обратного вызова» / «ада коллбэков» (когда много коллбэков вложены друг в друга). То промисы помогают улучшить читаемость и управляемость асинхронного кода, делая его более структурированным и предсказуемым.

Промис имеет три состояния: 
 1. Ожидание (Pending): Исходное состояние, когда асинхронная операция выполняется, но результат еще не определен. 
 2. Выполнено (Fulfilled/Resolved): Состояние, когда асинхронная операция завершилась успешно, и результат доступен. 
 3. Отклонено (Rejected): Состояние, когда асинхронная операция завершилась с ошибкой, и результат является ошибкой.

Промисы обладают следующими основными методами: 
 4. .then() - позволяет привязать обработчики для успешного (resolve) и неуспешного (reject) завершения промиса. Он возвращает новый промис, который может быть использован для дальнейших цепочек обработки. 
 5. .catch() - используется для обработки ошибок (reject) промиса.  
 6. .finally() - позволяет выполнить определенный код независимо от того, завершился ли промис успешно или с ошибкой.
*/