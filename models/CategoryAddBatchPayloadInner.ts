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

import { CategoryAddBatchPayloadInnerImagesInner } from '../models/CategoryAddBatchPayloadInnerImagesInner';
import { HttpFile } from '../http/http';

export class CategoryAddBatchPayloadInner {
    'name': string;
    'avail'?: boolean;
    'description'?: string;
    'metaTitle'?: string;
    'metaDescription'?: string;
    'metaKeywords'?: Array<string>;
    'parentId'?: string;
    'sortOrder'?: number;
    'seoUrl'?: string;
    'storeId'?: string;
    'images'?: Array<CategoryAddBatchPayloadInnerImagesInner>;
    'storesIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "avail",
            "baseName": "avail",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
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
            "name": "metaDescription",
            "baseName": "meta_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaKeywords",
            "baseName": "meta_keywords",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sortOrder",
            "baseName": "sort_order",
            "type": "number",
            "format": ""
        },
        {
            "name": "seoUrl",
            "baseName": "seo_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeId",
            "baseName": "store_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<CategoryAddBatchPayloadInnerImagesInner>",
            "format": ""
        },
        {
            "name": "storesIds",
            "baseName": "stores_ids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CategoryAddBatchPayloadInner.attributeTypeMap;
    }

    public constructor() {
    }
}
