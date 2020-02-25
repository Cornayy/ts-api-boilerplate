import { connect } from 'mongoose';
import { Seeder } from './seeder';

export class Database {
    public static async initialize() {
        try {
            connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`, {
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
