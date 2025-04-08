// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BasketInfo200Response } from '../models/BasketInfo200Response';
import { BasketItemAdd200Response } from '../models/BasketItemAdd200Response';
import { BasketLiveShippingServiceCreate200Response } from '../models/BasketLiveShippingServiceCreate200Response';
import { BasketLiveShippingServiceDelete200Response } from '../models/BasketLiveShippingServiceDelete200Response';
import { BasketLiveShippingServiceList200Response } from '../models/BasketLiveShippingServiceList200Response';

/**
 * no description
 */
export class BasketApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve basket information.
     * basket.info
     * @param id Entity id
     * @param storeId Store Id
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     */
    public async basketInfo(id: string, storeId?: string, params?: string, exclude?: string, responseFields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BasketApi", "basketInfo", "id");
        }






        // Path Params
        const localVarPath = '/basket.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
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
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
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
     * Add item to basket
     * basket.item.add
     * @param customerId Retrieves orders specified by customer id
     * @param productId Defines id of the product which should be added to the basket
     * @param variantId Defines product\&#39;s variants specified by variant id
     * @param quantity Defines new items quantity
     * @param storeId Store Id
     */
    public async basketItemAdd(customerId: string, productId: string, variantId?: string, quantity?: number, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'customerId' is not null or undefined
        if (customerId === null || customerId === undefined) {
            throw new RequiredError("BasketApi", "basketItemAdd", "customerId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("BasketApi", "basketItemAdd", "productId");
        }





        // Path Params
        const localVarPath = '/basket.item.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (customerId !== undefined) {
            requestContext.setQueryParam("customer_id", ObjectSerializer.serialize(customerId, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (variantId !== undefined) {
            requestContext.setQueryParam("variant_id", ObjectSerializer.serialize(variantId, "string", ""));
        }

        // Query Params
        if (quantity !== undefined) {
            requestContext.setQueryParam("quantity", ObjectSerializer.serialize(quantity, "number", ""));
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
     * Create live shipping rate service.
     * basket.live_shipping_service.create
     * @param name Shipping Service Name
     * @param callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param storeId Store Id
     */
    public async basketLiveShippingServiceCreate(name: string, callback: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("BasketApi", "basketLiveShippingServiceCreate", "name");
        }


        // verify required parameter 'callback' is not null or undefined
        if (callback === null || callback === undefined) {
            throw new RequiredError("BasketApi", "basketLiveShippingServiceCreate", "callback");
        }



        // Path Params
        const localVarPath = '/basket.live_shipping_service.create.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (callback !== undefined) {
            requestContext.setQueryParam("callback", ObjectSerializer.serialize(callback, "string", ""));
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
     * Delete live shipping rate service.
     * basket.live_shipping_service.delete
     * @param id Entity id
     */
    public async basketLiveShippingServiceDelete(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BasketApi", "basketLiveShippingServiceDelete", "id");
        }


        // Path Params
        const localVarPath = '/basket.live_shipping_service.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", ""));
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
     * Retrieve a list of live shipping rate services.
     * basket.live_shipping_service.list
     * @param storeId Store Id
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     */
    public async basketLiveShippingServiceList(storeId?: string, start?: number, count?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/basket.live_shipping_service.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
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

export class BasketApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to basketInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async basketInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketInfo200Response", ""
            ) as BasketInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketInfo200Response", ""
            ) as BasketInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to basketItemAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async basketItemAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketItemAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketItemAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketItemAdd200Response", ""
            ) as BasketItemAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketItemAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketItemAdd200Response", ""
            ) as BasketItemAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to basketLiveShippingServiceCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async basketLiveShippingServiceCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketLiveShippingServiceCreate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketLiveShippingServiceCreate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceCreate200Response", ""
            ) as BasketLiveShippingServiceCreate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketLiveShippingServiceCreate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceCreate200Response", ""
            ) as BasketLiveShippingServiceCreate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to basketLiveShippingServiceDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async basketLiveShippingServiceDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response >> {
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
     * @params response Response returned by the server for a request to basketLiveShippingServiceList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async basketLiveShippingServiceListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketLiveShippingServiceList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketLiveShippingServiceList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceList200Response", ""
            ) as BasketLiveShippingServiceList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketLiveShippingServiceList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketLiveShippingServiceList200Response", ""
            ) as BasketLiveShippingServiceList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
