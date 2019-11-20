import { Router } from 'express';
import Records from '../entities/Records';

/**
 * @swagger
 * tags:
 *   name: Hospitals
 *   description:  병원 api
 */
export default () => {
  const api = Router(); 
  /**
    * @swagger
    * /api/hospitals/records/new:
    *   post:
    *     summary: 환자 진료기록 등록하기
    *     parameters:
    *       - in: body
    *         name: body
    *         description: |
    *           환자 진료기록
    *         type: object
    *         schema:
    *          type: string
    *          properties:
    *              pName:
    *                  type: string
    *              pEmail:
    *                  type: string
    *              pBirth:
    *                  type: string
    *              symptom:
    *                  type: string
    *              prescription:
    *                  type: string
    *              nextReserveDate:
    *                  type: string
    *              hId:
    *                  type: integer
    *              hEmail:
    *                  type: string
    *     tags: [hospitals]
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
