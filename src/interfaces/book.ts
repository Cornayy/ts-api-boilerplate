import * as mongoose from 'mongoose';
import { IChapter } from './chapter';

export interface IBook extends mongoose.Document {
    _id: string;
    title: string;
    publishDate: Date;
    category: string;
    chapter: IChapter[];
}
