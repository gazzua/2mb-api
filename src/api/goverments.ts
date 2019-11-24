import { Router } from 'express';
import Records from '../entities/Records';

/**
 * @swagger
 * tags:
 *   name: goverments
 *   description:  정부 api
 */
export default () => {
  const api = Router(); 
  /**
    * @swagger
    * /api/goverments/records:
    *   get:
    *     tags: [goverments]
    *     responses:
    *       200:
    *         description: 성공
    *       403:
    *         $ref: '#/components/res/Forbidden'
    *       404:
    *         $ref: '#/components/res/NotFound'
    *       500:
    *         $ref: '#/components/res/BadRequest'
    */
	api.get('/records', async (req, res) => {
    try {
      const response = {
        'result': 'success',
        'data': [
          {"p_name": "kms", "h_id": 1, "hash": "098f6bcd4621d373cade4e832627b4f6"},
          {"p_name": "wjm", "h_id": 1, "hash": "9cbef8134c1cc2baf2421cbb3981b594"}
        ]
      }
      res.json(response);
    } catch(e) {
      res.json({
        'result': 'fail',
        'error': e
      });
    }

    })


	return api;
}
