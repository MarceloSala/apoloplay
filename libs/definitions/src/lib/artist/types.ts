import { Types } from 'mongoose';


export interface Artist {
    _id: Types.ObjectId;
    image: string;
    name: string;
    alias: string;
    nationality: string;
  
}
