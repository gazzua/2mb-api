import { Router } from 'express';

/**
 * @swagger
 * tags:
 *   name: users
 *   description:  user api
 */
export default () => {
	const api = Router();  
  /**
    * @swagger
    * /api/users/type:
    *   post:
    *     summary: 로그인한 유저 type 가져오기
    *     parameters:
    *       - in: body
    *         name: body
    *         description: |
    *           로그인한 유저 email
    *         type: object
    *         schema:
    *          type: string
    *          properties:
    *              email:
    *                  type: string
    *     tags: [users]
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
	api.post('/type', (req, res) => {
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
