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
import { HttpFile } from '../http/http';

export class OrderStatusHistoryItem {
    'id'?: string;
    'name'?: string;
    'modifiedTime'?: A2CDateTime;
    'notify'?: boolean | null;
    'comment'?: string | null;
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "modifiedTime",
            "baseName": "modified_time",
            "type": "A2CDateTime",
            "format": ""
        },
        {
            "name": "notify",
            "baseName": "notify",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
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
        return OrderStatusHistoryItem.attributeTypeMap;
    }

    public constructor() {
    }
}
