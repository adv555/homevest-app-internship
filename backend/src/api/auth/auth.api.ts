import { isAuth } from '~/middlewares';
import { Router } from 'express';
import { authService, logger } from '~/services/services';
import { ApiPath, HttpCode, AuthApiPath } from '~/common/enums';


const initAuthApi = (apiRouter: Router): Router => {
    const authRouter = Router();

    apiRouter.use(ApiPath.AUTH, authRouter);

    /**
     * @openapi
     * /api/v1/auth/registration:
     *  post:
     *    summary: Register a user
     *    tags:
     *      - Auth
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
     *    responses:
     *      201:
     *        description: Successful response
     */
    authRouter.post(AuthApiPath.REG, async (_req, res) => {
        try {
            const user = await authService.registerUser(_req.body);
            res.status(HttpCode.CREATED).json(user);
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({ error: error.message });
        }
    });

    /**
     * @openapi
     * /api/v1/auth/login:
     *  post:
     *    summary: Login a user
     *    tags:
     *      - Auth
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              email:
     *                type: string
     *              passwordToCompare:
     *                type: string
     *    responses:
     *      200:
     *        description: Successful response
     */
    authRouter.post(AuthApiPath.LOGIN, async (_req, res) => {
        const { email, passwordToCompare } = _req.body;
        try {
            const { accessToken, refreshToken } = await authService.loginUser(email, passwordToCompare);
            res.cookie("refresh_token", refreshToken, {
                // secure: true,
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });
            res
                .status(HttpCode.OK)
                .json({ accessToken, refreshToken });
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({ error: error.message });
        }
    });

    /**
     * @openapi
     * /api/v1/auth/activate/{link}:
     *  get:
     *    summary: Confirm user email
     *    tags:
     *      - Auth
     *    parameters:
     *      - in: path
     *        name: link
     *    responses:
     *      200:
     *        description: Successful response
     */
    authRouter.get(AuthApiPath.$ACTIVATE, async (_req, res) => {
        try {
            const link = _req.params.link;
            const activatedUser = await authService.activateUser(link);

            res
                .status(HttpCode.OK)
                .json({ activatedUser });
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({ error: error.message });
        }
    });

    /**
     * @openapi
     * /api/v1/auth/forgot-password:
     *  post:
     *    summary: Send recovery password email
     *    tags:
     *      - Auth
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              email:
     *                type: string
     *    responses:
     *      200:
     *        description: Successful response
     */
    authRouter.post(AuthApiPath.FORGOT_PASSWORD, async (_req, res) => {
        try {
            const { email } = _req.body
            await authService.forgotPassword(email);

            res
                .status(HttpCode.OK)
                .json({ data: null });
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({ error: error.message });
        }
    });

    /**
     * @openapi
     * /api/v1/auth/reset-password/{link}:
     *  post:
     *    summary: Set new password
     *    tags:
     *      - Auth
     *    parameters:
     *      - in: path
     *        name: link
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              newPassword:
     *                type: string
     *    responses:
     *      200:
     *        description: Successful response
     */
    authRouter.post(AuthApiPath.$RESET_PASSWORD, async (_req, res) => {
        try {
            const link = _req.params.link;
            const { newPassword } = _req.body
            await authService.resetPassword(link, newPassword);

            res
                .status(HttpCode.OK)
                .json({ data: null });
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({ error: error.message });
        }
    });

    /**
     * @openapi
     * /api/v1/auth/logout:
     *  post:
     *    summary: Logout user
     *    tags:
     *      - Auth
     *    security:
   *      - bearerAuth: []
     *    responses:
     *      200:
     *        description: Successful response
     */
    authRouter.post(AuthApiPath.LOGOUT, isAuth, async (_req, res) => {
        try {
            const { refresh_token } = _req.cookies;
            const token = await authService.logoutUser(refresh_token);
            res.clearCookie("refresh_token");

            res.status(HttpCode.OK).json({ token });
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({ error: error.message });
        }
    });

    /**
     * @openapi
     * /api/v1/auth/refresh:
     *  post:
     *    summary: Refresh token
     *    tags:
     *      - Auth
     *    responses:
     *      200:
     *        description: Successful response
     */
    authRouter.get(AuthApiPath.REFRESH, async (_req, res) => {
        try {
            const { refresh_token } = _req.cookies;
            const { refreshToken, accessToken } = await authService.refresh(refresh_token);
            res.cookie("refresh_token", refreshToken, {
                // secure: true,
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });

            res
                .status(HttpCode.OK)
                .json({ accessToken, refreshToken });
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({ error: error.message });
        }
    });

    return authRouter;
};

export { initAuthApi };
