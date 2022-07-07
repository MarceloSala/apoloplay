import { Artist } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const ArtirtsMock: Artist = {
    _id: new Types.ObjectId(),
    name: 'Stefani Joanne Angelina Germanotta',
    alias: 'Lady Gaga',
    nationality: 'Estadounidense',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lady-gaga-cumpleanos-1585388285.jpg?crop=0.715xw:1.00xh;0.143xw,0&resize=640:*',
   
};

export const ArtistsArray: Artist [] = [
    {
        _id: new Types.ObjectId(),
        name: 'Shakira Isabel Mebarak Ripoll',
        alias: 'Shakira',
        nationality: 'Colombiana',
        image: 'https://depor.com/resizer/HQgjD5K6SDwjYkurI7FLcucvR00=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/H42EXSOSQVCQ7HWEAIFVJNKH2Y.jpg',
       
    },{
        _id: new Types.ObjectId(),
      name: 'Adele Laurie Blue Adkins',
      alias: 'Adele',
      nationality: 'Britanica',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/640px-Adele_2016.jpg',
       
    },{
        _id: new Types.ObjectId(),
        name: 'Park Jae-sang',
        alias: 'PSY',
        nationality: 'Surcoreano',
        image: 'https://6.vikiplatform.com/image/14390feaf0cf496cae501a5bc06298b2.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
    }
]

