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

export class CartScriptAdd200ResponseResult {
    'scriptId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "scriptId",
            "baseName": "script_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartScriptAdd200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
