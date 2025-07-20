# .BatchApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchJobList**](BatchApi.md#batchJobList) | **GET** /batch.job.list.json | batch.job.list
[**batchJobResult**](BatchApi.md#batchJobResult) | **GET** /batch.job.result.json | batch.job.result


# **batchJobList**
> ModelResponseBatchJobList batchJobList()

Get list of recent jobs

### Example


```typescript
import { createConfiguration, BatchApi } from '';
import type { BatchApiBatchJobListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BatchApi(configuration);

const request: BatchApiBatchJobListRequest = {
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Filter batch jobs by ids (optional)
  ids: "24,25",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities according to their processing datetime (optional)
  processedFrom: "2100-08-29 13:45:52",
    // Retrieve entities according to their processing datetime (optional)
  processedTo: "2100-08-29 13:45:52",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result}",
};

const data = await apiInstance.batchJobList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **ids** | [**string**] | Filter batch jobs by ids | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **processedFrom** | [**string**] | Retrieve entities according to their processing datetime | (optional) defaults to undefined
 **processedTo** | [**string**] | Retrieve entities according to their processing datetime | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to '{return_code,return_message,pagination,result}'


### Return type

**ModelResponseBatchJobList**

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

# **batchJobResult**
> ResponseBatchJobResult batchJobResult()

Get job result data

### Example


```typescript
import { createConfiguration, BatchApi } from '';
import type { BatchApiBatchJobResultRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BatchApi(configuration);

const request: BatchApiBatchJobResultRequest = {
    // Entity id
  id: "10",
};

const data = await apiInstance.batchJobResult(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined


### Return type

**ResponseBatchJobResult**

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


