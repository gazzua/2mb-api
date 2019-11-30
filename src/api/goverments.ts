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
        'data': await Records.findAll()
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
