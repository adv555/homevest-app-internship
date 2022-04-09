import { Router } from 'express'
import get from 'lodash/get'
import { ApiPath, HttpCode } from '~/common/enums'
import { InvestmentsApiPath } from '~/common/enums/api/investments-api-path.enum'
import { isAuth } from '~/middlewares'
import { investmentService } from '~/services/services'
import { MakeInvestmentInputSchema } from '~/common/input-models'
import { isInvestor } from '~/middlewares/Auth/isInvestor.middleware'

export const initInvestmentApi = (apiRouter: Router): Router => {
  const investmentRouter = Router()

  apiRouter.use(ApiPath.INVESTMENTS, investmentRouter)

  /**
   * @openapi
   * /api/v1/estate/{estateId}/investments:
   *  post:
   *    summary: Make investment
   *    tags:
   *      - Investment
   *    parameters:
   *      - in: path
   *        name: estateId
   *    security:
   *      - bearerAuth: []
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              fullName:
   *                type: string
   *              companyName:
   *                type: string
   *              country:
   *                type: string
   *              city:
   *                type: string
   *              street:
   *                type: string
   *              zipcode:
   *                type: string
   *              nameOfBank:
   *                type: string
   *              nameOfCard:
   *                type: string
   *              cardNumber:
   *                type: string
   *              cvv:
   *                type: string
   *              agreeTerms:
   *                type: boolean
   *              agreeRisks:
   *                type: boolean
   *              expirationYear:
   *                type: number
   *              paymentAmount:
   *                type: number
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  investmentRouter.post(InvestmentsApiPath.ROOT, isAuth, isInvestor, async (req, res) => {
    try {
      const userId = get(req, 'user.id')
      const estateId = get(req, 'params.estateId')
      await MakeInvestmentInputSchema.validate(req.body, {
        abortEarly: false,
        strict: true,
      })

      const investment = await investmentService.makeInvestment({
        ...req.body,
        userId,
        estateId,
      })
      res.status(HttpCode.OK).json(investment)
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error)
    }
  })

  return investmentRouter
}
