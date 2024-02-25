export const getUsers = callback => {
   fetch('https://dummyjson.com/users')
     .then(res => res.json())
     .then(json => callback(json.users))
 }

 export const getSingleUser = (user_id, call) => {
  fetch(`https://dummyjson.com/users/${user_id}`)
   .then(res => res.json())
   .then(json => call(json))
 }