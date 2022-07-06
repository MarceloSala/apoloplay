import { Song } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const SongMock: Song = {
    _id: new Types.ObjectId(),
    name: 'Poker Face',
    agePublic: 2008,
    alias: 'Lady Gaga'
};
