import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import { getUsers } from './requests/users';
import { useState, useEffect } from 'react';
import { Context } from './context';
import { getProducts } from './requests/products';

function App() {
  // ----------------------------
  // getProducts();

  const [ products, setProducts ] = useState([]);

  useEffect(() => {          
    getProducts(setProducts)
  }, []);    // !функция useEffect вызывается один раз при перезагрузке компонента,чтобы массив выводился   в консоль 1 раз, а не бесконечно

  // console.log(products);

  const deleteProduct = id => setProducts(products.filter(el => el.id !== id)); // удаляем карточку Product

  const deleteAllProducts = () => setProducts([]); // удаляем все карточки Products

   // ----------------------------
  
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers(setUsers)
  }, []);  // !функция useEffect вызывается один раз при перезагрузке компонента,    чтобы массив выводился в консоль 1 раз, а не бесконечно

  const deleteUser = id => setUsers(users.filter(el => el.id !== id));  // удаляем карточку User

  const deleteAllUsers = () => setUsers([]);   // удаляем все карточки Users

  return (
    <div>
      <Context.Provider value={{ users, deleteUser, deleteAllUsers, products, deleteProduct, deleteAllProducts }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;