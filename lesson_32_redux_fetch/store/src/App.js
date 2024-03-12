import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/products/:category' element={<ProductsByCategoryPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;