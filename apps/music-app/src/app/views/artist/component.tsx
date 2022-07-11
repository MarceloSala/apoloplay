import './styles.css';
import {ArtistPreview } from '../../components/artistPreview/component';
import { ArtistsArray } from '@apoloplay/mocks';


export const Artists = () => {
  return (
    <div>
      <h1 className="title_Populares">Populares</h1>
      <div className="Populares">
            <ArtistPreview Artists={ArtistsArray}/>
       </div>

    </div>
  );
};

export default Artists;