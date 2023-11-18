import * as express from 'express';
import { query } from 'express-validator';
import iceland from '../controllers/iceland.controller';

const router = express.Router();

router.get('/item',
    query('itemName')
        .exists()
        .withMessage('Expected query `itemName` to exist'),
    iceland.getItemByItemName);

export default router;
