import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import News from './components/News';
import Price from './components/Price';
import Sessions from './components/Sessions';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Sessions />
      <About />
      <Price />
      <News />
    </div>
  );
}

export default App;