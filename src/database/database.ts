import { connect } from 'mongoose';
import { Seeder } from './seeder';

export class Database {
    public static async initialize() {
        try {
            connect('mongodb://localhost:27017/bookstore', {
                useCreateIndex: true,
                useFindAndModify: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (err) {
            process.exit(0);
        }

        Seeder.seed();
    }
}
