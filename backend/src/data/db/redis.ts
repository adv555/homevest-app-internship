import { Client } from "redis-om";
import dotenv from "dotenv";
import { logger } from "~/services/services";

dotenv.config();

const { REDIS_CONNECTION } = process.env

const redisCl = new Client();

async function connectRedis(): Promise<void> {
    if(!redisCl.isOpen()) {
        await redisCl.open(REDIS_CONNECTION);
        logger.log("Redis is already plugged in");
    }   
}

export { connectRedis, redisCl };
