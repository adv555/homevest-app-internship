import "reflect-metadata";
import { createConnection, ConnectionOptions } from "typeorm";

import {options} from '../../../config/db.config';


const connection = createConnection(<ConnectionOptions>options);

export { connection };
