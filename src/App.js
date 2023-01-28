// Importing components
import Footer from './components/footer/Footer'; // Footer component
import Header from './components/header/Header'; // Header component
import Menu from './components/menu/Menu'; // Menu component
import PNF from './components/pnf/PNF'; // 404 page component
import SingleGame from './components/single-game/SingleGame'; // Single game component

import { Routes, Route } from 'react-router-dom'; // Importing routing components from react-router-dom library
import About from './components/about/About';

// App component
function App() {
  return (
    <div className="App">
      <Header /> {/* Renders the Header component */}
      <Routes>
        {/*Default route, renders the Menu component */}
        <Route path="/" element={<Menu />} />
        {/* Single game route, renders the SingleGame component with props title and content */}
        <Route path="single-game" element={<SingleGame />} />
        <Route path="about" element={<About />} />
        {/* 404 route, renders the PNF component */}
        <Route path="*" element={<PNF />} />
      </Routes>
      <Footer /> {/* Renders the Footer component */}
    </div>
  );
}

export default App; // Exports the App component
