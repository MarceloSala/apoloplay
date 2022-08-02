import { model, Schema } from 'mongoose';

const SongSchema = new Schema({
  image: { type: String },
  name: { type: String },
  publish_year: { type: String },
  url: { type: String },
});

export const Song = model('Song', SongSchema);
