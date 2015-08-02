import express from 'express';
import multer from 'multer';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routes from './routes';
import * as wine from './routes/wines';

import React from 'react';
import Router from 'react-router';
import reactRoutes from './app/router/routes';
import Flux from './app/utils/flux';

const app = express();

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));


app.get('/api/wines', wine.findAll);
app.get('/api/wines/:id', wine.findById);
app.post('/api/wines', [ multer({ dest: './public/pics' }) ], wine.addWine);
app.put('/api/wines/:id', [ multer({ dest: './public/pics' }) ], wine.updateWine);
app.delete('/api/wines/:id', wine.deleteWine);

// react router config
app.use((req, res, next) => {
  let router = Router.create({ 
    location: req.url,
    routes: reactRoutes
  });
  const flux = new Flux();
  router.run((Handler, state) => {
    if (state.routes.length < 1) {
      return next();  
    }
    flux.render(Handler, flux).then((content) => {
      return res.render('index', { html: content.body });
    }); 

  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

const server = require('http').createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
