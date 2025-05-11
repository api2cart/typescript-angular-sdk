// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelResponseSubscriberList } from '../models/ModelResponseSubscriberList';

/**
 * no description
 */
export class SubscriberApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get subscribers list
     * subscriber.list
     * @param ids Retrieves subscribers specified by ids
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param subscribed Filter by subscription status
     * @param storeId Store Id
     * @param email Filter subscribers by email
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async subscriberList(ids?: string, start?: number, count?: number, pageCursor?: string, subscribed?: boolean, storeId?: string, email?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;















        // Path Params
        const localVarPath = '/subscriber.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

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
        if (subscribed !== undefined) {
            requestContext.setQueryParam("subscribed", ObjectSerializer.serialize(subscribed, "boolean", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
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

}

export class SubscriberApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriberList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriberListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseSubscriberList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseSubscriberList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseSubscriberList", ""
            ) as ModelResponseSubscriberList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseSubscriberList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseSubscriberList", ""
            ) as ModelResponseSubscriberList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
