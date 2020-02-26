import { ISeed } from '../../types';
import { Author } from './author';

export const authorSeed: ISeed = {
    Model: Author,
    data: [
        {
            birthDate: new Date(1999, 1, 1),
            books: ['1'],
            country: 'NL',
            firstName: 'Henk',
            lastName: 'Slager',
            ranking: 1
        },
        {
            birthDate: new Date(2001, 1, 1),
            books: ['2', '3'],
            country: 'NL',
            firstName: 'Henk',
            lastName: 'Visser',
            ranking: 2
        }
    ]
};
