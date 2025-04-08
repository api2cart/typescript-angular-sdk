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

import { TaxClassZipCodes } from '../models/TaxClassZipCodes';
import { HttpFile } from '../http/http';

export class TaxClassStates {
    'id'?: string;
    'tax'?: number;
    'taxType'?: number;
    'name'?: string;
    'code'?: string;
    'zipCodes'?: Array<TaxClassZipCodes>;
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
            "name": "tax",
            "baseName": "tax",
            "type": "number",
            "format": ""
        },
        {
            "name": "taxType",
            "baseName": "tax_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipCodes",
            "baseName": "zip_codes",
            "type": "Array<TaxClassZipCodes>",
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
        return TaxClassStates.attributeTypeMap;
    }

    public constructor() {
    }
}
