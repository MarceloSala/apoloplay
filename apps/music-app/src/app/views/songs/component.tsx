import SongPreview from '../../components/songPreview/component';
import { SongArray } from '@apoloplay/mocks';

export const Songs = () => {
  return (
    <div>
      <div>
        {SongArray.map((song) => (
          <div>{song.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
