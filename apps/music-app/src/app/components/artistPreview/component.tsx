import { FC } from 'react';
import './artistPreview.css';
import { Artist } from '@apoloplay/definitions';

interface ArtistProps{
   Artists:Artist[];
}
export const ArtistPreview: FC<ArtistProps>= ({Artists}) => {
  return (
    <>
      {Artists.map((artist) => (
      <img src={artist.image} className="artist"/>
     ))}

    </>    
  );
};
export default ArtistPreview;