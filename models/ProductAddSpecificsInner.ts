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

import { ProductAddSpecificsInnerBookingDetails } from '../models/ProductAddSpecificsInnerBookingDetails';
import { ProductAddSpecificsInnerFoodDetails } from '../models/ProductAddSpecificsInnerFoodDetails';
import { ProductAddSpecificsInnerGroupProductsDetailsInner } from '../models/ProductAddSpecificsInnerGroupProductsDetailsInner';
import { HttpFile } from '../http/http';

export class ProductAddSpecificsInner {
    'name'?: string;
    'value'?: string;
    'values'?: Array<string>;
    'usedForVariations'?: boolean;
    'scaleId'?: number | null;
    'foodDetails'?: ProductAddSpecificsInnerFoodDetails;
    'groupProductsDetails'?: Array<ProductAddSpecificsInnerGroupProductsDetailsInner>;
    'bookingDetails'?: ProductAddSpecificsInnerBookingDetails;

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
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "usedForVariations",
            "baseName": "used_for_variations",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scaleId",
            "baseName": "scale_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "foodDetails",
            "baseName": "food_details",
            "type": "ProductAddSpecificsInnerFoodDetails",
            "format": ""
        },
        {
            "name": "groupProductsDetails",
            "baseName": "group_products_details",
            "type": "Array<ProductAddSpecificsInnerGroupProductsDetailsInner>",
            "format": ""
        },
        {
            "name": "bookingDetails",
            "baseName": "booking_details",
            "type": "ProductAddSpecificsInnerBookingDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductAddSpecificsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
