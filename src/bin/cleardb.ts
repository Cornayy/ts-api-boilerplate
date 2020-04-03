import { Logger } from '../utils/logger';
import { clearDatabase } from '../utils/cleardb';

if (process.env.NODE_ENV == null) {
    Logger.error('NODE_ENV is not set');
    process.exit(1);
}

clearDatabase();