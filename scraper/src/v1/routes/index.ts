import * as express from 'express';
import validation from './validation';
import iceland from './controllers/iceland.controller';

const router = express.Router();

router.get('/iceland/item', validation.validateQuery('itemName'), iceland.getItemByItemName);

export default router;
