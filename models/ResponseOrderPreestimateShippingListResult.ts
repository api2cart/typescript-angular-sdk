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

import { OrderPreestimateShipping } from '../models/OrderPreestimateShipping';
import { HttpFile } from '../http/http';

export class ResponseOrderPreestimateShippingListResult {
    'preestimateShippingsCount'?: number;
    'preestimateShippings'?: Array<OrderPreestimateShipping>;
    'additionalFields'?: any;
    'customFields'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "preestimateShippingsCount",
            "baseName": "preestimate_shippings_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "preestimateShippings",
            "baseName": "preestimate_shippings",
            "type": "Array<OrderPreestimateShipping>",
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
        return ResponseOrderPreestimateShippingListResult.attributeTypeMap;
    }

    public constructor() {
    }
}
