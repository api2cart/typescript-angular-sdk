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

export class Script {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'src'?: string;
    'scope'?: string;
    'event'?: string;
    'loadMethod'?: string;
    'html'?: string;
    'createdTime'?: A2CDateTime;
    'modifiedTime'?: A2CDateTime;
    'additionalFields'?: any;
    'customFields'?: any;

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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "src",
            "baseName": "src",
            "type": "string",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "string",
            "format": ""
        },
        {
            "name": "loadMethod",
            "baseName": "load_method",
            "type": "string",
            "format": ""
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdTime",
            "baseName": "created_time",
            "type": "A2CDateTime",
            "format": ""
        },
        {
            "name": "modifiedTime",
            "baseName": "modified_time",
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
        return Script.attributeTypeMap;
    }

    public constructor() {
    }
}
