import { Song } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const SongMock: Song = {
    _id: new Types.ObjectId(),
    name: 'Staying Live',
    artist: 'THe Bees',
    gender: 'Pop'
};
