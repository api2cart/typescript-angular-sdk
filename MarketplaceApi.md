# .MarketplaceApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplaceProductFind**](MarketplaceApi.md#marketplaceProductFind) | **GET** /marketplace.product.find.json | marketplace.product.find


# **marketplaceProductFind**
> ModelResponseMarketplaceProductFind marketplaceProductFind()

Search product in global catalog.

### Example


```typescript
import { createConfiguration, MarketplaceApi } from '';
import type { MarketplaceApiMarketplaceProductFindRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MarketplaceApi(configuration);

const request: MarketplaceApiMarketplaceProductFindRequest = {
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Defines search keyword (optional)
  keyword: "T-shirt",
    // Defines product add that is specified by comma-separated categories id (optional)
  categoriesIds: "23,56",
    // Store Id (optional)
  storeId: "1",
    // Amazon Standard Identification Number. (optional)
  asin: "97703178470",
    // European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products. (optional)
  ean: "5901234123457",
    // Global Trade Item Number. An GTIN is an identifier for trade items. (optional)
  gtin: "12345678912345",
    // Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products. (optional)
  upc: "9770317847001",
    // Manufacturer Part Number. A MPN is an identifier of a particular part design or material used. (optional)
  mpn: "9770317847001",
    // International Standard Book Number. An ISBN is a unique identifier for books. (optional)
  isbn: "9783161484100",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.marketplaceProductFind(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **keyword** | [**string**] | Defines search keyword | (optional) defaults to undefined
 **categoriesIds** | [**string**] | Defines product add that is specified by comma-separated categories id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **asin** | [**string**] | Amazon Standard Identification Number. | (optional) defaults to undefined
 **ean** | [**string**] | European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products. | (optional) defaults to undefined
 **gtin** | [**string**] | Global Trade Item Number. An GTIN is an identifier for trade items. | (optional) defaults to undefined
 **upc** | [**string**] | Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products. | (optional) defaults to undefined
 **mpn** | [**string**] | Manufacturer Part Number. A MPN is an identifier of a particular part design or material used. | (optional) defaults to undefined
 **isbn** | [**string**] | International Standard Book Number. An ISBN is a unique identifier for books. | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'force_all'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseMarketplaceProductFind**

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


