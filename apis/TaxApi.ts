// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelResponseTaxClassInfo } from '../models/ModelResponseTaxClassInfo';
import { ModelResponseTaxClassList } from '../models/ModelResponseTaxClassList';

/**
 * no description
 */
export class TaxApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Use this method to get information about a tax class and its rates. It allows you to calculate the tax percentage for a specific customer\'s address. This information contains relatively static data that rarely changes, so API2Cart may cache certain data to reduce the load on the store and speed up request execution. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, use the cart.validate method.
     * tax.class.info
     * @param taxClassId Retrieves taxes specified by class id
     * @param storeId Store Id
     * @param langId Language id
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async taxClassInfo(taxClassId: string, storeId?: string, langId?: string, params?: string, responseFields?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taxClassId' is not null or undefined
        if (taxClassId === null || taxClassId === undefined) {
            throw new RequiredError("TaxApi", "taxClassInfo", "taxClassId");
        }







        // Path Params
        const localVarPath = '/tax.class.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (taxClassId !== undefined) {
            requestContext.setQueryParam("tax_class_id", ObjectSerializer.serialize(taxClassId, "string", ""));
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
     * Get list of tax classes from your store.
     * tax.class.list
     * @param createdTo Retrieve entities to their creation date
     * @param createdFrom Retrieve entities from their creation date
     * @param modifiedTo Retrieve entities to their modification date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param findValue Entity search that is specified by some value
     * @param findWhere Tax class search that is specified by field
     * @param storeId Store Id
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     */
    public async taxClassList(createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, findValue?: string, findWhere?: string, storeId?: string, count?: number, pageCursor?: string, responseFields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/tax.class.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        if (findValue !== undefined) {
            requestContext.setQueryParam("find_value", ObjectSerializer.serialize(findValue, "string", ""));
        }

        // Query Params
        if (findWhere !== undefined) {
            requestContext.setQueryParam("find_where", ObjectSerializer.serialize(findWhere, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
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

}

export class TaxApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to taxClassInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async taxClassInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseTaxClassInfo >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseTaxClassInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseTaxClassInfo", ""
            ) as ModelResponseTaxClassInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseTaxClassInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseTaxClassInfo", ""
            ) as ModelResponseTaxClassInfo;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to taxClassList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async taxClassListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseTaxClassList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseTaxClassList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseTaxClassList", ""
            ) as ModelResponseTaxClassList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseTaxClassList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseTaxClassList", ""
            ) as ModelResponseTaxClassList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
