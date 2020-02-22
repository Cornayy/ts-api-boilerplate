import { agent as request } from 'supertest';
import { describe } from 'mocha';
import { expect } from 'chai';
import { Container } from 'typedi';
import { App } from '../../src/app';

const app = Container.get(App).app;

describe('Testing books route', () => {
    describe('index route', () => {
        it('Should return all books', async () => {
            const { body } = await request(app).get('/books');
            const firstBook = body[0];

            expect(body).to.be.an('array');
            expect(firstBook).to.have.property('title');
        });
    });
});
