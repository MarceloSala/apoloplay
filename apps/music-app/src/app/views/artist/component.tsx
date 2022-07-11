import './styles.css';
import { ArtistPreview } from '../../components/artist/component';
import { ArtistsArray } from '@apoloplay/mocks';

export const Artists = () => {
  return (
    <>
      <h1 className="title_populares">Populares</h1>
      <div className="artists">
        <div className="populares">
          <ArtistPreview artists={ArtistsArray} />
        </div>
      </div>
    </>
  );
};

export default Artists;
