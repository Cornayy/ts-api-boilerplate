import * as path from 'path';
import { ISeed } from '../types';
import { Logger } from '../utils/logger';
import { Service } from 'typedi';
import { promises } from 'fs';

@Service()
export class Seeder {
    private seeds: ISeed[] = [];

    public async load(dir) {
        const files = await promises.readdir(dir);

        return await Promise.all(
            files.map(async file => {
                const filePath = path.join(dir, file);
                const stats = await promises.stat(filePath);

                if (stats.isDirectory()) {
                    return this.load(filePath);
                }

                const regex = /.+seed.ts/;
                const isSeed = regex.test(filePath);

                if (isSeed) {
                    // Dynamically import seed, access the first exported object and add it to the seeds.
                    const seed = await import(`../../${filePath}`);
                    const data = (Object.values(seed)[0] as unknown) as ISeed;
                    this.seeds.push(data);
                }
            })
        );
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
