# .WebhookApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookCount**](WebhookApi.md#webhookCount) | **GET** /webhook.count.json | webhook.count
[**webhookCreate**](WebhookApi.md#webhookCreate) | **POST** /webhook.create.json | webhook.create
[**webhookDelete**](WebhookApi.md#webhookDelete) | **DELETE** /webhook.delete.json | webhook.delete
[**webhookEvents**](WebhookApi.md#webhookEvents) | **GET** /webhook.events.json | webhook.events
[**webhookList**](WebhookApi.md#webhookList) | **GET** /webhook.list.json | webhook.list
[**webhookUpdate**](WebhookApi.md#webhookUpdate) | **PUT** /webhook.update.json | webhook.update


# **webhookCount**
> WebhookCount200Response webhookCount()

Count registered webhooks on the store.

### Example


```typescript
import { createConfiguration, WebhookApi } from '';
import type { WebhookApiWebhookCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookApi(configuration);

const request: WebhookApiWebhookCountRequest = {
    // The entity you want to filter webhooks by (e.g. order or product) (optional)
  entity: "product",
    // The action you want to filter webhooks by (e.g. order or product) (optional)
  action: "add",
    // The webhook status you want to filter webhooks by (optional)
  active: true,
};

const data = await apiInstance.webhookCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | [**string**] | The entity you want to filter webhooks by (e.g. order or product) | (optional) defaults to undefined
 **action** | [**string**] | The action you want to filter webhooks by (e.g. order or product) | (optional) defaults to undefined
 **active** | [**boolean**] | The webhook status you want to filter webhooks by | (optional) defaults to undefined


### Return type

**WebhookCount200Response**

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

# **webhookCreate**
> BasketLiveShippingServiceCreate200Response webhookCreate()

Create webhook on the store and subscribe to it.

### Example


```typescript
import { createConfiguration, WebhookApi } from '';
import type { WebhookApiWebhookCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookApi(configuration);

const request: WebhookApiWebhookCreateRequest = {
    // Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
  entity: "product",
    // Specify what action (event) will trigger the webhook (e.g add, delete, or update)
  action: "add",
    // Callback url that returns shipping rates. It should be able to accept POST requests with json data. (optional)
  callback: "https://example.com/callback",
    // The name you give to the webhook (optional)
  label: "Super webhook",
    // Fields the webhook should send (optional)
  fields: "id, name, description",
    // Webhook status (optional)
  active: true,
    // Defines store id where the webhook should be assigned (optional)
  storeId: "1",
};

const data = await apiInstance.webhookCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | [**string**] | Specify the entity that you want to enable webhooks for (e.g product, order, customer, category) | defaults to undefined
 **action** | [**string**] | Specify what action (event) will trigger the webhook (e.g add, delete, or update) | defaults to undefined
 **callback** | [**string**] | Callback url that returns shipping rates. It should be able to accept POST requests with json data. | (optional) defaults to undefined
 **label** | [**string**] | The name you give to the webhook | (optional) defaults to undefined
 **fields** | [**string**] | Fields the webhook should send | (optional) defaults to 'force_all'
 **active** | [**boolean**] | Webhook status | (optional) defaults to true
 **storeId** | [**string**] | Defines store id where the webhook should be assigned | (optional) defaults to undefined


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

# **webhookDelete**
> AttributeDelete200Response webhookDelete()

Delete registered webhook on the store.

### Example


```typescript
import { createConfiguration, WebhookApi } from '';
import type { WebhookApiWebhookDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookApi(configuration);

const request: WebhookApiWebhookDeleteRequest = {
    // Webhook id
  id: "25",
};

const data = await apiInstance.webhookDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook id | defaults to undefined


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

# **webhookEvents**
> WebhookEvents200Response webhookEvents()

List all Webhooks that are available on this store.

### Example


```typescript
import { createConfiguration, WebhookApi } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookApi(configuration);

const request = {};

const data = await apiInstance.webhookEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WebhookEvents200Response**

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

# **webhookList**
> WebhookList200Response webhookList()

List registered webhook on the store.

### Example


```typescript
import { createConfiguration, WebhookApi } from '';
import type { WebhookApiWebhookListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookApi(configuration);

const request: WebhookApiWebhookListRequest = {
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,entity,callback,fields",
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // The entity you want to filter webhooks by (e.g. order or product) (optional)
  entity: "product",
    // The action you want to filter webhooks by (e.g. add, update, or delete) (optional)
  action: "add",
    // The webhook status you want to filter webhooks by (optional)
  active: true,
    // List of сomma-separated webhook ids (optional)
  ids: "3,14,25",
};

const data = await apiInstance.webhookList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,entity,action,callback'
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **entity** | [**string**] | The entity you want to filter webhooks by (e.g. order or product) | (optional) defaults to undefined
 **action** | [**string**] | The action you want to filter webhooks by (e.g. add, update, or delete) | (optional) defaults to undefined
 **active** | [**boolean**] | The webhook status you want to filter webhooks by | (optional) defaults to undefined
 **ids** | [**string**] | List of сomma-separated webhook ids | (optional) defaults to undefined


### Return type

**WebhookList200Response**

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

# **webhookUpdate**
> ProductImageUpdate200Response webhookUpdate()

Update Webhooks parameters.

### Example


```typescript
import { createConfiguration, WebhookApi } from '';
import type { WebhookApiWebhookUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookApi(configuration);

const request: WebhookApiWebhookUpdateRequest = {
    // Webhook id
  id: "25",
    // Callback url that returns shipping rates. It should be able to accept POST requests with json data. (optional)
  callback: "https://example.com/callback",
    // The name you give to the webhook (optional)
  label: "Super webhook",
    // Fields the webhook should send (optional)
  fields: "id, name, description",
    // Webhook status (optional)
  active: true,
};

const data = await apiInstance.webhookUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook id | defaults to undefined
 **callback** | [**string**] | Callback url that returns shipping rates. It should be able to accept POST requests with json data. | (optional) defaults to undefined
 **label** | [**string**] | The name you give to the webhook | (optional) defaults to undefined
 **fields** | [**string**] | Fields the webhook should send | (optional) defaults to undefined
 **active** | [**boolean**] | Webhook status | (optional) defaults to undefined


### Return type

**ProductImageUpdate200Response**

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


