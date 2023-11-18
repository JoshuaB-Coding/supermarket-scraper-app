import { Request } from 'express';

type ItemRequestQuery = {
    itemName: string;
};

interface ItemRequest extends Request {
    query: ItemRequestQuery;
};

export default ItemRequest;
