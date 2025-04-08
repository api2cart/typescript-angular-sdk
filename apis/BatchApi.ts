// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelResponseBatchJobList } from '../models/ModelResponseBatchJobList';
import { ResponseBatchJobResult } from '../models/ResponseBatchJobResult';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get list of recent jobs
     * batch.job.list
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param processedFrom Retrieve entities according to their processing datetime
     * @param processedTo Retrieve entities according to their processing datetime
     * @param ids Filter batch jobs by ids
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     */
    public async batchJobList(count?: number, pageCursor?: string, createdFrom?: string, createdTo?: string, processedFrom?: string, processedTo?: string, ids?: string, responseFields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/batch.job.list.json';

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
        if (createdFrom !== undefined) {
            requestContext.setQueryParam("created_from", ObjectSerializer.serialize(createdFrom, "string", ""));
        }

        // Query Params
        if (createdTo !== undefined) {
            requestContext.setQueryParam("created_to", ObjectSerializer.serialize(createdTo, "string", ""));
        }

        // Query Params
        if (processedFrom !== undefined) {
            requestContext.setQueryParam("processed_from", ObjectSerializer.serialize(processedFrom, "string", ""));
        }

        // Query Params
        if (processedTo !== undefined) {
            requestContext.setQueryParam("processed_to", ObjectSerializer.serialize(processedTo, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
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
     * Get job result data
     * batch.job.result
     * @param id Entity id
     */
    public async batchJobResult(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("BatchApi", "batchJobResult", "id");
        }


        // Path Params
        const localVarPath = '/batch.job.result.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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

}

export class BatchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchJobList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchJobListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseBatchJobList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseBatchJobList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseBatchJobList", ""
            ) as ModelResponseBatchJobList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseBatchJobList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseBatchJobList", ""
            ) as ModelResponseBatchJobList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchJobResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchJobResultWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseBatchJobResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseBatchJobResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseBatchJobResult", ""
            ) as ResponseBatchJobResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseBatchJobResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseBatchJobResult", ""
            ) as ResponseBatchJobResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
