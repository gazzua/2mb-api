import { Router } from 'express';
import Records from '../entities/Records';

export default () => {
	const api = Router();	  
  // api/
	api.post('/records/new', async (req, res) => {
    try {
      const newRecord = await Records.create({
        p_name : req.body.pName,
        p_email : req.body.pEmail,
        p_birth : req.body.pBirth,
        symptom : req.body.symptom,
        prescription : req.body.prescription,
        next_reserve_date : req.body.nextReserveDate,
        h_id : req.body.hId,
        h_email : req.body.hEmail,
        });
      res.json({
        'result': 'success',
        newRecord
      });
    } catch(e) {
      res.json({
        'result': 'fail',
        'error': e
      });
    }

    })


	return api;
}
