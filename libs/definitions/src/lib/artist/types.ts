import { Types } from 'mongoose';

export interface Artist {
  _id: Types.ObjectId;
  image: string;
  name?: string;
  alias: string;
  songs?: Types.ObjectId[];
}

export type CleanArtist = Omit<Artist, '_id'>;
