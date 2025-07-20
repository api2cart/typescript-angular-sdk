// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AttributeAdd200Response } from '../models/AttributeAdd200Response';
import { AttributeDelete200Response } from '../models/AttributeDelete200Response';
import { BasketLiveShippingServiceDelete200Response } from '../models/BasketLiveShippingServiceDelete200Response';
import { CartCatalogPriceRulesCount200Response } from '../models/CartCatalogPriceRulesCount200Response';
import { CartCouponAdd } from '../models/CartCouponAdd';
import { CartCouponAdd200Response } from '../models/CartCouponAdd200Response';
import { CartCouponCount200Response } from '../models/CartCouponCount200Response';
import { CartDelete200Response } from '../models/CartDelete200Response';
import { CartGiftcardAdd200Response } from '../models/CartGiftcardAdd200Response';
import { CartGiftcardCount200Response } from '../models/CartGiftcardCount200Response';
import { CartInfo200Response } from '../models/CartInfo200Response';
import { CartMethods200Response } from '../models/CartMethods200Response';
import { CartPluginList200Response } from '../models/CartPluginList200Response';
import { CartScriptAdd200Response } from '../models/CartScriptAdd200Response';
import { CartValidate200Response } from '../models/CartValidate200Response';
import { ModelResponseCartCatalogPriceRulesList } from '../models/ModelResponseCartCatalogPriceRulesList';
import { ModelResponseCartCouponList } from '../models/ModelResponseCartCouponList';
import { ModelResponseCartGiftCardList } from '../models/ModelResponseCartGiftCardList';
import { ModelResponseCartMetaDataList } from '../models/ModelResponseCartMetaDataList';
import { ModelResponseCartScriptList } from '../models/ModelResponseCartScriptList';
import { ModelResponseCartShippingZonesList } from '../models/ModelResponseCartShippingZonesList';

/**
 * no description
 */
export class CartApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get count of cart catalog price rules discounts.
     * cart.catalog_price_rules.count
     */
    public async cartCatalogPriceRulesCount(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/cart.catalog_price_rules.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get cart catalog price rules discounts.
     * cart.catalog_price_rules.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param ids Retrieves  catalog_price_rules by ids
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async cartCatalogPriceRulesList(start?: number, count?: number, pageCursor?: string, ids?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/cart.catalog_price_rules.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this method to create a coupon with specified conditions.
     * cart.coupon.add
     * @param cartCouponAdd 
     */
    public async cartCouponAdd(cartCouponAdd: CartCouponAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cartCouponAdd' is not null or undefined
        if (cartCouponAdd === null || cartCouponAdd === undefined) {
            throw new RequiredError("CartApi", "cartCouponAdd", "cartCouponAdd");
        }


        // Path Params
        const localVarPath = '/cart.coupon.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(cartCouponAdd, "CartCouponAdd", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this method to add additional conditions for coupon application.
     * cart.coupon.condition.add
     * @param couponId Coupon Id
     * @param entity Defines condition entity type
     * @param key Defines condition entity attribute key
     * @param operator Defines condition operator
     * @param value Defines condition value, can be comma separated according to the operator.
     * @param target Defines condition operator
     * @param includeTax Indicates whether to apply a discount for taxes.
     * @param includeShipping Indicates whether to apply a discount for shipping.
     * @param storeId Store Id
     */
    public async cartCouponConditionAdd(couponId: string, entity: 'order' | 'order_shipping_address' | 'product' | 'customer', key: 'total' | 'subtotal' | 'shipping_total' | 'total_quantity' | 'total_weight' | 'country' | 'product_id' | 'variant_id' | 'category_id' | 'customer_id' | 'item_price' | 'item_total_price' | 'item_quantity' | 'carrier_id', operator: string, value: string, target?: string, includeTax?: boolean, includeShipping?: boolean, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'couponId' is not null or undefined
        if (couponId === null || couponId === undefined) {
            throw new RequiredError("CartApi", "cartCouponConditionAdd", "couponId");
        }


        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new RequiredError("CartApi", "cartCouponConditionAdd", "entity");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("CartApi", "cartCouponConditionAdd", "key");
        }


        // verify required parameter 'operator' is not null or undefined
        if (operator === null || operator === undefined) {
            throw new RequiredError("CartApi", "cartCouponConditionAdd", "operator");
        }


        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new RequiredError("CartApi", "cartCouponConditionAdd", "value");
        }






        // Path Params
        const localVarPath = '/cart.coupon.condition.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (couponId !== undefined) {
            requestContext.setQueryParam("coupon_id", ObjectSerializer.serialize(couponId, "string", ""));
        }

        // Query Params
        if (entity !== undefined) {
            requestContext.setQueryParam("entity", ObjectSerializer.serialize(entity, "'order' | 'order_shipping_address' | 'product' | 'customer'", ""));
        }

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "'total' | 'subtotal' | 'shipping_total' | 'total_quantity' | 'total_weight' | 'country' | 'product_id' | 'variant_id' | 'category_id' | 'customer_id' | 'item_price' | 'item_total_price' | 'item_quantity' | 'carrier_id'", ""));
        }

        // Query Params
        if (operator !== undefined) {
            requestContext.setQueryParam("operator", ObjectSerializer.serialize(operator, "string", ""));
        }

        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", ObjectSerializer.serialize(value, "string", ""));
        }

        // Query Params
        if (target !== undefined) {
            requestContext.setQueryParam("target", ObjectSerializer.serialize(target, "string", ""));
        }

        // Query Params
        if (includeTax !== undefined) {
            requestContext.setQueryParam("include_tax", ObjectSerializer.serialize(includeTax, "boolean", ""));
        }

        // Query Params
        if (includeShipping !== undefined) {
            requestContext.setQueryParam("include_shipping", ObjectSerializer.serialize(includeShipping, "boolean", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This method allows you to get the number of coupons. On some platforms, you can filter the coupons by the date they were active.
     * cart.coupon.count
     * @param storeId Store Id
     * @param avail Defines category\&#39;s visibility status
     * @param dateStartFrom Filter entity by date_start (greater or equal)
     * @param dateStartTo Filter entity by date_start (less or equal)
     * @param dateEndFrom Filter entity by date_end (greater or equal)
     * @param dateEndTo Filter entity by date_end (less or equal)
     */
    public async cartCouponCount(storeId?: string, avail?: boolean, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/cart.coupon.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (avail !== undefined) {
            requestContext.setQueryParam("avail", ObjectSerializer.serialize(avail, "boolean", ""));
        }

        // Query Params
        if (dateStartFrom !== undefined) {
            requestContext.setQueryParam("date_start_from", ObjectSerializer.serialize(dateStartFrom, "string", ""));
        }

        // Query Params
        if (dateStartTo !== undefined) {
            requestContext.setQueryParam("date_start_to", ObjectSerializer.serialize(dateStartTo, "string", ""));
        }

        // Query Params
        if (dateEndFrom !== undefined) {
            requestContext.setQueryParam("date_end_from", ObjectSerializer.serialize(dateEndFrom, "string", ""));
        }

        // Query Params
        if (dateEndTo !== undefined) {
            requestContext.setQueryParam("date_end_to", ObjectSerializer.serialize(dateEndTo, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete coupon
     * cart.coupon.delete
     * @param id Entity id
     * @param storeId Store Id
     */
    public async cartCouponDelete(id: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CartApi", "cartCouponDelete", "id");
        }



        // Path Params
        const localVarPath = '/cart.coupon.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get cart coupon discounts.
     * cart.coupon.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param couponsIds Filter coupons by ids
     * @param storeId Filter coupons by store id
     * @param langId Language id
     * @param avail Filter coupons by avail status
     * @param dateStartFrom Filter entity by date_start (greater or equal)
     * @param dateStartTo Filter entity by date_start (less or equal)
     * @param dateEndFrom Filter entity by date_end (greater or equal)
     * @param dateEndTo Filter entity by date_end (less or equal)
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async cartCouponList(start?: number, count?: number, pageCursor?: string, couponsIds?: string, storeId?: string, langId?: string, avail?: boolean, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;















        // Path Params
        const localVarPath = '/cart.coupon.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
        }

        // Query Params
        if (couponsIds !== undefined) {
            requestContext.setQueryParam("coupons_ids", ObjectSerializer.serialize(couponsIds, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (avail !== undefined) {
            requestContext.setQueryParam("avail", ObjectSerializer.serialize(avail, "boolean", ""));
        }

        // Query Params
        if (dateStartFrom !== undefined) {
            requestContext.setQueryParam("date_start_from", ObjectSerializer.serialize(dateStartFrom, "string", ""));
        }

        // Query Params
        if (dateStartTo !== undefined) {
            requestContext.setQueryParam("date_start_to", ObjectSerializer.serialize(dateStartTo, "string", ""));
        }

        // Query Params
        if (dateEndFrom !== undefined) {
            requestContext.setQueryParam("date_end_from", ObjectSerializer.serialize(dateEndFrom, "string", ""));
        }

        // Query Params
        if (dateEndTo !== undefined) {
            requestContext.setQueryParam("date_end_to", ObjectSerializer.serialize(dateEndTo, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove store from API2Cart
     * cart.delete
     * @param deleteBridge Identifies if there is a necessity to delete bridge
     */
    public async cartDelete(deleteBridge?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/cart.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (deleteBridge !== undefined) {
            requestContext.setQueryParam("delete_bridge", ObjectSerializer.serialize(deleteBridge, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this method to create a gift card for a specified amount.
     * cart.giftcard.add
     * @param amount Defines the gift card amount value.
     * @param code Gift card code
     * @param ownerEmail Gift card owner email
     * @param recipientEmail Gift card recipient email
     * @param recipientName Gift card recipient name
     * @param ownerName Gift card owner name
     */
    public async cartGiftcardAdd(amount: number, code?: string, ownerEmail?: string, recipientEmail?: string, recipientName?: string, ownerName?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'amount' is not null or undefined
        if (amount === null || amount === undefined) {
            throw new RequiredError("CartApi", "cartGiftcardAdd", "amount");
        }







        // Path Params
        const localVarPath = '/cart.giftcard.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (amount !== undefined) {
            requestContext.setQueryParam("amount", ObjectSerializer.serialize(amount, "number", ""));
        }

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }

        // Query Params
        if (ownerEmail !== undefined) {
            requestContext.setQueryParam("owner_email", ObjectSerializer.serialize(ownerEmail, "string", ""));
        }

        // Query Params
        if (recipientEmail !== undefined) {
            requestContext.setQueryParam("recipient_email", ObjectSerializer.serialize(recipientEmail, "string", ""));
        }

        // Query Params
        if (recipientName !== undefined) {
            requestContext.setQueryParam("recipient_name", ObjectSerializer.serialize(recipientName, "string", ""));
        }

        // Query Params
        if (ownerName !== undefined) {
            requestContext.setQueryParam("owner_name", ObjectSerializer.serialize(ownerName, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get gift cards count.
     * cart.giftcard.count
     * @param storeId Store Id
     */
    public async cartGiftcardCount(storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/cart.giftcard.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete giftcard
     * cart.giftcard.delete
     * @param id Entity id
     */
    public async cartGiftcardDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CartApi", "cartGiftcardDelete", "id");
        }


        // Path Params
        const localVarPath = '/cart.giftcard.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get gift cards list.
     * cart.giftcard.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param storeId Store Id
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async cartGiftcardList(start?: number, count?: number, pageCursor?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/cart.giftcard.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.
     * cart.info
     * @param storeId Store Id
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async cartInfo(storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/cart.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Using this method, you can get a list of metadata for various entities (products, options, customers, orders). Usually this is data created by third-party plugins.
     * cart.meta_data.list
     * @param entityId Entity Id
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param entity Entity
     * @param storeId Store Id
     * @param langId Language id
     * @param key Key
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async cartMetaDataList(entityId: string, count?: number, pageCursor?: string, entity?: string, storeId?: string, langId?: string, key?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entityId' is not null or undefined
        if (entityId === null || entityId === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataList", "entityId");
        }











        // Path Params
        const localVarPath = '/cart.meta_data.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
        }

        // Query Params
        if (entityId !== undefined) {
            requestContext.setQueryParam("entity_id", ObjectSerializer.serialize(entityId, "string", ""));
        }

        // Query Params
        if (entity !== undefined) {
            requestContext.setQueryParam("entity", ObjectSerializer.serialize(entity, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Set meta data for a specific entity
     * cart.meta_data.set
     * @param entityId Entity Id
     * @param key Key
     * @param value Value
     * @param namespace Metafield namespace
     * @param entity Entity
     * @param storeId Store Id
     * @param langId Language id
     */
    public async cartMetaDataSet(entityId: string, key: string, value: string, namespace: string, entity?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entityId' is not null or undefined
        if (entityId === null || entityId === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataSet", "entityId");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataSet", "key");
        }


        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataSet", "value");
        }


        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataSet", "namespace");
        }





        // Path Params
        const localVarPath = '/cart.meta_data.set.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (entityId !== undefined) {
            requestContext.setQueryParam("entity_id", ObjectSerializer.serialize(entityId, "string", ""));
        }

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }

        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", ObjectSerializer.serialize(value, "string", ""));
        }

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }

        // Query Params
        if (entity !== undefined) {
            requestContext.setQueryParam("entity", ObjectSerializer.serialize(entity, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Unset meta data for a specific entity
     * cart.meta_data.unset
     * @param entityId Entity Id
     * @param key Key
     * @param id Entity id
     * @param entity Entity
     * @param storeId Store Id
     */
    public async cartMetaDataUnset(entityId: string, key: string, id: string, entity?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entityId' is not null or undefined
        if (entityId === null || entityId === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataUnset", "entityId");
        }


        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataUnset", "key");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CartApi", "cartMetaDataUnset", "id");
        }




        // Path Params
        const localVarPath = '/cart.meta_data.unset.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (entityId !== undefined) {
            requestContext.setQueryParam("entity_id", ObjectSerializer.serialize(entityId, "string", ""));
        }

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (entity !== undefined) {
            requestContext.setQueryParam("entity", ObjectSerializer.serialize(entity, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of supported API methods.
     * cart.methods
     */
    public async cartMethods(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/cart.methods.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of third-party plugins installed on the store.
     * cart.plugin.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param storeId Store Id
     */
    public async cartPluginList(start?: number, count?: number, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/cart.plugin.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add new script to the storefront
     * cart.script.add
     * @param name The user-friendly script name
     * @param description The user-friendly description
     * @param html An html string containing exactly one &#x60;script&#x60; tag.
     * @param src The URL of the remote script
     * @param loadMethod The load method to use for the script
     * @param scope The page or pages on the online store where the script should be included
     * @param events Event for run scripts
     * @param storeId Store Id
     */
    public async cartScriptAdd(name?: string, description?: string, html?: string, src?: string, loadMethod?: string, scope?: string, events?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/cart.script.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
        }

        // Query Params
        if (html !== undefined) {
            requestContext.setQueryParam("html", ObjectSerializer.serialize(html, "string", ""));
        }

        // Query Params
        if (src !== undefined) {
            requestContext.setQueryParam("src", ObjectSerializer.serialize(src, "string", ""));
        }

        // Query Params
        if (loadMethod !== undefined) {
            requestContext.setQueryParam("load_method", ObjectSerializer.serialize(loadMethod, "string", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }

        // Query Params
        if (events !== undefined) {
            requestContext.setQueryParam("events", ObjectSerializer.serialize(events, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove script from the storefront
     * cart.script.delete
     * @param id Entity id
     * @param storeId Store Id
     */
    public async cartScriptDelete(id: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CartApi", "cartScriptDelete", "id");
        }



        // Path Params
        const localVarPath = '/cart.script.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get scripts installed to the storefront
     * cart.script.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param scriptIds Retrieves only scripts with specific ids
     * @param storeId Store Id
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async cartScriptList(start?: number, count?: number, pageCursor?: string, scriptIds?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/cart.script.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
        }

        // Query Params
        if (scriptIds !== undefined) {
            requestContext.setQueryParam("script_ids", ObjectSerializer.serialize(scriptIds, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (createdFrom !== undefined) {
            requestContext.setQueryParam("created_from", ObjectSerializer.serialize(createdFrom, "string", ""));
        }

        // Query Params
        if (createdTo !== undefined) {
            requestContext.setQueryParam("created_to", ObjectSerializer.serialize(createdTo, "string", ""));
        }

        // Query Params
        if (modifiedFrom !== undefined) {
            requestContext.setQueryParam("modified_from", ObjectSerializer.serialize(modifiedFrom, "string", ""));
        }

        // Query Params
        if (modifiedTo !== undefined) {
            requestContext.setQueryParam("modified_to", ObjectSerializer.serialize(modifiedTo, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get list of shipping zones
     * cart.shipping_zones.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param storeId Store Id
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async cartShippingZonesList(start?: number, count?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/cart.shipping_zones.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.
     * cart.validate
     * @param validateVersion Specify if api2cart should validate cart version
     */
    public async cartValidate(validateVersion?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/cart.validate.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (validateVersion !== undefined) {
            requestContext.setQueryParam("validate_version", ObjectSerializer.serialize(validateVersion, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CartApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartCatalogPriceRulesCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartCatalogPriceRulesCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartCatalogPriceRulesCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartCatalogPriceRulesCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartCatalogPriceRulesCount200Response", ""
            ) as CartCatalogPriceRulesCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartCatalogPriceRulesCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartCatalogPriceRulesCount200Response", ""
            ) as CartCatalogPriceRulesCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartCatalogPriceRulesList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartCatalogPriceRulesListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseCartCatalogPriceRulesList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseCartCatalogPriceRulesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartCatalogPriceRulesList", ""
            ) as ModelResponseCartCatalogPriceRulesList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseCartCatalogPriceRulesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartCatalogPriceRulesList", ""
            ) as ModelResponseCartCatalogPriceRulesList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartCouponAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartCouponAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartCouponAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartCouponAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartCouponAdd200Response", ""
            ) as CartCouponAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartCouponAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartCouponAdd200Response", ""
            ) as CartCouponAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartCouponConditionAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartCouponConditionAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketLiveShippingServiceDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceDelete200Response", ""
            ) as BasketLiveShippingServiceDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketLiveShippingServiceDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceDelete200Response", ""
            ) as BasketLiveShippingServiceDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartCouponCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartCouponCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartCouponCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartCouponCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartCouponCount200Response", ""
            ) as CartCouponCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartCouponCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartCouponCount200Response", ""
            ) as CartCouponCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartCouponDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartCouponDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttributeDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeDelete200Response", ""
            ) as AttributeDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttributeDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeDelete200Response", ""
            ) as AttributeDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartCouponList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartCouponListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseCartCouponList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseCartCouponList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartCouponList", ""
            ) as ModelResponseCartCouponList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseCartCouponList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartCouponList", ""
            ) as ModelResponseCartCouponList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartDelete200Response", ""
            ) as CartDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartDelete200Response", ""
            ) as CartDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartGiftcardAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartGiftcardAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartGiftcardAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartGiftcardAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartGiftcardAdd200Response", ""
            ) as CartGiftcardAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartGiftcardAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartGiftcardAdd200Response", ""
            ) as CartGiftcardAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartGiftcardCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartGiftcardCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartGiftcardCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartGiftcardCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartGiftcardCount200Response", ""
            ) as CartGiftcardCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartGiftcardCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartGiftcardCount200Response", ""
            ) as CartGiftcardCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartGiftcardDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartGiftcardDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttributeDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeDelete200Response", ""
            ) as AttributeDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttributeDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeDelete200Response", ""
            ) as AttributeDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartGiftcardList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartGiftcardListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseCartGiftCardList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseCartGiftCardList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartGiftCardList", ""
            ) as ModelResponseCartGiftCardList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseCartGiftCardList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartGiftCardList", ""
            ) as ModelResponseCartGiftCardList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartInfo200Response", ""
            ) as CartInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartInfo200Response", ""
            ) as CartInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartMetaDataList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartMetaDataListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseCartMetaDataList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseCartMetaDataList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartMetaDataList", ""
            ) as ModelResponseCartMetaDataList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseCartMetaDataList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartMetaDataList", ""
            ) as ModelResponseCartMetaDataList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartMetaDataSet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartMetaDataSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttributeAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeAdd200Response", ""
            ) as AttributeAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttributeAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeAdd200Response", ""
            ) as AttributeAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartMetaDataUnset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartMetaDataUnsetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketLiveShippingServiceDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceDelete200Response", ""
            ) as BasketLiveShippingServiceDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketLiveShippingServiceDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceDelete200Response", ""
            ) as BasketLiveShippingServiceDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartMethods
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartMethodsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartMethods200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartMethods200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartMethods200Response", ""
            ) as CartMethods200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartMethods200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartMethods200Response", ""
            ) as CartMethods200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartPluginList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartPluginListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartPluginList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartPluginList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartPluginList200Response", ""
            ) as CartPluginList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartPluginList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartPluginList200Response", ""
            ) as CartPluginList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartScriptAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartScriptAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartScriptAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartScriptAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartScriptAdd200Response", ""
            ) as CartScriptAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartScriptAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartScriptAdd200Response", ""
            ) as CartScriptAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartScriptDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartScriptDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttributeDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeDelete200Response", ""
            ) as AttributeDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttributeDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeDelete200Response", ""
            ) as AttributeDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartScriptList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartScriptListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseCartScriptList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseCartScriptList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartScriptList", ""
            ) as ModelResponseCartScriptList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseCartScriptList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartScriptList", ""
            ) as ModelResponseCartScriptList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartShippingZonesList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartShippingZonesListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseCartShippingZonesList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseCartShippingZonesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartShippingZonesList", ""
            ) as ModelResponseCartShippingZonesList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseCartShippingZonesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCartShippingZonesList", ""
            ) as ModelResponseCartShippingZonesList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cartValidate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cartValidateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartValidate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartValidate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartValidate200Response", ""
            ) as CartValidate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartValidate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartValidate200Response", ""
            ) as CartValidate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
