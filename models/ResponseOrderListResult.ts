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

import { Order } from '../models/Order';
import { HttpFile } from '../http/http';

export class ResponseOrderListResult {
    'ordersCount'?: number;
    'order'?: Array<Order>;
    'additionalFields'?: any;
    'customFields'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ordersCount",
            "baseName": "orders_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "Array<Order>",
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
        return ResponseOrderListResult.attributeTypeMap;
    }

    public constructor() {
    }
}
