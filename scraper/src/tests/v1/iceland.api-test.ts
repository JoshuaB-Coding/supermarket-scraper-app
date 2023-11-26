import { AxiosError } from 'axios';
import { describe, expect, it } from '@jest/globals';
import app from '../../v1/app';

import { mockItems } from '../../__mocks__';
import { requestWithoutHeaders, requestWithHeaders } from '../api';
import { Response } from 'express';
import ItemRequest from '../../models/itemRequest.interface';

console.error = jest.fn();
jest.mock('../../v1/controllers/iceland.controller', () => {
    const getItemByItemName = (req: ItemRequest, res: Response) => res.status(200).send(mockItems);

    return {
        getItemByItemName,
    };
});

describe('GET /v1/iceland/item', () => {
    describe('/item', () => {
        const getItemUrl = (itemName: string) => `/v1/iceland/item?itemName=${itemName}`;

        it('should return a 401 when no API key is provided', async () => {
            // Arrange
            const url = getItemUrl('banana');

            // Act
            const response = await requestWithoutHeaders(app)
                .get(url)
                .catch((error: AxiosError) => {
                    // Assert
                    expect(error.response.status).toBe(401);
                });
        }, 20000);

        it('should return a 422 when no itemName is provided', async () => {
            // Arrange
            const url = getItemUrl('');

            // Act
            const response = await requestWithHeaders(app)
                .get(url)
                .catch((error: AxiosError) => {
                    // Assert
                    expect(error.response.status).toBe(422);
                });
        }, 20000);

        it('should return the requested data', async () => {
            // Arrange
            const itemName = 'testItemName';
            const url = getItemUrl(itemName);

            // Act
            const response = await requestWithHeaders(app)
                .get(url);

            // Assert
            expect(response.req.path).toContain(itemName);
            expect(response.status).toBe(200);
            expect(response._body).toEqual(mockItems);
        }, 20000);
    });
});
