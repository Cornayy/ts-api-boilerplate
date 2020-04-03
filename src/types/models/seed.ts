import { Model, Document } from 'mongoose';

export interface ISeed {
    Model: Model<Document>;
    data: object[];
}
