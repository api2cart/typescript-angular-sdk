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

import { A2CDateTime } from '../models/A2CDateTime';
import { BaseCustomer } from '../models/BaseCustomer';
import { BasketItem } from '../models/BasketItem';
import { Currency } from '../models/Currency';
import { HttpFile } from '../http/http';

export class Basket {
    'id'?: string;
    'customer'?: BaseCustomer;
    'basketUrl'?: string | null;
    'createdAt'?: A2CDateTime | null;
    'modifiedAt'?: A2CDateTime | null;
    'currency'?: Currency;
    'basketProducts'?: Array<BasketItem>;
    'additionalFields'?: any | null;
    'customFields'?: any | null;

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
            "name": "customer",
            "baseName": "customer",
            "type": "BaseCustomer",
            "format": ""
        },
        {
            "name": "basketUrl",
            "baseName": "basket_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "A2CDateTime",
            "format": ""
        },
        {
            "name": "modifiedAt",
            "baseName": "modified_at",
            "type": "A2CDateTime",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency",
            "format": ""
        },
        {
            "name": "basketProducts",
            "baseName": "basket_products",
            "type": "Array<BasketItem>",
            "format": ""
        },
        {
            "name": "additionalFields",
            "baseName": "additional_fields",
            "type": "any",
            "format": ""
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Basket.attributeTypeMap;
    }

    public constructor() {
    }
}
