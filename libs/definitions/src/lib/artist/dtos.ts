import { CleanArtist } from './types';

export interface GetArtistsDTO {
  limit?: number;
  offset?: number;
}

export type CreateArtistDTO = CleanArtist;

export type UpdateArtistDTO = Partial<CleanArtist> & {
  _id: string;
};

export type DeleteArtistDTO = Partial<CleanArtist> & {
  _id: string;
};
