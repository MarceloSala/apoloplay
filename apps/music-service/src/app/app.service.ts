import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';

@Injectable()
export class AppService {
  async index() {
    return {
      message: 'This is only an index',
      links: { songs: '/songs', artists: '/artists' },
    };
  }
}
