import loglevel from 'loglevel';
import dotenv from 'dotenv';
import { loggerConfig } from '../config/logger';

dotenv.config();

loggerConfig(loglevel);

export const Logger = loglevel;
