import * as mongoose from 'mongoose';

export interface IChapter extends mongoose.Document {
    title: string;
    numberOfPages: number;
}
