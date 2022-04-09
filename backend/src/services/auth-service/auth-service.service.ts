import { UpdateResult } from 'typeorm';
import { userService, mailService, tokenService } from "../services";
import { UserEntity } from '../../data/models/user.entity';
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser } from '~/common/interfaces';

import dotenv from "dotenv";
dotenv.config();

const { 
    JWT_ACTIVATION_SECRET_KEY, 
    JWT_ACTIVATION_EXPIRATION,
    JWT_REFRESH_PASSWORD_SECRET_KEY,
} = process.env;


class AuthService {

    public async registerUser(data: IUser): Promise<UserEntity> {
        const { email } = data;
        const alreadyCreatedUser = await userService.getUserByEmail(email);
        if (alreadyCreatedUser) {
            throw new Error("User is already registered");
        }
        const user = await userService.createNewUser(data);

        // send registration confirmation email to user
        const { id } = data;
        const activationLink = jwt.sign({ id }, <string>JWT_ACTIVATION_SECRET_KEY, {
            expiresIn: JWT_ACTIVATION_EXPIRATION
        });
        mailService.sendActivationMail(email, activationLink);

        return user;
    }

    public async activateUser(activationLink: string): Promise<UpdateResult> {
        const { id } = jwt.verify(activationLink, <string>JWT_ACTIVATION_SECRET_KEY) as JwtPayload;

        const user = await userService.getUserById(<string>id);
        if (user) {
            user.isActivated = true;
            const updatedUser = await userService.updateUser(<string>id, user);

            return updatedUser;
        }
        else throw new Error("Invalid activation link");
    }
    public async forgotPassword(email: string): Promise<void>{
        const user = await userService.getUserByEmail(email);
        if(user){
            const { id } = user;
            const refreshLink = jwt.sign({id}, <string>JWT_REFRESH_PASSWORD_SECRET_KEY,{
                expiresIn: JWT_ACTIVATION_EXPIRATION
            });
            mailService.sendResetPasswordLink(email, refreshLink);
        } else throw new Error("User not found");
    }
    public async resetPassword(refreshLink: string, newPassword: string): Promise<UpdateResult>{
        const { id } = jwt.verify(refreshLink, <string>JWT_REFRESH_PASSWORD_SECRET_KEY) as JwtPayload;

        const user = await userService.getUserById(<string>id);
        if(user){
            user.password = newPassword;
            const updatedUser = await userService.resetPassword(id, user);

            return updatedUser;
        }
        else throw new Error("Invalid activation link");
    }

    public async loginUser(email: string, passwordToCompare: string):
        Promise<{ accessToken: string, refreshToken: string }> {
        const user = await userService.getUserByEmail(email);

        if (user) {
            const { id, password, role, isActivated } = user;
            const match = await bcrypt.compare(passwordToCompare, password);
            if (match && isActivated) {
                const { accessToken, refreshToken } = tokenService.generateTokens({ id, role });
                await tokenService.saveToken({ id, refreshToken });

                return {
                    accessToken,
                    refreshToken
                }
            }
            else throw new Error("Wrong email or password");
        } else
            throw new Error("User not found");
    }

    public async logoutUser(refreshToken: string): Promise<string> {
        await tokenService.removeToken(refreshToken);
        return refreshToken;
    }

    public async refresh(token: string):
        Promise<{ accessToken: string, refreshToken: string }> {
        if (!token) {
            throw new Error("Unauthorized");
        }
        const userData = await tokenService.validateRefreshToken(token);
        const isTokenStored = await tokenService.isTokenStored(token);
        if (!userData || !isTokenStored) {
            throw new Error("Unauthorized");
        }

        const { id } = userData;
        const user = await userService.getUserById(id);
        const role = <string>user?.role;

        const { accessToken, refreshToken } = tokenService.generateTokens({ id, role });
        await tokenService.saveToken({ id, refreshToken });

        return {
            accessToken,
            refreshToken
        }
    }
}

export { AuthService };
