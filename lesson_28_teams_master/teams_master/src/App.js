import './App.css';
import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ConfigurationsPage from './pages/ConfigurationsPage';
import TeamsPage from './pages/TeamsPage';
import { useState } from 'react';

function App() {

  const [ teams, setTeams ] = useState([]);
  const [ users, setUsers ] = useState([]);

  // 1. Принимает new_team и добавляет в teams
  const add_team = new_team => {
    setTeams([...teams, new_team])
  }

  const add_user = new_user => {
    setUsers([...users, new_user])
  }

  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/configurations' element={<ConfigurationsPage add_team={add_team} teams={teams} add_user={add_user} />} />
        <Route path='/teams' element={<TeamsPage />} />
      </Routes>
    </div>
  );
}

export default App;