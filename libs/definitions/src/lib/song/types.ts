import { Types } from 'mongoose';
import { Artist } from '../artist';

export interface Song {
    _id: Types.ObjectId;
    image: string;
    name: string;
    publish_year: number;
    artist: Artist;
    url?: string;
  }