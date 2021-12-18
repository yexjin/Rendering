import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import config from '../config/index.js';
import cors from 'cors';
import routes from '../api/index.js';
const __dirname = path.resolve();

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

    const buildDirectory = path.resolve(__dirname, "../front/build");
    console.log(buildDirectory);
    app.use(express.static(buildDirectory));
    app.use((req, res, next) => {
        if (req.path.indexOf("/api") === -1) {
            return res.sendFile("index.html", { root: buildDirectory });
        }
    });
}