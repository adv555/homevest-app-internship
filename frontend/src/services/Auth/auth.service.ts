import { IUser }  from '~/../shared/common/interfaces/user/index';
import { HttpOptions } from 'common/types';
import { ApiRoute, HttpMethod, ContentType } from 'common/enums';
import { api } from "services";
import {AxiosResponse} from "axios";
import { loginResponse } from 'common/interfaces/response';

class AuthService {
    async login(email: string, password: string): Promise<AxiosResponse<loginResponse>>{

        return await api.post<loginResponse>(ApiRoute.LOGIN, {
            email,
            passwordToCompare: password
        });
    }
    async logout(){
        return await api.post(ApiRoute.LOGOUT);
    }
    async checkAuth(): Promise<AxiosResponse> {
        return await api.get(ApiRoute.REFRESH);
    }
    async signUp(userData: IUser): Promise<AxiosResponse> {
        return await api.post(ApiRoute.SIGHUP, {...userData})
    }
    async verifyEmail(code: string): Promise<AxiosResponse> {
        return await api.get(ApiRoute.VERIFY+code);
    }
    async resetPassword(code: string, newPassword: string): Promise<AxiosResponse> {
        return await api.post(ApiRoute.RESET_PASSWORD+code, {
            newPassword
        });
    }
    async forgotPassword(email: string): Promise<AxiosResponse>{
        return await api.post(ApiRoute.FORGOT_PASSWORD, {
            email
        });
    }
}

const authService = new AuthService();
export {authService};