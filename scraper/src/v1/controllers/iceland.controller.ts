import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import Item from '../../models/item.model';
import ItemRequest from '../../models/itemRequest.interface';
import { validationResult } from 'express-validator';

const getSearchUrl = (itemName: string) => `https://www.iceland.co.uk/search?q=${itemName}&lang=default`;

const getItemByItemName = async (req: ItemRequest, res: Response, next: NextFunction) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(422).send({
            error: `Expected query 'itemName' but found no such query in the request`,
        });
    }

    const items: Item[] = [];
    try {
        const { itemName } = req.query;
        const searchUrl = getSearchUrl(itemName);
        const response = await axios.get(searchUrl);
        if (response.status !== 200) {
            return res.status(400).json({
                message: 'Failed to get items from iceland',
                error: response.data,
            });
        }

        const $ = cheerio.load(response.data);
        $('.product-tile').each((index, element) => {
            const price = $(element).find('.price').text();
            const name = $(element).find('.product-name > a > span').text();
            const imageSrc = '';
            items.push({
                price,
                name,
                imageSrc,
            });
        });

        res.status(200).json(items);
    } catch (error) {
        console.error('Error getting items from iceland: ', error);
    }
};

export default {
    getItemByItemName,
};
