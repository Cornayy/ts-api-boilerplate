import { ISeed } from './../interfaces/seed';
import { Logger } from '../utils/logger';
import { authorSeed } from '../seeds/author.seed';
import { bookSeed } from '../seeds/book.seed';
import { Service } from 'typedi';

@Service()
export class Seeder {
    private seeds: ISeed[] = [];

    constructor() {
        this.seeds.push(authorSeed);
        this.seeds.push(bookSeed);
    }

    public async seed() {
        try {
            this.seeds.forEach(async ({ Model, data }) => {
                const resource = await Model.find({});

                if (!resource.length) {
                    const { collectionName } = Model.collection;

                    data.forEach(async props => await new Model(props).save());
                    Logger.info(`${collectionName} seeded.`);
                }
            });
        } catch (err) {
            Logger.warn(err);
        }
    }
}
