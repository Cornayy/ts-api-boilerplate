import 'reflect-metadata';
import { Database } from './database/database';
import { Container } from 'typedi';

(async () => {
    Database.initialize();

    const { Router } = await import('./routes/router');
    const { App } = await import('./app');

    // tslint:disable-next-line: no-unused-expression
    new App(Container.get(Router));
})();
