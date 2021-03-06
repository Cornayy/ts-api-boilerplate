import { agent as request } from 'supertest';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { apiOptions } from '../../config/options';
import { Container } from 'typedi';
import { App } from '../../app';

const { app } = Container.get(App);

describe('Testing books route', () => {
    describe('index route', () => {
        it('Should return all books', async () => {
            const { body } = await request(app).get(`${apiOptions.baseUrl}/books`);
            const firstBook = body[0];

            expect(body).to.be.an('array');
            expect(firstBook).to.have.property('title');
        });
    });
});
