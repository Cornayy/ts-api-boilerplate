import { apiOptions } from './options';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        description: 'A boilerplate REST API',
        title: 'ts-api-boilerplate',
        version: '1.0.0'
    },
    servers: [
        {
            url: apiOptions.baseUrl
        }
    ]
};

export const options = {
    swaggerDefinition,
    apis: ['./src/**/*.yml']
};
