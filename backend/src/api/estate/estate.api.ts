import { Router } from 'express'
import { ApiPath, HttpCode, EstatesApiPath } from '~/common/enums'
import { estateService } from '~/services/services'

const initEstateApi = (apiRouter: Router): Router => {
  const estateRouter = Router()

  apiRouter.use(ApiPath.ESTATES, estateRouter)

  /**
   * @openapi
   * /api/v1/estate:
   *  get:
   *    summary: Return a list of estate
   *    tags:
   *      - Estate
   *    security:
   *      - bearerAuth: []
   *    responses:
   *      200:
   *        description: Successful response
   */
  estateRouter.get(EstatesApiPath.ROOT, async (_req, res) => {
    try {
      const estates = await estateService.getAllEstates()
      res.status(HttpCode.OK).json(estates)
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/estate/{id}:
   *  get:
   *    summary: Return an estate by id
   *    tags:
   *      - Estate
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
  estateRouter.get(EstatesApiPath.$ID, async (_req, res) => {
    try {
      const estate = await estateService.getEstateById(_req.params.id)
      res.status(HttpCode.OK).json(estate)
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/estate:
   *  post:
   *    summary: Create a new estate
   *    tags:
   *      - Estate
   *    security:
   *      - bearerAuth: []
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              companyId:
   *                type: string
   *              estateName:
   *                type: string
   *              estateLogo:
   *                type: string
   *              numberOfFlats:
   *                type: number
   *              numberOfBuildings:
   *                type: number
   *              constructionDetails:
   *                type: string
   *              amountOfMoney:
   *                type: string
   *              location:
   *                type: string
   *              status:
   *                type: string
   *              fundingState:
   *                type: string
   *              annualReturn:
   *                type: number
   *              duration:
   *                type: number
   *              distribution:
   *                type: number
   *              profit:
   *                type: string
   *              favorite:
   *                type: boolean
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  estateRouter.post(EstatesApiPath.ROOT, async (_req, res) => {
    try {
      const estate = await estateService.createNewEstate(_req.body)
      res.status(HttpCode.OK).json(estate)
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/estate/{id}:
   *  put:
   *    summary: Update an estate
   *    tags:
   *      - Estate
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
   *              companyId:
   *                type: string
   *              estateName:
   *                type: string
   *              estateLogo:
   *                type: string
   *              numberOfFlats:
   *                type: number
   *              numberOfBuildings:
   *                type: number
   *              constructionDetails:
   *                type: string
   *              amountOfMoney:
   *                type: string
   *              location:
   *                type: string
   *              status:
   *                type: string
   *              fundingState:
   *                type: string
   *              annualReturn:
   *                type: number
   *              duration:
   *                type: number
   *              distribution:
   *                type: number
   *              profit:
   *                type: string
   *              favorite:
   *                type: boolean
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  estateRouter.put(EstatesApiPath.$ID, async (_req, res) => {
    try {
      const estate = await estateService.updateEstate(_req.params.id, _req.body)
      res.status(HttpCode.OK).json(estate)
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error)
    }
  })

  /**
   * @openapi
   * /api/v1/estate/{id}:
   *  delete:
   *    summary: Delete an estate by id
   *    tags:
   *      - Estate
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
  estateRouter.delete(EstatesApiPath.$ID, async (_req, res) => {
    try {
      await estateService.deleteEstate(_req.params.id)
      res.status(HttpCode.NO_CONTENT).json()
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error)
    }
  })

  return estateRouter
}

export { initEstateApi }
