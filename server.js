const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
const projectsRouter = require('./routes/projectsRouter.js');

// MIDDLEWARE
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

// ROUTES
server.use('/api/projects', projectsRouter);

// CUSTOM MIDDLEWARE
server.use('/', (error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error
  });
});

module.exports = server;
