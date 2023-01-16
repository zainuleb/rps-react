//Importing components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import PNF from './components/pnf/PNF';
import SingleGame from './components/single-game/SingleGame';

import { Routes, Route } from 'react-router-dom';
import MultiPlayer from './components/multi-player/MultiPlayer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route
          path="single-game"
          element={<SingleGame title="Welcome" content="This is a modal" />}
        />
        <Route path="multi-game" element={<MultiPlayer />} />
        <Route path="*" element={<PNF />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
