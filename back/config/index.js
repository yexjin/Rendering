import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // .env에 NODE_ENV가 없으면 development

const envFound = dotenv.config(); // .env파일 안에 있는 정보를 불러옴
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  port: parseInt(process.env.PORT, 10), // process.env.PORT를 10진법 int로 변환
 /* MySQL configs */
  database: {
    development: {
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: 'rendering',
      host: 'localhost',
      dialect: 'mysql'
    },
    test: {
      username: 'root',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'root',
      password: null,
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'mysql'
    }
  },
  /* API configs */
  api: {
    prefix: '/api'
  },
  /* JWT Secret */
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  issuer: 'Rendering',
  /* Used by winston logger */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  /* S3 */
  S3AccessKeyId: process.env.S3_ACCESS_KEY_ID,
  S3SecretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  S3BucketName: process.env.S3_BUCKET_NAME,
  S3BucketRegion: process.env.S3_BUCKET_REGION,
};