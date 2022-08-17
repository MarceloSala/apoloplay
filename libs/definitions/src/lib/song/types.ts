import { Types } from 'mongoose';

export interface Song {
  _id: Types.ObjectId;
  image: string;
  name: string;
  publish_year: number;
  artist: Types.ObjectId;
  url: string;
}

export type CleanSong = Omit<Song, '_id'>;
