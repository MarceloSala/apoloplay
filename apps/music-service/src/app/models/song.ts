import { Song } from '@apoloplay/definitions';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class SongMongo implements Song {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  publish_year: number;

  @Prop({ type: Types.ObjectId, required: true })
  artist: Types.ObjectId;

  @Prop({ type: String, required: true })
  url: string;
}

export type SongDocument = SongMongo & Document;

export const SongSchema = SchemaFactory.createForClass(SongMongo);
