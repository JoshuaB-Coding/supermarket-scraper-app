import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const getSearchUrl = (itemName) => `https://www.iceland.co.uk/search?q=${itemName}&lang=default`

interface Item {
    price: string;
    name: string;
    image: string;
};

const getItemByItemName = async (req: Request, res: Response, next: NextFunction) => {
    const items: Item[] = [];
    console.log('Controller called');
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
            const image = '';
            items.push({
                price,
                name,
                image,
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
