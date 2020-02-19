import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';

export class Database {
    public static async initialize() {
        try {
            mongoose.connect('mongodb://localhost:27017/bookstore', {
                useCreateIndex: true,
                useFindAndModify: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            autoIncrement.initialize(mongoose.connection);
        } catch (err) {
            process.exit(0);
        }

        // Lazy loading seeder to avoid auto increment initialization.
        const { Seeder } = await import('./seeder');
        Seeder.seed();
    }
}
