import { Types } from 'mongoose';

export interface Artist {
    _id: Types.ObjectId;
    name: string;
    gender: string;
}
