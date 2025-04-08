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

import { ProductAddBestOffer } from '../models/ProductAddBestOffer';
import { ProductAddCertificationsInner } from '../models/ProductAddCertificationsInner';
import { ProductAddFilesInner } from '../models/ProductAddFilesInner';
import { ProductAddGroupPricesInner } from '../models/ProductAddGroupPricesInner';
import { ProductAddManufacturerInfo } from '../models/ProductAddManufacturerInfo';
import { ProductAddPackageDetails } from '../models/ProductAddPackageDetails';
import { ProductAddSalesTax } from '../models/ProductAddSalesTax';
import { ProductAddSellerProfiles } from '../models/ProductAddSellerProfiles';
import { ProductAddShippingDetailsInner } from '../models/ProductAddShippingDetailsInner';
import { ProductAddSizeChart } from '../models/ProductAddSizeChart';
import { ProductAddSpecificsInner } from '../models/ProductAddSpecificsInner';
import { ProductAddTierPricesInner } from '../models/ProductAddTierPricesInner';
import { HttpFile } from '../http/http';

export class ProductAdd {
    /**
    * Defines product\'s name that has to be added
    */
    'name': string;
    /**
    * Defines product\'s model that has to be added
    */
    'model': string;
    /**
    * Defines product\'s sku that has to be added
    */
    'sku'?: string;
    /**
    * Defines product\'s description that has to be added
    */
    'description': string;
    /**
    * Defines product\'s price that has to be added
    */
    'price': number;
    /**
    * Defines product\'s old price
    */
    'oldPrice'?: number;
    /**
    * Defines product\'s model that has to be added
    */
    'specialPrice'?: number;
    /**
    * Defines new product\'s cost price
    */
    'costPrice'?: number;
    /**
    * Specifies product\'s fixed cost shipping price
    */
    'fixedCostShippingPrice'?: number;
    /**
    * Defines the date of special price creation
    */
    'spriceCreate'?: string;
    /**
    * Defines the date of special price modification
    */
    'spriceModified'?: string;
    /**
    * Defines the term of special price offer duration
    */
    'spriceExpire'?: string;
    /**
    * Defines product\'s tier prices
    */
    'tierPrices'?: Array<ProductAddTierPricesInner>;
    /**
    * Defines product\'s group prices
    */
    'groupPrices'?: Array<ProductAddGroupPricesInner>;
    /**
    * Specifies the set of visible/invisible products for users
    */
    'availableForView'?: boolean;
    /**
    * Specifies the set of visible/invisible products for sale
    */
    'availableForSale'?: boolean;
    /**
    * Weight
    */
    'weight'?: number;
    /**
    * Defines product\'s width
    */
    'width'?: number;
    /**
    * Defines product\'s height
    */
    'height'?: number;
    /**
    * Defines product\'s length
    */
    'length'?: number;
    /**
    * Weight Unit
    */
    'weightUnit'?: string;
    /**
    * Weight Unit
    */
    'dimensionsUnit'?: string;
    /**
    * Defines short description
    */
    'shortDescription'?: string;
    /**
    * This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
    */
    'warehouseId'?: string;
    /**
    * Set backorder status
    */
    'backorderStatus'?: string;
    /**
    * Defines product\'s quantity that has to be added
    */
    'quantity'?: number;
    /**
    * Defines whether the product is downloadable
    */
    'downloadable'?: boolean;
    /**
    * Defines product\'s sale price
    */
    'wholesalePrice'?: number;
    /**
    * Defines the date of entity creation
    */
    'createdAt'?: string;
    /**
    * Defines product\'s manufacturer
    */
    'manufacturer'?: string;
    /**
    * Defines product\'s manufacturer by manufacturer_id
    */
    'manufacturerId'?: string;
    /**
    * Defines product add that is specified by comma-separated categories id
    */
    'categoriesIds'?: string;
    /**
    * Defines product\'s related products ids that has to be added
    */
    'relatedProductsIds'?: string;
    /**
    * Defines product\'s up-sell products ids that has to be added
    */
    'upSellProductsIds'?: string;
    /**
    * Defines product\'s cross-sell products ids that has to be added
    */
    'crossSellProductsIds'?: string;
    /**
    * Defines tax classes where entity has to be added
    */
    'taxClassId'?: string;
    /**
    * Defines product\'s type
    */
    'type'?: string;
    /**
    * Defines unique meta title for each entity
    */
    'metaTitle'?: string;
    /**
    * Defines unique meta keywords for each entity
    */
    'metaKeywords'?: string;
    /**
    * Defines unique meta description of a entity
    */
    'metaDescription'?: string;
    /**
    * Defines unique product\'s URL
    */
    'url'?: string;
    /**
    * Language id
    */
    'langId'?: string;
    /**
    * Assign product to the stores that is specified by comma-separated stores\' id
    */
    'storesIds'?: string;
    /**
    * Defines product add that is specified by category id
    */
    'categoryId'?: string;
    /**
    * Specifies the number of product\'s reviews
    */
    'viewedCount'?: number;
    /**
    * Defines how many times the product was ordered
    */
    'orderedCount'?: number;
    /**
    * Defines product’s attribute set name in Magento
    */
    'attributeSetName'?: string;
    /**
    * Defines product’s attribute name separated with a comma in Magento
    */
    'attributeName'?: string;
    /**
    * The numeric ID of the shipping template associated with the products in Etsy. You can find possible values in the \"cart.info\" API method response, in the field shipping_zones[]->id.
    */
    'shippingTemplateId'?: number;
    /**
    * Defines product\'s production partner ids that has to be added
    */
    'productionPartnerIds'?: string;
    /**
    * The human-readable label for the condition (e.g., \"New\").
    */
    'condition'?: string;
    /**
    * Describes the number of days the seller wants the listing to be active. Look at cart.info method response for allowed values.
    */
    'listingDuration'?: string;
    /**
    * Indicates the selling format of the marketplace listing.
    */
    'listingType'?: string;
    /**
    * Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. Look at cart.info method response for allowed values.<hr><div style=\"font-style:normal\">Param structure:<div style=\"margin-left: 2%;\"><code style=\"padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\">payment_methods[0] = string</br>payment_methods[1] = string</br></code></div></div>
    */
    'paymentMethods'?: Array<string>;
    /**
    * Indicates whether the seller allows the buyer to return the item.
    */
    'returnAccepted'?: boolean;
    /**
    * The shipping details, including flat and calculated shipping costs and shipping insurance costs. Look at cart.info method response for allowed values.<hr><div style=\"font-style:normal\">Param structure:<div style=\"margin-left: 2%;\"><code style=\"padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\">shipping_details[0][<b>shipping_type</b>] = string </br>shipping_details[0][<b>shipping_service</b>] = string</br>shipping_details[0][<b>shipping_cost</b>] = decimal</br>shipping_details[1][<b>shipping_type</b>] = string </br>shipping_details[1][<b>shipping_service</b>] = string</br>shipping_details[1][<b>shipping_cost</b>] = decimal</br></code></div></div>
    */
    'shippingDetails'?: Array<ProductAddShippingDetailsInner>;
    /**
    * Valid PayPal email address for the PayPal account that the seller will use if they offer PayPal as a payment method for the listing.
    */
    'paypalEmail'?: string;
    'sellerProfiles'?: ProductAddSellerProfiles;
    'packageDetails'?: ProductAddPackageDetails;
    'bestOffer'?: ProductAddBestOffer;
    'salesTax'?: ProductAddSalesTax;
    /**
    * A barcode is a unique code composed of numbers used as a product identifier.
    */
    'barcode'?: string;
    /**
    * Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
    */
    'upc'?: string;
    /**
    * European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
    */
    'ean'?: string;
    /**
    * International Standard Book Number. An ISBN is a unique identifier for books.
    */
    'isbn'?: string;
    /**
    * An array of Item Specific Name/Value pairs used by the seller to provide descriptive details of an item in a structured manner.         The list of possible specifications can be obtained using the category.info method (additional_fields->product_specifics).         <b>The structure of the parameter is different for specific platforms.</b>
    */
    'specifics'?: Array<ProductAddSpecificsInner>;
    /**
    * Image Url
    */
    'imageUrl'?: string;
    /**
    * Defines image\'s name
    */
    'imageName'?: string;
    /**
    * Defines reserve price value
    */
    'reservePrice'?: number;
    /**
    * Defines buy it now value
    */
    'buyitnowPrice'?: number;
    /**
    * Detailed description of the product condition.
    */
    'conditionDescription'?: string;
    /**
    * This allows buyers to remain anonymous when the bid or buy an item.
    */
    'auctionConfidentialityLevel'?: string;
    /**
    * Allows to schedule a time in the future that the item becomes available. The value should be greater than the current date and time.
    */
    'availFrom'?: string;
    /**
    * Product tags
    */
    'tags'?: string;
    /**
    * Is cache clear required
    */
    'clearCache'?: boolean;
    /**
    * Amazon Standard Identification Number.
    */
    'asin'?: string;
    /**
    * Global Trade Item Number. An GTIN is an identifier for trade items.
    */
    'gtin'?: string;
    /**
    * Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.
    */
    'mpn'?: string;
    /**
    * Specifies whether a tax is charged
    */
    'taxable'?: boolean;
    /**
    * Set visibility status
    */
    'visible'?: string;
    /**
    * Defines product\'s status
    */
    'status'?: string;
    /**
    * Defines unique URL for SEO
    */
    'seoUrl'?: string;
    /**
    * A categorization for the product
    */
    'productClass'?: string;
    /**
    * A categorization for the product
    */
    'productType'?: string;
    /**
    * String containing the JSON representation of the supplied data
    */
    'marketplaceItemProperties'?: string;
    /**
    * Defines inventory tracking for product
    */
    'manageStock'?: boolean;
    /**
    * Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes
    */
    'harmonizedSystemCode'?: string;
    /**
    * The country where the inventory item was made
    */
    'countryOfOrigin'?: string;
    /**
    * File Url
    */
    'files'?: Array<ProductAddFilesInner>;
    /**
    * Defines unique search keywords
    */
    'searchKeywords'?: string;
    /**
    * Store Id
    */
    'storeId'?: string;
    /**
    * Defines product brand name
    */
    'brandName'?: string;
    /**
    * Defines whether the product is virtual
    */
    'isVirtual'?: boolean;
    /**
    * Specifies product\'s free shipping flag that has to be added
    */
    'isFreeShipping'?: boolean;
    /**
    * Set stock status
    */
    'inStock'?: boolean;
    /**
    * The delivery promise that applies to offer
    */
    'deliveryCode'?: string;
    /**
    * Groups all variations, that you want to combine into one product.
    */
    'productReference'?: string;
    /**
    * Defines the type of the delivery.
    */
    'deliveryType'?: string;
    /**
    * Defines delivery time in days.
    */
    'deliveryTime'?: number;
    'sizeChart'?: ProductAddSizeChart;
    /**
    * An array of product certifications. The list of possible certifications can be obtained using the \"<i>category.info</i>\" method (<i>additional_fields->rules->product_certifications</i>).
    */
    'certifications'?: Array<ProductAddCertificationsInner>;
    /**
    * Defines delivery options for product by ids.
    */
    'deliveryOptionIds'?: string;
    'manufacturerInfo'?: ProductAddManufacturerInfo;
    /**
    * An enumerated string for the era in which the maker made the product.
    */
    'whenMade'?: string;
    /**
    * If true, it indicates the product as a supply, otherwise it indicates that it is a finished product.
    */
    'isSupply'?: boolean;
    /**
    * A list of material strings for materials used in the product.
    */
    'materials'?: Array<string>;
    /**
    * When true, automatically renews a listing upon its expiration.
    */
    'autoRenew'?: boolean;
    /**
    * Flag used to determine whether the product condition is shown to the customer on the product page.
    */
    'allowDisplayCondition'?: boolean;
    /**
    * The minimum quantity an order must contain, to be eligible to purchase this product.
    */
    'minOrderQuantity'?: number;
    /**
    * The maximum quantity an order can contain when purchasing the product.
    */
    'maxOrderQuantity'?: number;

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
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "oldPrice",
            "baseName": "old_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "specialPrice",
            "baseName": "special_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "costPrice",
            "baseName": "cost_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "fixedCostShippingPrice",
            "baseName": "fixed_cost_shipping_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "spriceCreate",
            "baseName": "sprice_create",
            "type": "string",
            "format": ""
        },
        {
            "name": "spriceModified",
            "baseName": "sprice_modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "spriceExpire",
            "baseName": "sprice_expire",
            "type": "string",
            "format": ""
        },
        {
            "name": "tierPrices",
            "baseName": "tier_prices",
            "type": "Array<ProductAddTierPricesInner>",
            "format": ""
        },
        {
            "name": "groupPrices",
            "baseName": "group_prices",
            "type": "Array<ProductAddGroupPricesInner>",
            "format": ""
        },
        {
            "name": "availableForView",
            "baseName": "available_for_view",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "availableForSale",
            "baseName": "available_for_sale",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number",
            "format": ""
        },
        {
            "name": "weightUnit",
            "baseName": "weight_unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "dimensionsUnit",
            "baseName": "dimensions_unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortDescription",
            "baseName": "short_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "warehouseId",
            "baseName": "warehouse_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "backorderStatus",
            "baseName": "backorder_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "downloadable",
            "baseName": "downloadable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "wholesalePrice",
            "baseName": "wholesale_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "manufacturer",
            "baseName": "manufacturer",
            "type": "string",
            "format": ""
        },
        {
            "name": "manufacturerId",
            "baseName": "manufacturer_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoriesIds",
            "baseName": "categories_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "relatedProductsIds",
            "baseName": "related_products_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "upSellProductsIds",
            "baseName": "up_sell_products_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "crossSellProductsIds",
            "baseName": "cross_sell_products_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxClassId",
            "baseName": "tax_class_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaTitle",
            "baseName": "meta_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaKeywords",
            "baseName": "meta_keywords",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaDescription",
            "baseName": "meta_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "langId",
            "baseName": "lang_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "storesIds",
            "baseName": "stores_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewedCount",
            "baseName": "viewed_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "orderedCount",
            "baseName": "ordered_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "attributeSetName",
            "baseName": "attribute_set_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributeName",
            "baseName": "attribute_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingTemplateId",
            "baseName": "shipping_template_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "productionPartnerIds",
            "baseName": "production_partner_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "condition",
            "baseName": "condition",
            "type": "string",
            "format": ""
        },
        {
            "name": "listingDuration",
            "baseName": "listing_duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "listingType",
            "baseName": "listing_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethods",
            "baseName": "payment_methods",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "returnAccepted",
            "baseName": "return_accepted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shippingDetails",
            "baseName": "shipping_details",
            "type": "Array<ProductAddShippingDetailsInner>",
            "format": ""
        },
        {
            "name": "paypalEmail",
            "baseName": "paypal_email",
            "type": "string",
            "format": ""
        },
        {
            "name": "sellerProfiles",
            "baseName": "seller_profiles",
            "type": "ProductAddSellerProfiles",
            "format": ""
        },
        {
            "name": "packageDetails",
            "baseName": "package_details",
            "type": "ProductAddPackageDetails",
            "format": ""
        },
        {
            "name": "bestOffer",
            "baseName": "best_offer",
            "type": "ProductAddBestOffer",
            "format": ""
        },
        {
            "name": "salesTax",
            "baseName": "sales_tax",
            "type": "ProductAddSalesTax",
            "format": ""
        },
        {
            "name": "barcode",
            "baseName": "barcode",
            "type": "string",
            "format": ""
        },
        {
            "name": "upc",
            "baseName": "upc",
            "type": "string",
            "format": ""
        },
        {
            "name": "ean",
            "baseName": "ean",
            "type": "string",
            "format": ""
        },
        {
            "name": "isbn",
            "baseName": "isbn",
            "type": "string",
            "format": ""
        },
        {
            "name": "specifics",
            "baseName": "specifics",
            "type": "Array<ProductAddSpecificsInner>",
            "format": ""
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageName",
            "baseName": "image_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "reservePrice",
            "baseName": "reserve_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "buyitnowPrice",
            "baseName": "buyitnow_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "conditionDescription",
            "baseName": "condition_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "auctionConfidentialityLevel",
            "baseName": "auction_confidentiality_level",
            "type": "string",
            "format": ""
        },
        {
            "name": "availFrom",
            "baseName": "avail_from",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "string",
            "format": ""
        },
        {
            "name": "clearCache",
            "baseName": "clear_cache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "asin",
            "baseName": "asin",
            "type": "string",
            "format": ""
        },
        {
            "name": "gtin",
            "baseName": "gtin",
            "type": "string",
            "format": ""
        },
        {
            "name": "mpn",
            "baseName": "mpn",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxable",
            "baseName": "taxable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "visible",
            "baseName": "visible",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "seoUrl",
            "baseName": "seo_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "productClass",
            "baseName": "product_class",
            "type": "string",
            "format": ""
        },
        {
            "name": "productType",
            "baseName": "product_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketplaceItemProperties",
            "baseName": "marketplace_item_properties",
            "type": "string",
            "format": ""
        },
        {
            "name": "manageStock",
            "baseName": "manage_stock",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "harmonizedSystemCode",
            "baseName": "harmonized_system_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryOfOrigin",
            "baseName": "country_of_origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<ProductAddFilesInner>",
            "format": ""
        },
        {
            "name": "searchKeywords",
            "baseName": "search_keywords",
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
            "name": "brandName",
            "baseName": "brand_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVirtual",
            "baseName": "is_virtual",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFreeShipping",
            "baseName": "is_free_shipping",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inStock",
            "baseName": "in_stock",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deliveryCode",
            "baseName": "delivery_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "productReference",
            "baseName": "product_reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryType",
            "baseName": "delivery_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryTime",
            "baseName": "delivery_time",
            "type": "number",
            "format": ""
        },
        {
            "name": "sizeChart",
            "baseName": "size_chart",
            "type": "ProductAddSizeChart",
            "format": ""
        },
        {
            "name": "certifications",
            "baseName": "certifications",
            "type": "Array<ProductAddCertificationsInner>",
            "format": ""
        },
        {
            "name": "deliveryOptionIds",
            "baseName": "delivery_option_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "manufacturerInfo",
            "baseName": "manufacturer_info",
            "type": "ProductAddManufacturerInfo",
            "format": ""
        },
        {
            "name": "whenMade",
            "baseName": "when_made",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSupply",
            "baseName": "is_supply",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "materials",
            "baseName": "materials",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "autoRenew",
            "baseName": "auto_renew",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowDisplayCondition",
            "baseName": "allow_display_condition",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "minOrderQuantity",
            "baseName": "min_order_quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxOrderQuantity",
            "baseName": "max_order_quantity",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductAdd.attributeTypeMap;
    }

    public constructor() {
    }
}
