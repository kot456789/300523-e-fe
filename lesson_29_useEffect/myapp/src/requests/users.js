export const getUsers = (func) => {
   fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(json => func(json))
 }