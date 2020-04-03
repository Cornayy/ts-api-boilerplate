import * as dotenv from 'dotenv';
import { connection } from 'mongoose';
import { Logger } from '../utils/logger';
import { Container } from 'typedi';
import { Database } from '../database/database';

dotenv.config();

export const clearDatabase = async () => {
    if (process.env.NODE_ENV !== 'test') {
        Logger.warn('Refused attempt to drop database (not in test mode).');
        return;
    }

    const database = Container.get(Database);

    await database.initialize();
    await connection.dropDatabase();
    await connection.close();

    Logger.warn('Database dropped.');
};
