import { CleanSong } from './types';

export interface GetSongsDTO {
  limit?: number;
  offset?: number;
}

export type CreateSongDTO = CleanSong;

export type UpdateSongDTO = Partial<CleanSong> & {
  _id: string;
};

export type DeleteSongDTO = Partial<CleanSong> & {
  _id: string;
};
