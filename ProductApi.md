# .ProductApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productAdd**](ProductApi.md#productAdd) | **POST** /product.add.json | product.add
[**productAddBatch**](ProductApi.md#productAddBatch) | **POST** /product.add.batch.json | product.add.batch
[**productAttributeList**](ProductApi.md#productAttributeList) | **GET** /product.attribute.list.json | product.attribute.list
[**productAttributeValueSet**](ProductApi.md#productAttributeValueSet) | **POST** /product.attribute.value.set.json | product.attribute.value.set
[**productAttributeValueUnset**](ProductApi.md#productAttributeValueUnset) | **POST** /product.attribute.value.unset.json | product.attribute.value.unset
[**productBrandList**](ProductApi.md#productBrandList) | **GET** /product.brand.list.json | product.brand.list
[**productChildItemFind**](ProductApi.md#productChildItemFind) | **GET** /product.child_item.find.json | product.child_item.find
[**productChildItemInfo**](ProductApi.md#productChildItemInfo) | **GET** /product.child_item.info.json | product.child_item.info
[**productChildItemList**](ProductApi.md#productChildItemList) | **GET** /product.child_item.list.json | product.child_item.list
[**productCount**](ProductApi.md#productCount) | **GET** /product.count.json | product.count
[**productCurrencyAdd**](ProductApi.md#productCurrencyAdd) | **POST** /product.currency.add.json | product.currency.add
[**productCurrencyList**](ProductApi.md#productCurrencyList) | **GET** /product.currency.list.json | product.currency.list
[**productDelete**](ProductApi.md#productDelete) | **DELETE** /product.delete.json | product.delete
[**productDeleteBatch**](ProductApi.md#productDeleteBatch) | **POST** /product.delete.batch.json | product.delete.batch
[**productFind**](ProductApi.md#productFind) | **GET** /product.find.json | product.find
[**productImageAdd**](ProductApi.md#productImageAdd) | **POST** /product.image.add.json | product.image.add
[**productImageDelete**](ProductApi.md#productImageDelete) | **DELETE** /product.image.delete.json | product.image.delete
[**productImageUpdate**](ProductApi.md#productImageUpdate) | **PUT** /product.image.update.json | product.image.update
[**productInfo**](ProductApi.md#productInfo) | **GET** /product.info.json | product.info
[**productList**](ProductApi.md#productList) | **GET** /product.list.json | product.list
[**productManufacturerAdd**](ProductApi.md#productManufacturerAdd) | **POST** /product.manufacturer.add.json | product.manufacturer.add
[**productOptionAdd**](ProductApi.md#productOptionAdd) | **POST** /product.option.add.json | product.option.add
[**productOptionAssign**](ProductApi.md#productOptionAssign) | **POST** /product.option.assign.json | product.option.assign
[**productOptionDelete**](ProductApi.md#productOptionDelete) | **DELETE** /product.option.delete.json | product.option.delete
[**productOptionList**](ProductApi.md#productOptionList) | **GET** /product.option.list.json | product.option.list
[**productOptionValueAdd**](ProductApi.md#productOptionValueAdd) | **POST** /product.option.value.add.json | product.option.value.add
[**productOptionValueAssign**](ProductApi.md#productOptionValueAssign) | **POST** /product.option.value.assign.json | product.option.value.assign
[**productOptionValueDelete**](ProductApi.md#productOptionValueDelete) | **DELETE** /product.option.value.delete.json | product.option.value.delete
[**productOptionValueUpdate**](ProductApi.md#productOptionValueUpdate) | **PUT** /product.option.value.update.json | product.option.value.update
[**productPriceAdd**](ProductApi.md#productPriceAdd) | **POST** /product.price.add.json | product.price.add
[**productPriceDelete**](ProductApi.md#productPriceDelete) | **DELETE** /product.price.delete.json | product.price.delete
[**productPriceUpdate**](ProductApi.md#productPriceUpdate) | **PUT** /product.price.update.json | product.price.update
[**productReviewList**](ProductApi.md#productReviewList) | **GET** /product.review.list.json | product.review.list
[**productStoreAssign**](ProductApi.md#productStoreAssign) | **POST** /product.store.assign.json | product.store.assign
[**productTaxAdd**](ProductApi.md#productTaxAdd) | **POST** /product.tax.add.json | product.tax.add
[**productUpdate**](ProductApi.md#productUpdate) | **PUT** /product.update.json | product.update
[**productUpdateBatch**](ProductApi.md#productUpdateBatch) | **POST** /product.update.batch.json | product.update.batch
[**productVariantAdd**](ProductApi.md#productVariantAdd) | **POST** /product.variant.add.json | product.variant.add
[**productVariantAddBatch**](ProductApi.md#productVariantAddBatch) | **POST** /product.variant.add.batch.json | product.variant.add.batch
[**productVariantDelete**](ProductApi.md#productVariantDelete) | **DELETE** /product.variant.delete.json | product.variant.delete
[**productVariantDeleteBatch**](ProductApi.md#productVariantDeleteBatch) | **POST** /product.variant.delete.batch.json | product.variant.delete.batch
[**productVariantImageAdd**](ProductApi.md#productVariantImageAdd) | **POST** /product.variant.image.add.json | product.variant.image.add
[**productVariantImageDelete**](ProductApi.md#productVariantImageDelete) | **DELETE** /product.variant.image.delete.json | product.variant.image.delete
[**productVariantPriceAdd**](ProductApi.md#productVariantPriceAdd) | **POST** /product.variant.price.add.json | product.variant.price.add
[**productVariantPriceDelete**](ProductApi.md#productVariantPriceDelete) | **DELETE** /product.variant.price.delete.json | product.variant.price.delete
[**productVariantPriceUpdate**](ProductApi.md#productVariantPriceUpdate) | **PUT** /product.variant.price.update.json | product.variant.price.update
[**productVariantUpdate**](ProductApi.md#productVariantUpdate) | **PUT** /product.variant.update.json | product.variant.update
[**productVariantUpdateBatch**](ProductApi.md#productVariantUpdateBatch) | **POST** /product.variant.update.batch.json | product.variant.update.batch


# **productAdd**
> ProductAdd200Response productAdd(productAdd)

Add new product to store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductAddRequest = {
  
  productAdd: {
    name: "Bag",
    model: "bag_01",
    description: "Product description",
    price: 99.9,
    sku: "bag_01",
    shortDescription: "Short description. This is very short description",
    type: "configurable",
    status: "disabled",
    visible: "search",
    categoryId: "6",
    categoriesIds: "23,56",
    productClass: "Shirts",
    productType: "BICYCLE",
    isVirtual: false,
    downloadable: true,
    isSupply: false,
    availableForView: false,
    availableForSale: false,
    storeId: "1",
    storesIds: "1,2",
    langId: "3",
    oldPrice: 99.9,
    specialPrice: 56.9,
    wholesalePrice: 56.12,
    costPrice: 65.9,
    fixedCostShippingPrice: 5.5,
    tierPrices: [
      {
        quantity: 3.14,
        price: 3.14,
      },
    ],
    groupPrices: [
      {
        groupId: "groupId_example",
        price: 3.14,
      },
    ],
    buyitnowPrice: 65.9,
    reservePrice: 65.9,
    quantity: 6,
    inStock: true,
    manageStock: false,
    warehouseId: "1",
    backorderStatus: "true",
    minOrderQuantity: 1,
    maxOrderQuantity: 1,
    lowStockThreshold: 1,
    weight: 23.69,
    weightUnit: "lb",
    width: 56.12,
    height: 56.12,
    length: 56.12,
    dimensionsUnit: "cm",
    barcode: "9770317847001",
    upc: "9770317847001",
    ean: "5901234123457",
    isbn: "9783161484100",
    gtin: "12345678912345",
    mpn: "9770317847001",
    asin: "97703178470",
    productReference: "5901234123457",
    externalProductLink: "http://example.com/t-shirt",
    harmonizedSystemCode: "123456",
    countryOfOrigin: "123456",
    manufacturer: "Samsung",
    manufacturerId: "1",
    manufacturerInfo: {
      name: "name_example",
      address: "address_example",
      phone: "phone_example",
      email: "email_example",
    },
    brandName: "Abidas",
    imageUrl: "https://docs.api2cart.com/img/logo.png",
    imageName: "abibas.png",
    additionalImageUrls: [
      "additionalImageUrls_example",
    ],
    files: [
      {
        name: "name_example",
        url: "url_example",
      },
    ],
    sizeChart: {
      id: "id_example",
      url: "url_example",
    },
    relatedProductsIds: "4,5",
    upSellProductsIds: "4,5",
    crossSellProductsIds: "4,5",
    attributeSetName: "Shoes",
    attributeName: "Color,Manufacturer",
    searchKeywords: "key1,key2,key3",
    tags: "tag1,tag2",
    materials: [
      "materials[0]=Aluminum&materials[1]=Brass",
    ],
    certifications: [
      {
        id: "id_example",
        images: [
          {
            url: "url_example",
          },
        ],
        files: [
          {
            url: "url_example",
          },
        ],
      },
    ],
    specifics: [
      {
        name: "name_example",
        value: "value_example",
        values: [
          "values_example",
        ],
        usedForVariations: false,
        scaleId: 1,
        inputValue: "inputValue_example",
        foodDetails: {
          calories: 3.14,
        },
        groupProductsDetails: [
          {
            id: "id_example",
            quantity: 1,
          },
        ],
        bookingDetails: {
          location: "location_example",
          type: "date",
          sessionDuration: 1,
          sessionGap: 1,
          sessionsCount: 1,
          timeStrictValue: 3.14,
          timeStrictType: "days",
          availabilities: [
            {
              day: "sunday",
              isAvailable: true,
              times: [
                {
                  _from: "23:20",
                  to: "23:20",
                },
              ],
            },
          ],
          overrides: [
            {
              day: "sunday",
              date: "2048-09-18",
            },
          ],
        },
      },
    ],
    availFrom: "2029-10-25T15:54:37-0500",
    spriceCreate: "2018-08-25 23:56:12",
    spriceModified: "2018-12-05 13:46:20",
    spriceExpire: "2018-08-25 23:56:12",
    createdAt: "2014-08-09 13:13:13",
    autoRenew: false,
    whenMade: "2020_2025",
    metaTitle: "category,test",
    metaKeywords: "category,test",
    metaDescription: "category,test",
    url: "/product_slug",
    seoUrl: "some seo url",
    taxClassId: "9",
    taxable: false,
    salesTax: {
      taxPercent: 3.14,
      taxState: "taxState_example",
      shippingIncInTax: true,
    },
    condition: "Like New",
    conditionDescription: "Almost perfect condition, a few scratches",
    allowDisplayCondition: false,
    paymentMethods: [
      "payment_methods[0]=CashOnPickup&payment_methods[1]=PayPal",
    ],
    paypalEmail: "paypall@mail.com",
    shippingTemplateId: 40256592690,
    shippingDetails: [
      {
        shippingType: "shippingType_example",
        shippingService: "shippingService_example",
        shippingCost: 3.14,
      },
    ],
    isFreeShipping: true,
    deliveryCode: "24uurs-23",
    deliveryType: "PARCEL",
    deliveryTime: 1,
    deliveryOptionIds: "6956548250505111111,6956548250505111112",
    packageDetails: {
      measureUnit: "measureUnit_example",
      weighUnit: "weighUnit_example",
      packageDepth: 3.14,
      packageLength: 3.14,
      packageWidth: 3.14,
      weightMajor: 3.14,
      weightMinor: 3.14,
      shippingPackage: "shippingPackage_example",
    },
    logisticInfo: [
      {
        logisticId: 3.14,
        isFree: true,
        shippingFee: 3.14,
        sizeId: 3.14,
      },
    ],
    listingDuration: "Days_3",
    listingType: "Auction",
    categoryType: "Apparel",
    returnAccepted: true,
    sellerProfiles: {
      shippingProfileId: "shippingProfileId_example",
      paymentProfileId: "paymentProfileId_example",
      returnProfileId: "returnProfileId_example",
    },
    auctionConfidentialityLevel: "public",
    bestOffer: {
      minimumOfferPrice: 3.14,
      autoAcceptPrice: 3.14,
    },
    productionPartnerIds: "4,5",
    marketplaceItemProperties: "{"color":["Silver"],"manufacturer":"Philips","features":["3 way"],"countPerPack":1,"watts":{"unit":"W","measure":40}}",
    clearCache: false,
    viewedCount: 9,
    orderedCount: 15,
    shopSectionId: `12345678`,
    returnPolicyId: `12345678`,
    personalizationDetails: {
      isPersonalizable: true,
      personalizationIsRequired: true,
      personalizationCharCountMax: 1,
      personalizationInstructions: "personalizationInstructions_example",
    },
  },
};

const data = await apiInstance.productAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productAdd** | **ProductAdd**|  |


### Return type

**ProductAdd200Response**

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

# **productAddBatch**
> CategoryAddBatch200Response productAddBatch(productAddBatch)

Add new products to the store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductAddBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductAddBatchRequest = {
  
  productAddBatch: {
    nestedItemsUpdateBehaviour: "replace",
    clearCache: false,
    reindex: false,
    payload: [
      {
        name: "name_example",
        description: "description_example",
        shortDescription: "shortDescription_example",
        sku: "sku_example",
        model: "model_example",
        asin: "asin_example",
        upc: "upc_example",
        ean: "ean_example",
        gtin: "gtin_example",
        mpn: "mpn_example",
        barcode: "barcode_example",
        price: 3.14,
        oldPrice: 3.14,
        costPrice: 3.14,
        specialPrice: 3.14,
        spriceCreate: "spriceCreate_example",
        spriceExpire: "spriceExpire_example",
        advancedPrices: [
          {
            value: 3.14,
            groupId: 1,
            quantity: 3.14,
            startTime: "startTime_example",
            expireTime: "expireTime_example",
          },
        ],
        fixedCostShippingPrice: 3.14,
        quantity: 3.14,
        manageStock: true,
        productType: "productType_example",
        marketplaceItemProperties: {},
        specifics: {},
        isFreeShipping: true,
        taxable: true,
        status: "status_example",
        condition: "condition_example",
        visible: "visible_example",
        availableForView: true,
        availableForSale: true,
        isVirtual: true,
        inStock: true,
        type: "type_example",
        downloadable: true,
        weight: 3.14,
        length: 3.14,
        width: 3.14,
        height: 3.14,
        weightUnit: "weightUnit_example",
        dimensionsUnit: "dimensionsUnit_example",
        storeId: "storeId_example",
        langId: "langId_example",
        categoryId: "categoryId_example",
        warehouseId: "warehouseId_example",
        categoriesIds: [
          "categoriesIds_example",
        ],
        relatedProductsIds: [
          "relatedProductsIds_example",
        ],
        upSellProductsIds: [
          "upSellProductsIds_example",
        ],
        crossSellProductsIds: [
          "crossSellProductsIds_example",
        ],
        storesIds: [
          "storesIds_example",
        ],
        taxClassId: "taxClassId_example",
        metaTitle: "metaTitle_example",
        metaDescription: "metaDescription_example",
        metaKeywords: [
          "metaKeywords_example",
        ],
        searchKeywords: [
          "searchKeywords_example",
        ],
        harmonizedSystemCode: "harmonizedSystemCode_example",
        url: "url_example",
        seoUrl: "seoUrl_example",
        externalProductLink: "externalProductLink_example",
        manufacturer: "manufacturer_example",
        manufacturerId: "manufacturerId_example",
        backorderStatus: "backorderStatus_example",
        images: [
          {
            type: "type_example",
            url: "url_example",
            label: "label_example",
            name: "name_example",
            position: 1,
          },
        ],
        tags: [
          "tags_example",
        ],
        files: [
          {
            name: "name_example",
            url: "url_example",
          },
        ],
      },
    ],
  },
};

const data = await apiInstance.productAddBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productAddBatch** | **ProductAddBatch**|  |


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

# **productAttributeList**
> ModelResponseProductAttributeList productAttributeList()

Get list of attributes and values.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductAttributeListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductAttributeListRequest = {
    // Retrieves attributes specified by product id
  productId: "10",
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves info for specified attribute_id (optional)
  attributeId: "156",
    // Defines product\'s variants specified by variant id (optional)
  variantId: "45",
    // Filter by attribute_group_id (optional)
  attributeGroupId: "202",
    // Retrieves attributes specified by language id (optional)
  langId: "3",
    // Retrieves attributes specified by store id (optional)
  storeId: "1",
    // Retrieves attributes specified by set_name in Magento (optional)
  setName: "Shoes",
    // Set field to sort by (optional)
  sortBy: "value",
    // Set sorting direction (optional)
  sortDirection: "asc",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{pagination,result{attribute}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "attribute_id,name",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "attribute_id,name",
};

const data = await apiInstance.productAttributeList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Retrieves attributes specified by product id | defaults to undefined
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **attributeId** | [**string**] | Retrieves info for specified attribute_id | (optional) defaults to undefined
 **variantId** | [**string**] | Defines product\&#39;s variants specified by variant id | (optional) defaults to undefined
 **attributeGroupId** | [**string**] | Filter by attribute_group_id | (optional) defaults to undefined
 **langId** | [**string**] | Retrieves attributes specified by language id | (optional) defaults to undefined
 **storeId** | [**string**] | Retrieves attributes specified by store id | (optional) defaults to undefined
 **setName** | [**string**] | Retrieves attributes specified by set_name in Magento | (optional) defaults to undefined
 **sortBy** | [**string**] | Set field to sort by | (optional) defaults to 'attribute_id'
 **sortDirection** | [**string**] | Set sorting direction | (optional) defaults to 'asc'
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'attribute_id,name'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseProductAttributeList**

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

# **productAttributeValueSet**
> ProductAttributeValueSet200Response productAttributeValueSet()

Set attribute value to product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductAttributeValueSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductAttributeValueSetRequest = {
    // Defines product id where the attribute should be added
  productId: "10",
    // Filter by attribute_id (optional)
  attributeId: "156",
    // Filter by attribute_group_id (optional)
  attributeGroupId: "202",
    // Define attribute name (optional)
  attributeName: "Color",
    // Define attribute value (optional)
  value: "Red",
    // Define attribute value id (optional)
  valueId: 22,
    // Language id (optional)
  langId: "3",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productAttributeValueSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines product id where the attribute should be added | defaults to undefined
 **attributeId** | [**string**] | Filter by attribute_id | (optional) defaults to undefined
 **attributeGroupId** | [**string**] | Filter by attribute_group_id | (optional) defaults to undefined
 **attributeName** | [**string**] | Define attribute name | (optional) defaults to undefined
 **value** | [**string**] | Define attribute value | (optional) defaults to undefined
 **valueId** | [**number**] | Define attribute value id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**ProductAttributeValueSet200Response**

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

# **productAttributeValueUnset**
> ProductAttributeValueUnset200Response productAttributeValueUnset()

Removes attribute value for a product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductAttributeValueUnsetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductAttributeValueUnsetRequest = {
    // Product id
  productId: "10",
    // Attribute Id
  attributeId: "156",
    // Store Id (optional)
  storeId: "1",
    // Boolean, whether or not to unset default value of the attribute, if applicable (optional)
  includeDefault: true,
    // Is reindex required (optional)
  reindex: false,
    // Is cache clear required (optional)
  clearCache: false,
};

const data = await apiInstance.productAttributeValueUnset(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Product id | defaults to undefined
 **attributeId** | [**string**] | Attribute Id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **includeDefault** | [**boolean**] | Boolean, whether or not to unset default value of the attribute, if applicable | (optional) defaults to false
 **reindex** | [**boolean**] | Is reindex required | (optional) defaults to true
 **clearCache** | [**boolean**] | Is cache clear required | (optional) defaults to true


### Return type

**ProductAttributeValueUnset200Response**

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

# **productBrandList**
> ModelResponseProductBrandList productBrandList()

Get list of brands from your store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductBrandListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductBrandListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves brands specified by brand ids (optional)
  brandIds: "4,5",
    // Retrieves product brands specified by category id (optional)
  categoryId: "6",
    // Retrieves brands specified by parent id (optional)
  parentId: "6",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Entity search that is specified by the comma-separated unique fields (optional)
  findWhere: "name",
    // Entity search that is specified by some value (optional)
  findValue: "Phone",
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
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.productBrandList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **brandIds** | [**string**] | Retrieves brands specified by brand ids | (optional) defaults to undefined
 **categoryId** | [**string**] | Retrieves product brands specified by category id | (optional) defaults to undefined
 **parentId** | [**string**] | Retrieves brands specified by parent id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **findWhere** | [**string**] | Entity search that is specified by the comma-separated unique fields | (optional) defaults to undefined
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,short_description,active,url'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseProductBrandList**

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

# **productChildItemFind**
> ProductChildItemFind200Response productChildItemFind()

Search product child item (bundled item or configurable product variant) in store catalog.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductChildItemFindRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductChildItemFindRequest = {
    // Entity search that is specified by some value (optional)
  findValue: "bundled-item-123-",
    // Entity search that is specified by the comma-separated unique fields (optional)
  findWhere: "sku",
    // Entity search that is specified by comma-separated parameters (optional)
  findParams: "regex",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productChildItemFind(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Entity search that is specified by the comma-separated unique fields | (optional) defaults to undefined
 **findParams** | [**string**] | Entity search that is specified by comma-separated parameters | (optional) defaults to 'whole_words'
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**ProductChildItemFind200Response**

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

# **productChildItemInfo**
> ProductChildItemInfo200Response productChildItemInfo()

Get child for specific product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductChildItemInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductChildItemInfoRequest = {
    // Filter by parent product id
  productId: "10",
    // Entity id
  id: "10",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Currency Id (optional)
  currencyId: "usd",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{id,parent_id,sku,upc,images,combination}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
    // Use the latest platform API version (optional)
  useLatestApiVersion: true,
};

const data = await apiInstance.productChildItemInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Filter by parent product id | defaults to undefined
 **id** | [**string**] | Entity id | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **currencyId** | [**string**] | Currency Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'force_all'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **useLatestApiVersion** | [**boolean**] | Use the latest platform API version | (optional) defaults to false


### Return type

**ProductChildItemInfo200Response**

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

# **productChildItemList**
> ModelResponseProductChildItemList productChildItemList()

Get a list of a product\'s child items, such as variants or bundle components. The total_count field in the response indicates the total number of items in the context of the current filter.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductChildItemListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductChildItemListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve products child items via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Filter by parent product id (optional)
  productId: "10",
    // Filter by parent product ids (optional)
  productIds: "4,5",
    // Filter by products variant\'s sku (optional)
  sku: "bag_01",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Currency Id (optional)
  currencyId: "usd",
    // Specifies the set of available/not available products for sale (optional)
  availSale: false,
    // Entity search that is specified by some value (optional)
  findValue: "bundled-item-123-",
    // Child products search that is specified by field (optional)
  findWhere: "sku",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Determines the type of products to be returned. If set to \'true\', only global products will be returned; if set to \'false\', only local products will be returned. (optional)
  returnGlobal: false,
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{children{id,parent_id,sku,upc,images,combination}}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable report cache for current request (optional)
  disableReportCache: false,
    // Use the latest platform API version (optional)
  useLatestApiVersion: true,
};

const data = await apiInstance.productChildItemList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve products child items via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **productId** | [**string**] | Filter by parent product id | (optional) defaults to undefined
 **productIds** | [**string**] | Filter by parent product ids | (optional) defaults to undefined
 **sku** | [**string**] | Filter by products variant\&#39;s sku | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **currencyId** | [**string**] | Currency Id | (optional) defaults to undefined
 **availSale** | [**boolean**] | Specifies the set of available/not available products for sale | (optional) defaults to undefined
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Child products search that is specified by field | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **returnGlobal** | [**boolean**] | Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned. | (optional) defaults to false
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'force_all'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false
 **useLatestApiVersion** | [**boolean**] | Use the latest platform API version | (optional) defaults to false


### Return type

**ModelResponseProductChildItemList**

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

# **productCount**
> ProductCount200Response productCount()

Count products in store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductCountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductCountRequest = {
    // Counts products specified by product ids (optional)
  productIds: "4,5",
    // Retrieve entities starting from the specified id. (optional)
  sinceId: "56",
    // Defines product add that is specified by comma-separated categories id (optional)
  categoriesIds: "23,56",
    // Counts products specified by category id (optional)
  categoryId: "6",
    // Counts products specified by store id (optional)
  storeId: "1",
    // Counts products specified by language id (optional)
  langId: "3",
    // Specifies the set of visible/invisible products (optional)
  availView: true,
    // Specifies the set of available/not available products for sale (optional)
  availSale: false,
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Retrieves brands specified by brand name (optional)
  brandName: "Abidas",
    // Defines product attributes (optional)
  productAttributes: [
    "product_attributes[0][attribute_id]=132&product_attributes[0][values][0]=custom value 1&product_attributes[0][values][1]=custom value 2",
  ],
    // Defines product\'s status (optional)
  status: "disabled",
    // Defines products\'s type (optional)
  type: "simple",
    // Filter items by visibility status (optional)
  visible: "everywhere",
    // Entity search that is specified by some value (optional)
  findValue: "Phone",
    // Counts products that are searched specified by field (optional)
  findWhere: "name",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Determines the type of products to be returned. If set to \'true\', only global products will be returned; if set to \'false\', only local products will be returned. (optional)
  returnGlobal: false,
    // Disable report cache for current request (optional)
  disableReportCache: false,
    // Use the latest platform API version (optional)
  useLatestApiVersion: true,
};

const data = await apiInstance.productCount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productIds** | [**string**] | Counts products specified by product ids | (optional) defaults to undefined
 **sinceId** | [**string**] | Retrieve entities starting from the specified id. | (optional) defaults to undefined
 **categoriesIds** | [**string**] | Defines product add that is specified by comma-separated categories id | (optional) defaults to undefined
 **categoryId** | [**string**] | Counts products specified by category id | (optional) defaults to undefined
 **storeId** | [**string**] | Counts products specified by store id | (optional) defaults to undefined
 **langId** | [**string**] | Counts products specified by language id | (optional) defaults to undefined
 **availView** | [**boolean**] | Specifies the set of visible/invisible products | (optional) defaults to undefined
 **availSale** | [**boolean**] | Specifies the set of available/not available products for sale | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **brandName** | [**string**] | Retrieves brands specified by brand name | (optional) defaults to undefined
 **productAttributes** | **Array&lt;string&gt;** | Defines product attributes | (optional) defaults to undefined
 **status** | [**string**] | Defines product\&#39;s status | (optional) defaults to undefined
 **type** | [**string**] | Defines products\&#39;s type | (optional) defaults to undefined
 **visible** | [**string**] | Filter items by visibility status | (optional) defaults to 'everywhere'
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Counts products that are searched specified by field | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **returnGlobal** | [**boolean**] | Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned. | (optional) defaults to false
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false
 **useLatestApiVersion** | [**boolean**] | Use the latest platform API version | (optional) defaults to false


### Return type

**ProductCount200Response**

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

# **productCurrencyAdd**
> ProductCurrencyAdd200Response productCurrencyAdd()

Add currency and/or set default in store

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductCurrencyAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductCurrencyAddRequest = {
    // Specifies standardized currency code
  iso3: "USD",
    // Defines the numerical identifier against to the major currency
  rate: 1,
    // Defines currency\'s name (optional)
  name: "US Dollar",
    // Specifies whether the currency is available (optional)
  avail: false,
    // Defines the symbol that is located before the currency (optional)
  symbolLeft: "$",
    // Defines the symbol that is located after the currency (optional)
  symbolRight: "грн",
    // Specifies currency\'s default meaning (optional)
  _default: true,
};

const data = await apiInstance.productCurrencyAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iso3** | [**string**] | Specifies standardized currency code | defaults to undefined
 **rate** | [**number**] | Defines the numerical identifier against to the major currency | defaults to undefined
 **name** | [**string**] | Defines currency\&#39;s name | (optional) defaults to undefined
 **avail** | [**boolean**] | Specifies whether the currency is available | (optional) defaults to true
 **symbolLeft** | [**string**] | Defines the symbol that is located before the currency | (optional) defaults to undefined
 **symbolRight** | [**string**] | Defines the symbol that is located after the currency | (optional) defaults to undefined
 **_default** | [**boolean**] | Specifies currency\&#39;s default meaning | (optional) defaults to false


### Return type

**ProductCurrencyAdd200Response**

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

# **productCurrencyList**
> ModelResponseProductCurrencyList productCurrencyList()

Get list of currencies

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductCurrencyListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductCurrencyListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Specifies the set of default/not default currencies (optional)
  _default: true,
    // Specifies the set of available/not available currencies (optional)
  avail: false,
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_message,pagination,result{currency}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "name,iso3,default,avail",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "name,iso3,default,avail",
};

const data = await apiInstance.productCurrencyList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **_default** | [**boolean**] | Specifies the set of default/not default currencies | (optional) defaults to undefined
 **avail** | [**boolean**] | Specifies the set of available/not available currencies | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'name,iso3,default,avail'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseProductCurrencyList**

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

# **productDelete**
> CustomerDelete200Response productDelete()

Product delete

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductDeleteRequest = {
    // Product id that will be removed
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Product id that will be removed | defaults to undefined
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

# **productDeleteBatch**
> CategoryAddBatch200Response productDeleteBatch(productDeleteBatch)

Remove product from the store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductDeleteBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductDeleteBatchRequest = {
  
  productDeleteBatch: {
    payload: [
      {
        id: "id_example",
        storeId: "storeId_example",
      },
    ],
  },
};

const data = await apiInstance.productDeleteBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productDeleteBatch** | **ProductDeleteBatch**|  |


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

# **productFind**
> ProductFind200Response productFind()

Search product in store catalog. \"Apple\" is specified here by default.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductFindRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductFindRequest = {
    // Entity search that is specified by some value
  findValue: "Simple",
    // Entity search that is specified by the comma-separated unique fields (optional)
  findWhere: "name",
    // Entity search that is specified by comma-separated parameters (optional)
  findParams: "regex",
    // Parameter\'s value specifies the entity that has to be found (optional)
  findWhat: "each",
    // Search products specified by language id (optional)
  langId: "3",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productFind(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findValue** | [**string**] | Entity search that is specified by some value | defaults to undefined
 **findWhere** | [**string**] | Entity search that is specified by the comma-separated unique fields | (optional) defaults to 'name'
 **findParams** | [**string**] | Entity search that is specified by comma-separated parameters | (optional) defaults to 'whole_words'
 **findWhat** | [**string**] | Parameter\&#39;s value specifies the entity that has to be found | (optional) defaults to 'product'
 **langId** | [**string**] | Search products specified by language id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined


### Return type

**ProductFind200Response**

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

# **productImageAdd**
> ProductImageAdd200Response productImageAdd(productImageAdd)

Add image to product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductImageAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductImageAddRequest = {
  
  productImageAdd: {
    type: "base,small",
    imageName: "bag-gray.png",
    productId: "10",
    productVariantId: "45",
    variantIds: "1,2,3,4,5",
    optionValueIds: "1,2,3,4,5",
    storeId: "1",
    langId: "3",
    url: "http://docs.api2cart.com/img/logo.png",
    content: "/9j/4AAQSkZ...gD/2Q==",
    label: "This cool image",
    mime: "image/jpeg",
    position: 5,
    useLatestApiVersion: true,
  },
};

const data = await apiInstance.productImageAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productImageAdd** | **ProductImageAdd**|  |


### Return type

**ProductImageAdd200Response**

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

# **productImageDelete**
> AttributeDelete200Response productImageDelete()

Delete image

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductImageDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductImageDeleteRequest = {
    // Defines product id where the image should be deleted
  productId: "10",
    // Entity id
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productImageDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines product id where the image should be deleted | defaults to undefined
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

# **productImageUpdate**
> ProductImageUpdate200Response productImageUpdate()

Update details of image

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductImageUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductImageUpdateRequest = {
    // Defines product id where the image should be updated
  productId: "10",
    // Defines image update specified by image id
  id: "10",
    // Defines product\'s variants ids (optional)
  variantIds: "1,2,3,4,5",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Defines image\'s name (optional)
  imageName: "data/product/main/product_69_bag-gray.png",
    // Defines image\'s types that are specified by comma-separated list (optional)
  type: "thumbnail",
    // Defines alternative text that has to be attached to the picture (optional)
  label: "This cool image",
    // Defines image’s position in the list (optional)
  position: 5,
    // Define is hide image (optional)
  hidden: true,
};

const data = await apiInstance.productImageUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines product id where the image should be updated | defaults to undefined
 **id** | [**string**] | Defines image update specified by image id | defaults to undefined
 **variantIds** | [**string**] | Defines product\&#39;s variants ids | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **imageName** | [**string**] | Defines image\&#39;s name | (optional) defaults to undefined
 **type** | [**string**] | Defines image\&#39;s types that are specified by comma-separated list | (optional) defaults to 'additional'
 **label** | [**string**] | Defines alternative text that has to be attached to the picture | (optional) defaults to undefined
 **position** | [**number**] | Defines image’s position in the list | (optional) defaults to undefined
 **hidden** | [**boolean**] | Define is hide image | (optional) defaults to undefined


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

# **productInfo**
> ProductInfo200Response productInfo()

Get information about a specific product by its ID. In the case of a multistore configuration, use the store_id filter to get a response in the context of a specific store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductInfoRequest = {
    // Retrieves product\'s info specified by product id
  id: "10",
    // Retrieves product info specified by store id (optional)
  storeId: "1",
    // Retrieves product info specified by language id (optional)
  langId: "3",
    // Currency Id (optional)
  currencyId: "usd",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{result{id,name,price,images}}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable report cache for current request (optional)
  disableReportCache: false,
    // Use the latest platform API version (optional)
  useLatestApiVersion: true,
};

const data = await apiInstance.productInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Retrieves product\&#39;s info specified by product id | defaults to undefined
 **storeId** | [**string**] | Retrieves product info specified by store id | (optional) defaults to undefined
 **langId** | [**string**] | Retrieves product info specified by language id | (optional) defaults to undefined
 **currencyId** | [**string**] | Currency Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,description,price,categories_ids'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false
 **useLatestApiVersion** | [**boolean**] | Use the latest platform API version | (optional) defaults to false


### Return type

**ProductInfo200Response**

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

# **productList**
> ModelResponseProductList productList()

Get list of products from your store. Returns 10 products by default.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve products via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves products specified by product ids (optional)
  productIds: "4,5",
    // Retrieve entities starting from the specified id. (optional)
  sinceId: "56",
    // Retrieves products specified by categories ids (optional)
  categoriesIds: "23,56",
    // Retrieves products specified by category id (optional)
  categoryId: "6",
    // Retrieves products specified by store id (optional)
  storeId: "1",
    // Retrieves products specified by language id (optional)
  langId: "3",
    // Currency Id (optional)
  currencyId: "usd",
    // Specifies the set of visible/invisible products (optional)
  availView: true,
    // Specifies the set of available/not available products for sale (optional)
  availSale: false,
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieve entities from their modification date (optional)
  modifiedFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their modification date (optional)
  modifiedTo: "2100-08-29 13:45:52",
    // Filter by product\'s sku (optional)
  sku: "bag_01",
    // Retrieves brands specified by brand name (optional)
  brandName: "Abidas",
    // Defines product attributes (optional)
  productAttributes: [
    "product_attributes[0][attribute_id]=132&product_attributes[0][values][0]=custom value 1&product_attributes[0][values][1]=custom value 2",
  ],
    // Defines product\'s status (optional)
  status: "disabled",
    // Defines products\'s type (optional)
  type: "simple",
    // Filter items by visibility status (optional)
  visible: "everywhere",
    // Entity search that is specified by some value (optional)
  findValue: "Phone",
    // Product search that is specified by field (optional)
  findWhere: "name",
    // Determines the type of products to be returned. If set to \'true\', only global products will be returned; if set to \'false\', only local products will be returned. (optional)
  returnGlobal: false,
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,pagination,result{product{id,name,price,images}}}",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
    // Set field to sort by (optional)
  sortBy: "value_id",
    // Set sorting direction (optional)
  sortDirection: "asc",
    // Report request id (optional)
  reportRequestId: "105245017661",
    // Disable cache for current request (optional)
  disableCache: false,
    // Disable report cache for current request (optional)
  disableReportCache: false,
    // Use the latest platform API version (optional)
  useLatestApiVersion: true,
    // A categorization for the product (optional)
  productType: "BICYCLE",
};

const data = await apiInstance.productList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve products via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **productIds** | [**string**] | Retrieves products specified by product ids | (optional) defaults to undefined
 **sinceId** | [**string**] | Retrieve entities starting from the specified id. | (optional) defaults to undefined
 **categoriesIds** | [**string**] | Retrieves products specified by categories ids | (optional) defaults to undefined
 **categoryId** | [**string**] | Retrieves products specified by category id | (optional) defaults to undefined
 **storeId** | [**string**] | Retrieves products specified by store id | (optional) defaults to undefined
 **langId** | [**string**] | Retrieves products specified by language id | (optional) defaults to undefined
 **currencyId** | [**string**] | Currency Id | (optional) defaults to undefined
 **availView** | [**boolean**] | Specifies the set of visible/invisible products | (optional) defaults to undefined
 **availSale** | [**boolean**] | Specifies the set of available/not available products for sale | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **modifiedFrom** | [**string**] | Retrieve entities from their modification date | (optional) defaults to undefined
 **modifiedTo** | [**string**] | Retrieve entities to their modification date | (optional) defaults to undefined
 **sku** | [**string**] | Filter by product\&#39;s sku | (optional) defaults to undefined
 **brandName** | [**string**] | Retrieves brands specified by brand name | (optional) defaults to undefined
 **productAttributes** | **Array&lt;string&gt;** | Defines product attributes | (optional) defaults to undefined
 **status** | [**string**] | Defines product\&#39;s status | (optional) defaults to undefined
 **type** | [**string**] | Defines products\&#39;s type | (optional) defaults to undefined
 **visible** | [**string**] | Filter items by visibility status | (optional) defaults to 'everywhere'
 **findValue** | [**string**] | Entity search that is specified by some value | (optional) defaults to undefined
 **findWhere** | [**string**] | Product search that is specified by field | (optional) defaults to undefined
 **returnGlobal** | [**boolean**] | Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned. | (optional) defaults to false
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,description,price,categories_ids'
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined
 **sortBy** | [**string**] | Set field to sort by | (optional) defaults to 'id'
 **sortDirection** | [**string**] | Set sorting direction | (optional) defaults to 'asc'
 **reportRequestId** | [**string**] | Report request id | (optional) defaults to undefined
 **disableCache** | [**boolean**] | Disable cache for current request | (optional) defaults to false
 **disableReportCache** | [**boolean**] | Disable report cache for current request | (optional) defaults to false
 **useLatestApiVersion** | [**boolean**] | Use the latest platform API version | (optional) defaults to false
 **productType** | [**string**] | A categorization for the product | (optional) defaults to undefined


### Return type

**ModelResponseProductList**

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

# **productManufacturerAdd**
> ProductManufacturerAdd200Response productManufacturerAdd()

Add manufacturer to store and assign to product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductManufacturerAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductManufacturerAddRequest = {
    // Defines products specified by product id
  productId: "10",
    // Defines product’s manufacturer\'s name
  manufacturer: "Samsung",
    // Store Id (optional)
  storeId: "1",
    // Defines unique meta title for each entity (optional)
  metaTitle: "category,test",
    // Defines unique meta keywords for each entity (optional)
  metaKeywords: "category,test",
    // Defines unique meta description of a entity (optional)
  metaDescription: "category,test",
    // Defines unique search keywords (optional)
  searchKeywords: "key1,key2,key3",
    // Image Url (optional)
  imageUrl: "https://docs.api2cart.com/img/logo.png",
    // Defines unique URL for SEO (optional)
  seoUrl: "some seo url",
};

const data = await apiInstance.productManufacturerAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines products specified by product id | defaults to undefined
 **manufacturer** | [**string**] | Defines product’s manufacturer\&#39;s name | defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **metaTitle** | [**string**] | Defines unique meta title for each entity | (optional) defaults to undefined
 **metaKeywords** | [**string**] | Defines unique meta keywords for each entity | (optional) defaults to undefined
 **metaDescription** | [**string**] | Defines unique meta description of a entity | (optional) defaults to undefined
 **searchKeywords** | [**string**] | Defines unique search keywords | (optional) defaults to undefined
 **imageUrl** | [**string**] | Image Url | (optional) defaults to undefined
 **seoUrl** | [**string**] | Defines unique URL for SEO | (optional) defaults to undefined


### Return type

**ProductManufacturerAdd200Response**

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

# **productOptionAdd**
> ProductOptionAdd200Response productOptionAdd(productOptionAdd)

Add product option from store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionAddRequest = {
  
  productOptionAdd: {
    name: "Color",
    type: "option_type_select",
    productId: "10",
    defaultOptionValue: "green",
    optionValues: "green,black,yellow",
    description: "Product option",
    avail: false,
    sortOrder: 2,
    required: true,
    values: [
      {
        value: "value_example",
        displayValue: "displayValue_example",
        isDefault: false,
      },
    ],
    clearCache: false,
  },
};

const data = await apiInstance.productOptionAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productOptionAdd** | **ProductOptionAdd**|  |


### Return type

**ProductOptionAdd200Response**

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

# **productOptionAssign**
> ProductOptionAssign200Response productOptionAssign()

Assign option from product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionAssignRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionAssignRequest = {
    // Defines product id where the option should be assigned
  productId: "10",
    // Defines option id which has to be assigned
  optionId: "5",
    // Defines if the option is required (optional)
  required: true,
    // Sort number in the list (optional)
  sortOrder: 2,
    // Defines option values that has to be assigned (optional)
  optionValues: "green,black,yellow",
    // Is cache clear required (optional)
  clearCache: false,
};

const data = await apiInstance.productOptionAssign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines product id where the option should be assigned | defaults to undefined
 **optionId** | [**string**] | Defines option id which has to be assigned | defaults to undefined
 **required** | [**boolean**] | Defines if the option is required | (optional) defaults to false
 **sortOrder** | [**number**] | Sort number in the list | (optional) defaults to 0
 **optionValues** | [**string**] | Defines option values that has to be assigned | (optional) defaults to undefined
 **clearCache** | [**boolean**] | Is cache clear required | (optional) defaults to true


### Return type

**ProductOptionAssign200Response**

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

# **productOptionDelete**
> AttributeDelete200Response productOptionDelete()

Product option delete.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionDeleteRequest = {
    // Defines option id that should be deleted
  optionId: "5",
    // Defines product id where the option should be deleted
  productId: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productOptionDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionId** | [**string**] | Defines option id that should be deleted | defaults to undefined
 **productId** | [**string**] | Defines product id where the option should be deleted | defaults to undefined
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

# **productOptionList**
> ModelResponseProductOptionList productOptionList()

Get list of options.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionListRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Retrieves products\' options specified by product id (optional)
  productId: "10",
    // Language id (optional)
  langId: "3",
    // Store Id (optional)
  storeId: "1",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,pagination,result}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,name,sort_order",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "id,name,sort_order",
};

const data = await apiInstance.productOptionList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **productId** | [**string**] | Retrieves products\&#39; options specified by product id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,name,description'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseProductOptionList**

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

# **productOptionValueAdd**
> ProductOptionValueAdd200Response productOptionValueAdd()

Add product option item from option.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionValueAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionValueAddRequest = {
    // Defines product id where the option value should be added
  productId: "10",
    // Defines option id where the value has to be added
  optionId: "5",
    // Defines option value that has to be added (optional)
  optionValue: "green",
    // Sort number in the list (optional)
  sortOrder: 2,
    // Defines the value that will be displayed for the option value (optional)
  displayValue: "value",
    // Defines as a default (optional)
  isDefault: true,
    // Is cache clear required (optional)
  clearCache: false,
};

const data = await apiInstance.productOptionValueAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines product id where the option value should be added | defaults to undefined
 **optionId** | [**string**] | Defines option id where the value has to be added | defaults to undefined
 **optionValue** | [**string**] | Defines option value that has to be added | (optional) defaults to undefined
 **sortOrder** | [**number**] | Sort number in the list | (optional) defaults to 0
 **displayValue** | [**string**] | Defines the value that will be displayed for the option value | (optional) defaults to undefined
 **isDefault** | [**boolean**] | Defines as a default | (optional) defaults to undefined
 **clearCache** | [**boolean**] | Is cache clear required | (optional) defaults to true


### Return type

**ProductOptionValueAdd200Response**

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

# **productOptionValueAssign**
> ProductOptionValueAssign200Response productOptionValueAssign()

Assign product option item from product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionValueAssignRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionValueAssignRequest = {
    // Defines product\'s option id where the value has to be assigned
  productOptionId: 5,
    // Defines value id that has to be assigned
  optionValueId: "45",
    // Is cache clear required (optional)
  clearCache: false,
};

const data = await apiInstance.productOptionValueAssign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productOptionId** | [**number**] | Defines product\&#39;s option id where the value has to be assigned | defaults to undefined
 **optionValueId** | [**string**] | Defines value id that has to be assigned | defaults to undefined
 **clearCache** | [**boolean**] | Is cache clear required | (optional) defaults to true


### Return type

**ProductOptionValueAssign200Response**

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

# **productOptionValueDelete**
> AttributeDelete200Response productOptionValueDelete()

Product option value delete.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionValueDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionValueDeleteRequest = {
    // Defines option id where the value should be deleted
  optionId: "5",
    // Defines option value id that should be deleted
  optionValueId: "45",
    // Defines product id where the option value should be deleted
  productId: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productOptionValueDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionId** | [**string**] | Defines option id where the value should be deleted | defaults to undefined
 **optionValueId** | [**string**] | Defines option value id that should be deleted | defaults to undefined
 **productId** | [**string**] | Defines product id where the option value should be deleted | defaults to undefined
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

# **productOptionValueUpdate**
> AccountConfigUpdate200Response productOptionValueUpdate()

Update product option item from option.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductOptionValueUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductOptionValueUpdateRequest = {
    // Defines product id where the option value should be updated
  productId: "10",
    // Defines option id where the value has to be updated
  optionId: "5",
    // Defines value id that has to be assigned
  optionValueId: "45",
    // Defines option value that has to be added (optional)
  optionValue: "green",
    // Defines new product option price (optional)
  price: 99.9,
    // Defines new products\' options quantity (optional)
  quantity: 6,
    // Defines the value that will be displayed for the option value (optional)
  displayValue: "value",
    // Is cache clear required (optional)
  clearCache: false,
};

const data = await apiInstance.productOptionValueUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines product id where the option value should be updated | defaults to undefined
 **optionId** | [**string**] | Defines option id where the value has to be updated | defaults to undefined
 **optionValueId** | [**string**] | Defines value id that has to be assigned | defaults to undefined
 **optionValue** | [**string**] | Defines option value that has to be added | (optional) defaults to undefined
 **price** | [**number**] | Defines new product option price | (optional) defaults to undefined
 **quantity** | [**number**] | Defines new products\&#39; options quantity | (optional) defaults to undefined
 **displayValue** | [**string**] | Defines the value that will be displayed for the option value | (optional) defaults to undefined
 **clearCache** | [**boolean**] | Is cache clear required | (optional) defaults to true


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

# **productPriceAdd**
> CartValidate200Response productPriceAdd(productPriceAdd)

Add some prices to the product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductPriceAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductPriceAddRequest = {
  
  productPriceAdd: {
    productId: "10",
    groupPrices: [
      {
        groupId: "groupId_example",
        price: 3.14,
      },
    ],
    storeId: "1",
  },
};

const data = await apiInstance.productPriceAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productPriceAdd** | **ProductPriceAdd**|  |


### Return type

**CartValidate200Response**

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

# **productPriceDelete**
> AttributeDelete200Response productPriceDelete()

Delete some prices of the product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductPriceDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductPriceDeleteRequest = {
    // Defines the product where the price has to be deleted
  productId: "10",
    // Defines product\'s group prices (optional)
  groupPrices: "group_prices=5,8,9",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productPriceDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines the product where the price has to be deleted | defaults to undefined
 **groupPrices** | [**string**] | Defines product\&#39;s group prices | (optional) defaults to undefined
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

# **productPriceUpdate**
> AccountConfigUpdate200Response productPriceUpdate(productPriceUpdate)

Update some prices of the product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductPriceUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductPriceUpdateRequest = {
  
  productPriceUpdate: {
    productId: "10",
    groupPrices: [
      {
        id: 1,
        groupId: "groupId_example",
        price: 3.14,
      },
    ],
  },
};

const data = await apiInstance.productPriceUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productPriceUpdate** | **ProductPriceUpdate**|  |


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

# **productReviewList**
> ModelResponseProductReviewList productReviewList()

Get reviews of a specific product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductReviewListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductReviewListRequest = {
    // Product id
  productId: "10",
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // Used to retrieve entities via cursor-based pagination (it can\'t be used with any other filtering parameter) (optional)
  pageCursor: "",
    // Retrieves reviews specified by ids (optional)
  ids: "24,25",
    // Store Id (optional)
  storeId: "1",
    // Language id (optional)
  langId: "3",
    // Defines status (optional)
  status: "disabled",
    // Retrieve entities from their creation date (optional)
  createdFrom: "2010-07-29 13:45:52",
    // Retrieve entities to their creation date (optional)
  createdTo: "2100-08-29 13:45:52",
    // Retrieves orders specified by customer id (optional)
  customerId: "5",
    // Set field to sort by (optional)
  sortBy: "value_id",
    // Set sorting direction (optional)
  sortDirection: "asc",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  responseFields: "{return_code,return_message,pagination,result}",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "id,model,price,images",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "false",
};

const data = await apiInstance.productReviewList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Product id | defaults to undefined
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **pageCursor** | [**string**] | Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter) | (optional) defaults to undefined
 **ids** | [**string**] | Retrieves reviews specified by ids | (optional) defaults to undefined
 **storeId** | [**string**] | Store Id | (optional) defaults to undefined
 **langId** | [**string**] | Language id | (optional) defaults to undefined
 **status** | [**string**] | Defines status | (optional) defaults to undefined
 **createdFrom** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **createdTo** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **customerId** | [**string**] | Retrieves orders specified by customer id | (optional) defaults to undefined
 **sortBy** | [**string**] | Set field to sort by | (optional) defaults to 'id'
 **sortDirection** | [**string**] | Set sorting direction | (optional) defaults to 'asc'
 **responseFields** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**ModelResponseProductReviewList**

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

# **productStoreAssign**
> AccountConfigUpdate200Response productStoreAssign()

Assign product to store

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductStoreAssignRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductStoreAssignRequest = {
    // Defines id of the product which should be assigned to a store
  productId: "10",
    // Defines id of the store product should be assigned to
  storeId: "1",
};

const data = await apiInstance.productStoreAssign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines id of the product which should be assigned to a store | defaults to undefined
 **storeId** | [**string**] | Defines id of the store product should be assigned to | defaults to undefined


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

# **productTaxAdd**
> ProductTaxAdd200Response productTaxAdd(productTaxAdd)

Add tax class and tax rate to store and assign to product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductTaxAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductTaxAddRequest = {
  
  productTaxAdd: {
    productId: "10",
    name: "ECO-Tax",
    taxRates: [
      {
        name: "name_example",
        type: "type_example",
        value: 3.14,
      },
    ],
  },
};

const data = await apiInstance.productTaxAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productTaxAdd** | **ProductTaxAdd**|  |


### Return type

**ProductTaxAdd200Response**

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

# **productUpdate**
> AccountConfigUpdate200Response productUpdate(productUpdate)

This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductUpdateRequest = {
  
  productUpdate: {
    id: "10",
    model: "bag_01",
    sku: "bag_01",
    name: "Pancil",
    description: "New product description",
    shortDescription: "Short description. This is very short description",
    price: 99.9,
    oldPrice: 99.9,
    specialPrice: 56.9,
    spriceCreate: "2018-08-25 23:56:12",
    spriceExpire: "2018-08-25 23:56:12",
    costPrice: 65.9,
    fixedCostShippingPrice: 5.5,
    retailPrice: 6.9,
    tierPrices: [
      {
        quantity: 3.14,
        price: 3.14,
      },
    ],
    reservePrice: 65.9,
    buyitnowPrice: 65.9,
    taxable: false,
    taxClassId: "9",
    type: "simple",
    status: "disabled",
    condition: "Like New",
    visible: "search",
    inStock: true,
    avail: false,
    availFrom: "2029-10-25T15:54:37-0500",
    productClass: "Shirts",
    brandName: "Abidas",
    availableForView: false,
    storesIds: "1,2",
    storeId: "1",
    langId: "3",
    quantity: 6,
    reserveQuantity: 1,
    manageStock: false,
    backorderStatus: "true",
    increaseQuantity: 4,
    reduceQuantity: 4,
    lowStockThreshold: 1,
    warehouseId: "1",
    weight: 23.69,
    weightUnit: "lb",
    height: 56.12,
    length: 56.12,
    width: 56.12,
    dimensionsUnit: "cm",
    isVirtual: false,
    isFreeShipping: true,
    gtin: "12345678912345",
    upc: "9770317847001",
    mpn: "9770317847001",
    ean: "5901234123457",
    isbn: "9783161484100",
    barcode: "9770317847001",
    manufacturer: "Samsung",
    manufacturerId: "1",
    categoriesIds: "23,56",
    relatedProductsIds: "4,5",
    upSellProductsIds: "4,5",
    crossSellProductsIds: "4,5",
    metaTitle: "category,test",
    metaKeywords: "category,test",
    metaDescription: "category,test",
    seoUrl: "some seo url",
    searchKeywords: "key1,key2,key3",
    tags: "tag1,tag2",
    deliveryCode: "24uurs-23",
    packageDetails: {
      measureUnit: "measureUnit_example",
      weighUnit: "weighUnit_example",
      packageDepth: 3.14,
      packageLength: 3.14,
      packageWidth: 3.14,
      weightMajor: 3.14,
      weightMinor: 3.14,
      shippingPackage: "shippingPackage_example",
    },
    countryOfOrigin: "123456",
    harmonizedSystemCode: "123456",
    shippingTemplateId: 40256592690,
    whenMade: "2020_2025",
    isSupply: false,
    downloadable: true,
    materials: [
      "materials[0]=Aluminum&materials[1]=Brass",
    ],
    autoRenew: false,
    onSale: false,
    productionPartnerIds: "4,5",
    manufacturerInfo: {
      name: "name_example",
      address: "address_example",
      phone: "phone_example",
      email: "email_example",
    },
    reportRequestId: "105245017661",
    disableReportCache: false,
    reindex: false,
    clearCache: false,
    checkProcessStatus: false,
    specifics: [
      {
        name: "name_example",
        value: "value_example",
        values: [
          "values_example",
        ],
        usedForVariations: false,
        scaleId: 1,
        inputValue: "inputValue_example",
        foodDetails: {
          calories: 3.14,
        },
        groupProductsDetails: [
          {
            id: "id_example",
            quantity: 1,
          },
        ],
        bookingDetails: {
          location: "location_example",
          type: "date",
          sessionDuration: 1,
          sessionGap: 1,
          sessionsCount: 1,
          timeStrictValue: 3.14,
          timeStrictType: "days",
          availabilities: [
            {
              day: "sunday",
              isAvailable: true,
              times: [
                {
                  _from: "23:20",
                  to: "23:20",
                },
              ],
            },
          ],
          overrides: [
            {
              day: "sunday",
              date: "2048-09-18",
            },
          ],
        },
      },
    ],
    shopSectionId: `12345678`,
    personalizationDetails: {
      isPersonalizable: true,
      personalizationIsRequired: true,
      personalizationCharCountMax: 1,
      personalizationInstructions: "personalizationInstructions_example",
    },
    externalProductLink: "http://example.com/t-shirt",
    marketplaceItemProperties: "{"color":["Silver"],"manufacturer":"Philips","features":["3 way"],"countPerPack":1,"watts":{"unit":"W","measure":40}}",
    minOrderQuantity: 1,
  },
};

const data = await apiInstance.productUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productUpdate** | **ProductUpdate**|  |


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

# **productUpdateBatch**
> CategoryAddBatch200Response productUpdateBatch(productUpdateBatch)

Update products on the store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductUpdateBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductUpdateBatchRequest = {
  
  productUpdateBatch: {
    nestedItemsUpdateBehaviour: "replace",
    clearCache: false,
    reindex: false,
    payload: [
      {
        id: "id_example",
        name: "name_example",
        description: "description_example",
        shortDescription: "shortDescription_example",
        sku: "sku_example",
        model: "model_example",
        price: 3.14,
        specialPrice: 3.14,
        spriceCreate: "spriceCreate_example",
        spriceExpire: "spriceExpire_example",
        costPrice: 3.14,
        oldPrice: 3.14,
        fixedCostShippingPrice: 3.14,
        advancedPrices: [
          {
            value: 3.14,
            groupId: 1,
            quantity: 3.14,
          },
        ],
        quantity: 3.14,
        increaseQuantity: 3.14,
        reduceQuantity: 3.14,
        reserveQuantity: 3.14,
        storeId: "storeId_example",
        langId: "langId_example",
        status: "status_example",
        type: "type_example",
        condition: "condition_example",
        conditionDescription: "conditionDescription_example",
        visible: "visible_example",
        availableForView: true,
        availableForSale: true,
        availFrom: "availFrom_example",
        weight: 3.14,
        length: 3.14,
        width: 3.14,
        height: 3.14,
        dimensionsUnit: "dimensionsUnit_example",
        weightUnit: "weightUnit_example",
        manageStock: true,
        inStock: true,
        backorderStatus: "backorderStatus_example",
        isFreeShipping: true,
        isVirtual: true,
        taxable: true,
        downloadable: true,
        warehouseId: "warehouseId_example",
        taxClassId: "taxClassId_example",
        categoriesIds: [
          "categoriesIds_example",
        ],
        metaTitle: "metaTitle_example",
        metaDescription: "metaDescription_example",
        metaKeywords: [
          "metaKeywords_example",
        ],
        url: "url_example",
        seoUrl: "seoUrl_example",
        manufacturer: "manufacturer_example",
        manufacturerId: "manufacturerId_example",
        mpn: "mpn_example",
        gtin: "gtin_example",
        upc: "upc_example",
        isbn: "isbn_example",
        ean: "ean_example",
        barcode: "barcode_example",
        images: [
          {
            id: "id_example",
            name: "name_example",
            url: "url_example",
            label: "label_example",
            position: 1,
            type: "type_example",
          },
        ],
        relatedProductsIds: [
          "relatedProductsIds_example",
        ],
        upSellProductsIds: [
          "upSellProductsIds_example",
        ],
        crossSellProductsIds: [
          "crossSellProductsIds_example",
        ],
        tags: [
          "tags_example",
        ],
        searchKeywords: [
          "searchKeywords_example",
        ],
        harmonizedSystemCode: "harmonizedSystemCode_example",
      },
    ],
  },
};

const data = await apiInstance.productUpdateBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productUpdateBatch** | **ProductUpdateBatch**|  |


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

# **productVariantAdd**
> ProductVariantAdd200Response productVariantAdd(productVariantAdd)

Add variant to product.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantAddRequest = {
  
  productVariantAdd: {
    productId: "10",
    attributes: [
      {
        attributeName: "attributeName_example",
        attributeValue: "attributeValue_example",
        attributePrice: 3.14,
      },
    ],
    name: "Bag Green XXL",
    model: "bag_01",
    description: "Product variant",
    shortDescription: "Short description. This is very short description",
    availableForView: false,
    availableForSale: false,
    status: "disabled",
    isVirtual: false,
    isDefault: true,
    storeId: "1",
    storesIds: "1,2",
    langId: "3",
    price: 99.9,
    oldPrice: 99.9,
    costPrice: 65.9,
    specialPrice: 56.9,
    spriceCreate: "2018-08-25 23:56:12",
    spriceModified: "2018-12-05 13:46:20",
    spriceExpire: "2018-08-25 23:56:12",
    tierPrices: [
      {
        quantity: 3.14,
        price: 3.14,
      },
    ],
    quantity: 6,
    warehouseId: "1",
    inStock: true,
    backorderStatus: "true",
    manageStock: false,
    lowStockThreshold: 1,
    weight: 23.69,
    width: 56.12,
    height: 56.12,
    length: 56.12,
    weightUnit: "lb",
    sku: "bag_01",
    barcode: "9770317847001",
    gtin: "12345678912345",
    upc: "9770317847001",
    ean: "5901234123457",
    mpn: "9770317847001",
    isbn: "9783161484100",
    seoUrl: "some seo url",
    manufacturer: "Samsung",
    createdAt: "2014-08-09 13:13:13",
    metaTitle: "category,test",
    metaKeywords: "category,test",
    metaDescription: "category,test",
    url: "/product_variant_slug",
    taxClassId: "9",
    taxable: false,
    fixedCostShippingPrice: 5.5,
    isFreeShipping: true,
    countryOfOrigin: "123456",
    harmonizedSystemCode: "123456",
    marketplaceItemProperties: "{"color":["Silver"],"manufacturer":"Philips","features":["3 way"],"countPerPack":1,"watts":{"unit":"W","measure":40}}",
    clearCache: false,
  },
};

const data = await apiInstance.productVariantAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantAdd** | **ProductVariantAdd**|  |


### Return type

**ProductVariantAdd200Response**

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

# **productVariantAddBatch**
> CategoryAddBatch200Response productVariantAddBatch(productVariantAddBatch)

Add new product variants to the store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantAddBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantAddBatchRequest = {
  
  productVariantAddBatch: {
    clearCache: false,
    reindex: false,
    payload: [
      {
        productId: "productId_example",
        combination: [
          {
            optionName: "optionName_example",
            optionValueName: "optionValueName_example",
          },
        ],
        name: "name_example",
        description: "description_example",
        shortDescription: "shortDescription_example",
        sku: "sku_example",
        model: "model_example",
        price: 3.14,
        oldPrice: 3.14,
        costPrice: 3.14,
        specialPrice: 3.14,
        spriceCreate: "spriceCreate_example",
        spriceExpire: "spriceExpire_example",
        advancedPrices: [
          {
            value: 3.14,
            groupId: 1,
            quantity: 3.14,
          },
        ],
        metaTitle: 3.14,
        metaDescription: 3.14,
        metaKeywords: [
          "metaKeywords_example",
        ],
        categoriesIds: [
          "categoriesIds_example",
        ],
        storesIds: [
          "storesIds_example",
        ],
        weight: 3.14,
        width: 3.14,
        height: 3.14,
        length: 3.14,
        weightUnit: "weightUnit_example",
        warehouseId: "warehouseId_example",
        quantity: 3.14,
        manageStock: true,
        inStock: true,
        storeId: "storeId_example",
        langId: "langId_example",
        taxClassId: "taxClassId_example",
        backorderStatus: "backorderStatus_example",
        status: "status_example",
        visible: "visible_example",
        isVirtual: true,
        downloadable: true,
        isDefault: true,
        upc: "upc_example",
        isbn: "isbn_example",
        mpn: "mpn_example",
        ean: "ean_example",
        barcode: "barcode_example",
        availableForSale: true,
        isFreeShipping: true,
        taxable: true,
        seoUrl: "seoUrl_example",
        manufacturerId: "manufacturerId_example",
        harmonizedSystemCode: "harmonizedSystemCode_example",
        marketplaceItemProperties: {},
        images: [
          {
            type: "type_example",
            url: "url_example",
            label: "label_example",
            name: "name_example",
            position: 1,
          },
        ],
        productImagesIds: [
          "productImagesIds_example",
        ],
        relatedProductsIds: [
          "relatedProductsIds_example",
        ],
        upSellProductsIds: [
          "upSellProductsIds_example",
        ],
        crossSellProductsIds: [
          "crossSellProductsIds_example",
        ],
      },
    ],
  },
};

const data = await apiInstance.productVariantAddBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantAddBatch** | **ProductVariantAddBatch**|  |


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

# **productVariantDelete**
> AttributeValueDelete200Response productVariantDelete()

Delete variant.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantDeleteRequest = {
    // Defines variant removal, specified by variant id
  id: "10",
    // Defines product\'s id where the variant has to be deleted
  productId: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productVariantDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Defines variant removal, specified by variant id | defaults to undefined
 **productId** | [**string**] | Defines product\&#39;s id where the variant has to be deleted | defaults to undefined
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

# **productVariantDeleteBatch**
> CategoryAddBatch200Response productVariantDeleteBatch(productVariantDeleteBatch)

Remove product variants from the store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantDeleteBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantDeleteBatchRequest = {
  
  productVariantDeleteBatch: {
    clearCache: false,
    reindex: false,
    payload: [
      {
        productId: "productId_example",
        id: "id_example",
        storeId: "storeId_example",
      },
    ],
  },
};

const data = await apiInstance.productVariantDeleteBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantDeleteBatch** | **ProductVariantDeleteBatch**|  |


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

# **productVariantImageAdd**
> ProductVariantImageAdd200Response productVariantImageAdd(productVariantImageAdd)

Add image to product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantImageAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantImageAddRequest = {
  
  productVariantImageAdd: {
    productId: "10",
    productVariantId: "45",
    storeId: "1",
    imageName: "abibas.png",
    type: "base",
    url: "http://docs.api2cart.com/img/logo.png",
    content: "/9j/4AAQSkZ...gD/2Q==",
    label: "This cool image",
    mime: "image/jpeg",
    position: 5,
    optionId: "5",
  },
};

const data = await apiInstance.productVariantImageAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantImageAdd** | **ProductVariantImageAdd**|  |


### Return type

**ProductVariantImageAdd200Response**

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

# **productVariantImageDelete**
> AttributeDelete200Response productVariantImageDelete()

Delete  image to product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantImageDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantImageDeleteRequest = {
    // Defines product id where the variant image should be deleted
  productId: "10",
    // Defines product\'s variants specified by variant id
  productVariantId: "45",
    // Entity id
  id: "10",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productVariantImageDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | Defines product id where the variant image should be deleted | defaults to undefined
 **productVariantId** | [**string**] | Defines product\&#39;s variants specified by variant id | defaults to undefined
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

# **productVariantPriceAdd**
> CartValidate200Response productVariantPriceAdd(productVariantPriceAdd)

Add some prices to the product variant.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantPriceAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantPriceAddRequest = {
  
  productVariantPriceAdd: {
    id: "10",
    productId: "10",
    groupPrices: [
      {
        groupId: "groupId_example",
        price: 3.14,
      },
    ],
    storeId: "1",
  },
};

const data = await apiInstance.productVariantPriceAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantPriceAdd** | **ProductVariantPriceAdd**|  |


### Return type

**CartValidate200Response**

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

# **productVariantPriceDelete**
> AttributeDelete200Response productVariantPriceDelete()

Delete some prices of the product variant.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantPriceDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantPriceDeleteRequest = {
    // Defines the variant where the price has to be deleted
  id: "10",
    // Product id
  productId: "10",
    // Defines variants\'s group prices
  groupPrices: "group_prices=6,8,9",
    // Store Id (optional)
  storeId: "1",
};

const data = await apiInstance.productVariantPriceDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Defines the variant where the price has to be deleted | defaults to undefined
 **productId** | [**string**] | Product id | defaults to undefined
 **groupPrices** | [**string**] | Defines variants\&#39;s group prices | defaults to undefined
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

# **productVariantPriceUpdate**
> AccountConfigUpdate200Response productVariantPriceUpdate(productVariantPriceUpdate)

Update some prices of the product variant.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantPriceUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantPriceUpdateRequest = {
  
  productVariantPriceUpdate: {
    id: "10",
    productId: "10",
    groupPrices: [
      {
        id: 1,
        groupId: "groupId_example",
        price: 3.14,
      },
    ],
  },
};

const data = await apiInstance.productVariantPriceUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantPriceUpdate** | **ProductVariantPriceUpdate**|  |


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

# **productVariantUpdate**
> AccountConfigUpdate200Response productVariantUpdate(productVariantUpdate)

Update variant.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantUpdateRequest = {
  
  productVariantUpdate: {
    id: "10",
    productId: "10",
    storeId: "1",
    langId: "3",
    options: [
      {
        optionName: "optionName_example",
        optionValue: "optionValue_example",
      },
    ],
    name: "Bag Green L",
    description: "Product variant",
    shortDescription: "Short description. This is very short description",
    model: "bag_01",
    sku: "bag_01",
    visible: "catalog",
    status: "disabled",
    backorderStatus: "true",
    lowStockThreshold: 1,
    availableForSale: false,
    avail: false,
    isDefault: true,
    isFreeShipping: true,
    taxable: false,
    taxClassId: "9",
    isVirtual: false,
    manageStock: false,
    inStock: true,
    warehouseId: "1",
    reserveQuantity: 1,
    quantity: 6,
    increaseQuantity: 4,
    reduceQuantity: 4,
    price: 99.9,
    specialPrice: 56.9,
    retailPrice: 6.9,
    oldPrice: 99.9,
    costPrice: 65.9,
    fixedCostShippingPrice: 5.5,
    spriceCreate: "2018-08-25 23:56:12",
    spriceExpire: "2018-08-25 23:56:12",
    weight: 23.69,
    barcode: "9770317847001",
    width: 56.12,
    weightUnit: "lb",
    height: 56.12,
    length: 56.12,
    gtin: "12345678912345",
    upc: "9770317847001",
    mpn: "9770317847001",
    ean: "5901234123457",
    isbn: "9783161484100",
    harmonizedSystemCode: "123456",
    countryOfOrigin: "123456",
    metaTitle: "category,test",
    metaDescription: "category,test",
    metaKeywords: "category,test",
    manufacturer: "Samsung",
    reindex: false,
    clearCache: false,
  },
};

const data = await apiInstance.productVariantUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantUpdate** | **ProductVariantUpdate**|  |


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

# **productVariantUpdateBatch**
> CategoryAddBatch200Response productVariantUpdateBatch(productVariantUpdateBatch)

Update products variants on the store.

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiProductVariantUpdateBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiProductVariantUpdateBatchRequest = {
  
  productVariantUpdateBatch: {
    nestedItemsUpdateBehaviour: "replace",
    clearCache: false,
    reindex: false,
    payload: [
      {
        id: "id_example",
        productId: "productId_example",
        name: "name_example",
        description: "description_example",
        shortDescription: "shortDescription_example",
        sku: "sku_example",
        upc: "upc_example",
        mpn: "mpn_example",
        gtin: "gtin_example",
        isbn: "isbn_example",
        status: "status_example",
        price: 3.14,
        specialPrice: 3.14,
        costPrice: 3.14,
        retailPrice: 3.14,
        advancedPrices: [
          {
            value: 3.14,
            groupId: 1,
            quantity: 3.14,
          },
        ],
        quantity: 3.14,
        reserveQuantity: 3.14,
        increaseQuantity: 3.14,
        reduceQuantity: 3.14,
        warehouseId: "warehouseId_example",
        manufacturerId: "manufacturerId_example",
        weight: 3.14,
        height: 3.14,
        length: 3.14,
        width: 3.14,
        storeId: "storeId_example",
        langId: "langId_example",
        taxClassId: "taxClassId_example",
        backorderStatus: "backorderStatus_example",
        visible: "visible_example",
        isDefault: true,
        inStock: true,
        isVirtual: true,
        downloadable: true,
        manageStock: true,
        isFreeShipping: true,
        seoUrl: "seoUrl_example",
        metaTitle: "metaTitle_example",
        metaDescription: "metaDescription_example",
        metaKeywords: [
          "metaKeywords_example",
        ],
        categoriesIds: [
          "categoriesIds_example",
        ],
        storesIds: [
          "storesIds_example",
        ],
        images: [
          {
            type: "type_example",
            url: "url_example",
            label: "label_example",
            name: "name_example",
            position: 1,
          },
        ],
        productImagesIds: [
          "productImagesIds_example",
        ],
        relatedProductsIds: [
          "4",
        ],
        upSellProductsIds: [
          "4",
        ],
        crossSellProductsIds: [
          "4",
        ],
      },
    ],
  },
};

const data = await apiInstance.productVariantUpdateBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productVariantUpdateBatch** | **ProductVariantUpdateBatch**|  |


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


