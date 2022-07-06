import { Types } from 'mongoose';
import internal = require('stream');
import { Artist } from '../artist';

export interface Song {
    _id: Types.ObjectId;
    name: string;
    alias: string;
    agePublic: number;
    artist: Artist;
  }