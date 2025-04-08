# .BasketApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**basketInfo**](BasketApi.md#basketInfo) | **GET** /basket.info.json | basket.info
[**basketItemAdd**](BasketApi.md#basketItemAdd) | **POST** /basket.item.add.json | basket.item.add
[**basketLiveShippingServiceCreate**](BasketApi.md#basketLiveShippingServiceCreate) | **POST** /basket.live_shipping_service.create.json | basket.live_shipping_service.create
[**basketLiveShippingServiceDelete**](BasketApi.md#basketLiveShippingServiceDelete) | **DELETE** /basket.live_shipping_service.delete.json | basket.live_shipping_service.delete
[**basketLiveShippingServiceList**](BasketApi.md#basketLiveShippingServiceList) | **GET** /basket.live_shipping_service.list.json | basket.live_shipping_service.list


# **basketInfo**
> BasketInfo200Response basketInfo()

Retrieve basket information.

### Example


```typescript
import { createConfiguration, BasketApi } from '';
import type { BasketApiBasketInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BasketApi(configuration);

const request: BasketApiBasketInfoRequest = {
    // Entity id
  id: "10",
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result}",
};

const data = await apiInstance.basketInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'force_all'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined


### Return type

**BasketInfo200Response**

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

# **basketItemAdd**
> BasketItemAdd200Response basketItemAdd()

Add item to basket

### Example


```typescript
import { createConfiguration, BasketApi } from '';
import type { BasketApiBasketItemAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BasketApi(configuration);

const request: BasketApiBasketItemAddRequest = {
    // Retrieves orders specified by customer id
  customerId: "5",
    // Defines id of the product which should be added to the basket
  productId: "10",
    // Defines product\'s variants specified by variant id (optional)
  variantId: "45",
    // Defines new items quantity (optional)
  quantity: 6,
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.basketItemAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Retrieves orders specified by customer id | defaults to undefined
 **productId** | [**string**] | Defines id of the product which should be added to the basket | defaults to undefined
 **variantId** | [**string**] | Defines product\&#39;s variants specified by variant id | (optional) defaults to undefined
 **quantity** | [**number**] | Defines new items quantity | (optional) defaults to 0
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**BasketItemAdd200Response**

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

# **basketLiveShippingServiceCreate**
> BasketLiveShippingServiceCreate200Response basketLiveShippingServiceCreate()

Create live shipping rate service.

### Example


```typescript
import { createConfiguration, BasketApi } from '';
import type { BasketApiBasketLiveShippingServiceCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BasketApi(configuration);

const request: BasketApiBasketLiveShippingServiceCreateRequest = {
    // Shipping Service Name
  name: "BestDelivery",
    // Callback url that returns shipping rates. It should be able to accept POST requests with json data.
  callback: "https://example.com/callback",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.basketLiveShippingServiceCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Shipping Service Name | defaults to undefined
 **callback** | [**string**] | Callback url that returns shipping rates. It should be able to accept POST requests with json data. | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**BasketLiveShippingServiceCreate200Response**

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

# **basketLiveShippingServiceDelete**
> BasketLiveShippingServiceDelete200Response basketLiveShippingServiceDelete()

Delete live shipping rate service.

### Example


```typescript
import { createConfiguration, BasketApi } from '';
import type { BasketApiBasketLiveShippingServiceDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BasketApi(configuration);

const request: BasketApiBasketLiveShippingServiceDeleteRequest = {
    // Entity id
  id: 5,
};

const data = await apiInstance.basketLiveShippingServiceDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Entity id | defaults to undefined


### Return type

**BasketLiveShippingServiceDelete200Response**

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

# **basketLiveShippingServiceList**
> BasketLiveShippingServiceList200Response basketLiveShippingServiceList()

Retrieve a list of live shipping rate services.

### Example


```typescript
import { createConfiguration, BasketApi } from '';
import type { BasketApiBasketLiveShippingServiceListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BasketApi(configuration);

const request: BasketApiBasketLiveShippingServiceListRequest = {
    // Store Id (optional)
  storeId: "1",
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
};

const data = await apiInstance.basketLiveShippingServiceList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10


### Return type

**BasketLiveShippingServiceList200Response**

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


