import { IToken } from "~/common/interfaces";
import { Entity, Schema } from "redis-om";

class TokenModel extends Entity implements IToken{
    id!: string;
    refreshToken!: string;
}
const TokenScheme = new Schema(
    TokenModel,
    {
        id: {type: 'string'},
        refreshToken: {type: 'string'}
    }
);

export { TokenScheme };

