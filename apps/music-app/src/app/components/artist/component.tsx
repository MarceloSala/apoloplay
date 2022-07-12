import { FC, useState } from 'react';
import './componentArtist.css';
import { Artist } from '@apoloplay/definitions';

interface ArtistProps {
  artists: Artist[];
  handleArtist: any;
}

export const ArtistPreview: FC<ArtistProps> = ({ artists, handleArtist }) => {
  return (
    <>
      {artists.map((artist) => (
        <div key={artist._id.toString()} className="artist">
          <img
            src={artist.image}
            className="artist-img"
            onClick={(e) => handleArtist(e, artist)}
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
