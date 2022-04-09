export default {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'homevest',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.js,.ts}'],
    seed: [__dirname + '/**/seeding/{.js,.ts}'],
    factories: [__dirname + '/../**/*.factory{.js,.ts}']
};