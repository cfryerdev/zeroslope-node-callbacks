var _service = require("../services/sample.service");
const router = require("express").Router();

/**
 * @swagger
 * /sample:
 *    get:
 *      tags:
 *        - Sample
 *      summary: Gets a list of sample models
 *      description: Returns a list of sample models
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of sample models
 *              schema:
 *                $ref: '#/definitions/SampleResponse'
 */
router.get("/sample/", (req, res, next) => {
  _service.list((data, status, err) => {
    if (err) {
      return next(err);
    }
    return res.status(status).send(data);
  });
});

/**
 * @swagger
 * /sample/{id}:
 *    get:
 *      tags:
 *        - Sample
 *      summary: Reads a single sample model by id
 *      description: Returns a single of sample model
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Sample model's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: An single sample model
 *              schema:
 *                $ref: '#/definitions/SampleResponse'
 */
router.get("/sample/:id", (req, res, next) => {
  _service.read(req.params.id, (data, status, err) => {
    if (err) {
      return next(err);
    }
    return res.status(status).send(data);
  });
});

/**
 * @swagger
 * /sample:
 *    post:
 *      tags:
 *        - Sample
 *      summary: Creates and stores a sample model
 *      description: Returns a list of sample models
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Sample object
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/SampleRequest'
 *      responses:
 *          200:
 *              description: Successfully created
 */

router.post("/sample/", (req, res, next) => {
  _service.create(req.body, (data, status, err) => {
    if (err) {
      return next(err);
    }
    return res.status(status).send(data);
  });
});

/**
 * @swagger
 * /sample/{id}:
 *    put:
 *      tags:
 *        - Sample
 *      summary: Updates and stores a sample model
 *      description: Updates and stores a sample model
 *      produces: application/json
 *      parameters:
 *          - name: id
 *            description: Sample model's id
 *            in: path
 *            required: true
 *            type: string
 *          - name: Model
 *            in: body
 *            description: Fields for the Sample resource
 *            schema:
 *              type: array
 *              $ref: '#/definitions/SampleRequest'
 *      responses:
 *          200:
 *              description: Successfully updated
 */

router.put("/sample/:id", (req, res, next) => {
  _service.update(req.params.id, req.body, (data, status, err) => {
    if (err) {
      return next(err);
    }
    return res.status(status).send(data);
  });
});

/**
 * @swagger
 * /sample/{id}:
 *    delete:
 *      tags:
 *        - Sample
 *      summary: Deletes a sample mode by id
 *      description: Deletes a single sample by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Samples's id
 *         in: path
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */

router.delete("/sample/:id", (req, res, next) => {
  _service.remove(req.params.id, (data, status, err) => {
    if (err) {
      return next(err);
    }
    return res.status(status).send(data);
  });
});

/**
 * @swagger
 * tags:
 *   - name: Sample
 *     description: Sample endpoint with full crud
 */
module.exports = router;
