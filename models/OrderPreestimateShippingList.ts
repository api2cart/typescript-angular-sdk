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

import { OrderPreestimateShippingListOrderItemInner } from '../models/OrderPreestimateShippingListOrderItemInner';
import { HttpFile } from '../http/http';

export class OrderPreestimateShippingList {
    /**
    * This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
    */
    'warehouseId'?: string;
    /**
    * Retrieves orders specified by customer id
    */
    'customerId'?: string;
    /**
    * Retrieves orders specified by customer email
    */
    'customerEmail'?: string;
    /**
    * Store Id
    */
    'storeId'?: string;
    /**
    * Specifies first shipping address
    */
    'shippAddress1'?: string;
    /**
    * Specifies shipping city
    */
    'shippCity'?: string;
    /**
    * Specifies shipping postcode
    */
    'shippPostcode'?: string;
    /**
    * Specifies shipping state code
    */
    'shippState'?: string;
    /**
    * Specifies shipping country code
    */
    'shippCountry': string;
    /**
    * Set this parameter in order to choose which entity fields you want to retrieve
    */
    'params'?: string;
    /**
    * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
    */
    'exclude'?: string;
    'orderItem': Array<OrderPreestimateShippingListOrderItemInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "warehouseId",
            "baseName": "warehouse_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerId",
            "baseName": "customer_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerEmail",
            "baseName": "customer_email",
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
            "name": "shippAddress1",
            "baseName": "shipp_address_1",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippCity",
            "baseName": "shipp_city",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippPostcode",
            "baseName": "shipp_postcode",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippState",
            "baseName": "shipp_state",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippCountry",
            "baseName": "shipp_country",
            "type": "string",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "string",
            "format": ""
        },
        {
            "name": "exclude",
            "baseName": "exclude",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderItem",
            "baseName": "order_item",
            "type": "Array<OrderPreestimateShippingListOrderItemInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderPreestimateShippingList.attributeTypeMap;
    }

    public constructor() {
    }
}
