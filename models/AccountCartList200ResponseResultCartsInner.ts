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

export class AccountCartList200ResponseResultCartsInner {
    'id'?: string;
    'url'?: string;
    'storeKey'?: string;
    'cartId'?: string;
    'totalCalls'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeKey",
            "baseName": "store_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "cartId",
            "baseName": "cart_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalCalls",
            "baseName": "total_calls",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountCartList200ResponseResultCartsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
