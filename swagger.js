const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'This is where all contact info is held'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);