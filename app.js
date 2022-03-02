require('dotenv').config();

import path from 'path';
import express from 'express';
import routes from './src/controller/home';
class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.static(path.join(__dirname, 'front', 'public')));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.set('view engine', 'ejs');
  }

  routes() {
    this.app.use('/', routes);
  }
}

export default new App().app;
