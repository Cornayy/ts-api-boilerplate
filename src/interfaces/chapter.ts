import { Document } from 'mongoose';

export interface IChapter extends Document {
    title: string;
    numberOfPages: number;
}
