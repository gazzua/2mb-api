import { Router } from 'express';

export default () => {
	let api = Router();	
  // perhaps expose some API metadata at the root
  
  // api/
	api.post('/type', (req, res) => {
    console.log(1, req.body);
    if (req.body.email == "jaemin95@naver.com") {
      res.json({
        type: 'P'
      })
    } else {
      res.json({
        type: 'H',
        hId: '1',
      })
    }
	});

	return api;
}
