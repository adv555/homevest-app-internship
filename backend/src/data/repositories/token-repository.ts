import { IToken } from '~/common/interfaces/token';
import { Repository, Entity, EntityCreationData } from "redis-om";
import { TokenScheme } from "../models/token-model";
import { redisCl, connectRedis } from "../db/redis";

class TokenRepository{
    repo: Repository<Entity>;
    constructor(){
        this.repo = new Repository(TokenScheme, redisCl);
    }

    public async saveToken(tokenDto: IToken): Promise<void>{
        await connectRedis();
        const tokenEntity = this.repo.createEntity(<EntityCreationData>tokenDto);
        
        await this.repo.save(tokenEntity);
    }

    public async findTokenByUserId(id: string): Promise<Entity>{
        await connectRedis();
        const tokenEntity = await this.repo.search()
                                        .where('id')
                                        .equal(id)
                                        .returnFirst();
        return tokenEntity;
    }
    public async findToken(refreshToken: string): Promise<Entity>{
        await connectRedis();
        const tokenEntity = await this.repo.search()
                                        .where('refreshToken')
                                        .equal(refreshToken)
                                        .returnFirst();
        return tokenEntity;
    } 

    public async updateToken(tokenDto: IToken, entityId: string): Promise<void>{
        await connectRedis();
        await this.repo.remove(entityId);
        const entity = this.repo.createEntity(<EntityCreationData>tokenDto);
        await this.repo.save(entity);
    }
    public async removeToken(entityId: string): Promise<void>{
        await connectRedis();
        await this.repo.remove(entityId);
    }
}

const tokenRepository = new TokenRepository();
export { tokenRepository };
