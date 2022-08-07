import { Route, Routes } from 'react-router-dom';
import Header from './components/header/component';
import Navbar from './components/navbar/component';
import Artists from './views/artist/component';
import Home from './views/home/component';
import Songs from './views/song/component';
import './styles.css';
import { FC, useEffect, useState } from 'react';
import Reproducer from './components/reproducer/component';
import {
  getSongProps,
  saveArtistPropsArray,
  saveSongPropsArray,
} from './services/localStorage';
import { Artist, Song } from '@apoloplay/definitions';

export const App: FC = () => {
  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch('http://localhost:4200/songs');
      response
        .json()
        .then((data: Song[]) => {
          saveSongPropsArray(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchSongs();
    const fetchArtists = async () => {
      const response = await fetch('http://localhost:4200/artists');
      response
        .json()
        .then((data: Artist[]) => {
          saveArtistPropsArray(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchArtists();
  }, []);

  const [value, setValue] = useState(false);
  const [realSong, setRealSong] = useState<Song>();

  useEffect(() => {
    const interval = setInterval(() => {
      setRealSong(getSongProps());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const test = () => {
    value ? setValue(false) : setValue(true);
  };
  return (
    <>
      <div className="body-container">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song" element={<Songs />} />
            <Route path="/artist" element={<Artists />} />
          </Routes>
        </div>
        <Reproducer song={realSong} />
        <button onClick={() => test()}>CLICKME</button>
      </div>
    </>
  );
};

export default App;
