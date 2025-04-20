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
import { AttributeValueDelete200Response } from '../models/AttributeValueDelete200Response';
import { CartConfigUpdate200Response } from '../models/CartConfigUpdate200Response';
import { CartValidate200Response } from '../models/CartValidate200Response';
import { CategoryAddBatch200Response } from '../models/CategoryAddBatch200Response';
import { CustomerDelete200Response } from '../models/CustomerDelete200Response';
import { ModelResponseProductAttributeList } from '../models/ModelResponseProductAttributeList';
import { ModelResponseProductBrandList } from '../models/ModelResponseProductBrandList';
import { ModelResponseProductChildItemList } from '../models/ModelResponseProductChildItemList';
import { ModelResponseProductCurrencyList } from '../models/ModelResponseProductCurrencyList';
import { ModelResponseProductList } from '../models/ModelResponseProductList';
import { ModelResponseProductOptionList } from '../models/ModelResponseProductOptionList';
import { ModelResponseProductReviewList } from '../models/ModelResponseProductReviewList';
import { ProductAdd } from '../models/ProductAdd';
import { ProductAdd200Response } from '../models/ProductAdd200Response';
import { ProductAddBatch } from '../models/ProductAddBatch';
import { ProductAttributeValueSet200Response } from '../models/ProductAttributeValueSet200Response';
import { ProductAttributeValueUnset200Response } from '../models/ProductAttributeValueUnset200Response';
import { ProductChildItemFind200Response } from '../models/ProductChildItemFind200Response';
import { ProductChildItemInfo200Response } from '../models/ProductChildItemInfo200Response';
import { ProductCount200Response } from '../models/ProductCount200Response';
import { ProductCurrencyAdd200Response } from '../models/ProductCurrencyAdd200Response';
import { ProductDeleteBatch } from '../models/ProductDeleteBatch';
import { ProductFind200Response } from '../models/ProductFind200Response';
import { ProductImageAdd } from '../models/ProductImageAdd';
import { ProductImageAdd200Response } from '../models/ProductImageAdd200Response';
import { ProductImageUpdate200Response } from '../models/ProductImageUpdate200Response';
import { ProductInfo200Response } from '../models/ProductInfo200Response';
import { ProductManufacturerAdd200Response } from '../models/ProductManufacturerAdd200Response';
import { ProductOptionAdd } from '../models/ProductOptionAdd';
import { ProductOptionAdd200Response } from '../models/ProductOptionAdd200Response';
import { ProductOptionAssign200Response } from '../models/ProductOptionAssign200Response';
import { ProductOptionValueAdd200Response } from '../models/ProductOptionValueAdd200Response';
import { ProductOptionValueAssign200Response } from '../models/ProductOptionValueAssign200Response';
import { ProductPriceAdd } from '../models/ProductPriceAdd';
import { ProductPriceUpdate } from '../models/ProductPriceUpdate';
import { ProductTaxAdd } from '../models/ProductTaxAdd';
import { ProductTaxAdd200Response } from '../models/ProductTaxAdd200Response';
import { ProductUpdate } from '../models/ProductUpdate';
import { ProductUpdateBatch } from '../models/ProductUpdateBatch';
import { ProductVariantAdd } from '../models/ProductVariantAdd';
import { ProductVariantAdd200Response } from '../models/ProductVariantAdd200Response';
import { ProductVariantAddBatch } from '../models/ProductVariantAddBatch';
import { ProductVariantCount200Response } from '../models/ProductVariantCount200Response';
import { ProductVariantDeleteBatch } from '../models/ProductVariantDeleteBatch';
import { ProductVariantImageAdd } from '../models/ProductVariantImageAdd';
import { ProductVariantImageAdd200Response } from '../models/ProductVariantImageAdd200Response';
import { ProductVariantList200Response } from '../models/ProductVariantList200Response';
import { ProductVariantPriceAdd } from '../models/ProductVariantPriceAdd';
import { ProductVariantPriceUpdate } from '../models/ProductVariantPriceUpdate';
import { ProductVariantUpdate } from '../models/ProductVariantUpdate';
import { ProductVariantUpdateBatch } from '../models/ProductVariantUpdateBatch';

/**
 * no description
 */
export class ProductApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add new product to store.
     * product.add
     * @param productAdd 
     */
    public async productAdd(productAdd: ProductAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productAdd' is not null or undefined
        if (productAdd === null || productAdd === undefined) {
            throw new RequiredError("ProductApi", "productAdd", "productAdd");
        }


        // Path Params
        const localVarPath = '/product.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productAdd, "ProductAdd", ""),
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
     * Add new products to the store.
     * product.add.batch
     * @param productAddBatch 
     */
    public async productAddBatch(productAddBatch: ProductAddBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productAddBatch' is not null or undefined
        if (productAddBatch === null || productAddBatch === undefined) {
            throw new RequiredError("ProductApi", "productAddBatch", "productAddBatch");
        }


        // Path Params
        const localVarPath = '/product.add.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productAddBatch, "ProductAddBatch", ""),
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
     * Get list of attributes and values.
     * product.attribute.list
     * @param productId Retrieves attributes specified by product id
     * @param attributeId Retrieves info for specified attribute_id
     * @param variantId Defines product\&#39;s variants specified by variant id
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param attributeGroupId Filter by attribute_group_id
     * @param setName Retrieves attributes specified by set_name in Magento
     * @param langId Retrieves attributes specified by language id
     * @param storeId Retrieves attributes specified by store id
     * @param sortBy Set field to sort by
     * @param sortDirection Set sorting direction
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async productAttributeList(productId: string, attributeId?: string, variantId?: string, pageCursor?: string, start?: number, count?: number, attributeGroupId?: string, setName?: string, langId?: string, storeId?: string, sortBy?: string, sortDirection?: string, params?: string, responseFields?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productAttributeList", "productId");
        }
















        // Path Params
        const localVarPath = '/product.attribute.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (attributeId !== undefined) {
            requestContext.setQueryParam("attribute_id", ObjectSerializer.serialize(attributeId, "string", ""));
        }

        // Query Params
        if (variantId !== undefined) {
            requestContext.setQueryParam("variant_id", ObjectSerializer.serialize(variantId, "string", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
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
        if (attributeGroupId !== undefined) {
            requestContext.setQueryParam("attribute_group_id", ObjectSerializer.serialize(attributeGroupId, "string", ""));
        }

        // Query Params
        if (setName !== undefined) {
            requestContext.setQueryParam("set_name", ObjectSerializer.serialize(setName, "string", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
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
     * Set attribute value to product.
     * product.attribute.value.set
     * @param productId Defines product id where the attribute should be added
     * @param attributeId Filter by attribute_id
     * @param attributeGroupId Filter by attribute_group_id
     * @param attributeName Define attribute name
     * @param value Define attribute value
     * @param valueId Define attribute value id
     * @param langId Language id
     * @param storeId Store Id
     */
    public async productAttributeValueSet(productId: string, attributeId?: string, attributeGroupId?: string, attributeName?: string, value?: string, valueId?: number, langId?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productAttributeValueSet", "productId");
        }









        // Path Params
        const localVarPath = '/product.attribute.value.set.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (attributeId !== undefined) {
            requestContext.setQueryParam("attribute_id", ObjectSerializer.serialize(attributeId, "string", ""));
        }

        // Query Params
        if (attributeGroupId !== undefined) {
            requestContext.setQueryParam("attribute_group_id", ObjectSerializer.serialize(attributeGroupId, "string", ""));
        }

        // Query Params
        if (attributeName !== undefined) {
            requestContext.setQueryParam("attribute_name", ObjectSerializer.serialize(attributeName, "string", ""));
        }

        // Query Params
        if (value !== undefined) {
            requestContext.setQueryParam("value", ObjectSerializer.serialize(value, "string", ""));
        }

        // Query Params
        if (valueId !== undefined) {
            requestContext.setQueryParam("value_id", ObjectSerializer.serialize(valueId, "number", ""));
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
     * Removes attribute value for a product.
     * product.attribute.value.unset
     * @param productId Product id
     * @param attributeId Attribute Id
     * @param storeId Store Id
     * @param includeDefault Boolean, whether or not to unset default value of the attribute, if applicable
     * @param reindex Is reindex required
     * @param clearCache Is cache clear required
     */
    public async productAttributeValueUnset(productId: string, attributeId: string, storeId?: string, includeDefault?: boolean, reindex?: boolean, clearCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productAttributeValueUnset", "productId");
        }


        // verify required parameter 'attributeId' is not null or undefined
        if (attributeId === null || attributeId === undefined) {
            throw new RequiredError("ProductApi", "productAttributeValueUnset", "attributeId");
        }






        // Path Params
        const localVarPath = '/product.attribute.value.unset.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (attributeId !== undefined) {
            requestContext.setQueryParam("attribute_id", ObjectSerializer.serialize(attributeId, "string", ""));
        }

        // Query Params
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (includeDefault !== undefined) {
            requestContext.setQueryParam("include_default", ObjectSerializer.serialize(includeDefault, "boolean", ""));
        }

        // Query Params
        if (reindex !== undefined) {
            requestContext.setQueryParam("reindex", ObjectSerializer.serialize(reindex, "boolean", ""));
        }

        // Query Params
        if (clearCache !== undefined) {
            requestContext.setQueryParam("clear_cache", ObjectSerializer.serialize(clearCache, "boolean", ""));
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
     * Get list of brands from your store.
     * product.brand.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param brandIds Retrieves brands specified by brand ids
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param categoryId Retrieves product brands specified by category id
     * @param storeId Store Id
     * @param langId Language id
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param parentId Retrieves brands specified by parent id
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param findWhere Entity search that is specified by the comma-separated unique fields
     * @param findValue Entity search that is specified by some value
     */
    public async productBrandList(start?: number, count?: number, pageCursor?: string, params?: string, brandIds?: string, exclude?: string, categoryId?: string, storeId?: string, langId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, parentId?: string, responseFields?: string, findWhere?: string, findValue?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


















        // Path Params
        const localVarPath = '/product.brand.list.json';

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
        if (brandIds !== undefined) {
            requestContext.setQueryParam("brand_ids", ObjectSerializer.serialize(brandIds, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
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
        if (parentId !== undefined) {
            requestContext.setQueryParam("parent_id", ObjectSerializer.serialize(parentId, "string", ""));
        }

        // Query Params
        if (responseFields !== undefined) {
            requestContext.setQueryParam("response_fields", ObjectSerializer.serialize(responseFields, "string", ""));
        }

        // Query Params
        if (findWhere !== undefined) {
            requestContext.setQueryParam("find_where", ObjectSerializer.serialize(findWhere, "string", ""));
        }

        // Query Params
        if (findValue !== undefined) {
            requestContext.setQueryParam("find_value", ObjectSerializer.serialize(findValue, "string", ""));
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
     * Search product child item (bundled item or configurable product variant) in store catalog.
     * product.child_item.find
     * @param findValue Entity search that is specified by some value
     * @param findWhere Entity search that is specified by the comma-separated unique fields
     * @param findParams Entity search that is specified by comma-separated parameters
     * @param storeId Store Id
     */
    public async productChildItemFind(findValue?: string, findWhere?: string, findParams?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/product.child_item.find.json';

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
     * Get child for specific product.
     * product.child_item.info
     * @param productId Filter by parent product id
     * @param id Entity id
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param storeId Store Id
     * @param langId Language id
     * @param currencyId Currency Id
     * @param useLatestApiVersion Use the latest platform API version
     */
    public async productChildItemInfo(productId: string, id: string, params?: string, responseFields?: string, exclude?: string, storeId?: string, langId?: string, currencyId?: string, useLatestApiVersion?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productChildItemInfo", "productId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productChildItemInfo", "id");
        }









        // Path Params
        const localVarPath = '/product.child_item.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

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
        if (currencyId !== undefined) {
            requestContext.setQueryParam("currency_id", ObjectSerializer.serialize(currencyId, "string", ""));
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
     * Get a list of a product\'s child items, such as variants or bundle components. The total_count field in the response indicates the total number of items in the context of the current filter.
     * product.child_item.list
     * @param pageCursor Used to retrieve products child items via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param productId Filter by parent product id
     * @param productIds Filter by parent product ids
     * @param sku Filter by products variant\&#39;s sku
     * @param storeId Store Id
     * @param langId Language id
     * @param currencyId Currency Id
     * @param availSale Specifies the set of available/not available products for sale
     * @param findValue Entity search that is specified by some value
     * @param findWhere Child products search that is specified by field
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     * @param useLatestApiVersion Use the latest platform API version
     * @param returnGlobal Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     */
    public async productChildItemList(pageCursor?: string, start?: number, count?: number, params?: string, responseFields?: string, exclude?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, productId?: string, productIds?: string, sku?: string, storeId?: string, langId?: string, currencyId?: string, availSale?: boolean, findValue?: string, findWhere?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, returnGlobal?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;
























        // Path Params
        const localVarPath = '/product.child_item.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
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
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (productIds !== undefined) {
            requestContext.setQueryParam("product_ids", ObjectSerializer.serialize(productIds, "string", ""));
        }

        // Query Params
        if (sku !== undefined) {
            requestContext.setQueryParam("sku", ObjectSerializer.serialize(sku, "string", ""));
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
        if (currencyId !== undefined) {
            requestContext.setQueryParam("currency_id", ObjectSerializer.serialize(currencyId, "string", ""));
        }

        // Query Params
        if (availSale !== undefined) {
            requestContext.setQueryParam("avail_sale", ObjectSerializer.serialize(availSale, "boolean", ""));
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

        // Query Params
        if (useLatestApiVersion !== undefined) {
            requestContext.setQueryParam("use_latest_api_version", ObjectSerializer.serialize(useLatestApiVersion, "boolean", ""));
        }

        // Query Params
        if (returnGlobal !== undefined) {
            requestContext.setQueryParam("return_global", ObjectSerializer.serialize(returnGlobal, "boolean", ""));
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
     * Count products in store.
     * product.count
     * @param categoryId Counts products specified by category id
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param availView Specifies the set of visible/invisible products
     * @param availSale Specifies the set of available/not available products for sale
     * @param storeId Counts products specified by store id
     * @param langId Counts products specified by language id
     * @param productIds Counts products specified by product ids
     * @param sinceId Retrieve entities starting from the specified id.
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     * @param brandName Retrieves brands specified by brand name
     * @param productAttributes Defines product attributes
     * @param status Defines product\&#39;s status
     * @param type Defines products\&#39;s type
     * @param findValue Entity search that is specified by some value
     * @param findWhere Counts products that are searched specified by field
     * @param useLatestApiVersion Use the latest platform API version
     * @param returnGlobal Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param categoriesIds Defines product add that is specified by comma-separated categories id
     */
    public async productCount(categoryId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, availView?: boolean, availSale?: boolean, storeId?: string, langId?: string, productIds?: string, sinceId?: string, reportRequestId?: string, disableReportCache?: boolean, brandName?: string, productAttributes?: Array<string>, status?: string, type?: string, findValue?: string, findWhere?: string, useLatestApiVersion?: boolean, returnGlobal?: boolean, categoriesIds?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;























        // Path Params
        const localVarPath = '/product.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
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
        if (availView !== undefined) {
            requestContext.setQueryParam("avail_view", ObjectSerializer.serialize(availView, "boolean", ""));
        }

        // Query Params
        if (availSale !== undefined) {
            requestContext.setQueryParam("avail_sale", ObjectSerializer.serialize(availSale, "boolean", ""));
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
        if (productIds !== undefined) {
            requestContext.setQueryParam("product_ids", ObjectSerializer.serialize(productIds, "string", ""));
        }

        // Query Params
        if (sinceId !== undefined) {
            requestContext.setQueryParam("since_id", ObjectSerializer.serialize(sinceId, "string", ""));
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
        if (brandName !== undefined) {
            requestContext.setQueryParam("brand_name", ObjectSerializer.serialize(brandName, "string", ""));
        }

        // Query Params
        if (productAttributes !== undefined) {
            const serializedParams = ObjectSerializer.serialize(productAttributes, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("product_attributes", serializedParam);
            }
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
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
        if (useLatestApiVersion !== undefined) {
            requestContext.setQueryParam("use_latest_api_version", ObjectSerializer.serialize(useLatestApiVersion, "boolean", ""));
        }

        // Query Params
        if (returnGlobal !== undefined) {
            requestContext.setQueryParam("return_global", ObjectSerializer.serialize(returnGlobal, "boolean", ""));
        }

        // Query Params
        if (categoriesIds !== undefined) {
            requestContext.setQueryParam("categories_ids", ObjectSerializer.serialize(categoriesIds, "string", ""));
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
     * Add currency and/or set default in store
     * product.currency.add
     * @param iso3 Specifies standardized currency code
     * @param rate Defines the numerical identifier against to the major currency
     * @param name Defines currency\&#39;s name
     * @param avail Specifies whether the currency is available
     * @param symbolLeft Defines the symbol that is located before the currency
     * @param symbolRight Defines the symbol that is located after the currency
     * @param _default Specifies currency\&#39;s default meaning
     */
    public async productCurrencyAdd(iso3: string, rate: number, name?: string, avail?: boolean, symbolLeft?: string, symbolRight?: string, _default?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'iso3' is not null or undefined
        if (iso3 === null || iso3 === undefined) {
            throw new RequiredError("ProductApi", "productCurrencyAdd", "iso3");
        }


        // verify required parameter 'rate' is not null or undefined
        if (rate === null || rate === undefined) {
            throw new RequiredError("ProductApi", "productCurrencyAdd", "rate");
        }







        // Path Params
        const localVarPath = '/product.currency.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (iso3 !== undefined) {
            requestContext.setQueryParam("iso3", ObjectSerializer.serialize(iso3, "string", ""));
        }

        // Query Params
        if (rate !== undefined) {
            requestContext.setQueryParam("rate", ObjectSerializer.serialize(rate, "number", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (avail !== undefined) {
            requestContext.setQueryParam("avail", ObjectSerializer.serialize(avail, "boolean", ""));
        }

        // Query Params
        if (symbolLeft !== undefined) {
            requestContext.setQueryParam("symbol_left", ObjectSerializer.serialize(symbolLeft, "string", ""));
        }

        // Query Params
        if (symbolRight !== undefined) {
            requestContext.setQueryParam("symbol_right", ObjectSerializer.serialize(symbolRight, "string", ""));
        }

        // Query Params
        if (_default !== undefined) {
            requestContext.setQueryParam("default", ObjectSerializer.serialize(_default, "boolean", ""));
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
     * Get list of currencies
     * product.currency.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param _default Specifies the set of default/not default currencies
     * @param avail Specifies the set of available/not available currencies
     */
    public async productCurrencyList(start?: number, count?: number, params?: string, pageCursor?: string, exclude?: string, responseFields?: string, _default?: boolean, avail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/product.currency.list.json';

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
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
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
        if (_default !== undefined) {
            requestContext.setQueryParam("default", ObjectSerializer.serialize(_default, "boolean", ""));
        }

        // Query Params
        if (avail !== undefined) {
            requestContext.setQueryParam("avail", ObjectSerializer.serialize(avail, "boolean", ""));
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
     * Product delete
     * product.delete
     * @param id Product id that will be removed
     * @param storeId Store Id
     */
    public async productDelete(id: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productDelete", "id");
        }



        // Path Params
        const localVarPath = '/product.delete.json';

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
     * Remove product from the store.
     * product.delete.batch
     * @param productDeleteBatch 
     */
    public async productDeleteBatch(productDeleteBatch: ProductDeleteBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productDeleteBatch' is not null or undefined
        if (productDeleteBatch === null || productDeleteBatch === undefined) {
            throw new RequiredError("ProductApi", "productDeleteBatch", "productDeleteBatch");
        }


        // Path Params
        const localVarPath = '/product.delete.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productDeleteBatch, "ProductDeleteBatch", ""),
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
     * Retrieve all available fields for product item in store.
     * product.fields
     */
    public async productFields(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/product.fields.json';

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
     * Search product in store catalog. \"Apple\" is specified here by default.
     * product.find
     * @param findValue Entity search that is specified by some value
     * @param findWhere Entity search that is specified by the comma-separated unique fields
     * @param findParams Entity search that is specified by comma-separated parameters
     * @param findWhat Parameter\&#39;s value specifies the entity that has to be found
     * @param langId Search products specified by language id
     * @param storeId Store Id
     */
    public async productFind(findValue: string, findWhere?: string, findParams?: string, findWhat?: string, langId?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'findValue' is not null or undefined
        if (findValue === null || findValue === undefined) {
            throw new RequiredError("ProductApi", "productFind", "findValue");
        }







        // Path Params
        const localVarPath = '/product.find.json';

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
        if (findWhat !== undefined) {
            requestContext.setQueryParam("find_what", ObjectSerializer.serialize(findWhat, "string", ""));
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
     * Add image to product
     * product.image.add
     * @param productImageAdd 
     */
    public async productImageAdd(productImageAdd: ProductImageAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productImageAdd' is not null or undefined
        if (productImageAdd === null || productImageAdd === undefined) {
            throw new RequiredError("ProductApi", "productImageAdd", "productImageAdd");
        }


        // Path Params
        const localVarPath = '/product.image.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productImageAdd, "ProductImageAdd", ""),
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
     * Delete image
     * product.image.delete
     * @param productId Defines product id where the image should be deleted
     * @param id Entity id
     * @param storeId Store Id
     */
    public async productImageDelete(productId: string, id: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productImageDelete", "productId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productImageDelete", "id");
        }



        // Path Params
        const localVarPath = '/product.image.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

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
     * Update details of image
     * product.image.update
     * @param productId Defines product id where the image should be updated
     * @param id Defines image update specified by image id
     * @param variantIds Defines product\&#39;s variants ids
     * @param imageName Defines image\&#39;s name
     * @param type Defines image\&#39;s types that are specified by comma-separated list
     * @param label Defines alternative text that has to be attached to the picture
     * @param position Defines image’s position in the list
     * @param storeId Store Id
     * @param langId Language id
     * @param hidden Define is hide image
     */
    public async productImageUpdate(productId: string, id: string, variantIds?: string, imageName?: string, type?: string, label?: string, position?: number, storeId?: string, langId?: string, hidden?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productImageUpdate", "productId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productImageUpdate", "id");
        }










        // Path Params
        const localVarPath = '/product.image.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (variantIds !== undefined) {
            requestContext.setQueryParam("variant_ids", ObjectSerializer.serialize(variantIds, "string", ""));
        }

        // Query Params
        if (imageName !== undefined) {
            requestContext.setQueryParam("image_name", ObjectSerializer.serialize(imageName, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (label !== undefined) {
            requestContext.setQueryParam("label", ObjectSerializer.serialize(label, "string", ""));
        }

        // Query Params
        if (position !== undefined) {
            requestContext.setQueryParam("position", ObjectSerializer.serialize(position, "number", ""));
        }

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
        if (hidden !== undefined) {
            requestContext.setQueryParam("hidden", ObjectSerializer.serialize(hidden, "boolean", ""));
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
     * Get information about a specific product by its ID. In the case of a multistore configuration, use the store_id filter to get a response in the context of a specific store.
     * product.info
     * @param id Retrieves product\&#39;s info specified by product id
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param storeId Retrieves product info specified by store id
     * @param langId Retrieves product info specified by language id
     * @param currencyId Currency Id
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     * @param useLatestApiVersion Use the latest platform API version
     */
    public async productInfo(id: string, params?: string, responseFields?: string, exclude?: string, storeId?: string, langId?: string, currencyId?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productInfo", "id");
        }











        // Path Params
        const localVarPath = '/product.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
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
        if (storeId !== undefined) {
            requestContext.setQueryParam("store_id", ObjectSerializer.serialize(storeId, "string", ""));
        }

        // Query Params
        if (langId !== undefined) {
            requestContext.setQueryParam("lang_id", ObjectSerializer.serialize(langId, "string", ""));
        }

        // Query Params
        if (currencyId !== undefined) {
            requestContext.setQueryParam("currency_id", ObjectSerializer.serialize(currencyId, "string", ""));
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
     * Get list of products from your store. Returns 10 products by default.
     * product.list
     * @param pageCursor Used to retrieve products via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param categoryId Retrieves products specified by category id
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param availView Specifies the set of visible/invisible products
     * @param availSale Specifies the set of available/not available products for sale
     * @param storeId Retrieves products specified by store id
     * @param langId Retrieves products specified by language id
     * @param currencyId Currency Id
     * @param productIds Retrieves products specified by product ids
     * @param sinceId Retrieve entities starting from the specified id.
     * @param reportRequestId Report request id
     * @param disableReportCache Disable report cache for current request
     * @param sortBy Set field to sort by
     * @param sortDirection Set sorting direction
     * @param sku Filter by product\&#39;s sku
     * @param disableCache Disable cache for current request
     * @param brandName Retrieves brands specified by brand name
     * @param productAttributes Defines product attributes
     * @param status Defines product\&#39;s status
     * @param type Defines products\&#39;s type
     * @param findValue Entity search that is specified by some value
     * @param findWhere Product search that is specified by field
     * @param useLatestApiVersion Use the latest platform API version
     * @param returnGlobal Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param categoriesIds Retrieves products specified by categories ids
     */
    public async productList(pageCursor?: string, start?: number, count?: number, params?: string, responseFields?: string, exclude?: string, categoryId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, availView?: boolean, availSale?: boolean, storeId?: string, langId?: string, currencyId?: string, productIds?: string, sinceId?: string, reportRequestId?: string, disableReportCache?: boolean, sortBy?: string, sortDirection?: string, sku?: string, disableCache?: boolean, brandName?: string, productAttributes?: Array<string>, status?: string, type?: string, findValue?: string, findWhere?: string, useLatestApiVersion?: boolean, returnGlobal?: boolean, categoriesIds?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


































        // Path Params
        const localVarPath = '/product.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
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
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
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
        if (availView !== undefined) {
            requestContext.setQueryParam("avail_view", ObjectSerializer.serialize(availView, "boolean", ""));
        }

        // Query Params
        if (availSale !== undefined) {
            requestContext.setQueryParam("avail_sale", ObjectSerializer.serialize(availSale, "boolean", ""));
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
        if (currencyId !== undefined) {
            requestContext.setQueryParam("currency_id", ObjectSerializer.serialize(currencyId, "string", ""));
        }

        // Query Params
        if (productIds !== undefined) {
            requestContext.setQueryParam("product_ids", ObjectSerializer.serialize(productIds, "string", ""));
        }

        // Query Params
        if (sinceId !== undefined) {
            requestContext.setQueryParam("since_id", ObjectSerializer.serialize(sinceId, "string", ""));
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
        if (sortBy !== undefined) {
            requestContext.setQueryParam("sort_by", ObjectSerializer.serialize(sortBy, "string", ""));
        }

        // Query Params
        if (sortDirection !== undefined) {
            requestContext.setQueryParam("sort_direction", ObjectSerializer.serialize(sortDirection, "string", ""));
        }

        // Query Params
        if (sku !== undefined) {
            requestContext.setQueryParam("sku", ObjectSerializer.serialize(sku, "string", ""));
        }

        // Query Params
        if (disableCache !== undefined) {
            requestContext.setQueryParam("disable_cache", ObjectSerializer.serialize(disableCache, "boolean", ""));
        }

        // Query Params
        if (brandName !== undefined) {
            requestContext.setQueryParam("brand_name", ObjectSerializer.serialize(brandName, "string", ""));
        }

        // Query Params
        if (productAttributes !== undefined) {
            const serializedParams = ObjectSerializer.serialize(productAttributes, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("product_attributes", serializedParam);
            }
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
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
        if (useLatestApiVersion !== undefined) {
            requestContext.setQueryParam("use_latest_api_version", ObjectSerializer.serialize(useLatestApiVersion, "boolean", ""));
        }

        // Query Params
        if (returnGlobal !== undefined) {
            requestContext.setQueryParam("return_global", ObjectSerializer.serialize(returnGlobal, "boolean", ""));
        }

        // Query Params
        if (categoriesIds !== undefined) {
            requestContext.setQueryParam("categories_ids", ObjectSerializer.serialize(categoriesIds, "string", ""));
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
     * Add manufacturer to store and assign to product
     * product.manufacturer.add
     * @param productId Defines products specified by product id
     * @param manufacturer Defines product’s manufacturer\&#39;s name
     * @param storeId Store Id
     */
    public async productManufacturerAdd(productId: string, manufacturer: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productManufacturerAdd", "productId");
        }


        // verify required parameter 'manufacturer' is not null or undefined
        if (manufacturer === null || manufacturer === undefined) {
            throw new RequiredError("ProductApi", "productManufacturerAdd", "manufacturer");
        }



        // Path Params
        const localVarPath = '/product.manufacturer.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (manufacturer !== undefined) {
            requestContext.setQueryParam("manufacturer", ObjectSerializer.serialize(manufacturer, "string", ""));
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
     * Add product option from store.
     * product.option.add
     * @param productOptionAdd 
     */
    public async productOptionAdd(productOptionAdd: ProductOptionAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productOptionAdd' is not null or undefined
        if (productOptionAdd === null || productOptionAdd === undefined) {
            throw new RequiredError("ProductApi", "productOptionAdd", "productOptionAdd");
        }


        // Path Params
        const localVarPath = '/product.option.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productOptionAdd, "ProductOptionAdd", ""),
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
     * Assign option from product.
     * product.option.assign
     * @param productId Defines product id where the option should be assigned
     * @param optionId Defines option id which has to be assigned
     * @param required Defines if the option is required
     * @param sortOrder Sort number in the list
     * @param optionValues Defines option values that has to be assigned
     * @param clearCache Is cache clear required
     */
    public async productOptionAssign(productId: string, optionId: string, required?: boolean, sortOrder?: number, optionValues?: string, clearCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productOptionAssign", "productId");
        }


        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("ProductApi", "productOptionAssign", "optionId");
        }






        // Path Params
        const localVarPath = '/product.option.assign.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (optionId !== undefined) {
            requestContext.setQueryParam("option_id", ObjectSerializer.serialize(optionId, "string", ""));
        }

        // Query Params
        if (required !== undefined) {
            requestContext.setQueryParam("required", ObjectSerializer.serialize(required, "boolean", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "number", ""));
        }

        // Query Params
        if (optionValues !== undefined) {
            requestContext.setQueryParam("option_values", ObjectSerializer.serialize(optionValues, "string", ""));
        }

        // Query Params
        if (clearCache !== undefined) {
            requestContext.setQueryParam("clear_cache", ObjectSerializer.serialize(clearCache, "boolean", ""));
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
     * Product option delete.
     * product.option.delete
     * @param optionId Defines option id that should be deleted
     * @param productId Defines product id where the option should be deleted
     * @param storeId Store Id
     */
    public async productOptionDelete(optionId: string, productId: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("ProductApi", "productOptionDelete", "optionId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productOptionDelete", "productId");
        }



        // Path Params
        const localVarPath = '/product.option.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (optionId !== undefined) {
            requestContext.setQueryParam("option_id", ObjectSerializer.serialize(optionId, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
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
     * Get list of options.
     * product.option.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     * @param productId Retrieves products\&#39; options specified by product id
     * @param langId Language id
     * @param storeId Store Id
     */
    public async productOptionList(start?: number, count?: number, params?: string, exclude?: string, responseFields?: string, productId?: string, langId?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/product.option.list.json';

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
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
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
     * Add product option item from option.
     * product.option.value.add
     * @param productId Defines product id where the option value should be added
     * @param optionId Defines option id where the value has to be added
     * @param optionValue Defines option value that has to be added
     * @param sortOrder Sort number in the list
     * @param displayValue Defines the value that will be displayed for the option value
     * @param isDefault Defines as a default
     * @param clearCache Is cache clear required
     */
    public async productOptionValueAdd(productId: string, optionId: string, optionValue?: string, sortOrder?: number, displayValue?: string, isDefault?: boolean, clearCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueAdd", "productId");
        }


        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueAdd", "optionId");
        }







        // Path Params
        const localVarPath = '/product.option.value.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (optionId !== undefined) {
            requestContext.setQueryParam("option_id", ObjectSerializer.serialize(optionId, "string", ""));
        }

        // Query Params
        if (optionValue !== undefined) {
            requestContext.setQueryParam("option_value", ObjectSerializer.serialize(optionValue, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sort_order", ObjectSerializer.serialize(sortOrder, "number", ""));
        }

        // Query Params
        if (displayValue !== undefined) {
            requestContext.setQueryParam("display_value", ObjectSerializer.serialize(displayValue, "string", ""));
        }

        // Query Params
        if (isDefault !== undefined) {
            requestContext.setQueryParam("is_default", ObjectSerializer.serialize(isDefault, "boolean", ""));
        }

        // Query Params
        if (clearCache !== undefined) {
            requestContext.setQueryParam("clear_cache", ObjectSerializer.serialize(clearCache, "boolean", ""));
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
     * Assign product option item from product.
     * product.option.value.assign
     * @param productOptionId Defines product\&#39;s option id where the value has to be assigned
     * @param optionValueId Defines value id that has to be assigned
     * @param clearCache Is cache clear required
     */
    public async productOptionValueAssign(productOptionId: number, optionValueId: string, clearCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productOptionId' is not null or undefined
        if (productOptionId === null || productOptionId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueAssign", "productOptionId");
        }


        // verify required parameter 'optionValueId' is not null or undefined
        if (optionValueId === null || optionValueId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueAssign", "optionValueId");
        }



        // Path Params
        const localVarPath = '/product.option.value.assign.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productOptionId !== undefined) {
            requestContext.setQueryParam("product_option_id", ObjectSerializer.serialize(productOptionId, "number", ""));
        }

        // Query Params
        if (optionValueId !== undefined) {
            requestContext.setQueryParam("option_value_id", ObjectSerializer.serialize(optionValueId, "string", ""));
        }

        // Query Params
        if (clearCache !== undefined) {
            requestContext.setQueryParam("clear_cache", ObjectSerializer.serialize(clearCache, "boolean", ""));
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
     * Product option value delete.
     * product.option.value.delete
     * @param optionId Defines option id where the value should be deleted
     * @param optionValueId Defines option value id that should be deleted
     * @param productId Defines product id where the option value should be deleted
     * @param storeId Store Id
     */
    public async productOptionValueDelete(optionId: string, optionValueId: string, productId: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueDelete", "optionId");
        }


        // verify required parameter 'optionValueId' is not null or undefined
        if (optionValueId === null || optionValueId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueDelete", "optionValueId");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueDelete", "productId");
        }



        // Path Params
        const localVarPath = '/product.option.value.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (optionId !== undefined) {
            requestContext.setQueryParam("option_id", ObjectSerializer.serialize(optionId, "string", ""));
        }

        // Query Params
        if (optionValueId !== undefined) {
            requestContext.setQueryParam("option_value_id", ObjectSerializer.serialize(optionValueId, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
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
     * Update product option item from option.
     * product.option.value.update
     * @param productId Defines product id where the option value should be updated
     * @param optionId Defines option id where the value has to be updated
     * @param optionValueId Defines value id that has to be assigned
     * @param optionValue Defines option value that has to be added
     * @param price Defines new product option price
     * @param quantity Defines new products\&#39; options quantity
     * @param displayValue Defines the value that will be displayed for the option value
     * @param clearCache Is cache clear required
     */
    public async productOptionValueUpdate(productId: string, optionId: string, optionValueId: string, optionValue?: string, price?: number, quantity?: number, displayValue?: string, clearCache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueUpdate", "productId");
        }


        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueUpdate", "optionId");
        }


        // verify required parameter 'optionValueId' is not null or undefined
        if (optionValueId === null || optionValueId === undefined) {
            throw new RequiredError("ProductApi", "productOptionValueUpdate", "optionValueId");
        }







        // Path Params
        const localVarPath = '/product.option.value.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (optionId !== undefined) {
            requestContext.setQueryParam("option_id", ObjectSerializer.serialize(optionId, "string", ""));
        }

        // Query Params
        if (optionValueId !== undefined) {
            requestContext.setQueryParam("option_value_id", ObjectSerializer.serialize(optionValueId, "string", ""));
        }

        // Query Params
        if (optionValue !== undefined) {
            requestContext.setQueryParam("option_value", ObjectSerializer.serialize(optionValue, "string", ""));
        }

        // Query Params
        if (price !== undefined) {
            requestContext.setQueryParam("price", ObjectSerializer.serialize(price, "number", ""));
        }

        // Query Params
        if (quantity !== undefined) {
            requestContext.setQueryParam("quantity", ObjectSerializer.serialize(quantity, "number", ""));
        }

        // Query Params
        if (displayValue !== undefined) {
            requestContext.setQueryParam("display_value", ObjectSerializer.serialize(displayValue, "string", ""));
        }

        // Query Params
        if (clearCache !== undefined) {
            requestContext.setQueryParam("clear_cache", ObjectSerializer.serialize(clearCache, "boolean", ""));
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
     * Add some prices to the product.
     * product.price.add
     * @param productPriceAdd 
     */
    public async productPriceAdd(productPriceAdd: ProductPriceAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productPriceAdd' is not null or undefined
        if (productPriceAdd === null || productPriceAdd === undefined) {
            throw new RequiredError("ProductApi", "productPriceAdd", "productPriceAdd");
        }


        // Path Params
        const localVarPath = '/product.price.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productPriceAdd, "ProductPriceAdd", ""),
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
     * Delete some prices of the product
     * product.price.delete
     * @param productId Defines the product where the price has to be deleted
     * @param groupPrices Defines product\&#39;s group prices
     * @param storeId Store Id
     */
    public async productPriceDelete(productId: string, groupPrices?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productPriceDelete", "productId");
        }




        // Path Params
        const localVarPath = '/product.price.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (groupPrices !== undefined) {
            requestContext.setQueryParam("group_prices", ObjectSerializer.serialize(groupPrices, "string", ""));
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
     * Update some prices of the product.
     * product.price.update
     * @param productPriceUpdate 
     */
    public async productPriceUpdate(productPriceUpdate: ProductPriceUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productPriceUpdate' is not null or undefined
        if (productPriceUpdate === null || productPriceUpdate === undefined) {
            throw new RequiredError("ProductApi", "productPriceUpdate", "productPriceUpdate");
        }


        // Path Params
        const localVarPath = '/product.price.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productPriceUpdate, "ProductPriceUpdate", ""),
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
     * Get reviews of a specific product.
     * product.review.list
     * @param productId Product id
     * @param start This parameter sets the number from which you want to get entities
     * @param pageCursor Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param ids Retrieves reviews specified by ids
     * @param storeId Store Id
     * @param status Defines status
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param responseFields Set this parameter in order to choose which entity fields you want to retrieve
     */
    public async productReviewList(productId: string, start?: number, pageCursor?: string, count?: number, ids?: string, storeId?: string, status?: string, params?: string, exclude?: string, responseFields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productReviewList", "productId");
        }











        // Path Params
        const localVarPath = '/product.review.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (pageCursor !== undefined) {
            requestContext.setQueryParam("page_cursor", ObjectSerializer.serialize(pageCursor, "string", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
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
     * Assign product to store
     * product.store.assign
     * @param productId Defines id of the product which should be assigned to a store
     * @param storeId Defines id of the store product should be assigned to
     */
    public async productStoreAssign(productId: string, storeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productStoreAssign", "productId");
        }


        // verify required parameter 'storeId' is not null or undefined
        if (storeId === null || storeId === undefined) {
            throw new RequiredError("ProductApi", "productStoreAssign", "storeId");
        }


        // Path Params
        const localVarPath = '/product.store.assign.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
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
     * Add tax class and tax rate to store and assign to product.
     * product.tax.add
     * @param productTaxAdd 
     */
    public async productTaxAdd(productTaxAdd: ProductTaxAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productTaxAdd' is not null or undefined
        if (productTaxAdd === null || productTaxAdd === undefined) {
            throw new RequiredError("ProductApi", "productTaxAdd", "productTaxAdd");
        }


        // Path Params
        const localVarPath = '/product.tax.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productTaxAdd, "ProductTaxAdd", ""),
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
     * This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.
     * product.update
     * @param productUpdate 
     */
    public async productUpdate(productUpdate: ProductUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productUpdate' is not null or undefined
        if (productUpdate === null || productUpdate === undefined) {
            throw new RequiredError("ProductApi", "productUpdate", "productUpdate");
        }


        // Path Params
        const localVarPath = '/product.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productUpdate, "ProductUpdate", ""),
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
     * Update products on the store.
     * product.update.batch
     * @param productUpdateBatch 
     */
    public async productUpdateBatch(productUpdateBatch: ProductUpdateBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productUpdateBatch' is not null or undefined
        if (productUpdateBatch === null || productUpdateBatch === undefined) {
            throw new RequiredError("ProductApi", "productUpdateBatch", "productUpdateBatch");
        }


        // Path Params
        const localVarPath = '/product.update.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productUpdateBatch, "ProductUpdateBatch", ""),
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
     * Add variant to product.
     * product.variant.add
     * @param productVariantAdd 
     */
    public async productVariantAdd(productVariantAdd: ProductVariantAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantAdd' is not null or undefined
        if (productVariantAdd === null || productVariantAdd === undefined) {
            throw new RequiredError("ProductApi", "productVariantAdd", "productVariantAdd");
        }


        // Path Params
        const localVarPath = '/product.variant.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantAdd, "ProductVariantAdd", ""),
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
     * Add new product variants to the store.
     * product.variant.add.batch
     * @param productVariantAddBatch 
     */
    public async productVariantAddBatch(productVariantAddBatch: ProductVariantAddBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantAddBatch' is not null or undefined
        if (productVariantAddBatch === null || productVariantAddBatch === undefined) {
            throw new RequiredError("ProductApi", "productVariantAddBatch", "productVariantAddBatch");
        }


        // Path Params
        const localVarPath = '/product.variant.add.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantAddBatch, "ProductVariantAddBatch", ""),
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
     * Get count variants.
     * product.variant.count
     * @param productId Retrieves products\&#39; variants specified by product id
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param categoryId Counts products’ variants specified by category id
     * @param storeId Retrieves variants specified by store id
     */
    public async productVariantCount(productId: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, categoryId?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productVariantCount", "productId");
        }








        // Path Params
        const localVarPath = '/product.variant.count.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Delete variant.
     * product.variant.delete
     * @param id Defines variant removal, specified by variant id
     * @param productId Defines product\&#39;s id where the variant has to be deleted
     * @param storeId Store Id
     */
    public async productVariantDelete(id: string, productId: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productVariantDelete", "id");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productVariantDelete", "productId");
        }



        // Path Params
        const localVarPath = '/product.variant.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
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
     * Remove product variants from the store.
     * product.variant.delete.batch
     * @param productVariantDeleteBatch 
     */
    public async productVariantDeleteBatch(productVariantDeleteBatch: ProductVariantDeleteBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantDeleteBatch' is not null or undefined
        if (productVariantDeleteBatch === null || productVariantDeleteBatch === undefined) {
            throw new RequiredError("ProductApi", "productVariantDeleteBatch", "productVariantDeleteBatch");
        }


        // Path Params
        const localVarPath = '/product.variant.delete.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantDeleteBatch, "ProductVariantDeleteBatch", ""),
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
     * Add image to product
     * product.variant.image.add
     * @param productVariantImageAdd 
     */
    public async productVariantImageAdd(productVariantImageAdd: ProductVariantImageAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantImageAdd' is not null or undefined
        if (productVariantImageAdd === null || productVariantImageAdd === undefined) {
            throw new RequiredError("ProductApi", "productVariantImageAdd", "productVariantImageAdd");
        }


        // Path Params
        const localVarPath = '/product.variant.image.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantImageAdd, "ProductVariantImageAdd", ""),
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
     * Delete  image to product
     * product.variant.image.delete
     * @param productId Defines product id where the variant image should be deleted
     * @param productVariantId Defines product\&#39;s variants specified by variant id
     * @param id Entity id
     * @param storeId Store Id
     */
    public async productVariantImageDelete(productId: string, productVariantId: string, id: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productVariantImageDelete", "productId");
        }


        // verify required parameter 'productVariantId' is not null or undefined
        if (productVariantId === null || productVariantId === undefined) {
            throw new RequiredError("ProductApi", "productVariantImageDelete", "productVariantId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productVariantImageDelete", "id");
        }



        // Path Params
        const localVarPath = '/product.variant.image.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (productVariantId !== undefined) {
            requestContext.setQueryParam("product_variant_id", ObjectSerializer.serialize(productVariantId, "string", ""));
        }

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
     * Get variant info. This method is deprecated, and its development is stopped. Please use \"product.child_item.info\" instead.
     * product.variant.info
     * @param id Retrieves variant\&#39;s info specified by variant id
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param storeId Retrieves variant info specified by store id
     */
    public async productVariantInfo(id: string, params?: string, exclude?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productVariantInfo", "id");
        }





        // Path Params
        const localVarPath = '/product.variant.info.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }

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
     * Get a list of variants. This method is deprecated, and its development is stopped. Please use \"product.child_item.list\" instead.
     * product.variant.list
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param createdFrom Retrieve entities from their creation date
     * @param createdTo Retrieve entities to their creation date
     * @param modifiedFrom Retrieve entities from their modification date
     * @param modifiedTo Retrieve entities to their modification date
     * @param categoryId Retrieves products’ variants specified by category id
     * @param productId Retrieves products\&#39; variants specified by product id
     * @param storeId Retrieves variants specified by store id
     */
    public async productVariantList(start?: number, count?: number, params?: string, exclude?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, categoryId?: string, productId?: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/product.variant.list.json';

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
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
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
     * Add some prices to the product variant.
     * product.variant.price.add
     * @param productVariantPriceAdd 
     */
    public async productVariantPriceAdd(productVariantPriceAdd: ProductVariantPriceAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantPriceAdd' is not null or undefined
        if (productVariantPriceAdd === null || productVariantPriceAdd === undefined) {
            throw new RequiredError("ProductApi", "productVariantPriceAdd", "productVariantPriceAdd");
        }


        // Path Params
        const localVarPath = '/product.variant.price.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantPriceAdd, "ProductVariantPriceAdd", ""),
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
     * Delete some prices of the product variant.
     * product.variant.price.delete
     * @param id Defines the variant where the price has to be deleted
     * @param productId Product id
     * @param groupPrices Defines variants\&#39;s group prices
     * @param storeId Store Id
     */
    public async productVariantPriceDelete(id: string, productId: string, groupPrices: string, storeId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProductApi", "productVariantPriceDelete", "id");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductApi", "productVariantPriceDelete", "productId");
        }


        // verify required parameter 'groupPrices' is not null or undefined
        if (groupPrices === null || groupPrices === undefined) {
            throw new RequiredError("ProductApi", "productVariantPriceDelete", "groupPrices");
        }



        // Path Params
        const localVarPath = '/product.variant.price.delete.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "string", ""));
        }

        // Query Params
        if (groupPrices !== undefined) {
            requestContext.setQueryParam("group_prices", ObjectSerializer.serialize(groupPrices, "string", ""));
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
     * Update some prices of the product variant.
     * product.variant.price.update
     * @param productVariantPriceUpdate 
     */
    public async productVariantPriceUpdate(productVariantPriceUpdate: ProductVariantPriceUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantPriceUpdate' is not null or undefined
        if (productVariantPriceUpdate === null || productVariantPriceUpdate === undefined) {
            throw new RequiredError("ProductApi", "productVariantPriceUpdate", "productVariantPriceUpdate");
        }


        // Path Params
        const localVarPath = '/product.variant.price.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantPriceUpdate, "ProductVariantPriceUpdate", ""),
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
     * Update variant.
     * product.variant.update
     * @param productVariantUpdate 
     */
    public async productVariantUpdate(productVariantUpdate: ProductVariantUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantUpdate' is not null or undefined
        if (productVariantUpdate === null || productVariantUpdate === undefined) {
            throw new RequiredError("ProductApi", "productVariantUpdate", "productVariantUpdate");
        }


        // Path Params
        const localVarPath = '/product.variant.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantUpdate, "ProductVariantUpdate", ""),
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
     * Update products variants on the store.
     * product.variant.update.batch
     * @param productVariantUpdateBatch 
     */
    public async productVariantUpdateBatch(productVariantUpdateBatch: ProductVariantUpdateBatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productVariantUpdateBatch' is not null or undefined
        if (productVariantUpdateBatch === null || productVariantUpdateBatch === undefined) {
            throw new RequiredError("ProductApi", "productVariantUpdateBatch", "productVariantUpdateBatch");
        }


        // Path Params
        const localVarPath = '/product.variant.update.batch.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productVariantUpdateBatch, "ProductVariantUpdateBatch", ""),
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

}

export class ProductApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductAdd200Response", ""
            ) as ProductAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductAdd200Response", ""
            ) as ProductAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productAddBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productAddBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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
     * @params response Response returned by the server for a request to productAttributeList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productAttributeListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseProductAttributeList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseProductAttributeList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductAttributeList", ""
            ) as ModelResponseProductAttributeList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseProductAttributeList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductAttributeList", ""
            ) as ModelResponseProductAttributeList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productAttributeValueSet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productAttributeValueSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductAttributeValueSet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductAttributeValueSet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductAttributeValueSet200Response", ""
            ) as ProductAttributeValueSet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductAttributeValueSet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductAttributeValueSet200Response", ""
            ) as ProductAttributeValueSet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productAttributeValueUnset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productAttributeValueUnsetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductAttributeValueUnset200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductAttributeValueUnset200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductAttributeValueUnset200Response", ""
            ) as ProductAttributeValueUnset200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductAttributeValueUnset200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductAttributeValueUnset200Response", ""
            ) as ProductAttributeValueUnset200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productBrandList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productBrandListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseProductBrandList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseProductBrandList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductBrandList", ""
            ) as ModelResponseProductBrandList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseProductBrandList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductBrandList", ""
            ) as ModelResponseProductBrandList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productChildItemFind
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productChildItemFindWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductChildItemFind200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductChildItemFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductChildItemFind200Response", ""
            ) as ProductChildItemFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductChildItemFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductChildItemFind200Response", ""
            ) as ProductChildItemFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productChildItemInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productChildItemInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductChildItemInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductChildItemInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductChildItemInfo200Response", ""
            ) as ProductChildItemInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductChildItemInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductChildItemInfo200Response", ""
            ) as ProductChildItemInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productChildItemList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productChildItemListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseProductChildItemList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseProductChildItemList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductChildItemList", ""
            ) as ModelResponseProductChildItemList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseProductChildItemList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductChildItemList", ""
            ) as ModelResponseProductChildItemList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCount200Response", ""
            ) as ProductCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCount200Response", ""
            ) as ProductCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productCurrencyAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productCurrencyAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCurrencyAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductCurrencyAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCurrencyAdd200Response", ""
            ) as ProductCurrencyAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductCurrencyAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCurrencyAdd200Response", ""
            ) as ProductCurrencyAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productCurrencyList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productCurrencyListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseProductCurrencyList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseProductCurrencyList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductCurrencyList", ""
            ) as ModelResponseProductCurrencyList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseProductCurrencyList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductCurrencyList", ""
            ) as ModelResponseProductCurrencyList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomerDelete200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomerDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerDelete200Response", ""
            ) as CustomerDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomerDelete200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerDelete200Response", ""
            ) as CustomerDelete200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productDeleteBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productDeleteBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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
     * @params response Response returned by the server for a request to productFields
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productFieldsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartConfigUpdate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CartConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartConfigUpdate200Response", ""
            ) as CartConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CartConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CartConfigUpdate200Response", ""
            ) as CartConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productFind
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productFindWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductFind200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductFind200Response", ""
            ) as ProductFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductFind200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductFind200Response", ""
            ) as ProductFind200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productImageAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productImageAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductImageAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductImageAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductImageAdd200Response", ""
            ) as ProductImageAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductImageAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductImageAdd200Response", ""
            ) as ProductImageAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productImageDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productImageDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to productImageUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productImageUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductImageUpdate200Response >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductInfo200Response", ""
            ) as ProductInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductInfo200Response", ""
            ) as ProductInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseProductList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseProductList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductList", ""
            ) as ModelResponseProductList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseProductList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductList", ""
            ) as ModelResponseProductList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productManufacturerAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productManufacturerAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductManufacturerAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductManufacturerAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductManufacturerAdd200Response", ""
            ) as ProductManufacturerAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductManufacturerAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductManufacturerAdd200Response", ""
            ) as ProductManufacturerAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productOptionAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductOptionAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductOptionAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionAdd200Response", ""
            ) as ProductOptionAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductOptionAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionAdd200Response", ""
            ) as ProductOptionAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productOptionAssign
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionAssignWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductOptionAssign200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductOptionAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionAssign200Response", ""
            ) as ProductOptionAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductOptionAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionAssign200Response", ""
            ) as ProductOptionAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productOptionDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to productOptionList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseProductOptionList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseProductOptionList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductOptionList", ""
            ) as ModelResponseProductOptionList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseProductOptionList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductOptionList", ""
            ) as ModelResponseProductOptionList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productOptionValueAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionValueAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductOptionValueAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductOptionValueAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionValueAdd200Response", ""
            ) as ProductOptionValueAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductOptionValueAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionValueAdd200Response", ""
            ) as ProductOptionValueAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productOptionValueAssign
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionValueAssignWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductOptionValueAssign200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductOptionValueAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionValueAssign200Response", ""
            ) as ProductOptionValueAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductOptionValueAssign200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductOptionValueAssign200Response", ""
            ) as ProductOptionValueAssign200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productOptionValueDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionValueDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to productOptionValueUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productOptionValueUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
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
     * @params response Response returned by the server for a request to productPriceAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productPriceAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartValidate200Response >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productPriceDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productPriceDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to productPriceUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productPriceUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
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
     * @params response Response returned by the server for a request to productReviewList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productReviewListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelResponseProductReviewList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelResponseProductReviewList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductReviewList", ""
            ) as ModelResponseProductReviewList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelResponseProductReviewList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelResponseProductReviewList", ""
            ) as ModelResponseProductReviewList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productStoreAssign
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productStoreAssignWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
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
     * @params response Response returned by the server for a request to productTaxAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productTaxAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductTaxAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductTaxAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductTaxAdd200Response", ""
            ) as ProductTaxAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductTaxAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductTaxAdd200Response", ""
            ) as ProductTaxAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
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
     * @params response Response returned by the server for a request to productUpdateBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productUpdateBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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
     * @params response Response returned by the server for a request to productVariantAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductVariantAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductVariantAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantAdd200Response", ""
            ) as ProductVariantAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductVariantAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantAdd200Response", ""
            ) as ProductVariantAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productVariantAddBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantAddBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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
     * @params response Response returned by the server for a request to productVariantCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantCountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductVariantCount200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductVariantCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantCount200Response", ""
            ) as ProductVariantCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductVariantCount200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantCount200Response", ""
            ) as ProductVariantCount200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productVariantDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeValueDelete200Response >> {
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
     * @params response Response returned by the server for a request to productVariantDeleteBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantDeleteBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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
     * @params response Response returned by the server for a request to productVariantImageAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantImageAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductVariantImageAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductVariantImageAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantImageAdd200Response", ""
            ) as ProductVariantImageAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductVariantImageAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantImageAdd200Response", ""
            ) as ProductVariantImageAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productVariantImageDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantImageDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to productVariantInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductInfo200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductInfo200Response", ""
            ) as ProductInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductInfo200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductInfo200Response", ""
            ) as ProductInfo200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productVariantList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductVariantList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductVariantList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantList200Response", ""
            ) as ProductVariantList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductVariantList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductVariantList200Response", ""
            ) as ProductVariantList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productVariantPriceAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantPriceAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CartValidate200Response >> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to productVariantPriceDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantPriceDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttributeDelete200Response >> {
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
     * @params response Response returned by the server for a request to productVariantPriceUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantPriceUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
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
     * @params response Response returned by the server for a request to productVariantUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
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
     * @params response Response returned by the server for a request to productVariantUpdateBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async productVariantUpdateBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryAddBatch200Response >> {
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

}
