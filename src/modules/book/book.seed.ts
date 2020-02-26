import { Book } from './book';
import { ISeed } from '../../types';

export const bookSeed: ISeed = {
    Model: Book,
    data: [
        {
            category: 'Fantasy',
            chapters: [
                {
                    numberOfPages: 4,
                    title: 'Chapter 1'
                },
                {
                    numberOfPages: 6,
                    title: 'Chapter 2'
                }
            ],
            publishDate: new Date(2012, 1, 1),
            title: 'Harry Potter 1'
        },
        {
            category: 'Fantasy',
            chapters: [
                {
                    numberOfPages: 4,
                    title: 'Chapter 1'
                },
                {
                    numberOfPages: 6,
                    title: 'Chapter 2'
                }
            ],
            publishDate: new Date(2012, 1, 1),
            title: 'Harry Potter 2'
        },
        {
            category: 'Fantasy',
            chapters: [
                {
                    numberOfPages: 4,
                    title: 'Chapter 1'
                },
                {
                    numberOfPages: 6,
                    title: 'Chapter 2'
                }
            ],
            publishDate: new Date(2012, 1, 1),
            title: 'Harry Potter 3'
        }
    ]
};
