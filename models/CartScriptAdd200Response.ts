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

import { CartScriptAdd200ResponseResult } from '../models/CartScriptAdd200ResponseResult';
import { HttpFile } from '../http/http';

export class CartScriptAdd200Response {
    'returnCode'?: number;
    'returnMessage'?: string;
    'result'?: CartScriptAdd200ResponseResult;

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
            "type": "CartScriptAdd200ResponseResult",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartScriptAdd200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
