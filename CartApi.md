# .CartApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartBridge**](CartApi.md#cartBridge) | **GET** /cart.bridge.json | cart.bridge
[**cartCatalogPriceRulesCount**](CartApi.md#cartCatalogPriceRulesCount) | **GET** /cart.catalog_price_rules.count.json | cart.catalog_price_rules.count
[**cartCatalogPriceRulesList**](CartApi.md#cartCatalogPriceRulesList) | **GET** /cart.catalog_price_rules.list.json | cart.catalog_price_rules.list
[**cartClearCache**](CartApi.md#cartClearCache) | **POST** /cart.clear_cache.json | cart.clear_cache
[**cartConfig**](CartApi.md#cartConfig) | **GET** /cart.config.json | cart.config
[**cartConfigUpdate**](CartApi.md#cartConfigUpdate) | **PUT** /cart.config.update.json | cart.config.update
[**cartCouponAdd**](CartApi.md#cartCouponAdd) | **POST** /cart.coupon.add.json | cart.coupon.add
[**cartCouponConditionAdd**](CartApi.md#cartCouponConditionAdd) | **POST** /cart.coupon.condition.add.json | cart.coupon.condition.add
[**cartCouponCount**](CartApi.md#cartCouponCount) | **GET** /cart.coupon.count.json | cart.coupon.count
[**cartCouponDelete**](CartApi.md#cartCouponDelete) | **DELETE** /cart.coupon.delete.json | cart.coupon.delete
[**cartCouponList**](CartApi.md#cartCouponList) | **GET** /cart.coupon.list.json | cart.coupon.list
[**cartCreate**](CartApi.md#cartCreate) | **POST** /cart.create.json | cart.create
[**cartDelete**](CartApi.md#cartDelete) | **DELETE** /cart.delete.json | cart.delete
[**cartDisconnect**](CartApi.md#cartDisconnect) | **GET** /cart.disconnect.json | cart.disconnect
[**cartGiftcardAdd**](CartApi.md#cartGiftcardAdd) | **POST** /cart.giftcard.add.json | cart.giftcard.add
[**cartGiftcardCount**](CartApi.md#cartGiftcardCount) | **GET** /cart.giftcard.count.json | cart.giftcard.count
[**cartGiftcardDelete**](CartApi.md#cartGiftcardDelete) | **DELETE** /cart.giftcard.delete.json | cart.giftcard.delete
[**cartGiftcardList**](CartApi.md#cartGiftcardList) | **GET** /cart.giftcard.list.json | cart.giftcard.list
[**cartInfo**](CartApi.md#cartInfo) | **GET** /cart.info.json | cart.info
[**cartList**](CartApi.md#cartList) | **GET** /cart.list.json | cart.list
[**cartMetaDataList**](CartApi.md#cartMetaDataList) | **GET** /cart.meta_data.list.json | cart.meta_data.list
[**cartMetaDataSet**](CartApi.md#cartMetaDataSet) | **POST** /cart.meta_data.set.json | cart.meta_data.set
[**cartMetaDataUnset**](CartApi.md#cartMetaDataUnset) | **DELETE** /cart.meta_data.unset.json | cart.meta_data.unset
[**cartMethods**](CartApi.md#cartMethods) | **GET** /cart.methods.json | cart.methods
[**cartPluginList**](CartApi.md#cartPluginList) | **GET** /cart.plugin.list.json | cart.plugin.list
[**cartScriptAdd**](CartApi.md#cartScriptAdd) | **POST** /cart.script.add.json | cart.script.add
[**cartScriptDelete**](CartApi.md#cartScriptDelete) | **DELETE** /cart.script.delete.json | cart.script.delete
[**cartScriptList**](CartApi.md#cartScriptList) | **GET** /cart.script.list.json | cart.script.list
[**cartShippingZonesList**](CartApi.md#cartShippingZonesList) | **GET** /cart.shipping_zones.list.json | cart.shipping_zones.list
[**cartValidate**](CartApi.md#cartValidate) | **GET** /cart.validate.json | cart.validate


# **cartBridge**
> CartBridge200Response cartBridge()

Get bridge key and store key

### Example


```typescript
import { createConfiguration, CartApi } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request = {};

const data = await apiInstance.cartBridge(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CartBridge200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cartCatalogPriceRulesCount**
> CartCatalogPriceRulesCount200Response cartCatalogPriceRulesCount()

Get count of cart catalog price rules discounts.

### Example


```typescript
import { createConfiguration, CartApi } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request = {};

const data = await apiInstance.cartCatalogPriceRulesCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CartCatalogPriceRulesCount200Response**

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

# **cartCatalogPriceRulesList**
> ModelResponseCartCatalogPriceRulesList cartCatalogPriceRulesList()

Get cart catalog price rules discounts.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartCatalogPriceRulesListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartCatalogPriceRulesListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves  catalog_price_rules by ids (optional)
  ids: "24,25",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{catalog_price_rules_count,catalog_price_rules{id,type,name,avail,usage_count,actions,conditions}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.cartCatalogPriceRulesList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **ids** | [**string**] | Retrieves  catalog_price_rules by ids | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,description'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCartCatalogPriceRulesList**

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

# **cartClearCache**
> CartClearCache200Response cartClearCache()

Clear cache on store.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartClearCacheRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartClearCacheRequest = {
    // Defines which cache should be cleared.
  cacheType: "storage_cache",
};

const data = await apiInstance.cartClearCache(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheType** | [**string**] | Defines which cache should be cleared. | defaults to undefined


### Return type

**CartClearCache200Response**

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

# **cartConfig**
> CartConfig200Response cartConfig()

Get list of cart configs

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartConfigRequest = {
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "store_name,store_url,db_prefix",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "store_name,store_url,db_prefix",
};

const data = await apiInstance.cartConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'store_name,store_url,db_prefix'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**CartConfig200Response**

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

# **cartConfigUpdate**
> CartConfigUpdate200Response cartConfigUpdate(cartConfigUpdate)

Use this API method to update custom data in client database.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartConfigUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartConfigUpdateRequest = {
  
  cartConfigUpdate: {
    dbTablesPrefix: "oc_",
    customFields: {},
    storeId: "1",
    userAgent: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
  },
};

const data = await apiInstance.cartConfigUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartConfigUpdate** | **CartConfigUpdate**|  |


### Return type

**CartConfigUpdate200Response**

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

# **cartCouponAdd**
> CartCouponAdd200Response cartCouponAdd(cartCouponAdd)

Use this method to create a coupon with specified conditions.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartCouponAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartCouponAddRequest = {
  
  cartCouponAdd: {
    code: "000_BIG_SALE_000",
    actionType: "percent",
    actionApplyTo: "order_total",
    actionScope: "matching_items",
    actionAmount: 15.5,
    codes: [
      "codes[0]=000_BIG_SALE_000&codes[1]=000_BIG_SALE_001&codes[2]=000_BIG_SALE_002",
    ],
    name: "Sale! -30%",
    dateStart: "2019-12-29 06:44:30",
    dateEnd: "2020-01-05 01:00:00",
    usageLimit: 99,
    usageLimitPerCustomer: 1,
    actionConditionEntity: "order",
    actionConditionKey: "product_id",
    actionConditionOperator: "ONE_OF",
    actionConditionValue: "17834222,45466663",
    includeTax: true,
    storeId: "1",
  },
};

const data = await apiInstance.cartCouponAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartCouponAdd** | **CartCouponAdd**|  |


### Return type

**CartCouponAdd200Response**

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

# **cartCouponConditionAdd**
> BasketLiveShippingServiceDelete200Response cartCouponConditionAdd()

Use this method to add additional conditions for coupon application.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartCouponConditionAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartCouponConditionAddRequest = {
    // Coupon Id
  couponId: "45845",
    // Defines condition entity type
  entity: "order",
    // Defines condition entity attribute key
  key: "subtotal",
    // Defines condition operator
  operator: "==",
    // Defines condition value, can be comma separated according to the operator.
  value: "2",
    // Defines condition operator (optional)
  target: "coupon_action",
    // Indicates whether to apply a discount for taxes. (optional)
  includeTax: true,
    // Indicates whether to apply a discount for shipping. (optional)
  includeShipping: true,
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.cartCouponConditionAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponId** | [**string**] | Coupon Id | defaults to undefined
 **entity** | [**&#39;order&#39; | &#39;order_shipping_address&#39; | &#39;product&#39; | &#39;customer&#39;**]**Array<&#39;order&#39; &#124; &#39;order_shipping_address&#39; &#124; &#39;product&#39; &#124; &#39;customer&#39;>** | Defines condition entity type | defaults to undefined
 **key** | [**&#39;total&#39; | &#39;subtotal&#39; | &#39;shipping_total&#39; | &#39;total_quantity&#39; | &#39;total_weight&#39; | &#39;country&#39; | &#39;product_id&#39; | &#39;variant_id&#39; | &#39;category_id&#39; | &#39;customer_id&#39; | &#39;item_price&#39; | &#39;item_total_price&#39; | &#39;item_quantity&#39; | &#39;carrier_id&#39;**]**Array<&#39;total&#39; &#124; &#39;subtotal&#39; &#124; &#39;shipping_total&#39; &#124; &#39;total_quantity&#39; &#124; &#39;total_weight&#39; &#124; &#39;country&#39; &#124; &#39;product_id&#39; &#124; &#39;variant_id&#39; &#124; &#39;category_id&#39; &#124; &#39;customer_id&#39; &#124; &#39;item_price&#39; &#124; &#39;item_total_price&#39; &#124; &#39;item_quantity&#39; &#124; &#39;carrier_id&#39;>** | Defines condition entity attribute key | defaults to undefined
 **operator** | [**string**] | Defines condition operator | defaults to undefined
 **value** | [**string**] | Defines condition value, can be comma separated according to the operator. | defaults to undefined
 **target** | [**string**] | Defines condition operator | (optional) defaults to 'coupon_prerequisite'
 **includeTax** | [**boolean**] | Indicates whether to apply a discount for taxes. | (optional) defaults to false
 **includeShipping** | [**boolean**] | Indicates whether to apply a discount for shipping. | (optional) defaults to false
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


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

# **cartCouponCount**
> CartCouponCount200Response cartCouponCount()

This method allows you to get the number of coupons. On some platforms, you can filter the coupons by the date they were active.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartCouponCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartCouponCountRequest = {
    // Store Id (optional)
  storeId: "1",
    // Defines category\'s visibility status (optional)
  avail: false,
    // Filter entity by date_start (greater or equal) (optional)
  dateStartFrom: "2016-12-29 16:44:30",
    // Filter entity by date_start (less or equal) (optional)
  dateStartTo: "2016-12-29 16:44:30",
    // Filter entity by date_end (greater or equal) (optional)
  dateEndFrom: "2016-12-29 16:44:30",
    // Filter entity by date_end (less or equal) (optional)
  dateEndTo: "2016-12-29 16:44:30",
};

const data = await apiInstance.cartCouponCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **avail** | [**boolean**] | Defines category\&#39;s visibility status | (optional) defaults to true
 **dateStartFrom** | [**string**] | Filter entity by date_start (greater or equal) | (optional) defaults to undefined
 **dateStartTo** | [**string**] | Filter entity by date_start (less or equal) | (optional) defaults to undefined
 **dateEndFrom** | [**string**] | Filter entity by date_end (greater or equal) | (optional) defaults to undefined
 **dateEndTo** | [**string**] | Filter entity by date_end (less or equal) | (optional) defaults to undefined


### Return type

**CartCouponCount200Response**

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

# **cartCouponDelete**
> AttributeDelete200Response cartCouponDelete()

Delete coupon

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartCouponDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartCouponDeleteRequest = {
    // Entity id
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.cartCouponDelete(request);
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

# **cartCouponList**
> ModelResponseCartCouponList cartCouponList()

Get cart coupon discounts.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartCouponListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartCouponListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Filter coupons by ids (optional)
  couponsIds: "1,2,3",
    // Filter coupons by store id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Filter coupons by avail status (optional)
  avail: false,
    // Filter entity by date_start (greater or equal) (optional)
  dateStartFrom: "2016-12-29 16:44:30",
    // Filter entity by date_start (less or equal) (optional)
  dateStartTo: "2016-12-29 16:44:30",
    // Filter entity by date_end (greater or equal) (optional)
  dateEndFrom: "2016-12-29 16:44:30",
    // Filter entity by date_end (less or equal) (optional)
  dateEndTo: "2016-12-29 16:44:30",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{pagination,result{coupon_count,coupon{id,code,name,conditions,actions{scope,amount,conditions{id,value,sub-conditions}},date_start,avail}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,code,type,amount",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "usage_history,type",
};

const data = await apiInstance.cartCouponList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **couponsIds** | [**string**] | Filter coupons by ids | (optional) defaults to undefined
 **storeId** | [**string**] | Filter coupons by store id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **avail** | [**boolean**] | Filter coupons by avail status | (optional) defaults to undefined
 **dateStartFrom** | [**string**] | Filter entity by date_start (greater or equal) | (optional) defaults to undefined
 **dateStartTo** | [**string**] | Filter entity by date_start (less or equal) | (optional) defaults to undefined
 **dateEndFrom** | [**string**] | Filter entity by date_end (greater or equal) | (optional) defaults to undefined
 **dateEndTo** | [**string**] | Filter entity by date_end (less or equal) | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,code,name,description'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCartCouponList**

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

# **cartCreate**
> AccountCartAdd200Response cartCreate(cartCreate)

Add store to the account

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartCreateRequest = {
  
  cartCreate: {
    cartId: "Opencart14",
    storeUrl: "http://mystore.com",
    bridgeUrl: "https://your-store.com/custom/bridge/path/bridge.php",
    storeRoot: "/home/www/stores/magento1922",
    storeKey: "ab37fc230bc5df63a5be1b11220949be",
    sharedSecret: "gmz3iz45x2",
    validateVersion: true,
    verify: false,
    dbTablesPrefix: "oc_",
    userAgent: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
    ftpHost: "ftp.mystore.com",
    ftpUser: "user",
    ftpPassword: "G4}q215D4_H9$Be",
    ftpPort: 22,
    ftpStoreDir: "/public",
    apiKey3dcart: "82cc921c6a5c67082cc921c6a5c6707e1d6e6862ba3201a",
    adminAccount: "admin",
    apiPath: "http://mystore.bigcommerce.com/api/v1",
    apiKeyBigcommerce: "6b89704cd75738cb0f9f6468d5462aba",
    clientId: "p1r37bt131z86675nofv9xmhietoe4t",
    accessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    context: "stores/etplnf8o8v",
    accessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    apiKeyShopify: "bbca57d8ff3c3677128112c15556d9e3",
    apiPassword: "860f3a6fc87632301a42cd88e4b5ab3d",
    accessTokenShopify: "igse8e4rdmzkxdi937qe69d59en1imw",
    apiKey: "bbca57d8ff3c3677128112c15556d9e3",
    apiUsername: "mylogin",
    encryptedPassword: "7943CA5F3990E00D9A4CCF0BD998211F",
    login: "admin",
    apiUserAdnsf: "admin",
    apiPass: "f6471ef78f72b41849a8b8b67791b0b5",
    privateKey: "2xo0m9ib5ty7rv84num9uic3e9mio0cy73nsdey7e5270",
    appToken: "82cc921c6a5c67082cc921c6a5c6707e1d6e6862ba3201a",
    etsyKeystring: "a9psel85v1wy5faeyjw03y0r",
    etsySharedSecret: "gmz3iz45x2",
    tokenSecret: "igse8e4rdmzkxdi937qe69d59en1imw",
    etsyClientId: "w0fi0igk2w29bjcd7ydr2s35",
    etsyRefreshToken: "223577551.L07_RE-y7unmKf2dox4djsHkVxwpUfs1ikG_uQmHhF-aASEReNn_Qns1Wqn3dDa0ZMxrt9CIael3dgudeDZb31ZUdS",
    ebayClientId: "a9psel85v1wy5faeyjw03y0r",
    ebayClientSecret: "gmz3iz45x2",
    ebayRuname: "gmz3iz45x2",
    ebayAccessToken: "v^1.1#i ... AjRV4yNjA=",
    ebayRefreshToken: "v^1.1#i ... rAewqVasdA=",
    ebayEnvironment: "sandbox",
    ebaySiteId: 101,
    dwClientId: "b849eb85-v8b9-1dw8-9fe2-97e1d6ffc7b0",
    dwApiPass: "testpassword",
    demandwareUserName: "admin",
    demandwareUserPassword: "12345",
    storeId: "1",
    sellerId: "A9PSDFGFGHFOQD",
    environment: "sandbox",
    hybrisClientId: "api_client_1",
    hybrisClientSecret: "secret_phrase_1",
    hybrisUsername: "admin",
    hybrisPassword: "nimda",
    hybrisWebsites: [
      {
        uid: "uid_example",
        url: "url_example",
        storeIds: [
          "storeIds_example",
        ],
      },
    ],
    walmartClientId: "423f6A24-123z-8654-989u-6fa96478289",
    walmartClientSecret: "1gf85fea-8974-2648-w12w-rt54284tdf54",
    walmartEnvironment: "production",
    walmartChannelType: "0f3e4dd4-0514-4346-b39d-af0e00ea066d",
    walmartRegion: "us",
    lightspeedApiKey: "cf5444729c2abd6b6a5d983691767cb5",
    lightspeedApiSecret: "2620ee52a8bc942f9d5d3a575f4d363e",
    shoplazzaAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    shoplazzaSharedSecret: "gmz3iz45x2",
    shopwareAccessKey: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    shopwareApiKey: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    shopwareApiSecret: "V3NYNWg2b1dZdHBUWDN1cmdKdGhnenp5enVJYlJ0WlJvOFF2bnQ",
    commercehqApiKey: "sJrD-LM0eddhe63rfgfva0dDydXfre4",
    commercehqApiPassword: "4Grr_ZCLNNoSUuhAjesKuchxo9SL",
    _3dcartPrivateKey: "7dba81f90bdbe25e7000e73214ca51b",
    _3dcartAccessToken: "4Grr_ZCLNNoSUuhAjesKuchxo9SL",
    wcConsumerKey: "ck_26d8e2ad604f3917e429df6961722282bdcf109d",
    wcConsumerSecret: "cs_931ced666118a15c5f7b4a33a15gf5589cbeba55",
    magentoConsumerKey: "ktv4n9rgrj0evjuy2t6p2xlb1f8u5pmy",
    magentoConsumerSecret: "a46abc3kxyinlbggy06i9g975xqo6gjq",
    magentoAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    magentoTokenSecret: "igse8e4rdmzkxdi937qe69d59en1imw",
    prestashopWebserviceKey: "CKJ1ZEWRJWRLTPVBQJ9FGGRORD4AGS96",
    wixAppId: "6b0b5b7b-7d87-45b5-bf34-ac6b438e63da",
    wixAppSecretKey: "316c0a09-f195-42be-74f6-a02cebb9cae6",
    wixInstanceId: "58b893a4-6b16-5c2f-qt78-qa3r61t32rt8",
    wixRefreshToken: `
        OAUTH2.eyJraWQiOiJkZ0x3cjNRMCIsImFsZyI6IkhTMjU2In0.
        eyJkYXRhIjoie1wiaWRcIjpcImJlZjM3MmRmLTUyNGItNDI3NS05M2RkL
        Tg4NDBlOTU3ZWU2OFwifSIsImlhdCI6MTY0ODA0NTEyNiwiZXhwIjoxNzExMTE3MTI2fQ.
        VRR2lGSbcTVmaArtmyyhy6o4WRDwTn-nlDCQpZ97eYw
      `,
    mercadoLibreAppId: "211188015100135",
    mercadoLibreAppSecretKey: "e2qoG2zklLlfP7cEngEJ94YjhkejkjAm",
    mercadoLibreRefreshToken: "TG-63h13529vb5464110188d2x9-703754376",
    zidClientId: 1234,
    zidClientSecret: "nl5l1lE0vxgv6cV111fHsdlOOIfb0Ms5IR7l4Igs",
    zidAccessToken: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    zidAuthorization: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    zidRefreshToken: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    flipkartClientId: "19414773883a13a850b6a52350b7246499a24",
    flipkartClientSecret: "nl5l1lE0vxgv6cV111fHsdlOOIfb0Ms5IR7l4Igs",
    allegroClientId: "2915e189ce3d23d23d2327d204ae6a0bd",
    allegroClientSecret: "DNHtqdL2WPIefeUhQWYgtXPS23fgbfgasdsGHHJGhg3RTFDQWFGZmVoFRT5IfkQj1E7eR5",
    allegroAccessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    allegroRefreshToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    allegroEnvironment: "sandbox",
  },
};

const data = await apiInstance.cartCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartCreate** | **CartCreate**|  |


### Return type

**AccountCartAdd200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cartDelete**
> CartDelete200Response cartDelete()

Remove store from API2Cart

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartDeleteRequest = {
    // Identifies if there is a necessity to delete bridge (optional)
  deleteBridge: true,
};

const data = await apiInstance.cartDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBridge** | [**boolean**] | Identifies if there is a necessity to delete bridge | (optional) defaults to true


### Return type

**CartDelete200Response**

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

# **cartDisconnect**
> CartDisconnect200Response cartDisconnect()

Disconnect with the store and clear store session data.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartDisconnectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartDisconnectRequest = {
    // Identifies if there is a necessity to delete bridge (optional)
  deleteBridge: true,
};

const data = await apiInstance.cartDisconnect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBridge** | [**boolean**] | Identifies if there is a necessity to delete bridge | (optional) defaults to false


### Return type

**CartDisconnect200Response**

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

# **cartGiftcardAdd**
> CartGiftcardAdd200Response cartGiftcardAdd()

Use this method to create a gift card for a specified amount.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartGiftcardAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartGiftcardAddRequest = {
    // Defines the gift card amount value.
  amount: 15.5,
    // Gift card code (optional)
  code: "GFT1 A4S5 AA11 RD61",
    // Gift card owner email (optional)
  ownerEmail: "jubari@hannsgroup.com",
    // Gift card recipient email (optional)
  recipientEmail: "jubari@hannsgroup.com",
    // Gift card recipient name (optional)
  recipientName: "John Doe",
    // Gift card owner name (optional)
  ownerName: "John Doe",
};

const data = await apiInstance.cartGiftcardAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | [**number**] | Defines the gift card amount value. | defaults to undefined
 **code** | [**string**] | Gift card code | (optional) defaults to undefined
 **ownerEmail** | [**string**] | Gift card owner email | (optional) defaults to undefined
 **recipientEmail** | [**string**] | Gift card recipient email | (optional) defaults to undefined
 **recipientName** | [**string**] | Gift card recipient name | (optional) defaults to undefined
 **ownerName** | [**string**] | Gift card owner name | (optional) defaults to undefined


### Return type

**CartGiftcardAdd200Response**

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

# **cartGiftcardCount**
> CartGiftcardCount200Response cartGiftcardCount()

Get gift cards count.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartGiftcardCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartGiftcardCountRequest = {
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.cartGiftcardCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**CartGiftcardCount200Response**

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

# **cartGiftcardDelete**
> AttributeDelete200Response cartGiftcardDelete()

Delete giftcard

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartGiftcardDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartGiftcardDeleteRequest = {
    // Entity id
  id: "10",
};

const data = await apiInstance.cartGiftcardDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined


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

# **cartGiftcardList**
> ModelResponseCartGiftCardList cartGiftcardList()

Get gift cards list.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartGiftcardListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartGiftcardListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{pagination,result{gift_card{id,code,amount,status}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.cartGiftcardList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,code,name'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCartGiftCardList**

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

# **cartInfo**
> CartInfo200Response cartInfo()

This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartInfoRequest = {
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{name,url,stores_info{store_id,name,currency{id,iso3},store_owner_info}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "name,url",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "name,url",
};

const data = await apiInstance.cartInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'store_name,store_url,db_prefix'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**CartInfo200Response**

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

# **cartList**
> CartList200Response cartList()

Get list of supported carts

### Example


```typescript
import { createConfiguration, CartApi } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request = {};

const data = await apiInstance.cartList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CartList200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cartMetaDataList**
> ModelResponseCartMetaDataList cartMetaDataList()

Using this method, you can get a list of metadata for various entities (products, options, customers, orders). Usually this is data created by third-party plugins.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartMetaDataListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartMetaDataListRequest = {
    // Entity Id
  entityId: "1",
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Entity (optional)
  entity: "order",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Key (optional)
  key: "subtotal",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{items{key,value}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.cartMetaDataList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | [**string**] | Entity Id | defaults to undefined
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **entity** | [**string**] | Entity | (optional) defaults to 'product'
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **key** | [**string**] | Key | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'key,value'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCartMetaDataList**

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

# **cartMetaDataSet**
> AttributeAdd200Response cartMetaDataSet()

Set meta data for a specific entity

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartMetaDataSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartMetaDataSetRequest = {
    // Entity Id
  entityId: "1",
    // Key
  key: "subtotal",
    // Value
  value: "2",
    // Metafield namespace
  namespace: "order",
    // Entity (optional)
  entity: "order",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
};

const data = await apiInstance.cartMetaDataSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | [**string**] | Entity Id | defaults to undefined
 **key** | [**string**] | Key | defaults to undefined
 **value** | [**string**] | Value | defaults to undefined
 **namespace** | [**string**] | Metafield namespace | defaults to undefined
 **entity** | [**string**] | Entity | (optional) defaults to 'product'
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

# **cartMetaDataUnset**
> BasketLiveShippingServiceDelete200Response cartMetaDataUnset()

Unset meta data for a specific entity

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartMetaDataUnsetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartMetaDataUnsetRequest = {
    // Entity Id
  entityId: "1",
    // Key
  key: "subtotal",
    // Entity id
  id: "10",
    // Entity (optional)
  entity: "order",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.cartMetaDataUnset(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityId** | [**string**] | Entity Id | defaults to undefined
 **key** | [**string**] | Key | defaults to undefined
 **id** | [**string**] | Entity id | defaults to undefined
 **entity** | [**string**] | Entity | (optional) defaults to 'product'
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


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

# **cartMethods**
> CartMethods200Response cartMethods()

Returns a list of supported API methods.

### Example


```typescript
import { createConfiguration, CartApi } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request = {};

const data = await apiInstance.cartMethods(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CartMethods200Response**

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

# **cartPluginList**
> CartPluginList200Response cartPluginList()

Get a list of third-party plugins installed on the store.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartPluginListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartPluginListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.cartPluginList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**CartPluginList200Response**

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

# **cartScriptAdd**
> CartScriptAdd200Response cartScriptAdd()

Add new script to the storefront

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartScriptAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartScriptAddRequest = {
    // The user-friendly script name (optional)
  name: "jQuery Minimized",
    // The user-friendly description (optional)
  description: "The Write Less, Do More, JavaScript Library",
    // An html string containing exactly one `script` tag. (optional)
  html: "&#x3C;script&#x3E;alert(&#x27;foo&#x27;)&#x3C;/script&#x3E;",
    // The URL of the remote script (optional)
  src: "https://js-aplenty.com/foo.js",
    // The load method to use for the script (optional)
  loadMethod: "async",
    // The page or pages on the online store where the script should be included (optional)
  scope: "all",
    // Event for run scripts (optional)
  events: "purchase_event",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.cartScriptAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The user-friendly script name | (optional) defaults to undefined
 **description** | [**string**] | The user-friendly description | (optional) defaults to undefined
 **html** | [**string**] | An html string containing exactly one &#x60;script&#x60; tag. | (optional) defaults to undefined
 **src** | [**string**] | The URL of the remote script | (optional) defaults to undefined
 **loadMethod** | [**string**] | The load method to use for the script | (optional) defaults to undefined
 **scope** | [**string**] | The page or pages on the online store where the script should be included | (optional) defaults to 'storefront'
 **events** | [**string**] | Event for run scripts | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**CartScriptAdd200Response**

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

# **cartScriptDelete**
> AttributeDelete200Response cartScriptDelete()

Remove script from the storefront

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartScriptDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartScriptDeleteRequest = {
    // Entity id
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.cartScriptDelete(request);
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

# **cartScriptList**
> ModelResponseCartScriptList cartScriptList()

Get scripts installed to the storefront

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartScriptListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartScriptListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves only scripts with specific ids (optional)
  scriptIds: "34023324,34024032",
    // Store Id (optional)
  storeId: "1",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{pagination,result{total_count,scripts{id,name,src,created_time{value}}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.cartScriptList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **scriptIds** | [**string**] | Retrieves only scripts with specific ids | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,description'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCartScriptList**

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

# **cartShippingZonesList**
> ModelResponseCartShippingZonesList cartShippingZonesList()

Get list of shipping zones

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartShippingZonesListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartShippingZonesListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{id,name,enabled,countries,shipping_methods{name,rates}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.cartShippingZonesList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,enabled'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseCartShippingZonesList**

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

# **cartValidate**
> CartValidate200Response cartValidate()

This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.

### Example


```typescript
import { createConfiguration, CartApi } from '';
import type { CartApiCartValidateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CartApi(configuration);

const request: CartApiCartValidateRequest = {
    // Specify if api2cart should validate cart version (optional)
  validateVersion: true,
};

const data = await apiInstance.cartValidate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateVersion** | [**boolean**] | Specify if api2cart should validate cart version | (optional) defaults to false


### Return type

**CartValidate200Response**

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


