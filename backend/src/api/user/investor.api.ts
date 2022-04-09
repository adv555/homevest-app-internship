import { isInvestor } from '~/middlewares/Auth/isInvestor.middleware';
import { Router } from 'express';
import { ApiPath, HttpCode, InvestorsApiPath } from '~/common/enums';
import { isAuth } from '~/middlewares';
import { investorService } from '~/services/services';

const initInvestorApi = (apiRouter: Router): Router => {
  const investorRouter = Router();

  apiRouter.use(ApiPath.INVESTORS, investorRouter);

  /**
   * @openapi
   * /api/v1/investors:
   *  get:
   *    summary: Return a list of investors
   *    tags:
   *      - Investor
   *    security:
   *      - bearerAuth: []
   *    responses:
   *      200:
   *        description: Successful response
   */
  investorRouter.get(InvestorsApiPath.ROOT, isAuth, async (_req, res) => {
    try {
      const investors = await investorService.getAllInvestors();
      res.status(HttpCode.OK).json(investors);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  /**
  * @openapi
  * /api/v1/investors/{id}:
  *  get:
  *    summary: Return a investor by id
  *    tags:
  *      - Investor
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
  investorRouter.get(InvestorsApiPath.$ID, isAuth, async (_req, res) => {
    try {
      const investor = await investorService.getInvestorById(_req.params.id);
      res.status(HttpCode.OK).json(investor);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/investors:
   *  post:
   *    summary: Create a new investor
   *    tags:
   *      - Investor
   *    security:
   *      - bearerAuth: []
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              userId:
   *                type: string
   *              avatar:
   *                type: string
   *              username:
   *                type: string
   *              followersCount:
   *                type: number
   *              followingCount:
   *                type: number
   *              interest:
   *                type: string
   *              investment:
   *                type: string
   *              publication:
   *                type: string
   *              city:
   *                type: string
   *              phoneNumber:
   *                type: string
   *              paymentMethods:
   *                type: string
   *              zipcode:
   *                type: string
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  investorRouter.post(InvestorsApiPath.ROOT, isAuth, isInvestor, async (_req, res) => {
    try {
      const investor = await investorService.createNewInvestor(_req.body);
      res.status(HttpCode.OK).json(investor);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
 * @openapi
 * /api/v1/investors/{id}:
 *  put:
 *    summary: Update an investor
 *    tags:
 *      - Investor
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
 *              userId:
 *                type: string
 *              avatar:
 *                type: string
 *              username:
 *                type: string
 *              followersCount:
 *                type: number
 *              followingCount:
 *                type: number
 *              interest:
 *                type: string
 *              investment:
 *                type: string
 *              publication:
 *                type: string
 *              city:
 *                type: string
 *              phoneNumber:
 *                type: string
 *              paymentMethods:
 *                type: string
 *              zipcode:
 *                type: string
 *    responses:
 *      200:
 *        description: Successful response
 *      404:
 *        description: Not found response
 */
  investorRouter.put(InvestorsApiPath.$ID, isAuth, isInvestor, async (_req, res) => {
    try {
      const updateResult = await investorService.updateInvestor(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(updateResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/investors/{id}:
   *  delete:
   *    summary: Delete an investors by id
   *    tags:
   *      - Investor
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
  investorRouter.delete(InvestorsApiPath.$ID, isAuth, isInvestor, async (_req, res) => {
    try {
      const deleteResult = await investorService.deleteInvestor(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json(deleteResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/investors/{id}/user:
   *  get:
   *    summary: Return user by investor by id
   *    tags:
   *      - Investor
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
  investorRouter.get(InvestorsApiPath.GET_USER, isAuth, async (_req, res) => {
    try {
      const user = await investorService.getUser(_req.params.id);
      res.status(HttpCode.OK).json(user[0].user);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });
  return investorRouter;
};

export { initInvestorApi };
