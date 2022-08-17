import {
  CreateSongDAO,
  CreateSongDTO,
  DeleteSongDAO,
  DeleteSongDTO,
  GetSongsDAO,
  UpdateSongDAO,
  UpdateSongDTO,
} from '@apoloplay/definitions';
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('all')
  async getAll(): Promise<GetSongsDAO | undefined> {
    return await this.songService.getAll();
  }

  @Post()
  async create(
    @Body() createSongDTO: CreateSongDTO
  ): Promise<CreateSongDAO | undefined> {
    return await this.songService.create(createSongDTO);
  }

  @Patch()
  async updateById(
    @Body() updateSongDTO: UpdateSongDTO
  ): Promise<UpdateSongDAO | undefined> {
    return await this.songService.updateById(updateSongDTO);
  }

  @Delete()
  async deleteById(
    @Body() deleteSongDTO: DeleteSongDTO
  ): Promise<DeleteSongDAO | undefined> {
    return await this.songService.deleteById(deleteSongDTO);
  }
}
