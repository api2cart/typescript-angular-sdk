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

export class SpecialPrice {
    'value'?: number;
    'avail'?: boolean;
    'createdAt'?: A2CDateTime | null;
    'modifiedAt'?: A2CDateTime | null;
    'expiredAt'?: A2CDateTime | null;
    'additionalFields'?: any | null;
    'customFields'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "avail",
            "baseName": "avail",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "A2CDateTime",
            "format": ""
        },
        {
            "name": "modifiedAt",
            "baseName": "modified_at",
            "type": "A2CDateTime",
            "format": ""
        },
        {
            "name": "expiredAt",
            "baseName": "expired_at",
            "type": "A2CDateTime",
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
        return SpecialPrice.attributeTypeMap;
    }

    public constructor() {
    }
}
