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

import { AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams } from '../models/AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams';
import { HttpFile } from '../http/http';

export class AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner {
    'cartId'?: string;
    'cartName'?: string;
    'cartVersions'?: string;
    'cartMethod'?: string;
    'params'?: AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cartId",
            "baseName": "cart_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "cartName",
            "baseName": "cart_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "cartVersions",
            "baseName": "cart_versions",
            "type": "string",
            "format": ""
        },
        {
            "name": "cartMethod",
            "baseName": "cart_method",
            "type": "string",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
