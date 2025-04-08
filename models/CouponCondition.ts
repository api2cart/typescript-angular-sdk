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

import { HttpFile } from '../http/http';

export class CouponCondition {
    'id'?: string;
    'entity'?: string;
    'matchItems'?: string;
    'key'?: string;
    'operator'?: string;
    'value'?: string;
    'logicOperator'?: string;
    'subConditions'?: Array<CouponCondition>;
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
            "name": "entity",
            "baseName": "entity",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchItems",
            "baseName": "match_items",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "logicOperator",
            "baseName": "logic_operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "subConditions",
            "baseName": "sub-conditions",
            "type": "Array<CouponCondition>",
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
        return CouponCondition.attributeTypeMap;
    }

    public constructor() {
    }
}
