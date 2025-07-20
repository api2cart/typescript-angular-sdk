# .TaxApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxClassInfo**](TaxApi.md#taxClassInfo) | **GET** /tax.class.info.json | tax.class.info
[**taxClassList**](TaxApi.md#taxClassList) | **GET** /tax.class.list.json | tax.class.list


# **taxClassInfo**
> ModelResponseTaxClassInfo taxClassInfo()

Use this method to get information about a tax class and its rates. It allows you to calculate the tax percentage for a specific customer\'s address. This information contains relatively static data that rarely changes, so API2Cart may cache certain data to reduce the load on the store and speed up request execution. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, use the cart.validate method.

### Example


```typescript
import { createConfiguration, TaxApi } from '';
import type { TaxApiTaxClassInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaxApi(configuration);

const request: TaxApiTaxClassInfoRequest = {
    // Retrieves taxes specified by class id
  taxClassId: "9",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{id,name,tax,tax_rates{id,countries{id,name,states},cities,address,zip_codes{is_range,range,fields}}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "tax_class_id,tax",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "tax_class_id,tax",
};

const data = await apiInstance.taxClassInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxClassId** | [**string**] | Retrieves taxes specified by class id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'tax_class_id,name,avail'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseTaxClassInfo**

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

# **taxClassList**
> ModelResponseTaxClassList taxClassList()

Get list of tax classes from your store.

### Example


```typescript
import { createConfiguration, TaxApi } from '';
import type { TaxApiTaxClassListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaxApi(configuration);

const request: TaxApiTaxClassListRequest = {
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Store Id (optional)
  storeId: "1",
    // Entity search that is specified by some value (optional)
  findValue: "tax",
    // Tax class search that is specified by field (optional)
  findWhere: "name",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result}",
};

const data = await apiInstance.taxClassList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Tax class search that is specified by field | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to '{return_code,return_message,pagination,result}'


### Return type

**ModelResponseTaxClassList**

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


