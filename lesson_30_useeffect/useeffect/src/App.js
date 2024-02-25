import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import { useEffect, useState } from 'react';
import { getCategories } from './requests/products';
import { Context } from './context';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import UsersPage from './pages/UsersPage';
import { getUsers } from './requests/users';
import SingleUserPage from './pages/SingleUserPage';

function App() {

  const [ categories, setCategories ] = useState([]);  // создаём состояние и ложим пустой массив
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
    getUsers(setUsers);
  }, []);

  console.log(users)

  return (
    <div>
      <Context.Provider value={{ categories, users }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:category_name' element={<ProductsByCategoryPage />} />   
          <Route path='/products/:product_id' element={<SingleProductPage />} />
          <Route path='/users/:user_id' element={<SingleUserPage />} />
          <Route path='/users' element={<UsersPage />} />                    
        </Routes>                        
      </Context.Provider>                       
    </div>                                  /*эту переменную придумали (строка 33)-  :category_name(будет меняться)*/     
  )
}

export default App;





