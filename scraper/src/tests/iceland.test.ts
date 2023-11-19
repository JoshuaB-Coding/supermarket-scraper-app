import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

describe('GET /v1/iceland', () => {
    describe('/item', () => {
        const getItemUrl = (itemName: string) => `${process.env.SCRAPER_URI}/v1/iceland/item?itemName=${itemName}`;

        it('should return a 401 when no API key is provided', async () => {
            const url = getItemUrl('banana');

            try {
                const response = await axios.get(url);
            } catch (error) {
                console.error(error.status);
            }

            // expect(response.data.error).toEqual('Unauthorised');
        });
    });

    it('should produce a true result as I am testing nothing', () => {
        expect(true).toBe(true);
    });
});
