import { FC } from 'react';
import './componentSong.css';

import { Song } from '@apoloplay/definitions';
import { saveSongProp } from '../../services/localStorage';

interface SongProps {
  songs: Song[];
}

export const SongPreview: FC<SongProps> = ({ songs }) => {
  const handleSong = (song: Song) => {
    saveSongProp(song);
  };

  return (
    <>
      {songs.map((song) => (
        <div key={song._id.toString()} className="song">
          <img src={song.image} className="song-img" />
          <div
            className="song-name"
            onClick={() => {
              handleSong(song);
            }}
          >
            <p>{song.name}</p>
          </div>
          <hr className="song-div" />
          <div className="song-artist">
            <p>{song.artist.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SongPreview;
