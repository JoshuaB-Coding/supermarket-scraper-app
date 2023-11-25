import axios, { AxiosError } from 'axios';
import { describe, expect, it } from '@jest/globals';

console.error = jest.fn();
// console.log = jest.fn();

describe('GET /v1/iceland', () => {
    describe('/item', () => {
        const getItemUrl = (itemName: string) => `${process.env.SCRAPER_URI}/v1/iceland/item?itemName=${itemName}`;

        it('should return a 401 when no API key is provided', async () => {
            const url = getItemUrl('banana');

            const response = await axios.get(url)
                .catch((error: AxiosError) => {
                    expect(error.response.status).toBe(401);
                });
        });

        it('should return a 422 when no itemName is provided', async () => {
            const url = getItemUrl('');

            const response = await axios.get(url, {
                headers: {
                    'x-api-key': process.env.SCRAPER_API_KEY,
                },
            }).catch((error: AxiosError) => {
                expect(error.response.status).toBe(422);
            });
        });
    });
});
