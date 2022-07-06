import { Route, Routes } from 'react-router-dom';
import Header from './components/header/component';
import Navbar from './components/navbar/component';
import Artists from './views/artist/home/component';
import Home from './views/home/component';
import Songs from './views/songs/component';
import './styles.css';

export const App = () => {
  return (
    <>
      <div className="body-container">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
