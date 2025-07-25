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

import { TaxClassCountries } from '../models/TaxClassCountries';
import { TaxClassZipCodes } from '../models/TaxClassZipCodes';
import { HttpFile } from '../http/http';

export class TaxClassRate {
    'id'?: string;
    'name'?: string;
    'tax'?: number;
    'taxType'?: number;
    'taxBasedOn'?: string;
    'countries'?: Array<TaxClassCountries>;
    'cities'?: Array<string>;
    'address'?: Array<string>;
    'zipCodes'?: Array<TaxClassZipCodes>;
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
            "name": "taxBasedOn",
            "baseName": "tax_based_on",
            "type": "string",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<TaxClassCountries>",
            "format": ""
        },
        {
            "name": "cities",
            "baseName": "cities",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Array<string>",
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
        return TaxClassRate.attributeTypeMap;
    }

    public constructor() {
    }
}
