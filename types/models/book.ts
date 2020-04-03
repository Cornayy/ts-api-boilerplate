import { Document } from 'mongoose';

export interface IBook extends Document {
    _id: string;
    title: string;
    publishDate: Date;
    category: string;
    chapter: IChapter[];
}

export interface IChapter extends Document {
    title: string;
    numberOfPages: number;
}
