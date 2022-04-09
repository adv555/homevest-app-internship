import { Router } from 'express';
import { ApiPath, HttpCode, UsersApiPath } from '~/common/enums';
import { userService } from '~/services/services';
import { isAuth } from '~/middlewares';

const initUserApi = (apiRouter: Router): Router => {
  const userRouter = Router();

  apiRouter.use(ApiPath.USERS, userRouter);

  /**
   * @openapi
   * /api/v1/users:
   *  get:
   *    summary: Return a list of user
   *    tags:
   *      - User
   *    security:
   *      - bearerAuth: [] 
   *    responses:
   *      200:
   *        description: Successful response
   */
  userRouter.get(UsersApiPath.ROOT, isAuth, async (_req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(HttpCode.OK).json(users);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/users/{id}:
   *  get:
   *    summary: Return an user by id
   *    tags:
   *      - User
   *    security:
   *      - bearerAuth: []
   *    parameters:
   *      - in: path
   *        name: id
   *    responses:
   *      200:
   *        description: Successful response
   */
  userRouter.get(UsersApiPath.$ID, isAuth, async (_req, res) => {
    try {
      const user = await userService.getUserById(_req.params.id);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/users:
   *  post:
   *    summary: Create a new user
   *    tags:
   *      - User
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              firstName:
   *                type: string
   *              lastName:
   *                type: string
   *              email:
   *                type: string
   *              password:
   *                type: string
   *              role:
   *                type: string
   *              isActivated:
   *                type: boolean
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  userRouter.post(UsersApiPath.ROOT, async (_req, res) => {
    try {
      const user = await userService.createNewUser(_req.body);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/users/{id}:
   *  put:
   *    summary: Update an user
   *    tags:
   *      - User
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
   *              firstName:
   *                type: string
   *              lastName:
   *                type: string
   *              email:
   *                type: string
   *              password:
   *                type: string
   *              role:
   *                type: string
   *              isActivated:
   *                type: boolean
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  userRouter.put(UsersApiPath.$ID, isAuth, async (_req, res) => {
    try {
      const updateResult = await userService.updateUser(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(updateResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/users/{id}:
   *  delete:
   *    summary: Delete an user by id
   *    tags:
   *      - User
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
  userRouter.delete(UsersApiPath.$ID, isAuth, async (_req, res) => {
    try {
      const deleteResult = await userService.deleteUser(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json(deleteResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });


  return userRouter;
};

export { initUserApi };
