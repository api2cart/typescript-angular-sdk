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

import { ReturnReasonList200ResponseResult } from '../models/ReturnReasonList200ResponseResult';
import { HttpFile } from '../http/http';

export class ReturnReasonList200Response {
    'returnCode'?: number;
    'returnMessage'?: string;
    'result'?: ReturnReasonList200ResponseResult;

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
            "type": "ReturnReasonList200ResponseResult",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReturnReasonList200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
