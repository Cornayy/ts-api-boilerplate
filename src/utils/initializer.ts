import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';

export class Initializer {
    public static increment(): void {
        autoIncrement.initialize(mongoose.connection);
    }
}
