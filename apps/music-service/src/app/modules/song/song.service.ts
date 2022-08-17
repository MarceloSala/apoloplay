import {
  CreateSongDAO,
  CreateSongDTO,
  DeleteSongDAO,
  DeleteSongDTO,
  GetSongsDAO,
  UpdateSongDAO,
  UpdateSongDTO,
} from '@apoloplay/definitions';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SongDocument } from '../../models/song';

@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private songModel: Model<SongDocument>) {}

  async getAll(): Promise<GetSongsDAO | undefined> {
    try {
      return await this.songModel.find();
    } catch (error) {}
  }

  async create(
    createSongDTO: CreateSongDTO
  ): Promise<CreateSongDAO | undefined> {
    try {
      return await this.songModel.create({
        ...createSongDTO,
        _id: new Types.ObjectId(),
      });
    } catch (error) {}
  }

  async updateById(
    updateSongDTO: UpdateSongDTO
  ): Promise<UpdateSongDAO | undefined> {
    try {
      const oldSong = await this.songModel.findById(updateSongDTO);

      return await this.songModel.findByIdAndUpdate(updateSongDTO._id, {
        ...updateSongDTO,
      });
    } catch (error) {}
  }

  async deleteById(
    deleteSongDTO: DeleteSongDTO
  ): Promise<DeleteSongDAO | undefined> {
    try {
      return await this.songModel.findByIdAndDelete(deleteSongDTO._id);
    } catch (error) {}
  }
}
