import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import db from './db';
// import middleware from './middleware';
import { initializeDB } from './entities';
import api from './api';
import config from './config';
import swaggerSpec from './lib/swagger';
import swaggerUi from 'swagger-ui-express';

// db();
// 
const app: express.Application = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.cors.headers
}));

app.use(bodyParser.json());


// app.use(middleware({ config, db }));
initializeDB('aws')
.then((result) => {
  console.log('initialize DB result', result);
});


app.use('/api', api());

// swagger config
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(process.env.PORT || config.app.port, () => {
	console.log(`Started on port ${config.app.port}`);
});

export default app;
