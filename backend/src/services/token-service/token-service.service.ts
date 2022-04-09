import dotenv from 'dotenv';
import { IToken } from '~/common/interfaces';
import { tokenRepository } from '~/data/repositories/token-repository';
import jwt, { JwtPayload } from "jsonwebtoken";
import { logger } from '../services';

dotenv.config();
const {
    JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY,
    JWT_ACCESS_EXPIRATION,
    JWT_REFRESH_EXPIRATION,
} = process.env

class TokenService {
    public async validateRefreshToken(token: string): Promise<JwtPayload | undefined>{
        try {
            const userData = jwt.verify(token, <string>JWT_REFRESH_SECRET_KEY) as JwtPayload;
            return userData;
        } catch (error: any) {
            logger.error(error.message);
            return undefined;
        }
    }

    public async validateAccessToken(token: string): Promise<JwtPayload | undefined>{
        try {
            const userData = jwt.verify(token, <string>JWT_ACCESS_SECRET_KEY) as JwtPayload;
            return userData;
        } catch (error: any) {
            logger.error(error.message);
            return undefined;
        }
    }

    public async saveToken(data: IToken): Promise<void>{
        const { id } = data;
        
        const token = await tokenRepository.findTokenByUserId(<string>id);
        if(token){
            await tokenRepository.updateToken(data, token.entityId);
            return;
        }

        await tokenRepository.saveToken(data);
    }
    public generateTokens(payload: {id: string, role: string}): {accessToken: string, refreshToken: string}{
        const refreshToken = jwt.sign(payload, <string>JWT_REFRESH_SECRET_KEY, {
            expiresIn: JWT_REFRESH_EXPIRATION
        });

        const accessToken = jwt.sign(payload, <string>JWT_ACCESS_SECRET_KEY, {
            expiresIn: JWT_ACCESS_EXPIRATION
        });
        return{
            accessToken,
            refreshToken
        }
    }

    public async removeToken(refreshToken: string): Promise<void>{
        const token = await tokenRepository.findToken(refreshToken);
        await tokenRepository.removeToken(token.entityId);
    }

    public async isTokenStored(refreshToken: string): Promise<boolean>{
        const token = await tokenRepository.findToken(refreshToken);
        if(token)
            return true;
        return false;    
    }
}

export { TokenService };