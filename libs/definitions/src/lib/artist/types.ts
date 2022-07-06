import { Types } from 'mongoose';
import internal = require('stream');
import { Song } from '../song';

export interface Artist {
    _id: Types.ObjectId;
    name: string;
    alias: string;
    nationality: string;
    song: Song ;
}
