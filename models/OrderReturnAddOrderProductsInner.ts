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

export class OrderReturnAddOrderProductsInner {
    /**
    * Defines which products from the order should be returned
    */
    'orderProductId': string;
    /**
    * Defines how many product units from the order should be returned
    */
    'orderProductQuantity': number;
    /**
    * Defines the ID of the return reason
    */
    'orderProductReasonId': string;
    /**
    * Defines the ID of the return action
    */
    'orderProductActionId': string;
    /**
    * Defines the customer\'s comment for return
    */
    'orderProductCustomerComment'?: string;
    /**
    * Defines handling status
    */
    'orderProductHandlingStatus'?: string;
    /**
    * Defines the product condition
    */
    'orderProductCondition'?: string;
    /**
    * Defines return reason
    */
    'orderProductReason'?: string;
    /**
    * Defines product return status
    */
    'orderProductStatus'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orderProductId",
            "baseName": "order_product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderProductQuantity",
            "baseName": "order_product_quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "orderProductReasonId",
            "baseName": "order_product_reason_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderProductActionId",
            "baseName": "order_product_action_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderProductCustomerComment",
            "baseName": "order_product_customer_comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderProductHandlingStatus",
            "baseName": "order_product_handling_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderProductCondition",
            "baseName": "order_product_condition",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderProductReason",
            "baseName": "order_product_reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderProductStatus",
            "baseName": "order_product_status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderReturnAddOrderProductsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
