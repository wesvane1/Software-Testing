const routes = require('express').Router();
// There are two dots in the file path because we need to leave the routes folder so that we can make it to the controllers folder
const lesson1Controller = require('../controllers/lesson1')
 
routes.get('/', lesson1Controller.savannaRoute);
routes.get('/doggie', lesson1Controller.peachesRoute);
routes.get('/brother', lesson1Controller.brotherRoute)

module.exports = routes;