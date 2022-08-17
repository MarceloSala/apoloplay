import {
  CreateArtistDAO,
  CreateArtistDTO,
  DeleteArtistDAO,
  DeleteArtistDTO,
  GetArtistsDAO,
  UpdateArtistDAO,
  UpdateArtistDTO,
} from '@apoloplay/definitions';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ArtistDocument } from '../../models/artist';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel('Artist') private artistModel: Model<ArtistDocument>
  ) {}

  async getAll(): Promise<GetArtistsDAO | undefined> {
    try {
      return await this.artistModel.find();
    } catch (error) {
      return error;
    }
  }

  async create(createArtistDTO: CreateArtistDTO): Promise<CreateArtistDAO> {
    try {
      const createdUser = await this.artistModel.create({
        ...createArtistDTO,
        _id: new Types.ObjectId(),
      });
      return createdUser;
    } catch (error) {
      return error;
    }
  }

  async updateById(updateArtistDTO: UpdateArtistDTO): Promise<UpdateArtistDAO> {
    if (!updateArtistDTO._id) {
      throw new BadRequestException({
        errors: { message: 'Path `_id` is required.' },
      });
    }
    if (
      !(await this.artistModel.findById(
        new Types.ObjectId(updateArtistDTO._id)
      ))
    ) {
      throw new NotFoundException({
        errors: {
          message: `An Artist with ${'`'}_id${'`'}: ${'`'}${
            updateArtistDTO._id
          }${'`'} was not found`,
        },
      });
    }

    const { _id, ...cleanArtist } = updateArtistDTO;

    return await this.artistModel.findByIdAndUpdate(
      new Types.ObjectId(updateArtistDTO._id),
      cleanArtist
    );
  }

  async deleteById(
    deleteArtistDTO: DeleteArtistDTO
  ): Promise<DeleteArtistDAO | undefined> {
    if (!deleteArtistDTO._id) {
      throw new BadRequestException({
        errors: { message: 'Path `_id` is required.' },
      });
    }
    if (
      !(await this.artistModel.findById(
        new Types.ObjectId(deleteArtistDTO._id)
      ))
    ) {
      throw new NotFoundException({
        errors: {
          message: `An Artist with ${'`'}_id${'`'}: ${'`'}${
            deleteArtistDTO._id
          }${'`'} was not found`,
        },
      });
    }

    return await this.artistModel.findByIdAndDelete(deleteArtistDTO._id);
  }
}
