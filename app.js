const Express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const cors = require('cors');
const { errorHandler } = require('./src/middlewares/errorHandler');

const server = Express();

server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api/v1', routes);

server.use('*', (req, res) => res.json({ message: 'Not found! Woops!' }));
server.use(errorHandler);

server.listen(8080);
