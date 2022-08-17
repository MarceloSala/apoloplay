import { Artist } from '@apoloplay/definitions';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class ArtistMongo implements Artist {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: String, required: false })
  name: string;

  @Prop({ type: String, required: true })
  alias: string;

  @Prop({ type: Types.ObjectId, required: false })
  songs: Types.ObjectId[];
}

export type ArtistDocument = ArtistMongo & Document;

export const ArtistSchema = SchemaFactory.createForClass(ArtistMongo);
