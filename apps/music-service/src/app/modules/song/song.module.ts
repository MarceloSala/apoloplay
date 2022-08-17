import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongMongo, SongSchema } from '../../models/song';
import { SongController } from './song.controller';
import { SongService } from './song.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
