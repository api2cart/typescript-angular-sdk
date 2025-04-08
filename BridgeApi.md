# .BridgeApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bridgeDelete**](BridgeApi.md#bridgeDelete) | **POST** /bridge.delete.json | bridge.delete
[**bridgeDownload**](BridgeApi.md#bridgeDownload) | **GET** /bridge.download.file | bridge.download
[**bridgeUpdate**](BridgeApi.md#bridgeUpdate) | **POST** /bridge.update.json | bridge.update


# **bridgeDelete**
> AttributeValueDelete200Response bridgeDelete()

Delete bridge from the store.

### Example


```typescript
import { createConfiguration, BridgeApi } from '';

const configuration = createConfiguration();
const apiInstance = new BridgeApi(configuration);

const request = {};

const data = await apiInstance.bridgeDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

# **bridgeDownload**
> HttpFile bridgeDownload()

Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.

### Example


```typescript
import { createConfiguration, BridgeApi } from '';
import type { BridgeApiBridgeDownloadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BridgeApi(configuration);

const request: BridgeApiBridgeDownloadRequest = {
    // Identifies if there is a necessity to download whitelabel bridge. (optional)
  whitelabel: true,
};

const data = await apiInstance.bridgeDownload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whitelabel** | [**boolean**] | Identifies if there is a necessity to download whitelabel bridge. | (optional) defaults to false


### Return type

**HttpFile**

### Authorization

[StoreKeyAuth](README.md#StoreKeyAuth), [ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bridgeUpdate**
> AttributeUpdate200Response bridgeUpdate()

Update bridge in the store.

### Example


```typescript
import { createConfiguration, BridgeApi } from '';

const configuration = createConfiguration();
const apiInstance = new BridgeApi(configuration);

const request = {};

const data = await apiInstance.bridgeUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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


