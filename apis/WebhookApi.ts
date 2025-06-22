// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AttributeDelete200Response } from '../models/AttributeDelete200Response';
import { BasketLiveShippingServiceCreate200Response } from '../models/BasketLiveShippingServiceCreate200Response';
import { ProductImageUpdate200Response } from '../models/ProductImageUpdate200Response';
import { WebhookCount200Response } from '../models/WebhookCount200Response';
import { WebhookEvents200Response } from '../models/WebhookEvents200Response';
import { WebhookList200Response } from '../models/WebhookList200Response';

/**
 * no description
 */
export class WebhookApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Count registered webhooks on the store.
     * webhook.count
     * @param entity The entity you want to filter webhooks by (e.g. order or product)
     * @param action The action you want to filter webhooks by (e.g. order or product)
     * @param active The webhook status you want to filter webhooks by
     */
    public async webhookCount(entity?: string, action?: string, active?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/webhook.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (entity !== undefined) {
            requestContext.setQueryParam("entity", ObjectSerializer.serialize(entity, "string", ""));
        }

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }

        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
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
     * Create webhook on the store and subscribe to it.
     * webhook.create
     * @param entity Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
     * @param action Specify what action (event) will trigger the webhook (e.g add, delete, or update)
     * @param callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param label The name you give to the webhook
     * @param fields Fields the webhook should send
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param active Webhook status
     * @param langId Language id
     * @param storeId Defines store id where the webhook should be assigned
     */
    public async webhookCreate(entity: string, action: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'entity' is not null or undefined
        if (entity === null || entity === undefined) {
            throw new RequiredError("WebhookApi", "webhookCreate", "entity");
        }


        // verify required parameter 'action' is not null or undefined
        if (action === null || action === undefined) {
            throw new RequiredError("WebhookApi", "webhookCreate", "action");
        }









        // Path Params
        const localVarPath = '/webhook.create.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (entity !== undefined) {
            requestContext.setQueryParam("entity", ObjectSerializer.serialize(entity, "string", ""));
        }

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }

        // Query Params
        if (callback !== undefined) {
            requestContext.setQueryParam("callback", ObjectSerializer.serialize(callback, "string", ""));
        }

        // Query Params
        if (label !== undefined) {
            requestContext.setQueryParam("label", ObjectSerializer.serialize(label, "string", ""));
        }

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
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
     * Delete registered webhook on the store.
     * webhook.delete
     * @param id Webhook id
     */
    public async webhookDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WebhookApi", "webhookDelete", "id");
        }


        // Path Params
        const localVarPath = '/webhook.delete.json';

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
     * List all Webhooks that are available on this store.
     * webhook.events
     */
    public async webhookEvents(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/webhook.events.json';

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
     * List registered webhook on the store.
     * webhook.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param entity The entity you want to filter webhooks by (e.g. order or product)
     * @param action The action you want to filter webhooks by (e.g. add, update, or delete)
     * @param active The webhook status you want to filter webhooks by
     * @param ids List of сomma-separated webhook ids
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     */
    public async webhookList(start?: number, count?: number, entity?: string, action?: string, active?: boolean, ids?: string, params?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/webhook.list.json';

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
        if (entity !== undefined) {
            requestContext.setQueryParam("entity", ObjectSerializer.serialize(entity, "string", ""));
        }

        // Query Params
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }

        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
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
     * Update Webhooks parameters.
     * webhook.update
     * @param id Webhook id
     * @param callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param label The name you give to the webhook
     * @param fields Fields the webhook should send
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param active Webhook status
     * @param langId Language id
     */
    public async webhookUpdate(id: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WebhookApi", "webhookUpdate", "id");
        }








        // Path Params
        const localVarPath = '/webhook.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (callback !== undefined) {
            requestContext.setQueryParam("callback", ObjectSerializer.serialize(callback, "string", ""));
        }

        // Query Params
        if (label !== undefined) {
            requestContext.setQueryParam("label", ObjectSerializer.serialize(label, "string", ""));
        }

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
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

}

export class WebhookApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to webhookCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async webhookCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebhookCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookCount200Response", ""
            ) as WebhookCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookCount200Response", ""
            ) as WebhookCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to webhookCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async webhookCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketLiveShippingServiceCreate200Response >> {
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
     * @params response Response returned by the server for a request to webhookDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async webhookDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to webhookEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async webhookEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebhookEvents200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookEvents200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookEvents200Response", ""
            ) as WebhookEvents200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookEvents200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookEvents200Response", ""
            ) as WebhookEvents200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to webhookList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async webhookListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebhookList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookList200Response", ""
            ) as WebhookList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookList200Response", ""
            ) as WebhookList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to webhookUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async webhookUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductImageUpdate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductImageUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductImageUpdate200Response", ""
            ) as ProductImageUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductImageUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductImageUpdate200Response", ""
            ) as ProductImageUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
