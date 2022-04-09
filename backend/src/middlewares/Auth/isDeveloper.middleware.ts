import { Response, NextFunction} from "express";
import { HttpCode } from "~/common/enums";
import { logger, tokenService } from "~/services/services";


export async function isDeveloper(_req: any, res: Response, next: NextFunction){
    try {
        const authHeader = _req.headers.authorization;

        const accessToken = authHeader?.split(' ')[1] as string;
        const userData = await tokenService.validateAccessToken(accessToken);
        if(!userData){
            return res.status(401).json({error: "Unauthorized"});
        }
        if(userData?.role !== "developer"){
            return res.status(401).json({error: "Unauthorized"});
        }
        _req.user = userData;
        next();
    } catch (error: any) {
        logger.error(error.message);
        return res.status(HttpCode.BAD_REQUEST).json({error: error.message});
    }
}