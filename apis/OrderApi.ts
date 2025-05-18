// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountConfigUpdate200Response } from '../models/AccountConfigUpdate200Response';
import { AttributeValueDelete200Response } from '../models/AttributeValueDelete200Response';
import { CategoryAddBatch200Response } from '../models/CategoryAddBatch200Response';
import { ModelResponseOrderAbandonedList } from '../models/ModelResponseOrderAbandonedList';
import { ModelResponseOrderList } from '../models/ModelResponseOrderList';
import { ModelResponseOrderPreestimateShippingList } from '../models/ModelResponseOrderPreestimateShippingList';
import { ModelResponseOrderShipmentList } from '../models/ModelResponseOrderShipmentList';
import { ModelResponseOrderStatusList } from '../models/ModelResponseOrderStatusList';
import { ModelResponseOrderTransactionList } from '../models/ModelResponseOrderTransactionList';
import { OrderAdd } from '../models/OrderAdd';
import { OrderAdd200Response } from '../models/OrderAdd200Response';
import { OrderCount200Response } from '../models/OrderCount200Response';
import { OrderFinancialStatusList200Response } from '../models/OrderFinancialStatusList200Response';
import { OrderFind200Response } from '../models/OrderFind200Response';
import { OrderFulfillmentStatusList200Response } from '../models/OrderFulfillmentStatusList200Response';
import { OrderInfo200Response } from '../models/OrderInfo200Response';
import { OrderPreestimateShippingList } from '../models/OrderPreestimateShippingList';
import { OrderRefundAdd } from '../models/OrderRefundAdd';
import { OrderRefundAdd200Response } from '../models/OrderRefundAdd200Response';
import { OrderReturnAdd } from '../models/OrderReturnAdd';
import { OrderReturnAdd200Response } from '../models/OrderReturnAdd200Response';
import { OrderReturnUpdate } from '../models/OrderReturnUpdate';
import { OrderShipmentAdd } from '../models/OrderShipmentAdd';
import { OrderShipmentAdd200Response } from '../models/OrderShipmentAdd200Response';
import { OrderShipmentAddBatch } from '../models/OrderShipmentAddBatch';
import { OrderShipmentDelete200Response } from '../models/OrderShipmentDelete200Response';
import { OrderShipmentInfo200Response } from '../models/OrderShipmentInfo200Response';
import { OrderShipmentTrackingAdd } from '../models/OrderShipmentTrackingAdd';
import { OrderShipmentTrackingAdd200Response } from '../models/OrderShipmentTrackingAdd200Response';
import { OrderShipmentUpdate } from '../models/OrderShipmentUpdate';

/**
 * no description
 */
export class OrderApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get list of orders that were left by customers before completing the order.
     * order.abandoned.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param customerId Retrieves orders specified by customer id
     * @param customerEmail Retrieves orders specified by customer email
     * @param storeId Store Id
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param skipEmptyEmail Filter empty emails
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async orderAbandonedList(start?: number, count?: number, pageCursor?: string, customerId?: string, customerEmail?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, skipEmptyEmail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;















        // Path Params
        const localVarPath = '/order.abandoned.list.json';

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
        if (customerId !== undefined) {
            requestContext.setQueryParam("customer_id", ObjectSerializer.serialize(customerId, "string", ""));
        }

        // Query Params
        if (customerEmail !== undefined) {
            requestContext.setQueryParam("customer_email", ObjectSerializer.serialize(customerEmail, "string", ""));
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
        if (skipEmptyEmail !== undefined) {
            requestContext.setQueryParam("skip_empty_email", ObjectSerializer.serialize(skipEmptyEmail, "boolean", ""));
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
     * Add a new order to the cart.
     * order.add
     * @param orderAdd 
     */
    public async orderAdd(orderAdd: OrderAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderAdd' is not null or undefined
        if (orderAdd === null || orderAdd === undefined) {
            throw new RequiredError("OrderApi", "orderAdd", "orderAdd");
        }


        // Path Params
        const localVarPath = '/order.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderAdd, "OrderAdd", ""),
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
     * Count orders in store
     * order.count
     * @param orderIds Counts orders specified by order ids
     * @param ids Counts orders specified by ids
     * @param customerId Counts orders quantity specified by customer id
     * @param storeId Counts orders quantity specified by store id
     * @param customerEmail Counts orders quantity specified by customer email
     * @param orderStatus Counts orders quantity specified by order status
     * @param orderStatusIds Retrieves orders specified by order statuses
     * @param ebayOrderStatus Counts orders quantity specified by order status
     * @param financialStatus Counts orders quantity specified by financial status
     * @param financialStatusIds Retrieves orders count specified by financial status ids
     * @param fulfillmentChannel Retrieves order with a fulfillment channel
     * @param fulfillmentStatus Create order with fulfillment status
     * @param shippingMethod Retrieve entities according to shipping method
     * @param deliveryMethod Retrieves order with delivery method
     * @param tags Order tags
     * @param shipNodeType Retrieves order with ship node type
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     */
    public async orderCount(orderIds?: string, ids?: string, customerId?: string, storeId?: string, customerEmail?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentChannel?: string, fulfillmentStatus?: string, shippingMethod?: string, deliveryMethod?: string, tags?: string, shipNodeType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





















        // Path Params
        const localVarPath = '/order.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (orderIds !== undefined) {
            requestContext.setQueryParam("order_ids", ObjectSerializer.serialize(orderIds, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (customerId !== undefined) {
            requestContext.setQueryParam("customer_id", ObjectSerializer.serialize(customerId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (customerEmail !== undefined) {
            requestContext.setQueryParam("customer_email", ObjectSerializer.serialize(customerEmail, "string", ""));
        }

        // Query Params
        if (orderStatus !== undefined) {
            requestContext.setQueryParam("order_status", ObjectSerializer.serialize(orderStatus, "string", ""));
        }

        // Query Params
        if (orderStatusIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(orderStatusIds, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("order_status_ids", serializedParam);
            }
        }

        // Query Params
        if (ebayOrderStatus !== undefined) {
            requestContext.setQueryParam("ebay_order_status", ObjectSerializer.serialize(ebayOrderStatus, "string", ""));
        }

        // Query Params
        if (financialStatus !== undefined) {
            requestContext.setQueryParam("financial_status", ObjectSerializer.serialize(financialStatus, "string", ""));
        }

        // Query Params
        if (financialStatusIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(financialStatusIds, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("financial_status_ids", serializedParam);
            }
        }

        // Query Params
        if (fulfillmentChannel !== undefined) {
            requestContext.setQueryParam("fulfillment_channel", ObjectSerializer.serialize(fulfillmentChannel, "string", ""));
        }

        // Query Params
        if (fulfillmentStatus !== undefined) {
            requestContext.setQueryParam("fulfillment_status", ObjectSerializer.serialize(fulfillmentStatus, "string", ""));
        }

        // Query Params
        if (shippingMethod !== undefined) {
            requestContext.setQueryParam("shipping_method", ObjectSerializer.serialize(shippingMethod, "string", ""));
        }

        // Query Params
        if (deliveryMethod !== undefined) {
            requestContext.setQueryParam("delivery_method", ObjectSerializer.serialize(deliveryMethod, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (shipNodeType !== undefined) {
            requestContext.setQueryParam("ship_node_type", ObjectSerializer.serialize(shipNodeType, "string", ""));
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
     * Retrieve list of financial statuses
     * order.financial_status.list
     */
    public async orderFinancialStatusList(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/order.financial_status.list.json';

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
     * This method is deprecated and won\'t be supported in the future. Please use \"order.list\" instead.
     * order.find
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param customerId Retrieves orders specified by customer id
     * @param customerEmail Retrieves orders specified by customer email
     * @param orderStatus Retrieves orders specified by order status
     * @param financialStatus Retrieves orders specified by financial status
     * @param createdTo Retrieve entities to their creation date
     * @param createdFrom Retrieve entities from their creation date
     * @param modifiedTo Retrieve entities to their modification date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async orderFind(start?: number, count?: number, customerId?: string, customerEmail?: string, orderStatus?: string, financialStatus?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/order.find.json';

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
        if (customerId !== undefined) {
            requestContext.setQueryParam("customer_id", ObjectSerializer.serialize(customerId, "string", ""));
        }

        // Query Params
        if (customerEmail !== undefined) {
            requestContext.setQueryParam("customer_email", ObjectSerializer.serialize(customerEmail, "string", ""));
        }

        // Query Params
        if (orderStatus !== undefined) {
            requestContext.setQueryParam("order_status", ObjectSerializer.serialize(orderStatus, "string", ""));
        }

        // Query Params
        if (financialStatus !== undefined) {
            requestContext.setQueryParam("financial_status", ObjectSerializer.serialize(financialStatus, "string", ""));
        }

        // Query Params
        if (createdTo !== undefined) {
            requestContext.setQueryParam("created_to", ObjectSerializer.serialize(createdTo, "string", ""));
        }

        // Query Params
        if (createdFrom !== undefined) {
            requestContext.setQueryParam("created_from", ObjectSerializer.serialize(createdFrom, "string", ""));
        }

        // Query Params
        if (modifiedTo !== undefined) {
            requestContext.setQueryParam("modified_to", ObjectSerializer.serialize(modifiedTo, "string", ""));
        }

        // Query Params
        if (modifiedFrom !== undefined) {
            requestContext.setQueryParam("modified_from", ObjectSerializer.serialize(modifiedFrom, "string", ""));
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
     * Retrieve list of fulfillment statuses
     * order.fulfillment_status.list
     * @param action Available statuses for the specified action.
     */
    public async orderFulfillmentStatusList(action?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/order.fulfillment_status.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
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
     * Info about a specific order by ID
     * order.info
     * @param id Retrieves order info specified by id
     * @param orderId Retrieves order’s info specified by order id
     * @param storeId Defines store id where the order should be found
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param enableCache If the value is \&#39;true\&#39; and order exist in our cache, we will return order.info response from cache
     * @param useLatestApiVersion Use the latest platform API version
     */
    public async orderInfo(id?: string, orderId?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/order.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (orderId !== undefined) {
            requestContext.setQueryParam("order_id", ObjectSerializer.serialize(orderId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }

        // Query Params
        if (enableCache !== undefined) {
            requestContext.setQueryParam("enable_cache", ObjectSerializer.serialize(enableCache, "boolean", ""));
        }

        // Query Params
        if (useLatestApiVersion !== undefined) {
            requestContext.setQueryParam("use_latest_api_version", ObjectSerializer.serialize(useLatestApiVersion, "boolean", ""));
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
     * Get list of orders from store.
     * order.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve orders via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param ids Retrieves orders specified by ids
     * @param orderIds Retrieves orders specified by order ids
     * @param sinceId Retrieve entities starting from the specified id.
     * @param storeId Store Id
     * @param customerId Retrieves orders specified by customer id
     * @param customerEmail Retrieves orders specified by customer email
     * @param basketId Retrieves order’s info specified by basket id.
     * @param currencyId Currency Id
     * @param phone Filter orders by customer\&#39;s phone number
     * @param orderStatus Retrieves orders specified by order status
     * @param orderStatusIds Retrieves orders specified by order statuses
     * @param ebayOrderStatus Retrieves orders specified by order status
     * @param financialStatus Retrieves orders specified by financial status
     * @param financialStatusIds Retrieves orders specified by financial status ids
     * @param fulfillmentStatus Create order with fulfillment status
     * @param returnStatus Retrieves orders specified by return status
     * @param fulfillmentChannel Retrieves order with a fulfillment channel
     * @param shippingMethod Retrieve entities according to shipping method
     * @param skipOrderIds Skipped orders by ids
     * @param isDeleted Filter deleted orders
     * @param shippingCountryIso3 Retrieve entities according to shipping country
     * @param deliveryMethod Retrieves order with delivery method
     * @param shipNodeType Retrieves order with ship node type
     * @param createdTo Retrieve entities to their creation date
     * @param createdFrom Retrieve entities from their creation date
     * @param modifiedTo Retrieve entities to their modification date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param tags Order tags
     * @param sortBy Set field to sort by
     * @param sortDirection Set sorting direction
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param enableCache If the value is \&#39;true\&#39;, we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)
     * @param useLatestApiVersion Use the latest platform API version
     */
    public async orderList(start?: number, count?: number, pageCursor?: string, ids?: string, orderIds?: string, sinceId?: string, storeId?: string, customerId?: string, customerEmail?: string, basketId?: string, currencyId?: string, phone?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentStatus?: string, returnStatus?: string, fulfillmentChannel?: string, shippingMethod?: string, skipOrderIds?: string, isDeleted?: boolean, shippingCountryIso3?: string, deliveryMethod?: string, shipNodeType?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, tags?: string, sortBy?: string, sortDirection?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







































        // Path Params
        const localVarPath = '/order.list.json';

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
        if (orderIds !== undefined) {
            requestContext.setQueryParam("order_ids", ObjectSerializer.serialize(orderIds, "string", ""));
        }

        // Query Params
        if (sinceId !== undefined) {
            requestContext.setQueryParam("since_id", ObjectSerializer.serialize(sinceId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (customerId !== undefined) {
            requestContext.setQueryParam("customer_id", ObjectSerializer.serialize(customerId, "string", ""));
        }

        // Query Params
        if (customerEmail !== undefined) {
            requestContext.setQueryParam("customer_email", ObjectSerializer.serialize(customerEmail, "string", ""));
        }

        // Query Params
        if (basketId !== undefined) {
            requestContext.setQueryParam("basket_id", ObjectSerializer.serialize(basketId, "string", ""));
        }

        // Query Params
        if (currencyId !== undefined) {
            requestContext.setQueryParam("currency_id", ObjectSerializer.serialize(currencyId, "string", ""));
        }

        // Query Params
        if (phone !== undefined) {
            requestContext.setQueryParam("phone", ObjectSerializer.serialize(phone, "string", ""));
        }

        // Query Params
        if (orderStatus !== undefined) {
            requestContext.setQueryParam("order_status", ObjectSerializer.serialize(orderStatus, "string", ""));
        }

        // Query Params
        if (orderStatusIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(orderStatusIds, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("order_status_ids", serializedParam);
            }
        }

        // Query Params
        if (ebayOrderStatus !== undefined) {
            requestContext.setQueryParam("ebay_order_status", ObjectSerializer.serialize(ebayOrderStatus, "string", ""));
        }

        // Query Params
        if (financialStatus !== undefined) {
            requestContext.setQueryParam("financial_status", ObjectSerializer.serialize(financialStatus, "string", ""));
        }

        // Query Params
        if (financialStatusIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(financialStatusIds, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("financial_status_ids", serializedParam);
            }
        }

        // Query Params
        if (fulfillmentStatus !== undefined) {
            requestContext.setQueryParam("fulfillment_status", ObjectSerializer.serialize(fulfillmentStatus, "string", ""));
        }

        // Query Params
        if (returnStatus !== undefined) {
            requestContext.setQueryParam("return_status", ObjectSerializer.serialize(returnStatus, "string", ""));
        }

        // Query Params
        if (fulfillmentChannel !== undefined) {
            requestContext.setQueryParam("fulfillment_channel", ObjectSerializer.serialize(fulfillmentChannel, "string", ""));
        }

        // Query Params
        if (shippingMethod !== undefined) {
            requestContext.setQueryParam("shipping_method", ObjectSerializer.serialize(shippingMethod, "string", ""));
        }

        // Query Params
        if (skipOrderIds !== undefined) {
            requestContext.setQueryParam("skip_order_ids", ObjectSerializer.serialize(skipOrderIds, "string", ""));
        }

        // Query Params
        if (isDeleted !== undefined) {
            requestContext.setQueryParam("is_deleted", ObjectSerializer.serialize(isDeleted, "boolean", ""));
        }

        // Query Params
        if (shippingCountryIso3 !== undefined) {
            requestContext.setQueryParam("shipping_country_iso3", ObjectSerializer.serialize(shippingCountryIso3, "string", ""));
        }

        // Query Params
        if (deliveryMethod !== undefined) {
            requestContext.setQueryParam("delivery_method", ObjectSerializer.serialize(deliveryMethod, "string", ""));
        }

        // Query Params
        if (shipNodeType !== undefined) {
            requestContext.setQueryParam("ship_node_type", ObjectSerializer.serialize(shipNodeType, "string", ""));
        }

        // Query Params
        if (createdTo !== undefined) {
            requestContext.setQueryParam("created_to", ObjectSerializer.serialize(createdTo, "string", ""));
        }

        // Query Params
        if (createdFrom !== undefined) {
            requestContext.setQueryParam("created_from", ObjectSerializer.serialize(createdFrom, "string", ""));
        }

        // Query Params
        if (modifiedTo !== undefined) {
            requestContext.setQueryParam("modified_to", ObjectSerializer.serialize(modifiedTo, "string", ""));
        }

        // Query Params
        if (modifiedFrom !== undefined) {
            requestContext.setQueryParam("modified_from", ObjectSerializer.serialize(modifiedFrom, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (sortBy !== undefined) {
            requestContext.setQueryParam("sort_by", ObjectSerializer.serialize(sortBy, "string", ""));
        }

        // Query Params
        if (sortDirection !== undefined) {
            requestContext.setQueryParam("sort_direction", ObjectSerializer.serialize(sortDirection, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }

        // Query Params
        if (enableCache !== undefined) {
            requestContext.setQueryParam("enable_cache", ObjectSerializer.serialize(enableCache, "boolean", ""));
        }

        // Query Params
        if (useLatestApiVersion !== undefined) {
            requestContext.setQueryParam("use_latest_api_version", ObjectSerializer.serialize(useLatestApiVersion, "boolean", ""));
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
     * Retrieve list of order preestimated shipping methods
     * order.preestimate_shipping.list
     * @param orderPreestimateShippingList 
     */
    public async orderPreestimateShippingList(orderPreestimateShippingList: OrderPreestimateShippingList, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderPreestimateShippingList' is not null or undefined
        if (orderPreestimateShippingList === null || orderPreestimateShippingList === undefined) {
            throw new RequiredError("OrderApi", "orderPreestimateShippingList", "orderPreestimateShippingList");
        }


        // Path Params
        const localVarPath = '/order.preestimate_shipping.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderPreestimateShippingList, "OrderPreestimateShippingList", ""),
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
     * Add a refund to the order.
     * order.refund.add
     * @param orderRefundAdd 
     */
    public async orderRefundAdd(orderRefundAdd: OrderRefundAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderRefundAdd' is not null or undefined
        if (orderRefundAdd === null || orderRefundAdd === undefined) {
            throw new RequiredError("OrderApi", "orderRefundAdd", "orderRefundAdd");
        }


        // Path Params
        const localVarPath = '/order.refund.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderRefundAdd, "OrderRefundAdd", ""),
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
     * Create new return request.
     * order.return.add
     * @param orderReturnAdd 
     */
    public async orderReturnAdd(orderReturnAdd: OrderReturnAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderReturnAdd' is not null or undefined
        if (orderReturnAdd === null || orderReturnAdd === undefined) {
            throw new RequiredError("OrderApi", "orderReturnAdd", "orderReturnAdd");
        }


        // Path Params
        const localVarPath = '/order.return.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderReturnAdd, "OrderReturnAdd", ""),
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
     * Delete return.
     * order.return.delete
     * @param returnId Return ID
     * @param orderId Defines the order id
     * @param storeId Store Id
     */
    public async orderReturnDelete(returnId: string, orderId: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'returnId' is not null or undefined
        if (returnId === null || returnId === undefined) {
            throw new RequiredError("OrderApi", "orderReturnDelete", "returnId");
        }


        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError("OrderApi", "orderReturnDelete", "orderId");
        }



        // Path Params
        const localVarPath = '/order.return.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (returnId !== undefined) {
            requestContext.setQueryParam("return_id", ObjectSerializer.serialize(returnId, "string", ""));
        }

        // Query Params
        if (orderId !== undefined) {
            requestContext.setQueryParam("order_id", ObjectSerializer.serialize(orderId, "string", ""));
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
     * Update order\'s shipment information.
     * order.return.update
     * @param orderReturnUpdate 
     */
    public async orderReturnUpdate(orderReturnUpdate: OrderReturnUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderReturnUpdate' is not null or undefined
        if (orderReturnUpdate === null || orderReturnUpdate === undefined) {
            throw new RequiredError("OrderApi", "orderReturnUpdate", "orderReturnUpdate");
        }


        // Path Params
        const localVarPath = '/order.return.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderReturnUpdate, "OrderReturnUpdate", ""),
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
     * Add a shipment to the order.
     * order.shipment.add
     * @param orderShipmentAdd 
     */
    public async orderShipmentAdd(orderShipmentAdd: OrderShipmentAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderShipmentAdd' is not null or undefined
        if (orderShipmentAdd === null || orderShipmentAdd === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentAdd", "orderShipmentAdd");
        }


        // Path Params
        const localVarPath = '/order.shipment.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderShipmentAdd, "OrderShipmentAdd", ""),
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
     * Add a shipments to the orders.
     * order.shipment.add.batch
     * @param orderShipmentAddBatch 
     */
    public async orderShipmentAddBatch(orderShipmentAddBatch: OrderShipmentAddBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderShipmentAddBatch' is not null or undefined
        if (orderShipmentAddBatch === null || orderShipmentAddBatch === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentAddBatch", "orderShipmentAddBatch");
        }


        // Path Params
        const localVarPath = '/order.shipment.add.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderShipmentAddBatch, "OrderShipmentAddBatch", ""),
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
     * Delete order\'s shipment.
     * order.shipment.delete
     * @param shipmentId Shipment id indicates the number of delivery
     * @param orderId Defines the order for which the shipment will be deleted
     * @param storeId Store Id
     */
    public async orderShipmentDelete(shipmentId: string, orderId: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentDelete", "shipmentId");
        }


        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentDelete", "orderId");
        }



        // Path Params
        const localVarPath = '/order.shipment.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (shipmentId !== undefined) {
            requestContext.setQueryParam("shipment_id", ObjectSerializer.serialize(shipmentId, "string", ""));
        }

        // Query Params
        if (orderId !== undefined) {
            requestContext.setQueryParam("order_id", ObjectSerializer.serialize(orderId, "string", ""));
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
     * Get information of shipment.
     * order.shipment.info
     * @param id Entity id
     * @param orderId Defines the order id
     * @param start This parameter sets the number from which you want to get entities
     * @param storeId Store Id
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async orderShipmentInfo(id: string, orderId: string, start?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentInfo", "id");
        }


        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentInfo", "orderId");
        }







        // Path Params
        const localVarPath = '/order.shipment.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (orderId !== undefined) {
            requestContext.setQueryParam("order_id", ObjectSerializer.serialize(orderId, "string", ""));
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
     * Get list of shipments by orders.
     * order.shipment.list
     * @param orderId Retrieves shipments specified by order id
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param storeId Store Id
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async orderShipmentList(orderId: string, start?: number, count?: number, pageCursor?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentList", "orderId");
        }













        // Path Params
        const localVarPath = '/order.shipment.list.json';

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
        if (orderId !== undefined) {
            requestContext.setQueryParam("order_id", ObjectSerializer.serialize(orderId, "string", ""));
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
     * Add order shipment\'s tracking info.
     * order.shipment.tracking.add
     * @param orderShipmentTrackingAdd 
     */
    public async orderShipmentTrackingAdd(orderShipmentTrackingAdd: OrderShipmentTrackingAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderShipmentTrackingAdd' is not null or undefined
        if (orderShipmentTrackingAdd === null || orderShipmentTrackingAdd === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentTrackingAdd", "orderShipmentTrackingAdd");
        }


        // Path Params
        const localVarPath = '/order.shipment.tracking.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderShipmentTrackingAdd, "OrderShipmentTrackingAdd", ""),
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
     * Update order\'s shipment information.
     * order.shipment.update
     * @param orderShipmentUpdate 
     */
    public async orderShipmentUpdate(orderShipmentUpdate: OrderShipmentUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderShipmentUpdate' is not null or undefined
        if (orderShipmentUpdate === null || orderShipmentUpdate === undefined) {
            throw new RequiredError("OrderApi", "orderShipmentUpdate", "orderShipmentUpdate");
        }


        // Path Params
        const localVarPath = '/order.shipment.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderShipmentUpdate, "OrderShipmentUpdate", ""),
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
     * Retrieve list of statuses
     * order.status.list
     * @param storeId Store Id
     * @param action Available statuses for the specified action.
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     */
    public async orderStatusList(storeId?: string, action?: string, responseFields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/order.status.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
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
     * Retrieve list of order transaction
     * order.transaction.list
     * @param orderIds Retrieves order transactions specified by order ids
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param storeId Store Id
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async orderTransactionList(orderIds: string, count?: number, pageCursor?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderIds' is not null or undefined
        if (orderIds === null || orderIds === undefined) {
            throw new RequiredError("OrderApi", "orderTransactionList", "orderIds");
        }








        // Path Params
        const localVarPath = '/order.transaction.list.json';

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
        if (orderIds !== undefined) {
            requestContext.setQueryParam("order_ids", ObjectSerializer.serialize(orderIds, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
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
     * Update existing order.
     * order.update
     * @param orderId Defines the orders specified by order id
     * @param storeId Defines store id where the order should be found
     * @param orderStatus Defines new order\&#39;s status
     * @param financialStatus Update order financial status to specified
     * @param fulfillmentStatus Create order with fulfillment status
     * @param cancellationReason Defines the cancellation reason when the order will be canceled
     * @param orderPaymentMethod Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to \&#39;paid\&#39;
     * @param comment Specifies order comment
     * @param adminComment Specifies admin\&#39;s order comment
     * @param adminPrivateComment Specifies private admin\&#39;s order comment
     * @param invoiceAdminComment Specifies admin\&#39;s order invoice comment
     * @param dateModified Specifies order\&#39;s  modification date
     * @param dateFinished Specifies order\&#39;s  finished date
     * @param sendNotifications Send notifications to customer after order was created
     * @param createInvoice Determines whether an invoice should be created if it has not already been created
     * @param origin The source of the order
     * @param tags Order tags
     */
    public async orderUpdate(orderId: string, storeId?: string, orderStatus?: string, financialStatus?: string, fulfillmentStatus?: string, cancellationReason?: string, orderPaymentMethod?: string, comment?: string, adminComment?: string, adminPrivateComment?: string, invoiceAdminComment?: string, dateModified?: string, dateFinished?: string, sendNotifications?: boolean, createInvoice?: boolean, origin?: string, tags?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError("OrderApi", "orderUpdate", "orderId");
        }


















        // Path Params
        const localVarPath = '/order.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (orderId !== undefined) {
            requestContext.setQueryParam("order_id", ObjectSerializer.serialize(orderId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (orderStatus !== undefined) {
            requestContext.setQueryParam("order_status", ObjectSerializer.serialize(orderStatus, "string", ""));
        }

        // Query Params
        if (financialStatus !== undefined) {
            requestContext.setQueryParam("financial_status", ObjectSerializer.serialize(financialStatus, "string", ""));
        }

        // Query Params
        if (fulfillmentStatus !== undefined) {
            requestContext.setQueryParam("fulfillment_status", ObjectSerializer.serialize(fulfillmentStatus, "string", ""));
        }

        // Query Params
        if (cancellationReason !== undefined) {
            requestContext.setQueryParam("cancellation_reason", ObjectSerializer.serialize(cancellationReason, "string", ""));
        }

        // Query Params
        if (orderPaymentMethod !== undefined) {
            requestContext.setQueryParam("order_payment_method", ObjectSerializer.serialize(orderPaymentMethod, "string", ""));
        }

        // Query Params
        if (comment !== undefined) {
            requestContext.setQueryParam("comment", ObjectSerializer.serialize(comment, "string", ""));
        }

        // Query Params
        if (adminComment !== undefined) {
            requestContext.setQueryParam("admin_comment", ObjectSerializer.serialize(adminComment, "string", ""));
        }

        // Query Params
        if (adminPrivateComment !== undefined) {
            requestContext.setQueryParam("admin_private_comment", ObjectSerializer.serialize(adminPrivateComment, "string", ""));
        }

        // Query Params
        if (invoiceAdminComment !== undefined) {
            requestContext.setQueryParam("invoice_admin_comment", ObjectSerializer.serialize(invoiceAdminComment, "string", ""));
        }

        // Query Params
        if (dateModified !== undefined) {
            requestContext.setQueryParam("date_modified", ObjectSerializer.serialize(dateModified, "string", ""));
        }

        // Query Params
        if (dateFinished !== undefined) {
            requestContext.setQueryParam("date_finished", ObjectSerializer.serialize(dateFinished, "string", ""));
        }

        // Query Params
        if (sendNotifications !== undefined) {
            requestContext.setQueryParam("send_notifications", ObjectSerializer.serialize(sendNotifications, "boolean", ""));
        }

        // Query Params
        if (createInvoice !== undefined) {
            requestContext.setQueryParam("create_invoice", ObjectSerializer.serialize(createInvoice, "boolean", ""));
        }

        // Query Params
        if (origin !== undefined) {
            requestContext.setQueryParam("origin", ObjectSerializer.serialize(origin, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
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

export class OrderApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderAbandonedList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderAbandonedListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseOrderAbandonedList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseOrderAbandonedList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderAbandonedList", ""
            ) as ModelResponseOrderAbandonedList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseOrderAbandonedList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderAbandonedList", ""
            ) as ModelResponseOrderAbandonedList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderAdd200Response", ""
            ) as OrderAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderAdd200Response", ""
            ) as OrderAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderCount200Response", ""
            ) as OrderCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderCount200Response", ""
            ) as OrderCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderFinancialStatusList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderFinancialStatusListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderFinancialStatusList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderFinancialStatusList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderFinancialStatusList200Response", ""
            ) as OrderFinancialStatusList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderFinancialStatusList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderFinancialStatusList200Response", ""
            ) as OrderFinancialStatusList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderFind
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderFindWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderFind200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderFind200Response", ""
            ) as OrderFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderFind200Response", ""
            ) as OrderFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderFulfillmentStatusList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderFulfillmentStatusListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderFulfillmentStatusList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderFulfillmentStatusList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderFulfillmentStatusList200Response", ""
            ) as OrderFulfillmentStatusList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderFulfillmentStatusList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderFulfillmentStatusList200Response", ""
            ) as OrderFulfillmentStatusList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderInfo200Response", ""
            ) as OrderInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderInfo200Response", ""
            ) as OrderInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseOrderList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseOrderList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderList", ""
            ) as ModelResponseOrderList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseOrderList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderList", ""
            ) as ModelResponseOrderList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderPreestimateShippingList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderPreestimateShippingListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseOrderPreestimateShippingList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseOrderPreestimateShippingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderPreestimateShippingList", ""
            ) as ModelResponseOrderPreestimateShippingList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseOrderPreestimateShippingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderPreestimateShippingList", ""
            ) as ModelResponseOrderPreestimateShippingList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderRefundAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderRefundAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderRefundAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderRefundAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderRefundAdd200Response", ""
            ) as OrderRefundAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderRefundAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderRefundAdd200Response", ""
            ) as OrderRefundAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderReturnAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderReturnAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderReturnAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderReturnAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderReturnAdd200Response", ""
            ) as OrderReturnAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderReturnAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderReturnAdd200Response", ""
            ) as OrderReturnAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderReturnDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderReturnDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeValueDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttributeValueDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeValueDelete200Response", ""
            ) as AttributeValueDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttributeValueDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttributeValueDelete200Response", ""
            ) as AttributeValueDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderReturnUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderReturnUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderShipmentAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderShipmentAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderShipmentAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderShipmentAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentAdd200Response", ""
            ) as OrderShipmentAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderShipmentAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentAdd200Response", ""
            ) as OrderShipmentAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderShipmentAddBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderShipmentAddBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryAddBatch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAddBatch200Response", ""
            ) as CategoryAddBatch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryAddBatch200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAddBatch200Response", ""
            ) as CategoryAddBatch200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderShipmentDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderShipmentDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderShipmentDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderShipmentDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentDelete200Response", ""
            ) as OrderShipmentDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderShipmentDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentDelete200Response", ""
            ) as OrderShipmentDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderShipmentInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderShipmentInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderShipmentInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderShipmentInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentInfo200Response", ""
            ) as OrderShipmentInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderShipmentInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentInfo200Response", ""
            ) as OrderShipmentInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderShipmentList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderShipmentListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseOrderShipmentList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseOrderShipmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderShipmentList", ""
            ) as ModelResponseOrderShipmentList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseOrderShipmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderShipmentList", ""
            ) as ModelResponseOrderShipmentList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderShipmentTrackingAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderShipmentTrackingAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrderShipmentTrackingAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderShipmentTrackingAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentTrackingAdd200Response", ""
            ) as OrderShipmentTrackingAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderShipmentTrackingAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderShipmentTrackingAdd200Response", ""
            ) as OrderShipmentTrackingAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderShipmentUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderShipmentUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderStatusList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderStatusListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseOrderStatusList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseOrderStatusList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderStatusList", ""
            ) as ModelResponseOrderStatusList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseOrderStatusList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderStatusList", ""
            ) as ModelResponseOrderStatusList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderTransactionList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderTransactionListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseOrderTransactionList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseOrderTransactionList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderTransactionList", ""
            ) as ModelResponseOrderTransactionList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseOrderTransactionList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseOrderTransactionList", ""
            ) as ModelResponseOrderTransactionList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
