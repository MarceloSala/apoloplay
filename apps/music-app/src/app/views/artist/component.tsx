import './styles.css';
import { ArtistPreview } from '../../components/artist/component';
import { ArtistsArray } from '@apoloplay/mocks';
import { useState } from 'react';
import { Artist, Song } from '@apoloplay/definitions';
import SongPreview from '../../components/song/component';

export const Artists = () => {
  const [artist, setArtist] = useState<Song[]>();

  const handleArtist = (e: any, artist: Artist) => {
    console.log(e.target);
    setArtist(artist.songs);
  };
  return (
    <>
      <h1 className="title_populares">Populares</h1>
      <div className="artists">
        <div className="populares">
          <ArtistPreview artists={ArtistsArray} handleArtist={handleArtist} />
        </div>
        <div className="test">
          <SongPreview songs={artist}></SongPreview>
        </div>
      </div>
    </>
  );
};

export default Artists;
