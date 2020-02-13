import 'reflect-metadata';
import { Database } from './database/database';
import { Router } from './routes/router';
import { App } from './app';
import { Container } from 'typedi';

// tslint:disable-next-line: no-unused-expression
new App(Container.get(Router), Container.get(Database));
