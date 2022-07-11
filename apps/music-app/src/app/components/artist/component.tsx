import { FC } from 'react';
import './componentArtist.css';
import { Artist } from '@apoloplay/definitions';

interface ArtistProps {
  artists: Artist[];
}
export const ArtistPreview: FC<ArtistProps> = ({ artists }) => {
  return (
    <>
      {artists.map((artist) => (
        <div key={artist._id.toString()} className="artist">
          <img src={artist.image} className="artist-img" />
          <div className="artist-name">
            <p>{artist.alias}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default ArtistPreview;
