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

import { StoreAttributeAttributeSet } from '../models/StoreAttributeAttributeSet';
import { HttpFile } from '../http/http';

export class ResponseAttributeAttributesetListResult {
    'attributeSet'?: Array<StoreAttributeAttributeSet>;
    'additionalFields'?: any | null;
    'customFields'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributeSet",
            "baseName": "attribute_set",
            "type": "Array<StoreAttributeAttributeSet>",
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
        return ResponseAttributeAttributesetListResult.attributeTypeMap;
    }

    public constructor() {
    }
}
