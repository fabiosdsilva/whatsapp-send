import { Router } from "express";

const routes = new Router();

routes.get('/', (req, res) => {
  res.render('../front/views/index.ejs');
});

export default routes;
