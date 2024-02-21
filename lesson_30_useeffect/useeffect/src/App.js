import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import { useEffect, useState } from 'react';
import { getCategories } from './requests/products';
import { Context } from './context';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';

function App() {

  const [ categories, setCategories ] = useState([]);  // создаём состояние и ложим пустой массив

  useEffect(() => {
    getCategories(setCategories)
  }, []);

  return (
    <div>
      <Context.Provider value={{ categories }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:category_name' element=      /*эту переменную придумали-  :category_name(будет меняться)*/     {<ProductsByCategoryPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;