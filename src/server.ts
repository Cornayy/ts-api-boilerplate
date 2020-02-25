import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { Container } from 'typedi';
import { Router } from './routes/router';
import { Database } from './database/database';
import { App } from './app';

// Set environment variables.
dotenv.config();

// tslint:disable-next-line: no-unused-expression
new App(Container.get(Router), Container.get(Database));
