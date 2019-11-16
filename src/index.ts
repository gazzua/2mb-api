import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import db from './db';
// import middleware from './middleware';
import api from './api';
import config from './config.json';

// db();
// 
const app: express.Application = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));


// app.use(middleware({ config, db }));
app.use('/api', api());

app.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${config.port}`);
});

export default app;
