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

import { ProductPriceUpdateGroupPricesInner } from '../models/ProductPriceUpdateGroupPricesInner';
import { HttpFile } from '../http/http';

export class ProductPriceUpdate {
    /**
    * Defines the product where the price has to be updated
    */
    'productId'?: string;
    /**
    * Defines product\'s group prices
    */
    'groupPrices'?: Array<ProductPriceUpdateGroupPricesInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupPrices",
            "baseName": "group_prices",
            "type": "Array<ProductPriceUpdateGroupPricesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductPriceUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}
