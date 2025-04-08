// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelResponseReturnList } from '../models/ModelResponseReturnList';
import { ReturnActionList200Response } from '../models/ReturnActionList200Response';
import { ReturnCount200Response } from '../models/ReturnCount200Response';
import { ReturnInfo200Response } from '../models/ReturnInfo200Response';
import { ReturnReasonList200Response } from '../models/ReturnReasonList200Response';
import { ReturnStatusList200Response } from '../models/ReturnStatusList200Response';

/**
 * no description
 */
export class ReturnApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve list of return actions
     * return.action.list
     */
    public async returnActionList(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/return.action.list.json';

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
     * Count returns in store
     * return.count
     * @param orderIds Counts return requests specified by order ids
     * @param customerId Counts return requests quantity specified by customer id
     * @param storeId Store Id
     * @param status Defines status
     * @param returnType Retrieves returns specified by return type
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     */
    public async returnCount(orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/return.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (orderIds !== undefined) {
            requestContext.setQueryParam("order_ids", ObjectSerializer.serialize(orderIds, "string", ""));
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
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (returnType !== undefined) {
            requestContext.setQueryParam("return_type", ObjectSerializer.serialize(returnType, "string", ""));
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
        if (reportRequestId !== undefined) {
            requestContext.setQueryParam("report_request_id", ObjectSerializer.serialize(reportRequestId, "string", ""));
        }

        // Query Params
        if (disableReportCache !== undefined) {
            requestContext.setQueryParam("disable_report_cache", ObjectSerializer.serialize(disableReportCache, "boolean", ""));
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
     * Retrieve return information.
     * return.info
     * @param id Entity id
     * @param orderId Defines the order id
     * @param storeId Store Id
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     */
    public async returnInfo(id: string, orderId?: string, storeId?: string, params?: string, exclude?: string, responseFields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReturnApi", "returnInfo", "id");
        }







        // Path Params
        const localVarPath = '/return.info.json';

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
     * Get list of return requests from store.
     * return.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param orderId Defines the order id
     * @param orderIds Retrieves return requests specified by order ids
     * @param customerId Retrieves return requests specified by customer id
     * @param storeId Store Id
     * @param status Defines status
     * @param returnType Retrieves returns specified by return type
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     */
    public async returnList(start?: number, count?: number, pageCursor?: string, params?: string, exclude?: string, responseFields?: string, orderId?: string, orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



















        // Path Params
        const localVarPath = '/return.list.json';

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

        // Query Params
        if (orderId !== undefined) {
            requestContext.setQueryParam("order_id", ObjectSerializer.serialize(orderId, "string", ""));
        }

        // Query Params
        if (orderIds !== undefined) {
            requestContext.setQueryParam("order_ids", ObjectSerializer.serialize(orderIds, "string", ""));
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
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (returnType !== undefined) {
            requestContext.setQueryParam("return_type", ObjectSerializer.serialize(returnType, "string", ""));
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
        if (reportRequestId !== undefined) {
            requestContext.setQueryParam("report_request_id", ObjectSerializer.serialize(reportRequestId, "string", ""));
        }

        // Query Params
        if (disableReportCache !== undefined) {
            requestContext.setQueryParam("disable_report_cache", ObjectSerializer.serialize(disableReportCache, "boolean", ""));
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
     * Retrieve list of return reasons
     * return.reason.list
     * @param storeId Store Id
     */
    public async returnReasonList(storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/return.reason.list.json';

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
     * Retrieve list of statuses
     * return.status.list
     */
    public async returnStatusList(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/return.status.list.json';

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

}

export class ReturnApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to returnActionList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async returnActionListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReturnActionList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReturnActionList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnActionList200Response", ""
            ) as ReturnActionList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReturnActionList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnActionList200Response", ""
            ) as ReturnActionList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to returnCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async returnCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReturnCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReturnCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnCount200Response", ""
            ) as ReturnCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReturnCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnCount200Response", ""
            ) as ReturnCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to returnInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async returnInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReturnInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReturnInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnInfo200Response", ""
            ) as ReturnInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReturnInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnInfo200Response", ""
            ) as ReturnInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to returnList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async returnListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseReturnList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseReturnList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseReturnList", ""
            ) as ModelResponseReturnList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseReturnList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseReturnList", ""
            ) as ModelResponseReturnList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to returnReasonList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async returnReasonListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReturnReasonList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReturnReasonList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnReasonList200Response", ""
            ) as ReturnReasonList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReturnReasonList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnReasonList200Response", ""
            ) as ReturnReasonList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to returnStatusList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async returnStatusListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReturnStatusList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReturnStatusList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnStatusList200Response", ""
            ) as ReturnStatusList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReturnStatusList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnStatusList200Response", ""
            ) as ReturnStatusList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
