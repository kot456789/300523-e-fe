export const getProducts = (callback) => {
   fetch('https://dummyjson.com/products')
     .then(res => res.json())
     .then(json => callback(json.products))
   //   .then(json => console.log(json))
 }