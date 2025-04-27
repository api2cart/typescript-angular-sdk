// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelResponseMarketplaceProductFind } from '../models/ModelResponseMarketplaceProductFind';

/**
 * no description
 */
export class MarketplaceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Search product in global catalog.
     * marketplace.product.find
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param keyword Defines search keyword
     * @param categoriesIds Defines product add that is specified by comma-separated categories id
     * @param storeId Store Id
     * @param asin Amazon Standard Identification Number.
     * @param ean European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
     * @param gtin Global Trade Item Number. An GTIN is an identifier for trade items.
     * @param upc Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
     * @param mpn Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.
     * @param isbn International Standard Book Number. An ISBN is a unique identifier for books.
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async marketplaceProductFind(count?: number, pageCursor?: string, keyword?: string, categoriesIds?: string, storeId?: string, asin?: string, ean?: string, gtin?: string, upc?: string, mpn?: string, isbn?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;















        // Path Params
        const localVarPath = '/marketplace.product.find.json';

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
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (categoriesIds !== undefined) {
            requestContext.setQueryParam("categories_ids", ObjectSerializer.serialize(categoriesIds, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (asin !== undefined) {
            requestContext.setQueryParam("asin", ObjectSerializer.serialize(asin, "string", ""));
        }

        // Query Params
        if (ean !== undefined) {
            requestContext.setQueryParam("ean", ObjectSerializer.serialize(ean, "string", ""));
        }

        // Query Params
        if (gtin !== undefined) {
            requestContext.setQueryParam("gtin", ObjectSerializer.serialize(gtin, "string", ""));
        }

        // Query Params
        if (upc !== undefined) {
            requestContext.setQueryParam("upc", ObjectSerializer.serialize(upc, "string", ""));
        }

        // Query Params
        if (mpn !== undefined) {
            requestContext.setQueryParam("mpn", ObjectSerializer.serialize(mpn, "string", ""));
        }

        // Query Params
        if (isbn !== undefined) {
            requestContext.setQueryParam("isbn", ObjectSerializer.serialize(isbn, "string", ""));
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

export class MarketplaceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to marketplaceProductFind
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async marketplaceProductFindWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseMarketplaceProductFind >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseMarketplaceProductFind = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseMarketplaceProductFind", ""
            ) as ModelResponseMarketplaceProductFind;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseMarketplaceProductFind = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseMarketplaceProductFind", ""
            ) as ModelResponseMarketplaceProductFind;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
