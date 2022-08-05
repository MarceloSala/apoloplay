import './styles.css';
import { SongPreview } from '../../components/song/component';
import { SongArray } from '@apoloplay/mocks';
import { useEffect } from 'react';

export const Songs = () => {
  const test = async () => {
    // GET request using fetch with async/await
    const response = await fetch('https://api.npms.io/v2/search?q=react');
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <h1 className="title_populares">Populares</h1>
      <div className="songs">
        <div className="populares">
          <SongPreview songs={SongArray} />
        </div>
      </div>
    </>
  );
};

export default Songs;
