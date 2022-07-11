import './styles.css';
import { SongPreview } from '../../components/song/component';
import { SongArray } from '@apoloplay/mocks';

export const Songs = () => {
  return (
    <>
      <h1 className="title_populares">Populares</h1>
      <div className="songs">
        <div className="populares">
          <SongPreview songs={SongArray} />
        </div>
      </div>
    </>
  );
};

export default Songs;
