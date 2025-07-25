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

import { Image } from '../models/Image';
import { HttpFile } from '../http/http';

export class Brand {
    'id'?: string;
    'name'?: string;
    'createdTime'?: string | null;
    'modifiedTime'?: string | null;
    'fullDescription'?: string | null;
    'shortDescription'?: string | null;
    'storesIds'?: Array<string>;
    'active'?: boolean;
    'url'?: string;
    'metaTitle'?: string | null;
    'metaKeywords'?: string | null;
    'metaDescription'?: string | null;
    'images'?: Array<Image>;
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
            "name": "createdTime",
            "baseName": "created_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "modifiedTime",
            "baseName": "modified_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "fullDescription",
            "baseName": "full_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortDescription",
            "baseName": "short_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "storesIds",
            "baseName": "stores_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaTitle",
            "baseName": "meta_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaKeywords",
            "baseName": "meta_keywords",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaDescription",
            "baseName": "meta_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<Image>",
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
        return Brand.attributeTypeMap;
    }

    public constructor() {
    }
}
