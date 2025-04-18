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

export class CartConfigUpdate {
    /**
    * This parameter is deprecated for this method. Please, use this parameter in method account.config.update
    */
    'dbTablesPrefix'?: string;
    /**
    * This parameter sets the list of params to the shopping cart.
    */
    'customFields'?: any;
    /**
    * Store Id
    */
    'storeId'?: string;
    /**
    * This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store\'s firewall may block specific values.
    */
    'userAgent'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dbTablesPrefix",
            "baseName": "db_tables_prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "any",
            "format": ""
        },
        {
            "name": "storeId",
            "baseName": "store_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartConfigUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}
