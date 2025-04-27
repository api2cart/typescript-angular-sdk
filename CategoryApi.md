# .CategoryApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryAdd**](CategoryApi.md#categoryAdd) | **POST** /category.add.json | category.add
[**categoryAddBatch**](CategoryApi.md#categoryAddBatch) | **POST** /category.add.batch.json | category.add.batch
[**categoryAssign**](CategoryApi.md#categoryAssign) | **POST** /category.assign.json | category.assign
[**categoryCount**](CategoryApi.md#categoryCount) | **GET** /category.count.json | category.count
[**categoryDelete**](CategoryApi.md#categoryDelete) | **DELETE** /category.delete.json | category.delete
[**categoryFind**](CategoryApi.md#categoryFind) | **GET** /category.find.json | category.find
[**categoryImageAdd**](CategoryApi.md#categoryImageAdd) | **POST** /category.image.add.json | category.image.add
[**categoryImageDelete**](CategoryApi.md#categoryImageDelete) | **DELETE** /category.image.delete.json | category.image.delete
[**categoryInfo**](CategoryApi.md#categoryInfo) | **GET** /category.info.json | category.info
[**categoryList**](CategoryApi.md#categoryList) | **GET** /category.list.json | category.list
[**categoryUnassign**](CategoryApi.md#categoryUnassign) | **POST** /category.unassign.json | category.unassign
[**categoryUpdate**](CategoryApi.md#categoryUpdate) | **PUT** /category.update.json | category.update


# **categoryAdd**
> CategoryAdd200Response categoryAdd()

Add new category in store

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryAddRequest = {
    // Defines category\'s name that has to be added
  name: "Shoes",
    // Defines category\'s description (optional)
  description: "Test category",
    // Defines short description (optional)
  shortDescription: "Short description. This is very short description",
    // Adds categories specified by parent id (optional)
  parentId: "6",
    // Defines category\'s visibility status (optional)
  avail: false,
    // Entity\'s date creation (optional)
  createdTime: "2014-01-30 15:58:41",
    // Entity\'s date modification (optional)
  modifiedTime: "2014-07-30 15:58:41",
    // Sort number in the list (optional)
  sortOrder: 2,
    // Defines unique meta title for each entity (optional)
  metaTitle: "category,test",
    // Defines unique meta description of a entity (optional)
  metaDescription: "category,test",
    // Defines unique meta keywords for each entity (optional)
  metaKeywords: "category,test",
    // Defines unique category\'s URL for SEO (optional)
  seoUrl: "category,test",
    // Store Id (optional)
  storeId: "1",
    // Create category in the stores that is specified by comma-separated stores\' id (optional)
  storesIds: "1,2",
    // Language id (optional)
  langId: "3",
};

const data = await apiInstance.categoryAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Defines category\&#39;s name that has to be added | defaults to undefined
 **description** | [**string**] | Defines category\&#39;s description | (optional) defaults to undefined
 **shortDescription** | [**string**] | Defines short description | (optional) defaults to undefined
 **parentId** | [**string**] | Adds categories specified by parent id | (optional) defaults to undefined
 **avail** | [**boolean**] | Defines category\&#39;s visibility status | (optional) defaults to true
 **createdTime** | [**string**] | Entity\&#39;s date creation | (optional) defaults to undefined
 **modifiedTime** | [**string**] | Entity\&#39;s date modification | (optional) defaults to undefined
 **sortOrder** | [**number**] | Sort number in the list | (optional) defaults to 0
 **metaTitle** | [**string**] | Defines unique meta title for each entity | (optional) defaults to undefined
 **metaDescription** | [**string**] | Defines unique meta description of a entity | (optional) defaults to undefined
 **metaKeywords** | [**string**] | Defines unique meta keywords for each entity | (optional) defaults to undefined
 **seoUrl** | [**string**] | Defines unique category\&#39;s URL for SEO | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **storesIds** | [**string**] | Create category in the stores that is specified by comma-separated stores\&#39; id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined


### Return type

**CategoryAdd200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryAddBatch**
> CategoryAddBatch200Response categoryAddBatch(categoryAddBatch)

Add new categories to the store.

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryAddBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryAddBatchRequest = {
  
  categoryAddBatch: {
    payload: [
      {
        name: "name_example",
        avail: true,
        description: "description_example",
        metaTitle: "metaTitle_example",
        metaDescription: "metaDescription_example",
        metaKeywords: [
          "metaKeywords_example",
        ],
        parentId: "parentId_example",
        sortOrder: 1,
        seoUrl: "seoUrl_example",
        storeId: "storeId_example",
        images: [
          {
            url: "url_example",
            imageName: "imageName_example",
            type: "type_example",
            label: "label_example",
          },
        ],
        storesIds: [
          "storesIds_example",
        ],
      },
    ],
  },
};

const data = await apiInstance.categoryAddBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryAddBatch** | **CategoryAddBatch**|  |


### Return type

**CategoryAddBatch200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryAssign**
> CartConfigUpdate200Response categoryAssign()

Assign category to product

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryAssignRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryAssignRequest = {
    // Defines category assign, specified by category id
  categoryId: "6",
    // Defines category assign to the product, specified by product id
  productId: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.categoryAssign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Defines category assign, specified by category id | defaults to undefined
 **productId** | [**string**] | Defines category assign to the product, specified by product id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**CartConfigUpdate200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryCount**
> CategoryCount200Response categoryCount()

Count categories in store.

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryCountRequest = {
    // Counts categories specified by parent id (optional)
  parentId: "6",
    // Counts category specified by store id (optional)
  storeId: "1",
    // Counts category specified by language id (optional)
  langId: "3",
    // Defines category\'s visibility status (optional)
  avail: false,
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // A categorization for the product (optional)
  productType: "BICYCLE",
    // Entity search that is specified by some value (optional)
  findValue: "Demo category 1",
    // Counts categories that are searched specified by field (optional)
  findWhere: "email",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable report cache for current request (optional)
  disableReportCache: false,
};

const data = await apiInstance.categoryCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | [**string**] | Counts categories specified by parent id | (optional) defaults to undefined
 **storeId** | [**string**] | Counts category specified by store id | (optional) defaults to undefined
 **langId** | [**string**] | Counts category specified by language id | (optional) defaults to undefined
 **avail** | [**boolean**] | Defines category\&#39;s visibility status | (optional) defaults to true
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **productType** | [**string**] | A categorization for the product | (optional) defaults to undefined
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Counts categories that are searched specified by field | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false


### Return type

**CategoryCount200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryDelete**
> CategoryDelete200Response categoryDelete()

Delete category in store

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryDeleteRequest = {
    // Defines category removal, specified by category id
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.categoryDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Defines category removal, specified by category id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**CategoryDelete200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryFind**
> CategoryFind200Response categoryFind()

Search category in store. \"Laptop\" is specified here by default.

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryFindRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryFindRequest = {
    // Entity search that is specified by some value
  findValue: "Demo category 1",
    // Entity search that is specified by the comma-separated unique fields (optional)
  findWhere: "name",
    // Entity search that is specified by comma-separated parameters (optional)
  findParams: "regex",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
};

const data = await apiInstance.categoryFind(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findValue** | [**string**] | Entity search that is specified by some value | defaults to undefined
 **findWhere** | [**string**] | Entity search that is specified by the comma-separated unique fields | (optional) defaults to 'name'
 **findParams** | [**string**] | Entity search that is specified by comma-separated parameters | (optional) defaults to 'whole_words'
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined


### Return type

**CategoryFind200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryImageAdd**
> CategoryImageAdd200Response categoryImageAdd()

Add image to category

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryImageAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryImageAddRequest = {
    // Defines category id where the image should be added
  categoryId: "6",
    // Defines image\'s name
  imageName: "bag-gray.png",
    // Defines URL of the image that has to be added
  url: "http://docs.api2cart.com/img/logo.png",
    // Defines image\'s types that are specified by comma-separated list
  type: "base",
    // Store Id (optional)
  storeId: "1",
    // Defines alternative text that has to be attached to the picture (optional)
  label: "This cool image",
    // Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. (optional)
  mime: "image/jpeg",
    // Defines image’s position in the list (optional)
  position: 5,
};

const data = await apiInstance.categoryImageAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Defines category id where the image should be added | defaults to undefined
 **imageName** | [**string**] | Defines image\&#39;s name | defaults to undefined
 **url** | [**string**] | Defines URL of the image that has to be added | defaults to undefined
 **type** | [**&#39;base&#39; | &#39;thumbnail&#39;**]**Array<&#39;base&#39; &#124; &#39;thumbnail&#39;>** | Defines image\&#39;s types that are specified by comma-separated list | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **label** | [**string**] | Defines alternative text that has to be attached to the picture | (optional) defaults to undefined
 **mime** | [**string**] | Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. | (optional) defaults to undefined
 **position** | [**number**] | Defines image’s position in the list | (optional) defaults to 0


### Return type

**CategoryImageAdd200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryImageDelete**
> AttributeDelete200Response categoryImageDelete()

Delete image

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryImageDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryImageDeleteRequest = {
    // Defines category id where the image should be deleted
  categoryId: "6",
    // Define image id
  imageId: "82950b84f468edff480680f99cedbe0d",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.categoryImageDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Defines category id where the image should be deleted | defaults to undefined
 **imageId** | [**string**] | Define image id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**AttributeDelete200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryInfo**
> CategoryInfo200Response categoryInfo()

Get category info about category ID*** or specify other category ID.

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryInfoRequest = {
    // Retrieves category\'s info specified by category id
  id: "10",
    // Retrieves category info  specified by store id (optional)
  storeId: "1",
    // Retrieves category info  specified by language id (optional)
  langId: "3",
    // The name of the requirements set for the provided schema. (optional)
  schemaType: "LISTING",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{id,name,parent_id,modified_at{value},images}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,parent_id,name",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,parent_id,name",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable report cache for current request (optional)
  disableReportCache: false,
};

const data = await apiInstance.categoryInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Retrieves category\&#39;s info specified by category id | defaults to undefined
 **storeId** | [**string**] | Retrieves category info  specified by store id | (optional) defaults to undefined
 **langId** | [**string**] | Retrieves category info  specified by language id | (optional) defaults to undefined
 **schemaType** | [**string**] | The name of the requirements set for the provided schema. | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,parent_id,name,description'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false


### Return type

**CategoryInfo200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryList**
> ModelResponseCategoryList categoryList()

Get list of categories from store.

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves categories specified by store id (optional)
  storeId: "1",
    // Retrieves categorys specified by language id (optional)
  langId: "3",
    // Retrieves categories specified by parent id (optional)
  parentId: "6",
    // Defines category\'s visibility status (optional)
  avail: false,
    // A categorization for the product (optional)
  productType: "BICYCLE",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Entity search that is specified by some value (optional)
  findValue: "Demo category 1",
    // Category search that is specified by field (optional)
  findWhere: "name",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{categories_count,category{id,parent_id,modified_at{value},images}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,parent_id,name",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,parent_id,name",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable report cache for current request (optional)
  disableReportCache: false,
    // Disable cache for current request (optional)
  disableCache: false,
};

const data = await apiInstance.categoryList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **storeId** | [**string**] | Retrieves categories specified by store id | (optional) defaults to undefined
 **langId** | [**string**] | Retrieves categorys specified by language id | (optional) defaults to undefined
 **parentId** | [**string**] | Retrieves categories specified by parent id | (optional) defaults to undefined
 **avail** | [**boolean**] | Defines category\&#39;s visibility status | (optional) defaults to true
 **productType** | [**string**] | A categorization for the product | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Category search that is specified by field | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,parent_id,name,description'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false
 **disableCache** | [**boolean**] | Disable cache for current request | (optional) defaults to false


### Return type

**ModelResponseCategoryList**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryUnassign**
> CartConfigUpdate200Response categoryUnassign()

Unassign category to product

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryUnassignRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryUnassignRequest = {
    // Defines category unassign, specified by category id
  categoryId: "6",
    // Defines category unassign to the product, specified by product id
  productId: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.categoryUnassign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Defines category unassign, specified by category id | defaults to undefined
 **productId** | [**string**] | Defines category unassign to the product, specified by product id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**CartConfigUpdate200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoryUpdate**
> AccountConfigUpdate200Response categoryUpdate()

Update category in store

### Example


```typescript
import { createConfiguration, CategoryApi } from '';
import type { CategoryApiCategoryUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryApi(configuration);

const request: CategoryApiCategoryUpdateRequest = {
    // Defines category update specified by category id
  id: "10",
    // Defines new category’s name (optional)
  name: "NEW Shoes",
    // Defines new category\'s description (optional)
  description: "New test category",
    // Defines short description (optional)
  shortDescription: "Short description. This is very short description",
    // Defines new parent category id (optional)
  parentId: "6",
    // Defines category\'s visibility status (optional)
  avail: false,
    // Sort number in the list (optional)
  sortOrder: 2,
    // Entity\'s date modification (optional)
  modifiedTime: "2014-07-30 15:58:41",
    // Defines unique meta title for each entity (optional)
  metaTitle: "category,test",
    // Defines unique meta description of a entity (optional)
  metaDescription: "category,test",
    // Defines unique meta keywords for each entity (optional)
  metaKeywords: "category,test",
    // Defines unique category\'s URL for SEO (optional)
  seoUrl: "category,test",
    // Store Id (optional)
  storeId: "1",
    // Update category in the stores that is specified by comma-separated stores\' id (optional)
  storesIds: "1,2",
    // Language id (optional)
  langId: "3",
};

const data = await apiInstance.categoryUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Defines category update specified by category id | defaults to undefined
 **name** | [**string**] | Defines new category’s name | (optional) defaults to undefined
 **description** | [**string**] | Defines new category\&#39;s description | (optional) defaults to undefined
 **shortDescription** | [**string**] | Defines short description | (optional) defaults to undefined
 **parentId** | [**string**] | Defines new parent category id | (optional) defaults to undefined
 **avail** | [**boolean**] | Defines category\&#39;s visibility status | (optional) defaults to undefined
 **sortOrder** | [**number**] | Sort number in the list | (optional) defaults to undefined
 **modifiedTime** | [**string**] | Entity\&#39;s date modification | (optional) defaults to undefined
 **metaTitle** | [**string**] | Defines unique meta title for each entity | (optional) defaults to undefined
 **metaDescription** | [**string**] | Defines unique meta description of a entity | (optional) defaults to undefined
 **metaKeywords** | [**string**] | Defines unique meta keywords for each entity | (optional) defaults to undefined
 **seoUrl** | [**string**] | Defines unique category\&#39;s URL for SEO | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **storesIds** | [**string**] | Update category in the stores that is specified by comma-separated stores\&#39; id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined


### Return type

**AccountConfigUpdate200Response**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


