import { connect } from 'mongoose';
import { Seeder } from './seeder';
import { Service } from 'typedi';

@Service()
export class Database {
    private seeder: Seeder;

    constructor(seeder: Seeder) {
        this.seeder = seeder;
    }

    public async initialize() {
        try {
            connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`, {
                useCreateIndex: true,
                useFindAndModify: false,
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (err) {
            process.exit(0);
        }

        this.seeder.seed();
    }
}
