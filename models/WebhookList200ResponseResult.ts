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

import { Webhook } from '../models/Webhook';
import { HttpFile } from '../http/http';

export class WebhookList200ResponseResult {
    'webhook'?: Array<Webhook>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "Array<Webhook>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookList200ResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
