import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import config from '../config/index.js';
import cors from 'cors';
import routes from '../api/index.js';

export default (app) => {
    const corsOptions = {
      origin: true,
      credentials:true
    };
    app.use(cors(corsOptions)); // config 추가
    app.use(cors());

    app.set('port', process.env.PORT || 3000);

    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(path.resolve(), 'public')));

    // API Route 설정
    app.use(config.api.prefix, routes());
}