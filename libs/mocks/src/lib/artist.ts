import { Artist } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const ArtirtsMock: Artist = {
    _id: new Types.ObjectId(),
    name: 'The Bees',
    gender: 'Pop'
};
