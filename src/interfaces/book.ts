import { Document } from 'mongoose';
import { IChapter } from './chapter';

export interface IBook extends Document {
    _id: string;
    title: string;
    publishDate: Date;
    category: string;
    chapter: IChapter[];
}
