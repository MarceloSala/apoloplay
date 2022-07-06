
import { Types } from 'mongoose';

export interface Song {
    _id: Types.ObjectId;
    name: string;
    artist: string;
    gender: string;
  }