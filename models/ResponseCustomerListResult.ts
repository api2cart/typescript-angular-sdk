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

import { Customer } from '../models/Customer';
import { HttpFile } from '../http/http';

export class ResponseCustomerListResult {
    'customersCount'?: number;
    'customer'?: Array<Customer>;
    'additionalFields'?: any;
    'customFields'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customersCount",
            "baseName": "customers_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "Array<Customer>",
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
        return ResponseCustomerListResult.attributeTypeMap;
    }

    public constructor() {
    }
}
