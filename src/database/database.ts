import { connect } from 'mongoose';
import { Seeder } from './seeder';
import { Service } from 'typedi';
import { paths } from '../config/options';
import { Logger } from '../utils/logger';

@Service()
export class Database {
    private seeder: Seeder;

    constructor(seeder: Seeder) {
        this.seeder = seeder;
    }

    public async initialize() {
        try {
            const uri = `${process.env.MONGO_URI}/${process.env.MONGO_DB}-${process.env.NODE_ENV}`;

            Logger.info(`Connecting to MongoDB on URI: ${uri}`);

            connect(uri, {
                useCreateIndex: true,
                useFindAndModify: false,
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (err) {
            process.exit(0);
        }

        if (process.env.NODE_ENV === 'dev') {
            await this.seeder.load(paths.modules);
            this.seeder.seed();
        }
    }
}
