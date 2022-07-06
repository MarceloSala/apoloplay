import { Artist } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const ArtirtsMock: Artist = {
    _id: new Types.ObjectId(),
    name: 'Stefani Joanne Angelina Germanotta',
    alias: 'Lady Gaga',
    nationality: 'Estadounidense'
};
