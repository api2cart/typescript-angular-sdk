// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountConfigUpdate200Response } from '../models/AccountConfigUpdate200Response';
import { AttributeDelete200Response } from '../models/AttributeDelete200Response';
import { CategoryAdd200Response } from '../models/CategoryAdd200Response';
import { CategoryAddBatch } from '../models/CategoryAddBatch';
import { CategoryAddBatch200Response } from '../models/CategoryAddBatch200Response';
import { CategoryAssign200Response } from '../models/CategoryAssign200Response';
import { CategoryCount200Response } from '../models/CategoryCount200Response';
import { CategoryDelete200Response } from '../models/CategoryDelete200Response';
import { CategoryDeleteBatch } from '../models/CategoryDeleteBatch';
import { CategoryFind200Response } from '../models/CategoryFind200Response';
import { CategoryImageAdd200Response } from '../models/CategoryImageAdd200Response';
import { CategoryInfo200Response } from '../models/CategoryInfo200Response';
import { ModelResponseCategoryList } from '../models/ModelResponseCategoryList';

/**
 * no description
 */
export class CategoryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add new category in store
     * category.add
     * @param name Defines category\&#39;s name that has to be added
     * @param description Defines category\&#39;s description
     * @param shortDescription Defines short description
     * @param parentId Adds categories specified by parent id
     * @param avail Defines category\&#39;s visibility status
     * @param createdTime Entity\&#39;s date creation
     * @param modifiedTime Entity\&#39;s date modification
     * @param sortOrder Sort number in the list
     * @param metaTitle Defines unique meta title for each entity
     * @param metaDescription Defines unique meta description of a entity
     * @param metaKeywords Defines unique meta keywords for each entity
     * @param seoUrl Defines unique category\&#39;s URL for SEO
     * @param storeId Store Id
     * @param storesIds Create category in the stores that is specified by comma-separated stores\&#39; id
     * @param langId Language id
     * @param idempotencyKey A unique identifier associated with a specific request. Repeated requests with the same &lt;strong&gt;idempotency_key&lt;/strong&gt; return a cached response without re-executing the business logic. &lt;strong&gt;Please note that the cache lifetime is 15 minutes.&lt;/strong&gt;
     */
    public async categoryAdd(name: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, createdTime?: string, modifiedTime?: string, sortOrder?: number, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, idempotencyKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("CategoryApi", "categoryAdd", "name");
        }

















        // Path Params
        const localVarPath = '/category.add.json';

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
        if (shortDescription !== undefined) {
            requestContext.setQueryParam("short_description", ObjectSerializer.serialize(shortDescription, "string", ""));
        }

        // Query Params
        if (parentId !== undefined) {
            requestContext.setQueryParam("parent_id", ObjectSerializer.serialize(parentId, "string", ""));
        }

        // Query Params
        if (avail !== undefined) {
            requestContext.setQueryParam("avail", ObjectSerializer.serialize(avail, "boolean", ""));
        }

        // Query Params
        if (createdTime !== undefined) {
            requestContext.setQueryParam("created_time", ObjectSerializer.serialize(createdTime, "string", ""));
        }

        // Query Params
        if (modifiedTime !== undefined) {
            requestContext.setQueryParam("modified_time", ObjectSerializer.serialize(modifiedTime, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "number", ""));
        }

        // Query Params
        if (metaTitle !== undefined) {
            requestContext.setQueryParam("meta_title", ObjectSerializer.serialize(metaTitle, "string", ""));
        }

        // Query Params
        if (metaDescription !== undefined) {
            requestContext.setQueryParam("meta_description", ObjectSerializer.serialize(metaDescription, "string", ""));
        }

        // Query Params
        if (metaKeywords !== undefined) {
            requestContext.setQueryParam("meta_keywords", ObjectSerializer.serialize(metaKeywords, "string", ""));
        }

        // Query Params
        if (seoUrl !== undefined) {
            requestContext.setQueryParam("seo_url", ObjectSerializer.serialize(seoUrl, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (storesIds !== undefined) {
            requestContext.setQueryParam("stores_ids", ObjectSerializer.serialize(storesIds, "string", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (idempotencyKey !== undefined) {
            requestContext.setQueryParam("idempotency_key", ObjectSerializer.serialize(idempotencyKey, "string", ""));
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
     * Add new categories to the store.
     * category.add.batch
     * @param categoryAddBatch 
     */
    public async categoryAddBatch(categoryAddBatch: CategoryAddBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryAddBatch' is not null or undefined
        if (categoryAddBatch === null || categoryAddBatch === undefined) {
            throw new RequiredError("CategoryApi", "categoryAddBatch", "categoryAddBatch");
        }


        // Path Params
        const localVarPath = '/category.add.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(categoryAddBatch, "CategoryAddBatch", ""),
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
     * Assign category to product
     * category.assign
     * @param categoryId Defines category assign, specified by category id
     * @param productId Defines category assign to the product, specified by product id
     * @param storeId Store Id
     * @param idempotencyKey A unique identifier associated with a specific request. Repeated requests with the same &lt;strong&gt;idempotency_key&lt;/strong&gt; return a cached response without re-executing the business logic. &lt;strong&gt;Please note that the cache lifetime is 15 minutes.&lt;/strong&gt;
     */
    public async categoryAssign(categoryId: string, productId: string, storeId?: string, idempotencyKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("CategoryApi", "categoryAssign", "categoryId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("CategoryApi", "categoryAssign", "productId");
        }




        // Path Params
        const localVarPath = '/category.assign.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (idempotencyKey !== undefined) {
            requestContext.setQueryParam("idempotency_key", ObjectSerializer.serialize(idempotencyKey, "string", ""));
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
     * Count categories in store.
     * category.count
     * @param parentId Counts categories specified by parent id
     * @param storeId Counts category specified by store id
     * @param langId Counts category specified by language id
     * @param avail Defines category\&#39;s visibility status
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param productType A categorization for the product
     * @param findValue Entity search that is specified by some value
     * @param findWhere Counts categories that are searched specified by field
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     */
    public async categoryCount(parentId?: string, storeId?: string, langId?: string, avail?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, productType?: string, findValue?: string, findWhere?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/category.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (parentId !== undefined) {
            requestContext.setQueryParam("parent_id", ObjectSerializer.serialize(parentId, "string", ""));
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
        if (productType !== undefined) {
            requestContext.setQueryParam("product_type", ObjectSerializer.serialize(productType, "string", ""));
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
     * Delete category in store
     * category.delete
     * @param id Defines category removal, specified by category id
     * @param storeId Store Id
     */
    public async categoryDelete(id: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CategoryApi", "categoryDelete", "id");
        }



        // Path Params
        const localVarPath = '/category.delete.json';

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
     * Delete categories from the store.
     * category.delete.batch
     * @param categoryDeleteBatch 
     */
    public async categoryDeleteBatch(categoryDeleteBatch: CategoryDeleteBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryDeleteBatch' is not null or undefined
        if (categoryDeleteBatch === null || categoryDeleteBatch === undefined) {
            throw new RequiredError("CategoryApi", "categoryDeleteBatch", "categoryDeleteBatch");
        }


        // Path Params
        const localVarPath = '/category.delete.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(categoryDeleteBatch, "CategoryDeleteBatch", ""),
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
     * Search category in store. \"Laptop\" is specified here by default.
     * category.find
     * @param findValue Entity search that is specified by some value
     * @param findWhere Entity search that is specified by the comma-separated unique fields
     * @param findParams Entity search that is specified by comma-separated parameters
     * @param storeId Store Id
     * @param langId Language id
     */
    public async categoryFind(findValue: string, findWhere?: string, findParams?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'findValue' is not null or undefined
        if (findValue === null || findValue === undefined) {
            throw new RequiredError("CategoryApi", "categoryFind", "findValue");
        }






        // Path Params
        const localVarPath = '/category.find.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (findValue !== undefined) {
            requestContext.setQueryParam("find_value", ObjectSerializer.serialize(findValue, "string", ""));
        }

        // Query Params
        if (findWhere !== undefined) {
            requestContext.setQueryParam("find_where", ObjectSerializer.serialize(findWhere, "string", ""));
        }

        // Query Params
        if (findParams !== undefined) {
            requestContext.setQueryParam("find_params", ObjectSerializer.serialize(findParams, "string", ""));
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
     * Add image to category
     * category.image.add
     * @param categoryId Defines category id where the image should be added
     * @param imageName Defines image\&#39;s name
     * @param url Defines URL of the image that has to be added
     * @param type Defines image\&#39;s types that are specified by comma-separated list
     * @param storeId Store Id
     * @param label Defines alternative text that has to be attached to the picture
     * @param mime Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
     * @param position Defines image’s position in the list
     * @param idempotencyKey A unique identifier associated with a specific request. Repeated requests with the same &lt;strong&gt;idempotency_key&lt;/strong&gt; return a cached response without re-executing the business logic. &lt;strong&gt;Please note that the cache lifetime is 15 minutes.&lt;/strong&gt;
     */
    public async categoryImageAdd(categoryId: string, imageName: string, url: string, type: 'base' | 'thumbnail', storeId?: string, label?: string, mime?: string, position?: number, idempotencyKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("CategoryApi", "categoryImageAdd", "categoryId");
        }


        // verify required parameter 'imageName' is not null or undefined
        if (imageName === null || imageName === undefined) {
            throw new RequiredError("CategoryApi", "categoryImageAdd", "imageName");
        }


        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new RequiredError("CategoryApi", "categoryImageAdd", "url");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("CategoryApi", "categoryImageAdd", "type");
        }







        // Path Params
        const localVarPath = '/category.image.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
        }

        // Query Params
        if (imageName !== undefined) {
            requestContext.setQueryParam("image_name", ObjectSerializer.serialize(imageName, "string", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'base' | 'thumbnail'", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (label !== undefined) {
            requestContext.setQueryParam("label", ObjectSerializer.serialize(label, "string", ""));
        }

        // Query Params
        if (mime !== undefined) {
            requestContext.setQueryParam("mime", ObjectSerializer.serialize(mime, "string", ""));
        }

        // Query Params
        if (position !== undefined) {
            requestContext.setQueryParam("position", ObjectSerializer.serialize(position, "number", ""));
        }

        // Query Params
        if (idempotencyKey !== undefined) {
            requestContext.setQueryParam("idempotency_key", ObjectSerializer.serialize(idempotencyKey, "string", ""));
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
     * Delete image
     * category.image.delete
     * @param categoryId Defines category id where the image should be deleted
     * @param imageId Define image id
     * @param storeId Store Id
     */
    public async categoryImageDelete(categoryId: string, imageId: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("CategoryApi", "categoryImageDelete", "categoryId");
        }


        // verify required parameter 'imageId' is not null or undefined
        if (imageId === null || imageId === undefined) {
            throw new RequiredError("CategoryApi", "categoryImageDelete", "imageId");
        }



        // Path Params
        const localVarPath = '/category.image.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
        }

        // Query Params
        if (imageId !== undefined) {
            requestContext.setQueryParam("image_id", ObjectSerializer.serialize(imageId, "string", ""));
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
     * Get category info about category ID*** or specify other category ID.
     * category.info
     * @param id Retrieves category\&#39;s info specified by category id
     * @param storeId Retrieves category info  specified by store id
     * @param langId Retrieves category info  specified by language id
     * @param schemaType The name of the requirements set for the provided schema.
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     */
    public async categoryInfo(id: string, storeId?: string, langId?: string, schemaType?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CategoryApi", "categoryInfo", "id");
        }










        // Path Params
        const localVarPath = '/category.info.json';

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
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (schemaType !== undefined) {
            requestContext.setQueryParam("schema_type", ObjectSerializer.serialize(schemaType, "string", ""));
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
     * Get list of categories from store.
     * category.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param storeId Retrieves categories specified by store id
     * @param langId Retrieves categorys specified by language id
     * @param parentId Retrieves categories specified by parent id
     * @param avail Defines category\&#39;s visibility status
     * @param productType A categorization for the product
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param findValue Entity search that is specified by some value
     * @param findWhere Category search that is specified by field
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     * @param disableCache Disable cache for current request
     */
    public async categoryList(start?: number, count?: number, pageCursor?: string, storeId?: string, langId?: string, parentId?: string, avail?: boolean, productType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, findValue?: string, findWhere?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, disableCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





















        // Path Params
        const localVarPath = '/category.list.json';

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
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (parentId !== undefined) {
            requestContext.setQueryParam("parent_id", ObjectSerializer.serialize(parentId, "string", ""));
        }

        // Query Params
        if (avail !== undefined) {
            requestContext.setQueryParam("avail", ObjectSerializer.serialize(avail, "boolean", ""));
        }

        // Query Params
        if (productType !== undefined) {
            requestContext.setQueryParam("product_type", ObjectSerializer.serialize(productType, "string", ""));
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
        if (findValue !== undefined) {
            requestContext.setQueryParam("find_value", ObjectSerializer.serialize(findValue, "string", ""));
        }

        // Query Params
        if (findWhere !== undefined) {
            requestContext.setQueryParam("find_where", ObjectSerializer.serialize(findWhere, "string", ""));
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

        // Query Params
        if (reportRequestId !== undefined) {
            requestContext.setQueryParam("report_request_id", ObjectSerializer.serialize(reportRequestId, "string", ""));
        }

        // Query Params
        if (disableReportCache !== undefined) {
            requestContext.setQueryParam("disable_report_cache", ObjectSerializer.serialize(disableReportCache, "boolean", ""));
        }

        // Query Params
        if (disableCache !== undefined) {
            requestContext.setQueryParam("disable_cache", ObjectSerializer.serialize(disableCache, "boolean", ""));
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
     * Unassign category to product
     * category.unassign
     * @param categoryId Defines category unassign, specified by category id
     * @param productId Defines category unassign to the product, specified by product id
     * @param storeId Store Id
     * @param idempotencyKey A unique identifier associated with a specific request. Repeated requests with the same &lt;strong&gt;idempotency_key&lt;/strong&gt; return a cached response without re-executing the business logic. &lt;strong&gt;Please note that the cache lifetime is 15 minutes.&lt;/strong&gt;
     */
    public async categoryUnassign(categoryId: string, productId: string, storeId?: string, idempotencyKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("CategoryApi", "categoryUnassign", "categoryId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("CategoryApi", "categoryUnassign", "productId");
        }




        // Path Params
        const localVarPath = '/category.unassign.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (idempotencyKey !== undefined) {
            requestContext.setQueryParam("idempotency_key", ObjectSerializer.serialize(idempotencyKey, "string", ""));
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
     * Update category in store
     * category.update
     * @param id Defines category update specified by category id
     * @param name Defines new category’s name
     * @param description Defines new category\&#39;s description
     * @param shortDescription Defines short description
     * @param parentId Defines new parent category id
     * @param avail Defines category\&#39;s visibility status
     * @param sortOrder Sort number in the list
     * @param modifiedTime Entity\&#39;s date modification
     * @param metaTitle Defines unique meta title for each entity
     * @param metaDescription Defines unique meta description of a entity
     * @param metaKeywords Defines unique meta keywords for each entity
     * @param seoUrl Defines unique category\&#39;s URL for SEO
     * @param storeId Store Id
     * @param storesIds Update category in the stores that is specified by comma-separated stores\&#39; id
     * @param langId Language id
     * @param idempotencyKey A unique identifier associated with a specific request. Repeated requests with the same &lt;strong&gt;idempotency_key&lt;/strong&gt; return a cached response without re-executing the business logic. &lt;strong&gt;Please note that the cache lifetime is 15 minutes.&lt;/strong&gt;
     */
    public async categoryUpdate(id: string, name?: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, sortOrder?: number, modifiedTime?: string, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, idempotencyKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CategoryApi", "categoryUpdate", "id");
        }

















        // Path Params
        const localVarPath = '/category.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
        }

        // Query Params
        if (shortDescription !== undefined) {
            requestContext.setQueryParam("short_description", ObjectSerializer.serialize(shortDescription, "string", ""));
        }

        // Query Params
        if (parentId !== undefined) {
            requestContext.setQueryParam("parent_id", ObjectSerializer.serialize(parentId, "string", ""));
        }

        // Query Params
        if (avail !== undefined) {
            requestContext.setQueryParam("avail", ObjectSerializer.serialize(avail, "boolean", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "number", ""));
        }

        // Query Params
        if (modifiedTime !== undefined) {
            requestContext.setQueryParam("modified_time", ObjectSerializer.serialize(modifiedTime, "string", ""));
        }

        // Query Params
        if (metaTitle !== undefined) {
            requestContext.setQueryParam("meta_title", ObjectSerializer.serialize(metaTitle, "string", ""));
        }

        // Query Params
        if (metaDescription !== undefined) {
            requestContext.setQueryParam("meta_description", ObjectSerializer.serialize(metaDescription, "string", ""));
        }

        // Query Params
        if (metaKeywords !== undefined) {
            requestContext.setQueryParam("meta_keywords", ObjectSerializer.serialize(metaKeywords, "string", ""));
        }

        // Query Params
        if (seoUrl !== undefined) {
            requestContext.setQueryParam("seo_url", ObjectSerializer.serialize(seoUrl, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (storesIds !== undefined) {
            requestContext.setQueryParam("stores_ids", ObjectSerializer.serialize(storesIds, "string", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (idempotencyKey !== undefined) {
            requestContext.setQueryParam("idempotency_key", ObjectSerializer.serialize(idempotencyKey, "string", ""));
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

export class CategoryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAdd200Response", ""
            ) as CategoryAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAdd200Response", ""
            ) as CategoryAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryAddBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryAddBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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
     * @params response Response returned by the server for a request to categoryAssign
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryAssignWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAssign200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAssign200Response", ""
            ) as CategoryAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAssign200Response", ""
            ) as CategoryAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryCount200Response", ""
            ) as CategoryCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryCount200Response", ""
            ) as CategoryCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryDelete200Response", ""
            ) as CategoryDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryDelete200Response", ""
            ) as CategoryDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryDeleteBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryDeleteBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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
     * @params response Response returned by the server for a request to categoryFind
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryFindWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryFind200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryFind200Response", ""
            ) as CategoryFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryFind200Response", ""
            ) as CategoryFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryImageAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryImageAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryImageAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryImageAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryImageAdd200Response", ""
            ) as CategoryImageAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryImageAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryImageAdd200Response", ""
            ) as CategoryImageAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryImageDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryImageDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to categoryInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryInfo200Response", ""
            ) as CategoryInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryInfo200Response", ""
            ) as CategoryInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseCategoryList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseCategoryList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCategoryList", ""
            ) as ModelResponseCategoryList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseCategoryList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseCategoryList", ""
            ) as ModelResponseCategoryList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryUnassign
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryUnassignWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAssign200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAssign200Response", ""
            ) as CategoryAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryAssign200Response", ""
            ) as CategoryAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to categoryUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async categoryUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
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
