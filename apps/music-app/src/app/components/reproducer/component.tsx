import { LOCAL_STORAGE_KEYS, Song } from '@apoloplay/definitions';
import { FC, useCallback, useEffect, useState } from 'react';
import './reproducer.css';

interface ReproducerProps {
  song?: Song;
}

export const Reproducer: FC<ReproducerProps> = ({ song }) => {
  return (
    <>
      <div className="repro">
        <img src={song?.image} alt="!" className="repro-img" />
        <div className="song-info-container">
          <div className="repro-song">{song?.name}</div>
          <div className="repro-artist">{song?.artist.alias}</div>
        </div>
      </div>
    </>
  );
};

export default Reproducer;
