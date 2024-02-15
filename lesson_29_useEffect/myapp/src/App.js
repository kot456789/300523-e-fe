import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import { getUsers } from './requests/users';
import { useState, useEffect } from 'react';
import { Context } from './context';

function App() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers(setUsers)
  }, []); // функция вызывается один раз при перезагрузке компонента 

  const deleteUser = id => setUsers(users.filter(el => el.id !== id));

  const deleteAllUsers = () => setUsers([]);

  return (
    <div>
      <Context.Provider value={{ users, deleteUser, deleteAllUsers }}>
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