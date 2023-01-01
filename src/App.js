import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import PNF from './components/pnf/PNF';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="*" element={<PNF />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
