/**
 * API2Cart OpenAPI
 * API2Cart
 *
 * OpenAPI spec version: 1.1
 * Contact: contact@api2cart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CartGiftcardCount200ResponseResult {
    'giftCardsCount'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "giftCardsCount",
            "baseName": "gift_cards_count",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartGiftcardCount200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
