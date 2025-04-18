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

import { OrderShipmentTrackingAdd200ResponseResult } from '../models/OrderShipmentTrackingAdd200ResponseResult';
import { HttpFile } from '../http/http';

export class OrderShipmentTrackingAdd200Response {
    'returnCode'?: number;
    'returnMessage'?: string;
    'result'?: OrderShipmentTrackingAdd200ResponseResult;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "returnCode",
            "baseName": "return_code",
            "type": "number",
            "format": ""
        },
        {
            "name": "returnMessage",
            "baseName": "return_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "OrderShipmentTrackingAdd200ResponseResult",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderShipmentTrackingAdd200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
