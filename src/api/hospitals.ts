import { Router } from 'express';

export default () => {
	let api = Router();	
  // perhaps expose some API metadata at the root
  
  // api/
	api.post('/new', (req, res) => {
    console.log(1, req.body);
    if (req.body.email == "jaemin95@naver.com") {
      res.json({
        type: 'P'
      })
    } else if (req.body.email == "yyw0078@naver.com") {
      res.json({
        type: 'G'
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
