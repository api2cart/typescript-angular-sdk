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

export class ReturnCount200ResponseResult {
    'returnsCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "returnsCount",
            "baseName": "returns_count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReturnCount200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
