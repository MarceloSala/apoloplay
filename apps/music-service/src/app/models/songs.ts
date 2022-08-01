
import { model, Schema } from 'mongoose';

const SongSchema = new Schema({
  name: {  type: String },
  last_name: {  type: String },
  email: { type: String },
  password: { type: String },
});

export const Song = model('Song', SongSchema);
