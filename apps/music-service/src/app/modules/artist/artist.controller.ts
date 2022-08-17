import {
  CreateArtistDAO,
  CreateArtistDTO,
  DeleteArtistDAO,
  DeleteArtistDTO,
  GetArtistsDAO,
  UpdateArtistDAO,
  UpdateArtistDTO,
} from '@apoloplay/definitions';
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ArtistService } from './artist.service';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('all')
  async getAll(): Promise<GetArtistsDAO | undefined> {
    return await this.artistService.getAll();
  }

  @Post()
  async create(
    @Body() createArtistDTO: CreateArtistDTO
  ): Promise<CreateArtistDAO | undefined> {
    return await this.artistService.create(createArtistDTO);
  }

  @Patch()
  async updateById(
    @Body() updateArtistDTO: UpdateArtistDTO
  ): Promise<UpdateArtistDAO | undefined> {
    return await this.artistService.updateById(updateArtistDTO);
  }

  @Delete()
  async deleteById(
    @Body() deleteArtistDTO: DeleteArtistDTO
  ): Promise<DeleteArtistDAO | undefined> {
    return await this.artistService.deleteById(deleteArtistDTO);
  }
}
