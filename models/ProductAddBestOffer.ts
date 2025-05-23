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

/**
* The price at which Best Offers are automatically accepted.<hr><div style=\"font-style:normal\">Param structure:<div style=\"margin-left: 2%;\"><code style=\"padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\">best_offer[<b>minimum_offer_price</b>] = decimal</br>best_offer[<b>auto_accept_price</b>] = decimal</br></code></div></div>
*/
export class ProductAddBestOffer {
    'minimumOfferPrice'?: number;
    'autoAcceptPrice'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "minimumOfferPrice",
            "baseName": "minimum_offer_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "autoAcceptPrice",
            "baseName": "auto_accept_price",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductAddBestOffer.attributeTypeMap;
    }

    public constructor() {
    }
}
