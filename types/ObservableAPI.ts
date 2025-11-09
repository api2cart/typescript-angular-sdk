import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { A2CDateTime } from '../models/A2CDateTime';
import { AccountCartAdd } from '../models/AccountCartAdd';
import { AccountCartAdd200Response } from '../models/AccountCartAdd200Response';
import { AccountCartAdd200ResponseResult } from '../models/AccountCartAdd200ResponseResult';
import { AccountCartAddHybrisWebsitesInner } from '../models/AccountCartAddHybrisWebsitesInner';
import { AccountCartList200Response } from '../models/AccountCartList200Response';
import { AccountCartList200ResponseResult } from '../models/AccountCartList200ResponseResult';
import { AccountCartList200ResponseResultCartsInner } from '../models/AccountCartList200ResponseResultCartsInner';
import { AccountConfigUpdate200Response } from '../models/AccountConfigUpdate200Response';
import { AccountConfigUpdate200ResponseResult } from '../models/AccountConfigUpdate200ResponseResult';
import { AccountFailedWebhooks200Response } from '../models/AccountFailedWebhooks200Response';
import { AccountFailedWebhooks200ResponseResult } from '../models/AccountFailedWebhooks200ResponseResult';
import { AccountFailedWebhooks200ResponseResultWebhookInner } from '../models/AccountFailedWebhooks200ResponseResultWebhookInner';
import { AccountSupportedPlatforms200Response } from '../models/AccountSupportedPlatforms200Response';
import { AccountSupportedPlatforms200ResponseResult } from '../models/AccountSupportedPlatforms200ResponseResult';
import { AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner } from '../models/AccountSupportedPlatforms200ResponseResultSupportedPlatformsInner';
import { AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams } from '../models/AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParams';
import { AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParamsRequiredInnerInner } from '../models/AccountSupportedPlatforms200ResponseResultSupportedPlatformsInnerParamsRequiredInnerInner';
import { AttributeAdd200Response } from '../models/AttributeAdd200Response';
import { AttributeAdd200ResponseResult } from '../models/AttributeAdd200ResponseResult';
import { AttributeAssignGroup200Response } from '../models/AttributeAssignGroup200Response';
import { AttributeAssignGroup200ResponseResult } from '../models/AttributeAssignGroup200ResponseResult';
import { AttributeCount200Response } from '../models/AttributeCount200Response';
import { AttributeCount200ResponseResult } from '../models/AttributeCount200ResponseResult';
import { AttributeDelete200Response } from '../models/AttributeDelete200Response';
import { AttributeDelete200ResponseResult } from '../models/AttributeDelete200ResponseResult';
import { AttributeInfo200Response } from '../models/AttributeInfo200Response';
import { AttributeTypeList200Response } from '../models/AttributeTypeList200Response';
import { AttributeTypeList200ResponseResult } from '../models/AttributeTypeList200ResponseResult';
import { AttributeUnassignGroup200Response } from '../models/AttributeUnassignGroup200Response';
import { AttributeUnassignGroup200ResponseResult } from '../models/AttributeUnassignGroup200ResponseResult';
import { AttributeUpdate200Response } from '../models/AttributeUpdate200Response';
import { AttributeUpdate200ResponseResult } from '../models/AttributeUpdate200ResponseResult';
import { AttributeValueDelete200Response } from '../models/AttributeValueDelete200Response';
import { AttributeValueDelete200ResponseResult } from '../models/AttributeValueDelete200ResponseResult';
import { BaseCustomer } from '../models/BaseCustomer';
import { Basket } from '../models/Basket';
import { BasketInfo200Response } from '../models/BasketInfo200Response';
import { BasketItem } from '../models/BasketItem';
import { BasketItemAdd200Response } from '../models/BasketItemAdd200Response';
import { BasketItemAdd200ResponseResult } from '../models/BasketItemAdd200ResponseResult';
import { BasketItemOption } from '../models/BasketItemOption';
import { BasketLiveShippingService } from '../models/BasketLiveShippingService';
import { BasketLiveShippingServiceCreate200Response } from '../models/BasketLiveShippingServiceCreate200Response';
import { BasketLiveShippingServiceCreate200ResponseResult } from '../models/BasketLiveShippingServiceCreate200ResponseResult';
import { BasketLiveShippingServiceDelete200Response } from '../models/BasketLiveShippingServiceDelete200Response';
import { BasketLiveShippingServiceDelete200ResponseResult } from '../models/BasketLiveShippingServiceDelete200ResponseResult';
import { BasketLiveShippingServiceList200Response } from '../models/BasketLiveShippingServiceList200Response';
import { BasketLiveShippingServiceList200ResponseResult } from '../models/BasketLiveShippingServiceList200ResponseResult';
import { BatchJob } from '../models/BatchJob';
import { BatchJobResult } from '../models/BatchJobResult';
import { BatchJobResultItem } from '../models/BatchJobResultItem';
import { Brand } from '../models/Brand';
import { Carrier } from '../models/Carrier';
import { Cart } from '../models/Cart';
import { CartCatalogPriceRulesCount200Response } from '../models/CartCatalogPriceRulesCount200Response';
import { CartCatalogPriceRulesCount200ResponseResult } from '../models/CartCatalogPriceRulesCount200ResponseResult';
import { CartChannel } from '../models/CartChannel';
import { CartCouponAdd } from '../models/CartCouponAdd';
import { CartCouponAdd200Response } from '../models/CartCouponAdd200Response';
import { CartCouponAdd200ResponseResult } from '../models/CartCouponAdd200ResponseResult';
import { CartCouponCount200Response } from '../models/CartCouponCount200Response';
import { CartCouponCount200ResponseResult } from '../models/CartCouponCount200ResponseResult';
import { CartDelete200Response } from '../models/CartDelete200Response';
import { CartDelete200ResponseResult } from '../models/CartDelete200ResponseResult';
import { CartGiftcardAdd200Response } from '../models/CartGiftcardAdd200Response';
import { CartGiftcardAdd200ResponseResult } from '../models/CartGiftcardAdd200ResponseResult';
import { CartGiftcardCount200Response } from '../models/CartGiftcardCount200Response';
import { CartGiftcardCount200ResponseResult } from '../models/CartGiftcardCount200ResponseResult';
import { CartInfo200Response } from '../models/CartInfo200Response';
import { CartMetaData } from '../models/CartMetaData';
import { CartMethods200Response } from '../models/CartMethods200Response';
import { CartMethods200ResponseResult } from '../models/CartMethods200ResponseResult';
import { CartPluginList200Response } from '../models/CartPluginList200Response';
import { CartPluginList200ResponseResult } from '../models/CartPluginList200ResponseResult';
import { CartScriptAdd200Response } from '../models/CartScriptAdd200Response';
import { CartScriptAdd200ResponseResult } from '../models/CartScriptAdd200ResponseResult';
import { CartShippingMethod } from '../models/CartShippingMethod';
import { CartShippingMethodRate } from '../models/CartShippingMethodRate';
import { CartShippingZone } from '../models/CartShippingZone';
import { CartShippingZone2 } from '../models/CartShippingZone2';
import { CartStoreInfo } from '../models/CartStoreInfo';
import { CartValidate200Response } from '../models/CartValidate200Response';
import { CartValidate200ResponseResult } from '../models/CartValidate200ResponseResult';
import { CartWarehouse } from '../models/CartWarehouse';
import { CatalogPriceRule } from '../models/CatalogPriceRule';
import { CatalogPriceRuleAction } from '../models/CatalogPriceRuleAction';
import { Category } from '../models/Category';
import { CategoryAdd200Response } from '../models/CategoryAdd200Response';
import { CategoryAdd200ResponseResult } from '../models/CategoryAdd200ResponseResult';
import { CategoryAddBatch } from '../models/CategoryAddBatch';
import { CategoryAddBatch200Response } from '../models/CategoryAddBatch200Response';
import { CategoryAddBatch200ResponseResult } from '../models/CategoryAddBatch200ResponseResult';
import { CategoryAddBatchPayloadInner } from '../models/CategoryAddBatchPayloadInner';
import { CategoryAddBatchPayloadInnerImagesInner } from '../models/CategoryAddBatchPayloadInnerImagesInner';
import { CategoryAssign200Response } from '../models/CategoryAssign200Response';
import { CategoryCount200Response } from '../models/CategoryCount200Response';
import { CategoryCount200ResponseResult } from '../models/CategoryCount200ResponseResult';
import { CategoryDelete200Response } from '../models/CategoryDelete200Response';
import { CategoryDelete200ResponseResult } from '../models/CategoryDelete200ResponseResult';
import { CategoryFind200Response } from '../models/CategoryFind200Response';
import { CategoryFind200ResponseResult } from '../models/CategoryFind200ResponseResult';
import { CategoryFind200ResponseResultCategoryInner } from '../models/CategoryFind200ResponseResultCategoryInner';
import { CategoryImageAdd200Response } from '../models/CategoryImageAdd200Response';
import { CategoryImageAdd200ResponseResult } from '../models/CategoryImageAdd200ResponseResult';
import { CategoryInfo200Response } from '../models/CategoryInfo200Response';
import { Child } from '../models/Child';
import { Country } from '../models/Country';
import { Coupon } from '../models/Coupon';
import { CouponAction } from '../models/CouponAction';
import { CouponCode } from '../models/CouponCode';
import { CouponCondition } from '../models/CouponCondition';
import { CouponHistory } from '../models/CouponHistory';
import { Currency } from '../models/Currency';
import { Customer } from '../models/Customer';
import { CustomerAdd } from '../models/CustomerAdd';
import { CustomerAdd200Response } from '../models/CustomerAdd200Response';
import { CustomerAdd200ResponseResult } from '../models/CustomerAdd200ResponseResult';
import { CustomerAddAddressInner } from '../models/CustomerAddAddressInner';
import { CustomerAddConsentsInner } from '../models/CustomerAddConsentsInner';
import { CustomerAddress } from '../models/CustomerAddress';
import { CustomerAddressAdd } from '../models/CustomerAddressAdd';
import { CustomerAttribute } from '../models/CustomerAttribute';
import { CustomerAttributeValue } from '../models/CustomerAttributeValue';
import { CustomerConsent } from '../models/CustomerConsent';
import { CustomerCount200Response } from '../models/CustomerCount200Response';
import { CustomerCount200ResponseResult } from '../models/CustomerCount200ResponseResult';
import { CustomerDelete200Response } from '../models/CustomerDelete200Response';
import { CustomerDelete200ResponseResult } from '../models/CustomerDelete200ResponseResult';
import { CustomerFind200Response } from '../models/CustomerFind200Response';
import { CustomerFind200ResponseResult } from '../models/CustomerFind200ResponseResult';
import { CustomerGroup } from '../models/CustomerGroup';
import { CustomerGroupAdd200Response } from '../models/CustomerGroupAdd200Response';
import { CustomerGroupAdd200ResponseResult } from '../models/CustomerGroupAdd200ResponseResult';
import { CustomerInfo200Response } from '../models/CustomerInfo200Response';
import { CustomerUpdate } from '../models/CustomerUpdate';
import { CustomerUpdateAddressInner } from '../models/CustomerUpdateAddressInner';
import { CustomerWishList } from '../models/CustomerWishList';
import { CustomerWishListItem } from '../models/CustomerWishListItem';
import { Discount } from '../models/Discount';
import { GiftCard } from '../models/GiftCard';
import { Image } from '../models/Image';
import { Info } from '../models/Info';
import { Language } from '../models/Language';
import { MarketplaceProduct } from '../models/MarketplaceProduct';
import { Media } from '../models/Media';
import { ModelResponseAttributeAttributesetList } from '../models/ModelResponseAttributeAttributesetList';
import { ModelResponseAttributeGroupList } from '../models/ModelResponseAttributeGroupList';
import { ModelResponseAttributeList } from '../models/ModelResponseAttributeList';
import { ModelResponseBatchJobList } from '../models/ModelResponseBatchJobList';
import { ModelResponseCartCatalogPriceRulesList } from '../models/ModelResponseCartCatalogPriceRulesList';
import { ModelResponseCartCouponList } from '../models/ModelResponseCartCouponList';
import { ModelResponseCartGiftCardList } from '../models/ModelResponseCartGiftCardList';
import { ModelResponseCartMetaDataList } from '../models/ModelResponseCartMetaDataList';
import { ModelResponseCartScriptList } from '../models/ModelResponseCartScriptList';
import { ModelResponseCartShippingZonesList } from '../models/ModelResponseCartShippingZonesList';
import { ModelResponseCategoryList } from '../models/ModelResponseCategoryList';
import { ModelResponseCustomerAttributeList } from '../models/ModelResponseCustomerAttributeList';
import { ModelResponseCustomerGroupList } from '../models/ModelResponseCustomerGroupList';
import { ModelResponseCustomerList } from '../models/ModelResponseCustomerList';
import { ModelResponseCustomerWishlistList } from '../models/ModelResponseCustomerWishlistList';
import { ModelResponseMarketplaceProductFind } from '../models/ModelResponseMarketplaceProductFind';
import { ModelResponseOrderAbandonedList } from '../models/ModelResponseOrderAbandonedList';
import { ModelResponseOrderList } from '../models/ModelResponseOrderList';
import { ModelResponseOrderPreestimateShippingList } from '../models/ModelResponseOrderPreestimateShippingList';
import { ModelResponseOrderShipmentList } from '../models/ModelResponseOrderShipmentList';
import { ModelResponseOrderStatusList } from '../models/ModelResponseOrderStatusList';
import { ModelResponseOrderTransactionList } from '../models/ModelResponseOrderTransactionList';
import { ModelResponseProductAttributeList } from '../models/ModelResponseProductAttributeList';
import { ModelResponseProductBrandList } from '../models/ModelResponseProductBrandList';
import { ModelResponseProductChildItemList } from '../models/ModelResponseProductChildItemList';
import { ModelResponseProductCurrencyList } from '../models/ModelResponseProductCurrencyList';
import { ModelResponseProductList } from '../models/ModelResponseProductList';
import { ModelResponseProductOptionList } from '../models/ModelResponseProductOptionList';
import { ModelResponseProductReviewList } from '../models/ModelResponseProductReviewList';
import { ModelResponseReturnList } from '../models/ModelResponseReturnList';
import { ModelResponseSubscriberList } from '../models/ModelResponseSubscriberList';
import { ModelResponseTaxClassInfo } from '../models/ModelResponseTaxClassInfo';
import { ModelResponseTaxClassList } from '../models/ModelResponseTaxClassList';
import { Order } from '../models/Order';
import { OrderAbandoned } from '../models/OrderAbandoned';
import { OrderAdd } from '../models/OrderAdd';
import { OrderAdd200Response } from '../models/OrderAdd200Response';
import { OrderAdd200ResponseResult } from '../models/OrderAdd200ResponseResult';
import { OrderAddNoteAttributesInner } from '../models/OrderAddNoteAttributesInner';
import { OrderAddOrderItemInner } from '../models/OrderAddOrderItemInner';
import { OrderAddOrderItemInnerOrderItemOptionInner } from '../models/OrderAddOrderItemInnerOrderItemOptionInner';
import { OrderAddOrderItemInnerOrderItemPropertyInner } from '../models/OrderAddOrderItemInnerOrderItemPropertyInner';
import { OrderCalculate } from '../models/OrderCalculate';
import { OrderCalculate200Response } from '../models/OrderCalculate200Response';
import { OrderCalculateBundle } from '../models/OrderCalculateBundle';
import { OrderCalculateDiscount } from '../models/OrderCalculateDiscount';
import { OrderCalculateItem } from '../models/OrderCalculateItem';
import { OrderCalculateOrderItemInner } from '../models/OrderCalculateOrderItemInner';
import { OrderCalculateOrderItemInnerOrderItemOptionInner } from '../models/OrderCalculateOrderItemInnerOrderItemOptionInner';
import { OrderCalculateShippingRate } from '../models/OrderCalculateShippingRate';
import { OrderCalculateSubtotal } from '../models/OrderCalculateSubtotal';
import { OrderCalculateTax } from '../models/OrderCalculateTax';
import { OrderCount200Response } from '../models/OrderCount200Response';
import { OrderCount200ResponseResult } from '../models/OrderCount200ResponseResult';
import { OrderFinancialStatusList200Response } from '../models/OrderFinancialStatusList200Response';
import { OrderFinancialStatusList200ResponseResult } from '../models/OrderFinancialStatusList200ResponseResult';
import { OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner } from '../models/OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner';
import { OrderFulfillmentStatusList200Response } from '../models/OrderFulfillmentStatusList200Response';
import { OrderFulfillmentStatusList200ResponseResult } from '../models/OrderFulfillmentStatusList200ResponseResult';
import { OrderInfo200Response } from '../models/OrderInfo200Response';
import { OrderItem } from '../models/OrderItem';
import { OrderItemOption } from '../models/OrderItemOption';
import { OrderPaymentMethod } from '../models/OrderPaymentMethod';
import { OrderPreestimateShipping } from '../models/OrderPreestimateShipping';
import { OrderPreestimateShippingList } from '../models/OrderPreestimateShippingList';
import { OrderPreestimateShippingListOrderItemInner } from '../models/OrderPreestimateShippingListOrderItemInner';
import { OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner } from '../models/OrderPreestimateShippingListOrderItemInnerOrderItemOptionInner';
import { OrderRefund } from '../models/OrderRefund';
import { OrderRefundAdd } from '../models/OrderRefundAdd';
import { OrderRefundAdd200Response } from '../models/OrderRefundAdd200Response';
import { OrderRefundAdd200ResponseResult } from '../models/OrderRefundAdd200ResponseResult';
import { OrderRefundAddItemsInner } from '../models/OrderRefundAddItemsInner';
import { OrderReturnAdd } from '../models/OrderReturnAdd';
import { OrderReturnAdd200Response } from '../models/OrderReturnAdd200Response';
import { OrderReturnAdd200ResponseResult } from '../models/OrderReturnAdd200ResponseResult';
import { OrderReturnAddOrderProductsInner } from '../models/OrderReturnAddOrderProductsInner';
import { OrderReturnUpdate } from '../models/OrderReturnUpdate';
import { OrderReturnUpdateOrderProductsInner } from '../models/OrderReturnUpdateOrderProductsInner';
import { OrderShipmentAdd } from '../models/OrderShipmentAdd';
import { OrderShipmentAdd200Response } from '../models/OrderShipmentAdd200Response';
import { OrderShipmentAdd200ResponseResult } from '../models/OrderShipmentAdd200ResponseResult';
import { OrderShipmentAddBatch } from '../models/OrderShipmentAddBatch';
import { OrderShipmentAddBatchPayloadInner } from '../models/OrderShipmentAddBatchPayloadInner';
import { OrderShipmentAddBatchPayloadInnerItemsInner } from '../models/OrderShipmentAddBatchPayloadInnerItemsInner';
import { OrderShipmentAddItemsInner } from '../models/OrderShipmentAddItemsInner';
import { OrderShipmentAddTrackingNumbersInner } from '../models/OrderShipmentAddTrackingNumbersInner';
import { OrderShipmentDelete200Response } from '../models/OrderShipmentDelete200Response';
import { OrderShipmentDelete200ResponseResult } from '../models/OrderShipmentDelete200ResponseResult';
import { OrderShipmentInfo200Response } from '../models/OrderShipmentInfo200Response';
import { OrderShipmentTrackingAdd } from '../models/OrderShipmentTrackingAdd';
import { OrderShipmentTrackingAdd200Response } from '../models/OrderShipmentTrackingAdd200Response';
import { OrderShipmentTrackingAdd200ResponseResult } from '../models/OrderShipmentTrackingAdd200ResponseResult';
import { OrderShipmentUpdate } from '../models/OrderShipmentUpdate';
import { OrderShippingMethod } from '../models/OrderShippingMethod';
import { OrderStatus } from '../models/OrderStatus';
import { OrderStatusHistoryItem } from '../models/OrderStatusHistoryItem';
import { OrderStatusRefund } from '../models/OrderStatusRefund';
import { OrderStatusRefundItem } from '../models/OrderStatusRefundItem';
import { OrderTotal } from '../models/OrderTotal';
import { OrderTotals } from '../models/OrderTotals';
import { OrderTotalsNewDiscount } from '../models/OrderTotalsNewDiscount';
import { OrderTransaction } from '../models/OrderTransaction';
import { Pagination } from '../models/Pagination';
import { Plugin } from '../models/Plugin';
import { PluginList } from '../models/PluginList';
import { Product } from '../models/Product';
import { ProductAdd } from '../models/ProductAdd';
import { ProductAdd200Response } from '../models/ProductAdd200Response';
import { ProductAdd200ResponseResult } from '../models/ProductAdd200ResponseResult';
import { ProductAddBatch } from '../models/ProductAddBatch';
import { ProductAddBatchPayloadInner } from '../models/ProductAddBatchPayloadInner';
import { ProductAddBatchPayloadInnerAdvancedPricesInner } from '../models/ProductAddBatchPayloadInnerAdvancedPricesInner';
import { ProductAddBatchPayloadInnerImagesInner } from '../models/ProductAddBatchPayloadInnerImagesInner';
import { ProductAddBatchPayloadInnerSalesTax } from '../models/ProductAddBatchPayloadInnerSalesTax';
import { ProductAddBestOffer } from '../models/ProductAddBestOffer';
import { ProductAddCertificationsInner } from '../models/ProductAddCertificationsInner';
import { ProductAddCertificationsInnerFilesInner } from '../models/ProductAddCertificationsInnerFilesInner';
import { ProductAddCertificationsInnerImagesInner } from '../models/ProductAddCertificationsInnerImagesInner';
import { ProductAddFilesInner } from '../models/ProductAddFilesInner';
import { ProductAddGroupPricesInner } from '../models/ProductAddGroupPricesInner';
import { ProductAddLogisticInfoInner } from '../models/ProductAddLogisticInfoInner';
import { ProductAddManufacturerInfo } from '../models/ProductAddManufacturerInfo';
import { ProductAddPackageDetails } from '../models/ProductAddPackageDetails';
import { ProductAddPersonalizationDetails } from '../models/ProductAddPersonalizationDetails';
import { ProductAddSalesTax } from '../models/ProductAddSalesTax';
import { ProductAddSellerProfiles } from '../models/ProductAddSellerProfiles';
import { ProductAddShippingDetailsInner } from '../models/ProductAddShippingDetailsInner';
import { ProductAddSizeChart } from '../models/ProductAddSizeChart';
import { ProductAddSpecificsInner } from '../models/ProductAddSpecificsInner';
import { ProductAddSpecificsInnerBookingDetails } from '../models/ProductAddSpecificsInnerBookingDetails';
import { ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner } from '../models/ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner';
import { ProductAddSpecificsInnerBookingDetailsAvailabilitiesInnerTimesInner } from '../models/ProductAddSpecificsInnerBookingDetailsAvailabilitiesInnerTimesInner';
import { ProductAddSpecificsInnerBookingDetailsOverridesInner } from '../models/ProductAddSpecificsInnerBookingDetailsOverridesInner';
import { ProductAddSpecificsInnerFoodDetails } from '../models/ProductAddSpecificsInnerFoodDetails';
import { ProductAddSpecificsInnerGroupProductsDetailsInner } from '../models/ProductAddSpecificsInnerGroupProductsDetailsInner';
import { ProductAddTierPricesInner } from '../models/ProductAddTierPricesInner';
import { ProductAdvancedPrice } from '../models/ProductAdvancedPrice';
import { ProductAttribute } from '../models/ProductAttribute';
import { ProductAttributeValueSet200Response } from '../models/ProductAttributeValueSet200Response';
import { ProductAttributeValueSet200ResponseResult } from '../models/ProductAttributeValueSet200ResponseResult';
import { ProductAttributeValueUnset200Response } from '../models/ProductAttributeValueUnset200Response';
import { ProductAttributeValueUnset200ResponseResult } from '../models/ProductAttributeValueUnset200ResponseResult';
import { ProductChildItemCombination } from '../models/ProductChildItemCombination';
import { ProductChildItemFind200Response } from '../models/ProductChildItemFind200Response';
import { ProductChildItemFind200ResponseResult } from '../models/ProductChildItemFind200ResponseResult';
import { ProductChildItemInfo200Response } from '../models/ProductChildItemInfo200Response';
import { ProductCount200Response } from '../models/ProductCount200Response';
import { ProductCount200ResponseResult } from '../models/ProductCount200ResponseResult';
import { ProductCurrencyAdd200Response } from '../models/ProductCurrencyAdd200Response';
import { ProductCurrencyAdd200ResponseResult } from '../models/ProductCurrencyAdd200ResponseResult';
import { ProductDeleteBatch } from '../models/ProductDeleteBatch';
import { ProductDeleteBatchPayloadInner } from '../models/ProductDeleteBatchPayloadInner';
import { ProductFind200Response } from '../models/ProductFind200Response';
import { ProductFind200ResponseResult } from '../models/ProductFind200ResponseResult';
import { ProductFind200ResponseResultProductInner } from '../models/ProductFind200ResponseResultProductInner';
import { ProductGroupItem } from '../models/ProductGroupItem';
import { ProductGroupPrice } from '../models/ProductGroupPrice';
import { ProductImageAdd } from '../models/ProductImageAdd';
import { ProductImageAdd200Response } from '../models/ProductImageAdd200Response';
import { ProductImageAdd200ResponseResult } from '../models/ProductImageAdd200ResponseResult';
import { ProductImageUpdate200Response } from '../models/ProductImageUpdate200Response';
import { ProductImageUpdate200ResponseResult } from '../models/ProductImageUpdate200ResponseResult';
import { ProductInfo200Response } from '../models/ProductInfo200Response';
import { ProductInventory } from '../models/ProductInventory';
import { ProductManufacturerAdd200Response } from '../models/ProductManufacturerAdd200Response';
import { ProductManufacturerAdd200ResponseResult } from '../models/ProductManufacturerAdd200ResponseResult';
import { ProductOption } from '../models/ProductOption';
import { ProductOptionAdd } from '../models/ProductOptionAdd';
import { ProductOptionAdd200Response } from '../models/ProductOptionAdd200Response';
import { ProductOptionAdd200ResponseResult } from '../models/ProductOptionAdd200ResponseResult';
import { ProductOptionAddValuesInner } from '../models/ProductOptionAddValuesInner';
import { ProductOptionAssign200Response } from '../models/ProductOptionAssign200Response';
import { ProductOptionAssign200ResponseResult } from '../models/ProductOptionAssign200ResponseResult';
import { ProductOptionItem } from '../models/ProductOptionItem';
import { ProductOptionValueAdd200Response } from '../models/ProductOptionValueAdd200Response';
import { ProductOptionValueAdd200ResponseResult } from '../models/ProductOptionValueAdd200ResponseResult';
import { ProductOptionValueAssign200Response } from '../models/ProductOptionValueAssign200Response';
import { ProductOptionValueAssign200ResponseResult } from '../models/ProductOptionValueAssign200ResponseResult';
import { ProductPriceAdd } from '../models/ProductPriceAdd';
import { ProductPriceUpdate } from '../models/ProductPriceUpdate';
import { ProductPriceUpdateGroupPricesInner } from '../models/ProductPriceUpdateGroupPricesInner';
import { ProductReview } from '../models/ProductReview';
import { ProductReviewRating } from '../models/ProductReviewRating';
import { ProductTaxAdd } from '../models/ProductTaxAdd';
import { ProductTaxAdd200Response } from '../models/ProductTaxAdd200Response';
import { ProductTaxAdd200ResponseResult } from '../models/ProductTaxAdd200ResponseResult';
import { ProductTaxAddTaxRatesInner } from '../models/ProductTaxAddTaxRatesInner';
import { ProductTierPrice } from '../models/ProductTierPrice';
import { ProductUpdate } from '../models/ProductUpdate';
import { ProductUpdateBatch } from '../models/ProductUpdateBatch';
import { ProductUpdateBatchPayloadInner } from '../models/ProductUpdateBatchPayloadInner';
import { ProductUpdateBatchPayloadInnerAdvancedPricesInner } from '../models/ProductUpdateBatchPayloadInnerAdvancedPricesInner';
import { ProductUpdateBatchPayloadInnerImagesInner } from '../models/ProductUpdateBatchPayloadInnerImagesInner';
import { ProductVariantAdd } from '../models/ProductVariantAdd';
import { ProductVariantAdd200Response } from '../models/ProductVariantAdd200Response';
import { ProductVariantAdd200ResponseResult } from '../models/ProductVariantAdd200ResponseResult';
import { ProductVariantAddAttributesInner } from '../models/ProductVariantAddAttributesInner';
import { ProductVariantAddBatch } from '../models/ProductVariantAddBatch';
import { ProductVariantAddBatchPayloadInner } from '../models/ProductVariantAddBatchPayloadInner';
import { ProductVariantAddBatchPayloadInnerCombinationInner } from '../models/ProductVariantAddBatchPayloadInnerCombinationInner';
import { ProductVariantDeleteBatch } from '../models/ProductVariantDeleteBatch';
import { ProductVariantDeleteBatchPayloadInner } from '../models/ProductVariantDeleteBatchPayloadInner';
import { ProductVariantImageAdd } from '../models/ProductVariantImageAdd';
import { ProductVariantImageAdd200Response } from '../models/ProductVariantImageAdd200Response';
import { ProductVariantImageAdd200ResponseResult } from '../models/ProductVariantImageAdd200ResponseResult';
import { ProductVariantPriceAdd } from '../models/ProductVariantPriceAdd';
import { ProductVariantPriceUpdate } from '../models/ProductVariantPriceUpdate';
import { ProductVariantUpdate } from '../models/ProductVariantUpdate';
import { ProductVariantUpdateBatch } from '../models/ProductVariantUpdateBatch';
import { ProductVariantUpdateBatchPayloadInner } from '../models/ProductVariantUpdateBatchPayloadInner';
import { ProductVariantUpdateOptionsInner } from '../models/ProductVariantUpdateOptionsInner';
import { ResponseAttributeAttributesetListResult } from '../models/ResponseAttributeAttributesetListResult';
import { ResponseAttributeGroupListResult } from '../models/ResponseAttributeGroupListResult';
import { ResponseAttributeListResult } from '../models/ResponseAttributeListResult';
import { ResponseBatchJobListResult } from '../models/ResponseBatchJobListResult';
import { ResponseBatchJobResult } from '../models/ResponseBatchJobResult';
import { ResponseCartCatalogPriceRulesListResult } from '../models/ResponseCartCatalogPriceRulesListResult';
import { ResponseCartCouponListResult } from '../models/ResponseCartCouponListResult';
import { ResponseCartGiftcardListResult } from '../models/ResponseCartGiftcardListResult';
import { ResponseCartMetaDataListResult } from '../models/ResponseCartMetaDataListResult';
import { ResponseCartScriptListResult } from '../models/ResponseCartScriptListResult';
import { ResponseCartShippingZonesListResult } from '../models/ResponseCartShippingZonesListResult';
import { ResponseCategoryListResult } from '../models/ResponseCategoryListResult';
import { ResponseCustomerAttributeListResult } from '../models/ResponseCustomerAttributeListResult';
import { ResponseCustomerGroupListResult } from '../models/ResponseCustomerGroupListResult';
import { ResponseCustomerListResult } from '../models/ResponseCustomerListResult';
import { ResponseCustomerWishlistListResult } from '../models/ResponseCustomerWishlistListResult';
import { ResponseMarketplaceProductFindResult } from '../models/ResponseMarketplaceProductFindResult';
import { ResponseOrderAbandonedListResult } from '../models/ResponseOrderAbandonedListResult';
import { ResponseOrderListResult } from '../models/ResponseOrderListResult';
import { ResponseOrderPreestimateShippingListResult } from '../models/ResponseOrderPreestimateShippingListResult';
import { ResponseOrderShipmentListResult } from '../models/ResponseOrderShipmentListResult';
import { ResponseOrderStatusListResult } from '../models/ResponseOrderStatusListResult';
import { ResponseOrderTransactionListResult } from '../models/ResponseOrderTransactionListResult';
import { ResponseProductAttributeListResult } from '../models/ResponseProductAttributeListResult';
import { ResponseProductBrandListResult } from '../models/ResponseProductBrandListResult';
import { ResponseProductChildItemListResult } from '../models/ResponseProductChildItemListResult';
import { ResponseProductCurrencyListResult } from '../models/ResponseProductCurrencyListResult';
import { ResponseProductListResult } from '../models/ResponseProductListResult';
import { ResponseProductOptionListResult } from '../models/ResponseProductOptionListResult';
import { ResponseProductReviewListResult } from '../models/ResponseProductReviewListResult';
import { ResponseReturnListResult } from '../models/ResponseReturnListResult';
import { ResponseSubscriberListResult } from '../models/ResponseSubscriberListResult';
import { ResponseTaxClassInfoResult } from '../models/ResponseTaxClassInfoResult';
import { ResponseTaxClassListResult } from '../models/ResponseTaxClassListResult';
import { Return } from '../models/Return';
import { ReturnAction } from '../models/ReturnAction';
import { ReturnActionList200Response } from '../models/ReturnActionList200Response';
import { ReturnActionList200ResponseResult } from '../models/ReturnActionList200ResponseResult';
import { ReturnCount200Response } from '../models/ReturnCount200Response';
import { ReturnCount200ResponseResult } from '../models/ReturnCount200ResponseResult';
import { ReturnInfo200Response } from '../models/ReturnInfo200Response';
import { ReturnOrderProduct } from '../models/ReturnOrderProduct';
import { ReturnReason } from '../models/ReturnReason';
import { ReturnReasonList200Response } from '../models/ReturnReasonList200Response';
import { ReturnReasonList200ResponseResult } from '../models/ReturnReasonList200ResponseResult';
import { ReturnStatus } from '../models/ReturnStatus';
import { ReturnStatusList200Response } from '../models/ReturnStatusList200Response';
import { ReturnStatusList200ResponseResult } from '../models/ReturnStatusList200ResponseResult';
import { Script } from '../models/Script';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { ShipmentTrackingNumber } from '../models/ShipmentTrackingNumber';
import { SpecialPrice } from '../models/SpecialPrice';
import { State } from '../models/State';
import { Status } from '../models/Status';
import { StoreAttribute } from '../models/StoreAttribute';
import { StoreAttributeAttributeSet } from '../models/StoreAttributeAttributeSet';
import { StoreAttributeGroup } from '../models/StoreAttributeGroup';
import { Subscriber } from '../models/Subscriber';
import { TaxClass } from '../models/TaxClass';
import { TaxClassCountries } from '../models/TaxClassCountries';
import { TaxClassRate } from '../models/TaxClassRate';
import { TaxClassStates } from '../models/TaxClassStates';
import { TaxClassZipCodes } from '../models/TaxClassZipCodes';
import { TaxClassZipCodesRange } from '../models/TaxClassZipCodesRange';
import { Webhook } from '../models/Webhook';
import { WebhookCount200Response } from '../models/WebhookCount200Response';
import { WebhookCount200ResponseResult } from '../models/WebhookCount200ResponseResult';
import { WebhookEvents200Response } from '../models/WebhookEvents200Response';
import { WebhookEvents200ResponseResult } from '../models/WebhookEvents200ResponseResult';
import { WebhookEvents200ResponseResultEventsInner } from '../models/WebhookEvents200ResponseResultEventsInner';
import { WebhookList200Response } from '../models/WebhookList200Response';
import { WebhookList200ResponseResult } from '../models/WebhookList200ResponseResult';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     * Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.
     * account.cart.add
     * @param accountCartAdd
     */
    public accountCartAddWithHttpInfo(accountCartAdd: AccountCartAdd, _options?: Configuration): Observable<HttpInfo<AccountCartAdd200Response>> {
        const requestContextPromise = this.requestFactory.accountCartAdd(accountCartAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountCartAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.
     * account.cart.add
     * @param accountCartAdd
     */
    public accountCartAdd(accountCartAdd: AccountCartAdd, _options?: Configuration): Observable<AccountCartAdd200Response> {
        return this.accountCartAddWithHttpInfo(accountCartAdd, _options).pipe(map((apiResponse: HttpInfo<AccountCartAdd200Response>) => apiResponse.data));
    }

    /**
     * This method lets you get a list of online stores connected to your API2Cart account. You can get the number of API requests to each store if you specify a period using parameters (request_from_date, request_to_date). The total_calls field is displayed only if there are parameters (request_from_date, request_to_date).
     * account.cart.list
     * @param [storeUrl] A web address of a store
     * @param [storeKey] Find store by store key
     * @param [requestFromDate] Retrieve entities from their creation date
     * @param [requestToDate] Retrieve entities to their creation date
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public accountCartListWithHttpInfo(storeUrl?: string, storeKey?: string, requestFromDate?: string, requestToDate?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<AccountCartList200Response>> {
        const requestContextPromise = this.requestFactory.accountCartList(storeUrl, storeKey, requestFromDate, requestToDate, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountCartListWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method lets you get a list of online stores connected to your API2Cart account. You can get the number of API requests to each store if you specify a period using parameters (request_from_date, request_to_date). The total_calls field is displayed only if there are parameters (request_from_date, request_to_date).
     * account.cart.list
     * @param [storeUrl] A web address of a store
     * @param [storeKey] Find store by store key
     * @param [requestFromDate] Retrieve entities from their creation date
     * @param [requestToDate] Retrieve entities to their creation date
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public accountCartList(storeUrl?: string, storeKey?: string, requestFromDate?: string, requestToDate?: string, params?: string, exclude?: string, _options?: Configuration): Observable<AccountCartList200Response> {
        return this.accountCartListWithHttpInfo(storeUrl, storeKey, requestFromDate, requestToDate, params, exclude, _options).pipe(map((apiResponse: HttpInfo<AccountCartList200Response>) => apiResponse.data));
    }

    /**
     * Use this method to automate the change of credentials used to connect online stores. The list of supported parameters differs depending on the platform.
     * account.config.update
     * @param [replaceParameters] Identifies if there is a necessity to replace parameters
     * @param [newStoreUrl] The web address of the store you want to update to connect to API2Cart
     * @param [newStoreKey] Update store key
     * @param [bridgeUrl] This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
     * @param [storeRoot] Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter)
     * @param [dbTablesPrefix] DB tables prefix
     * @param [userAgent] This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store\&#39;s firewall may block specific values.
     * @param [_3dcartPrivateKey] 3DCart Private Key
     * @param [_3dcartAccessToken] 3DCart Token
     * @param [_3dcartapiApiKey] 3DCart API Key
     * @param [amazonSpClientId] Amazon SP API app client id
     * @param [amazonSpClientSecret] Amazon SP API app client secret
     * @param [amazonSpRefreshToken] Amazon SP API OAuth refresh token
     * @param [amazonSpAwsRegion] Amazon AWS Region
     * @param [amazonSpApiEnvironment] Amazon SP API environment
     * @param [amazonSellerId] Amazon Seller ID (Merchant token)
     * @param [aspdotnetstorefrontApiUser] It\&#39;s a AspDotNetStorefront account for which API is available
     * @param [aspdotnetstorefrontApiPass] AspDotNetStorefront API Password
     * @param [americommerceAppId] Americommerce App ID
     * @param [americommerceAppSecret] Americommerce App Secret
     * @param [americommerceAccessToken] Americommerce Access Token
     * @param [americommerceRefreshToken] Americommerce Refresh Token
     * @param [bigcommerceapiAdminAccount] It\&#39;s a BigCommerce account for which API is enabled
     * @param [bigcommerceapiApiPath] BigCommerce API URL
     * @param [bigcommerceapiApiKey] Bigcommerce API Key
     * @param [bigcommerceapiClientId] Client ID of the requesting app
     * @param [bigcommerceapiAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [bigcommerceapiContext] API Path section unique to the store
     * @param [bolApiKey] Bol API Key
     * @param [bolApiSecret] Bol API Secret
     * @param [bolRetailerId] Bol Retailer ID
     * @param [demandwareClientId] Demandware client id
     * @param [demandwareApiPassword] Demandware api password
     * @param [demandwareUserName] Demandware user name
     * @param [demandwareUserPassword] Demandware user password
     * @param [ebayClientId] Application ID (AppID).
     * @param [ebayClientSecret] Shared Secret from eBay application
     * @param [ebayRuname] The RuName value that eBay assigns to your application.
     * @param [ebayAccessToken] Used to authenticate API requests.
     * @param [ebayRefreshToken] Used to renew the access token.
     * @param [ebayEnvironment] eBay environment
     * @param [ebaySiteId] eBay global ID
     * @param [ecwidAcessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [ecwidStoreId] Store Id
     * @param [lazadaAppId] Lazada App ID
     * @param [lazadaAppSecret] Lazada App Secret
     * @param [lazadaRefreshToken] Lazada Refresh Token
     * @param [lazadaRegion] Lazada API endpoint Region
     * @param [etsyKeystring] Etsy keystring
     * @param [etsySharedSecret] Etsy shared secret
     * @param [etsyAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [etsyTokenSecret] Secret token authorizing the app to access resources on behalf of a user
     * @param [etsyClientId] Etsy Client Id
     * @param [etsyRefreshToken] Etsy Refresh token
     * @param [facebookAppId] Facebook App ID
     * @param [facebookAppSecret] Facebook App Secret
     * @param [facebookAccessToken] Facebook Access Token
     * @param [facebookBusinessId] Facebook Business ID
     * @param [netoApiKey] Neto API Key
     * @param [netoApiUsername] Neto User Name
     * @param [shoplineAccessToken] Shopline APP Key
     * @param [shoplineAppKey] Shopline APP Key
     * @param [shoplineAppSecret] Shopline App Secret
     * @param [shoplineSharedSecret] Shopline Shared Secret
     * @param [shopifyAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [shopifyApiKey] Shopify API Key
     * @param [shopifyApiPassword] Shopify API Password
     * @param [shopifySharedSecret] Shared secret
     * @param [shopeePartnerId] Shopee Partner ID
     * @param [shopeePartnerKey] Shopee Partner Key
     * @param [shopeeShopId] Shopee SHOP ID
     * @param [shopeeRefreshToken] Shopee Refresh Token
     * @param [shopeeRegion] Shopee API endpoint Region. Use for Chinese Mainland or Brazil.
     * @param [shopeeEnvironment] Shopee Environment
     * @param [shoplazzaAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [shoplazzaSharedSecret] Shared secret
     * @param [mivaAccessToken] Miva access token
     * @param [mivaSignature] Miva signature
     * @param [shopwareAccessKey] Shopware access key
     * @param [unasApiKey] UNAS API Key
     * @param [shopwareApiKey] Shopware api key
     * @param [shopwareApiSecret] Shopware client secret access key
     * @param [bigcartelUserName] Subdomain of store
     * @param [bigcartelPassword] BigCartel account password
     * @param [bricklinkConsumerKey] Bricklink Consumer Key
     * @param [bricklinkConsumerSecret] Bricklink Consumer Secret
     * @param [bricklinkToken] Bricklink Access Token
     * @param [bricklinkTokenSecret] Bricklink Access Token Secret
     * @param [volusionLogin] It\&#39;s a Volusion account for which API is enabled
     * @param [volusionPassword] Volusion API Password
     * @param [walmartClientId] Walmart client ID. For the region \&#39;ca\&#39; use Consumer ID
     * @param [walmartClientSecret] Walmart client secret. For the region \&#39;ca\&#39; use Private Key
     * @param [walmartEnvironment] Walmart environment
     * @param [walmartChannelType] Walmart WM_CONSUMER.CHANNEL.TYPE header
     * @param [walmartRegion] Walmart region
     * @param [squareClientId] Square (Weebly) Client ID
     * @param [squareClientSecret] Square (Weebly) Client Secret
     * @param [squareRefreshToken] Square (Weebly) Refresh Token
     * @param [squarespaceApiKey] Squarespace API Key
     * @param [squarespaceClientId] Squarespace Connector Client ID
     * @param [squarespaceClientSecret] Squarespace Connector Client Secret
     * @param [squarespaceAccessToken] Squarespace access token
     * @param [squarespaceRefreshToken] Squarespace refresh token
     * @param [hybrisClientId] Omni Commerce Connector Client ID
     * @param [hybrisClientSecret] Omni Commerce Connector Client Secret
     * @param [hybrisUsername] User Name
     * @param [hybrisPassword] User password
     * @param [hybrisWebsites] Websites to stores mapping data
     * @param [lightspeedApiKey] LightSpeed api key
     * @param [lightspeedApiSecret] LightSpeed api secret
     * @param [commercehqApiKey] CommerceHQ api key
     * @param [commercehqApiPassword] CommerceHQ api password
     * @param [wcConsumerKey] Woocommerce consumer key
     * @param [wcConsumerSecret] Woocommerce consumer secret
     * @param [magentoConsumerKey] Magento Consumer Key
     * @param [magentoConsumerSecret] Magento Consumer Secret
     * @param [magentoAccessToken] Magento Access Token
     * @param [magentoTokenSecret] Magento Token Secret
     * @param [prestashopWebserviceKey] Prestashop webservice key
     * @param [wixAppId] Wix App ID
     * @param [wixAppSecretKey] Wix App Secret Key
     * @param [wixInstanceId] Wix Instance ID
     * @param [wixRefreshToken] Wix refresh token
     * @param [mercadoLibreAppId] Mercado Libre App ID
     * @param [mercadoLibreAppSecretKey] Mercado Libre App Secret Key
     * @param [mercadoLibreRefreshToken] Mercado Libre Refresh Token
     * @param [zidClientId] Zid Client ID
     * @param [zidClientSecret] Zid Client Secret
     * @param [zidAccessToken] Zid Access Token
     * @param [zidAuthorization] Zid Authorization
     * @param [zidRefreshToken] Zid refresh token
     * @param [flipkartClientId] Flipkart Client ID
     * @param [flipkartClientSecret] Flipkart Client Secret
     * @param [allegroClientId] Allegro Client ID
     * @param [allegroClientSecret] Allegro Client Secret
     * @param [allegroAccessToken] Allegro Access Token
     * @param [allegroRefreshToken] Allegro Refresh Token
     * @param [allegroEnvironment] Allegro Environment
     * @param [zohoClientId] Zoho Client ID
     * @param [zohoClientSecret] Zoho Client Secret
     * @param [zohoRefreshToken] Zoho Refresh Token
     * @param [zohoRegion] Zoho API endpoint Region
     * @param [tiendanubeUserId] Tiendanube User ID
     * @param [tiendanubeAccessToken] Tiendanube Access Token
     * @param [tiendanubeClientSecret] Tiendanube Client Secret
     * @param [ottoClientId] Otto Client ID
     * @param [ottoClientSecret] Otto Client Secret
     * @param [ottoAppId] Otto App ID
     * @param [ottoRefreshToken] Otto Refresh Token
     * @param [ottoEnvironment] Otto Environment
     * @param [ottoAccessToken] Otto Access Token
     * @param [tiktokshopAppKey] TikTok Shop App Key
     * @param [tiktokshopAppSecret] TikTok Shop App Secret
     * @param [tiktokshopRefreshToken] TikTok Shop Refresh Token
     * @param [tiktokshopAccessToken] TikTok Shop Access Token
     * @param [sallaClientId] Salla Client ID
     * @param [sallaClientSecret] Salla Client Secret
     * @param [sallaRefreshToken] Salla Refresh Token
     * @param [sallaAccessToken] Salla Access Token
     * @param [temuAppKey] Temu App Key
     * @param [temuAppSecret] Temu App Secret
     * @param [temuAccessToken] Temu Access Token
     * @param [temuRegion] Temu API endpoint Region.
     */
    public accountConfigUpdateWithHttpInfo(replaceParameters?: boolean, newStoreUrl?: string, newStoreKey?: string, bridgeUrl?: string, storeRoot?: string, dbTablesPrefix?: string, userAgent?: string, _3dcartPrivateKey?: string, _3dcartAccessToken?: string, _3dcartapiApiKey?: string, amazonSpClientId?: string, amazonSpClientSecret?: string, amazonSpRefreshToken?: string, amazonSpAwsRegion?: string, amazonSpApiEnvironment?: string, amazonSellerId?: string, aspdotnetstorefrontApiUser?: string, aspdotnetstorefrontApiPass?: string, americommerceAppId?: string, americommerceAppSecret?: string, americommerceAccessToken?: string, americommerceRefreshToken?: string, bigcommerceapiAdminAccount?: string, bigcommerceapiApiPath?: string, bigcommerceapiApiKey?: string, bigcommerceapiClientId?: string, bigcommerceapiAccessToken?: string, bigcommerceapiContext?: string, bolApiKey?: string, bolApiSecret?: string, bolRetailerId?: number, demandwareClientId?: string, demandwareApiPassword?: string, demandwareUserName?: string, demandwareUserPassword?: string, ebayClientId?: string, ebayClientSecret?: string, ebayRuname?: string, ebayAccessToken?: string, ebayRefreshToken?: string, ebayEnvironment?: string, ebaySiteId?: number, ecwidAcessToken?: string, ecwidStoreId?: string, lazadaAppId?: string, lazadaAppSecret?: string, lazadaRefreshToken?: string, lazadaRegion?: string, etsyKeystring?: string, etsySharedSecret?: string, etsyAccessToken?: string, etsyTokenSecret?: string, etsyClientId?: string, etsyRefreshToken?: string, facebookAppId?: string, facebookAppSecret?: string, facebookAccessToken?: string, facebookBusinessId?: string, netoApiKey?: string, netoApiUsername?: string, shoplineAccessToken?: string, shoplineAppKey?: string, shoplineAppSecret?: string, shoplineSharedSecret?: string, shopifyAccessToken?: string, shopifyApiKey?: string, shopifyApiPassword?: string, shopifySharedSecret?: string, shopeePartnerId?: string, shopeePartnerKey?: string, shopeeShopId?: string, shopeeRefreshToken?: string, shopeeRegion?: string, shopeeEnvironment?: string, shoplazzaAccessToken?: string, shoplazzaSharedSecret?: string, mivaAccessToken?: string, mivaSignature?: string, shopwareAccessKey?: string, unasApiKey?: string, shopwareApiKey?: string, shopwareApiSecret?: string, bigcartelUserName?: string, bigcartelPassword?: string, bricklinkConsumerKey?: string, bricklinkConsumerSecret?: string, bricklinkToken?: string, bricklinkTokenSecret?: string, volusionLogin?: string, volusionPassword?: string, walmartClientId?: string, walmartClientSecret?: string, walmartEnvironment?: string, walmartChannelType?: string, walmartRegion?: string, squareClientId?: string, squareClientSecret?: string, squareRefreshToken?: string, squarespaceApiKey?: string, squarespaceClientId?: string, squarespaceClientSecret?: string, squarespaceAccessToken?: string, squarespaceRefreshToken?: string, hybrisClientId?: string, hybrisClientSecret?: string, hybrisUsername?: string, hybrisPassword?: string, hybrisWebsites?: Array<string>, lightspeedApiKey?: string, lightspeedApiSecret?: string, commercehqApiKey?: string, commercehqApiPassword?: string, wcConsumerKey?: string, wcConsumerSecret?: string, magentoConsumerKey?: string, magentoConsumerSecret?: string, magentoAccessToken?: string, magentoTokenSecret?: string, prestashopWebserviceKey?: string, wixAppId?: string, wixAppSecretKey?: string, wixInstanceId?: string, wixRefreshToken?: string, mercadoLibreAppId?: string, mercadoLibreAppSecretKey?: string, mercadoLibreRefreshToken?: string, zidClientId?: number, zidClientSecret?: string, zidAccessToken?: string, zidAuthorization?: string, zidRefreshToken?: string, flipkartClientId?: string, flipkartClientSecret?: string, allegroClientId?: string, allegroClientSecret?: string, allegroAccessToken?: string, allegroRefreshToken?: string, allegroEnvironment?: string, zohoClientId?: string, zohoClientSecret?: string, zohoRefreshToken?: string, zohoRegion?: string, tiendanubeUserId?: number, tiendanubeAccessToken?: string, tiendanubeClientSecret?: string, ottoClientId?: string, ottoClientSecret?: string, ottoAppId?: string, ottoRefreshToken?: string, ottoEnvironment?: string, ottoAccessToken?: string, tiktokshopAppKey?: string, tiktokshopAppSecret?: string, tiktokshopRefreshToken?: string, tiktokshopAccessToken?: string, sallaClientId?: string, sallaClientSecret?: string, sallaRefreshToken?: string, sallaAccessToken?: string, temuAppKey?: string, temuAppSecret?: string, temuAccessToken?: string, temuRegion?: string, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.accountConfigUpdate(replaceParameters, newStoreUrl, newStoreKey, bridgeUrl, storeRoot, dbTablesPrefix, userAgent, _3dcartPrivateKey, _3dcartAccessToken, _3dcartapiApiKey, amazonSpClientId, amazonSpClientSecret, amazonSpRefreshToken, amazonSpAwsRegion, amazonSpApiEnvironment, amazonSellerId, aspdotnetstorefrontApiUser, aspdotnetstorefrontApiPass, americommerceAppId, americommerceAppSecret, americommerceAccessToken, americommerceRefreshToken, bigcommerceapiAdminAccount, bigcommerceapiApiPath, bigcommerceapiApiKey, bigcommerceapiClientId, bigcommerceapiAccessToken, bigcommerceapiContext, bolApiKey, bolApiSecret, bolRetailerId, demandwareClientId, demandwareApiPassword, demandwareUserName, demandwareUserPassword, ebayClientId, ebayClientSecret, ebayRuname, ebayAccessToken, ebayRefreshToken, ebayEnvironment, ebaySiteId, ecwidAcessToken, ecwidStoreId, lazadaAppId, lazadaAppSecret, lazadaRefreshToken, lazadaRegion, etsyKeystring, etsySharedSecret, etsyAccessToken, etsyTokenSecret, etsyClientId, etsyRefreshToken, facebookAppId, facebookAppSecret, facebookAccessToken, facebookBusinessId, netoApiKey, netoApiUsername, shoplineAccessToken, shoplineAppKey, shoplineAppSecret, shoplineSharedSecret, shopifyAccessToken, shopifyApiKey, shopifyApiPassword, shopifySharedSecret, shopeePartnerId, shopeePartnerKey, shopeeShopId, shopeeRefreshToken, shopeeRegion, shopeeEnvironment, shoplazzaAccessToken, shoplazzaSharedSecret, mivaAccessToken, mivaSignature, shopwareAccessKey, unasApiKey, shopwareApiKey, shopwareApiSecret, bigcartelUserName, bigcartelPassword, bricklinkConsumerKey, bricklinkConsumerSecret, bricklinkToken, bricklinkTokenSecret, volusionLogin, volusionPassword, walmartClientId, walmartClientSecret, walmartEnvironment, walmartChannelType, walmartRegion, squareClientId, squareClientSecret, squareRefreshToken, squarespaceApiKey, squarespaceClientId, squarespaceClientSecret, squarespaceAccessToken, squarespaceRefreshToken, hybrisClientId, hybrisClientSecret, hybrisUsername, hybrisPassword, hybrisWebsites, lightspeedApiKey, lightspeedApiSecret, commercehqApiKey, commercehqApiPassword, wcConsumerKey, wcConsumerSecret, magentoConsumerKey, magentoConsumerSecret, magentoAccessToken, magentoTokenSecret, prestashopWebserviceKey, wixAppId, wixAppSecretKey, wixInstanceId, wixRefreshToken, mercadoLibreAppId, mercadoLibreAppSecretKey, mercadoLibreRefreshToken, zidClientId, zidClientSecret, zidAccessToken, zidAuthorization, zidRefreshToken, flipkartClientId, flipkartClientSecret, allegroClientId, allegroClientSecret, allegroAccessToken, allegroRefreshToken, allegroEnvironment, zohoClientId, zohoClientSecret, zohoRefreshToken, zohoRegion, tiendanubeUserId, tiendanubeAccessToken, tiendanubeClientSecret, ottoClientId, ottoClientSecret, ottoAppId, ottoRefreshToken, ottoEnvironment, ottoAccessToken, tiktokshopAppKey, tiktokshopAppSecret, tiktokshopRefreshToken, tiktokshopAccessToken, sallaClientId, sallaClientSecret, sallaRefreshToken, sallaAccessToken, temuAppKey, temuAppSecret, temuAccessToken, temuRegion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountConfigUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this method to automate the change of credentials used to connect online stores. The list of supported parameters differs depending on the platform.
     * account.config.update
     * @param [replaceParameters] Identifies if there is a necessity to replace parameters
     * @param [newStoreUrl] The web address of the store you want to update to connect to API2Cart
     * @param [newStoreKey] Update store key
     * @param [bridgeUrl] This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
     * @param [storeRoot] Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter)
     * @param [dbTablesPrefix] DB tables prefix
     * @param [userAgent] This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store\&#39;s firewall may block specific values.
     * @param [_3dcartPrivateKey] 3DCart Private Key
     * @param [_3dcartAccessToken] 3DCart Token
     * @param [_3dcartapiApiKey] 3DCart API Key
     * @param [amazonSpClientId] Amazon SP API app client id
     * @param [amazonSpClientSecret] Amazon SP API app client secret
     * @param [amazonSpRefreshToken] Amazon SP API OAuth refresh token
     * @param [amazonSpAwsRegion] Amazon AWS Region
     * @param [amazonSpApiEnvironment] Amazon SP API environment
     * @param [amazonSellerId] Amazon Seller ID (Merchant token)
     * @param [aspdotnetstorefrontApiUser] It\&#39;s a AspDotNetStorefront account for which API is available
     * @param [aspdotnetstorefrontApiPass] AspDotNetStorefront API Password
     * @param [americommerceAppId] Americommerce App ID
     * @param [americommerceAppSecret] Americommerce App Secret
     * @param [americommerceAccessToken] Americommerce Access Token
     * @param [americommerceRefreshToken] Americommerce Refresh Token
     * @param [bigcommerceapiAdminAccount] It\&#39;s a BigCommerce account for which API is enabled
     * @param [bigcommerceapiApiPath] BigCommerce API URL
     * @param [bigcommerceapiApiKey] Bigcommerce API Key
     * @param [bigcommerceapiClientId] Client ID of the requesting app
     * @param [bigcommerceapiAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [bigcommerceapiContext] API Path section unique to the store
     * @param [bolApiKey] Bol API Key
     * @param [bolApiSecret] Bol API Secret
     * @param [bolRetailerId] Bol Retailer ID
     * @param [demandwareClientId] Demandware client id
     * @param [demandwareApiPassword] Demandware api password
     * @param [demandwareUserName] Demandware user name
     * @param [demandwareUserPassword] Demandware user password
     * @param [ebayClientId] Application ID (AppID).
     * @param [ebayClientSecret] Shared Secret from eBay application
     * @param [ebayRuname] The RuName value that eBay assigns to your application.
     * @param [ebayAccessToken] Used to authenticate API requests.
     * @param [ebayRefreshToken] Used to renew the access token.
     * @param [ebayEnvironment] eBay environment
     * @param [ebaySiteId] eBay global ID
     * @param [ecwidAcessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [ecwidStoreId] Store Id
     * @param [lazadaAppId] Lazada App ID
     * @param [lazadaAppSecret] Lazada App Secret
     * @param [lazadaRefreshToken] Lazada Refresh Token
     * @param [lazadaRegion] Lazada API endpoint Region
     * @param [etsyKeystring] Etsy keystring
     * @param [etsySharedSecret] Etsy shared secret
     * @param [etsyAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [etsyTokenSecret] Secret token authorizing the app to access resources on behalf of a user
     * @param [etsyClientId] Etsy Client Id
     * @param [etsyRefreshToken] Etsy Refresh token
     * @param [facebookAppId] Facebook App ID
     * @param [facebookAppSecret] Facebook App Secret
     * @param [facebookAccessToken] Facebook Access Token
     * @param [facebookBusinessId] Facebook Business ID
     * @param [netoApiKey] Neto API Key
     * @param [netoApiUsername] Neto User Name
     * @param [shoplineAccessToken] Shopline APP Key
     * @param [shoplineAppKey] Shopline APP Key
     * @param [shoplineAppSecret] Shopline App Secret
     * @param [shoplineSharedSecret] Shopline Shared Secret
     * @param [shopifyAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [shopifyApiKey] Shopify API Key
     * @param [shopifyApiPassword] Shopify API Password
     * @param [shopifySharedSecret] Shared secret
     * @param [shopeePartnerId] Shopee Partner ID
     * @param [shopeePartnerKey] Shopee Partner Key
     * @param [shopeeShopId] Shopee SHOP ID
     * @param [shopeeRefreshToken] Shopee Refresh Token
     * @param [shopeeRegion] Shopee API endpoint Region. Use for Chinese Mainland or Brazil.
     * @param [shopeeEnvironment] Shopee Environment
     * @param [shoplazzaAccessToken] Access token authorizing the app to access resources on behalf of a user
     * @param [shoplazzaSharedSecret] Shared secret
     * @param [mivaAccessToken] Miva access token
     * @param [mivaSignature] Miva signature
     * @param [shopwareAccessKey] Shopware access key
     * @param [unasApiKey] UNAS API Key
     * @param [shopwareApiKey] Shopware api key
     * @param [shopwareApiSecret] Shopware client secret access key
     * @param [bigcartelUserName] Subdomain of store
     * @param [bigcartelPassword] BigCartel account password
     * @param [bricklinkConsumerKey] Bricklink Consumer Key
     * @param [bricklinkConsumerSecret] Bricklink Consumer Secret
     * @param [bricklinkToken] Bricklink Access Token
     * @param [bricklinkTokenSecret] Bricklink Access Token Secret
     * @param [volusionLogin] It\&#39;s a Volusion account for which API is enabled
     * @param [volusionPassword] Volusion API Password
     * @param [walmartClientId] Walmart client ID. For the region \&#39;ca\&#39; use Consumer ID
     * @param [walmartClientSecret] Walmart client secret. For the region \&#39;ca\&#39; use Private Key
     * @param [walmartEnvironment] Walmart environment
     * @param [walmartChannelType] Walmart WM_CONSUMER.CHANNEL.TYPE header
     * @param [walmartRegion] Walmart region
     * @param [squareClientId] Square (Weebly) Client ID
     * @param [squareClientSecret] Square (Weebly) Client Secret
     * @param [squareRefreshToken] Square (Weebly) Refresh Token
     * @param [squarespaceApiKey] Squarespace API Key
     * @param [squarespaceClientId] Squarespace Connector Client ID
     * @param [squarespaceClientSecret] Squarespace Connector Client Secret
     * @param [squarespaceAccessToken] Squarespace access token
     * @param [squarespaceRefreshToken] Squarespace refresh token
     * @param [hybrisClientId] Omni Commerce Connector Client ID
     * @param [hybrisClientSecret] Omni Commerce Connector Client Secret
     * @param [hybrisUsername] User Name
     * @param [hybrisPassword] User password
     * @param [hybrisWebsites] Websites to stores mapping data
     * @param [lightspeedApiKey] LightSpeed api key
     * @param [lightspeedApiSecret] LightSpeed api secret
     * @param [commercehqApiKey] CommerceHQ api key
     * @param [commercehqApiPassword] CommerceHQ api password
     * @param [wcConsumerKey] Woocommerce consumer key
     * @param [wcConsumerSecret] Woocommerce consumer secret
     * @param [magentoConsumerKey] Magento Consumer Key
     * @param [magentoConsumerSecret] Magento Consumer Secret
     * @param [magentoAccessToken] Magento Access Token
     * @param [magentoTokenSecret] Magento Token Secret
     * @param [prestashopWebserviceKey] Prestashop webservice key
     * @param [wixAppId] Wix App ID
     * @param [wixAppSecretKey] Wix App Secret Key
     * @param [wixInstanceId] Wix Instance ID
     * @param [wixRefreshToken] Wix refresh token
     * @param [mercadoLibreAppId] Mercado Libre App ID
     * @param [mercadoLibreAppSecretKey] Mercado Libre App Secret Key
     * @param [mercadoLibreRefreshToken] Mercado Libre Refresh Token
     * @param [zidClientId] Zid Client ID
     * @param [zidClientSecret] Zid Client Secret
     * @param [zidAccessToken] Zid Access Token
     * @param [zidAuthorization] Zid Authorization
     * @param [zidRefreshToken] Zid refresh token
     * @param [flipkartClientId] Flipkart Client ID
     * @param [flipkartClientSecret] Flipkart Client Secret
     * @param [allegroClientId] Allegro Client ID
     * @param [allegroClientSecret] Allegro Client Secret
     * @param [allegroAccessToken] Allegro Access Token
     * @param [allegroRefreshToken] Allegro Refresh Token
     * @param [allegroEnvironment] Allegro Environment
     * @param [zohoClientId] Zoho Client ID
     * @param [zohoClientSecret] Zoho Client Secret
     * @param [zohoRefreshToken] Zoho Refresh Token
     * @param [zohoRegion] Zoho API endpoint Region
     * @param [tiendanubeUserId] Tiendanube User ID
     * @param [tiendanubeAccessToken] Tiendanube Access Token
     * @param [tiendanubeClientSecret] Tiendanube Client Secret
     * @param [ottoClientId] Otto Client ID
     * @param [ottoClientSecret] Otto Client Secret
     * @param [ottoAppId] Otto App ID
     * @param [ottoRefreshToken] Otto Refresh Token
     * @param [ottoEnvironment] Otto Environment
     * @param [ottoAccessToken] Otto Access Token
     * @param [tiktokshopAppKey] TikTok Shop App Key
     * @param [tiktokshopAppSecret] TikTok Shop App Secret
     * @param [tiktokshopRefreshToken] TikTok Shop Refresh Token
     * @param [tiktokshopAccessToken] TikTok Shop Access Token
     * @param [sallaClientId] Salla Client ID
     * @param [sallaClientSecret] Salla Client Secret
     * @param [sallaRefreshToken] Salla Refresh Token
     * @param [sallaAccessToken] Salla Access Token
     * @param [temuAppKey] Temu App Key
     * @param [temuAppSecret] Temu App Secret
     * @param [temuAccessToken] Temu Access Token
     * @param [temuRegion] Temu API endpoint Region.
     */
    public accountConfigUpdate(replaceParameters?: boolean, newStoreUrl?: string, newStoreKey?: string, bridgeUrl?: string, storeRoot?: string, dbTablesPrefix?: string, userAgent?: string, _3dcartPrivateKey?: string, _3dcartAccessToken?: string, _3dcartapiApiKey?: string, amazonSpClientId?: string, amazonSpClientSecret?: string, amazonSpRefreshToken?: string, amazonSpAwsRegion?: string, amazonSpApiEnvironment?: string, amazonSellerId?: string, aspdotnetstorefrontApiUser?: string, aspdotnetstorefrontApiPass?: string, americommerceAppId?: string, americommerceAppSecret?: string, americommerceAccessToken?: string, americommerceRefreshToken?: string, bigcommerceapiAdminAccount?: string, bigcommerceapiApiPath?: string, bigcommerceapiApiKey?: string, bigcommerceapiClientId?: string, bigcommerceapiAccessToken?: string, bigcommerceapiContext?: string, bolApiKey?: string, bolApiSecret?: string, bolRetailerId?: number, demandwareClientId?: string, demandwareApiPassword?: string, demandwareUserName?: string, demandwareUserPassword?: string, ebayClientId?: string, ebayClientSecret?: string, ebayRuname?: string, ebayAccessToken?: string, ebayRefreshToken?: string, ebayEnvironment?: string, ebaySiteId?: number, ecwidAcessToken?: string, ecwidStoreId?: string, lazadaAppId?: string, lazadaAppSecret?: string, lazadaRefreshToken?: string, lazadaRegion?: string, etsyKeystring?: string, etsySharedSecret?: string, etsyAccessToken?: string, etsyTokenSecret?: string, etsyClientId?: string, etsyRefreshToken?: string, facebookAppId?: string, facebookAppSecret?: string, facebookAccessToken?: string, facebookBusinessId?: string, netoApiKey?: string, netoApiUsername?: string, shoplineAccessToken?: string, shoplineAppKey?: string, shoplineAppSecret?: string, shoplineSharedSecret?: string, shopifyAccessToken?: string, shopifyApiKey?: string, shopifyApiPassword?: string, shopifySharedSecret?: string, shopeePartnerId?: string, shopeePartnerKey?: string, shopeeShopId?: string, shopeeRefreshToken?: string, shopeeRegion?: string, shopeeEnvironment?: string, shoplazzaAccessToken?: string, shoplazzaSharedSecret?: string, mivaAccessToken?: string, mivaSignature?: string, shopwareAccessKey?: string, unasApiKey?: string, shopwareApiKey?: string, shopwareApiSecret?: string, bigcartelUserName?: string, bigcartelPassword?: string, bricklinkConsumerKey?: string, bricklinkConsumerSecret?: string, bricklinkToken?: string, bricklinkTokenSecret?: string, volusionLogin?: string, volusionPassword?: string, walmartClientId?: string, walmartClientSecret?: string, walmartEnvironment?: string, walmartChannelType?: string, walmartRegion?: string, squareClientId?: string, squareClientSecret?: string, squareRefreshToken?: string, squarespaceApiKey?: string, squarespaceClientId?: string, squarespaceClientSecret?: string, squarespaceAccessToken?: string, squarespaceRefreshToken?: string, hybrisClientId?: string, hybrisClientSecret?: string, hybrisUsername?: string, hybrisPassword?: string, hybrisWebsites?: Array<string>, lightspeedApiKey?: string, lightspeedApiSecret?: string, commercehqApiKey?: string, commercehqApiPassword?: string, wcConsumerKey?: string, wcConsumerSecret?: string, magentoConsumerKey?: string, magentoConsumerSecret?: string, magentoAccessToken?: string, magentoTokenSecret?: string, prestashopWebserviceKey?: string, wixAppId?: string, wixAppSecretKey?: string, wixInstanceId?: string, wixRefreshToken?: string, mercadoLibreAppId?: string, mercadoLibreAppSecretKey?: string, mercadoLibreRefreshToken?: string, zidClientId?: number, zidClientSecret?: string, zidAccessToken?: string, zidAuthorization?: string, zidRefreshToken?: string, flipkartClientId?: string, flipkartClientSecret?: string, allegroClientId?: string, allegroClientSecret?: string, allegroAccessToken?: string, allegroRefreshToken?: string, allegroEnvironment?: string, zohoClientId?: string, zohoClientSecret?: string, zohoRefreshToken?: string, zohoRegion?: string, tiendanubeUserId?: number, tiendanubeAccessToken?: string, tiendanubeClientSecret?: string, ottoClientId?: string, ottoClientSecret?: string, ottoAppId?: string, ottoRefreshToken?: string, ottoEnvironment?: string, ottoAccessToken?: string, tiktokshopAppKey?: string, tiktokshopAppSecret?: string, tiktokshopRefreshToken?: string, tiktokshopAccessToken?: string, sallaClientId?: string, sallaClientSecret?: string, sallaRefreshToken?: string, sallaAccessToken?: string, temuAppKey?: string, temuAppSecret?: string, temuAccessToken?: string, temuRegion?: string, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.accountConfigUpdateWithHttpInfo(replaceParameters, newStoreUrl, newStoreKey, bridgeUrl, storeRoot, dbTablesPrefix, userAgent, _3dcartPrivateKey, _3dcartAccessToken, _3dcartapiApiKey, amazonSpClientId, amazonSpClientSecret, amazonSpRefreshToken, amazonSpAwsRegion, amazonSpApiEnvironment, amazonSellerId, aspdotnetstorefrontApiUser, aspdotnetstorefrontApiPass, americommerceAppId, americommerceAppSecret, americommerceAccessToken, americommerceRefreshToken, bigcommerceapiAdminAccount, bigcommerceapiApiPath, bigcommerceapiApiKey, bigcommerceapiClientId, bigcommerceapiAccessToken, bigcommerceapiContext, bolApiKey, bolApiSecret, bolRetailerId, demandwareClientId, demandwareApiPassword, demandwareUserName, demandwareUserPassword, ebayClientId, ebayClientSecret, ebayRuname, ebayAccessToken, ebayRefreshToken, ebayEnvironment, ebaySiteId, ecwidAcessToken, ecwidStoreId, lazadaAppId, lazadaAppSecret, lazadaRefreshToken, lazadaRegion, etsyKeystring, etsySharedSecret, etsyAccessToken, etsyTokenSecret, etsyClientId, etsyRefreshToken, facebookAppId, facebookAppSecret, facebookAccessToken, facebookBusinessId, netoApiKey, netoApiUsername, shoplineAccessToken, shoplineAppKey, shoplineAppSecret, shoplineSharedSecret, shopifyAccessToken, shopifyApiKey, shopifyApiPassword, shopifySharedSecret, shopeePartnerId, shopeePartnerKey, shopeeShopId, shopeeRefreshToken, shopeeRegion, shopeeEnvironment, shoplazzaAccessToken, shoplazzaSharedSecret, mivaAccessToken, mivaSignature, shopwareAccessKey, unasApiKey, shopwareApiKey, shopwareApiSecret, bigcartelUserName, bigcartelPassword, bricklinkConsumerKey, bricklinkConsumerSecret, bricklinkToken, bricklinkTokenSecret, volusionLogin, volusionPassword, walmartClientId, walmartClientSecret, walmartEnvironment, walmartChannelType, walmartRegion, squareClientId, squareClientSecret, squareRefreshToken, squarespaceApiKey, squarespaceClientId, squarespaceClientSecret, squarespaceAccessToken, squarespaceRefreshToken, hybrisClientId, hybrisClientSecret, hybrisUsername, hybrisPassword, hybrisWebsites, lightspeedApiKey, lightspeedApiSecret, commercehqApiKey, commercehqApiPassword, wcConsumerKey, wcConsumerSecret, magentoConsumerKey, magentoConsumerSecret, magentoAccessToken, magentoTokenSecret, prestashopWebserviceKey, wixAppId, wixAppSecretKey, wixInstanceId, wixRefreshToken, mercadoLibreAppId, mercadoLibreAppSecretKey, mercadoLibreRefreshToken, zidClientId, zidClientSecret, zidAccessToken, zidAuthorization, zidRefreshToken, flipkartClientId, flipkartClientSecret, allegroClientId, allegroClientSecret, allegroAccessToken, allegroRefreshToken, allegroEnvironment, zohoClientId, zohoClientSecret, zohoRefreshToken, zohoRegion, tiendanubeUserId, tiendanubeAccessToken, tiendanubeClientSecret, ottoClientId, ottoClientSecret, ottoAppId, ottoRefreshToken, ottoEnvironment, ottoAccessToken, tiktokshopAppKey, tiktokshopAppSecret, tiktokshopRefreshToken, tiktokshopAccessToken, sallaClientId, sallaClientSecret, sallaRefreshToken, sallaAccessToken, temuAppKey, temuAppSecret, temuAccessToken, temuRegion, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.
     * account.failed_webhooks
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [ids] List of сomma-separated webhook ids
     */
    public accountFailedWebhooksWithHttpInfo(start?: number, count?: number, ids?: string, _options?: Configuration): Observable<HttpInfo<AccountFailedWebhooks200Response>> {
        const requestContextPromise = this.requestFactory.accountFailedWebhooks(start, count, ids, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountFailedWebhooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.
     * account.failed_webhooks
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [ids] List of сomma-separated webhook ids
     */
    public accountFailedWebhooks(start?: number, count?: number, ids?: string, _options?: Configuration): Observable<AccountFailedWebhooks200Response> {
        return this.accountFailedWebhooksWithHttpInfo(start, count, ids, _options).pipe(map((apiResponse: HttpInfo<AccountFailedWebhooks200Response>) => apiResponse.data));
    }

    /**
     * Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.
     * account.supported_platforms
     */
    public accountSupportedPlatformsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AccountSupportedPlatforms200Response>> {
        const requestContextPromise = this.requestFactory.accountSupportedPlatforms(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountSupportedPlatformsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.
     * account.supported_platforms
     */
    public accountSupportedPlatforms(_options?: Configuration): Observable<AccountSupportedPlatforms200Response> {
        return this.accountSupportedPlatformsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AccountSupportedPlatforms200Response>) => apiResponse.data));
    }

}

import { AttributeApiRequestFactory, AttributeApiResponseProcessor} from "../apis/AttributeApi";
export class ObservableAttributeApi {
    private requestFactory: AttributeApiRequestFactory;
    private responseProcessor: AttributeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AttributeApiRequestFactory,
        responseProcessor?: AttributeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttributeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttributeApiResponseProcessor();
    }

    /**
     * Add new attribute
     * attribute.add
     * @param type Defines attribute\&#39;s type
     * @param name Defines attributes\&#39;s name
     * @param [code] Entity code
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [visible] Set visibility status
     * @param [required] Defines if the option is required
     * @param [position] Attribute&#x60;s position
     * @param [attributeGroupId] Filter by attribute_group_id
     * @param [isGlobal] Attribute saving scope
     * @param [isSearchable] Use attribute in Quick Search
     * @param [isFilterable] Use In Layered Navigation
     * @param [isComparable] Comparable on Front-end
     * @param [isHtmlAllowedOnFront] Allow HTML Tags on Frontend
     * @param [isFilterableInSearch] Use In Search Results Layered Navigation
     * @param [isConfigurable] Use To Create Configurable Product
     * @param [isVisibleInAdvancedSearch] Use in Advanced Search
     * @param [isUsedForPromoRules] Use for Promo Rule Conditions
     * @param [usedInProductListing] Used in Product Listing
     * @param [usedForSortBy] Used for Sorting in Product Listing
     * @param [applyTo] Types of products which can have this attribute
     */
    public attributeAddWithHttpInfo(type: 'text' | 'select' | 'textarea' | 'date' | 'price' | 'multiselect' | 'boolean', name: string, code?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, position?: number, attributeGroupId?: string, isGlobal?: string, isSearchable?: boolean, isFilterable?: string, isComparable?: boolean, isHtmlAllowedOnFront?: boolean, isFilterableInSearch?: boolean, isConfigurable?: boolean, isVisibleInAdvancedSearch?: boolean, isUsedForPromoRules?: boolean, usedInProductListing?: boolean, usedForSortBy?: boolean, applyTo?: string, _options?: Configuration): Observable<HttpInfo<AttributeAdd200Response>> {
        const requestContextPromise = this.requestFactory.attributeAdd(type, name, code, storeId, langId, visible, required, position, attributeGroupId, isGlobal, isSearchable, isFilterable, isComparable, isHtmlAllowedOnFront, isFilterableInSearch, isConfigurable, isVisibleInAdvancedSearch, isUsedForPromoRules, usedInProductListing, usedForSortBy, applyTo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new attribute
     * attribute.add
     * @param type Defines attribute\&#39;s type
     * @param name Defines attributes\&#39;s name
     * @param [code] Entity code
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [visible] Set visibility status
     * @param [required] Defines if the option is required
     * @param [position] Attribute&#x60;s position
     * @param [attributeGroupId] Filter by attribute_group_id
     * @param [isGlobal] Attribute saving scope
     * @param [isSearchable] Use attribute in Quick Search
     * @param [isFilterable] Use In Layered Navigation
     * @param [isComparable] Comparable on Front-end
     * @param [isHtmlAllowedOnFront] Allow HTML Tags on Frontend
     * @param [isFilterableInSearch] Use In Search Results Layered Navigation
     * @param [isConfigurable] Use To Create Configurable Product
     * @param [isVisibleInAdvancedSearch] Use in Advanced Search
     * @param [isUsedForPromoRules] Use for Promo Rule Conditions
     * @param [usedInProductListing] Used in Product Listing
     * @param [usedForSortBy] Used for Sorting in Product Listing
     * @param [applyTo] Types of products which can have this attribute
     */
    public attributeAdd(type: 'text' | 'select' | 'textarea' | 'date' | 'price' | 'multiselect' | 'boolean', name: string, code?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, position?: number, attributeGroupId?: string, isGlobal?: string, isSearchable?: boolean, isFilterable?: string, isComparable?: boolean, isHtmlAllowedOnFront?: boolean, isFilterableInSearch?: boolean, isConfigurable?: boolean, isVisibleInAdvancedSearch?: boolean, isUsedForPromoRules?: boolean, usedInProductListing?: boolean, usedForSortBy?: boolean, applyTo?: string, _options?: Configuration): Observable<AttributeAdd200Response> {
        return this.attributeAddWithHttpInfo(type, name, code, storeId, langId, visible, required, position, attributeGroupId, isGlobal, isSearchable, isFilterable, isComparable, isHtmlAllowedOnFront, isFilterableInSearch, isConfigurable, isVisibleInAdvancedSearch, isUsedForPromoRules, usedInProductListing, usedForSortBy, applyTo, _options).pipe(map((apiResponse: HttpInfo<AttributeAdd200Response>) => apiResponse.data));
    }

    /**
     * Assign attribute to the group
     * attribute.assign.group
     * @param id Entity id
     * @param groupId Attribute group_id
     * @param [attributeSetId] Attribute set id
     */
    public attributeAssignGroupWithHttpInfo(id: string, groupId: string, attributeSetId?: string, _options?: Configuration): Observable<HttpInfo<AttributeAssignGroup200Response>> {
        const requestContextPromise = this.requestFactory.attributeAssignGroup(id, groupId, attributeSetId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeAssignGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign attribute to the group
     * attribute.assign.group
     * @param id Entity id
     * @param groupId Attribute group_id
     * @param [attributeSetId] Attribute set id
     */
    public attributeAssignGroup(id: string, groupId: string, attributeSetId?: string, _options?: Configuration): Observable<AttributeAssignGroup200Response> {
        return this.attributeAssignGroupWithHttpInfo(id, groupId, attributeSetId, _options).pipe(map((apiResponse: HttpInfo<AttributeAssignGroup200Response>) => apiResponse.data));
    }

    /**
     * Assign attribute to the attribute set
     * attribute.assign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     * @param [groupId] Attribute group_id
     */
    public attributeAssignSetWithHttpInfo(id: string, attributeSetId: string, groupId?: string, _options?: Configuration): Observable<HttpInfo<AttributeAssignGroup200Response>> {
        const requestContextPromise = this.requestFactory.attributeAssignSet(id, attributeSetId, groupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeAssignSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign attribute to the attribute set
     * attribute.assign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     * @param [groupId] Attribute group_id
     */
    public attributeAssignSet(id: string, attributeSetId: string, groupId?: string, _options?: Configuration): Observable<AttributeAssignGroup200Response> {
        return this.attributeAssignSetWithHttpInfo(id, attributeSetId, groupId, _options).pipe(map((apiResponse: HttpInfo<AttributeAssignGroup200Response>) => apiResponse.data));
    }

    /**
     * Get attribute_set list
     * attribute.attributeset.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeAttributesetListWithHttpInfo(start?: number, count?: number, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseAttributeAttributesetList>> {
        const requestContextPromise = this.requestFactory.attributeAttributesetList(start, count, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeAttributesetListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get attribute_set list
     * attribute.attributeset.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeAttributesetList(start?: number, count?: number, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseAttributeAttributesetList> {
        return this.attributeAttributesetListWithHttpInfo(start, count, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseAttributeAttributesetList>) => apiResponse.data));
    }

    /**
     * Get attributes count
     * attribute.count
     * @param [type] Defines attribute\&#39;s type
     * @param [attributeSetId] Filter items by attribute set id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [visible] Filter items by visibility status
     * @param [required] Defines if the option is required
     * @param [system] True if attribute is system
     */
    public attributeCountWithHttpInfo(type?: string, attributeSetId?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, system?: boolean, _options?: Configuration): Observable<HttpInfo<AttributeCount200Response>> {
        const requestContextPromise = this.requestFactory.attributeCount(type, attributeSetId, storeId, langId, visible, required, system, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get attributes count
     * attribute.count
     * @param [type] Defines attribute\&#39;s type
     * @param [attributeSetId] Filter items by attribute set id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [visible] Filter items by visibility status
     * @param [required] Defines if the option is required
     * @param [system] True if attribute is system
     */
    public attributeCount(type?: string, attributeSetId?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, system?: boolean, _options?: Configuration): Observable<AttributeCount200Response> {
        return this.attributeCountWithHttpInfo(type, attributeSetId, storeId, langId, visible, required, system, _options).pipe(map((apiResponse: HttpInfo<AttributeCount200Response>) => apiResponse.data));
    }

    /**
     * Delete attribute from store
     * attribute.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public attributeDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.attributeDelete(id, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete attribute from store
     * attribute.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public attributeDelete(id: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.attributeDeleteWithHttpInfo(id, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Get attribute group list
     * attribute.group.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [attributeSetId] Attribute set id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeGroupListWithHttpInfo(start?: number, count?: number, attributeSetId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseAttributeGroupList>> {
        const requestContextPromise = this.requestFactory.attributeGroupList(start, count, attributeSetId, langId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeGroupListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get attribute group list
     * attribute.group.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [attributeSetId] Attribute set id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeGroupList(start?: number, count?: number, attributeSetId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseAttributeGroupList> {
        return this.attributeGroupListWithHttpInfo(start, count, attributeSetId, langId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseAttributeGroupList>) => apiResponse.data));
    }

    /**
     * Get information about a specific global attribute by its ID.
     * attribute.info
     * @param id Entity id
     * @param [attributeSetId] Attribute set id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeInfoWithHttpInfo(id: string, attributeSetId?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<AttributeInfo200Response>> {
        const requestContextPromise = this.requestFactory.attributeInfo(id, attributeSetId, storeId, langId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information about a specific global attribute by its ID.
     * attribute.info
     * @param id Entity id
     * @param [attributeSetId] Attribute set id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeInfo(id: string, attributeSetId?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<AttributeInfo200Response> {
        return this.attributeInfoWithHttpInfo(id, attributeSetId, storeId, langId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<AttributeInfo200Response>) => apiResponse.data));
    }

    /**
     * Get a list of global attributes.
     * attribute.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [attributeIds] Filter attributes by ids
     * @param [attributeSetId] Filter items by attribute set id
     * @param [storeId] Store Id
     * @param [langId] Retrieves attributes on specified language id
     * @param [type] Defines attribute\&#39;s type
     * @param [visible] Filter items by visibility status
     * @param [required] Defines if the option is required
     * @param [system] True if attribute is system
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeListWithHttpInfo(start?: number, count?: number, attributeIds?: string, attributeSetId?: string, storeId?: string, langId?: string, type?: string, visible?: boolean, required?: boolean, system?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseAttributeList>> {
        const requestContextPromise = this.requestFactory.attributeList(start, count, attributeIds, attributeSetId, storeId, langId, type, visible, required, system, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of global attributes.
     * attribute.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [attributeIds] Filter attributes by ids
     * @param [attributeSetId] Filter items by attribute set id
     * @param [storeId] Store Id
     * @param [langId] Retrieves attributes on specified language id
     * @param [type] Defines attribute\&#39;s type
     * @param [visible] Filter items by visibility status
     * @param [required] Defines if the option is required
     * @param [system] True if attribute is system
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public attributeList(start?: number, count?: number, attributeIds?: string, attributeSetId?: string, storeId?: string, langId?: string, type?: string, visible?: boolean, required?: boolean, system?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseAttributeList> {
        return this.attributeListWithHttpInfo(start, count, attributeIds, attributeSetId, storeId, langId, type, visible, required, system, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseAttributeList>) => apiResponse.data));
    }

    /**
     * Get list of supported attributes types
     * attribute.type.list
     */
    public attributeTypeListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AttributeTypeList200Response>> {
        const requestContextPromise = this.requestFactory.attributeTypeList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeTypeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of supported attributes types
     * attribute.type.list
     */
    public attributeTypeList(_options?: Configuration): Observable<AttributeTypeList200Response> {
        return this.attributeTypeListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AttributeTypeList200Response>) => apiResponse.data));
    }

    /**
     * Unassign attribute from group
     * attribute.unassign.group
     * @param id Entity id
     * @param groupId Customer group_id
     */
    public attributeUnassignGroupWithHttpInfo(id: string, groupId: string, _options?: Configuration): Observable<HttpInfo<AttributeUnassignGroup200Response>> {
        const requestContextPromise = this.requestFactory.attributeUnassignGroup(id, groupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeUnassignGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unassign attribute from group
     * attribute.unassign.group
     * @param id Entity id
     * @param groupId Customer group_id
     */
    public attributeUnassignGroup(id: string, groupId: string, _options?: Configuration): Observable<AttributeUnassignGroup200Response> {
        return this.attributeUnassignGroupWithHttpInfo(id, groupId, _options).pipe(map((apiResponse: HttpInfo<AttributeUnassignGroup200Response>) => apiResponse.data));
    }

    /**
     * Unassign attribute from attribute set
     * attribute.unassign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     */
    public attributeUnassignSetWithHttpInfo(id: string, attributeSetId: string, _options?: Configuration): Observable<HttpInfo<AttributeUnassignGroup200Response>> {
        const requestContextPromise = this.requestFactory.attributeUnassignSet(id, attributeSetId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeUnassignSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unassign attribute from attribute set
     * attribute.unassign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     */
    public attributeUnassignSet(id: string, attributeSetId: string, _options?: Configuration): Observable<AttributeUnassignGroup200Response> {
        return this.attributeUnassignSetWithHttpInfo(id, attributeSetId, _options).pipe(map((apiResponse: HttpInfo<AttributeUnassignGroup200Response>) => apiResponse.data));
    }

    /**
     * Update attribute data
     * attribute.update
     * @param id Entity id
     * @param name Defines new attributes\&#39;s name
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeUpdateWithHttpInfo(id: string, name: string, storeId?: string, langId?: string, _options?: Configuration): Observable<HttpInfo<AttributeUpdate200Response>> {
        const requestContextPromise = this.requestFactory.attributeUpdate(id, name, storeId, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update attribute data
     * attribute.update
     * @param id Entity id
     * @param name Defines new attributes\&#39;s name
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeUpdate(id: string, name: string, storeId?: string, langId?: string, _options?: Configuration): Observable<AttributeUpdate200Response> {
        return this.attributeUpdateWithHttpInfo(id, name, storeId, langId, _options).pipe(map((apiResponse: HttpInfo<AttributeUpdate200Response>) => apiResponse.data));
    }

    /**
     * Add new value to attribute.
     * attribute.value.add
     * @param attributeId Attribute Id
     * @param name Defines attribute value\&#39;s name
     * @param [code] Entity code
     * @param [description] Defines attribute value\&#39;s description
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeValueAddWithHttpInfo(attributeId: string, name: string, code?: string, description?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<HttpInfo<AttributeAdd200Response>> {
        const requestContextPromise = this.requestFactory.attributeValueAdd(attributeId, name, code, description, storeId, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeValueAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new value to attribute.
     * attribute.value.add
     * @param attributeId Attribute Id
     * @param name Defines attribute value\&#39;s name
     * @param [code] Entity code
     * @param [description] Defines attribute value\&#39;s description
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeValueAdd(attributeId: string, name: string, code?: string, description?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<AttributeAdd200Response> {
        return this.attributeValueAddWithHttpInfo(attributeId, name, code, description, storeId, langId, _options).pipe(map((apiResponse: HttpInfo<AttributeAdd200Response>) => apiResponse.data));
    }

    /**
     * Delete attribute value.
     * attribute.value.delete
     * @param id Entity id
     * @param attributeId Attribute Id
     * @param [storeId] Store Id
     */
    public attributeValueDeleteWithHttpInfo(id: string, attributeId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeValueDelete200Response>> {
        const requestContextPromise = this.requestFactory.attributeValueDelete(id, attributeId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeValueDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete attribute value.
     * attribute.value.delete
     * @param id Entity id
     * @param attributeId Attribute Id
     * @param [storeId] Store Id
     */
    public attributeValueDelete(id: string, attributeId: string, storeId?: string, _options?: Configuration): Observable<AttributeValueDelete200Response> {
        return this.attributeValueDeleteWithHttpInfo(id, attributeId, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeValueDelete200Response>) => apiResponse.data));
    }

    /**
     * Update attribute value.
     * attribute.value.update
     * @param id Defines attribute value\&#39;s id
     * @param attributeId Attribute Id
     * @param [name] Defines attribute value\&#39;s name
     * @param [description] Defines new attribute value\&#39;s description
     * @param [code] Entity code
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeValueUpdateWithHttpInfo(id: string, attributeId: string, name?: string, description?: string, code?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<HttpInfo<AttributeUpdate200Response>> {
        const requestContextPromise = this.requestFactory.attributeValueUpdate(id, attributeId, name, description, code, storeId, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attributeValueUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update attribute value.
     * attribute.value.update
     * @param id Defines attribute value\&#39;s id
     * @param attributeId Attribute Id
     * @param [name] Defines attribute value\&#39;s name
     * @param [description] Defines new attribute value\&#39;s description
     * @param [code] Entity code
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeValueUpdate(id: string, attributeId: string, name?: string, description?: string, code?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<AttributeUpdate200Response> {
        return this.attributeValueUpdateWithHttpInfo(id, attributeId, name, description, code, storeId, langId, _options).pipe(map((apiResponse: HttpInfo<AttributeUpdate200Response>) => apiResponse.data));
    }

}

import { BasketApiRequestFactory, BasketApiResponseProcessor} from "../apis/BasketApi";
export class ObservableBasketApi {
    private requestFactory: BasketApiRequestFactory;
    private responseProcessor: BasketApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasketApiRequestFactory,
        responseProcessor?: BasketApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasketApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasketApiResponseProcessor();
    }

    /**
     * Retrieve basket information.
     * basket.info
     * @param id Entity id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public basketInfoWithHttpInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<BasketInfo200Response>> {
        const requestContextPromise = this.requestFactory.basketInfo(id, storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.basketInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve basket information.
     * basket.info
     * @param id Entity id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public basketInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<BasketInfo200Response> {
        return this.basketInfoWithHttpInfo(id, storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<BasketInfo200Response>) => apiResponse.data));
    }

    /**
     * Add item to basket
     * basket.item.add
     * @param customerId Retrieves orders specified by customer id
     * @param productId Defines id of the product which should be added to the basket
     * @param [variantId] Defines product\&#39;s variants specified by variant id
     * @param [quantity] Defines new items quantity
     * @param [storeId] Store Id
     */
    public basketItemAddWithHttpInfo(customerId: string, productId: string, variantId?: string, quantity?: number, storeId?: string, _options?: Configuration): Observable<HttpInfo<BasketItemAdd200Response>> {
        const requestContextPromise = this.requestFactory.basketItemAdd(customerId, productId, variantId, quantity, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.basketItemAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add item to basket
     * basket.item.add
     * @param customerId Retrieves orders specified by customer id
     * @param productId Defines id of the product which should be added to the basket
     * @param [variantId] Defines product\&#39;s variants specified by variant id
     * @param [quantity] Defines new items quantity
     * @param [storeId] Store Id
     */
    public basketItemAdd(customerId: string, productId: string, variantId?: string, quantity?: number, storeId?: string, _options?: Configuration): Observable<BasketItemAdd200Response> {
        return this.basketItemAddWithHttpInfo(customerId, productId, variantId, quantity, storeId, _options).pipe(map((apiResponse: HttpInfo<BasketItemAdd200Response>) => apiResponse.data));
    }

    /**
     * Create live shipping rate service.
     * basket.live_shipping_service.create
     * @param name Shipping Service Name
     * @param callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceCreateWithHttpInfo(name: string, callback: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<BasketLiveShippingServiceCreate200Response>> {
        const requestContextPromise = this.requestFactory.basketLiveShippingServiceCreate(name, callback, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.basketLiveShippingServiceCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create live shipping rate service.
     * basket.live_shipping_service.create
     * @param name Shipping Service Name
     * @param callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceCreate(name: string, callback: string, storeId?: string, _options?: Configuration): Observable<BasketLiveShippingServiceCreate200Response> {
        return this.basketLiveShippingServiceCreateWithHttpInfo(name, callback, storeId, _options).pipe(map((apiResponse: HttpInfo<BasketLiveShippingServiceCreate200Response>) => apiResponse.data));
    }

    /**
     * Delete live shipping rate service.
     * basket.live_shipping_service.delete
     * @param id Entity id
     */
    public basketLiveShippingServiceDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        const requestContextPromise = this.requestFactory.basketLiveShippingServiceDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.basketLiveShippingServiceDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete live shipping rate service.
     * basket.live_shipping_service.delete
     * @param id Entity id
     */
    public basketLiveShippingServiceDelete(id: number, _options?: Configuration): Observable<BasketLiveShippingServiceDelete200Response> {
        return this.basketLiveShippingServiceDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<BasketLiveShippingServiceDelete200Response>) => apiResponse.data));
    }

    /**
     * Retrieve a list of live shipping rate services.
     * basket.live_shipping_service.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceListWithHttpInfo(start?: number, count?: number, storeId?: string, _options?: Configuration): Observable<HttpInfo<BasketLiveShippingServiceList200Response>> {
        const requestContextPromise = this.requestFactory.basketLiveShippingServiceList(start, count, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.basketLiveShippingServiceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of live shipping rate services.
     * basket.live_shipping_service.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceList(start?: number, count?: number, storeId?: string, _options?: Configuration): Observable<BasketLiveShippingServiceList200Response> {
        return this.basketLiveShippingServiceListWithHttpInfo(start, count, storeId, _options).pipe(map((apiResponse: HttpInfo<BasketLiveShippingServiceList200Response>) => apiResponse.data));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Get list of recent jobs
     * batch.job.list
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Filter batch jobs by ids
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [processedFrom] Retrieve entities according to their processing datetime
     * @param [processedTo] Retrieve entities according to their processing datetime
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public batchJobListWithHttpInfo(count?: number, pageCursor?: string, ids?: string, createdFrom?: string, createdTo?: string, processedFrom?: string, processedTo?: string, responseFields?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseBatchJobList>> {
        const requestContextPromise = this.requestFactory.batchJobList(count, pageCursor, ids, createdFrom, createdTo, processedFrom, processedTo, responseFields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchJobListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of recent jobs
     * batch.job.list
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Filter batch jobs by ids
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [processedFrom] Retrieve entities according to their processing datetime
     * @param [processedTo] Retrieve entities according to their processing datetime
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public batchJobList(count?: number, pageCursor?: string, ids?: string, createdFrom?: string, createdTo?: string, processedFrom?: string, processedTo?: string, responseFields?: string, _options?: Configuration): Observable<ModelResponseBatchJobList> {
        return this.batchJobListWithHttpInfo(count, pageCursor, ids, createdFrom, createdTo, processedFrom, processedTo, responseFields, _options).pipe(map((apiResponse: HttpInfo<ModelResponseBatchJobList>) => apiResponse.data));
    }

    /**
     * Get job result data
     * batch.job.result
     * @param id Entity id
     */
    public batchJobResultWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ResponseBatchJobResult>> {
        const requestContextPromise = this.requestFactory.batchJobResult(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchJobResultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get job result data
     * batch.job.result
     * @param id Entity id
     */
    public batchJobResult(id: string, _options?: Configuration): Observable<ResponseBatchJobResult> {
        return this.batchJobResultWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ResponseBatchJobResult>) => apiResponse.data));
    }

}

import { BridgeApiRequestFactory, BridgeApiResponseProcessor} from "../apis/BridgeApi";
export class ObservableBridgeApi {
    private requestFactory: BridgeApiRequestFactory;
    private responseProcessor: BridgeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BridgeApiRequestFactory,
        responseProcessor?: BridgeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BridgeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BridgeApiResponseProcessor();
    }

    /**
     * Delete bridge from the store.
     * bridge.delete
     */
    public bridgeDeleteWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AttributeValueDelete200Response>> {
        const requestContextPromise = this.requestFactory.bridgeDelete(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bridgeDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete bridge from the store.
     * bridge.delete
     */
    public bridgeDelete(_options?: Configuration): Observable<AttributeValueDelete200Response> {
        return this.bridgeDeleteWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AttributeValueDelete200Response>) => apiResponse.data));
    }

    /**
     * Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.
     * bridge.download
     * @param [whitelabel] Identifies if there is a necessity to download whitelabel bridge.
     */
    public bridgeDownloadWithHttpInfo(whitelabel?: boolean, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.bridgeDownload(whitelabel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bridgeDownloadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.
     * bridge.download
     * @param [whitelabel] Identifies if there is a necessity to download whitelabel bridge.
     */
    public bridgeDownload(whitelabel?: boolean, _options?: Configuration): Observable<HttpFile> {
        return this.bridgeDownloadWithHttpInfo(whitelabel, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Update bridge in the store.
     * bridge.update
     */
    public bridgeUpdateWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AttributeUpdate200Response>> {
        const requestContextPromise = this.requestFactory.bridgeUpdate(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bridgeUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update bridge in the store.
     * bridge.update
     */
    public bridgeUpdate(_options?: Configuration): Observable<AttributeUpdate200Response> {
        return this.bridgeUpdateWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AttributeUpdate200Response>) => apiResponse.data));
    }

}

import { CartApiRequestFactory, CartApiResponseProcessor} from "../apis/CartApi";
export class ObservableCartApi {
    private requestFactory: CartApiRequestFactory;
    private responseProcessor: CartApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CartApiRequestFactory,
        responseProcessor?: CartApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CartApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CartApiResponseProcessor();
    }

    /**
     * Get count of cart catalog price rules discounts.
     * cart.catalog_price_rules.count
     */
    public cartCatalogPriceRulesCountWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CartCatalogPriceRulesCount200Response>> {
        const requestContextPromise = this.requestFactory.cartCatalogPriceRulesCount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartCatalogPriceRulesCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get count of cart catalog price rules discounts.
     * cart.catalog_price_rules.count
     */
    public cartCatalogPriceRulesCount(_options?: Configuration): Observable<CartCatalogPriceRulesCount200Response> {
        return this.cartCatalogPriceRulesCountWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CartCatalogPriceRulesCount200Response>) => apiResponse.data));
    }

    /**
     * Get cart catalog price rules discounts.
     * cart.catalog_price_rules.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves  catalog_price_rules by ids
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartCatalogPriceRulesListWithHttpInfo(start?: number, count?: number, pageCursor?: string, ids?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCartCatalogPriceRulesList>> {
        const requestContextPromise = this.requestFactory.cartCatalogPriceRulesList(start, count, pageCursor, ids, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartCatalogPriceRulesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cart catalog price rules discounts.
     * cart.catalog_price_rules.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves  catalog_price_rules by ids
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartCatalogPriceRulesList(start?: number, count?: number, pageCursor?: string, ids?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCartCatalogPriceRulesList> {
        return this.cartCatalogPriceRulesListWithHttpInfo(start, count, pageCursor, ids, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCartCatalogPriceRulesList>) => apiResponse.data));
    }

    /**
     * Use this method to create a coupon with specified conditions.
     * cart.coupon.add
     * @param cartCouponAdd
     */
    public cartCouponAddWithHttpInfo(cartCouponAdd: CartCouponAdd, _options?: Configuration): Observable<HttpInfo<CartCouponAdd200Response>> {
        const requestContextPromise = this.requestFactory.cartCouponAdd(cartCouponAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartCouponAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this method to create a coupon with specified conditions.
     * cart.coupon.add
     * @param cartCouponAdd
     */
    public cartCouponAdd(cartCouponAdd: CartCouponAdd, _options?: Configuration): Observable<CartCouponAdd200Response> {
        return this.cartCouponAddWithHttpInfo(cartCouponAdd, _options).pipe(map((apiResponse: HttpInfo<CartCouponAdd200Response>) => apiResponse.data));
    }

    /**
     * Use this method to add additional conditions for coupon application.
     * cart.coupon.condition.add
     * @param couponId Coupon Id
     * @param entity Defines condition entity type
     * @param key Defines condition entity attribute key
     * @param operator Defines condition operator
     * @param value Defines condition value, can be comma separated according to the operator.
     * @param [target] Defines condition operator
     * @param [includeTax] Indicates whether to apply a discount for taxes.
     * @param [includeShipping] Indicates whether to apply a discount for shipping.
     * @param [storeId] Store Id
     */
    public cartCouponConditionAddWithHttpInfo(couponId: string, entity: 'order' | 'order_shipping_address' | 'product' | 'customer', key: 'total' | 'subtotal' | 'shipping_total' | 'total_quantity' | 'total_weight' | 'country' | 'product_id' | 'variant_id' | 'category_id' | 'customer_id' | 'item_price' | 'item_total_price' | 'item_quantity' | 'carrier_id', operator: string, value: string, target?: string, includeTax?: boolean, includeShipping?: boolean, storeId?: string, _options?: Configuration): Observable<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        const requestContextPromise = this.requestFactory.cartCouponConditionAdd(couponId, entity, key, operator, value, target, includeTax, includeShipping, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartCouponConditionAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this method to add additional conditions for coupon application.
     * cart.coupon.condition.add
     * @param couponId Coupon Id
     * @param entity Defines condition entity type
     * @param key Defines condition entity attribute key
     * @param operator Defines condition operator
     * @param value Defines condition value, can be comma separated according to the operator.
     * @param [target] Defines condition operator
     * @param [includeTax] Indicates whether to apply a discount for taxes.
     * @param [includeShipping] Indicates whether to apply a discount for shipping.
     * @param [storeId] Store Id
     */
    public cartCouponConditionAdd(couponId: string, entity: 'order' | 'order_shipping_address' | 'product' | 'customer', key: 'total' | 'subtotal' | 'shipping_total' | 'total_quantity' | 'total_weight' | 'country' | 'product_id' | 'variant_id' | 'category_id' | 'customer_id' | 'item_price' | 'item_total_price' | 'item_quantity' | 'carrier_id', operator: string, value: string, target?: string, includeTax?: boolean, includeShipping?: boolean, storeId?: string, _options?: Configuration): Observable<BasketLiveShippingServiceDelete200Response> {
        return this.cartCouponConditionAddWithHttpInfo(couponId, entity, key, operator, value, target, includeTax, includeShipping, storeId, _options).pipe(map((apiResponse: HttpInfo<BasketLiveShippingServiceDelete200Response>) => apiResponse.data));
    }

    /**
     * This method allows you to get the number of coupons. On some platforms, you can filter the coupons by the date they were active.
     * cart.coupon.count
     * @param [storeId] Store Id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [dateStartFrom] Filter entity by date_start (greater or equal)
     * @param [dateStartTo] Filter entity by date_start (less or equal)
     * @param [dateEndFrom] Filter entity by date_end (greater or equal)
     * @param [dateEndTo] Filter entity by date_end (less or equal)
     */
    public cartCouponCountWithHttpInfo(storeId?: string, avail?: boolean, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, _options?: Configuration): Observable<HttpInfo<CartCouponCount200Response>> {
        const requestContextPromise = this.requestFactory.cartCouponCount(storeId, avail, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartCouponCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method allows you to get the number of coupons. On some platforms, you can filter the coupons by the date they were active.
     * cart.coupon.count
     * @param [storeId] Store Id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [dateStartFrom] Filter entity by date_start (greater or equal)
     * @param [dateStartTo] Filter entity by date_start (less or equal)
     * @param [dateEndFrom] Filter entity by date_end (greater or equal)
     * @param [dateEndTo] Filter entity by date_end (less or equal)
     */
    public cartCouponCount(storeId?: string, avail?: boolean, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, _options?: Configuration): Observable<CartCouponCount200Response> {
        return this.cartCouponCountWithHttpInfo(storeId, avail, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, _options).pipe(map((apiResponse: HttpInfo<CartCouponCount200Response>) => apiResponse.data));
    }

    /**
     * Delete coupon
     * cart.coupon.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartCouponDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.cartCouponDelete(id, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartCouponDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete coupon
     * cart.coupon.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartCouponDelete(id: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.cartCouponDeleteWithHttpInfo(id, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Get cart coupon discounts.
     * cart.coupon.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [couponsIds] Filter coupons by ids
     * @param [storeId] Filter coupons by store id
     * @param [langId] Language id
     * @param [avail] Filter coupons by avail status
     * @param [status] Defines coupon\&#39;s status
     * @param [dateStartFrom] Filter entity by date_start (greater or equal)
     * @param [dateStartTo] Filter entity by date_start (less or equal)
     * @param [dateEndFrom] Filter entity by date_end (greater or equal)
     * @param [dateEndTo] Filter entity by date_end (less or equal)
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartCouponListWithHttpInfo(start?: number, count?: number, pageCursor?: string, couponsIds?: string, storeId?: string, langId?: string, avail?: boolean, status?: string, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCartCouponList>> {
        const requestContextPromise = this.requestFactory.cartCouponList(start, count, pageCursor, couponsIds, storeId, langId, avail, status, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartCouponListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cart coupon discounts.
     * cart.coupon.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [couponsIds] Filter coupons by ids
     * @param [storeId] Filter coupons by store id
     * @param [langId] Language id
     * @param [avail] Filter coupons by avail status
     * @param [status] Defines coupon\&#39;s status
     * @param [dateStartFrom] Filter entity by date_start (greater or equal)
     * @param [dateStartTo] Filter entity by date_start (less or equal)
     * @param [dateEndFrom] Filter entity by date_end (greater or equal)
     * @param [dateEndTo] Filter entity by date_end (less or equal)
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartCouponList(start?: number, count?: number, pageCursor?: string, couponsIds?: string, storeId?: string, langId?: string, avail?: boolean, status?: string, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCartCouponList> {
        return this.cartCouponListWithHttpInfo(start, count, pageCursor, couponsIds, storeId, langId, avail, status, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCartCouponList>) => apiResponse.data));
    }

    /**
     * Remove store from API2Cart
     * cart.delete
     * @param [deleteBridge] Identifies if there is a necessity to delete bridge
     */
    public cartDeleteWithHttpInfo(deleteBridge?: boolean, _options?: Configuration): Observable<HttpInfo<CartDelete200Response>> {
        const requestContextPromise = this.requestFactory.cartDelete(deleteBridge, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove store from API2Cart
     * cart.delete
     * @param [deleteBridge] Identifies if there is a necessity to delete bridge
     */
    public cartDelete(deleteBridge?: boolean, _options?: Configuration): Observable<CartDelete200Response> {
        return this.cartDeleteWithHttpInfo(deleteBridge, _options).pipe(map((apiResponse: HttpInfo<CartDelete200Response>) => apiResponse.data));
    }

    /**
     * Use this method to create a gift card for a specified amount.
     * cart.giftcard.add
     * @param amount Defines the gift card amount value.
     * @param [code] Gift card code
     * @param [ownerEmail] Gift card owner email
     * @param [recipientEmail] Gift card recipient email
     * @param [recipientName] Gift card recipient name
     * @param [ownerName] Gift card owner name
     */
    public cartGiftcardAddWithHttpInfo(amount: number, code?: string, ownerEmail?: string, recipientEmail?: string, recipientName?: string, ownerName?: string, _options?: Configuration): Observable<HttpInfo<CartGiftcardAdd200Response>> {
        const requestContextPromise = this.requestFactory.cartGiftcardAdd(amount, code, ownerEmail, recipientEmail, recipientName, ownerName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartGiftcardAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this method to create a gift card for a specified amount.
     * cart.giftcard.add
     * @param amount Defines the gift card amount value.
     * @param [code] Gift card code
     * @param [ownerEmail] Gift card owner email
     * @param [recipientEmail] Gift card recipient email
     * @param [recipientName] Gift card recipient name
     * @param [ownerName] Gift card owner name
     */
    public cartGiftcardAdd(amount: number, code?: string, ownerEmail?: string, recipientEmail?: string, recipientName?: string, ownerName?: string, _options?: Configuration): Observable<CartGiftcardAdd200Response> {
        return this.cartGiftcardAddWithHttpInfo(amount, code, ownerEmail, recipientEmail, recipientName, ownerName, _options).pipe(map((apiResponse: HttpInfo<CartGiftcardAdd200Response>) => apiResponse.data));
    }

    /**
     * Get gift cards count.
     * cart.giftcard.count
     * @param [storeId] Store Id
     */
    public cartGiftcardCountWithHttpInfo(storeId?: string, _options?: Configuration): Observable<HttpInfo<CartGiftcardCount200Response>> {
        const requestContextPromise = this.requestFactory.cartGiftcardCount(storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartGiftcardCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get gift cards count.
     * cart.giftcard.count
     * @param [storeId] Store Id
     */
    public cartGiftcardCount(storeId?: string, _options?: Configuration): Observable<CartGiftcardCount200Response> {
        return this.cartGiftcardCountWithHttpInfo(storeId, _options).pipe(map((apiResponse: HttpInfo<CartGiftcardCount200Response>) => apiResponse.data));
    }

    /**
     * Delete giftcard
     * cart.giftcard.delete
     * @param id Entity id
     */
    public cartGiftcardDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.cartGiftcardDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartGiftcardDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete giftcard
     * cart.giftcard.delete
     * @param id Entity id
     */
    public cartGiftcardDelete(id: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.cartGiftcardDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Get gift cards list.
     * cart.giftcard.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartGiftcardListWithHttpInfo(start?: number, count?: number, pageCursor?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCartGiftCardList>> {
        const requestContextPromise = this.requestFactory.cartGiftcardList(start, count, pageCursor, storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartGiftcardListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get gift cards list.
     * cart.giftcard.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartGiftcardList(start?: number, count?: number, pageCursor?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCartGiftCardList> {
        return this.cartGiftcardListWithHttpInfo(start, count, pageCursor, storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCartGiftCardList>) => apiResponse.data));
    }

    /**
     * This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.
     * cart.info
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartInfoWithHttpInfo(storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<CartInfo200Response>> {
        const requestContextPromise = this.requestFactory.cartInfo(storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.
     * cart.info
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartInfo(storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<CartInfo200Response> {
        return this.cartInfoWithHttpInfo(storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<CartInfo200Response>) => apiResponse.data));
    }

    /**
     * Using this method, you can get a list of metadata for various entities (products, options, customers, orders). Usually this is data created by third-party plugins.
     * cart.meta_data.list
     * @param entityId Entity Id
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [entity] Entity
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [key] Key
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartMetaDataListWithHttpInfo(entityId: string, count?: number, pageCursor?: string, entity?: string, storeId?: string, langId?: string, key?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCartMetaDataList>> {
        const requestContextPromise = this.requestFactory.cartMetaDataList(entityId, count, pageCursor, entity, storeId, langId, key, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartMetaDataListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Using this method, you can get a list of metadata for various entities (products, options, customers, orders). Usually this is data created by third-party plugins.
     * cart.meta_data.list
     * @param entityId Entity Id
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [entity] Entity
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [key] Key
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartMetaDataList(entityId: string, count?: number, pageCursor?: string, entity?: string, storeId?: string, langId?: string, key?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCartMetaDataList> {
        return this.cartMetaDataListWithHttpInfo(entityId, count, pageCursor, entity, storeId, langId, key, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCartMetaDataList>) => apiResponse.data));
    }

    /**
     * Set meta data for a specific entity
     * cart.meta_data.set
     * @param entityId Entity Id
     * @param key Key
     * @param value Value
     * @param namespace Metafield namespace
     * @param [entity] Entity
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public cartMetaDataSetWithHttpInfo(entityId: string, key: string, value: string, namespace: string, entity?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<HttpInfo<AttributeAdd200Response>> {
        const requestContextPromise = this.requestFactory.cartMetaDataSet(entityId, key, value, namespace, entity, storeId, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartMetaDataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set meta data for a specific entity
     * cart.meta_data.set
     * @param entityId Entity Id
     * @param key Key
     * @param value Value
     * @param namespace Metafield namespace
     * @param [entity] Entity
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public cartMetaDataSet(entityId: string, key: string, value: string, namespace: string, entity?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<AttributeAdd200Response> {
        return this.cartMetaDataSetWithHttpInfo(entityId, key, value, namespace, entity, storeId, langId, _options).pipe(map((apiResponse: HttpInfo<AttributeAdd200Response>) => apiResponse.data));
    }

    /**
     * Unset meta data for a specific entity
     * cart.meta_data.unset
     * @param entityId Entity Id
     * @param key Key
     * @param id Entity id
     * @param [entity] Entity
     * @param [storeId] Store Id
     */
    public cartMetaDataUnsetWithHttpInfo(entityId: string, key: string, id: string, entity?: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        const requestContextPromise = this.requestFactory.cartMetaDataUnset(entityId, key, id, entity, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartMetaDataUnsetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unset meta data for a specific entity
     * cart.meta_data.unset
     * @param entityId Entity Id
     * @param key Key
     * @param id Entity id
     * @param [entity] Entity
     * @param [storeId] Store Id
     */
    public cartMetaDataUnset(entityId: string, key: string, id: string, entity?: string, storeId?: string, _options?: Configuration): Observable<BasketLiveShippingServiceDelete200Response> {
        return this.cartMetaDataUnsetWithHttpInfo(entityId, key, id, entity, storeId, _options).pipe(map((apiResponse: HttpInfo<BasketLiveShippingServiceDelete200Response>) => apiResponse.data));
    }

    /**
     * Returns a list of supported API methods.
     * cart.methods
     */
    public cartMethodsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<CartMethods200Response>> {
        const requestContextPromise = this.requestFactory.cartMethods(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartMethodsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of supported API methods.
     * cart.methods
     */
    public cartMethods(_options?: Configuration): Observable<CartMethods200Response> {
        return this.cartMethodsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CartMethods200Response>) => apiResponse.data));
    }

    /**
     * Get a list of third-party plugins installed on the store.
     * cart.plugin.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public cartPluginListWithHttpInfo(start?: number, count?: number, storeId?: string, _options?: Configuration): Observable<HttpInfo<CartPluginList200Response>> {
        const requestContextPromise = this.requestFactory.cartPluginList(start, count, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartPluginListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of third-party plugins installed on the store.
     * cart.plugin.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public cartPluginList(start?: number, count?: number, storeId?: string, _options?: Configuration): Observable<CartPluginList200Response> {
        return this.cartPluginListWithHttpInfo(start, count, storeId, _options).pipe(map((apiResponse: HttpInfo<CartPluginList200Response>) => apiResponse.data));
    }

    /**
     * Add new script to the storefront
     * cart.script.add
     * @param [name] The user-friendly script name
     * @param [description] The user-friendly description
     * @param [html] An html string containing exactly one &#x60;script&#x60; tag.
     * @param [src] The URL of the remote script
     * @param [loadMethod] The load method to use for the script
     * @param [scope] The page or pages on the online store where the script should be included
     * @param [events] Event for run scripts
     * @param [storeId] Store Id
     */
    public cartScriptAddWithHttpInfo(name?: string, description?: string, html?: string, src?: string, loadMethod?: string, scope?: string, events?: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<CartScriptAdd200Response>> {
        const requestContextPromise = this.requestFactory.cartScriptAdd(name, description, html, src, loadMethod, scope, events, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartScriptAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new script to the storefront
     * cart.script.add
     * @param [name] The user-friendly script name
     * @param [description] The user-friendly description
     * @param [html] An html string containing exactly one &#x60;script&#x60; tag.
     * @param [src] The URL of the remote script
     * @param [loadMethod] The load method to use for the script
     * @param [scope] The page or pages on the online store where the script should be included
     * @param [events] Event for run scripts
     * @param [storeId] Store Id
     */
    public cartScriptAdd(name?: string, description?: string, html?: string, src?: string, loadMethod?: string, scope?: string, events?: string, storeId?: string, _options?: Configuration): Observable<CartScriptAdd200Response> {
        return this.cartScriptAddWithHttpInfo(name, description, html, src, loadMethod, scope, events, storeId, _options).pipe(map((apiResponse: HttpInfo<CartScriptAdd200Response>) => apiResponse.data));
    }

    /**
     * Remove script from the storefront
     * cart.script.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartScriptDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.cartScriptDelete(id, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartScriptDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove script from the storefront
     * cart.script.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartScriptDelete(id: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.cartScriptDeleteWithHttpInfo(id, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Get scripts installed to the storefront
     * cart.script.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [scriptIds] Retrieves only scripts with specific ids
     * @param [storeId] Store Id
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartScriptListWithHttpInfo(start?: number, count?: number, pageCursor?: string, scriptIds?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCartScriptList>> {
        const requestContextPromise = this.requestFactory.cartScriptList(start, count, pageCursor, scriptIds, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartScriptListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get scripts installed to the storefront
     * cart.script.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [scriptIds] Retrieves only scripts with specific ids
     * @param [storeId] Store Id
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartScriptList(start?: number, count?: number, pageCursor?: string, scriptIds?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCartScriptList> {
        return this.cartScriptListWithHttpInfo(start, count, pageCursor, scriptIds, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCartScriptList>) => apiResponse.data));
    }

    /**
     * Get list of shipping zones
     * cart.shipping_zones.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartShippingZonesListWithHttpInfo(start?: number, count?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCartShippingZonesList>> {
        const requestContextPromise = this.requestFactory.cartShippingZonesList(start, count, storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartShippingZonesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of shipping zones
     * cart.shipping_zones.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartShippingZonesList(start?: number, count?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCartShippingZonesList> {
        return this.cartShippingZonesListWithHttpInfo(start, count, storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCartShippingZonesList>) => apiResponse.data));
    }

    /**
     * This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.
     * cart.validate
     * @param [validateVersion] Specify if api2cart should validate cart version
     */
    public cartValidateWithHttpInfo(validateVersion?: boolean, _options?: Configuration): Observable<HttpInfo<CartValidate200Response>> {
        const requestContextPromise = this.requestFactory.cartValidate(validateVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartValidateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.
     * cart.validate
     * @param [validateVersion] Specify if api2cart should validate cart version
     */
    public cartValidate(validateVersion?: boolean, _options?: Configuration): Observable<CartValidate200Response> {
        return this.cartValidateWithHttpInfo(validateVersion, _options).pipe(map((apiResponse: HttpInfo<CartValidate200Response>) => apiResponse.data));
    }

}

import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";
export class ObservableCategoryApi {
    private requestFactory: CategoryApiRequestFactory;
    private responseProcessor: CategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryApiRequestFactory,
        responseProcessor?: CategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoryApiResponseProcessor();
    }

    /**
     * Add new category in store
     * category.add
     * @param name Defines category\&#39;s name that has to be added
     * @param [description] Defines category\&#39;s description
     * @param [shortDescription] Defines short description
     * @param [parentId] Adds categories specified by parent id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [createdTime] Entity\&#39;s date creation
     * @param [modifiedTime] Entity\&#39;s date modification
     * @param [sortOrder] Sort number in the list
     * @param [metaTitle] Defines unique meta title for each entity
     * @param [metaDescription] Defines unique meta description of a entity
     * @param [metaKeywords] Defines unique meta keywords for each entity
     * @param [seoUrl] Defines unique category\&#39;s URL for SEO
     * @param [storeId] Store Id
     * @param [storesIds] Create category in the stores that is specified by comma-separated stores\&#39; id
     * @param [langId] Language id
     */
    public categoryAddWithHttpInfo(name: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, createdTime?: string, modifiedTime?: string, sortOrder?: number, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Observable<HttpInfo<CategoryAdd200Response>> {
        const requestContextPromise = this.requestFactory.categoryAdd(name, description, shortDescription, parentId, avail, createdTime, modifiedTime, sortOrder, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new category in store
     * category.add
     * @param name Defines category\&#39;s name that has to be added
     * @param [description] Defines category\&#39;s description
     * @param [shortDescription] Defines short description
     * @param [parentId] Adds categories specified by parent id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [createdTime] Entity\&#39;s date creation
     * @param [modifiedTime] Entity\&#39;s date modification
     * @param [sortOrder] Sort number in the list
     * @param [metaTitle] Defines unique meta title for each entity
     * @param [metaDescription] Defines unique meta description of a entity
     * @param [metaKeywords] Defines unique meta keywords for each entity
     * @param [seoUrl] Defines unique category\&#39;s URL for SEO
     * @param [storeId] Store Id
     * @param [storesIds] Create category in the stores that is specified by comma-separated stores\&#39; id
     * @param [langId] Language id
     */
    public categoryAdd(name: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, createdTime?: string, modifiedTime?: string, sortOrder?: number, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Observable<CategoryAdd200Response> {
        return this.categoryAddWithHttpInfo(name, description, shortDescription, parentId, avail, createdTime, modifiedTime, sortOrder, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options).pipe(map((apiResponse: HttpInfo<CategoryAdd200Response>) => apiResponse.data));
    }

    /**
     * Add new categories to the store.
     * category.add.batch
     * @param categoryAddBatch
     */
    public categoryAddBatchWithHttpInfo(categoryAddBatch: CategoryAddBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.categoryAddBatch(categoryAddBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryAddBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new categories to the store.
     * category.add.batch
     * @param categoryAddBatch
     */
    public categoryAddBatch(categoryAddBatch: CategoryAddBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.categoryAddBatchWithHttpInfo(categoryAddBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

    /**
     * Assign category to product
     * category.assign
     * @param categoryId Defines category assign, specified by category id
     * @param productId Defines category assign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryAssignWithHttpInfo(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<CategoryAssign200Response>> {
        const requestContextPromise = this.requestFactory.categoryAssign(categoryId, productId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryAssignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign category to product
     * category.assign
     * @param categoryId Defines category assign, specified by category id
     * @param productId Defines category assign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryAssign(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Observable<CategoryAssign200Response> {
        return this.categoryAssignWithHttpInfo(categoryId, productId, storeId, _options).pipe(map((apiResponse: HttpInfo<CategoryAssign200Response>) => apiResponse.data));
    }

    /**
     * Count categories in store.
     * category.count
     * @param [parentId] Counts categories specified by parent id
     * @param [storeId] Counts category specified by store id
     * @param [langId] Counts category specified by language id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [productType] A categorization for the product
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Counts categories that are searched specified by field
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public categoryCountWithHttpInfo(parentId?: string, storeId?: string, langId?: string, avail?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, productType?: string, findValue?: string, findWhere?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<HttpInfo<CategoryCount200Response>> {
        const requestContextPromise = this.requestFactory.categoryCount(parentId, storeId, langId, avail, createdFrom, createdTo, modifiedFrom, modifiedTo, productType, findValue, findWhere, reportRequestId, disableReportCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Count categories in store.
     * category.count
     * @param [parentId] Counts categories specified by parent id
     * @param [storeId] Counts category specified by store id
     * @param [langId] Counts category specified by language id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [productType] A categorization for the product
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Counts categories that are searched specified by field
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public categoryCount(parentId?: string, storeId?: string, langId?: string, avail?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, productType?: string, findValue?: string, findWhere?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<CategoryCount200Response> {
        return this.categoryCountWithHttpInfo(parentId, storeId, langId, avail, createdFrom, createdTo, modifiedFrom, modifiedTo, productType, findValue, findWhere, reportRequestId, disableReportCache, _options).pipe(map((apiResponse: HttpInfo<CategoryCount200Response>) => apiResponse.data));
    }

    /**
     * Delete category in store
     * category.delete
     * @param id Defines category removal, specified by category id
     * @param [storeId] Store Id
     */
    public categoryDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<CategoryDelete200Response>> {
        const requestContextPromise = this.requestFactory.categoryDelete(id, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete category in store
     * category.delete
     * @param id Defines category removal, specified by category id
     * @param [storeId] Store Id
     */
    public categoryDelete(id: string, storeId?: string, _options?: Configuration): Observable<CategoryDelete200Response> {
        return this.categoryDeleteWithHttpInfo(id, storeId, _options).pipe(map((apiResponse: HttpInfo<CategoryDelete200Response>) => apiResponse.data));
    }

    /**
     * Search category in store. \"Laptop\" is specified here by default.
     * category.find
     * @param findValue Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public categoryFindWithHttpInfo(findValue: string, findWhere?: string, findParams?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<HttpInfo<CategoryFind200Response>> {
        const requestContextPromise = this.requestFactory.categoryFind(findValue, findWhere, findParams, storeId, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryFindWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search category in store. \"Laptop\" is specified here by default.
     * category.find
     * @param findValue Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public categoryFind(findValue: string, findWhere?: string, findParams?: string, storeId?: string, langId?: string, _options?: Configuration): Observable<CategoryFind200Response> {
        return this.categoryFindWithHttpInfo(findValue, findWhere, findParams, storeId, langId, _options).pipe(map((apiResponse: HttpInfo<CategoryFind200Response>) => apiResponse.data));
    }

    /**
     * Add image to category
     * category.image.add
     * @param categoryId Defines category id where the image should be added
     * @param imageName Defines image\&#39;s name
     * @param url Defines URL of the image that has to be added
     * @param type Defines image\&#39;s types that are specified by comma-separated list
     * @param [storeId] Store Id
     * @param [label] Defines alternative text that has to be attached to the picture
     * @param [mime] Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
     * @param [position] Defines image’s position in the list
     */
    public categoryImageAddWithHttpInfo(categoryId: string, imageName: string, url: string, type: 'base' | 'thumbnail', storeId?: string, label?: string, mime?: string, position?: number, _options?: Configuration): Observable<HttpInfo<CategoryImageAdd200Response>> {
        const requestContextPromise = this.requestFactory.categoryImageAdd(categoryId, imageName, url, type, storeId, label, mime, position, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryImageAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add image to category
     * category.image.add
     * @param categoryId Defines category id where the image should be added
     * @param imageName Defines image\&#39;s name
     * @param url Defines URL of the image that has to be added
     * @param type Defines image\&#39;s types that are specified by comma-separated list
     * @param [storeId] Store Id
     * @param [label] Defines alternative text that has to be attached to the picture
     * @param [mime] Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
     * @param [position] Defines image’s position in the list
     */
    public categoryImageAdd(categoryId: string, imageName: string, url: string, type: 'base' | 'thumbnail', storeId?: string, label?: string, mime?: string, position?: number, _options?: Configuration): Observable<CategoryImageAdd200Response> {
        return this.categoryImageAddWithHttpInfo(categoryId, imageName, url, type, storeId, label, mime, position, _options).pipe(map((apiResponse: HttpInfo<CategoryImageAdd200Response>) => apiResponse.data));
    }

    /**
     * Delete image
     * category.image.delete
     * @param categoryId Defines category id where the image should be deleted
     * @param imageId Define image id
     * @param [storeId] Store Id
     */
    public categoryImageDeleteWithHttpInfo(categoryId: string, imageId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.categoryImageDelete(categoryId, imageId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryImageDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete image
     * category.image.delete
     * @param categoryId Defines category id where the image should be deleted
     * @param imageId Define image id
     * @param [storeId] Store Id
     */
    public categoryImageDelete(categoryId: string, imageId: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.categoryImageDeleteWithHttpInfo(categoryId, imageId, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Get category info about category ID*** or specify other category ID.
     * category.info
     * @param id Retrieves category\&#39;s info specified by category id
     * @param [storeId] Retrieves category info  specified by store id
     * @param [langId] Retrieves category info  specified by language id
     * @param [schemaType] The name of the requirements set for the provided schema.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public categoryInfoWithHttpInfo(id: string, storeId?: string, langId?: string, schemaType?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<HttpInfo<CategoryInfo200Response>> {
        const requestContextPromise = this.requestFactory.categoryInfo(id, storeId, langId, schemaType, responseFields, params, exclude, reportRequestId, disableReportCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get category info about category ID*** or specify other category ID.
     * category.info
     * @param id Retrieves category\&#39;s info specified by category id
     * @param [storeId] Retrieves category info  specified by store id
     * @param [langId] Retrieves category info  specified by language id
     * @param [schemaType] The name of the requirements set for the provided schema.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public categoryInfo(id: string, storeId?: string, langId?: string, schemaType?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<CategoryInfo200Response> {
        return this.categoryInfoWithHttpInfo(id, storeId, langId, schemaType, responseFields, params, exclude, reportRequestId, disableReportCache, _options).pipe(map((apiResponse: HttpInfo<CategoryInfo200Response>) => apiResponse.data));
    }

    /**
     * Get list of categories from store.
     * category.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Retrieves categories specified by store id
     * @param [langId] Retrieves categorys specified by language id
     * @param [parentId] Retrieves categories specified by parent id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [productType] A categorization for the product
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Category search that is specified by field
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     * @param [disableCache] Disable cache for current request
     */
    public categoryListWithHttpInfo(start?: number, count?: number, pageCursor?: string, storeId?: string, langId?: string, parentId?: string, avail?: boolean, productType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, findValue?: string, findWhere?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, disableCache?: boolean, _options?: Configuration): Observable<HttpInfo<ModelResponseCategoryList>> {
        const requestContextPromise = this.requestFactory.categoryList(start, count, pageCursor, storeId, langId, parentId, avail, productType, createdFrom, createdTo, modifiedFrom, modifiedTo, findValue, findWhere, responseFields, params, exclude, reportRequestId, disableReportCache, disableCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of categories from store.
     * category.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Retrieves categories specified by store id
     * @param [langId] Retrieves categorys specified by language id
     * @param [parentId] Retrieves categories specified by parent id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [productType] A categorization for the product
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Category search that is specified by field
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     * @param [disableCache] Disable cache for current request
     */
    public categoryList(start?: number, count?: number, pageCursor?: string, storeId?: string, langId?: string, parentId?: string, avail?: boolean, productType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, findValue?: string, findWhere?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, disableCache?: boolean, _options?: Configuration): Observable<ModelResponseCategoryList> {
        return this.categoryListWithHttpInfo(start, count, pageCursor, storeId, langId, parentId, avail, productType, createdFrom, createdTo, modifiedFrom, modifiedTo, findValue, findWhere, responseFields, params, exclude, reportRequestId, disableReportCache, disableCache, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCategoryList>) => apiResponse.data));
    }

    /**
     * Unassign category to product
     * category.unassign
     * @param categoryId Defines category unassign, specified by category id
     * @param productId Defines category unassign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryUnassignWithHttpInfo(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<CategoryAssign200Response>> {
        const requestContextPromise = this.requestFactory.categoryUnassign(categoryId, productId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryUnassignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unassign category to product
     * category.unassign
     * @param categoryId Defines category unassign, specified by category id
     * @param productId Defines category unassign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryUnassign(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Observable<CategoryAssign200Response> {
        return this.categoryUnassignWithHttpInfo(categoryId, productId, storeId, _options).pipe(map((apiResponse: HttpInfo<CategoryAssign200Response>) => apiResponse.data));
    }

    /**
     * Update category in store
     * category.update
     * @param id Defines category update specified by category id
     * @param [name] Defines new category’s name
     * @param [description] Defines new category\&#39;s description
     * @param [shortDescription] Defines short description
     * @param [parentId] Defines new parent category id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [sortOrder] Sort number in the list
     * @param [modifiedTime] Entity\&#39;s date modification
     * @param [metaTitle] Defines unique meta title for each entity
     * @param [metaDescription] Defines unique meta description of a entity
     * @param [metaKeywords] Defines unique meta keywords for each entity
     * @param [seoUrl] Defines unique category\&#39;s URL for SEO
     * @param [storeId] Store Id
     * @param [storesIds] Update category in the stores that is specified by comma-separated stores\&#39; id
     * @param [langId] Language id
     */
    public categoryUpdateWithHttpInfo(id: string, name?: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, sortOrder?: number, modifiedTime?: string, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.categoryUpdate(id, name, description, shortDescription, parentId, avail, sortOrder, modifiedTime, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoryUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update category in store
     * category.update
     * @param id Defines category update specified by category id
     * @param [name] Defines new category’s name
     * @param [description] Defines new category\&#39;s description
     * @param [shortDescription] Defines short description
     * @param [parentId] Defines new parent category id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [sortOrder] Sort number in the list
     * @param [modifiedTime] Entity\&#39;s date modification
     * @param [metaTitle] Defines unique meta title for each entity
     * @param [metaDescription] Defines unique meta description of a entity
     * @param [metaKeywords] Defines unique meta keywords for each entity
     * @param [seoUrl] Defines unique category\&#39;s URL for SEO
     * @param [storeId] Store Id
     * @param [storesIds] Update category in the stores that is specified by comma-separated stores\&#39; id
     * @param [langId] Language id
     */
    public categoryUpdate(id: string, name?: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, sortOrder?: number, modifiedTime?: string, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.categoryUpdateWithHttpInfo(id, name, description, shortDescription, parentId, avail, sortOrder, modifiedTime, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

}

import { CustomerApiRequestFactory, CustomerApiResponseProcessor} from "../apis/CustomerApi";
export class ObservableCustomerApi {
    private requestFactory: CustomerApiRequestFactory;
    private responseProcessor: CustomerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerApiRequestFactory,
        responseProcessor?: CustomerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerApiResponseProcessor();
    }

    /**
     * Add customer into store.
     * customer.add
     * @param customerAdd
     */
    public customerAddWithHttpInfo(customerAdd: CustomerAdd, _options?: Configuration): Observable<HttpInfo<CustomerAdd200Response>> {
        const requestContextPromise = this.requestFactory.customerAdd(customerAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add customer into store.
     * customer.add
     * @param customerAdd
     */
    public customerAdd(customerAdd: CustomerAdd, _options?: Configuration): Observable<CustomerAdd200Response> {
        return this.customerAddWithHttpInfo(customerAdd, _options).pipe(map((apiResponse: HttpInfo<CustomerAdd200Response>) => apiResponse.data));
    }

    /**
     * Add customer address.
     * customer.address.add
     * @param customerAddressAdd
     */
    public customerAddressAddWithHttpInfo(customerAddressAdd: CustomerAddressAdd, _options?: Configuration): Observable<HttpInfo<AttributeAdd200Response>> {
        const requestContextPromise = this.requestFactory.customerAddressAdd(customerAddressAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAddressAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add customer address.
     * customer.address.add
     * @param customerAddressAdd
     */
    public customerAddressAdd(customerAddressAdd: CustomerAddressAdd, _options?: Configuration): Observable<AttributeAdd200Response> {
        return this.customerAddressAddWithHttpInfo(customerAddressAdd, _options).pipe(map((apiResponse: HttpInfo<AttributeAdd200Response>) => apiResponse.data));
    }

    /**
     * Get attributes for specific customer
     * customer.attribute.list
     * @param customerId Retrieves orders specified by customer id
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public customerAttributeListWithHttpInfo(customerId: string, count?: number, pageCursor?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCustomerAttributeList>> {
        const requestContextPromise = this.requestFactory.customerAttributeList(customerId, count, pageCursor, storeId, langId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAttributeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get attributes for specific customer
     * customer.attribute.list
     * @param customerId Retrieves orders specified by customer id
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public customerAttributeList(customerId: string, count?: number, pageCursor?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCustomerAttributeList> {
        return this.customerAttributeListWithHttpInfo(customerId, count, pageCursor, storeId, langId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCustomerAttributeList>) => apiResponse.data));
    }

    /**
     * Get number of customers from store.
     * customer.count
     * @param [ids] Counts customers specified by ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [customerListId] The numeric ID of the customer list in Demandware.
     * @param [groupId] Customer group_id
     * @param [storeId] Counts customer specified by store id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [includeGuests] Indicates whether to include guest customers in the total count.
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Counts customers that are searched specified by field
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     */
    public customerCountWithHttpInfo(ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Observable<HttpInfo<CustomerCount200Response>> {
        const requestContextPromise = this.requestFactory.customerCount(ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get number of customers from store.
     * customer.count
     * @param [ids] Counts customers specified by ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [customerListId] The numeric ID of the customer list in Demandware.
     * @param [groupId] Customer group_id
     * @param [storeId] Counts customer specified by store id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [includeGuests] Indicates whether to include guest customers in the total count.
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Counts customers that are searched specified by field
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     */
    public customerCount(ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Observable<CustomerCount200Response> {
        return this.customerCountWithHttpInfo(ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, _options).pipe(map((apiResponse: HttpInfo<CustomerCount200Response>) => apiResponse.data));
    }

    /**
     * Delete customer from store.
     * customer.delete
     * @param id Identifies customer specified by the id
     */
    public customerDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<CustomerDelete200Response>> {
        const requestContextPromise = this.requestFactory.customerDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete customer from store.
     * customer.delete
     * @param id Identifies customer specified by the id
     */
    public customerDelete(id: string, _options?: Configuration): Observable<CustomerDelete200Response> {
        return this.customerDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<CustomerDelete200Response>) => apiResponse.data));
    }

    /**
     * Find customers in store.
     * customer.find
     * @param findValue Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     * @param [includeGuests] Indicates whether to search among guest customers when looking up a customer.
     */
    public customerFindWithHttpInfo(findValue: string, findWhere?: string, findParams?: string, storeId?: string, includeGuests?: boolean, _options?: Configuration): Observable<HttpInfo<CustomerFind200Response>> {
        const requestContextPromise = this.requestFactory.customerFind(findValue, findWhere, findParams, storeId, includeGuests, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find customers in store.
     * customer.find
     * @param findValue Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     * @param [includeGuests] Indicates whether to search among guest customers when looking up a customer.
     */
    public customerFind(findValue: string, findWhere?: string, findParams?: string, storeId?: string, includeGuests?: boolean, _options?: Configuration): Observable<CustomerFind200Response> {
        return this.customerFindWithHttpInfo(findValue, findWhere, findParams, storeId, includeGuests, _options).pipe(map((apiResponse: HttpInfo<CustomerFind200Response>) => apiResponse.data));
    }

    /**
     * Create customer group.
     * customer.group.add
     * @param name Customer group name
     * @param [storeId] Store Id
     * @param [storesIds] Assign customer group to the stores that is specified by comma-separated stores\&#39; id
     */
    public customerGroupAddWithHttpInfo(name: string, storeId?: string, storesIds?: string, _options?: Configuration): Observable<HttpInfo<CustomerGroupAdd200Response>> {
        const requestContextPromise = this.requestFactory.customerGroupAdd(name, storeId, storesIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGroupAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create customer group.
     * customer.group.add
     * @param name Customer group name
     * @param [storeId] Store Id
     * @param [storesIds] Assign customer group to the stores that is specified by comma-separated stores\&#39; id
     */
    public customerGroupAdd(name: string, storeId?: string, storesIds?: string, _options?: Configuration): Observable<CustomerGroupAdd200Response> {
        return this.customerGroupAddWithHttpInfo(name, storeId, storesIds, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupAdd200Response>) => apiResponse.data));
    }

    /**
     * Get list of customers groups.
     * customer.group.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [groupIds] Groups that will be assigned to a customer
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [disableCache] Disable cache for current request
     */
    public customerGroupListWithHttpInfo(start?: number, count?: number, pageCursor?: string, groupIds?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, disableCache?: boolean, _options?: Configuration): Observable<HttpInfo<ModelResponseCustomerGroupList>> {
        const requestContextPromise = this.requestFactory.customerGroupList(start, count, pageCursor, groupIds, storeId, langId, responseFields, params, exclude, disableCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGroupListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of customers groups.
     * customer.group.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [groupIds] Groups that will be assigned to a customer
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [disableCache] Disable cache for current request
     */
    public customerGroupList(start?: number, count?: number, pageCursor?: string, groupIds?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, disableCache?: boolean, _options?: Configuration): Observable<ModelResponseCustomerGroupList> {
        return this.customerGroupListWithHttpInfo(start, count, pageCursor, groupIds, storeId, langId, responseFields, params, exclude, disableCache, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCustomerGroupList>) => apiResponse.data));
    }

    /**
     * Get customers\' details from store.
     * customer.info
     * @param id Retrieves customer\&#39;s info specified by customer id
     * @param [storeId] Retrieves customer info specified by store id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public customerInfoWithHttpInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<CustomerInfo200Response>> {
        const requestContextPromise = this.requestFactory.customerInfo(id, storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get customers\' details from store.
     * customer.info
     * @param id Retrieves customer\&#39;s info specified by customer id
     * @param [storeId] Retrieves customer info specified by store id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public customerInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<CustomerInfo200Response> {
        return this.customerInfoWithHttpInfo(id, storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<CustomerInfo200Response>) => apiResponse.data));
    }

    /**
     * Get list of customers from store.
     * customer.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves customers specified by ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [customerListId] The numeric ID of the customer list in Demandware.
     * @param [groupId] Customer group_id
     * @param [storeId] Retrieves customers specified by store id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [includeGuests] Indicates whether to include guest customers in the list results.
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Customer search that is specified by field
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public customerListWithHttpInfo(start?: number, count?: number, pageCursor?: string, ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCustomerList>> {
        const requestContextPromise = this.requestFactory.customerList(start, count, pageCursor, ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, sortBy, sortDirection, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of customers from store.
     * customer.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves customers specified by ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [customerListId] The numeric ID of the customer list in Demandware.
     * @param [groupId] Customer group_id
     * @param [storeId] Retrieves customers specified by store id
     * @param [avail] Defines category\&#39;s visibility status
     * @param [includeGuests] Indicates whether to include guest customers in the list results.
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Customer search that is specified by field
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public customerList(start?: number, count?: number, pageCursor?: string, ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseCustomerList> {
        return this.customerListWithHttpInfo(start, count, pageCursor, ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, sortBy, sortDirection, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCustomerList>) => apiResponse.data));
    }

    /**
     * Update information of customer in store.
     * customer.update
     * @param customerUpdate
     */
    public customerUpdateWithHttpInfo(customerUpdate: CustomerUpdate, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.customerUpdate(customerUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update information of customer in store.
     * customer.update
     * @param customerUpdate
     */
    public customerUpdate(customerUpdate: CustomerUpdate, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.customerUpdateWithHttpInfo(customerUpdate, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Get a Wish List of customer from the store.
     * customer.wishlist.list
     * @param customerId Retrieves orders specified by customer id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [id] Entity id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public customerWishlistListWithHttpInfo(customerId: string, start?: number, count?: number, pageCursor?: string, id?: string, storeId?: string, responseFields?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseCustomerWishlistList>> {
        const requestContextPromise = this.requestFactory.customerWishlistList(customerId, start, count, pageCursor, id, storeId, responseFields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerWishlistListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Wish List of customer from the store.
     * customer.wishlist.list
     * @param customerId Retrieves orders specified by customer id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [id] Entity id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public customerWishlistList(customerId: string, start?: number, count?: number, pageCursor?: string, id?: string, storeId?: string, responseFields?: string, _options?: Configuration): Observable<ModelResponseCustomerWishlistList> {
        return this.customerWishlistListWithHttpInfo(customerId, start, count, pageCursor, id, storeId, responseFields, _options).pipe(map((apiResponse: HttpInfo<ModelResponseCustomerWishlistList>) => apiResponse.data));
    }

}

import { MarketplaceApiRequestFactory, MarketplaceApiResponseProcessor} from "../apis/MarketplaceApi";
export class ObservableMarketplaceApi {
    private requestFactory: MarketplaceApiRequestFactory;
    private responseProcessor: MarketplaceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MarketplaceApiRequestFactory,
        responseProcessor?: MarketplaceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MarketplaceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MarketplaceApiResponseProcessor();
    }

    /**
     * Search product in global catalog.
     * marketplace.product.find
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [keyword] Defines search keyword
     * @param [categoriesIds] Defines product add that is specified by comma-separated categories id
     * @param [storeId] Store Id
     * @param [asin] Amazon Standard Identification Number.
     * @param [ean] European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
     * @param [gtin] Global Trade Item Number. An GTIN is an identifier for trade items.
     * @param [upc] Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
     * @param [mpn] Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.
     * @param [isbn] International Standard Book Number. An ISBN is a unique identifier for books.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public marketplaceProductFindWithHttpInfo(count?: number, pageCursor?: string, keyword?: string, categoriesIds?: string, storeId?: string, asin?: string, ean?: string, gtin?: string, upc?: string, mpn?: string, isbn?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseMarketplaceProductFind>> {
        const requestContextPromise = this.requestFactory.marketplaceProductFind(count, pageCursor, keyword, categoriesIds, storeId, asin, ean, gtin, upc, mpn, isbn, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.marketplaceProductFindWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search product in global catalog.
     * marketplace.product.find
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [keyword] Defines search keyword
     * @param [categoriesIds] Defines product add that is specified by comma-separated categories id
     * @param [storeId] Store Id
     * @param [asin] Amazon Standard Identification Number.
     * @param [ean] European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
     * @param [gtin] Global Trade Item Number. An GTIN is an identifier for trade items.
     * @param [upc] Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
     * @param [mpn] Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.
     * @param [isbn] International Standard Book Number. An ISBN is a unique identifier for books.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public marketplaceProductFind(count?: number, pageCursor?: string, keyword?: string, categoriesIds?: string, storeId?: string, asin?: string, ean?: string, gtin?: string, upc?: string, mpn?: string, isbn?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseMarketplaceProductFind> {
        return this.marketplaceProductFindWithHttpInfo(count, pageCursor, keyword, categoriesIds, storeId, asin, ean, gtin, upc, mpn, isbn, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseMarketplaceProductFind>) => apiResponse.data));
    }

}

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class ObservableOrderApi {
    private requestFactory: OrderApiRequestFactory;
    private responseProcessor: OrderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderApiResponseProcessor();
    }

    /**
     * Get list of orders that were left by customers before completing the order.
     * order.abandoned.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [customerId] Retrieves orders specified by customer id
     * @param [customerEmail] Retrieves orders specified by customer email
     * @param [storeId] Store Id
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [skipEmptyEmail] Filter empty emails
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderAbandonedListWithHttpInfo(start?: number, count?: number, pageCursor?: string, customerId?: string, customerEmail?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, skipEmptyEmail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseOrderAbandonedList>> {
        const requestContextPromise = this.requestFactory.orderAbandonedList(start, count, pageCursor, customerId, customerEmail, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, skipEmptyEmail, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderAbandonedListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of orders that were left by customers before completing the order.
     * order.abandoned.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [customerId] Retrieves orders specified by customer id
     * @param [customerEmail] Retrieves orders specified by customer email
     * @param [storeId] Store Id
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [skipEmptyEmail] Filter empty emails
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderAbandonedList(start?: number, count?: number, pageCursor?: string, customerId?: string, customerEmail?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, skipEmptyEmail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseOrderAbandonedList> {
        return this.orderAbandonedListWithHttpInfo(start, count, pageCursor, customerId, customerEmail, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, skipEmptyEmail, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseOrderAbandonedList>) => apiResponse.data));
    }

    /**
     * Add a new order to the cart.
     * order.add
     * @param orderAdd
     */
    public orderAddWithHttpInfo(orderAdd: OrderAdd, _options?: Configuration): Observable<HttpInfo<OrderAdd200Response>> {
        const requestContextPromise = this.requestFactory.orderAdd(orderAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new order to the cart.
     * order.add
     * @param orderAdd
     */
    public orderAdd(orderAdd: OrderAdd, _options?: Configuration): Observable<OrderAdd200Response> {
        return this.orderAddWithHttpInfo(orderAdd, _options).pipe(map((apiResponse: HttpInfo<OrderAdd200Response>) => apiResponse.data));
    }

    /**
     * <p>Calculates the total cost of an order for a given customer and a set of products, as well as the available shipping methods based on the specified address. The calculation takes into account store product prices, discounts, taxes, shipping costs, and other store settings. The result includes a detailed breakdown of the final order cost by its components.</p> <p>Note that the final totals, taxes, and other amounts must include the corresponding values for the selected shipping method.</p><p>The result of this method can be used when creating an order using the <strong>order.add</strong> method.</p>
     * order.calculate
     * @param orderCalculate
     */
    public orderCalculateWithHttpInfo(orderCalculate: OrderCalculate, _options?: Configuration): Observable<HttpInfo<OrderCalculate200Response>> {
        const requestContextPromise = this.requestFactory.orderCalculate(orderCalculate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderCalculateWithHttpInfo(rsp)));
            }));
    }

    /**
     * <p>Calculates the total cost of an order for a given customer and a set of products, as well as the available shipping methods based on the specified address. The calculation takes into account store product prices, discounts, taxes, shipping costs, and other store settings. The result includes a detailed breakdown of the final order cost by its components.</p> <p>Note that the final totals, taxes, and other amounts must include the corresponding values for the selected shipping method.</p><p>The result of this method can be used when creating an order using the <strong>order.add</strong> method.</p>
     * order.calculate
     * @param orderCalculate
     */
    public orderCalculate(orderCalculate: OrderCalculate, _options?: Configuration): Observable<OrderCalculate200Response> {
        return this.orderCalculateWithHttpInfo(orderCalculate, _options).pipe(map((apiResponse: HttpInfo<OrderCalculate200Response>) => apiResponse.data));
    }

    /**
     * Count orders in store
     * order.count
     * @param [orderIds] Counts orders specified by order ids
     * @param [ids] Counts orders specified by ids
     * @param [customerId] Counts orders quantity specified by customer id
     * @param [storeId] Counts orders quantity specified by store id
     * @param [customerEmail] Counts orders quantity specified by customer email
     * @param [orderStatus] Counts orders quantity specified by order status
     * @param [orderStatusIds] Retrieves orders specified by order statuses
     * @param [ebayOrderStatus] Counts orders quantity specified by order status
     * @param [financialStatus] Counts orders quantity specified by financial status
     * @param [financialStatusIds] Retrieves orders count specified by financial status ids
     * @param [fulfillmentChannel] Retrieves order with a fulfillment channel
     * @param [fulfillmentStatus] Create order with fulfillment status
     * @param [shippingMethod] Retrieve entities according to shipping method
     * @param [deliveryMethod] Retrieves order with delivery method
     * @param [tags] Order tags
     * @param [shipNodeType] Retrieves order with ship node type
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     */
    public orderCountWithHttpInfo(orderIds?: string, ids?: string, customerId?: string, storeId?: string, customerEmail?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentChannel?: string, fulfillmentStatus?: string, shippingMethod?: string, deliveryMethod?: string, tags?: string, shipNodeType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Observable<HttpInfo<OrderCount200Response>> {
        const requestContextPromise = this.requestFactory.orderCount(orderIds, ids, customerId, storeId, customerEmail, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentChannel, fulfillmentStatus, shippingMethod, deliveryMethod, tags, shipNodeType, createdFrom, createdTo, modifiedFrom, modifiedTo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Count orders in store
     * order.count
     * @param [orderIds] Counts orders specified by order ids
     * @param [ids] Counts orders specified by ids
     * @param [customerId] Counts orders quantity specified by customer id
     * @param [storeId] Counts orders quantity specified by store id
     * @param [customerEmail] Counts orders quantity specified by customer email
     * @param [orderStatus] Counts orders quantity specified by order status
     * @param [orderStatusIds] Retrieves orders specified by order statuses
     * @param [ebayOrderStatus] Counts orders quantity specified by order status
     * @param [financialStatus] Counts orders quantity specified by financial status
     * @param [financialStatusIds] Retrieves orders count specified by financial status ids
     * @param [fulfillmentChannel] Retrieves order with a fulfillment channel
     * @param [fulfillmentStatus] Create order with fulfillment status
     * @param [shippingMethod] Retrieve entities according to shipping method
     * @param [deliveryMethod] Retrieves order with delivery method
     * @param [tags] Order tags
     * @param [shipNodeType] Retrieves order with ship node type
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     */
    public orderCount(orderIds?: string, ids?: string, customerId?: string, storeId?: string, customerEmail?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentChannel?: string, fulfillmentStatus?: string, shippingMethod?: string, deliveryMethod?: string, tags?: string, shipNodeType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Observable<OrderCount200Response> {
        return this.orderCountWithHttpInfo(orderIds, ids, customerId, storeId, customerEmail, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentChannel, fulfillmentStatus, shippingMethod, deliveryMethod, tags, shipNodeType, createdFrom, createdTo, modifiedFrom, modifiedTo, _options).pipe(map((apiResponse: HttpInfo<OrderCount200Response>) => apiResponse.data));
    }

    /**
     * Retrieve list of financial statuses
     * order.financial_status.list
     */
    public orderFinancialStatusListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<OrderFinancialStatusList200Response>> {
        const requestContextPromise = this.requestFactory.orderFinancialStatusList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderFinancialStatusListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of financial statuses
     * order.financial_status.list
     */
    public orderFinancialStatusList(_options?: Configuration): Observable<OrderFinancialStatusList200Response> {
        return this.orderFinancialStatusListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<OrderFinancialStatusList200Response>) => apiResponse.data));
    }

    /**
     * Retrieve list of fulfillment statuses
     * order.fulfillment_status.list
     * @param [action] Available statuses for the specified action.
     */
    public orderFulfillmentStatusListWithHttpInfo(action?: string, _options?: Configuration): Observable<HttpInfo<OrderFulfillmentStatusList200Response>> {
        const requestContextPromise = this.requestFactory.orderFulfillmentStatusList(action, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderFulfillmentStatusListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of fulfillment statuses
     * order.fulfillment_status.list
     * @param [action] Available statuses for the specified action.
     */
    public orderFulfillmentStatusList(action?: string, _options?: Configuration): Observable<OrderFulfillmentStatusList200Response> {
        return this.orderFulfillmentStatusListWithHttpInfo(action, _options).pipe(map((apiResponse: HttpInfo<OrderFulfillmentStatusList200Response>) => apiResponse.data));
    }

    /**
     * Info about a specific order by ID
     * order.info
     * @param [id] Retrieves order info specified by id
     * @param [orderId] Retrieves order’s info specified by order id
     * @param [storeId] Defines store id where the order should be found
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [enableCache] If the value is \&#39;true\&#39; and order exist in our cache, we will return order.info response from cache
     * @param [useLatestApiVersion] Use the latest platform API version
     * @param [roundingPrecision] &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt;
     */
    public orderInfoWithHttpInfo(id?: string, orderId?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, roundingPrecision?: number, _options?: Configuration): Observable<HttpInfo<OrderInfo200Response>> {
        const requestContextPromise = this.requestFactory.orderInfo(id, orderId, storeId, params, responseFields, exclude, enableCache, useLatestApiVersion, roundingPrecision, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Info about a specific order by ID
     * order.info
     * @param [id] Retrieves order info specified by id
     * @param [orderId] Retrieves order’s info specified by order id
     * @param [storeId] Defines store id where the order should be found
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [enableCache] If the value is \&#39;true\&#39; and order exist in our cache, we will return order.info response from cache
     * @param [useLatestApiVersion] Use the latest platform API version
     * @param [roundingPrecision] &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt;
     */
    public orderInfo(id?: string, orderId?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, roundingPrecision?: number, _options?: Configuration): Observable<OrderInfo200Response> {
        return this.orderInfoWithHttpInfo(id, orderId, storeId, params, responseFields, exclude, enableCache, useLatestApiVersion, roundingPrecision, _options).pipe(map((apiResponse: HttpInfo<OrderInfo200Response>) => apiResponse.data));
    }

    /**
     * Get list of orders from store.
     * order.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve orders via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves orders specified by ids
     * @param [orderIds] Retrieves orders specified by order ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [storeId] Store Id
     * @param [customerId] Retrieves orders specified by customer id
     * @param [customerEmail] Retrieves orders specified by customer email
     * @param [basketId] Retrieves order’s info specified by basket id.
     * @param [currencyId] Currency Id
     * @param [phone] Filter orders by customer\&#39;s phone number
     * @param [orderStatus] Retrieves orders specified by order status
     * @param [orderStatusIds] Retrieves orders specified by order statuses
     * @param [ebayOrderStatus] Retrieves orders specified by order status
     * @param [financialStatus] Retrieves orders specified by financial status
     * @param [financialStatusIds] Retrieves orders specified by financial status ids
     * @param [fulfillmentStatus] Create order with fulfillment status
     * @param [returnStatus] Retrieves orders specified by return status
     * @param [fulfillmentChannel] Retrieves order with a fulfillment channel
     * @param [shippingMethod] Retrieve entities according to shipping method
     * @param [skipOrderIds] Skipped orders by ids
     * @param [isDeleted] Filter deleted orders
     * @param [shippingCountryIso3] Retrieve entities according to shipping country
     * @param [deliveryMethod] Retrieves order with delivery method
     * @param [shipNodeType] Retrieves order with ship node type
     * @param [createdTo] Retrieve entities to their creation date
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [tags] Order tags
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [enableCache] If the value is \&#39;true\&#39;, we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)
     * @param [useLatestApiVersion] Use the latest platform API version
     * @param [roundingPrecision] &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt;
     */
    public orderListWithHttpInfo(start?: number, count?: number, pageCursor?: string, ids?: string, orderIds?: string, sinceId?: string, storeId?: string, customerId?: string, customerEmail?: string, basketId?: string, currencyId?: string, phone?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentStatus?: string, returnStatus?: string, fulfillmentChannel?: string, shippingMethod?: string, skipOrderIds?: string, isDeleted?: boolean, shippingCountryIso3?: string, deliveryMethod?: string, shipNodeType?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, tags?: string, sortBy?: string, sortDirection?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, roundingPrecision?: number, _options?: Configuration): Observable<HttpInfo<ModelResponseOrderList>> {
        const requestContextPromise = this.requestFactory.orderList(start, count, pageCursor, ids, orderIds, sinceId, storeId, customerId, customerEmail, basketId, currencyId, phone, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentStatus, returnStatus, fulfillmentChannel, shippingMethod, skipOrderIds, isDeleted, shippingCountryIso3, deliveryMethod, shipNodeType, createdTo, createdFrom, modifiedTo, modifiedFrom, tags, sortBy, sortDirection, params, responseFields, exclude, enableCache, useLatestApiVersion, roundingPrecision, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of orders from store.
     * order.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve orders via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves orders specified by ids
     * @param [orderIds] Retrieves orders specified by order ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [storeId] Store Id
     * @param [customerId] Retrieves orders specified by customer id
     * @param [customerEmail] Retrieves orders specified by customer email
     * @param [basketId] Retrieves order’s info specified by basket id.
     * @param [currencyId] Currency Id
     * @param [phone] Filter orders by customer\&#39;s phone number
     * @param [orderStatus] Retrieves orders specified by order status
     * @param [orderStatusIds] Retrieves orders specified by order statuses
     * @param [ebayOrderStatus] Retrieves orders specified by order status
     * @param [financialStatus] Retrieves orders specified by financial status
     * @param [financialStatusIds] Retrieves orders specified by financial status ids
     * @param [fulfillmentStatus] Create order with fulfillment status
     * @param [returnStatus] Retrieves orders specified by return status
     * @param [fulfillmentChannel] Retrieves order with a fulfillment channel
     * @param [shippingMethod] Retrieve entities according to shipping method
     * @param [skipOrderIds] Skipped orders by ids
     * @param [isDeleted] Filter deleted orders
     * @param [shippingCountryIso3] Retrieve entities according to shipping country
     * @param [deliveryMethod] Retrieves order with delivery method
     * @param [shipNodeType] Retrieves order with ship node type
     * @param [createdTo] Retrieve entities to their creation date
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [tags] Order tags
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [enableCache] If the value is \&#39;true\&#39;, we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)
     * @param [useLatestApiVersion] Use the latest platform API version
     * @param [roundingPrecision] &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt;
     */
    public orderList(start?: number, count?: number, pageCursor?: string, ids?: string, orderIds?: string, sinceId?: string, storeId?: string, customerId?: string, customerEmail?: string, basketId?: string, currencyId?: string, phone?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentStatus?: string, returnStatus?: string, fulfillmentChannel?: string, shippingMethod?: string, skipOrderIds?: string, isDeleted?: boolean, shippingCountryIso3?: string, deliveryMethod?: string, shipNodeType?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, tags?: string, sortBy?: string, sortDirection?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, roundingPrecision?: number, _options?: Configuration): Observable<ModelResponseOrderList> {
        return this.orderListWithHttpInfo(start, count, pageCursor, ids, orderIds, sinceId, storeId, customerId, customerEmail, basketId, currencyId, phone, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentStatus, returnStatus, fulfillmentChannel, shippingMethod, skipOrderIds, isDeleted, shippingCountryIso3, deliveryMethod, shipNodeType, createdTo, createdFrom, modifiedTo, modifiedFrom, tags, sortBy, sortDirection, params, responseFields, exclude, enableCache, useLatestApiVersion, roundingPrecision, _options).pipe(map((apiResponse: HttpInfo<ModelResponseOrderList>) => apiResponse.data));
    }

    /**
     * Retrieve list of order preestimated shipping methods
     * order.preestimate_shipping.list
     * @param orderPreestimateShippingList
     */
    public orderPreestimateShippingListWithHttpInfo(orderPreestimateShippingList: OrderPreestimateShippingList, _options?: Configuration): Observable<HttpInfo<ModelResponseOrderPreestimateShippingList>> {
        const requestContextPromise = this.requestFactory.orderPreestimateShippingList(orderPreestimateShippingList, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderPreestimateShippingListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of order preestimated shipping methods
     * order.preestimate_shipping.list
     * @param orderPreestimateShippingList
     */
    public orderPreestimateShippingList(orderPreestimateShippingList: OrderPreestimateShippingList, _options?: Configuration): Observable<ModelResponseOrderPreestimateShippingList> {
        return this.orderPreestimateShippingListWithHttpInfo(orderPreestimateShippingList, _options).pipe(map((apiResponse: HttpInfo<ModelResponseOrderPreestimateShippingList>) => apiResponse.data));
    }

    /**
     * Add a refund to the order.
     * order.refund.add
     * @param orderRefundAdd
     */
    public orderRefundAddWithHttpInfo(orderRefundAdd: OrderRefundAdd, _options?: Configuration): Observable<HttpInfo<OrderRefundAdd200Response>> {
        const requestContextPromise = this.requestFactory.orderRefundAdd(orderRefundAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderRefundAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a refund to the order.
     * order.refund.add
     * @param orderRefundAdd
     */
    public orderRefundAdd(orderRefundAdd: OrderRefundAdd, _options?: Configuration): Observable<OrderRefundAdd200Response> {
        return this.orderRefundAddWithHttpInfo(orderRefundAdd, _options).pipe(map((apiResponse: HttpInfo<OrderRefundAdd200Response>) => apiResponse.data));
    }

    /**
     * Create new return request.
     * order.return.add
     * @param orderReturnAdd
     */
    public orderReturnAddWithHttpInfo(orderReturnAdd: OrderReturnAdd, _options?: Configuration): Observable<HttpInfo<OrderReturnAdd200Response>> {
        const requestContextPromise = this.requestFactory.orderReturnAdd(orderReturnAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderReturnAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new return request.
     * order.return.add
     * @param orderReturnAdd
     */
    public orderReturnAdd(orderReturnAdd: OrderReturnAdd, _options?: Configuration): Observable<OrderReturnAdd200Response> {
        return this.orderReturnAddWithHttpInfo(orderReturnAdd, _options).pipe(map((apiResponse: HttpInfo<OrderReturnAdd200Response>) => apiResponse.data));
    }

    /**
     * Delete return.
     * order.return.delete
     * @param returnId Return ID
     * @param orderId Defines the order id
     * @param [storeId] Store Id
     */
    public orderReturnDeleteWithHttpInfo(returnId: string, orderId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeValueDelete200Response>> {
        const requestContextPromise = this.requestFactory.orderReturnDelete(returnId, orderId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderReturnDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete return.
     * order.return.delete
     * @param returnId Return ID
     * @param orderId Defines the order id
     * @param [storeId] Store Id
     */
    public orderReturnDelete(returnId: string, orderId: string, storeId?: string, _options?: Configuration): Observable<AttributeValueDelete200Response> {
        return this.orderReturnDeleteWithHttpInfo(returnId, orderId, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeValueDelete200Response>) => apiResponse.data));
    }

    /**
     * Update order\'s shipment information.
     * order.return.update
     * @param orderReturnUpdate
     */
    public orderReturnUpdateWithHttpInfo(orderReturnUpdate: OrderReturnUpdate, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.orderReturnUpdate(orderReturnUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderReturnUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update order\'s shipment information.
     * order.return.update
     * @param orderReturnUpdate
     */
    public orderReturnUpdate(orderReturnUpdate: OrderReturnUpdate, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.orderReturnUpdateWithHttpInfo(orderReturnUpdate, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Add a shipment to the order.
     * order.shipment.add
     * @param orderShipmentAdd
     */
    public orderShipmentAddWithHttpInfo(orderShipmentAdd: OrderShipmentAdd, _options?: Configuration): Observable<HttpInfo<OrderShipmentAdd200Response>> {
        const requestContextPromise = this.requestFactory.orderShipmentAdd(orderShipmentAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderShipmentAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a shipment to the order.
     * order.shipment.add
     * @param orderShipmentAdd
     */
    public orderShipmentAdd(orderShipmentAdd: OrderShipmentAdd, _options?: Configuration): Observable<OrderShipmentAdd200Response> {
        return this.orderShipmentAddWithHttpInfo(orderShipmentAdd, _options).pipe(map((apiResponse: HttpInfo<OrderShipmentAdd200Response>) => apiResponse.data));
    }

    /**
     * Add a shipments to the orders.
     * order.shipment.add.batch
     * @param orderShipmentAddBatch
     */
    public orderShipmentAddBatchWithHttpInfo(orderShipmentAddBatch: OrderShipmentAddBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.orderShipmentAddBatch(orderShipmentAddBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderShipmentAddBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a shipments to the orders.
     * order.shipment.add.batch
     * @param orderShipmentAddBatch
     */
    public orderShipmentAddBatch(orderShipmentAddBatch: OrderShipmentAddBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.orderShipmentAddBatchWithHttpInfo(orderShipmentAddBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

    /**
     * Delete order\'s shipment.
     * order.shipment.delete
     * @param shipmentId Shipment id indicates the number of delivery
     * @param orderId Defines the order for which the shipment will be deleted
     * @param [storeId] Store Id
     */
    public orderShipmentDeleteWithHttpInfo(shipmentId: string, orderId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<OrderShipmentDelete200Response>> {
        const requestContextPromise = this.requestFactory.orderShipmentDelete(shipmentId, orderId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderShipmentDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete order\'s shipment.
     * order.shipment.delete
     * @param shipmentId Shipment id indicates the number of delivery
     * @param orderId Defines the order for which the shipment will be deleted
     * @param [storeId] Store Id
     */
    public orderShipmentDelete(shipmentId: string, orderId: string, storeId?: string, _options?: Configuration): Observable<OrderShipmentDelete200Response> {
        return this.orderShipmentDeleteWithHttpInfo(shipmentId, orderId, storeId, _options).pipe(map((apiResponse: HttpInfo<OrderShipmentDelete200Response>) => apiResponse.data));
    }

    /**
     * Get information of shipment.
     * order.shipment.info
     * @param id Entity id
     * @param orderId Defines the order id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderShipmentInfoWithHttpInfo(id: string, orderId: string, start?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<OrderShipmentInfo200Response>> {
        const requestContextPromise = this.requestFactory.orderShipmentInfo(id, orderId, start, storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderShipmentInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information of shipment.
     * order.shipment.info
     * @param id Entity id
     * @param orderId Defines the order id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderShipmentInfo(id: string, orderId: string, start?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<OrderShipmentInfo200Response> {
        return this.orderShipmentInfoWithHttpInfo(id, orderId, start, storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<OrderShipmentInfo200Response>) => apiResponse.data));
    }

    /**
     * Get list of shipments per order.
     * order.shipment.list
     * @param orderId Retrieves shipments specified by order id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderShipmentListWithHttpInfo(orderId: string, start?: number, count?: number, pageCursor?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseOrderShipmentList>> {
        const requestContextPromise = this.requestFactory.orderShipmentList(orderId, start, count, pageCursor, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderShipmentListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of shipments per order.
     * order.shipment.list
     * @param orderId Retrieves shipments specified by order id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderShipmentList(orderId: string, start?: number, count?: number, pageCursor?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseOrderShipmentList> {
        return this.orderShipmentListWithHttpInfo(orderId, start, count, pageCursor, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseOrderShipmentList>) => apiResponse.data));
    }

    /**
     * Add order shipment\'s tracking info.
     * order.shipment.tracking.add
     * @param orderShipmentTrackingAdd
     */
    public orderShipmentTrackingAddWithHttpInfo(orderShipmentTrackingAdd: OrderShipmentTrackingAdd, _options?: Configuration): Observable<HttpInfo<OrderShipmentTrackingAdd200Response>> {
        const requestContextPromise = this.requestFactory.orderShipmentTrackingAdd(orderShipmentTrackingAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderShipmentTrackingAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add order shipment\'s tracking info.
     * order.shipment.tracking.add
     * @param orderShipmentTrackingAdd
     */
    public orderShipmentTrackingAdd(orderShipmentTrackingAdd: OrderShipmentTrackingAdd, _options?: Configuration): Observable<OrderShipmentTrackingAdd200Response> {
        return this.orderShipmentTrackingAddWithHttpInfo(orderShipmentTrackingAdd, _options).pipe(map((apiResponse: HttpInfo<OrderShipmentTrackingAdd200Response>) => apiResponse.data));
    }

    /**
     * Update order\'s shipment information.
     * order.shipment.update
     * @param orderShipmentUpdate
     */
    public orderShipmentUpdateWithHttpInfo(orderShipmentUpdate: OrderShipmentUpdate, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.orderShipmentUpdate(orderShipmentUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderShipmentUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update order\'s shipment information.
     * order.shipment.update
     * @param orderShipmentUpdate
     */
    public orderShipmentUpdate(orderShipmentUpdate: OrderShipmentUpdate, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.orderShipmentUpdateWithHttpInfo(orderShipmentUpdate, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Retrieve list of statuses
     * order.status.list
     * @param [storeId] Store Id
     * @param [action] Available statuses for the specified action.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public orderStatusListWithHttpInfo(storeId?: string, action?: string, responseFields?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseOrderStatusList>> {
        const requestContextPromise = this.requestFactory.orderStatusList(storeId, action, responseFields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderStatusListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of statuses
     * order.status.list
     * @param [storeId] Store Id
     * @param [action] Available statuses for the specified action.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public orderStatusList(storeId?: string, action?: string, responseFields?: string, _options?: Configuration): Observable<ModelResponseOrderStatusList> {
        return this.orderStatusListWithHttpInfo(storeId, action, responseFields, _options).pipe(map((apiResponse: HttpInfo<ModelResponseOrderStatusList>) => apiResponse.data));
    }

    /**
     * Retrieve list of order transaction
     * order.transaction.list
     * @param orderIds Retrieves order transactions specified by order ids
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderTransactionListWithHttpInfo(orderIds: string, count?: number, pageCursor?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseOrderTransactionList>> {
        const requestContextPromise = this.requestFactory.orderTransactionList(orderIds, count, pageCursor, storeId, params, responseFields, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderTransactionListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of order transaction
     * order.transaction.list
     * @param orderIds Retrieves order transactions specified by order ids
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public orderTransactionList(orderIds: string, count?: number, pageCursor?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseOrderTransactionList> {
        return this.orderTransactionListWithHttpInfo(orderIds, count, pageCursor, storeId, params, responseFields, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseOrderTransactionList>) => apiResponse.data));
    }

    /**
     * Update existing order.
     * order.update
     * @param orderId Defines the orders specified by order id
     * @param [storeId] Defines store id where the order should be found
     * @param [orderStatus] Defines new order\&#39;s status
     * @param [financialStatus] Update order financial status to specified
     * @param [fulfillmentStatus] Create order with fulfillment status
     * @param [cancellationReason] Defines the cancellation reason when the order will be canceled
     * @param [orderPaymentMethod] Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to \&#39;paid\&#39;
     * @param [comment] Specifies order comment
     * @param [adminComment] Specifies admin\&#39;s order comment
     * @param [adminPrivateComment] Specifies private admin\&#39;s order comment
     * @param [invoiceAdminComment] Specifies admin\&#39;s order invoice comment
     * @param [dateModified] Specifies order\&#39;s  modification date
     * @param [dateFinished] Specifies order\&#39;s  finished date
     * @param [sendNotifications] Send notifications to customer after order was created
     * @param [createInvoice] Determines whether an invoice should be created if it has not already been created
     * @param [origin] The source of the order
     * @param [tags] Order tags
     */
    public orderUpdateWithHttpInfo(orderId: string, storeId?: string, orderStatus?: string, financialStatus?: string, fulfillmentStatus?: string, cancellationReason?: string, orderPaymentMethod?: string, comment?: string, adminComment?: string, adminPrivateComment?: string, invoiceAdminComment?: string, dateModified?: string, dateFinished?: string, sendNotifications?: boolean, createInvoice?: boolean, origin?: string, tags?: string, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.orderUpdate(orderId, storeId, orderStatus, financialStatus, fulfillmentStatus, cancellationReason, orderPaymentMethod, comment, adminComment, adminPrivateComment, invoiceAdminComment, dateModified, dateFinished, sendNotifications, createInvoice, origin, tags, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update existing order.
     * order.update
     * @param orderId Defines the orders specified by order id
     * @param [storeId] Defines store id where the order should be found
     * @param [orderStatus] Defines new order\&#39;s status
     * @param [financialStatus] Update order financial status to specified
     * @param [fulfillmentStatus] Create order with fulfillment status
     * @param [cancellationReason] Defines the cancellation reason when the order will be canceled
     * @param [orderPaymentMethod] Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to \&#39;paid\&#39;
     * @param [comment] Specifies order comment
     * @param [adminComment] Specifies admin\&#39;s order comment
     * @param [adminPrivateComment] Specifies private admin\&#39;s order comment
     * @param [invoiceAdminComment] Specifies admin\&#39;s order invoice comment
     * @param [dateModified] Specifies order\&#39;s  modification date
     * @param [dateFinished] Specifies order\&#39;s  finished date
     * @param [sendNotifications] Send notifications to customer after order was created
     * @param [createInvoice] Determines whether an invoice should be created if it has not already been created
     * @param [origin] The source of the order
     * @param [tags] Order tags
     */
    public orderUpdate(orderId: string, storeId?: string, orderStatus?: string, financialStatus?: string, fulfillmentStatus?: string, cancellationReason?: string, orderPaymentMethod?: string, comment?: string, adminComment?: string, adminPrivateComment?: string, invoiceAdminComment?: string, dateModified?: string, dateFinished?: string, sendNotifications?: boolean, createInvoice?: boolean, origin?: string, tags?: string, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.orderUpdateWithHttpInfo(orderId, storeId, orderStatus, financialStatus, fulfillmentStatus, cancellationReason, orderPaymentMethod, comment, adminComment, adminPrivateComment, invoiceAdminComment, dateModified, dateFinished, sendNotifications, createInvoice, origin, tags, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

}

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class ObservableProductApi {
    private requestFactory: ProductApiRequestFactory;
    private responseProcessor: ProductApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductApiResponseProcessor();
    }

    /**
     * Add new product to store.
     * product.add
     * @param productAdd
     */
    public productAddWithHttpInfo(productAdd: ProductAdd, _options?: Configuration): Observable<HttpInfo<ProductAdd200Response>> {
        const requestContextPromise = this.requestFactory.productAdd(productAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new product to store.
     * product.add
     * @param productAdd
     */
    public productAdd(productAdd: ProductAdd, _options?: Configuration): Observable<ProductAdd200Response> {
        return this.productAddWithHttpInfo(productAdd, _options).pipe(map((apiResponse: HttpInfo<ProductAdd200Response>) => apiResponse.data));
    }

    /**
     * Add new products to the store.
     * product.add.batch
     * @param productAddBatch
     */
    public productAddBatchWithHttpInfo(productAddBatch: ProductAddBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.productAddBatch(productAddBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productAddBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new products to the store.
     * product.add.batch
     * @param productAddBatch
     */
    public productAddBatch(productAddBatch: ProductAddBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.productAddBatchWithHttpInfo(productAddBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

    /**
     * Get list of attributes and values.
     * product.attribute.list
     * @param productId Retrieves attributes specified by product id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [attributeId] Retrieves info for specified attribute_id
     * @param [variantId] Defines product\&#39;s variants specified by variant id
     * @param [attributeGroupId] Filter by attribute_group_id
     * @param [langId] Retrieves attributes specified by language id
     * @param [storeId] Retrieves attributes specified by store id
     * @param [setName] Retrieves attributes specified by set_name in Magento
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productAttributeListWithHttpInfo(productId: string, start?: number, count?: number, pageCursor?: string, attributeId?: string, variantId?: string, attributeGroupId?: string, langId?: string, storeId?: string, setName?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseProductAttributeList>> {
        const requestContextPromise = this.requestFactory.productAttributeList(productId, start, count, pageCursor, attributeId, variantId, attributeGroupId, langId, storeId, setName, sortBy, sortDirection, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productAttributeListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of attributes and values.
     * product.attribute.list
     * @param productId Retrieves attributes specified by product id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [attributeId] Retrieves info for specified attribute_id
     * @param [variantId] Defines product\&#39;s variants specified by variant id
     * @param [attributeGroupId] Filter by attribute_group_id
     * @param [langId] Retrieves attributes specified by language id
     * @param [storeId] Retrieves attributes specified by store id
     * @param [setName] Retrieves attributes specified by set_name in Magento
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productAttributeList(productId: string, start?: number, count?: number, pageCursor?: string, attributeId?: string, variantId?: string, attributeGroupId?: string, langId?: string, storeId?: string, setName?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseProductAttributeList> {
        return this.productAttributeListWithHttpInfo(productId, start, count, pageCursor, attributeId, variantId, attributeGroupId, langId, storeId, setName, sortBy, sortDirection, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseProductAttributeList>) => apiResponse.data));
    }

    /**
     * Set attribute value to product.
     * product.attribute.value.set
     * @param productId Defines product id where the attribute should be added
     * @param [attributeId] Filter by attribute_id
     * @param [attributeGroupId] Filter by attribute_group_id
     * @param [attributeName] Define attribute name
     * @param [value] Define attribute value
     * @param [valueId] Define attribute value id
     * @param [langId] Language id
     * @param [storeId] Store Id
     */
    public productAttributeValueSetWithHttpInfo(productId: string, attributeId?: string, attributeGroupId?: string, attributeName?: string, value?: string, valueId?: number, langId?: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<ProductAttributeValueSet200Response>> {
        const requestContextPromise = this.requestFactory.productAttributeValueSet(productId, attributeId, attributeGroupId, attributeName, value, valueId, langId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productAttributeValueSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set attribute value to product.
     * product.attribute.value.set
     * @param productId Defines product id where the attribute should be added
     * @param [attributeId] Filter by attribute_id
     * @param [attributeGroupId] Filter by attribute_group_id
     * @param [attributeName] Define attribute name
     * @param [value] Define attribute value
     * @param [valueId] Define attribute value id
     * @param [langId] Language id
     * @param [storeId] Store Id
     */
    public productAttributeValueSet(productId: string, attributeId?: string, attributeGroupId?: string, attributeName?: string, value?: string, valueId?: number, langId?: string, storeId?: string, _options?: Configuration): Observable<ProductAttributeValueSet200Response> {
        return this.productAttributeValueSetWithHttpInfo(productId, attributeId, attributeGroupId, attributeName, value, valueId, langId, storeId, _options).pipe(map((apiResponse: HttpInfo<ProductAttributeValueSet200Response>) => apiResponse.data));
    }

    /**
     * Removes attribute value for a product.
     * product.attribute.value.unset
     * @param productId Product id
     * @param attributeId Attribute Id
     * @param [storeId] Store Id
     * @param [includeDefault] Boolean, whether or not to unset default value of the attribute, if applicable
     * @param [reindex] Is reindex required
     * @param [clearCache] Is cache clear required
     */
    public productAttributeValueUnsetWithHttpInfo(productId: string, attributeId: string, storeId?: string, includeDefault?: boolean, reindex?: boolean, clearCache?: boolean, _options?: Configuration): Observable<HttpInfo<ProductAttributeValueUnset200Response>> {
        const requestContextPromise = this.requestFactory.productAttributeValueUnset(productId, attributeId, storeId, includeDefault, reindex, clearCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productAttributeValueUnsetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes attribute value for a product.
     * product.attribute.value.unset
     * @param productId Product id
     * @param attributeId Attribute Id
     * @param [storeId] Store Id
     * @param [includeDefault] Boolean, whether or not to unset default value of the attribute, if applicable
     * @param [reindex] Is reindex required
     * @param [clearCache] Is cache clear required
     */
    public productAttributeValueUnset(productId: string, attributeId: string, storeId?: string, includeDefault?: boolean, reindex?: boolean, clearCache?: boolean, _options?: Configuration): Observable<ProductAttributeValueUnset200Response> {
        return this.productAttributeValueUnsetWithHttpInfo(productId, attributeId, storeId, includeDefault, reindex, clearCache, _options).pipe(map((apiResponse: HttpInfo<ProductAttributeValueUnset200Response>) => apiResponse.data));
    }

    /**
     * Get list of brands from your store.
     * product.brand.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [brandIds] Retrieves brands specified by brand ids
     * @param [categoryId] Retrieves product brands specified by category id
     * @param [parentId] Retrieves brands specified by parent id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findValue] Entity search that is specified by some value
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productBrandListWithHttpInfo(start?: number, count?: number, pageCursor?: string, brandIds?: string, categoryId?: string, parentId?: string, storeId?: string, langId?: string, findWhere?: string, findValue?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseProductBrandList>> {
        const requestContextPromise = this.requestFactory.productBrandList(start, count, pageCursor, brandIds, categoryId, parentId, storeId, langId, findWhere, findValue, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBrandListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of brands from your store.
     * product.brand.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [brandIds] Retrieves brands specified by brand ids
     * @param [categoryId] Retrieves product brands specified by category id
     * @param [parentId] Retrieves brands specified by parent id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findValue] Entity search that is specified by some value
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productBrandList(start?: number, count?: number, pageCursor?: string, brandIds?: string, categoryId?: string, parentId?: string, storeId?: string, langId?: string, findWhere?: string, findValue?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseProductBrandList> {
        return this.productBrandListWithHttpInfo(start, count, pageCursor, brandIds, categoryId, parentId, storeId, langId, findWhere, findValue, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseProductBrandList>) => apiResponse.data));
    }

    /**
     * Search product child item (bundled item or configurable product variant) in store catalog.
     * product.child_item.find
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     */
    public productChildItemFindWithHttpInfo(findValue?: string, findWhere?: string, findParams?: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<ProductChildItemFind200Response>> {
        const requestContextPromise = this.requestFactory.productChildItemFind(findValue, findWhere, findParams, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productChildItemFindWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search product child item (bundled item or configurable product variant) in store catalog.
     * product.child_item.find
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     */
    public productChildItemFind(findValue?: string, findWhere?: string, findParams?: string, storeId?: string, _options?: Configuration): Observable<ProductChildItemFind200Response> {
        return this.productChildItemFindWithHttpInfo(findValue, findWhere, findParams, storeId, _options).pipe(map((apiResponse: HttpInfo<ProductChildItemFind200Response>) => apiResponse.data));
    }

    /**
     * Get child for specific product.
     * product.child_item.info
     * @param productId Filter by parent product id
     * @param id Entity id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [currencyId] Currency Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productChildItemInfoWithHttpInfo(productId: string, id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, useLatestApiVersion?: boolean, _options?: Configuration): Observable<HttpInfo<ProductChildItemInfo200Response>> {
        const requestContextPromise = this.requestFactory.productChildItemInfo(productId, id, storeId, langId, currencyId, responseFields, params, exclude, useLatestApiVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productChildItemInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get child for specific product.
     * product.child_item.info
     * @param productId Filter by parent product id
     * @param id Entity id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [currencyId] Currency Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productChildItemInfo(productId: string, id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, useLatestApiVersion?: boolean, _options?: Configuration): Observable<ProductChildItemInfo200Response> {
        return this.productChildItemInfoWithHttpInfo(productId, id, storeId, langId, currencyId, responseFields, params, exclude, useLatestApiVersion, _options).pipe(map((apiResponse: HttpInfo<ProductChildItemInfo200Response>) => apiResponse.data));
    }

    /**
     * Get a list of a product\'s child items, such as variants or bundle components. The total_count field in the response indicates the total number of items in the context of the current filter.
     * product.child_item.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve products child items via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [productId] Filter by parent product id
     * @param [productIds] Filter by parent product ids
     * @param [sku] Filter by products variant\&#39;s sku
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [currencyId] Currency Id
     * @param [availSale] Specifies the set of available/not available products for sale
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Child products search that is specified by field
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [returnGlobal] Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productChildItemListWithHttpInfo(start?: number, count?: number, pageCursor?: string, productId?: string, productIds?: string, sku?: string, storeId?: string, langId?: string, currencyId?: string, availSale?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, returnGlobal?: boolean, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Observable<HttpInfo<ModelResponseProductChildItemList>> {
        const requestContextPromise = this.requestFactory.productChildItemList(start, count, pageCursor, productId, productIds, sku, storeId, langId, currencyId, availSale, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, returnGlobal, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productChildItemListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of a product\'s child items, such as variants or bundle components. The total_count field in the response indicates the total number of items in the context of the current filter.
     * product.child_item.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve products child items via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [productId] Filter by parent product id
     * @param [productIds] Filter by parent product ids
     * @param [sku] Filter by products variant\&#39;s sku
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [currencyId] Currency Id
     * @param [availSale] Specifies the set of available/not available products for sale
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Child products search that is specified by field
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [returnGlobal] Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productChildItemList(start?: number, count?: number, pageCursor?: string, productId?: string, productIds?: string, sku?: string, storeId?: string, langId?: string, currencyId?: string, availSale?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, returnGlobal?: boolean, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Observable<ModelResponseProductChildItemList> {
        return this.productChildItemListWithHttpInfo(start, count, pageCursor, productId, productIds, sku, storeId, langId, currencyId, availSale, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, returnGlobal, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options).pipe(map((apiResponse: HttpInfo<ModelResponseProductChildItemList>) => apiResponse.data));
    }

    /**
     * Count products in store.
     * product.count
     * @param [sku] Filter by product\&#39;s sku
     * @param [productIds] Counts products specified by product ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [categoriesIds] Defines product add that is specified by comma-separated categories id
     * @param [categoryId] Counts products specified by category id
     * @param [storeId] Counts products specified by store id
     * @param [langId] Counts products specified by language id
     * @param [availView] Specifies the set of visible/invisible products
     * @param [availSale] Specifies the set of available/not available products for sale
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [brandName] Retrieves brands specified by brand name
     * @param [manufacturerId] Defines product\&#39;s manufacturer by manufacturer_id
     * @param [productAttributes] Defines product attributes
     * @param [status] Defines product\&#39;s status
     * @param [type] Defines products\&#39;s type
     * @param [visible] Filter items by visibility status
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Counts products that are searched specified by field
     * @param [reportRequestId] Report request id
     * @param [returnGlobal] Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productCountWithHttpInfo(sku?: string, productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, brandName?: string, manufacturerId?: string, productAttributes?: Array<string>, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, reportRequestId?: string, returnGlobal?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Observable<HttpInfo<ProductCount200Response>> {
        const requestContextPromise = this.requestFactory.productCount(sku, productIds, sinceId, categoriesIds, categoryId, storeId, langId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, brandName, manufacturerId, productAttributes, status, type, visible, findValue, findWhere, reportRequestId, returnGlobal, disableReportCache, useLatestApiVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Count products in store.
     * product.count
     * @param [sku] Filter by product\&#39;s sku
     * @param [productIds] Counts products specified by product ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [categoriesIds] Defines product add that is specified by comma-separated categories id
     * @param [categoryId] Counts products specified by category id
     * @param [storeId] Counts products specified by store id
     * @param [langId] Counts products specified by language id
     * @param [availView] Specifies the set of visible/invisible products
     * @param [availSale] Specifies the set of available/not available products for sale
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [brandName] Retrieves brands specified by brand name
     * @param [manufacturerId] Defines product\&#39;s manufacturer by manufacturer_id
     * @param [productAttributes] Defines product attributes
     * @param [status] Defines product\&#39;s status
     * @param [type] Defines products\&#39;s type
     * @param [visible] Filter items by visibility status
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Counts products that are searched specified by field
     * @param [reportRequestId] Report request id
     * @param [returnGlobal] Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productCount(sku?: string, productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, brandName?: string, manufacturerId?: string, productAttributes?: Array<string>, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, reportRequestId?: string, returnGlobal?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Observable<ProductCount200Response> {
        return this.productCountWithHttpInfo(sku, productIds, sinceId, categoriesIds, categoryId, storeId, langId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, brandName, manufacturerId, productAttributes, status, type, visible, findValue, findWhere, reportRequestId, returnGlobal, disableReportCache, useLatestApiVersion, _options).pipe(map((apiResponse: HttpInfo<ProductCount200Response>) => apiResponse.data));
    }

    /**
     * Add currency and/or set default in store
     * product.currency.add
     * @param iso3 Specifies standardized currency code
     * @param rate Defines the numerical identifier against to the major currency
     * @param [name] Defines currency\&#39;s name
     * @param [avail] Specifies whether the currency is available
     * @param [symbolLeft] Defines the symbol that is located before the currency
     * @param [symbolRight] Defines the symbol that is located after the currency
     * @param [_default] Specifies currency\&#39;s default meaning
     */
    public productCurrencyAddWithHttpInfo(iso3: string, rate: number, name?: string, avail?: boolean, symbolLeft?: string, symbolRight?: string, _default?: boolean, _options?: Configuration): Observable<HttpInfo<ProductCurrencyAdd200Response>> {
        const requestContextPromise = this.requestFactory.productCurrencyAdd(iso3, rate, name, avail, symbolLeft, symbolRight, _default, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCurrencyAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add currency and/or set default in store
     * product.currency.add
     * @param iso3 Specifies standardized currency code
     * @param rate Defines the numerical identifier against to the major currency
     * @param [name] Defines currency\&#39;s name
     * @param [avail] Specifies whether the currency is available
     * @param [symbolLeft] Defines the symbol that is located before the currency
     * @param [symbolRight] Defines the symbol that is located after the currency
     * @param [_default] Specifies currency\&#39;s default meaning
     */
    public productCurrencyAdd(iso3: string, rate: number, name?: string, avail?: boolean, symbolLeft?: string, symbolRight?: string, _default?: boolean, _options?: Configuration): Observable<ProductCurrencyAdd200Response> {
        return this.productCurrencyAddWithHttpInfo(iso3, rate, name, avail, symbolLeft, symbolRight, _default, _options).pipe(map((apiResponse: HttpInfo<ProductCurrencyAdd200Response>) => apiResponse.data));
    }

    /**
     * Get list of currencies
     * product.currency.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [_default] Specifies the set of default/not default currencies
     * @param [avail] Specifies the set of available/not available currencies
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productCurrencyListWithHttpInfo(start?: number, count?: number, pageCursor?: string, _default?: boolean, avail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseProductCurrencyList>> {
        const requestContextPromise = this.requestFactory.productCurrencyList(start, count, pageCursor, _default, avail, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCurrencyListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of currencies
     * product.currency.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [_default] Specifies the set of default/not default currencies
     * @param [avail] Specifies the set of available/not available currencies
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productCurrencyList(start?: number, count?: number, pageCursor?: string, _default?: boolean, avail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseProductCurrencyList> {
        return this.productCurrencyListWithHttpInfo(start, count, pageCursor, _default, avail, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseProductCurrencyList>) => apiResponse.data));
    }

    /**
     * Product delete
     * product.delete
     * @param id Product id that will be removed
     * @param [storeId] Store Id
     */
    public productDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<CustomerDelete200Response>> {
        const requestContextPromise = this.requestFactory.productDelete(id, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Product delete
     * product.delete
     * @param id Product id that will be removed
     * @param [storeId] Store Id
     */
    public productDelete(id: string, storeId?: string, _options?: Configuration): Observable<CustomerDelete200Response> {
        return this.productDeleteWithHttpInfo(id, storeId, _options).pipe(map((apiResponse: HttpInfo<CustomerDelete200Response>) => apiResponse.data));
    }

    /**
     * Remove product from the store.
     * product.delete.batch
     * @param productDeleteBatch
     */
    public productDeleteBatchWithHttpInfo(productDeleteBatch: ProductDeleteBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.productDeleteBatch(productDeleteBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productDeleteBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove product from the store.
     * product.delete.batch
     * @param productDeleteBatch
     */
    public productDeleteBatch(productDeleteBatch: ProductDeleteBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.productDeleteBatchWithHttpInfo(productDeleteBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

    /**
     * Search product in store catalog. \"Apple\" is specified here by default.
     * product.find
     * @param findValue Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [findWhat] Parameter\&#39;s value specifies the entity that has to be found
     * @param [langId] Search products specified by language id
     * @param [storeId] Store Id
     */
    public productFindWithHttpInfo(findValue: string, findWhere?: string, findParams?: string, findWhat?: string, langId?: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<ProductFind200Response>> {
        const requestContextPromise = this.requestFactory.productFind(findValue, findWhere, findParams, findWhat, langId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productFindWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search product in store catalog. \"Apple\" is specified here by default.
     * product.find
     * @param findValue Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [findWhat] Parameter\&#39;s value specifies the entity that has to be found
     * @param [langId] Search products specified by language id
     * @param [storeId] Store Id
     */
    public productFind(findValue: string, findWhere?: string, findParams?: string, findWhat?: string, langId?: string, storeId?: string, _options?: Configuration): Observable<ProductFind200Response> {
        return this.productFindWithHttpInfo(findValue, findWhere, findParams, findWhat, langId, storeId, _options).pipe(map((apiResponse: HttpInfo<ProductFind200Response>) => apiResponse.data));
    }

    /**
     * Add image to product
     * product.image.add
     * @param productImageAdd
     */
    public productImageAddWithHttpInfo(productImageAdd: ProductImageAdd, _options?: Configuration): Observable<HttpInfo<ProductImageAdd200Response>> {
        const requestContextPromise = this.requestFactory.productImageAdd(productImageAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productImageAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add image to product
     * product.image.add
     * @param productImageAdd
     */
    public productImageAdd(productImageAdd: ProductImageAdd, _options?: Configuration): Observable<ProductImageAdd200Response> {
        return this.productImageAddWithHttpInfo(productImageAdd, _options).pipe(map((apiResponse: HttpInfo<ProductImageAdd200Response>) => apiResponse.data));
    }

    /**
     * Delete image
     * product.image.delete
     * @param productId Defines product id where the image should be deleted
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productImageDeleteWithHttpInfo(productId: string, id: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.productImageDelete(productId, id, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productImageDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete image
     * product.image.delete
     * @param productId Defines product id where the image should be deleted
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productImageDelete(productId: string, id: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.productImageDeleteWithHttpInfo(productId, id, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Update details of image
     * product.image.update
     * @param productId Defines product id where the image should be updated
     * @param id Defines image update specified by image id
     * @param [variantIds] Defines product\&#39;s variants ids
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [imageName] Defines image\&#39;s name
     * @param [type] Defines image\&#39;s types that are specified by comma-separated list
     * @param [label] Defines alternative text that has to be attached to the picture
     * @param [position] Defines image’s position in the list
     * @param [hidden] Define is hide image
     */
    public productImageUpdateWithHttpInfo(productId: string, id: string, variantIds?: string, storeId?: string, langId?: string, imageName?: string, type?: string, label?: string, position?: number, hidden?: boolean, _options?: Configuration): Observable<HttpInfo<ProductImageUpdate200Response>> {
        const requestContextPromise = this.requestFactory.productImageUpdate(productId, id, variantIds, storeId, langId, imageName, type, label, position, hidden, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productImageUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update details of image
     * product.image.update
     * @param productId Defines product id where the image should be updated
     * @param id Defines image update specified by image id
     * @param [variantIds] Defines product\&#39;s variants ids
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [imageName] Defines image\&#39;s name
     * @param [type] Defines image\&#39;s types that are specified by comma-separated list
     * @param [label] Defines alternative text that has to be attached to the picture
     * @param [position] Defines image’s position in the list
     * @param [hidden] Define is hide image
     */
    public productImageUpdate(productId: string, id: string, variantIds?: string, storeId?: string, langId?: string, imageName?: string, type?: string, label?: string, position?: number, hidden?: boolean, _options?: Configuration): Observable<ProductImageUpdate200Response> {
        return this.productImageUpdateWithHttpInfo(productId, id, variantIds, storeId, langId, imageName, type, label, position, hidden, _options).pipe(map((apiResponse: HttpInfo<ProductImageUpdate200Response>) => apiResponse.data));
    }

    /**
     * Get information about a specific product by its ID. In the case of a multistore configuration, use the store_id filter to get a response in the context of a specific store.
     * product.info
     * @param id Retrieves product\&#39;s info specified by product id
     * @param [storeId] Retrieves product info specified by store id
     * @param [langId] Retrieves product info specified by language id
     * @param [currencyId] Currency Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productInfoWithHttpInfo(id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Observable<HttpInfo<ProductInfo200Response>> {
        const requestContextPromise = this.requestFactory.productInfo(id, storeId, langId, currencyId, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information about a specific product by its ID. In the case of a multistore configuration, use the store_id filter to get a response in the context of a specific store.
     * product.info
     * @param id Retrieves product\&#39;s info specified by product id
     * @param [storeId] Retrieves product info specified by store id
     * @param [langId] Retrieves product info specified by language id
     * @param [currencyId] Currency Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     */
    public productInfo(id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Observable<ProductInfo200Response> {
        return this.productInfoWithHttpInfo(id, storeId, langId, currencyId, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options).pipe(map((apiResponse: HttpInfo<ProductInfo200Response>) => apiResponse.data));
    }

    /**
     * Get list of products from your store. Returns 10 products by default.
     * product.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve products via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [productIds] Retrieves products specified by product ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [categoriesIds] Retrieves products specified by categories ids
     * @param [categoryId] Retrieves products specified by category id
     * @param [storeId] Retrieves products specified by store id
     * @param [langId] Retrieves products specified by language id
     * @param [currencyId] Currency Id
     * @param [availView] Specifies the set of visible/invisible products
     * @param [availSale] Specifies the set of available/not available products for sale
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [sku] Filter by product\&#39;s sku
     * @param [brandName] Retrieves brands specified by brand name
     * @param [productAttributes] Defines product attributes
     * @param [manufacturerId] Defines product\&#39;s manufacturer by manufacturer_id
     * @param [status] Defines product\&#39;s status
     * @param [type] Defines products\&#39;s type
     * @param [visible] Filter items by visibility status
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Product search that is specified by field
     * @param [returnGlobal] Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [reportRequestId] Report request id
     * @param [disableCache] Disable cache for current request
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     * @param [productType] A categorization for the product
     */
    public productListWithHttpInfo(start?: number, count?: number, pageCursor?: string, productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, currencyId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sku?: string, brandName?: string, productAttributes?: Array<string>, manufacturerId?: string, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, returnGlobal?: boolean, params?: string, responseFields?: string, exclude?: string, sortBy?: string, sortDirection?: string, reportRequestId?: string, disableCache?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, productType?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseProductList>> {
        const requestContextPromise = this.requestFactory.productList(start, count, pageCursor, productIds, sinceId, categoriesIds, categoryId, storeId, langId, currencyId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, sku, brandName, productAttributes, manufacturerId, status, type, visible, findValue, findWhere, returnGlobal, params, responseFields, exclude, sortBy, sortDirection, reportRequestId, disableCache, disableReportCache, useLatestApiVersion, productType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of products from your store. Returns 10 products by default.
     * product.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve products via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [productIds] Retrieves products specified by product ids
     * @param [sinceId] Retrieve entities starting from the specified id.
     * @param [categoriesIds] Retrieves products specified by categories ids
     * @param [categoryId] Retrieves products specified by category id
     * @param [storeId] Retrieves products specified by store id
     * @param [langId] Retrieves products specified by language id
     * @param [currencyId] Currency Id
     * @param [availView] Specifies the set of visible/invisible products
     * @param [availSale] Specifies the set of available/not available products for sale
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [sku] Filter by product\&#39;s sku
     * @param [brandName] Retrieves brands specified by brand name
     * @param [productAttributes] Defines product attributes
     * @param [manufacturerId] Defines product\&#39;s manufacturer by manufacturer_id
     * @param [status] Defines product\&#39;s status
     * @param [type] Defines products\&#39;s type
     * @param [visible] Filter items by visibility status
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Product search that is specified by field
     * @param [returnGlobal] Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [reportRequestId] Report request id
     * @param [disableCache] Disable cache for current request
     * @param [disableReportCache] Disable report cache for current request
     * @param [useLatestApiVersion] Use the latest platform API version
     * @param [productType] A categorization for the product
     */
    public productList(start?: number, count?: number, pageCursor?: string, productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, currencyId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sku?: string, brandName?: string, productAttributes?: Array<string>, manufacturerId?: string, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, returnGlobal?: boolean, params?: string, responseFields?: string, exclude?: string, sortBy?: string, sortDirection?: string, reportRequestId?: string, disableCache?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, productType?: string, _options?: Configuration): Observable<ModelResponseProductList> {
        return this.productListWithHttpInfo(start, count, pageCursor, productIds, sinceId, categoriesIds, categoryId, storeId, langId, currencyId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, sku, brandName, productAttributes, manufacturerId, status, type, visible, findValue, findWhere, returnGlobal, params, responseFields, exclude, sortBy, sortDirection, reportRequestId, disableCache, disableReportCache, useLatestApiVersion, productType, _options).pipe(map((apiResponse: HttpInfo<ModelResponseProductList>) => apiResponse.data));
    }

    /**
     * Add manufacturer to store and assign to product
     * product.manufacturer.add
     * @param productId Defines products specified by product id
     * @param manufacturer Defines product’s manufacturer\&#39;s name
     * @param [storeId] Store Id
     * @param [metaTitle] Defines unique meta title for each entity
     * @param [metaKeywords] Defines unique meta keywords for each entity
     * @param [metaDescription] Defines unique meta description of a entity
     * @param [searchKeywords] Defines unique search keywords
     * @param [imageUrl] Image Url
     * @param [seoUrl] Defines unique URL for SEO
     */
    public productManufacturerAddWithHttpInfo(productId: string, manufacturer: string, storeId?: string, metaTitle?: string, metaKeywords?: string, metaDescription?: string, searchKeywords?: string, imageUrl?: string, seoUrl?: string, _options?: Configuration): Observable<HttpInfo<ProductManufacturerAdd200Response>> {
        const requestContextPromise = this.requestFactory.productManufacturerAdd(productId, manufacturer, storeId, metaTitle, metaKeywords, metaDescription, searchKeywords, imageUrl, seoUrl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productManufacturerAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add manufacturer to store and assign to product
     * product.manufacturer.add
     * @param productId Defines products specified by product id
     * @param manufacturer Defines product’s manufacturer\&#39;s name
     * @param [storeId] Store Id
     * @param [metaTitle] Defines unique meta title for each entity
     * @param [metaKeywords] Defines unique meta keywords for each entity
     * @param [metaDescription] Defines unique meta description of a entity
     * @param [searchKeywords] Defines unique search keywords
     * @param [imageUrl] Image Url
     * @param [seoUrl] Defines unique URL for SEO
     */
    public productManufacturerAdd(productId: string, manufacturer: string, storeId?: string, metaTitle?: string, metaKeywords?: string, metaDescription?: string, searchKeywords?: string, imageUrl?: string, seoUrl?: string, _options?: Configuration): Observable<ProductManufacturerAdd200Response> {
        return this.productManufacturerAddWithHttpInfo(productId, manufacturer, storeId, metaTitle, metaKeywords, metaDescription, searchKeywords, imageUrl, seoUrl, _options).pipe(map((apiResponse: HttpInfo<ProductManufacturerAdd200Response>) => apiResponse.data));
    }

    /**
     * Add product option from store.
     * product.option.add
     * @param productOptionAdd
     */
    public productOptionAddWithHttpInfo(productOptionAdd: ProductOptionAdd, _options?: Configuration): Observable<HttpInfo<ProductOptionAdd200Response>> {
        const requestContextPromise = this.requestFactory.productOptionAdd(productOptionAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add product option from store.
     * product.option.add
     * @param productOptionAdd
     */
    public productOptionAdd(productOptionAdd: ProductOptionAdd, _options?: Configuration): Observable<ProductOptionAdd200Response> {
        return this.productOptionAddWithHttpInfo(productOptionAdd, _options).pipe(map((apiResponse: HttpInfo<ProductOptionAdd200Response>) => apiResponse.data));
    }

    /**
     * Assign option from product.
     * product.option.assign
     * @param productId Defines product id where the option should be assigned
     * @param optionId Defines option id which has to be assigned
     * @param [required] Defines if the option is required
     * @param [sortOrder] Sort number in the list
     * @param [optionValues] Defines option values that has to be assigned
     * @param [clearCache] Is cache clear required
     */
    public productOptionAssignWithHttpInfo(productId: string, optionId: string, required?: boolean, sortOrder?: number, optionValues?: string, clearCache?: boolean, _options?: Configuration): Observable<HttpInfo<ProductOptionAssign200Response>> {
        const requestContextPromise = this.requestFactory.productOptionAssign(productId, optionId, required, sortOrder, optionValues, clearCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionAssignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign option from product.
     * product.option.assign
     * @param productId Defines product id where the option should be assigned
     * @param optionId Defines option id which has to be assigned
     * @param [required] Defines if the option is required
     * @param [sortOrder] Sort number in the list
     * @param [optionValues] Defines option values that has to be assigned
     * @param [clearCache] Is cache clear required
     */
    public productOptionAssign(productId: string, optionId: string, required?: boolean, sortOrder?: number, optionValues?: string, clearCache?: boolean, _options?: Configuration): Observable<ProductOptionAssign200Response> {
        return this.productOptionAssignWithHttpInfo(productId, optionId, required, sortOrder, optionValues, clearCache, _options).pipe(map((apiResponse: HttpInfo<ProductOptionAssign200Response>) => apiResponse.data));
    }

    /**
     * Product option delete.
     * product.option.delete
     * @param optionId Defines option id that should be deleted
     * @param productId Defines product id where the option should be deleted
     * @param [storeId] Store Id
     */
    public productOptionDeleteWithHttpInfo(optionId: string, productId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.productOptionDelete(optionId, productId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Product option delete.
     * product.option.delete
     * @param optionId Defines option id that should be deleted
     * @param productId Defines product id where the option should be deleted
     * @param [storeId] Store Id
     */
    public productOptionDelete(optionId: string, productId: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.productOptionDeleteWithHttpInfo(optionId, productId, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Get list of options.
     * product.option.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [productId] Retrieves products\&#39; options specified by product id
     * @param [langId] Language id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productOptionListWithHttpInfo(start?: number, count?: number, productId?: string, langId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseProductOptionList>> {
        const requestContextPromise = this.requestFactory.productOptionList(start, count, productId, langId, storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of options.
     * product.option.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [productId] Retrieves products\&#39; options specified by product id
     * @param [langId] Language id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productOptionList(start?: number, count?: number, productId?: string, langId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseProductOptionList> {
        return this.productOptionListWithHttpInfo(start, count, productId, langId, storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseProductOptionList>) => apiResponse.data));
    }

    /**
     * Add product option item from option.
     * product.option.value.add
     * @param productId Defines product id where the option value should be added
     * @param optionId Defines option id where the value has to be added
     * @param [optionValue] Defines option value that has to be added
     * @param [sortOrder] Sort number in the list
     * @param [displayValue] Defines the value that will be displayed for the option value
     * @param [isDefault] Defines as a default
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueAddWithHttpInfo(productId: string, optionId: string, optionValue?: string, sortOrder?: number, displayValue?: string, isDefault?: boolean, clearCache?: boolean, _options?: Configuration): Observable<HttpInfo<ProductOptionValueAdd200Response>> {
        const requestContextPromise = this.requestFactory.productOptionValueAdd(productId, optionId, optionValue, sortOrder, displayValue, isDefault, clearCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionValueAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add product option item from option.
     * product.option.value.add
     * @param productId Defines product id where the option value should be added
     * @param optionId Defines option id where the value has to be added
     * @param [optionValue] Defines option value that has to be added
     * @param [sortOrder] Sort number in the list
     * @param [displayValue] Defines the value that will be displayed for the option value
     * @param [isDefault] Defines as a default
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueAdd(productId: string, optionId: string, optionValue?: string, sortOrder?: number, displayValue?: string, isDefault?: boolean, clearCache?: boolean, _options?: Configuration): Observable<ProductOptionValueAdd200Response> {
        return this.productOptionValueAddWithHttpInfo(productId, optionId, optionValue, sortOrder, displayValue, isDefault, clearCache, _options).pipe(map((apiResponse: HttpInfo<ProductOptionValueAdd200Response>) => apiResponse.data));
    }

    /**
     * Assign product option item from product.
     * product.option.value.assign
     * @param productOptionId Defines product\&#39;s option id where the value has to be assigned
     * @param optionValueId Defines value id that has to be assigned
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueAssignWithHttpInfo(productOptionId: number, optionValueId: string, clearCache?: boolean, _options?: Configuration): Observable<HttpInfo<ProductOptionValueAssign200Response>> {
        const requestContextPromise = this.requestFactory.productOptionValueAssign(productOptionId, optionValueId, clearCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionValueAssignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign product option item from product.
     * product.option.value.assign
     * @param productOptionId Defines product\&#39;s option id where the value has to be assigned
     * @param optionValueId Defines value id that has to be assigned
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueAssign(productOptionId: number, optionValueId: string, clearCache?: boolean, _options?: Configuration): Observable<ProductOptionValueAssign200Response> {
        return this.productOptionValueAssignWithHttpInfo(productOptionId, optionValueId, clearCache, _options).pipe(map((apiResponse: HttpInfo<ProductOptionValueAssign200Response>) => apiResponse.data));
    }

    /**
     * Product option value delete.
     * product.option.value.delete
     * @param optionId Defines option id where the value should be deleted
     * @param optionValueId Defines option value id that should be deleted
     * @param productId Defines product id where the option value should be deleted
     * @param [storeId] Store Id
     */
    public productOptionValueDeleteWithHttpInfo(optionId: string, optionValueId: string, productId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.productOptionValueDelete(optionId, optionValueId, productId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionValueDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Product option value delete.
     * product.option.value.delete
     * @param optionId Defines option id where the value should be deleted
     * @param optionValueId Defines option value id that should be deleted
     * @param productId Defines product id where the option value should be deleted
     * @param [storeId] Store Id
     */
    public productOptionValueDelete(optionId: string, optionValueId: string, productId: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.productOptionValueDeleteWithHttpInfo(optionId, optionValueId, productId, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Update product option item from option.
     * product.option.value.update
     * @param productId Defines product id where the option value should be updated
     * @param optionId Defines option id where the value has to be updated
     * @param optionValueId Defines value id that has to be assigned
     * @param [optionValue] Defines option value that has to be added
     * @param [price] Defines new product option price
     * @param [quantity] Defines new products\&#39; options quantity
     * @param [displayValue] Defines the value that will be displayed for the option value
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueUpdateWithHttpInfo(productId: string, optionId: string, optionValueId: string, optionValue?: string, price?: number, quantity?: number, displayValue?: string, clearCache?: boolean, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.productOptionValueUpdate(productId, optionId, optionValueId, optionValue, price, quantity, displayValue, clearCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productOptionValueUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update product option item from option.
     * product.option.value.update
     * @param productId Defines product id where the option value should be updated
     * @param optionId Defines option id where the value has to be updated
     * @param optionValueId Defines value id that has to be assigned
     * @param [optionValue] Defines option value that has to be added
     * @param [price] Defines new product option price
     * @param [quantity] Defines new products\&#39; options quantity
     * @param [displayValue] Defines the value that will be displayed for the option value
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueUpdate(productId: string, optionId: string, optionValueId: string, optionValue?: string, price?: number, quantity?: number, displayValue?: string, clearCache?: boolean, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.productOptionValueUpdateWithHttpInfo(productId, optionId, optionValueId, optionValue, price, quantity, displayValue, clearCache, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Add some prices to the product.
     * product.price.add
     * @param productPriceAdd
     */
    public productPriceAddWithHttpInfo(productPriceAdd: ProductPriceAdd, _options?: Configuration): Observable<HttpInfo<CartValidate200Response>> {
        const requestContextPromise = this.requestFactory.productPriceAdd(productPriceAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productPriceAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add some prices to the product.
     * product.price.add
     * @param productPriceAdd
     */
    public productPriceAdd(productPriceAdd: ProductPriceAdd, _options?: Configuration): Observable<CartValidate200Response> {
        return this.productPriceAddWithHttpInfo(productPriceAdd, _options).pipe(map((apiResponse: HttpInfo<CartValidate200Response>) => apiResponse.data));
    }

    /**
     * Delete some prices of the product
     * product.price.delete
     * @param productId Defines the product where the price has to be deleted
     * @param [groupPrices] Defines product\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productPriceDeleteWithHttpInfo(productId: string, groupPrices?: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.productPriceDelete(productId, groupPrices, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productPriceDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete some prices of the product
     * product.price.delete
     * @param productId Defines the product where the price has to be deleted
     * @param [groupPrices] Defines product\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productPriceDelete(productId: string, groupPrices?: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.productPriceDeleteWithHttpInfo(productId, groupPrices, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Update some prices of the product.
     * product.price.update
     * @param productPriceUpdate
     */
    public productPriceUpdateWithHttpInfo(productPriceUpdate: ProductPriceUpdate, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.productPriceUpdate(productPriceUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productPriceUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update some prices of the product.
     * product.price.update
     * @param productPriceUpdate
     */
    public productPriceUpdate(productPriceUpdate: ProductPriceUpdate, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.productPriceUpdateWithHttpInfo(productPriceUpdate, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Get reviews of a specific product.
     * product.review.list
     * @param productId Product id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves reviews specified by ids
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [status] Defines status
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [customerId] Retrieves orders specified by customer id
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productReviewListWithHttpInfo(productId: string, start?: number, count?: number, pageCursor?: string, ids?: string, storeId?: string, langId?: string, status?: string, createdFrom?: string, createdTo?: string, customerId?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseProductReviewList>> {
        const requestContextPromise = this.requestFactory.productReviewList(productId, start, count, pageCursor, ids, storeId, langId, status, createdFrom, createdTo, customerId, sortBy, sortDirection, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productReviewListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get reviews of a specific product.
     * product.review.list
     * @param productId Product id
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [ids] Retrieves reviews specified by ids
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [status] Defines status
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [customerId] Retrieves orders specified by customer id
     * @param [sortBy] Set field to sort by
     * @param [sortDirection] Set sorting direction
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public productReviewList(productId: string, start?: number, count?: number, pageCursor?: string, ids?: string, storeId?: string, langId?: string, status?: string, createdFrom?: string, createdTo?: string, customerId?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseProductReviewList> {
        return this.productReviewListWithHttpInfo(productId, start, count, pageCursor, ids, storeId, langId, status, createdFrom, createdTo, customerId, sortBy, sortDirection, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseProductReviewList>) => apiResponse.data));
    }

    /**
     * Assign product to store
     * product.store.assign
     * @param productId Defines id of the product which should be assigned to a store
     * @param storeId Defines id of the store product should be assigned to
     */
    public productStoreAssignWithHttpInfo(productId: string, storeId: string, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.productStoreAssign(productId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productStoreAssignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign product to store
     * product.store.assign
     * @param productId Defines id of the product which should be assigned to a store
     * @param storeId Defines id of the store product should be assigned to
     */
    public productStoreAssign(productId: string, storeId: string, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.productStoreAssignWithHttpInfo(productId, storeId, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Add tax class and tax rate to store and assign to product.
     * product.tax.add
     * @param productTaxAdd
     */
    public productTaxAddWithHttpInfo(productTaxAdd: ProductTaxAdd, _options?: Configuration): Observable<HttpInfo<ProductTaxAdd200Response>> {
        const requestContextPromise = this.requestFactory.productTaxAdd(productTaxAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productTaxAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add tax class and tax rate to store and assign to product.
     * product.tax.add
     * @param productTaxAdd
     */
    public productTaxAdd(productTaxAdd: ProductTaxAdd, _options?: Configuration): Observable<ProductTaxAdd200Response> {
        return this.productTaxAddWithHttpInfo(productTaxAdd, _options).pipe(map((apiResponse: HttpInfo<ProductTaxAdd200Response>) => apiResponse.data));
    }

    /**
     * This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.
     * product.update
     * @param productUpdate
     */
    public productUpdateWithHttpInfo(productUpdate: ProductUpdate, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.productUpdate(productUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.
     * product.update
     * @param productUpdate
     */
    public productUpdate(productUpdate: ProductUpdate, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.productUpdateWithHttpInfo(productUpdate, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Update products on the store.
     * product.update.batch
     * @param productUpdateBatch
     */
    public productUpdateBatchWithHttpInfo(productUpdateBatch: ProductUpdateBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.productUpdateBatch(productUpdateBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update products on the store.
     * product.update.batch
     * @param productUpdateBatch
     */
    public productUpdateBatch(productUpdateBatch: ProductUpdateBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.productUpdateBatchWithHttpInfo(productUpdateBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

    /**
     * Add variant to product.
     * product.variant.add
     * @param productVariantAdd
     */
    public productVariantAddWithHttpInfo(productVariantAdd: ProductVariantAdd, _options?: Configuration): Observable<HttpInfo<ProductVariantAdd200Response>> {
        const requestContextPromise = this.requestFactory.productVariantAdd(productVariantAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add variant to product.
     * product.variant.add
     * @param productVariantAdd
     */
    public productVariantAdd(productVariantAdd: ProductVariantAdd, _options?: Configuration): Observable<ProductVariantAdd200Response> {
        return this.productVariantAddWithHttpInfo(productVariantAdd, _options).pipe(map((apiResponse: HttpInfo<ProductVariantAdd200Response>) => apiResponse.data));
    }

    /**
     * Add new product variants to the store.
     * product.variant.add.batch
     * @param productVariantAddBatch
     */
    public productVariantAddBatchWithHttpInfo(productVariantAddBatch: ProductVariantAddBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.productVariantAddBatch(productVariantAddBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantAddBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add new product variants to the store.
     * product.variant.add.batch
     * @param productVariantAddBatch
     */
    public productVariantAddBatch(productVariantAddBatch: ProductVariantAddBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.productVariantAddBatchWithHttpInfo(productVariantAddBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

    /**
     * Delete variant.
     * product.variant.delete
     * @param id Defines variant removal, specified by variant id
     * @param productId Defines product\&#39;s id where the variant has to be deleted
     * @param [storeId] Store Id
     */
    public productVariantDeleteWithHttpInfo(id: string, productId: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeValueDelete200Response>> {
        const requestContextPromise = this.requestFactory.productVariantDelete(id, productId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete variant.
     * product.variant.delete
     * @param id Defines variant removal, specified by variant id
     * @param productId Defines product\&#39;s id where the variant has to be deleted
     * @param [storeId] Store Id
     */
    public productVariantDelete(id: string, productId: string, storeId?: string, _options?: Configuration): Observable<AttributeValueDelete200Response> {
        return this.productVariantDeleteWithHttpInfo(id, productId, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeValueDelete200Response>) => apiResponse.data));
    }

    /**
     * Remove product variants from the store.
     * product.variant.delete.batch
     * @param productVariantDeleteBatch
     */
    public productVariantDeleteBatchWithHttpInfo(productVariantDeleteBatch: ProductVariantDeleteBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.productVariantDeleteBatch(productVariantDeleteBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantDeleteBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove product variants from the store.
     * product.variant.delete.batch
     * @param productVariantDeleteBatch
     */
    public productVariantDeleteBatch(productVariantDeleteBatch: ProductVariantDeleteBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.productVariantDeleteBatchWithHttpInfo(productVariantDeleteBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

    /**
     * Add image to product
     * product.variant.image.add
     * @param productVariantImageAdd
     */
    public productVariantImageAddWithHttpInfo(productVariantImageAdd: ProductVariantImageAdd, _options?: Configuration): Observable<HttpInfo<ProductVariantImageAdd200Response>> {
        const requestContextPromise = this.requestFactory.productVariantImageAdd(productVariantImageAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantImageAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add image to product
     * product.variant.image.add
     * @param productVariantImageAdd
     */
    public productVariantImageAdd(productVariantImageAdd: ProductVariantImageAdd, _options?: Configuration): Observable<ProductVariantImageAdd200Response> {
        return this.productVariantImageAddWithHttpInfo(productVariantImageAdd, _options).pipe(map((apiResponse: HttpInfo<ProductVariantImageAdd200Response>) => apiResponse.data));
    }

    /**
     * Delete  image to product
     * product.variant.image.delete
     * @param productId Defines product id where the variant image should be deleted
     * @param productVariantId Defines product\&#39;s variants specified by variant id
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productVariantImageDeleteWithHttpInfo(productId: string, productVariantId: string, id: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.productVariantImageDelete(productId, productVariantId, id, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantImageDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete  image to product
     * product.variant.image.delete
     * @param productId Defines product id where the variant image should be deleted
     * @param productVariantId Defines product\&#39;s variants specified by variant id
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productVariantImageDelete(productId: string, productVariantId: string, id: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.productVariantImageDeleteWithHttpInfo(productId, productVariantId, id, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Add some prices to the product variant.
     * product.variant.price.add
     * @param productVariantPriceAdd
     */
    public productVariantPriceAddWithHttpInfo(productVariantPriceAdd: ProductVariantPriceAdd, _options?: Configuration): Observable<HttpInfo<CartValidate200Response>> {
        const requestContextPromise = this.requestFactory.productVariantPriceAdd(productVariantPriceAdd, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantPriceAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add some prices to the product variant.
     * product.variant.price.add
     * @param productVariantPriceAdd
     */
    public productVariantPriceAdd(productVariantPriceAdd: ProductVariantPriceAdd, _options?: Configuration): Observable<CartValidate200Response> {
        return this.productVariantPriceAddWithHttpInfo(productVariantPriceAdd, _options).pipe(map((apiResponse: HttpInfo<CartValidate200Response>) => apiResponse.data));
    }

    /**
     * Delete some prices of the product variant.
     * product.variant.price.delete
     * @param id Defines the variant where the price has to be deleted
     * @param productId Product id
     * @param groupPrices Defines variants\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productVariantPriceDeleteWithHttpInfo(id: string, productId: string, groupPrices: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.productVariantPriceDelete(id, productId, groupPrices, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantPriceDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete some prices of the product variant.
     * product.variant.price.delete
     * @param id Defines the variant where the price has to be deleted
     * @param productId Product id
     * @param groupPrices Defines variants\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productVariantPriceDelete(id: string, productId: string, groupPrices: string, storeId?: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.productVariantPriceDeleteWithHttpInfo(id, productId, groupPrices, storeId, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * Update some prices of the product variant.
     * product.variant.price.update
     * @param productVariantPriceUpdate
     */
    public productVariantPriceUpdateWithHttpInfo(productVariantPriceUpdate: ProductVariantPriceUpdate, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.productVariantPriceUpdate(productVariantPriceUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantPriceUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update some prices of the product variant.
     * product.variant.price.update
     * @param productVariantPriceUpdate
     */
    public productVariantPriceUpdate(productVariantPriceUpdate: ProductVariantPriceUpdate, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.productVariantPriceUpdateWithHttpInfo(productVariantPriceUpdate, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Update variant.
     * product.variant.update
     * @param productVariantUpdate
     */
    public productVariantUpdateWithHttpInfo(productVariantUpdate: ProductVariantUpdate, _options?: Configuration): Observable<HttpInfo<AccountConfigUpdate200Response>> {
        const requestContextPromise = this.requestFactory.productVariantUpdate(productVariantUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update variant.
     * product.variant.update
     * @param productVariantUpdate
     */
    public productVariantUpdate(productVariantUpdate: ProductVariantUpdate, _options?: Configuration): Observable<AccountConfigUpdate200Response> {
        return this.productVariantUpdateWithHttpInfo(productVariantUpdate, _options).pipe(map((apiResponse: HttpInfo<AccountConfigUpdate200Response>) => apiResponse.data));
    }

    /**
     * Update products variants on the store.
     * product.variant.update.batch
     * @param productVariantUpdateBatch
     */
    public productVariantUpdateBatchWithHttpInfo(productVariantUpdateBatch: ProductVariantUpdateBatch, _options?: Configuration): Observable<HttpInfo<CategoryAddBatch200Response>> {
        const requestContextPromise = this.requestFactory.productVariantUpdateBatch(productVariantUpdateBatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productVariantUpdateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update products variants on the store.
     * product.variant.update.batch
     * @param productVariantUpdateBatch
     */
    public productVariantUpdateBatch(productVariantUpdateBatch: ProductVariantUpdateBatch, _options?: Configuration): Observable<CategoryAddBatch200Response> {
        return this.productVariantUpdateBatchWithHttpInfo(productVariantUpdateBatch, _options).pipe(map((apiResponse: HttpInfo<CategoryAddBatch200Response>) => apiResponse.data));
    }

}

import { ReturnApiRequestFactory, ReturnApiResponseProcessor} from "../apis/ReturnApi";
export class ObservableReturnApi {
    private requestFactory: ReturnApiRequestFactory;
    private responseProcessor: ReturnApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReturnApiRequestFactory,
        responseProcessor?: ReturnApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReturnApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReturnApiResponseProcessor();
    }

    /**
     * Retrieve list of return actions
     * return.action.list
     */
    public returnActionListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ReturnActionList200Response>> {
        const requestContextPromise = this.requestFactory.returnActionList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.returnActionListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of return actions
     * return.action.list
     */
    public returnActionList(_options?: Configuration): Observable<ReturnActionList200Response> {
        return this.returnActionListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ReturnActionList200Response>) => apiResponse.data));
    }

    /**
     * Count returns in store
     * return.count
     * @param [orderIds] Counts return requests specified by order ids
     * @param [customerId] Counts return requests quantity specified by customer id
     * @param [storeId] Store Id
     * @param [status] Defines status
     * @param [returnType] Retrieves returns specified by return type
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public returnCountWithHttpInfo(orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<HttpInfo<ReturnCount200Response>> {
        const requestContextPromise = this.requestFactory.returnCount(orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, reportRequestId, disableReportCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.returnCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Count returns in store
     * return.count
     * @param [orderIds] Counts return requests specified by order ids
     * @param [customerId] Counts return requests quantity specified by customer id
     * @param [storeId] Store Id
     * @param [status] Defines status
     * @param [returnType] Retrieves returns specified by return type
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public returnCount(orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<ReturnCount200Response> {
        return this.returnCountWithHttpInfo(orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, reportRequestId, disableReportCache, _options).pipe(map((apiResponse: HttpInfo<ReturnCount200Response>) => apiResponse.data));
    }

    /**
     * Retrieve return information.
     * return.info
     * @param id Entity id
     * @param [orderId] Defines the order id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public returnInfoWithHttpInfo(id: string, orderId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ReturnInfo200Response>> {
        const requestContextPromise = this.requestFactory.returnInfo(id, orderId, storeId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.returnInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve return information.
     * return.info
     * @param id Entity id
     * @param [orderId] Defines the order id
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public returnInfo(id: string, orderId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ReturnInfo200Response> {
        return this.returnInfoWithHttpInfo(id, orderId, storeId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ReturnInfo200Response>) => apiResponse.data));
    }

    /**
     * Get list of return requests from store.
     * return.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [orderId] Defines the order id
     * @param [orderIds] Retrieves return requests specified by order ids
     * @param [customerId] Retrieves return requests specified by customer id
     * @param [storeId] Store Id
     * @param [status] Defines status
     * @param [returnType] Retrieves returns specified by return type
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public returnListWithHttpInfo(start?: number, count?: number, pageCursor?: string, orderId?: string, orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<HttpInfo<ModelResponseReturnList>> {
        const requestContextPromise = this.requestFactory.returnList(start, count, pageCursor, orderId, orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, reportRequestId, disableReportCache, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.returnListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of return requests from store.
     * return.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [orderId] Defines the order id
     * @param [orderIds] Retrieves return requests specified by order ids
     * @param [customerId] Retrieves return requests specified by customer id
     * @param [storeId] Store Id
     * @param [status] Defines status
     * @param [returnType] Retrieves returns specified by return type
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * @param [reportRequestId] Report request id
     * @param [disableReportCache] Disable report cache for current request
     */
    public returnList(start?: number, count?: number, pageCursor?: string, orderId?: string, orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Observable<ModelResponseReturnList> {
        return this.returnListWithHttpInfo(start, count, pageCursor, orderId, orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, reportRequestId, disableReportCache, _options).pipe(map((apiResponse: HttpInfo<ModelResponseReturnList>) => apiResponse.data));
    }

    /**
     * Retrieve list of return reasons
     * return.reason.list
     * @param [storeId] Store Id
     */
    public returnReasonListWithHttpInfo(storeId?: string, _options?: Configuration): Observable<HttpInfo<ReturnReasonList200Response>> {
        const requestContextPromise = this.requestFactory.returnReasonList(storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.returnReasonListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of return reasons
     * return.reason.list
     * @param [storeId] Store Id
     */
    public returnReasonList(storeId?: string, _options?: Configuration): Observable<ReturnReasonList200Response> {
        return this.returnReasonListWithHttpInfo(storeId, _options).pipe(map((apiResponse: HttpInfo<ReturnReasonList200Response>) => apiResponse.data));
    }

    /**
     * Retrieve list of statuses
     * return.status.list
     */
    public returnStatusListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ReturnStatusList200Response>> {
        const requestContextPromise = this.requestFactory.returnStatusList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.returnStatusListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve list of statuses
     * return.status.list
     */
    public returnStatusList(_options?: Configuration): Observable<ReturnStatusList200Response> {
        return this.returnStatusListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ReturnStatusList200Response>) => apiResponse.data));
    }

}

import { SubscriberApiRequestFactory, SubscriberApiResponseProcessor} from "../apis/SubscriberApi";
export class ObservableSubscriberApi {
    private requestFactory: SubscriberApiRequestFactory;
    private responseProcessor: SubscriberApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriberApiRequestFactory,
        responseProcessor?: SubscriberApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriberApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriberApiResponseProcessor();
    }

    /**
     * Get subscribers list
     * subscriber.list
     * @param [ids] Retrieves subscribers specified by ids
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [subscribed] Filter by subscription status
     * @param [storeId] Store Id
     * @param [email] Filter subscribers by email
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public subscriberListWithHttpInfo(ids?: string, start?: number, count?: number, pageCursor?: string, subscribed?: boolean, storeId?: string, email?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseSubscriberList>> {
        const requestContextPromise = this.requestFactory.subscriberList(ids, start, count, pageCursor, subscribed, storeId, email, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.subscriberListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get subscribers list
     * subscriber.list
     * @param [ids] Retrieves subscribers specified by ids
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [subscribed] Filter by subscription status
     * @param [storeId] Store Id
     * @param [email] Filter subscribers by email
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [createdTo] Retrieve entities to their creation date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public subscriberList(ids?: string, start?: number, count?: number, pageCursor?: string, subscribed?: boolean, storeId?: string, email?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseSubscriberList> {
        return this.subscriberListWithHttpInfo(ids, start, count, pageCursor, subscribed, storeId, email, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseSubscriberList>) => apiResponse.data));
    }

}

import { TaxApiRequestFactory, TaxApiResponseProcessor} from "../apis/TaxApi";
export class ObservableTaxApi {
    private requestFactory: TaxApiRequestFactory;
    private responseProcessor: TaxApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TaxApiRequestFactory,
        responseProcessor?: TaxApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaxApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaxApiResponseProcessor();
    }

    /**
     * Use this method to get information about a tax class and its rates. It allows you to calculate the tax percentage for a specific customer\'s address. This information contains relatively static data that rarely changes, so API2Cart may cache certain data to reduce the load on the store and speed up request execution. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, use the cart.validate method.
     * tax.class.info
     * @param taxClassId Retrieves taxes specified by class id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public taxClassInfoWithHttpInfo(taxClassId: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseTaxClassInfo>> {
        const requestContextPromise = this.requestFactory.taxClassInfo(taxClassId, storeId, langId, responseFields, params, exclude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.taxClassInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this method to get information about a tax class and its rates. It allows you to calculate the tax percentage for a specific customer\'s address. This information contains relatively static data that rarely changes, so API2Cart may cache certain data to reduce the load on the store and speed up request execution. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, use the cart.validate method.
     * tax.class.info
     * @param taxClassId Retrieves taxes specified by class id
     * @param [storeId] Store Id
     * @param [langId] Language id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public taxClassInfo(taxClassId: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Observable<ModelResponseTaxClassInfo> {
        return this.taxClassInfoWithHttpInfo(taxClassId, storeId, langId, responseFields, params, exclude, _options).pipe(map((apiResponse: HttpInfo<ModelResponseTaxClassInfo>) => apiResponse.data));
    }

    /**
     * Get list of tax classes from your store.
     * tax.class.list
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Tax class search that is specified by field
     * @param [createdTo] Retrieve entities to their creation date
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public taxClassListWithHttpInfo(count?: number, pageCursor?: string, storeId?: string, findValue?: string, findWhere?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, responseFields?: string, _options?: Configuration): Observable<HttpInfo<ModelResponseTaxClassList>> {
        const requestContextPromise = this.requestFactory.taxClassList(count, pageCursor, storeId, findValue, findWhere, createdTo, createdFrom, modifiedTo, modifiedFrom, responseFields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.taxClassListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of tax classes from your store.
     * tax.class.list
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [pageCursor] Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * @param [storeId] Store Id
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Tax class search that is specified by field
     * @param [createdTo] Retrieve entities to their creation date
     * @param [createdFrom] Retrieve entities from their creation date
     * @param [modifiedTo] Retrieve entities to their modification date
     * @param [modifiedFrom] Retrieve entities from their modification date
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public taxClassList(count?: number, pageCursor?: string, storeId?: string, findValue?: string, findWhere?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, responseFields?: string, _options?: Configuration): Observable<ModelResponseTaxClassList> {
        return this.taxClassListWithHttpInfo(count, pageCursor, storeId, findValue, findWhere, createdTo, createdFrom, modifiedTo, modifiedFrom, responseFields, _options).pipe(map((apiResponse: HttpInfo<ModelResponseTaxClassList>) => apiResponse.data));
    }

}

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
export class ObservableWebhookApi {
    private requestFactory: WebhookApiRequestFactory;
    private responseProcessor: WebhookApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookApiRequestFactory,
        responseProcessor?: WebhookApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookApiResponseProcessor();
    }

    /**
     * Count registered webhooks on the store.
     * webhook.count
     * @param [entity] The entity you want to filter webhooks by (e.g. order or product)
     * @param [action] The action you want to filter webhooks by (e.g. order or product)
     * @param [active] The webhook status you want to filter webhooks by
     */
    public webhookCountWithHttpInfo(entity?: string, action?: string, active?: boolean, _options?: Configuration): Observable<HttpInfo<WebhookCount200Response>> {
        const requestContextPromise = this.requestFactory.webhookCount(entity, action, active, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.webhookCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Count registered webhooks on the store.
     * webhook.count
     * @param [entity] The entity you want to filter webhooks by (e.g. order or product)
     * @param [action] The action you want to filter webhooks by (e.g. order or product)
     * @param [active] The webhook status you want to filter webhooks by
     */
    public webhookCount(entity?: string, action?: string, active?: boolean, _options?: Configuration): Observable<WebhookCount200Response> {
        return this.webhookCountWithHttpInfo(entity, action, active, _options).pipe(map((apiResponse: HttpInfo<WebhookCount200Response>) => apiResponse.data));
    }

    /**
     * Create webhook on the store and subscribe to it.
     * webhook.create
     * @param entity Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
     * @param action Specify what action (event) will trigger the webhook (e.g add, delete, or update)
     * @param [callback] Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [label] The name you give to the webhook
     * @param [fields] Fields the webhook should send
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [active] Webhook status
     * @param [langId] Language id
     * @param [storeId] Defines store id where the webhook should be assigned
     */
    public webhookCreateWithHttpInfo(entity: string, action: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, storeId?: string, _options?: Configuration): Observable<HttpInfo<BasketLiveShippingServiceCreate200Response>> {
        const requestContextPromise = this.requestFactory.webhookCreate(entity, action, callback, label, fields, responseFields, active, langId, storeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.webhookCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create webhook on the store and subscribe to it.
     * webhook.create
     * @param entity Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
     * @param action Specify what action (event) will trigger the webhook (e.g add, delete, or update)
     * @param [callback] Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [label] The name you give to the webhook
     * @param [fields] Fields the webhook should send
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [active] Webhook status
     * @param [langId] Language id
     * @param [storeId] Defines store id where the webhook should be assigned
     */
    public webhookCreate(entity: string, action: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, storeId?: string, _options?: Configuration): Observable<BasketLiveShippingServiceCreate200Response> {
        return this.webhookCreateWithHttpInfo(entity, action, callback, label, fields, responseFields, active, langId, storeId, _options).pipe(map((apiResponse: HttpInfo<BasketLiveShippingServiceCreate200Response>) => apiResponse.data));
    }

    /**
     * Delete registered webhook on the store.
     * webhook.delete
     * @param id Webhook id
     */
    public webhookDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<AttributeDelete200Response>> {
        const requestContextPromise = this.requestFactory.webhookDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.webhookDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete registered webhook on the store.
     * webhook.delete
     * @param id Webhook id
     */
    public webhookDelete(id: string, _options?: Configuration): Observable<AttributeDelete200Response> {
        return this.webhookDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<AttributeDelete200Response>) => apiResponse.data));
    }

    /**
     * List all Webhooks that are available on this store.
     * webhook.events
     */
    public webhookEventsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<WebhookEvents200Response>> {
        const requestContextPromise = this.requestFactory.webhookEvents(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.webhookEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all Webhooks that are available on this store.
     * webhook.events
     */
    public webhookEvents(_options?: Configuration): Observable<WebhookEvents200Response> {
        return this.webhookEventsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<WebhookEvents200Response>) => apiResponse.data));
    }

    /**
     * List registered webhook on the store.
     * webhook.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [entity] The entity you want to filter webhooks by (e.g. order or product)
     * @param [action] The action you want to filter webhooks by (e.g. add, update, or delete)
     * @param [active] The webhook status you want to filter webhooks by
     * @param [ids] List of сomma-separated webhook ids
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public webhookListWithHttpInfo(start?: number, count?: number, entity?: string, action?: string, active?: boolean, ids?: string, params?: string, _options?: Configuration): Observable<HttpInfo<WebhookList200Response>> {
        const requestContextPromise = this.requestFactory.webhookList(start, count, entity, action, active, ids, params, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.webhookListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List registered webhook on the store.
     * webhook.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [entity] The entity you want to filter webhooks by (e.g. order or product)
     * @param [action] The action you want to filter webhooks by (e.g. add, update, or delete)
     * @param [active] The webhook status you want to filter webhooks by
     * @param [ids] List of сomma-separated webhook ids
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public webhookList(start?: number, count?: number, entity?: string, action?: string, active?: boolean, ids?: string, params?: string, _options?: Configuration): Observable<WebhookList200Response> {
        return this.webhookListWithHttpInfo(start, count, entity, action, active, ids, params, _options).pipe(map((apiResponse: HttpInfo<WebhookList200Response>) => apiResponse.data));
    }

    /**
     * Update Webhooks parameters.
     * webhook.update
     * @param id Webhook id
     * @param [callback] Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [label] The name you give to the webhook
     * @param [fields] Fields the webhook should send
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [active] Webhook status
     * @param [langId] Language id
     */
    public webhookUpdateWithHttpInfo(id: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, _options?: Configuration): Observable<HttpInfo<ProductImageUpdate200Response>> {
        const requestContextPromise = this.requestFactory.webhookUpdate(id, callback, label, fields, responseFields, active, langId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.webhookUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Webhooks parameters.
     * webhook.update
     * @param id Webhook id
     * @param [callback] Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [label] The name you give to the webhook
     * @param [fields] Fields the webhook should send
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [active] Webhook status
     * @param [langId] Language id
     */
    public webhookUpdate(id: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, _options?: Configuration): Observable<ProductImageUpdate200Response> {
        return this.webhookUpdateWithHttpInfo(id, callback, label, fields, responseFields, active, langId, _options).pipe(map((apiResponse: HttpInfo<ProductImageUpdate200Response>) => apiResponse.data));
    }

}
