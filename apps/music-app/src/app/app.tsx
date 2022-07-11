import { Route, Routes } from 'react-router-dom';
import Header from './components/header/component';
import Navbar from './components/navbar/component';
import Artists from './views/artist/component';
import Home from './views/home/component';
import Songs from './views/song/component';
import './styles.css';
import { FC } from 'react';
import Reproducer from './components/reproducer/component';
import { getSongProp } from './services/localStorage';

export const App: FC = () => {
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
