import { version } from '../../package.json';
import { Router } from 'express';
import users from './users';
import hospitals from './hospitals';
import goverments from './goverments';

export default () => {
	const api = Router();	

	api.use('/users', users());
	api.use('/hospitals', hospitals());
	api.use('/goverments', goverments());
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ 'status': 'success' });
	});

	return api;
}
