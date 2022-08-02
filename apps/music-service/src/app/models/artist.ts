import { model, Schema } from 'mongoose';

const ArtistSchema = new Schema({
  name: { type: String },
  alias: { type: String },
  nationality: { type: String },
  songs: [[String]],
});

export const ArtistMongo = model('Song', ArtistSchema);
