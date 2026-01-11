# .CustomerApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerAdd**](CustomerApi.md#customerAdd) | **POST** /customer.add.json | customer.add
[**customerAddressAdd**](CustomerApi.md#customerAddressAdd) | **POST** /customer.address.add.json | customer.address.add
[**customerAttributeList**](CustomerApi.md#customerAttributeList) | **GET** /customer.attribute.list.json | customer.attribute.list
[**customerCount**](CustomerApi.md#customerCount) | **GET** /customer.count.json | customer.count
[**customerDelete**](CustomerApi.md#customerDelete) | **DELETE** /customer.delete.json | customer.delete
[**customerFind**](CustomerApi.md#customerFind) | **GET** /customer.find.json | customer.find
[**customerGroupAdd**](CustomerApi.md#customerGroupAdd) | **POST** /customer.group.add.json | customer.group.add
[**customerGroupList**](CustomerApi.md#customerGroupList) | **GET** /customer.group.list.json | customer.group.list
[**customerInfo**](CustomerApi.md#customerInfo) | **GET** /customer.info.json | customer.info
[**customerList**](CustomerApi.md#customerList) | **GET** /customer.list.json | customer.list
[**customerUpdate**](CustomerApi.md#customerUpdate) | **PUT** /customer.update.json | customer.update
[**customerWishlistList**](CustomerApi.md#customerWishlistList) | **GET** /customer.wishlist.list.json | customer.wishlist.list


# **customerAdd**
> CustomerAdd200Response customerAdd(customerAdd)

Add customer into store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerAddRequest = {
  
  customerAdd: {
    email: "mail@example.com",
    firstName: "John",
    lastName: "Smith",
    password: "fd5gfd5g75fd",
    group: "Register",
    groupId: "3",
    groupIds: "1,2,3",
    status: "disabled",
    createdTime: "2014-01-30 15:58:41",
    modifiedTime: "2014-07-30 15:58:41",
    login: "makaka",
    lastLogin: "2013-02-26 15:00:00",
    birthDay: "2013-02-26 15:00:00",
    newsLetterSubscription: true,
    consents: [
      {
        type: "email",
        status: "status_example",
        optInLevel: "optInLevel_example",
      },
    ],
    gender: "male",
    website: "http://api2cart.com",
    fax: "54545787",
    company: "Apple",
    phone: "56686868654",
    note: "Customer note",
    country: "US",
    storeId: "1",
    idempotencyKey: "098f6bcd4621d373cade4e832627b4f6",
    address: [
      {
        addressBookType: "billing",
        addressBookFirstName: "John",
        addressBookLastName: "Smith",
        addressBookCompany: "Samsung",
        addressBookFax: "5758787",
        addressBookPhone: "5758787",
        addressBookPhoneMobile: "5758787",
        addressBookWebsite: "http://api2cart.com",
        addressBookAddress1: "Green str. 35",
        addressBookAddress2: "Green str. 35",
        addressBookCity: "Chicago",
        addressBookCountry: "US",
        addressBookState: "IL",
        addressBookPostcode: "12345",
        addressBookGender: "male",
        addressBookRegion: "Alabama",
        addressBookDefault: true,
        addressBookTaxId: "`12345678`",
        addressBookIdentificationNumber: "`123-456-7890`",
        addressBookAlias: "Address alias",
      },
    ],
  },
};

const data = await apiInstance.customerAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerAdd** | **CustomerAdd**|  |


### Return type

**CustomerAdd200Response**

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

# **customerAddressAdd**
> AttributeAdd200Response customerAddressAdd(customerAddressAdd)

Add customer address.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerAddressAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerAddressAddRequest = {
  
  customerAddressAdd: {
    customerId: "5",
    storeId: "1",
    firstName: "John",
    lastName: "Smith",
    company: "Apple",
    address1: "Green str. 35",
    address2: "Green str. 35",
    city: "Chicago",
    country: "US",
    state: "IL",
    postcode: "12345",
    identificationNumber: "`123-456-7890`",
    types: [
      "types[0]=billing&types[1]=shipping",
    ],
    _default: true,
    phone: "56686868654",
    phoneMobile: "56686868654",
    fax: "54545787",
    website: "http://api2cart.com",
    gender: "male",
    taxId: "`12345678`",
    alias: "Address alias",
    idempotencyKey: "098f6bcd4621d373cade4e832627b4f6",
  },
};

const data = await apiInstance.customerAddressAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerAddressAdd** | **CustomerAddressAdd**|  |


### Return type

**AttributeAdd200Response**

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

# **customerAttributeList**
> ModelResponseCustomerAttributeList customerAttributeList()

Get attributes for specific customer

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerAttributeListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerAttributeListRequest = {
    // Retrieves orders specified by customer id
  customerId: "5",
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,pagination,result}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.customerAttributeList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Retrieves orders specified by customer id | defaults to undefined
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'force_all'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCustomerAttributeList**

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

# **customerCount**
> CustomerCount200Response customerCount()

Get number of customers from store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerCountRequest = {
    // Counts customers specified by ids (optional)
  ids: "24,25",
    // Retrieve entities starting from the specified id. (optional)
  sinceId: "56",
    // The numeric ID of the customer list in Demandware. (optional)
  customerListId: "exampleListId",
    // Customer group_id (optional)
  groupId: "3",
    // Counts customer specified by store id (optional)
  storeId: "1",
    // Defines category\'s visibility status (optional)
  avail: false,
    // Indicates whether to include guest customers in the total count. (optional)
  includeGuests: true,
    // Entity search that is specified by some value (optional)
  findValue: "mail@gmail.com",
    // Counts customers that are searched specified by field (optional)
  findWhere: "email",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
};

const data = await apiInstance.customerCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**string**] | Counts customers specified by ids | (optional) defaults to undefined
 **sinceId** | [**string**] | Retrieve entities starting from the specified id. | (optional) defaults to undefined
 **customerListId** | [**string**] | The numeric ID of the customer list in Demandware. | (optional) defaults to undefined
 **groupId** | [**string**] | Customer group_id | (optional) defaults to undefined
 **storeId** | [**string**] | Counts customer specified by store id | (optional) defaults to undefined
 **avail** | [**boolean**] | Defines category\&#39;s visibility status | (optional) defaults to true
 **includeGuests** | [**boolean**] | Indicates whether to include guest customers in the total count. | (optional) defaults to false
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Counts customers that are searched specified by field | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined


### Return type

**CustomerCount200Response**

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

# **customerDelete**
> CustomerDelete200Response customerDelete()

Delete customer from store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerDeleteRequest = {
    // Identifies customer specified by the id
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.customerDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies customer specified by the id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**CustomerDelete200Response**

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

# **customerFind**
> CustomerFind200Response customerFind()

Find customers in store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerFindRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerFindRequest = {
    // Entity search that is specified by some value
  findValue: "mail@gmail.com",
    // Entity search that is specified by the comma-separated unique fields (optional)
  findWhere: "email",
    // Entity search that is specified by comma-separated parameters (optional)
  findParams: "regex",
    // Store Id (optional)
  storeId: "1",
    // Indicates whether to search among guest customers when looking up a customer. (optional)
  includeGuests: true,
};

const data = await apiInstance.customerFind(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findValue** | [**string**] | Entity search that is specified by some value | defaults to undefined
 **findWhere** | [**string**] | Entity search that is specified by the comma-separated unique fields | (optional) defaults to 'email'
 **findParams** | [**string**] | Entity search that is specified by comma-separated parameters | (optional) defaults to 'whole_words'
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **includeGuests** | [**boolean**] | Indicates whether to search among guest customers when looking up a customer. | (optional) defaults to false


### Return type

**CustomerFind200Response**

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

# **customerGroupAdd**
> CustomerGroupAdd200Response customerGroupAdd()

Create customer group.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerGroupAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerGroupAddRequest = {
    // Customer group name
  name: "new_group",
    // Store Id (optional)
  storeId: "1",
    // Assign customer group to the stores that is specified by comma-separated stores\' id (optional)
  storesIds: "1,2",
    // A unique identifier associated with a specific request. Repeated requests with the same <strong>idempotency_key</strong> return a cached response without re-executing the business logic. <strong>Please note that the cache lifetime is 15 minutes.</strong> (optional)
  idempotencyKey: "098f6bcd4621d373cade4e832627b4f6",
};

const data = await apiInstance.customerGroupAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Customer group name | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **storesIds** | [**string**] | Assign customer group to the stores that is specified by comma-separated stores\&#39; id | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier associated with a specific request. Repeated requests with the same &lt;strong&gt;idempotency_key&lt;/strong&gt; return a cached response without re-executing the business logic. &lt;strong&gt;Please note that the cache lifetime is 15 minutes.&lt;/strong&gt; | (optional) defaults to undefined


### Return type

**CustomerGroupAdd200Response**

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

# **customerGroupList**
> ModelResponseCustomerGroupList customerGroupList()

Get list of customers groups.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerGroupListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerGroupListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Groups that will be assigned to a customer (optional)
  groupIds: "1,2,3",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,pagination,result}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
    // Disable cache for current request (optional)
  disableCache: false,
};

const data = await apiInstance.customerGroupList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **groupIds** | [**string**] | Groups that will be assigned to a customer | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,additional_fields'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **disableCache** | [**boolean**] | Disable cache for current request | (optional) defaults to false


### Return type

**ModelResponseCustomerGroupList**

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

# **customerInfo**
> CustomerInfo200Response customerInfo()

Get customers\' details from store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerInfoRequest = {
    // Retrieves customer\'s info specified by customer id
  id: "10",
    // Retrieves customer info specified by store id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{id,parent_id,sku,upc,images,combination}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,email",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,email",
};

const data = await apiInstance.customerInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Retrieves customer\&#39;s info specified by customer id | defaults to undefined
 **storeId** | [**string**] | Retrieves customer info specified by store id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,email,first_name,last_name'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**CustomerInfo200Response**

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

# **customerList**
> ModelResponseCustomerList customerList()

Get list of customers from store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves customers specified by ids (optional)
  ids: "24,25",
    // Retrieve entities starting from the specified id. (optional)
  sinceId: "56",
    // The numeric ID of the customer list in Demandware. (optional)
  customerListId: "exampleListId",
    // Customer group_id (optional)
  groupId: "3",
    // Retrieves customers specified by store id (optional)
  storeId: "1",
    // Defines category\'s visibility status (optional)
  avail: false,
    // Indicates whether to include guest customers in the list results. (optional)
  includeGuests: true,
    // Entity search that is specified by some value (optional)
  findValue: "mail@gmail.com",
    // Customer search that is specified by field (optional)
  findWhere: "email",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Set field to sort by (optional)
  sortBy: "value_id",
    // Set sorting direction (optional)
  sortDirection: "asc",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{customer}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,email",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,email",
};

const data = await apiInstance.customerList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **ids** | [**string**] | Retrieves customers specified by ids | (optional) defaults to undefined
 **sinceId** | [**string**] | Retrieve entities starting from the specified id. | (optional) defaults to undefined
 **customerListId** | [**string**] | The numeric ID of the customer list in Demandware. | (optional) defaults to undefined
 **groupId** | [**string**] | Customer group_id | (optional) defaults to undefined
 **storeId** | [**string**] | Retrieves customers specified by store id | (optional) defaults to undefined
 **avail** | [**boolean**] | Defines category\&#39;s visibility status | (optional) defaults to true
 **includeGuests** | [**boolean**] | Indicates whether to include guest customers in the list results. | (optional) defaults to false
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Customer search that is specified by field | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **sortBy** | [**string**] | Set field to sort by | (optional) defaults to 'created_time'
 **sortDirection** | [**string**] | Set sorting direction | (optional) defaults to 'asc'
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,email,first_name,last_name'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCustomerList**

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

# **customerUpdate**
> AccountConfigUpdate200Response customerUpdate(customerUpdate)

Update information of customer in store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerUpdateRequest = {
  
  customerUpdate: {
    id: "10",
    groupId: "3",
    groupIds: "1,2,3",
    group: "Register",
    email: "mail@example.com",
    phone: "56686868654",
    firstName: "John",
    lastName: "Smith",
    birthDay: "2013-02-26 15:00:00",
    newsLetterSubscription: true,
    consents: [
      {
        type: "email",
        status: "status_example",
        optInLevel: "optInLevel_example",
      },
    ],
    tags: "tag1,tag2",
    gender: "male",
    note: "Customer note",
    status: "disabled",
    storeId: "1",
    idempotencyKey: "098f6bcd4621d373cade4e832627b4f6",
    address: [
      {
        addressBookId: "7805807034473",
        addressBookFirstName: "John",
        addressBookLastName: "Smith",
        addressBookCompany: "Samsung",
        addressBookFax: "5758787",
        addressBookPhone: "5758787",
        addressBookPhoneMobile: "5758787",
        addressBookAddress1: "Green str. 35",
        addressBookAddress2: "Green str. 35",
        addressBookCity: "Chicago",
        addressBookCountry: "US",
        addressBookState: "IL",
        addressBookPostcode: "12345",
        addressBookTaxId: "`12345678`",
        addressBookIdentificationNumber: "`123-456-7890`",
        addressBookGender: "male",
        addressBookAlias: "Address alias",
        addressBookType: "billing",
        addressBookDefault: true,
      },
    ],
  },
};

const data = await apiInstance.customerUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerUpdate** | **CustomerUpdate**|  |


### Return type

**AccountConfigUpdate200Response**

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

# **customerWishlistList**
> ModelResponseCustomerWishlistList customerWishlistList()

Get a Wish List of customer from the store.

### Example


```typescript
import { createConfiguration, CustomerApi } from '';
import type { CustomerApiCustomerWishlistListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomerApi(configuration);

const request: CustomerApiCustomerWishlistListRequest = {
    // Retrieves orders specified by customer id
  customerId: "5",
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Entity id (optional)
  id: "10",
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,pagination,result}",
};

const data = await apiInstance.customerWishlistList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Retrieves orders specified by customer id | defaults to undefined
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **id** | [**string**] | Entity id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to '{return_code,return_message,pagination,result}'


### Return type

**ModelResponseCustomerWishlistList**

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


