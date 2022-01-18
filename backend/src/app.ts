import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import multer from 'multer';


var upload = multer();

const app=express();
app.set('port', process.env.PORT || 3000);
// for parsing multipart/form-data
app.use(upload.any());
const publicPath: string = path.resolve(__dirname, '../public');
app.use('/', express.static(publicPath));

const options: cors.CorsOptions = {
    allowedHeaders: [
      'Access-Control-Allow-Headers',
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
      'Access-Control-Allow-Credentials',
      'Authorization',
      'id',
      'Access-Control-Request-Method',
      'Access-Control-Request-Headers'
    ],
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    // origin:'*',
    origin: ['http://localhost:3000','http://localhost:3002','http://192.168.0.5:3002'],
    optionsSuccessStatus: 200,
    preflightContinue: false,
};
app.use(function (req, res, next) {
  res.removeHeader( 'Vary');
  res.setHeader( 'x-frame-options', 'DENY' );
  // res.setHeader( 'Content-Security-Policy', '' );
  // res.setHeader( 'Strict-Transport-Security', '' );
  // res.setHeader( 'X-Download-Options', '' );
  // res.setHeader( 'Cache-Control', '' );
  res.setHeader( 'x-xss-protection', '0' );
  res.setHeader( 'x-content-type-options', 'nosniff' );
  res.setHeader( 'X-Powered-By', 'PHP/7.0.33' );
  next();
});
app.use(cors(options));

app.use(morgan("dev"));
// for parsing application/json
app.use(express.json());
// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded({ extended: false }));
const swaggerDocument: any = require('../swagger.json');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

import ContactRoute from './modules/portfolio/contact/route';
app.use('/api/portfolio/contact', ContactRoute);

import ProjectRoute from './modules/portfolio/projects/route';
app.use('/api/portfolio/project', ProjectRoute);

// end:modulo de la aplication modo admin


export default app;