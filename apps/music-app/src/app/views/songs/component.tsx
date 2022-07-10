import './styles.css';
import {SongPreview } from '../../components/songPreview/component';
import { SongArray } from '@apoloplay/mocks';


export const Songs = () => {
  return (
    <div>
      <h1 className="title_Populares">Populares</h1>
      <div className="Populares">
            <SongPreview songs={SongArray}/>
       </div>
    </div>
  );
};

export default Songs;
