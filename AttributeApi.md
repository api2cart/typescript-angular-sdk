# .AttributeApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attributeAdd**](AttributeApi.md#attributeAdd) | **POST** /attribute.add.json | attribute.add
[**attributeAssignGroup**](AttributeApi.md#attributeAssignGroup) | **POST** /attribute.assign.group.json | attribute.assign.group
[**attributeAssignSet**](AttributeApi.md#attributeAssignSet) | **POST** /attribute.assign.set.json | attribute.assign.set
[**attributeAttributesetList**](AttributeApi.md#attributeAttributesetList) | **GET** /attribute.attributeset.list.json | attribute.attributeset.list
[**attributeCount**](AttributeApi.md#attributeCount) | **GET** /attribute.count.json | attribute.count
[**attributeDelete**](AttributeApi.md#attributeDelete) | **DELETE** /attribute.delete.json | attribute.delete
[**attributeGroupList**](AttributeApi.md#attributeGroupList) | **GET** /attribute.group.list.json | attribute.group.list
[**attributeInfo**](AttributeApi.md#attributeInfo) | **GET** /attribute.info.json | attribute.info
[**attributeList**](AttributeApi.md#attributeList) | **GET** /attribute.list.json | attribute.list
[**attributeTypeList**](AttributeApi.md#attributeTypeList) | **GET** /attribute.type.list.json | attribute.type.list
[**attributeUnassignGroup**](AttributeApi.md#attributeUnassignGroup) | **POST** /attribute.unassign.group.json | attribute.unassign.group
[**attributeUnassignSet**](AttributeApi.md#attributeUnassignSet) | **POST** /attribute.unassign.set.json | attribute.unassign.set
[**attributeUpdate**](AttributeApi.md#attributeUpdate) | **PUT** /attribute.update.json | attribute.update
[**attributeValueAdd**](AttributeApi.md#attributeValueAdd) | **POST** /attribute.value.add.json | attribute.value.add
[**attributeValueDelete**](AttributeApi.md#attributeValueDelete) | **DELETE** /attribute.value.delete.json | attribute.value.delete
[**attributeValueUpdate**](AttributeApi.md#attributeValueUpdate) | **PUT** /attribute.value.update.json | attribute.value.update


# **attributeAdd**
> AttributeAdd200Response attributeAdd()

Add new attribute

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeAddRequest = {
    // Defines attribute\'s type
  type: "text",
    // Defines attributes\'s name
  name: "Specification",
    // Entity code (optional)
  code: "code",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Set visibility status (optional)
  visible: true,
    // Defines if the option is required (optional)
  required: true,
    // Attribute`s position (optional)
  position: 5,
    // Filter by attribute_group_id (optional)
  attributeGroupId: "202",
    // Attribute saving scope (optional)
  isGlobal: "Global",
    // Use attribute in Quick Search (optional)
  isSearchable: false,
    // Use In Layered Navigation (optional)
  isFilterable: "No",
    // Comparable on Front-end (optional)
  isComparable: true,
    // Allow HTML Tags on Frontend (optional)
  isHtmlAllowedOnFront: true,
    // Use In Search Results Layered Navigation (optional)
  isFilterableInSearch: true,
    // Use To Create Configurable Product (optional)
  isConfigurable: true,
    // Use in Advanced Search (optional)
  isVisibleInAdvancedSearch: true,
    // Use for Promo Rule Conditions (optional)
  isUsedForPromoRules: true,
    // Used in Product Listing (optional)
  usedInProductListing: true,
    // Used for Sorting in Product Listing (optional)
  usedForSortBy: true,
    // Types of products which can have this attribute (optional)
  applyTo: "Global",
};

const data = await apiInstance.attributeAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**&#39;text&#39; | &#39;select&#39; | &#39;textarea&#39; | &#39;date&#39; | &#39;price&#39; | &#39;multiselect&#39; | &#39;boolean&#39;**]**Array<&#39;text&#39; &#124; &#39;select&#39; &#124; &#39;textarea&#39; &#124; &#39;date&#39; &#124; &#39;price&#39; &#124; &#39;multiselect&#39; &#124; &#39;boolean&#39;>** | Defines attribute\&#39;s type | defaults to undefined
 **name** | [**string**] | Defines attributes\&#39;s name | defaults to undefined
 **code** | [**string**] | Entity code | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **visible** | [**boolean**] | Set visibility status | (optional) defaults to false
 **required** | [**boolean**] | Defines if the option is required | (optional) defaults to false
 **position** | [**number**] | Attribute&#x60;s position | (optional) defaults to 0
 **attributeGroupId** | [**string**] | Filter by attribute_group_id | (optional) defaults to undefined
 **isGlobal** | [**string**] | Attribute saving scope | (optional) defaults to 'Store'
 **isSearchable** | [**boolean**] | Use attribute in Quick Search | (optional) defaults to false
 **isFilterable** | [**string**] | Use In Layered Navigation | (optional) defaults to 'No'
 **isComparable** | [**boolean**] | Comparable on Front-end | (optional) defaults to false
 **isHtmlAllowedOnFront** | [**boolean**] | Allow HTML Tags on Frontend | (optional) defaults to false
 **isFilterableInSearch** | [**boolean**] | Use In Search Results Layered Navigation | (optional) defaults to false
 **isConfigurable** | [**boolean**] | Use To Create Configurable Product | (optional) defaults to false
 **isVisibleInAdvancedSearch** | [**boolean**] | Use in Advanced Search | (optional) defaults to false
 **isUsedForPromoRules** | [**boolean**] | Use for Promo Rule Conditions | (optional) defaults to false
 **usedInProductListing** | [**boolean**] | Used in Product Listing | (optional) defaults to false
 **usedForSortBy** | [**boolean**] | Used for Sorting in Product Listing | (optional) defaults to false
 **applyTo** | [**string**] | Types of products which can have this attribute | (optional) defaults to 'all_types'


### Return type

**AttributeAdd200Response**

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

# **attributeAssignGroup**
> AttributeAssignGroup200Response attributeAssignGroup()

Assign attribute to the group

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeAssignGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeAssignGroupRequest = {
    // Entity id
  id: "10",
    // Attribute group_id
  groupId: "3",
    // Attribute set id (optional)
  attributeSetId: "4",
};

const data = await apiInstance.attributeAssignGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **groupId** | [**string**] | Attribute group_id | defaults to undefined
 **attributeSetId** | [**string**] | Attribute set id | (optional) defaults to undefined


### Return type

**AttributeAssignGroup200Response**

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

# **attributeAssignSet**
> AttributeAssignGroup200Response attributeAssignSet()

Assign attribute to the attribute set

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeAssignSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeAssignSetRequest = {
    // Entity id
  id: "10",
    // Attribute set id
  attributeSetId: "4",
    // Attribute group_id (optional)
  groupId: "3",
};

const data = await apiInstance.attributeAssignSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **attributeSetId** | [**string**] | Attribute set id | defaults to undefined
 **groupId** | [**string**] | Attribute group_id | (optional) defaults to undefined


### Return type

**AttributeAssignGroup200Response**

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

# **attributeAttributesetList**
> ModelResponseAttributeAttributesetList attributeAttributesetList()

Get attribute_set list

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeAttributesetListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeAttributesetListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,name",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,name",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result}",
};

const data = await apiInstance.attributeAttributesetList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined


### Return type

**ModelResponseAttributeAttributesetList**

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

# **attributeCount**
> AttributeCount200Response attributeCount()

Get attributes count

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeCountRequest = {
    // Defines attribute\'s type (optional)
  type: "text",
    // Filter items by attribute set id (optional)
  attributeSetId: "4",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Filter items by visibility status (optional)
  visible: true,
    // Defines if the option is required (optional)
  required: true,
    // True if attribute is system (optional)
  system: false,
};

const data = await apiInstance.attributeCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] | Defines attribute\&#39;s type | (optional) defaults to undefined
 **attributeSetId** | [**string**] | Filter items by attribute set id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **visible** | [**boolean**] | Filter items by visibility status | (optional) defaults to undefined
 **required** | [**boolean**] | Defines if the option is required | (optional) defaults to undefined
 **system** | [**boolean**] | True if attribute is system | (optional) defaults to undefined


### Return type

**AttributeCount200Response**

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

# **attributeDelete**
> AttributeDelete200Response attributeDelete()

Delete attribute from store

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeDeleteRequest = {
    // Entity id
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.attributeDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
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

# **attributeGroupList**
> ModelResponseAttributeGroupList attributeGroupList()

Get attribute group list

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeGroupListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeGroupListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Language id (optional)
  langId: "3",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,name",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,name",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result}",
    // Attribute set id (optional)
  attributeSetId: "4",
};

const data = await apiInstance.attributeGroupList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **attributeSetId** | [**string**] | Attribute set id | (optional) defaults to undefined


### Return type

**ModelResponseAttributeGroupList**

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

# **attributeInfo**
> AttributeInfo200Response attributeInfo()

Get information about a specific global attribute by its ID.

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeInfoRequest = {
    // Entity id
  id: "10",
    // Attribute set id (optional)
  attributeSetId: "4",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "force_all",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "name",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result}",
};

const data = await apiInstance.attributeInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **attributeSetId** | [**string**] | Attribute set id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'force_all'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined


### Return type

**AttributeInfo200Response**

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

# **attributeList**
> ModelResponseAttributeList attributeList()

Get a list of global attributes.

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Defines attribute\'s type (optional)
  type: "text",
    // Filter attributes by ids (optional)
  attributeIds: "1,2,3",
    // Filter items by attribute set id (optional)
  attributeSetId: "4",
    // Store Id (optional)
  storeId: "1",
    // Retrieves attributes on specified language id (optional)
  langId: "3",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,name",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,name",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,pagination,result}",
    // Filter items by visibility status (optional)
  visible: true,
    // Defines if the option is required (optional)
  required: true,
    // True if attribute is system (optional)
  system: false,
};

const data = await apiInstance.attributeList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **type** | [**string**] | Defines attribute\&#39;s type | (optional) defaults to undefined
 **attributeIds** | [**string**] | Filter attributes by ids | (optional) defaults to undefined
 **attributeSetId** | [**string**] | Filter items by attribute set id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Retrieves attributes on specified language id | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,code,type'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **visible** | [**boolean**] | Filter items by visibility status | (optional) defaults to undefined
 **required** | [**boolean**] | Defines if the option is required | (optional) defaults to undefined
 **system** | [**boolean**] | True if attribute is system | (optional) defaults to undefined


### Return type

**ModelResponseAttributeList**

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

# **attributeTypeList**
> AttributeTypeList200Response attributeTypeList()

Get list of supported attributes types

### Example


```typescript
import { createConfiguration, AttributeApi } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request = {};

const data = await apiInstance.attributeTypeList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AttributeTypeList200Response**

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

# **attributeUnassignGroup**
> AttributeUnassignGroup200Response attributeUnassignGroup()

Unassign attribute from group

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeUnassignGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeUnassignGroupRequest = {
    // Entity id
  id: "10",
    // Customer group_id
  groupId: "3",
};

const data = await apiInstance.attributeUnassignGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **groupId** | [**string**] | Customer group_id | defaults to undefined


### Return type

**AttributeUnassignGroup200Response**

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

# **attributeUnassignSet**
> AttributeUnassignGroup200Response attributeUnassignSet()

Unassign attribute from attribute set

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeUnassignSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeUnassignSetRequest = {
    // Entity id
  id: "10",
    // Attribute set id
  attributeSetId: "4",
};

const data = await apiInstance.attributeUnassignSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **attributeSetId** | [**string**] | Attribute set id | defaults to undefined


### Return type

**AttributeUnassignGroup200Response**

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

# **attributeUpdate**
> AttributeUpdate200Response attributeUpdate()

Update attribute data

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeUpdateRequest = {
    // Entity id
  id: "10",
    // Defines new attributes\'s name
  name: "Test name",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
};

const data = await apiInstance.attributeUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **name** | [**string**] | Defines new attributes\&#39;s name | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined


### Return type

**AttributeUpdate200Response**

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

# **attributeValueAdd**
> AttributeAdd200Response attributeValueAdd()

Add new value to attribute.

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeValueAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeValueAddRequest = {
    // Attribute Id
  attributeId: "156",
    // Defines attribute value\'s name
  name: "Test name",
    // Entity code (optional)
  code: "code",
    // Defines attribute value\'s description (optional)
  description: "Test value",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
};

const data = await apiInstance.attributeValueAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeId** | [**string**] | Attribute Id | defaults to undefined
 **name** | [**string**] | Defines attribute value\&#39;s name | defaults to undefined
 **code** | [**string**] | Entity code | (optional) defaults to undefined
 **description** | [**string**] | Defines attribute value\&#39;s description | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined


### Return type

**AttributeAdd200Response**

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

# **attributeValueDelete**
> AttributeValueDelete200Response attributeValueDelete()

Delete attribute value.

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeValueDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeValueDeleteRequest = {
    // Entity id
  id: "10",
    // Attribute Id
  attributeId: "156",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.attributeValueDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **attributeId** | [**string**] | Attribute Id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**AttributeValueDelete200Response**

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

# **attributeValueUpdate**
> AttributeUpdate200Response attributeValueUpdate()

Update attribute value.

### Example


```typescript
import { createConfiguration, AttributeApi } from '';
import type { AttributeApiAttributeValueUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AttributeApi(configuration);

const request: AttributeApiAttributeValueUpdateRequest = {
    // Defines attribute value\'s id
  id: "10",
    // Attribute Id
  attributeId: "156",
    // Defines attribute value\'s name (optional)
  name: "Test name",
    // Defines new attribute value\'s description (optional)
  description: "Test value",
    // Entity code (optional)
  code: "code",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
};

const data = await apiInstance.attributeValueUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Defines attribute value\&#39;s id | defaults to undefined
 **attributeId** | [**string**] | Attribute Id | defaults to undefined
 **name** | [**string**] | Defines attribute value\&#39;s name | (optional) defaults to undefined
 **description** | [**string**] | Defines new attribute value\&#39;s description | (optional) defaults to undefined
 **code** | [**string**] | Entity code | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined


### Return type

**AttributeUpdate200Response**

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


