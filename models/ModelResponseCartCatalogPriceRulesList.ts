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

import { Pagination } from '../models/Pagination';
import { ResponseCartCatalogPriceRulesListResult } from '../models/ResponseCartCatalogPriceRulesListResult';
import { HttpFile } from '../http/http';

export class ModelResponseCartCatalogPriceRulesList {
    'returnCode'?: number | null;
    'returnMessage'?: string | null;
    'pagination'?: Pagination | null;
    'result'?: ResponseCartCatalogPriceRulesListResult | null;
    'additionalFields'?: any | null;
    'customFields'?: any | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "returnCode",
            "baseName": "return_code",
            "type": "number",
            "format": ""
        },
        {
            "name": "returnMessage",
            "baseName": "return_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "ResponseCartCatalogPriceRulesListResult",
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
        return ModelResponseCartCatalogPriceRulesList.attributeTypeMap;
    }

    public constructor() {
    }
}
