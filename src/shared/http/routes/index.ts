import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ server: 'on' });
});

export default routes;
