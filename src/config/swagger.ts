import { apiOptions } from './options';

const swaggerDefinition = {
    info: {
        description: 'A boilerplate REST API',
        title: 'ts-api-boilerplate',
        version: '1.0.0'
    },
    basePath: apiOptions.baseUrl
};

export const options = {
    swaggerDefinition,
    apis: ['./src/modules/**/*.ts']
};
