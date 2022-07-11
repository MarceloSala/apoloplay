import { FC, useState } from 'react';
import './componentArtist.css';
import { Artist } from '@apoloplay/definitions';
import SongPreview from '../song/component';

interface ArtistProps {
  artists: Artist[];
}
export const ArtistPreview: FC<ArtistProps> = ({ artists }) => {
  const [display, setDisplay] = useState(false);

  const showSongs = (artist: Artist) => {
    console.log(artist.songs);
  };

  return (
    <>
      {artists.map((artist) => (
        <div key={artist._id.toString()} className="artist">
          <img
            src={artist.image}
            className="artist-img"
            onClick={() => showSongs(artist)}
          />
          <div className="artist-name">
            <p>{artist.alias}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default ArtistPreview;
