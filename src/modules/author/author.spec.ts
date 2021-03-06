import { agent as request } from 'supertest';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { apiOptions } from '../../config/options';
import { Container } from 'typedi';
import { App } from '../../app';

const { app } = Container.get(App);

describe('Testing authors route', () => {
    describe('index route', () => {
        it('Should return all authors', async () => {
            const { body } = await request(app).get(`${apiOptions.baseUrl}/authors`);
            const firstAuthor = body[0];

            expect(body).to.be.an('array');
            expect(firstAuthor).to.have.property('books');
        });
    });
});
