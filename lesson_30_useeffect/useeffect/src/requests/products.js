export const getCategories = (callback) => {              // функция которая отправляет запрос и сразу её экспортируем
  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => callback(json))
}

export const getProductsByCategory = (category, callback) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)  // ссылка статичная,но последнее слово меняется,поэтому обратные кавычки ``
    .then(res => res.json())
    .then(json => callback(json))
}

export const getSingleProduct = (product_id, callback) => {
  fetch(`https://fakestoreapi.com/products/${product_id}`)
    .then(res => res.json())
    .then(json => callback(json))
}

// requests -запросы