# .OrderApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderAbandonedList**](OrderApi.md#orderAbandonedList) | **GET** /order.abandoned.list.json | order.abandoned.list
[**orderAdd**](OrderApi.md#orderAdd) | **POST** /order.add.json | order.add
[**orderCalculate**](OrderApi.md#orderCalculate) | **POST** /order.calculate.json | order.calculate
[**orderCount**](OrderApi.md#orderCount) | **GET** /order.count.json | order.count
[**orderFinancialStatusList**](OrderApi.md#orderFinancialStatusList) | **GET** /order.financial_status.list.json | order.financial_status.list
[**orderFulfillmentStatusList**](OrderApi.md#orderFulfillmentStatusList) | **GET** /order.fulfillment_status.list.json | order.fulfillment_status.list
[**orderInfo**](OrderApi.md#orderInfo) | **GET** /order.info.json | order.info
[**orderList**](OrderApi.md#orderList) | **GET** /order.list.json | order.list
[**orderPreestimateShippingList**](OrderApi.md#orderPreestimateShippingList) | **POST** /order.preestimate_shipping.list.json | order.preestimate_shipping.list
[**orderRefundAdd**](OrderApi.md#orderRefundAdd) | **POST** /order.refund.add.json | order.refund.add
[**orderReturnAdd**](OrderApi.md#orderReturnAdd) | **POST** /order.return.add.json | order.return.add
[**orderReturnDelete**](OrderApi.md#orderReturnDelete) | **DELETE** /order.return.delete.json | order.return.delete
[**orderReturnUpdate**](OrderApi.md#orderReturnUpdate) | **PUT** /order.return.update.json | order.return.update
[**orderShipmentAdd**](OrderApi.md#orderShipmentAdd) | **POST** /order.shipment.add.json | order.shipment.add
[**orderShipmentAddBatch**](OrderApi.md#orderShipmentAddBatch) | **POST** /order.shipment.add.batch.json | order.shipment.add.batch
[**orderShipmentDelete**](OrderApi.md#orderShipmentDelete) | **DELETE** /order.shipment.delete.json | order.shipment.delete
[**orderShipmentInfo**](OrderApi.md#orderShipmentInfo) | **GET** /order.shipment.info.json | order.shipment.info
[**orderShipmentList**](OrderApi.md#orderShipmentList) | **GET** /order.shipment.list.json | order.shipment.list
[**orderShipmentTrackingAdd**](OrderApi.md#orderShipmentTrackingAdd) | **POST** /order.shipment.tracking.add.json | order.shipment.tracking.add
[**orderShipmentUpdate**](OrderApi.md#orderShipmentUpdate) | **PUT** /order.shipment.update.json | order.shipment.update
[**orderStatusList**](OrderApi.md#orderStatusList) | **GET** /order.status.list.json | order.status.list
[**orderTransactionList**](OrderApi.md#orderTransactionList) | **GET** /order.transaction.list.json | order.transaction.list
[**orderUpdate**](OrderApi.md#orderUpdate) | **PUT** /order.update.json | order.update


# **orderAbandonedList**
> ModelResponseOrderAbandonedList orderAbandonedList()

Get list of orders that were left by customers before completing the order.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderAbandonedListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderAbandonedListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves orders specified by customer id (optional)
  customerId: "5",
    // Retrieves orders specified by customer email (optional)
  customerEmail: "jubari@hannsgroup.com",
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
    // Filter empty emails (optional)
  skipEmptyEmail: true,
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,pagination,result{order{id,customer{email},created_at,totals{total},order_products}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "force_all",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "customer",
};

const data = await apiInstance.orderAbandonedList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **customerId** | [**string**] | Retrieves orders specified by customer id | (optional) defaults to undefined
 **customerEmail** | [**string**] | Retrieves orders specified by customer email | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **skipEmptyEmail** | [**boolean**] | Filter empty emails | (optional) defaults to false
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'customer,totals,items'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseOrderAbandonedList**

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

# **orderAdd**
> OrderAdd200Response orderAdd(orderAdd)

Add a new order to the cart.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderAddRequest = {
  
  orderAdd: {
    id: "10",
    orderId: "25",
    storeId: "1",
    channelId: "1",
    orderStatus: "Completed",
    fulfillmentStatus: "fulfilled",
    financialStatus: "paid",
    customerEmail: "jubari@hannsgroup.com",
    customerFirstName: "John",
    customerLastName: "Smith",
    customerPhone: "88008547457",
    customerCountry: "US",
    customerBirthday: "1990-12-03",
    customerFax: "5656598",
    isGuest: true,
    orderPaymentMethod: "PayPal",
    transactionId: "d41d8cd98f00b204e9800998ecf8427e",
    currency: "USD",
    date: "2012-09-25 19:40:00",
    dateModified: "2014-05-05 05:05:00",
    dateFinished: "2014-06-05 05:05:00",
    billFirstName: "Adam",
    billLastName: "Smith",
    billAddress1: "Green str. 35",
    billAddress2: "Red str, 2",
    billCity: "Chicago",
    billPostcode: "12345",
    billState: "IL",
    billCountry: "US",
    billCompany: "Apple",
    billPhone: "8 800 5659 6896",
    billFax: "545 45878",
    shippFirstName: "John",
    shippLastName: "Smith",
    shippAddress1: "Green str. 35",
    shippAddress2: "Green str. 35",
    shippCity: "Chicago",
    shippPostcode: "24545",
    shippState: "IL",
    shippCountry: "US",
    shippCompany: "Apple",
    shippPhone: "880086544564",
    shippFax: "556868",
    subtotalPrice: 563.23,
    taxPrice: 5.5,
    totalPrice: 23.56,
    totalPaid: 23.56,
    totalWeight: 23,
    pricesIncTax: true,
    shippingPrice: 5.5,
    shippingTax: 5.5,
    discount: 5.5,
    couponDiscount: 5.5,
    giftCertificateDiscount: 5.5,
    orderShippingMethod: "UPS Ground",
    carrierId: "USPS",
    warehouseId: "1",
    coupons: [
      "coupons_example",
    ],
    tags: "tag1,tag2",
    comment: "This coole order",
    adminComment: "Test admin comment",
    adminPrivateComment: "Test admin private comment",
    sendNotifications: true,
    sendAdminNotifications: true,
    externalSource: "POS",
    inventoryBehaviour: "decrement_ignoring_policy",
    createInvoice: true,
    noteAttributes: [
      {
        name: "name_example",
        value: "value_example",
      },
    ],
    clearCache: false,
    origin: "newsletter",
    feePrice: 5.5,
    orderItem: [
      {
        orderItemId: "125, where {x} - 1,2,3,... etc",
        orderItemName: "Product 1, where {x} - 1,2,3,... etc",
        orderItemModel: "sku_1, where {x} - 1,2,3,... etc",
        orderItemPrice: 1.32, where {x} - 1,2,3,... etc,
        orderItemQuantity: 5, where {x} - 1,2,3,... etc,
        orderItemWeight: 5, where {x} - 1,2,3,... etc,
        orderItemVariantId: "52",
        orderItemTax: 5.5,
        orderItemTaxClass: "standard",
        orderItemPriceIncludesTax: false,
        orderItemParent: 2,
        orderItemParentOptionName: "Internal Memory Storage",
        orderItemAllowRefundItemsSeparately: true,
        orderItemAllowShipItemsSeparately: true,
        orderItemOption: [
          {
            orderItemOptionName: "Color",
            orderItemOptionValue: "green",
            orderItemOptionPrice: 2.3,
          },
        ],
        orderItemProperty: [
          {
            orderItemPropertyName: "Engraving",
            orderItemPropertyValue: "lorem ipsum",
          },
        ],
      },
    ],
  },
};

const data = await apiInstance.orderAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderAdd** | **OrderAdd**|  |


### Return type

**OrderAdd200Response**

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

# **orderCalculate**
> OrderCalculate200Response orderCalculate(orderCalculate)

<p>Calculates the total cost of an order for a given customer and a set of products, as well as the available shipping methods based on the specified address. The calculation takes into account store product prices, discounts, taxes, shipping costs, and other store settings. The result includes a detailed breakdown of the final order cost by its components.</p> <p>Note that the final totals, taxes, and other amounts must include the corresponding values for the selected shipping method.</p><p>The result of this method can be used when creating an order using the <strong>order.add</strong> method.</p>

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderCalculateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderCalculateRequest = {
  
  orderCalculate: {
    customerEmail: "jubari@hannsgroup.com",
    currencyId: "usd",
    storeId: "1",
    coupons: [
      "coupons_example",
    ],
    roundingPrecision: 3,
    shippFirstName: "John",
    shippLastName: "Smith",
    shippAddress1: "Green str. 35",
    shippAddress2: "Green str. 35",
    shippCity: "Chicago",
    shippPostcode: "24545",
    shippState: "IL",
    shippCountry: "US",
    shippCompany: "Apple",
    shippPhone: "880086544564",
    billFirstName: "Adam",
    billLastName: "Smith",
    billAddress1: "Green str. 35",
    billAddress2: "Red str, 2",
    billCity: "Chicago",
    billPostcode: "12345",
    billState: "IL",
    billCountry: "US",
    billCompany: "Apple",
    billPhone: "8 800 5659 6896",
    responseFields: "{result}",
    orderItem: [
      {
        orderItemId: "125, where {x} - 1,2,3,... etc",
        orderItemQuantity: 5, where {x} - 1,2,3,... etc,
        orderItemVariantId: "52",
        orderItemParent: 2,
        orderItemParentOptionName: "Internal Memory Storage",
        orderItemOption: [
          {
            orderItemOptionName: "Color",
            orderItemOptionValue: "green",
          },
        ],
      },
    ],
  },
};

const data = await apiInstance.orderCalculate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderCalculate** | **OrderCalculate**|  |


### Return type

**OrderCalculate200Response**

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

# **orderCount**
> OrderCount200Response orderCount()

Count orders in store

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderCountRequest = {
    // Counts orders specified by order ids (optional)
  orderIds: "24,25",
    // Counts orders specified by ids (optional)
  ids: "24,25",
    // Counts orders quantity specified by customer id (optional)
  customerId: "5",
    // Counts orders quantity specified by store id (optional)
  storeId: "1",
    // Counts orders quantity specified by customer email (optional)
  customerEmail: "jubari@hannsgroup.com",
    // Counts orders quantity specified by order status (optional)
  orderStatus: "Completed",
    // Retrieves orders specified by order statuses (optional)
  orderStatusIds: [
    "order_status_ids_example",
  ],
    // Counts orders quantity specified by order status (optional)
  ebayOrderStatus: "Active",
    // Counts orders quantity specified by financial status (optional)
  financialStatus: "paid",
    // Retrieves orders count specified by financial status ids (optional)
  financialStatusIds: [
    "financial_status_ids_example",
  ],
    // Retrieves order with a fulfillment channel (optional)
  fulfillmentChannel: "local",
    // Create order with fulfillment status (optional)
  fulfillmentStatus: "fulfilled",
    // Retrieve entities according to shipping method (optional)
  shippingMethod: "flatrate_flatrate",
    // Retrieves order with delivery method (optional)
  deliveryMethod: "local",
    // Order tags (optional)
  tags: "tag1,tag2",
    // Retrieves order with ship node type (optional)
  shipNodeType: "SellerFulfilled",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
};

const data = await apiInstance.orderCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderIds** | [**string**] | Counts orders specified by order ids | (optional) defaults to undefined
 **ids** | [**string**] | Counts orders specified by ids | (optional) defaults to undefined
 **customerId** | [**string**] | Counts orders quantity specified by customer id | (optional) defaults to undefined
 **storeId** | [**string**] | Counts orders quantity specified by store id | (optional) defaults to undefined
 **customerEmail** | [**string**] | Counts orders quantity specified by customer email | (optional) defaults to undefined
 **orderStatus** | [**string**] | Counts orders quantity specified by order status | (optional) defaults to undefined
 **orderStatusIds** | **Array&lt;string&gt;** | Retrieves orders specified by order statuses | (optional) defaults to undefined
 **ebayOrderStatus** | [**string**] | Counts orders quantity specified by order status | (optional) defaults to undefined
 **financialStatus** | [**string**] | Counts orders quantity specified by financial status | (optional) defaults to undefined
 **financialStatusIds** | **Array&lt;string&gt;** | Retrieves orders count specified by financial status ids | (optional) defaults to undefined
 **fulfillmentChannel** | [**string**] | Retrieves order with a fulfillment channel | (optional) defaults to undefined
 **fulfillmentStatus** | [**string**] | Create order with fulfillment status | (optional) defaults to undefined
 **shippingMethod** | [**string**] | Retrieve entities according to shipping method | (optional) defaults to undefined
 **deliveryMethod** | [**string**] | Retrieves order with delivery method | (optional) defaults to undefined
 **tags** | [**string**] | Order tags | (optional) defaults to undefined
 **shipNodeType** | [**string**] | Retrieves order with ship node type | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined


### Return type

**OrderCount200Response**

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

# **orderFinancialStatusList**
> OrderFinancialStatusList200Response orderFinancialStatusList()

Retrieve list of financial statuses

### Example


```typescript
import { createConfiguration, OrderApi } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request = {};

const data = await apiInstance.orderFinancialStatusList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrderFinancialStatusList200Response**

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

# **orderFulfillmentStatusList**
> OrderFulfillmentStatusList200Response orderFulfillmentStatusList()

Retrieve list of fulfillment statuses

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderFulfillmentStatusListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderFulfillmentStatusListRequest = {
    // Available statuses for the specified action. (optional)
  action: "add",
};

const data = await apiInstance.orderFulfillmentStatusList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | [**string**] | Available statuses for the specified action. | (optional) defaults to undefined


### Return type

**OrderFulfillmentStatusList200Response**

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

# **orderInfo**
> OrderInfo200Response orderInfo()

Info about a specific order by ID

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderInfoRequest = {
    // Retrieves order info specified by id (optional)
  id: "10",
    // Retrieves order’s info specified by order id (optional)
  orderId: "25",
    // Defines store id where the order should be found (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "order_id,totals,status",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{order_id,customer,totals,address,items,bundles,status}}",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "order_id,totals,status",
    // If the value is \'true\' and order exist in our cache, we will return order.info response from cache (optional)
  enableCache: true,
    // Use the latest platform API version (optional)
  useLatestApiVersion: true,
    // <p>Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).</p> <p>Supported values range from <b>1</b> to <b>6</b>.</p> <p>The default rounding precision may vary depending on the platform. You can retrieve the default value using the <strong>cart.info</strong> method in the <code>default_rounding_precision</code> field. </p><p>Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.</p> (optional)
  roundingPrecision: 3,
};

const data = await apiInstance.orderInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Retrieves order info specified by id | (optional) defaults to undefined
 **orderId** | [**string**] | Retrieves order’s info specified by order id | (optional) defaults to undefined
 **storeId** | [**string**] | Defines store id where the order should be found | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'order_id,customer,totals,address,items,bundles,status'
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **enableCache** | [**boolean**] | If the value is \&#39;true\&#39; and order exist in our cache, we will return order.info response from cache | (optional) defaults to false
 **useLatestApiVersion** | [**boolean**] | Use the latest platform API version | (optional) defaults to false
 **roundingPrecision** | [**number**] | &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt; | (optional) defaults to undefined


### Return type

**OrderInfo200Response**

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

# **orderList**
> ModelResponseOrderList orderList()

Get list of orders from store.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve orders via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves orders specified by ids (optional)
  ids: "24,25",
    // Retrieves orders specified by order ids (optional)
  orderIds: "24,25",
    // Retrieve entities starting from the specified id. (optional)
  sinceId: "56",
    // Store Id (optional)
  storeId: "1",
    // Retrieves orders specified by customer id (optional)
  customerId: "5",
    // Retrieves orders specified by customer email (optional)
  customerEmail: "jubari@hannsgroup.com",
    // Retrieves order’s info specified by basket id. (optional)
  basketId: "1",
    // Currency Id (optional)
  currencyId: "usd",
    // Filter orders by customer\'s phone number (optional)
  phone: "56686868654",
    // Retrieves orders specified by order status (optional)
  orderStatus: "Completed",
    // Retrieves orders specified by order statuses (optional)
  orderStatusIds: [
    "order_status_ids_example",
  ],
    // Retrieves orders specified by order status (optional)
  ebayOrderStatus: "Active",
    // Retrieves orders specified by financial status (optional)
  financialStatus: "paid",
    // Retrieves orders specified by financial status ids (optional)
  financialStatusIds: [
    "financial_status_ids_example",
  ],
    // Create order with fulfillment status (optional)
  fulfillmentStatus: "fulfilled",
    // Retrieves orders specified by return status (optional)
  returnStatus: "RETURNED",
    // Retrieves order with a fulfillment channel (optional)
  fulfillmentChannel: "local",
    // Retrieve entities according to shipping method (optional)
  shippingMethod: "flatrate_flatrate",
    // Skipped orders by ids (optional)
  skipOrderIds: "24,25",
    // Filter deleted orders (optional)
  isDeleted: true,
    // Retrieve entities according to shipping country (optional)
  shippingCountryIso3: "DEU",
    // Retrieves order with delivery method (optional)
  deliveryMethod: "local",
    // Retrieves order with ship node type (optional)
  shipNodeType: "SellerFulfilled",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Order tags (optional)
  tags: "tag1,tag2",
    // Set field to sort by (optional)
  sortBy: "modified_at",
    // Set sorting direction (optional)
  sortDirection: "asc",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "order_id,totals,status",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,pagination,result{order{order_id,customer,totals,address,items,bundles,status}}}",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "order_id,totals,status",
    // If the value is \'true\', we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add) (optional)
  enableCache: true,
    // Use the latest platform API version (optional)
  useLatestApiVersion: true,
    // <p>Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).</p> <p>Supported values range from <b>1</b> to <b>6</b>.</p> <p>The default rounding precision may vary depending on the platform. You can retrieve the default value using the <strong>cart.info</strong> method in the <code>default_rounding_precision</code> field. </p><p>Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.</p> (optional)
  roundingPrecision: 3,
};

const data = await apiInstance.orderList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve orders via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **ids** | [**string**] | Retrieves orders specified by ids | (optional) defaults to undefined
 **orderIds** | [**string**] | Retrieves orders specified by order ids | (optional) defaults to undefined
 **sinceId** | [**string**] | Retrieve entities starting from the specified id. | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **customerId** | [**string**] | Retrieves orders specified by customer id | (optional) defaults to undefined
 **customerEmail** | [**string**] | Retrieves orders specified by customer email | (optional) defaults to undefined
 **basketId** | [**string**] | Retrieves order’s info specified by basket id. | (optional) defaults to undefined
 **currencyId** | [**string**] | Currency Id | (optional) defaults to undefined
 **phone** | [**string**] | Filter orders by customer\&#39;s phone number | (optional) defaults to undefined
 **orderStatus** | [**string**] | Retrieves orders specified by order status | (optional) defaults to undefined
 **orderStatusIds** | **Array&lt;string&gt;** | Retrieves orders specified by order statuses | (optional) defaults to undefined
 **ebayOrderStatus** | [**string**] | Retrieves orders specified by order status | (optional) defaults to undefined
 **financialStatus** | [**string**] | Retrieves orders specified by financial status | (optional) defaults to undefined
 **financialStatusIds** | **Array&lt;string&gt;** | Retrieves orders specified by financial status ids | (optional) defaults to undefined
 **fulfillmentStatus** | [**string**] | Create order with fulfillment status | (optional) defaults to undefined
 **returnStatus** | [**string**] | Retrieves orders specified by return status | (optional) defaults to undefined
 **fulfillmentChannel** | [**string**] | Retrieves order with a fulfillment channel | (optional) defaults to undefined
 **shippingMethod** | [**string**] | Retrieve entities according to shipping method | (optional) defaults to undefined
 **skipOrderIds** | [**string**] | Skipped orders by ids | (optional) defaults to undefined
 **isDeleted** | [**boolean**] | Filter deleted orders | (optional) defaults to undefined
 **shippingCountryIso3** | [**string**] | Retrieve entities according to shipping country | (optional) defaults to undefined
 **deliveryMethod** | [**string**] | Retrieves order with delivery method | (optional) defaults to undefined
 **shipNodeType** | [**string**] | Retrieves order with ship node type | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **tags** | [**string**] | Order tags | (optional) defaults to undefined
 **sortBy** | [**string**] | Set field to sort by | (optional) defaults to 'order_id'
 **sortDirection** | [**string**] | Set sorting direction | (optional) defaults to 'asc'
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'order_id,customer,totals,address,items,bundles,status'
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **enableCache** | [**boolean**] | If the value is \&#39;true\&#39;, we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add) | (optional) defaults to false
 **useLatestApiVersion** | [**boolean**] | Use the latest platform API version | (optional) defaults to false
 **roundingPrecision** | [**number**] | &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt; | (optional) defaults to undefined


### Return type

**ModelResponseOrderList**

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

# **orderPreestimateShippingList**
> ModelResponseOrderPreestimateShippingList orderPreestimateShippingList(orderPreestimateShippingList)

Retrieve list of order preestimated shipping methods

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderPreestimateShippingListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderPreestimateShippingListRequest = {
  
  orderPreestimateShippingList: {
    warehouseId: "1",
    customerId: "5",
    customerEmail: "jubari@hannsgroup.com",
    storeId: "1",
    shippAddress1: "Green str. 35",
    shippCity: "Chicago",
    shippPostcode: "24545",
    shippState: "IL",
    shippCountry: "US",
    params: "id,model,price,images",
    exclude: "false",
    orderItem: [
      {
        orderItemId: "125, where {x} - 1,2,3,... etc",
        orderItemModel: "sku_1, where {x} - 1,2,3,... etc",
        orderItemQuantity: 5, where {x} - 1,2,3,... etc,
        orderItemWeight: 5, where {x} - 1,2,3,... etc,
        orderItemVariantId: "52",
        orderItemOption: [
          {
            orderItemOptionName: "Color",
            orderItemOptionId: "12",
            orderItemOptionValue: "green",
            orderItemOptionValueId: "13",
            orderItemOptionUsedInCombinations: true,
          },
        ],
      },
    ],
  },
};

const data = await apiInstance.orderPreestimateShippingList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPreestimateShippingList** | **OrderPreestimateShippingList**|  |


### Return type

**ModelResponseOrderPreestimateShippingList**

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

# **orderRefundAdd**
> OrderRefundAdd200Response orderRefundAdd(orderRefundAdd)

Add a refund to the order.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderRefundAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderRefundAddRequest = {
  
  orderRefundAdd: {
    orderId: "25",
    items: [
      {
        orderProductId: "orderProductId_example",
        quantity: 1,
        price: 3.14,
      },
    ],
    totalPrice: 23.56,
    shippingPrice: 5.5,
    feePrice: 5.5,
    message: "Received item is not like in the photo, get my money back.",
    itemRestock: true,
    sendNotifications: true,
    date: "2012-09-25 19:40:00",
    isOnline: false,
  },
};

const data = await apiInstance.orderRefundAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderRefundAdd** | **OrderRefundAdd**|  |


### Return type

**OrderRefundAdd200Response**

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

# **orderReturnAdd**
> OrderReturnAdd200Response orderReturnAdd(orderReturnAdd)

Create new return request.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderReturnAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderReturnAddRequest = {
  
  orderReturnAdd: {
    orderId: "25",
    storeId: "1",
    returnStatusId: "RETURNED",
    returnActionId: "RETURNED",
    returnReasonId: "broken",
    returnReason: "broken",
    itemRestock: true,
    staffNote: "Test",
    comment: "This coole order",
    sendNotifications: true,
    rejectReason: "ORDER_UNPAID",
    orderProducts: [
      {
        orderProductId: "125, where {x} - 1,2,3,... etc",
        orderProductQuantity: 1, where {x} - 1,2,3,... etc,
        orderProductReasonId: "DEFECTIVE, where {x} - 1,2,3,... etc",
        orderProductActionId: "REFUND, where {x} - 1,2,3,... etc",
        orderProductCustomerComment: "I need a bigger size, where {x} - 1,2,3,... etc",
        orderProductHandlingStatus: "123456",
        orderProductCondition: "Broken, where {x} - 1,2,3,... etc",
        orderProductReason: "123456",
        orderProductStatus: "pending",
      },
    ],
  },
};

const data = await apiInstance.orderReturnAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderReturnAdd** | **OrderReturnAdd**|  |


### Return type

**OrderReturnAdd200Response**

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

# **orderReturnDelete**
> AttributeValueDelete200Response orderReturnDelete()

Delete return.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderReturnDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderReturnDeleteRequest = {
    // Return ID
  returnId: "200000002",
    // Defines the order id
  orderId: "25",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.orderReturnDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnId** | [**string**] | Return ID | defaults to undefined
 **orderId** | [**string**] | Defines the order id | defaults to undefined
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

# **orderReturnUpdate**
> AccountConfigUpdate200Response orderReturnUpdate(orderReturnUpdate)

Update order\'s shipment information.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderReturnUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderReturnUpdateRequest = {
  
  orderReturnUpdate: {
    returnId: "200000002",
    orderId: "25",
    storeId: "1",
    itemRestock: true,
    returnStatusId: "RETURNED",
    staffNote: "Test",
    comment: "This coole order",
    sendNotifications: true,
    rejectReason: "ORDER_UNPAID",
    orderProducts: [
      {
        orderProductId: "125, where {x} - 1,2,3,... etc",
        orderProductQuantity: 1, where {x} - 1,2,3,... etc,
        orderProductStatus: "pending",
        orderProductActionId: "REFUND, where {x} - 1,2,3,... etc",
      },
    ],
  },
};

const data = await apiInstance.orderReturnUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderReturnUpdate** | **OrderReturnUpdate**|  |


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

# **orderShipmentAdd**
> OrderShipmentAdd200Response orderShipmentAdd(orderShipmentAdd)

Add a shipment to the order.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderShipmentAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderShipmentAddRequest = {
  
  orderShipmentAdd: {
    orderId: "25",
    warehouseId: "1",
    storeId: "1",
    shipmentProvider: "UPS",
    shippingMethod: "flatrate_flatrate",
    items: [
      {
        orderProductId: "orderProductId_example",
        quantity: 3.14,
      },
    ],
    trackingNumbers: [
      {
        carrierId: "carrierId_example",
        trackingNumber: "trackingNumber_example",
      },
    ],
    trackingLink: "http://example.com?someParam=value",
    isShipped: true,
    sendNotifications: true,
    adjustStock: true,
    enableCache: true,
    checkProcessStatus: false,
    trackingProvider: "Custom tracker",
    useLatestApiVersion: true,
  },
};

const data = await apiInstance.orderShipmentAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderShipmentAdd** | **OrderShipmentAdd**|  |


### Return type

**OrderShipmentAdd200Response**

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

# **orderShipmentAddBatch**
> CategoryAddBatch200Response orderShipmentAddBatch(orderShipmentAddBatch)

Add a shipments to the orders.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderShipmentAddBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderShipmentAddBatchRequest = {
  
  orderShipmentAddBatch: {
    payload: [
      {
        orderId: "orderId_example",
        storeId: "storeId_example",
        warehouseId: "warehouseId_example",
        carrierId: "carrierId_example",
        carrierName: "carrierName_example",
        trackingNumber: "trackingNumber_example",
        trackingLink: "trackingLink_example",
        shipmentProvider: "shipmentProvider_example",
        items: [
          {
            orderProductId: "orderProductId_example",
            quantity: 3.14,
          },
        ],
        sendNotifications: true,
      },
    ],
  },
};

const data = await apiInstance.orderShipmentAddBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderShipmentAddBatch** | **OrderShipmentAddBatch**|  |


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

# **orderShipmentDelete**
> OrderShipmentDelete200Response orderShipmentDelete()

Delete order\'s shipment.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderShipmentDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderShipmentDeleteRequest = {
    // Shipment id indicates the number of delivery
  shipmentId: "200000002",
    // Defines the order for which the shipment will be deleted
  orderId: "25",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.orderShipmentDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**string**] | Shipment id indicates the number of delivery | defaults to undefined
 **orderId** | [**string**] | Defines the order for which the shipment will be deleted | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**OrderShipmentDelete200Response**

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

# **orderShipmentInfo**
> OrderShipmentInfo200Response orderShipmentInfo()

Get information of shipment.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderShipmentInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderShipmentInfoRequest = {
    // Entity id
  id: "10",
    // Defines the order id
  orderId: "25",
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{id,order_id,shipment_provider,tracking_numbers{tracking_number},items{product_id,quantity}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.orderShipmentInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Entity id | defaults to undefined
 **orderId** | [**string**] | Defines the order id | defaults to undefined
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,order_id,items,tracking_numbers'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**OrderShipmentInfo200Response**

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

# **orderShipmentList**
> ModelResponseOrderShipmentList orderShipmentList()

Get list of shipments per order.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderShipmentListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderShipmentListRequest = {
    // Retrieves shipments specified by order id
  orderId: "25",
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
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
  responseFields: "{status_code,pagination,result{shipment{id,order_id,shipment_provider,tracking_numbers{tracking_number},items{product_id,quantity}}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.orderShipmentList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | Retrieves shipments specified by order id | defaults to undefined
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,order_id,items,tracking_numbers'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseOrderShipmentList**

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

# **orderShipmentTrackingAdd**
> OrderShipmentTrackingAdd200Response orderShipmentTrackingAdd(orderShipmentTrackingAdd)

Add order shipment\'s tracking info.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderShipmentTrackingAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderShipmentTrackingAddRequest = {
  
  orderShipmentTrackingAdd: {
    orderId: "25",
    shipmentId: "200000002",
    carrierId: "USPS",
    storeId: "1",
    trackingProvider: "Custom tracker",
    trackingNumber: "1А6745",
    trackingLink: "http://example.com?someParam=value",
    sendNotifications: true,
  },
};

const data = await apiInstance.orderShipmentTrackingAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderShipmentTrackingAdd** | **OrderShipmentTrackingAdd**|  |


### Return type

**OrderShipmentTrackingAdd200Response**

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

# **orderShipmentUpdate**
> AccountConfigUpdate200Response orderShipmentUpdate(orderShipmentUpdate)

Update order\'s shipment information.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderShipmentUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderShipmentUpdateRequest = {
  
  orderShipmentUpdate: {
    shipmentId: "200000002",
    orderId: "25",
    storeId: "1",
    shipmentProvider: "UPS",
    trackingNumbers: [
      {
        carrierId: "carrierId_example",
        trackingNumber: "trackingNumber_example",
      },
    ],
    trackingLink: "http://example.com?someParam=value",
    isShipped: true,
    deliveredAt: "2024-08-25T23:56:12+00:00",
    replace: false,
    sendNotifications: true,
    trackingProvider: "Custom tracker",
    items: [
      {
        orderProductId: "orderProductId_example",
        quantity: 3.14,
      },
    ],
  },
};

const data = await apiInstance.orderShipmentUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderShipmentUpdate** | **OrderShipmentUpdate**|  |


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

# **orderStatusList**
> ModelResponseOrderStatusList orderStatusList()

Retrieve list of statuses

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderStatusListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderStatusListRequest = {
    // Store Id (optional)
  storeId: "1",
    // Available statuses for the specified action. (optional)
  action: "add",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,result}",
};

const data = await apiInstance.orderStatusList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **action** | [**string**] | Available statuses for the specified action. | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined


### Return type

**ModelResponseOrderStatusList**

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

# **orderTransactionList**
> ModelResponseOrderTransactionList orderTransactionList()

Retrieve list of order transaction

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderTransactionListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderTransactionListRequest = {
    // Retrieves order transactions specified by order ids
  orderIds: "24,25",
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,pagination,result{transactions_count,transactions{id,transaction_id,status,description,settlement_amount,gateway,card_brand,card_last_four}}}",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.orderTransactionList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderIds** | [**string**] | Retrieves order transactions specified by order ids | defaults to undefined
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,order_id,amount,description'
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseOrderTransactionList**

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

# **orderUpdate**
> AccountConfigUpdate200Response orderUpdate()

Update existing order.

### Example


```typescript
import { createConfiguration, OrderApi } from '';
import type { OrderApiOrderUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderApi(configuration);

const request: OrderApiOrderUpdateRequest = {
    // Defines the orders specified by order id
  orderId: "25",
    // Defines store id where the order should be found (optional)
  storeId: "1",
    // Defines new order\'s status (optional)
  orderStatus: "Completed",
    // Update order financial status to specified (optional)
  financialStatus: "paid",
    // Create order with fulfillment status (optional)
  fulfillmentStatus: "fulfilled",
    // Defines the cancellation reason when the order will be canceled (optional)
  cancellationReason: "ORDER_UNPAID",
    // Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to \'paid\' (optional)
  orderPaymentMethod: "PayPal",
    // Specifies order comment (optional)
  comment: "This coole order",
    // Specifies admin\'s order comment (optional)
  adminComment: "Test admin comment",
    // Specifies private admin\'s order comment (optional)
  adminPrivateComment: "Test admin private comment",
    // Specifies admin\'s order invoice comment (optional)
  invoiceAdminComment: "Test admin comment",
    // Specifies order\'s  modification date (optional)
  dateModified: "2014-05-05 05:05:00",
    // Specifies order\'s  finished date (optional)
  dateFinished: "2014-06-05 05:05:00",
    // Send notifications to customer after order was created (optional)
  sendNotifications: true,
    // Determines whether an invoice should be created if it has not already been created (optional)
  createInvoice: true,
    // The source of the order (optional)
  origin: "newsletter",
    // Order tags (optional)
  tags: "tag1,tag2",
};

const data = await apiInstance.orderUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | Defines the orders specified by order id | defaults to undefined
 **storeId** | [**string**] | Defines store id where the order should be found | (optional) defaults to undefined
 **orderStatus** | [**string**] | Defines new order\&#39;s status | (optional) defaults to undefined
 **financialStatus** | [**string**] | Update order financial status to specified | (optional) defaults to undefined
 **fulfillmentStatus** | [**string**] | Create order with fulfillment status | (optional) defaults to undefined
 **cancellationReason** | [**string**] | Defines the cancellation reason when the order will be canceled | (optional) defaults to undefined
 **orderPaymentMethod** | [**string**] | Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to \&#39;paid\&#39; | (optional) defaults to undefined
 **comment** | [**string**] | Specifies order comment | (optional) defaults to undefined
 **adminComment** | [**string**] | Specifies admin\&#39;s order comment | (optional) defaults to undefined
 **adminPrivateComment** | [**string**] | Specifies private admin\&#39;s order comment | (optional) defaults to undefined
 **invoiceAdminComment** | [**string**] | Specifies admin\&#39;s order invoice comment | (optional) defaults to undefined
 **dateModified** | [**string**] | Specifies order\&#39;s  modification date | (optional) defaults to undefined
 **dateFinished** | [**string**] | Specifies order\&#39;s  finished date | (optional) defaults to undefined
 **sendNotifications** | [**boolean**] | Send notifications to customer after order was created | (optional) defaults to false
 **createInvoice** | [**boolean**] | Determines whether an invoice should be created if it has not already been created | (optional) defaults to undefined
 **origin** | [**string**] | The source of the order | (optional) defaults to undefined
 **tags** | [**string**] | Order tags | (optional) defaults to undefined


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


