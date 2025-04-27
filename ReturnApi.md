# .ReturnApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**returnActionList**](ReturnApi.md#returnActionList) | **GET** /return.action.list.json | return.action.list
[**returnCount**](ReturnApi.md#returnCount) | **GET** /return.count.json | return.count
[**returnInfo**](ReturnApi.md#returnInfo) | **GET** /return.info.json | return.info
[**returnList**](ReturnApi.md#returnList) | **GET** /return.list.json | return.list
[**returnReasonList**](ReturnApi.md#returnReasonList) | **GET** /return.reason.list.json | return.reason.list
[**returnStatusList**](ReturnApi.md#returnStatusList) | **GET** /return.status.list.json | return.status.list


# **returnActionList**
> ReturnActionList200Response returnActionList()

Retrieve list of return actions

### Example


```typescript
import { createConfiguration, ReturnApi } from '';

const configuration = createConfiguration();
const apiInstance = new ReturnApi(configuration);

const request = {};

const data = await apiInstance.returnActionList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ReturnActionList200Response**

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

# **returnCount**
> ReturnCount200Response returnCount()

Count returns in store

### Example


```typescript
import { createConfiguration, ReturnApi } from '';
import type { ReturnApiReturnCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReturnApi(configuration);

const request: ReturnApiReturnCountRequest = {
    // Counts return requests specified by order ids (optional)
  orderIds: "24,25",
    // Counts return requests quantity specified by customer id (optional)
  customerId: "5",
    // Store Id (optional)
  storeId: "1",
    // Defines status (optional)
  status: "disabled",
    // Retrieves returns specified by return type (optional)
  returnType: "FBA",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable report cache for current request (optional)
  disableReportCache: false,
};

const data = await apiInstance.returnCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderIds** | [**string**] | Counts return requests specified by order ids | (optional) defaults to undefined
 **customerId** | [**string**] | Counts return requests quantity specified by customer id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **status** | [**string**] | Defines status | (optional) defaults to undefined
 **returnType** | [**string**] | Retrieves returns specified by return type | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false


### Return type

**ReturnCount200Response**

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

# **returnInfo**
> ReturnInfo200Response returnInfo()

Retrieve return information.

### Example


```typescript
import { createConfiguration, ReturnApi } from '';
import type { ReturnApiReturnInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReturnApi(configuration);

const request: ReturnApiReturnInfoRequest = {
    // Entity id
  id: "10",
    // Defines the order id (optional)
  orderId: "25",
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,result}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,order_products",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,order_id",
};

const data = await apiInstance.returnInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **orderId** | [**string**] | Defines the order id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,order_products'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ReturnInfo200Response**

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

# **returnList**
> ModelResponseReturnList returnList()

Get list of return requests from store.

### Example


```typescript
import { createConfiguration, ReturnApi } from '';
import type { ReturnApiReturnListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReturnApi(configuration);

const request: ReturnApiReturnListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Defines the order id (optional)
  orderId: "25",
    // Retrieves return requests specified by order ids (optional)
  orderIds: "24,25",
    // Retrieves return requests specified by customer id (optional)
  customerId: "5",
    // Store Id (optional)
  storeId: "1",
    // Defines status (optional)
  status: "disabled",
    // Retrieves returns specified by return type (optional)
  returnType: "FBA",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,pagination,result}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,order_products",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,order_id",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable report cache for current request (optional)
  disableReportCache: false,
};

const data = await apiInstance.returnList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **orderId** | [**string**] | Defines the order id | (optional) defaults to undefined
 **orderIds** | [**string**] | Retrieves return requests specified by order ids | (optional) defaults to undefined
 **customerId** | [**string**] | Retrieves return requests specified by customer id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **status** | [**string**] | Defines status | (optional) defaults to undefined
 **returnType** | [**string**] | Retrieves returns specified by return type | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,order_products'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false


### Return type

**ModelResponseReturnList**

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

# **returnReasonList**
> ReturnReasonList200Response returnReasonList()

Retrieve list of return reasons

### Example


```typescript
import { createConfiguration, ReturnApi } from '';
import type { ReturnApiReturnReasonListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReturnApi(configuration);

const request: ReturnApiReturnReasonListRequest = {
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.returnReasonList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**ReturnReasonList200Response**

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

# **returnStatusList**
> ReturnStatusList200Response returnStatusList()

Retrieve list of statuses

### Example


```typescript
import { createConfiguration, ReturnApi } from '';

const configuration = createConfiguration();
const apiInstance = new ReturnApi(configuration);

const request = {};

const data = await apiInstance.returnStatusList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ReturnStatusList200Response**

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


