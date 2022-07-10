import { FC } from 'react';
import './songPreview.css';
import { Song } from '@apoloplay/definitions';

interface SongProps{
   songs:Song[];
}

export const SongPreview: FC<SongProps>= ({songs}) => {
  return (
    <>
      {songs.map((song) => (
      <img src={song.image} className="song"/>
     ))}

    </>    
  );
};

export default SongPreview;