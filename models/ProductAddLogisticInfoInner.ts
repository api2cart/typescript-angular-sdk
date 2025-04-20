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

export class ProductAddLogisticInfoInner {
    'logisticId': number;
    'isFree'?: boolean;
    'shippingFee'?: number;
    'sizeId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "logisticId",
            "baseName": "logistic_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "isFree",
            "baseName": "is_free",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shippingFee",
            "baseName": "shipping_fee",
            "type": "number",
            "format": ""
        },
        {
            "name": "sizeId",
            "baseName": "size_id",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductAddLogisticInfoInner.attributeTypeMap;
    }

    public constructor() {
    }
}
