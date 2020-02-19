const swaggerDefinition = {
    info: {
        description: 'A boilerplate REST API',
        title: 'ts-api-boilerplate',
        version: '1.0.0'
    }
};

export const options = {
    swaggerDefinition,
    apis: ['./src/controllers/*.ts']
};
