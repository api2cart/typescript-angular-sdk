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

import { ProductOptionItem } from '../models/ProductOptionItem';
import { HttpFile } from '../http/http';

export class ProductOption {
    'id'?: string;
    'productOptionId'?: string;
    'name'?: string;
    'description'?: string;
    'sortOrder'?: number;
    'type'?: string;
    'required'?: boolean;
    'available'?: boolean;
    'usedInCombination'?: boolean;
    'optionItems'?: Array<ProductOptionItem>;
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
            "name": "productOptionId",
            "baseName": "product_option_id",
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
            "name": "sortOrder",
            "baseName": "sort_order",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "available",
            "baseName": "available",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "usedInCombination",
            "baseName": "used_in_combination",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "optionItems",
            "baseName": "option_items",
            "type": "Array<ProductOptionItem>",
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
        return ProductOption.attributeTypeMap;
    }

    public constructor() {
    }
}
