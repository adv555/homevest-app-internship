/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Router } from 'express'
import { ApiPath, HttpCode, AppartmentsApiPath } from '~/common/enums'
// import { isAuth } from '~/middlewares'
// import { isDeveloper } from '~/middlewares/Auth/isDeveloper.middleware'
import { appartmentService } from '~/services/services'
import { upload } from 'src/middlewares/image-upload/image-upload.middleware'

const initAppartmentApi = (apiRouter: Router): Router => {
  const appartmentRouter = Router()

  apiRouter.use(ApiPath.APPARTMENTS, appartmentRouter)

  /**
   * @openapi
   * /api/v1/appartments:
   *  get:
   *    summary: Return a list of appartment
   *    tags:
   *      - Appartment
   *    security:
   *      - bearerAuth: []
   *    responses:
   *      200:
   *        description: Successful response
   */
  appartmentRouter.get(AppartmentsApiPath.ROOT, async (_req, res) => {
    try {
      const appartments = await appartmentService.getAllAppartments()
      res.status(HttpCode.OK).json(appartments)
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/appartments/{id}:
   *  get:
   *    summary: Return an appartment by id
   *    tags:
   *      - Appartment
   *    security:
   *      - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  appartmentRouter.get(AppartmentsApiPath.$ID, async (_req, res) => {
    try {
      const appartment = await appartmentService.getAppartmentById(_req.params.id)
      res.status(HttpCode.OK).json(appartment)
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/appartments:
   *  post:
   *    summary: Create a new appartment
   *    tags:
   *      - Appartment
   *    security:
   *      - bearerAuth: []
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              estateId:
   *                type: string
   *              nameOfBuilding:
   *                type: string
   *              numberOfRooms:
   *                type: string
   *              numberOfBathrooms:
   *                type: string
   *              typeOfParking:
   *                type: string
   *              price:
   *                type: string
   *              priceForM2:
   *                type: string
   *              location:
   *                type: string
   *              appartmentClass:
   *                type: string
   *              floors:
   *                type: string
   *              appartmentState:
   *                type: string
   *              currency:
   *                type: string
   *              yearOfOperation:
   *                type: string
   *              salesStatus:
   *                type: string
   *              investmentType:
   *                type: string
   *              lending:
   *                type: boolean
   *              installments:
   *                type: boolean
   *              mortgage:
   *                type: boolean
   *              images:
   *                type: string
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  appartmentRouter.post(AppartmentsApiPath.ROOT, async (_req, res) => {
    try {
      const appartment = await appartmentService.createAppartment(_req.body)
      res.status(HttpCode.OK).json(appartment)
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error)
    }
  })

  appartmentRouter.post(AppartmentsApiPath.UPLOAD, upload.array('images', 6), (req, res) => {
    const reqFiles = req.files! as Array<Express.MulterS3.File>
    const uploaded = reqFiles?.map(file => file.location).join()
    const body = req.body
    const apartment = { ...body, images: uploaded }

    try {
      return res.json({
        message: 'API-Successfully uploaded ' + req.files?.length + ' files!',
        apartment,
      })
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/appartments/{id}:
   *  put:
   *    summary: Update an appartment
   *    tags:
   *      - Appartment
   *    security:
   *      - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              estateId:
   *                type: string
   *              nameOfBuilding:
   *                type: string
   *              numberOfRooms:
   *                type: string
   *              numberOfBathrooms:
   *                type: string
   *              typeOfParking:
   *                type: string
   *              price:
   *                type: string
   *              priceForM2:
   *                type: string
   *              location:
   *                type: string
   *              appartmentClass:
   *                type: string
   *              floors:
   *                type: string
   *              appartmentState:
   *                type: string
   *              currency:
   *                type: string
   *              yearOfOperation:
   *                type: string
   *              salesStatus:
   *                type: string
   *              investmentType:
   *                type: string
   *              lending:
   *                type: boolean
   *              installments:
   *                type: boolean
   *              mortgage:
   *                type: boolean
   *              images:
   *                type: string
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  appartmentRouter.put(AppartmentsApiPath.$ID, async (_req, res) => {
    try {
      const updateResult = await appartmentService.updateAppartment(_req.params.id, _req.body)
      res.status(HttpCode.OK).json(updateResult)
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/appartments/{id}:
   *  delete:
   *    summary: Delete an appartment by id
   *    tags:
   *      - Appartment
   *    security:
   *      - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *    responses:
   *      204:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  appartmentRouter.delete(AppartmentsApiPath.$ID, async (_req, res) => {
    try {
      const deleteResult = await appartmentService.deleteAppartment(_req.params.id)
      res.status(HttpCode.NO_CONTENT).json(deleteResult)
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/appartments/{id}/estate:
   *  get:
   *    summary: Return an estate by appartment id
   *    tags:
   *      - Appartment
   *
   *    parameters:
   *      - in: path
   *        name: id
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  appartmentRouter.get(AppartmentsApiPath.GET_ESTATE, async (_req, res) => {
    try {
      const estate = await appartmentService.getEstate(_req.params.id)
      res.status(HttpCode.OK).json(estate[0].estate)
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error)
    }
  })
  return appartmentRouter
}

export { initAppartmentApi }
