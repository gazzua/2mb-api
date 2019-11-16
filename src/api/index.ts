import { version } from '../../package.json';
import { Router } from 'express';
import users from './users';

export default () => {
	let api = Router();	

	api.use('/users', users());
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ 'status': 'success' });
	});

	return api;
}
