import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiAccountCartAddRequest {
    /**
     * 
     * @type AccountCartAdd
     * @memberof AccountApiaccountCartAdd
     */
    accountCartAdd: AccountCartAdd
}

export interface AccountApiAccountCartListRequest {
    /**
     * A web address of a store
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountCartList
     */
    storeUrl?: string
    /**
     * Find store by store key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountCartList
     */
    storeKey?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountCartList
     */
    requestFromDate?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountCartList
     */
    requestToDate?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof AccountApiaccountCartList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountCartList
     */
    exclude?: string
}

export interface AccountApiAccountConfigUpdateRequest {
    /**
     * Identifies if there is a necessity to replace parameters
     * Defaults to: undefined
     * @type boolean
     * @memberof AccountApiaccountConfigUpdate
     */
    replaceParameters?: boolean
    /**
     * The web address of the store you want to update to connect to API2Cart
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    newStoreUrl?: string
    /**
     * Update store key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    newStoreKey?: string
    /**
     * This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bridgeUrl?: string
    /**
     * Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter)
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    storeRoot?: string
    /**
     * DB tables prefix
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    dbTablesPrefix?: string
    /**
     * This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store\&#39;s firewall may block specific values.
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    userAgent?: string
    /**
     * 3DCart Private Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    _3dcartPrivateKey?: string
    /**
     * 3DCart Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    _3dcartAccessToken?: string
    /**
     * 3DCart API Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    _3dcartapiApiKey?: string
    /**
     * Amazon SP API app client id
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    amazonSpClientId?: string
    /**
     * Amazon SP API app client secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    amazonSpClientSecret?: string
    /**
     * Amazon SP API OAuth refresh token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    amazonSpRefreshToken?: string
    /**
     * Amazon AWS Region
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    amazonSpAwsRegion?: string
    /**
     * Amazon SP API environment
     * Defaults to: &#39;production&#39;
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    amazonSpApiEnvironment?: string
    /**
     * Amazon Seller ID (Merchant token)
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    amazonSellerId?: string
    /**
     * It\&#39;s a AspDotNetStorefront account for which API is available
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    aspdotnetstorefrontApiUser?: string
    /**
     * AspDotNetStorefront API Password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    aspdotnetstorefrontApiPass?: string
    /**
     * It\&#39;s a BigCommerce account for which API is enabled
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcommerceapiAdminAccount?: string
    /**
     * BigCommerce API URL
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcommerceapiApiPath?: string
    /**
     * Bigcommerce API Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcommerceapiApiKey?: string
    /**
     * Client ID of the requesting app
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcommerceapiClientId?: string
    /**
     * Access token authorizing the app to access resources on behalf of a user
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcommerceapiAccessToken?: string
    /**
     * API Path section unique to the store
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcommerceapiContext?: string
    /**
     * Bol API Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bolApiKey?: string
    /**
     * Bol API Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bolApiSecret?: string
    /**
     * Bol Retailer ID
     * Defaults to: undefined
     * @type number
     * @memberof AccountApiaccountConfigUpdate
     */
    bolRetailerId?: number
    /**
     * Demandware client id
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    demandwareClientId?: string
    /**
     * Demandware api password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    demandwareApiPassword?: string
    /**
     * Demandware user name
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    demandwareUserName?: string
    /**
     * Demandware user password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    demandwareUserPassword?: string
    /**
     * Application ID (AppID).
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ebayClientId?: string
    /**
     * Shared Secret from eBay application
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ebayClientSecret?: string
    /**
     * The RuName value that eBay assigns to your application.
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ebayRuname?: string
    /**
     * Used to authenticate API requests.
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ebayAccessToken?: string
    /**
     * Used to renew the access token.
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ebayRefreshToken?: string
    /**
     * eBay environment
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ebayEnvironment?: string
    /**
     * eBay global ID
     * Defaults to: 0
     * @type number
     * @memberof AccountApiaccountConfigUpdate
     */
    ebaySiteId?: number
    /**
     * Access token authorizing the app to access resources on behalf of a user
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ecwidAcessToken?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ecwidStoreId?: string
    /**
     * Lazada App ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    lazadaAppId?: string
    /**
     * Lazada App Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    lazadaAppSecret?: string
    /**
     * Lazada Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    lazadaRefreshToken?: string
    /**
     * Lazada API endpoint Region
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    lazadaRegion?: string
    /**
     * Etsy keystring
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    etsyKeystring?: string
    /**
     * Etsy shared secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    etsySharedSecret?: string
    /**
     * Access token authorizing the app to access resources on behalf of a user
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    etsyAccessToken?: string
    /**
     * Secret token authorizing the app to access resources on behalf of a user
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    etsyTokenSecret?: string
    /**
     * Etsy Client Id
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    etsyClientId?: string
    /**
     * Etsy Refresh token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    etsyRefreshToken?: string
    /**
     * Facebook App ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    facebookAppId?: string
    /**
     * Facebook App Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    facebookAppSecret?: string
    /**
     * Facebook Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    facebookAccessToken?: string
    /**
     * Facebook Business ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    facebookBusinessId?: string
    /**
     * Neto API Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    netoApiKey?: string
    /**
     * Neto User Name
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    netoApiUsername?: string
    /**
     * Shopline APP Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shoplineAccessToken?: string
    /**
     * Shopline APP Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shoplineAppKey?: string
    /**
     * Shopline App Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shoplineAppSecret?: string
    /**
     * Shopline Shared Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shoplineSharedSecret?: string
    /**
     * Access token authorizing the app to access resources on behalf of a user
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopifyAccessToken?: string
    /**
     * Shopify API Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopifyApiKey?: string
    /**
     * Shopify API Password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopifyApiPassword?: string
    /**
     * Shared secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopifySharedSecret?: string
    /**
     * Shopee Partner ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopeePartnerId?: string
    /**
     * Shopee Partner Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopeePartnerKey?: string
    /**
     * Shopee SHOP ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopeeShopId?: string
    /**
     * Shopee Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopeeRefreshToken?: string
    /**
     * Shopee API endpoint Region. Use for Chinese Mainland or Brazil.
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopeeRegion?: string
    /**
     * Shopee Environment
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopeeEnvironment?: string
    /**
     * Access token authorizing the app to access resources on behalf of a user
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shoplazzaAccessToken?: string
    /**
     * Shared secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shoplazzaSharedSecret?: string
    /**
     * Miva access token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    mivaAccessToken?: string
    /**
     * Miva signature
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    mivaSignature?: string
    /**
     * Shopware access key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopwareAccessKey?: string
    /**
     * UNAS API Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    unasApiKey?: string
    /**
     * Shopware api key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopwareApiKey?: string
    /**
     * Shopware client secret access key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    shopwareApiSecret?: string
    /**
     * Subdomain of store
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcartelUserName?: string
    /**
     * BigCartel account password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bigcartelPassword?: string
    /**
     * Bricklink Consumer Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bricklinkConsumerKey?: string
    /**
     * Bricklink Consumer Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bricklinkConsumerSecret?: string
    /**
     * Bricklink Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bricklinkToken?: string
    /**
     * Bricklink Access Token Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    bricklinkTokenSecret?: string
    /**
     * It\&#39;s a Volusion account for which API is enabled
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    volusionLogin?: string
    /**
     * Volusion API Password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    volusionPassword?: string
    /**
     * Walmart client ID. For the region \&#39;ca\&#39; use Consumer ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    walmartClientId?: string
    /**
     * Walmart client secret. For the region \&#39;ca\&#39; use Private Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    walmartClientSecret?: string
    /**
     * Walmart environment
     * Defaults to: &#39;production&#39;
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    walmartEnvironment?: string
    /**
     * Walmart WM_CONSUMER.CHANNEL.TYPE header
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    walmartChannelType?: string
    /**
     * Walmart region
     * Defaults to: &#39;us&#39;
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    walmartRegion?: string
    /**
     * Square (Weebly) Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squareClientId?: string
    /**
     * Square (Weebly) Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squareClientSecret?: string
    /**
     * Square (Weebly) Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squareRefreshToken?: string
    /**
     * Squarespace API Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squarespaceApiKey?: string
    /**
     * Squarespace Connector Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squarespaceClientId?: string
    /**
     * Squarespace Connector Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squarespaceClientSecret?: string
    /**
     * Squarespace access token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squarespaceAccessToken?: string
    /**
     * Squarespace refresh token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    squarespaceRefreshToken?: string
    /**
     * Omni Commerce Connector Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    hybrisClientId?: string
    /**
     * Omni Commerce Connector Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    hybrisClientSecret?: string
    /**
     * User Name
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    hybrisUsername?: string
    /**
     * User password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    hybrisPassword?: string
    /**
     * Websites to stores mapping data
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AccountApiaccountConfigUpdate
     */
    hybrisWebsites?: Array<string>
    /**
     * LightSpeed api key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    lightspeedApiKey?: string
    /**
     * LightSpeed api secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    lightspeedApiSecret?: string
    /**
     * CommerceHQ api key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    commercehqApiKey?: string
    /**
     * CommerceHQ api password
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    commercehqApiPassword?: string
    /**
     * Woocommerce consumer key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    wcConsumerKey?: string
    /**
     * Woocommerce consumer secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    wcConsumerSecret?: string
    /**
     * Magento Consumer Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    magentoConsumerKey?: string
    /**
     * Magento Consumer Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    magentoConsumerSecret?: string
    /**
     * Magento Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    magentoAccessToken?: string
    /**
     * Magento Token Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    magentoTokenSecret?: string
    /**
     * Prestashop webservice key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    prestashopWebserviceKey?: string
    /**
     * Wix App ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    wixAppId?: string
    /**
     * Wix App Secret Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    wixAppSecretKey?: string
    /**
     * Wix Instance ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    wixInstanceId?: string
    /**
     * Wix refresh token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    wixRefreshToken?: string
    /**
     * Mercado Libre App ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    mercadoLibreAppId?: string
    /**
     * Mercado Libre App Secret Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    mercadoLibreAppSecretKey?: string
    /**
     * Mercado Libre Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    mercadoLibreRefreshToken?: string
    /**
     * Zid Client ID
     * Defaults to: undefined
     * @type number
     * @memberof AccountApiaccountConfigUpdate
     */
    zidClientId?: number
    /**
     * Zid Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zidClientSecret?: string
    /**
     * Zid Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zidAccessToken?: string
    /**
     * Zid Authorization
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zidAuthorization?: string
    /**
     * Zid refresh token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zidRefreshToken?: string
    /**
     * Flipkart Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    flipkartClientId?: string
    /**
     * Flipkart Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    flipkartClientSecret?: string
    /**
     * Allegro Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    allegroClientId?: string
    /**
     * Allegro Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    allegroClientSecret?: string
    /**
     * Allegro Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    allegroAccessToken?: string
    /**
     * Allegro Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    allegroRefreshToken?: string
    /**
     * Allegro Environment
     * Defaults to: &#39;production&#39;
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    allegroEnvironment?: string
    /**
     * Zoho Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zohoClientId?: string
    /**
     * Zoho Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zohoClientSecret?: string
    /**
     * Zoho Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zohoRefreshToken?: string
    /**
     * Zoho API endpoint Region
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    zohoRegion?: string
    /**
     * Tiendanube User ID
     * Defaults to: undefined
     * @type number
     * @memberof AccountApiaccountConfigUpdate
     */
    tiendanubeUserId?: number
    /**
     * Tiendanube Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    tiendanubeAccessToken?: string
    /**
     * Tiendanube Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    tiendanubeClientSecret?: string
    /**
     * Otto Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ottoClientId?: string
    /**
     * Otto Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ottoClientSecret?: string
    /**
     * Otto App ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ottoAppId?: string
    /**
     * Otto Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ottoRefreshToken?: string
    /**
     * Otto Environment
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ottoEnvironment?: string
    /**
     * Otto Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    ottoAccessToken?: string
    /**
     * TikTok Shop App Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    tiktokshopAppKey?: string
    /**
     * TikTok Shop App Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    tiktokshopAppSecret?: string
    /**
     * TikTok Shop Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    tiktokshopRefreshToken?: string
    /**
     * TikTok Shop Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    tiktokshopAccessToken?: string
    /**
     * Salla Client ID
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    sallaClientId?: string
    /**
     * Salla Client Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    sallaClientSecret?: string
    /**
     * Salla Refresh Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    sallaRefreshToken?: string
    /**
     * Salla Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    sallaAccessToken?: string
    /**
     * Temu App Key
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    temuAppKey?: string
    /**
     * Temu App Secret
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    temuAppSecret?: string
    /**
     * Temu Access Token
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    temuAccessToken?: string
    /**
     * Temu API endpoint Region.
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountConfigUpdate
     */
    temuRegion?: string
}

export interface AccountApiAccountFailedWebhooksRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof AccountApiaccountFailedWebhooks
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof AccountApiaccountFailedWebhooks
     */
    count?: number
    /**
     * List of сomma-separated webhook ids
     * Defaults to: undefined
     * @type string
     * @memberof AccountApiaccountFailedWebhooks
     */
    ids?: string
}

export interface AccountApiAccountSupportedPlatformsRequest {
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.
     * account.cart.add
     * @param param the request object
     */
    public accountCartAddWithHttpInfo(param: AccountApiAccountCartAddRequest, options?: Configuration): Promise<HttpInfo<AccountCartAdd200Response>> {
        return this.api.accountCartAddWithHttpInfo(param.accountCartAdd,  options).toPromise();
    }

    /**
     * Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.
     * account.cart.add
     * @param param the request object
     */
    public accountCartAdd(param: AccountApiAccountCartAddRequest, options?: Configuration): Promise<AccountCartAdd200Response> {
        return this.api.accountCartAdd(param.accountCartAdd,  options).toPromise();
    }

    /**
     * This method lets you get a list of online stores connected to your API2Cart account. You can get the number of API requests to each store if you specify a period using parameters (request_from_date, request_to_date). The total_calls field is displayed only if there are parameters (request_from_date, request_to_date).
     * account.cart.list
     * @param param the request object
     */
    public accountCartListWithHttpInfo(param: AccountApiAccountCartListRequest = {}, options?: Configuration): Promise<HttpInfo<AccountCartList200Response>> {
        return this.api.accountCartListWithHttpInfo(param.storeUrl, param.storeKey, param.requestFromDate, param.requestToDate, param.params, param.exclude,  options).toPromise();
    }

    /**
     * This method lets you get a list of online stores connected to your API2Cart account. You can get the number of API requests to each store if you specify a period using parameters (request_from_date, request_to_date). The total_calls field is displayed only if there are parameters (request_from_date, request_to_date).
     * account.cart.list
     * @param param the request object
     */
    public accountCartList(param: AccountApiAccountCartListRequest = {}, options?: Configuration): Promise<AccountCartList200Response> {
        return this.api.accountCartList(param.storeUrl, param.storeKey, param.requestFromDate, param.requestToDate, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Use this method to automate the change of credentials used to connect online stores. The list of supported parameters differs depending on the platform.
     * account.config.update
     * @param param the request object
     */
    public accountConfigUpdateWithHttpInfo(param: AccountApiAccountConfigUpdateRequest = {}, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.accountConfigUpdateWithHttpInfo(param.replaceParameters, param.newStoreUrl, param.newStoreKey, param.bridgeUrl, param.storeRoot, param.dbTablesPrefix, param.userAgent, param._3dcartPrivateKey, param._3dcartAccessToken, param._3dcartapiApiKey, param.amazonSpClientId, param.amazonSpClientSecret, param.amazonSpRefreshToken, param.amazonSpAwsRegion, param.amazonSpApiEnvironment, param.amazonSellerId, param.aspdotnetstorefrontApiUser, param.aspdotnetstorefrontApiPass, param.bigcommerceapiAdminAccount, param.bigcommerceapiApiPath, param.bigcommerceapiApiKey, param.bigcommerceapiClientId, param.bigcommerceapiAccessToken, param.bigcommerceapiContext, param.bolApiKey, param.bolApiSecret, param.bolRetailerId, param.demandwareClientId, param.demandwareApiPassword, param.demandwareUserName, param.demandwareUserPassword, param.ebayClientId, param.ebayClientSecret, param.ebayRuname, param.ebayAccessToken, param.ebayRefreshToken, param.ebayEnvironment, param.ebaySiteId, param.ecwidAcessToken, param.ecwidStoreId, param.lazadaAppId, param.lazadaAppSecret, param.lazadaRefreshToken, param.lazadaRegion, param.etsyKeystring, param.etsySharedSecret, param.etsyAccessToken, param.etsyTokenSecret, param.etsyClientId, param.etsyRefreshToken, param.facebookAppId, param.facebookAppSecret, param.facebookAccessToken, param.facebookBusinessId, param.netoApiKey, param.netoApiUsername, param.shoplineAccessToken, param.shoplineAppKey, param.shoplineAppSecret, param.shoplineSharedSecret, param.shopifyAccessToken, param.shopifyApiKey, param.shopifyApiPassword, param.shopifySharedSecret, param.shopeePartnerId, param.shopeePartnerKey, param.shopeeShopId, param.shopeeRefreshToken, param.shopeeRegion, param.shopeeEnvironment, param.shoplazzaAccessToken, param.shoplazzaSharedSecret, param.mivaAccessToken, param.mivaSignature, param.shopwareAccessKey, param.unasApiKey, param.shopwareApiKey, param.shopwareApiSecret, param.bigcartelUserName, param.bigcartelPassword, param.bricklinkConsumerKey, param.bricklinkConsumerSecret, param.bricklinkToken, param.bricklinkTokenSecret, param.volusionLogin, param.volusionPassword, param.walmartClientId, param.walmartClientSecret, param.walmartEnvironment, param.walmartChannelType, param.walmartRegion, param.squareClientId, param.squareClientSecret, param.squareRefreshToken, param.squarespaceApiKey, param.squarespaceClientId, param.squarespaceClientSecret, param.squarespaceAccessToken, param.squarespaceRefreshToken, param.hybrisClientId, param.hybrisClientSecret, param.hybrisUsername, param.hybrisPassword, param.hybrisWebsites, param.lightspeedApiKey, param.lightspeedApiSecret, param.commercehqApiKey, param.commercehqApiPassword, param.wcConsumerKey, param.wcConsumerSecret, param.magentoConsumerKey, param.magentoConsumerSecret, param.magentoAccessToken, param.magentoTokenSecret, param.prestashopWebserviceKey, param.wixAppId, param.wixAppSecretKey, param.wixInstanceId, param.wixRefreshToken, param.mercadoLibreAppId, param.mercadoLibreAppSecretKey, param.mercadoLibreRefreshToken, param.zidClientId, param.zidClientSecret, param.zidAccessToken, param.zidAuthorization, param.zidRefreshToken, param.flipkartClientId, param.flipkartClientSecret, param.allegroClientId, param.allegroClientSecret, param.allegroAccessToken, param.allegroRefreshToken, param.allegroEnvironment, param.zohoClientId, param.zohoClientSecret, param.zohoRefreshToken, param.zohoRegion, param.tiendanubeUserId, param.tiendanubeAccessToken, param.tiendanubeClientSecret, param.ottoClientId, param.ottoClientSecret, param.ottoAppId, param.ottoRefreshToken, param.ottoEnvironment, param.ottoAccessToken, param.tiktokshopAppKey, param.tiktokshopAppSecret, param.tiktokshopRefreshToken, param.tiktokshopAccessToken, param.sallaClientId, param.sallaClientSecret, param.sallaRefreshToken, param.sallaAccessToken, param.temuAppKey, param.temuAppSecret, param.temuAccessToken, param.temuRegion,  options).toPromise();
    }

    /**
     * Use this method to automate the change of credentials used to connect online stores. The list of supported parameters differs depending on the platform.
     * account.config.update
     * @param param the request object
     */
    public accountConfigUpdate(param: AccountApiAccountConfigUpdateRequest = {}, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.accountConfigUpdate(param.replaceParameters, param.newStoreUrl, param.newStoreKey, param.bridgeUrl, param.storeRoot, param.dbTablesPrefix, param.userAgent, param._3dcartPrivateKey, param._3dcartAccessToken, param._3dcartapiApiKey, param.amazonSpClientId, param.amazonSpClientSecret, param.amazonSpRefreshToken, param.amazonSpAwsRegion, param.amazonSpApiEnvironment, param.amazonSellerId, param.aspdotnetstorefrontApiUser, param.aspdotnetstorefrontApiPass, param.bigcommerceapiAdminAccount, param.bigcommerceapiApiPath, param.bigcommerceapiApiKey, param.bigcommerceapiClientId, param.bigcommerceapiAccessToken, param.bigcommerceapiContext, param.bolApiKey, param.bolApiSecret, param.bolRetailerId, param.demandwareClientId, param.demandwareApiPassword, param.demandwareUserName, param.demandwareUserPassword, param.ebayClientId, param.ebayClientSecret, param.ebayRuname, param.ebayAccessToken, param.ebayRefreshToken, param.ebayEnvironment, param.ebaySiteId, param.ecwidAcessToken, param.ecwidStoreId, param.lazadaAppId, param.lazadaAppSecret, param.lazadaRefreshToken, param.lazadaRegion, param.etsyKeystring, param.etsySharedSecret, param.etsyAccessToken, param.etsyTokenSecret, param.etsyClientId, param.etsyRefreshToken, param.facebookAppId, param.facebookAppSecret, param.facebookAccessToken, param.facebookBusinessId, param.netoApiKey, param.netoApiUsername, param.shoplineAccessToken, param.shoplineAppKey, param.shoplineAppSecret, param.shoplineSharedSecret, param.shopifyAccessToken, param.shopifyApiKey, param.shopifyApiPassword, param.shopifySharedSecret, param.shopeePartnerId, param.shopeePartnerKey, param.shopeeShopId, param.shopeeRefreshToken, param.shopeeRegion, param.shopeeEnvironment, param.shoplazzaAccessToken, param.shoplazzaSharedSecret, param.mivaAccessToken, param.mivaSignature, param.shopwareAccessKey, param.unasApiKey, param.shopwareApiKey, param.shopwareApiSecret, param.bigcartelUserName, param.bigcartelPassword, param.bricklinkConsumerKey, param.bricklinkConsumerSecret, param.bricklinkToken, param.bricklinkTokenSecret, param.volusionLogin, param.volusionPassword, param.walmartClientId, param.walmartClientSecret, param.walmartEnvironment, param.walmartChannelType, param.walmartRegion, param.squareClientId, param.squareClientSecret, param.squareRefreshToken, param.squarespaceApiKey, param.squarespaceClientId, param.squarespaceClientSecret, param.squarespaceAccessToken, param.squarespaceRefreshToken, param.hybrisClientId, param.hybrisClientSecret, param.hybrisUsername, param.hybrisPassword, param.hybrisWebsites, param.lightspeedApiKey, param.lightspeedApiSecret, param.commercehqApiKey, param.commercehqApiPassword, param.wcConsumerKey, param.wcConsumerSecret, param.magentoConsumerKey, param.magentoConsumerSecret, param.magentoAccessToken, param.magentoTokenSecret, param.prestashopWebserviceKey, param.wixAppId, param.wixAppSecretKey, param.wixInstanceId, param.wixRefreshToken, param.mercadoLibreAppId, param.mercadoLibreAppSecretKey, param.mercadoLibreRefreshToken, param.zidClientId, param.zidClientSecret, param.zidAccessToken, param.zidAuthorization, param.zidRefreshToken, param.flipkartClientId, param.flipkartClientSecret, param.allegroClientId, param.allegroClientSecret, param.allegroAccessToken, param.allegroRefreshToken, param.allegroEnvironment, param.zohoClientId, param.zohoClientSecret, param.zohoRefreshToken, param.zohoRegion, param.tiendanubeUserId, param.tiendanubeAccessToken, param.tiendanubeClientSecret, param.ottoClientId, param.ottoClientSecret, param.ottoAppId, param.ottoRefreshToken, param.ottoEnvironment, param.ottoAccessToken, param.tiktokshopAppKey, param.tiktokshopAppSecret, param.tiktokshopRefreshToken, param.tiktokshopAccessToken, param.sallaClientId, param.sallaClientSecret, param.sallaRefreshToken, param.sallaAccessToken, param.temuAppKey, param.temuAppSecret, param.temuAccessToken, param.temuRegion,  options).toPromise();
    }

    /**
     * If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.
     * account.failed_webhooks
     * @param param the request object
     */
    public accountFailedWebhooksWithHttpInfo(param: AccountApiAccountFailedWebhooksRequest = {}, options?: Configuration): Promise<HttpInfo<AccountFailedWebhooks200Response>> {
        return this.api.accountFailedWebhooksWithHttpInfo(param.start, param.count, param.ids,  options).toPromise();
    }

    /**
     * If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.
     * account.failed_webhooks
     * @param param the request object
     */
    public accountFailedWebhooks(param: AccountApiAccountFailedWebhooksRequest = {}, options?: Configuration): Promise<AccountFailedWebhooks200Response> {
        return this.api.accountFailedWebhooks(param.start, param.count, param.ids,  options).toPromise();
    }

    /**
     * Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.
     * account.supported_platforms
     * @param param the request object
     */
    public accountSupportedPlatformsWithHttpInfo(param: AccountApiAccountSupportedPlatformsRequest = {}, options?: Configuration): Promise<HttpInfo<AccountSupportedPlatforms200Response>> {
        return this.api.accountSupportedPlatformsWithHttpInfo( options).toPromise();
    }

    /**
     * Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.
     * account.supported_platforms
     * @param param the request object
     */
    public accountSupportedPlatforms(param: AccountApiAccountSupportedPlatformsRequest = {}, options?: Configuration): Promise<AccountSupportedPlatforms200Response> {
        return this.api.accountSupportedPlatforms( options).toPromise();
    }

}

import { ObservableAttributeApi } from "./ObservableAPI";
import { AttributeApiRequestFactory, AttributeApiResponseProcessor} from "../apis/AttributeApi";

export interface AttributeApiAttributeAddRequest {
    /**
     * Defines attribute\&#39;s type
     * Defaults to: undefined
     * @type &#39;text&#39; | &#39;select&#39; | &#39;textarea&#39; | &#39;date&#39; | &#39;price&#39; | &#39;multiselect&#39; | &#39;boolean&#39;
     * @memberof AttributeApiattributeAdd
     */
    type: 'text' | 'select' | 'textarea' | 'date' | 'price' | 'multiselect' | 'boolean'
    /**
     * Defines attributes\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    name: string
    /**
     * Entity code
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    code?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    langId?: string
    /**
     * Set visibility status
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    visible?: boolean
    /**
     * Defines if the option is required
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    required?: boolean
    /**
     * Attribute&#x60;s position
     * Defaults to: 0
     * @type number
     * @memberof AttributeApiattributeAdd
     */
    position?: number
    /**
     * Filter by attribute_group_id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    attributeGroupId?: string
    /**
     * Attribute saving scope
     * Defaults to: &#39;Store&#39;
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    isGlobal?: string
    /**
     * Use attribute in Quick Search
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    isSearchable?: boolean
    /**
     * Use In Layered Navigation
     * Defaults to: &#39;No&#39;
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    isFilterable?: string
    /**
     * Comparable on Front-end
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    isComparable?: boolean
    /**
     * Allow HTML Tags on Frontend
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    isHtmlAllowedOnFront?: boolean
    /**
     * Use In Search Results Layered Navigation
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    isFilterableInSearch?: boolean
    /**
     * Use To Create Configurable Product
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    isConfigurable?: boolean
    /**
     * Use in Advanced Search
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    isVisibleInAdvancedSearch?: boolean
    /**
     * Use for Promo Rule Conditions
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    isUsedForPromoRules?: boolean
    /**
     * Used in Product Listing
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    usedInProductListing?: boolean
    /**
     * Used for Sorting in Product Listing
     * Defaults to: false
     * @type boolean
     * @memberof AttributeApiattributeAdd
     */
    usedForSortBy?: boolean
    /**
     * Types of products which can have this attribute
     * Defaults to: &#39;all_types&#39;
     * @type string
     * @memberof AttributeApiattributeAdd
     */
    applyTo?: string
}

export interface AttributeApiAttributeAssignGroupRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAssignGroup
     */
    id: string
    /**
     * Attribute group_id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAssignGroup
     */
    groupId: string
    /**
     * Attribute set id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAssignGroup
     */
    attributeSetId?: string
}

export interface AttributeApiAttributeAssignSetRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAssignSet
     */
    id: string
    /**
     * Attribute set id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAssignSet
     */
    attributeSetId: string
    /**
     * Attribute group_id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAssignSet
     */
    groupId?: string
}

export interface AttributeApiAttributeAttributesetListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof AttributeApiattributeAttributesetList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof AttributeApiattributeAttributesetList
     */
    count?: number
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAttributesetList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name&#39;
     * @type string
     * @memberof AttributeApiattributeAttributesetList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeAttributesetList
     */
    exclude?: string
}

export interface AttributeApiAttributeCountRequest {
    /**
     * Defines attribute\&#39;s type
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeCount
     */
    type?: string
    /**
     * Filter items by attribute set id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeCount
     */
    attributeSetId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeCount
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeCount
     */
    langId?: string
    /**
     * Filter items by visibility status
     * Defaults to: undefined
     * @type boolean
     * @memberof AttributeApiattributeCount
     */
    visible?: boolean
    /**
     * Defines if the option is required
     * Defaults to: undefined
     * @type boolean
     * @memberof AttributeApiattributeCount
     */
    required?: boolean
    /**
     * True if attribute is system
     * Defaults to: undefined
     * @type boolean
     * @memberof AttributeApiattributeCount
     */
    system?: boolean
}

export interface AttributeApiAttributeDeleteRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeDelete
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeDelete
     */
    storeId?: string
}

export interface AttributeApiAttributeGroupListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof AttributeApiattributeGroupList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof AttributeApiattributeGroupList
     */
    count?: number
    /**
     * Attribute set id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeGroupList
     */
    attributeSetId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeGroupList
     */
    langId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeGroupList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name&#39;
     * @type string
     * @memberof AttributeApiattributeGroupList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeGroupList
     */
    exclude?: string
}

export interface AttributeApiAttributeInfoRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeInfo
     */
    id: string
    /**
     * Attribute set id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeInfo
     */
    attributeSetId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeInfo
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeInfo
     */
    langId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof AttributeApiattributeInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeInfo
     */
    exclude?: string
}

export interface AttributeApiAttributeListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof AttributeApiattributeList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof AttributeApiattributeList
     */
    count?: number
    /**
     * Filter attributes by ids
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeList
     */
    attributeIds?: string
    /**
     * Filter items by attribute set id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeList
     */
    attributeSetId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeList
     */
    storeId?: string
    /**
     * Retrieves attributes on specified language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeList
     */
    langId?: string
    /**
     * Defines attribute\&#39;s type
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeList
     */
    type?: string
    /**
     * Filter items by visibility status
     * Defaults to: undefined
     * @type boolean
     * @memberof AttributeApiattributeList
     */
    visible?: boolean
    /**
     * Defines if the option is required
     * Defaults to: undefined
     * @type boolean
     * @memberof AttributeApiattributeList
     */
    required?: boolean
    /**
     * True if attribute is system
     * Defaults to: undefined
     * @type boolean
     * @memberof AttributeApiattributeList
     */
    system?: boolean
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,code,type&#39;
     * @type string
     * @memberof AttributeApiattributeList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeList
     */
    exclude?: string
}

export interface AttributeApiAttributeTypeListRequest {
}

export interface AttributeApiAttributeUnassignGroupRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUnassignGroup
     */
    id: string
    /**
     * Customer group_id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUnassignGroup
     */
    groupId: string
}

export interface AttributeApiAttributeUnassignSetRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUnassignSet
     */
    id: string
    /**
     * Attribute set id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUnassignSet
     */
    attributeSetId: string
}

export interface AttributeApiAttributeUpdateRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUpdate
     */
    id: string
    /**
     * Defines new attributes\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUpdate
     */
    name: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUpdate
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeUpdate
     */
    langId?: string
}

export interface AttributeApiAttributeValueAddRequest {
    /**
     * Attribute Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueAdd
     */
    attributeId: string
    /**
     * Defines attribute value\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueAdd
     */
    name: string
    /**
     * Entity code
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueAdd
     */
    code?: string
    /**
     * Defines attribute value\&#39;s description
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueAdd
     */
    description?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueAdd
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueAdd
     */
    langId?: string
}

export interface AttributeApiAttributeValueDeleteRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueDelete
     */
    id: string
    /**
     * Attribute Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueDelete
     */
    attributeId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueDelete
     */
    storeId?: string
}

export interface AttributeApiAttributeValueUpdateRequest {
    /**
     * Defines attribute value\&#39;s id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueUpdate
     */
    id: string
    /**
     * Attribute Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueUpdate
     */
    attributeId: string
    /**
     * Defines attribute value\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueUpdate
     */
    name?: string
    /**
     * Defines new attribute value\&#39;s description
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueUpdate
     */
    description?: string
    /**
     * Entity code
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueUpdate
     */
    code?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueUpdate
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof AttributeApiattributeValueUpdate
     */
    langId?: string
}

export class ObjectAttributeApi {
    private api: ObservableAttributeApi

    public constructor(configuration: Configuration, requestFactory?: AttributeApiRequestFactory, responseProcessor?: AttributeApiResponseProcessor) {
        this.api = new ObservableAttributeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add new attribute
     * attribute.add
     * @param param the request object
     */
    public attributeAddWithHttpInfo(param: AttributeApiAttributeAddRequest, options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        return this.api.attributeAddWithHttpInfo(param.type, param.name, param.code, param.storeId, param.langId, param.visible, param.required, param.position, param.attributeGroupId, param.isGlobal, param.isSearchable, param.isFilterable, param.isComparable, param.isHtmlAllowedOnFront, param.isFilterableInSearch, param.isConfigurable, param.isVisibleInAdvancedSearch, param.isUsedForPromoRules, param.usedInProductListing, param.usedForSortBy, param.applyTo,  options).toPromise();
    }

    /**
     * Add new attribute
     * attribute.add
     * @param param the request object
     */
    public attributeAdd(param: AttributeApiAttributeAddRequest, options?: Configuration): Promise<AttributeAdd200Response> {
        return this.api.attributeAdd(param.type, param.name, param.code, param.storeId, param.langId, param.visible, param.required, param.position, param.attributeGroupId, param.isGlobal, param.isSearchable, param.isFilterable, param.isComparable, param.isHtmlAllowedOnFront, param.isFilterableInSearch, param.isConfigurable, param.isVisibleInAdvancedSearch, param.isUsedForPromoRules, param.usedInProductListing, param.usedForSortBy, param.applyTo,  options).toPromise();
    }

    /**
     * Assign attribute to the group
     * attribute.assign.group
     * @param param the request object
     */
    public attributeAssignGroupWithHttpInfo(param: AttributeApiAttributeAssignGroupRequest, options?: Configuration): Promise<HttpInfo<AttributeAssignGroup200Response>> {
        return this.api.attributeAssignGroupWithHttpInfo(param.id, param.groupId, param.attributeSetId,  options).toPromise();
    }

    /**
     * Assign attribute to the group
     * attribute.assign.group
     * @param param the request object
     */
    public attributeAssignGroup(param: AttributeApiAttributeAssignGroupRequest, options?: Configuration): Promise<AttributeAssignGroup200Response> {
        return this.api.attributeAssignGroup(param.id, param.groupId, param.attributeSetId,  options).toPromise();
    }

    /**
     * Assign attribute to the attribute set
     * attribute.assign.set
     * @param param the request object
     */
    public attributeAssignSetWithHttpInfo(param: AttributeApiAttributeAssignSetRequest, options?: Configuration): Promise<HttpInfo<AttributeAssignGroup200Response>> {
        return this.api.attributeAssignSetWithHttpInfo(param.id, param.attributeSetId, param.groupId,  options).toPromise();
    }

    /**
     * Assign attribute to the attribute set
     * attribute.assign.set
     * @param param the request object
     */
    public attributeAssignSet(param: AttributeApiAttributeAssignSetRequest, options?: Configuration): Promise<AttributeAssignGroup200Response> {
        return this.api.attributeAssignSet(param.id, param.attributeSetId, param.groupId,  options).toPromise();
    }

    /**
     * Get attribute_set list
     * attribute.attributeset.list
     * @param param the request object
     */
    public attributeAttributesetListWithHttpInfo(param: AttributeApiAttributeAttributesetListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseAttributeAttributesetList>> {
        return this.api.attributeAttributesetListWithHttpInfo(param.start, param.count, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get attribute_set list
     * attribute.attributeset.list
     * @param param the request object
     */
    public attributeAttributesetList(param: AttributeApiAttributeAttributesetListRequest = {}, options?: Configuration): Promise<ModelResponseAttributeAttributesetList> {
        return this.api.attributeAttributesetList(param.start, param.count, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get attributes count
     * attribute.count
     * @param param the request object
     */
    public attributeCountWithHttpInfo(param: AttributeApiAttributeCountRequest = {}, options?: Configuration): Promise<HttpInfo<AttributeCount200Response>> {
        return this.api.attributeCountWithHttpInfo(param.type, param.attributeSetId, param.storeId, param.langId, param.visible, param.required, param.system,  options).toPromise();
    }

    /**
     * Get attributes count
     * attribute.count
     * @param param the request object
     */
    public attributeCount(param: AttributeApiAttributeCountRequest = {}, options?: Configuration): Promise<AttributeCount200Response> {
        return this.api.attributeCount(param.type, param.attributeSetId, param.storeId, param.langId, param.visible, param.required, param.system,  options).toPromise();
    }

    /**
     * Delete attribute from store
     * attribute.delete
     * @param param the request object
     */
    public attributeDeleteWithHttpInfo(param: AttributeApiAttributeDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.attributeDeleteWithHttpInfo(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Delete attribute from store
     * attribute.delete
     * @param param the request object
     */
    public attributeDelete(param: AttributeApiAttributeDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.attributeDelete(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Get attribute group list
     * attribute.group.list
     * @param param the request object
     */
    public attributeGroupListWithHttpInfo(param: AttributeApiAttributeGroupListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseAttributeGroupList>> {
        return this.api.attributeGroupListWithHttpInfo(param.start, param.count, param.attributeSetId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get attribute group list
     * attribute.group.list
     * @param param the request object
     */
    public attributeGroupList(param: AttributeApiAttributeGroupListRequest = {}, options?: Configuration): Promise<ModelResponseAttributeGroupList> {
        return this.api.attributeGroupList(param.start, param.count, param.attributeSetId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get information about a specific global attribute by its ID.
     * attribute.info
     * @param param the request object
     */
    public attributeInfoWithHttpInfo(param: AttributeApiAttributeInfoRequest, options?: Configuration): Promise<HttpInfo<AttributeInfo200Response>> {
        return this.api.attributeInfoWithHttpInfo(param.id, param.attributeSetId, param.storeId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get information about a specific global attribute by its ID.
     * attribute.info
     * @param param the request object
     */
    public attributeInfo(param: AttributeApiAttributeInfoRequest, options?: Configuration): Promise<AttributeInfo200Response> {
        return this.api.attributeInfo(param.id, param.attributeSetId, param.storeId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get a list of global attributes.
     * attribute.list
     * @param param the request object
     */
    public attributeListWithHttpInfo(param: AttributeApiAttributeListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseAttributeList>> {
        return this.api.attributeListWithHttpInfo(param.start, param.count, param.attributeIds, param.attributeSetId, param.storeId, param.langId, param.type, param.visible, param.required, param.system, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get a list of global attributes.
     * attribute.list
     * @param param the request object
     */
    public attributeList(param: AttributeApiAttributeListRequest = {}, options?: Configuration): Promise<ModelResponseAttributeList> {
        return this.api.attributeList(param.start, param.count, param.attributeIds, param.attributeSetId, param.storeId, param.langId, param.type, param.visible, param.required, param.system, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of supported attributes types
     * attribute.type.list
     * @param param the request object
     */
    public attributeTypeListWithHttpInfo(param: AttributeApiAttributeTypeListRequest = {}, options?: Configuration): Promise<HttpInfo<AttributeTypeList200Response>> {
        return this.api.attributeTypeListWithHttpInfo( options).toPromise();
    }

    /**
     * Get list of supported attributes types
     * attribute.type.list
     * @param param the request object
     */
    public attributeTypeList(param: AttributeApiAttributeTypeListRequest = {}, options?: Configuration): Promise<AttributeTypeList200Response> {
        return this.api.attributeTypeList( options).toPromise();
    }

    /**
     * Unassign attribute from group
     * attribute.unassign.group
     * @param param the request object
     */
    public attributeUnassignGroupWithHttpInfo(param: AttributeApiAttributeUnassignGroupRequest, options?: Configuration): Promise<HttpInfo<AttributeUnassignGroup200Response>> {
        return this.api.attributeUnassignGroupWithHttpInfo(param.id, param.groupId,  options).toPromise();
    }

    /**
     * Unassign attribute from group
     * attribute.unassign.group
     * @param param the request object
     */
    public attributeUnassignGroup(param: AttributeApiAttributeUnassignGroupRequest, options?: Configuration): Promise<AttributeUnassignGroup200Response> {
        return this.api.attributeUnassignGroup(param.id, param.groupId,  options).toPromise();
    }

    /**
     * Unassign attribute from attribute set
     * attribute.unassign.set
     * @param param the request object
     */
    public attributeUnassignSetWithHttpInfo(param: AttributeApiAttributeUnassignSetRequest, options?: Configuration): Promise<HttpInfo<AttributeUnassignGroup200Response>> {
        return this.api.attributeUnassignSetWithHttpInfo(param.id, param.attributeSetId,  options).toPromise();
    }

    /**
     * Unassign attribute from attribute set
     * attribute.unassign.set
     * @param param the request object
     */
    public attributeUnassignSet(param: AttributeApiAttributeUnassignSetRequest, options?: Configuration): Promise<AttributeUnassignGroup200Response> {
        return this.api.attributeUnassignSet(param.id, param.attributeSetId,  options).toPromise();
    }

    /**
     * Update attribute data
     * attribute.update
     * @param param the request object
     */
    public attributeUpdateWithHttpInfo(param: AttributeApiAttributeUpdateRequest, options?: Configuration): Promise<HttpInfo<AttributeUpdate200Response>> {
        return this.api.attributeUpdateWithHttpInfo(param.id, param.name, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Update attribute data
     * attribute.update
     * @param param the request object
     */
    public attributeUpdate(param: AttributeApiAttributeUpdateRequest, options?: Configuration): Promise<AttributeUpdate200Response> {
        return this.api.attributeUpdate(param.id, param.name, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Add new value to attribute.
     * attribute.value.add
     * @param param the request object
     */
    public attributeValueAddWithHttpInfo(param: AttributeApiAttributeValueAddRequest, options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        return this.api.attributeValueAddWithHttpInfo(param.attributeId, param.name, param.code, param.description, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Add new value to attribute.
     * attribute.value.add
     * @param param the request object
     */
    public attributeValueAdd(param: AttributeApiAttributeValueAddRequest, options?: Configuration): Promise<AttributeAdd200Response> {
        return this.api.attributeValueAdd(param.attributeId, param.name, param.code, param.description, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Delete attribute value.
     * attribute.value.delete
     * @param param the request object
     */
    public attributeValueDeleteWithHttpInfo(param: AttributeApiAttributeValueDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        return this.api.attributeValueDeleteWithHttpInfo(param.id, param.attributeId, param.storeId,  options).toPromise();
    }

    /**
     * Delete attribute value.
     * attribute.value.delete
     * @param param the request object
     */
    public attributeValueDelete(param: AttributeApiAttributeValueDeleteRequest, options?: Configuration): Promise<AttributeValueDelete200Response> {
        return this.api.attributeValueDelete(param.id, param.attributeId, param.storeId,  options).toPromise();
    }

    /**
     * Update attribute value.
     * attribute.value.update
     * @param param the request object
     */
    public attributeValueUpdateWithHttpInfo(param: AttributeApiAttributeValueUpdateRequest, options?: Configuration): Promise<HttpInfo<AttributeUpdate200Response>> {
        return this.api.attributeValueUpdateWithHttpInfo(param.id, param.attributeId, param.name, param.description, param.code, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Update attribute value.
     * attribute.value.update
     * @param param the request object
     */
    public attributeValueUpdate(param: AttributeApiAttributeValueUpdateRequest, options?: Configuration): Promise<AttributeUpdate200Response> {
        return this.api.attributeValueUpdate(param.id, param.attributeId, param.name, param.description, param.code, param.storeId, param.langId,  options).toPromise();
    }

}

import { ObservableBasketApi } from "./ObservableAPI";
import { BasketApiRequestFactory, BasketApiResponseProcessor} from "../apis/BasketApi";

export interface BasketApiBasketInfoRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketInfo
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketInfo
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof BasketApibasketInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketInfo
     */
    exclude?: string
}

export interface BasketApiBasketItemAddRequest {
    /**
     * Retrieves orders specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketItemAdd
     */
    customerId: string
    /**
     * Defines id of the product which should be added to the basket
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketItemAdd
     */
    productId: string
    /**
     * Defines product\&#39;s variants specified by variant id
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketItemAdd
     */
    variantId?: string
    /**
     * Defines new items quantity
     * Defaults to: 0
     * @type number
     * @memberof BasketApibasketItemAdd
     */
    quantity?: number
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketItemAdd
     */
    storeId?: string
}

export interface BasketApiBasketLiveShippingServiceCreateRequest {
    /**
     * Shipping Service Name
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketLiveShippingServiceCreate
     */
    name: string
    /**
     * Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketLiveShippingServiceCreate
     */
    callback: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketLiveShippingServiceCreate
     */
    storeId?: string
}

export interface BasketApiBasketLiveShippingServiceDeleteRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type number
     * @memberof BasketApibasketLiveShippingServiceDelete
     */
    id: number
}

export interface BasketApiBasketLiveShippingServiceListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof BasketApibasketLiveShippingServiceList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof BasketApibasketLiveShippingServiceList
     */
    count?: number
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof BasketApibasketLiveShippingServiceList
     */
    storeId?: string
}

export class ObjectBasketApi {
    private api: ObservableBasketApi

    public constructor(configuration: Configuration, requestFactory?: BasketApiRequestFactory, responseProcessor?: BasketApiResponseProcessor) {
        this.api = new ObservableBasketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve basket information.
     * basket.info
     * @param param the request object
     */
    public basketInfoWithHttpInfo(param: BasketApiBasketInfoRequest, options?: Configuration): Promise<HttpInfo<BasketInfo200Response>> {
        return this.api.basketInfoWithHttpInfo(param.id, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Retrieve basket information.
     * basket.info
     * @param param the request object
     */
    public basketInfo(param: BasketApiBasketInfoRequest, options?: Configuration): Promise<BasketInfo200Response> {
        return this.api.basketInfo(param.id, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Add item to basket
     * basket.item.add
     * @param param the request object
     */
    public basketItemAddWithHttpInfo(param: BasketApiBasketItemAddRequest, options?: Configuration): Promise<HttpInfo<BasketItemAdd200Response>> {
        return this.api.basketItemAddWithHttpInfo(param.customerId, param.productId, param.variantId, param.quantity, param.storeId,  options).toPromise();
    }

    /**
     * Add item to basket
     * basket.item.add
     * @param param the request object
     */
    public basketItemAdd(param: BasketApiBasketItemAddRequest, options?: Configuration): Promise<BasketItemAdd200Response> {
        return this.api.basketItemAdd(param.customerId, param.productId, param.variantId, param.quantity, param.storeId,  options).toPromise();
    }

    /**
     * Create live shipping rate service.
     * basket.live_shipping_service.create
     * @param param the request object
     */
    public basketLiveShippingServiceCreateWithHttpInfo(param: BasketApiBasketLiveShippingServiceCreateRequest, options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceCreate200Response>> {
        return this.api.basketLiveShippingServiceCreateWithHttpInfo(param.name, param.callback, param.storeId,  options).toPromise();
    }

    /**
     * Create live shipping rate service.
     * basket.live_shipping_service.create
     * @param param the request object
     */
    public basketLiveShippingServiceCreate(param: BasketApiBasketLiveShippingServiceCreateRequest, options?: Configuration): Promise<BasketLiveShippingServiceCreate200Response> {
        return this.api.basketLiveShippingServiceCreate(param.name, param.callback, param.storeId,  options).toPromise();
    }

    /**
     * Delete live shipping rate service.
     * basket.live_shipping_service.delete
     * @param param the request object
     */
    public basketLiveShippingServiceDeleteWithHttpInfo(param: BasketApiBasketLiveShippingServiceDeleteRequest, options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        return this.api.basketLiveShippingServiceDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete live shipping rate service.
     * basket.live_shipping_service.delete
     * @param param the request object
     */
    public basketLiveShippingServiceDelete(param: BasketApiBasketLiveShippingServiceDeleteRequest, options?: Configuration): Promise<BasketLiveShippingServiceDelete200Response> {
        return this.api.basketLiveShippingServiceDelete(param.id,  options).toPromise();
    }

    /**
     * Retrieve a list of live shipping rate services.
     * basket.live_shipping_service.list
     * @param param the request object
     */
    public basketLiveShippingServiceListWithHttpInfo(param: BasketApiBasketLiveShippingServiceListRequest = {}, options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceList200Response>> {
        return this.api.basketLiveShippingServiceListWithHttpInfo(param.start, param.count, param.storeId,  options).toPromise();
    }

    /**
     * Retrieve a list of live shipping rate services.
     * basket.live_shipping_service.list
     * @param param the request object
     */
    public basketLiveShippingServiceList(param: BasketApiBasketLiveShippingServiceListRequest = {}, options?: Configuration): Promise<BasketLiveShippingServiceList200Response> {
        return this.api.basketLiveShippingServiceList(param.start, param.count, param.storeId,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiBatchJobListRequest {
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof BatchApibatchJobList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof BatchApibatchJobList
     */
    pageCursor?: string
    /**
     * Filter batch jobs by ids
     * Defaults to: undefined
     * @type string
     * @memberof BatchApibatchJobList
     */
    ids?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof BatchApibatchJobList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof BatchApibatchJobList
     */
    createdTo?: string
    /**
     * Retrieve entities according to their processing datetime
     * Defaults to: undefined
     * @type string
     * @memberof BatchApibatchJobList
     */
    processedFrom?: string
    /**
     * Retrieve entities according to their processing datetime
     * Defaults to: undefined
     * @type string
     * @memberof BatchApibatchJobList
     */
    processedTo?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;{return_code,return_message,pagination,result}&#39;
     * @type string
     * @memberof BatchApibatchJobList
     */
    responseFields?: string
}

export interface BatchApiBatchJobResultRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof BatchApibatchJobResult
     */
    id: string
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of recent jobs
     * batch.job.list
     * @param param the request object
     */
    public batchJobListWithHttpInfo(param: BatchApiBatchJobListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseBatchJobList>> {
        return this.api.batchJobListWithHttpInfo(param.count, param.pageCursor, param.ids, param.createdFrom, param.createdTo, param.processedFrom, param.processedTo, param.responseFields,  options).toPromise();
    }

    /**
     * Get list of recent jobs
     * batch.job.list
     * @param param the request object
     */
    public batchJobList(param: BatchApiBatchJobListRequest = {}, options?: Configuration): Promise<ModelResponseBatchJobList> {
        return this.api.batchJobList(param.count, param.pageCursor, param.ids, param.createdFrom, param.createdTo, param.processedFrom, param.processedTo, param.responseFields,  options).toPromise();
    }

    /**
     * Get job result data
     * batch.job.result
     * @param param the request object
     */
    public batchJobResultWithHttpInfo(param: BatchApiBatchJobResultRequest, options?: Configuration): Promise<HttpInfo<ResponseBatchJobResult>> {
        return this.api.batchJobResultWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get job result data
     * batch.job.result
     * @param param the request object
     */
    public batchJobResult(param: BatchApiBatchJobResultRequest, options?: Configuration): Promise<ResponseBatchJobResult> {
        return this.api.batchJobResult(param.id,  options).toPromise();
    }

}

import { ObservableBridgeApi } from "./ObservableAPI";
import { BridgeApiRequestFactory, BridgeApiResponseProcessor} from "../apis/BridgeApi";

export interface BridgeApiBridgeDeleteRequest {
}

export interface BridgeApiBridgeDownloadRequest {
    /**
     * Identifies if there is a necessity to download whitelabel bridge.
     * Defaults to: false
     * @type boolean
     * @memberof BridgeApibridgeDownload
     */
    whitelabel?: boolean
}

export interface BridgeApiBridgeUpdateRequest {
}

export class ObjectBridgeApi {
    private api: ObservableBridgeApi

    public constructor(configuration: Configuration, requestFactory?: BridgeApiRequestFactory, responseProcessor?: BridgeApiResponseProcessor) {
        this.api = new ObservableBridgeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete bridge from the store.
     * bridge.delete
     * @param param the request object
     */
    public bridgeDeleteWithHttpInfo(param: BridgeApiBridgeDeleteRequest = {}, options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        return this.api.bridgeDeleteWithHttpInfo( options).toPromise();
    }

    /**
     * Delete bridge from the store.
     * bridge.delete
     * @param param the request object
     */
    public bridgeDelete(param: BridgeApiBridgeDeleteRequest = {}, options?: Configuration): Promise<AttributeValueDelete200Response> {
        return this.api.bridgeDelete( options).toPromise();
    }

    /**
     * Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.
     * bridge.download
     * @param param the request object
     */
    public bridgeDownloadWithHttpInfo(param: BridgeApiBridgeDownloadRequest = {}, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.bridgeDownloadWithHttpInfo(param.whitelabel,  options).toPromise();
    }

    /**
     * Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.
     * bridge.download
     * @param param the request object
     */
    public bridgeDownload(param: BridgeApiBridgeDownloadRequest = {}, options?: Configuration): Promise<HttpFile> {
        return this.api.bridgeDownload(param.whitelabel,  options).toPromise();
    }

    /**
     * Update bridge in the store.
     * bridge.update
     * @param param the request object
     */
    public bridgeUpdateWithHttpInfo(param: BridgeApiBridgeUpdateRequest = {}, options?: Configuration): Promise<HttpInfo<AttributeUpdate200Response>> {
        return this.api.bridgeUpdateWithHttpInfo( options).toPromise();
    }

    /**
     * Update bridge in the store.
     * bridge.update
     * @param param the request object
     */
    public bridgeUpdate(param: BridgeApiBridgeUpdateRequest = {}, options?: Configuration): Promise<AttributeUpdate200Response> {
        return this.api.bridgeUpdate( options).toPromise();
    }

}

import { ObservableCartApi } from "./ObservableAPI";
import { CartApiRequestFactory, CartApiResponseProcessor} from "../apis/CartApi";

export interface CartApiCartCatalogPriceRulesCountRequest {
}

export interface CartApiCartCatalogPriceRulesListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CartApicartCatalogPriceRulesList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CartApicartCatalogPriceRulesList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCatalogPriceRulesList
     */
    pageCursor?: string
    /**
     * Retrieves  catalog_price_rules by ids
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCatalogPriceRulesList
     */
    ids?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCatalogPriceRulesList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,description&#39;
     * @type string
     * @memberof CartApicartCatalogPriceRulesList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCatalogPriceRulesList
     */
    exclude?: string
}

export interface CartApiCartCouponAddRequest {
    /**
     * 
     * @type CartCouponAdd
     * @memberof CartApicartCouponAdd
     */
    cartCouponAdd: CartCouponAdd
}

export interface CartApiCartCouponConditionAddRequest {
    /**
     * Coupon Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponConditionAdd
     */
    couponId: string
    /**
     * Defines condition entity type
     * Defaults to: undefined
     * @type &#39;order&#39; | &#39;order_shipping_address&#39; | &#39;product&#39; | &#39;customer&#39;
     * @memberof CartApicartCouponConditionAdd
     */
    entity: 'order' | 'order_shipping_address' | 'product' | 'customer'
    /**
     * Defines condition entity attribute key
     * Defaults to: undefined
     * @type &#39;total&#39; | &#39;subtotal&#39; | &#39;shipping_total&#39; | &#39;total_quantity&#39; | &#39;total_weight&#39; | &#39;country&#39; | &#39;product_id&#39; | &#39;variant_id&#39; | &#39;category_id&#39; | &#39;customer_id&#39; | &#39;item_price&#39; | &#39;item_total_price&#39; | &#39;item_quantity&#39; | &#39;carrier_id&#39;
     * @memberof CartApicartCouponConditionAdd
     */
    key: 'total' | 'subtotal' | 'shipping_total' | 'total_quantity' | 'total_weight' | 'country' | 'product_id' | 'variant_id' | 'category_id' | 'customer_id' | 'item_price' | 'item_total_price' | 'item_quantity' | 'carrier_id'
    /**
     * Defines condition operator
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponConditionAdd
     */
    operator: string
    /**
     * Defines condition value, can be comma separated according to the operator.
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponConditionAdd
     */
    value: string
    /**
     * Defines condition operator
     * Defaults to: &#39;coupon_prerequisite&#39;
     * @type string
     * @memberof CartApicartCouponConditionAdd
     */
    target?: string
    /**
     * Indicates whether to apply a discount for taxes.
     * Defaults to: false
     * @type boolean
     * @memberof CartApicartCouponConditionAdd
     */
    includeTax?: boolean
    /**
     * Indicates whether to apply a discount for shipping.
     * Defaults to: false
     * @type boolean
     * @memberof CartApicartCouponConditionAdd
     */
    includeShipping?: boolean
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponConditionAdd
     */
    storeId?: string
}

export interface CartApiCartCouponCountRequest {
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponCount
     */
    storeId?: string
    /**
     * Defines category\&#39;s visibility status
     * Defaults to: true
     * @type boolean
     * @memberof CartApicartCouponCount
     */
    avail?: boolean
    /**
     * Filter entity by date_start (greater or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponCount
     */
    dateStartFrom?: string
    /**
     * Filter entity by date_start (less or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponCount
     */
    dateStartTo?: string
    /**
     * Filter entity by date_end (greater or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponCount
     */
    dateEndFrom?: string
    /**
     * Filter entity by date_end (less or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponCount
     */
    dateEndTo?: string
}

export interface CartApiCartCouponDeleteRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponDelete
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponDelete
     */
    storeId?: string
}

export interface CartApiCartCouponListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CartApicartCouponList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CartApicartCouponList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    pageCursor?: string
    /**
     * Filter coupons by ids
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    couponsIds?: string
    /**
     * Filter coupons by store id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    langId?: string
    /**
     * Filter coupons by avail status
     * Defaults to: undefined
     * @type boolean
     * @memberof CartApicartCouponList
     */
    avail?: boolean
    /**
     * Defines coupon\&#39;s status
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    status?: string
    /**
     * Filter entity by date_start (greater or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    dateStartFrom?: string
    /**
     * Filter entity by date_start (less or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    dateStartTo?: string
    /**
     * Filter entity by date_end (greater or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    dateEndFrom?: string
    /**
     * Filter entity by date_end (less or equal)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    dateEndTo?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,code,name,description&#39;
     * @type string
     * @memberof CartApicartCouponList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartCouponList
     */
    exclude?: string
}

export interface CartApiCartDeleteRequest {
    /**
     * Identifies if there is a necessity to delete bridge
     * Defaults to: true
     * @type boolean
     * @memberof CartApicartDelete
     */
    deleteBridge?: boolean
}

export interface CartApiCartGiftcardAddRequest {
    /**
     * Defines the gift card amount value.
     * Defaults to: undefined
     * @type number
     * @memberof CartApicartGiftcardAdd
     */
    amount: number
    /**
     * Gift card code
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardAdd
     */
    code?: string
    /**
     * Gift card owner email
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardAdd
     */
    ownerEmail?: string
    /**
     * Gift card recipient email
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardAdd
     */
    recipientEmail?: string
    /**
     * Gift card recipient name
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardAdd
     */
    recipientName?: string
    /**
     * Gift card owner name
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardAdd
     */
    ownerName?: string
}

export interface CartApiCartGiftcardCountRequest {
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardCount
     */
    storeId?: string
}

export interface CartApiCartGiftcardDeleteRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardDelete
     */
    id: string
}

export interface CartApiCartGiftcardListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CartApicartGiftcardList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CartApicartGiftcardList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardList
     */
    pageCursor?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardList
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,code,name&#39;
     * @type string
     * @memberof CartApicartGiftcardList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartGiftcardList
     */
    exclude?: string
}

export interface CartApiCartInfoRequest {
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartInfo
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;store_name,store_url,db_prefix&#39;
     * @type string
     * @memberof CartApicartInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartInfo
     */
    exclude?: string
}

export interface CartApiCartMetaDataListRequest {
    /**
     * Entity Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataList
     */
    entityId: string
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CartApicartMetaDataList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataList
     */
    pageCursor?: string
    /**
     * Entity
     * Defaults to: &#39;product&#39;
     * @type string
     * @memberof CartApicartMetaDataList
     */
    entity?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataList
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataList
     */
    langId?: string
    /**
     * Key
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataList
     */
    key?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;key,value&#39;
     * @type string
     * @memberof CartApicartMetaDataList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataList
     */
    exclude?: string
}

export interface CartApiCartMetaDataSetRequest {
    /**
     * Entity Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataSet
     */
    entityId: string
    /**
     * Key
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataSet
     */
    key: string
    /**
     * Value
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataSet
     */
    value: string
    /**
     * Metafield namespace
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataSet
     */
    namespace: string
    /**
     * Entity
     * Defaults to: &#39;product&#39;
     * @type string
     * @memberof CartApicartMetaDataSet
     */
    entity?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataSet
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataSet
     */
    langId?: string
}

export interface CartApiCartMetaDataUnsetRequest {
    /**
     * Entity Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataUnset
     */
    entityId: string
    /**
     * Key
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataUnset
     */
    key: string
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataUnset
     */
    id: string
    /**
     * Entity
     * Defaults to: &#39;product&#39;
     * @type string
     * @memberof CartApicartMetaDataUnset
     */
    entity?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartMetaDataUnset
     */
    storeId?: string
}

export interface CartApiCartMethodsRequest {
}

export interface CartApiCartPluginListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CartApicartPluginList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CartApicartPluginList
     */
    count?: number
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartPluginList
     */
    storeId?: string
}

export interface CartApiCartScriptAddRequest {
    /**
     * The user-friendly script name
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptAdd
     */
    name?: string
    /**
     * The user-friendly description
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptAdd
     */
    description?: string
    /**
     * An html string containing exactly one &#x60;script&#x60; tag.
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptAdd
     */
    html?: string
    /**
     * The URL of the remote script
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptAdd
     */
    src?: string
    /**
     * The load method to use for the script
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptAdd
     */
    loadMethod?: string
    /**
     * The page or pages on the online store where the script should be included
     * Defaults to: &#39;storefront&#39;
     * @type string
     * @memberof CartApicartScriptAdd
     */
    scope?: string
    /**
     * Event for run scripts
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptAdd
     */
    events?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptAdd
     */
    storeId?: string
}

export interface CartApiCartScriptDeleteRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptDelete
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptDelete
     */
    storeId?: string
}

export interface CartApiCartScriptListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CartApicartScriptList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CartApicartScriptList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    pageCursor?: string
    /**
     * Retrieves only scripts with specific ids
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    scriptIds?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    storeId?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    modifiedTo?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,description&#39;
     * @type string
     * @memberof CartApicartScriptList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartScriptList
     */
    exclude?: string
}

export interface CartApiCartShippingZonesListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CartApicartShippingZonesList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CartApicartShippingZonesList
     */
    count?: number
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartShippingZonesList
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartShippingZonesList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,enabled&#39;
     * @type string
     * @memberof CartApicartShippingZonesList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CartApicartShippingZonesList
     */
    exclude?: string
}

export interface CartApiCartValidateRequest {
    /**
     * Specify if api2cart should validate cart version
     * Defaults to: false
     * @type boolean
     * @memberof CartApicartValidate
     */
    validateVersion?: boolean
}

export class ObjectCartApi {
    private api: ObservableCartApi

    public constructor(configuration: Configuration, requestFactory?: CartApiRequestFactory, responseProcessor?: CartApiResponseProcessor) {
        this.api = new ObservableCartApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get count of cart catalog price rules discounts.
     * cart.catalog_price_rules.count
     * @param param the request object
     */
    public cartCatalogPriceRulesCountWithHttpInfo(param: CartApiCartCatalogPriceRulesCountRequest = {}, options?: Configuration): Promise<HttpInfo<CartCatalogPriceRulesCount200Response>> {
        return this.api.cartCatalogPriceRulesCountWithHttpInfo( options).toPromise();
    }

    /**
     * Get count of cart catalog price rules discounts.
     * cart.catalog_price_rules.count
     * @param param the request object
     */
    public cartCatalogPriceRulesCount(param: CartApiCartCatalogPriceRulesCountRequest = {}, options?: Configuration): Promise<CartCatalogPriceRulesCount200Response> {
        return this.api.cartCatalogPriceRulesCount( options).toPromise();
    }

    /**
     * Get cart catalog price rules discounts.
     * cart.catalog_price_rules.list
     * @param param the request object
     */
    public cartCatalogPriceRulesListWithHttpInfo(param: CartApiCartCatalogPriceRulesListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCartCatalogPriceRulesList>> {
        return this.api.cartCatalogPriceRulesListWithHttpInfo(param.start, param.count, param.pageCursor, param.ids, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get cart catalog price rules discounts.
     * cart.catalog_price_rules.list
     * @param param the request object
     */
    public cartCatalogPriceRulesList(param: CartApiCartCatalogPriceRulesListRequest = {}, options?: Configuration): Promise<ModelResponseCartCatalogPriceRulesList> {
        return this.api.cartCatalogPriceRulesList(param.start, param.count, param.pageCursor, param.ids, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Use this method to create a coupon with specified conditions.
     * cart.coupon.add
     * @param param the request object
     */
    public cartCouponAddWithHttpInfo(param: CartApiCartCouponAddRequest, options?: Configuration): Promise<HttpInfo<CartCouponAdd200Response>> {
        return this.api.cartCouponAddWithHttpInfo(param.cartCouponAdd,  options).toPromise();
    }

    /**
     * Use this method to create a coupon with specified conditions.
     * cart.coupon.add
     * @param param the request object
     */
    public cartCouponAdd(param: CartApiCartCouponAddRequest, options?: Configuration): Promise<CartCouponAdd200Response> {
        return this.api.cartCouponAdd(param.cartCouponAdd,  options).toPromise();
    }

    /**
     * Use this method to add additional conditions for coupon application.
     * cart.coupon.condition.add
     * @param param the request object
     */
    public cartCouponConditionAddWithHttpInfo(param: CartApiCartCouponConditionAddRequest, options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        return this.api.cartCouponConditionAddWithHttpInfo(param.couponId, param.entity, param.key, param.operator, param.value, param.target, param.includeTax, param.includeShipping, param.storeId,  options).toPromise();
    }

    /**
     * Use this method to add additional conditions for coupon application.
     * cart.coupon.condition.add
     * @param param the request object
     */
    public cartCouponConditionAdd(param: CartApiCartCouponConditionAddRequest, options?: Configuration): Promise<BasketLiveShippingServiceDelete200Response> {
        return this.api.cartCouponConditionAdd(param.couponId, param.entity, param.key, param.operator, param.value, param.target, param.includeTax, param.includeShipping, param.storeId,  options).toPromise();
    }

    /**
     * This method allows you to get the number of coupons. On some platforms, you can filter the coupons by the date they were active.
     * cart.coupon.count
     * @param param the request object
     */
    public cartCouponCountWithHttpInfo(param: CartApiCartCouponCountRequest = {}, options?: Configuration): Promise<HttpInfo<CartCouponCount200Response>> {
        return this.api.cartCouponCountWithHttpInfo(param.storeId, param.avail, param.dateStartFrom, param.dateStartTo, param.dateEndFrom, param.dateEndTo,  options).toPromise();
    }

    /**
     * This method allows you to get the number of coupons. On some platforms, you can filter the coupons by the date they were active.
     * cart.coupon.count
     * @param param the request object
     */
    public cartCouponCount(param: CartApiCartCouponCountRequest = {}, options?: Configuration): Promise<CartCouponCount200Response> {
        return this.api.cartCouponCount(param.storeId, param.avail, param.dateStartFrom, param.dateStartTo, param.dateEndFrom, param.dateEndTo,  options).toPromise();
    }

    /**
     * Delete coupon
     * cart.coupon.delete
     * @param param the request object
     */
    public cartCouponDeleteWithHttpInfo(param: CartApiCartCouponDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.cartCouponDeleteWithHttpInfo(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Delete coupon
     * cart.coupon.delete
     * @param param the request object
     */
    public cartCouponDelete(param: CartApiCartCouponDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.cartCouponDelete(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Get cart coupon discounts.
     * cart.coupon.list
     * @param param the request object
     */
    public cartCouponListWithHttpInfo(param: CartApiCartCouponListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCartCouponList>> {
        return this.api.cartCouponListWithHttpInfo(param.start, param.count, param.pageCursor, param.couponsIds, param.storeId, param.langId, param.avail, param.status, param.dateStartFrom, param.dateStartTo, param.dateEndFrom, param.dateEndTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get cart coupon discounts.
     * cart.coupon.list
     * @param param the request object
     */
    public cartCouponList(param: CartApiCartCouponListRequest = {}, options?: Configuration): Promise<ModelResponseCartCouponList> {
        return this.api.cartCouponList(param.start, param.count, param.pageCursor, param.couponsIds, param.storeId, param.langId, param.avail, param.status, param.dateStartFrom, param.dateStartTo, param.dateEndFrom, param.dateEndTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Remove store from API2Cart
     * cart.delete
     * @param param the request object
     */
    public cartDeleteWithHttpInfo(param: CartApiCartDeleteRequest = {}, options?: Configuration): Promise<HttpInfo<CartDelete200Response>> {
        return this.api.cartDeleteWithHttpInfo(param.deleteBridge,  options).toPromise();
    }

    /**
     * Remove store from API2Cart
     * cart.delete
     * @param param the request object
     */
    public cartDelete(param: CartApiCartDeleteRequest = {}, options?: Configuration): Promise<CartDelete200Response> {
        return this.api.cartDelete(param.deleteBridge,  options).toPromise();
    }

    /**
     * Use this method to create a gift card for a specified amount.
     * cart.giftcard.add
     * @param param the request object
     */
    public cartGiftcardAddWithHttpInfo(param: CartApiCartGiftcardAddRequest, options?: Configuration): Promise<HttpInfo<CartGiftcardAdd200Response>> {
        return this.api.cartGiftcardAddWithHttpInfo(param.amount, param.code, param.ownerEmail, param.recipientEmail, param.recipientName, param.ownerName,  options).toPromise();
    }

    /**
     * Use this method to create a gift card for a specified amount.
     * cart.giftcard.add
     * @param param the request object
     */
    public cartGiftcardAdd(param: CartApiCartGiftcardAddRequest, options?: Configuration): Promise<CartGiftcardAdd200Response> {
        return this.api.cartGiftcardAdd(param.amount, param.code, param.ownerEmail, param.recipientEmail, param.recipientName, param.ownerName,  options).toPromise();
    }

    /**
     * Get gift cards count.
     * cart.giftcard.count
     * @param param the request object
     */
    public cartGiftcardCountWithHttpInfo(param: CartApiCartGiftcardCountRequest = {}, options?: Configuration): Promise<HttpInfo<CartGiftcardCount200Response>> {
        return this.api.cartGiftcardCountWithHttpInfo(param.storeId,  options).toPromise();
    }

    /**
     * Get gift cards count.
     * cart.giftcard.count
     * @param param the request object
     */
    public cartGiftcardCount(param: CartApiCartGiftcardCountRequest = {}, options?: Configuration): Promise<CartGiftcardCount200Response> {
        return this.api.cartGiftcardCount(param.storeId,  options).toPromise();
    }

    /**
     * Delete giftcard
     * cart.giftcard.delete
     * @param param the request object
     */
    public cartGiftcardDeleteWithHttpInfo(param: CartApiCartGiftcardDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.cartGiftcardDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete giftcard
     * cart.giftcard.delete
     * @param param the request object
     */
    public cartGiftcardDelete(param: CartApiCartGiftcardDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.cartGiftcardDelete(param.id,  options).toPromise();
    }

    /**
     * Get gift cards list.
     * cart.giftcard.list
     * @param param the request object
     */
    public cartGiftcardListWithHttpInfo(param: CartApiCartGiftcardListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCartGiftCardList>> {
        return this.api.cartGiftcardListWithHttpInfo(param.start, param.count, param.pageCursor, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get gift cards list.
     * cart.giftcard.list
     * @param param the request object
     */
    public cartGiftcardList(param: CartApiCartGiftcardListRequest = {}, options?: Configuration): Promise<ModelResponseCartGiftCardList> {
        return this.api.cartGiftcardList(param.start, param.count, param.pageCursor, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.
     * cart.info
     * @param param the request object
     */
    public cartInfoWithHttpInfo(param: CartApiCartInfoRequest = {}, options?: Configuration): Promise<HttpInfo<CartInfo200Response>> {
        return this.api.cartInfoWithHttpInfo(param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.
     * cart.info
     * @param param the request object
     */
    public cartInfo(param: CartApiCartInfoRequest = {}, options?: Configuration): Promise<CartInfo200Response> {
        return this.api.cartInfo(param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Using this method, you can get a list of metadata for various entities (products, options, customers, orders). Usually this is data created by third-party plugins.
     * cart.meta_data.list
     * @param param the request object
     */
    public cartMetaDataListWithHttpInfo(param: CartApiCartMetaDataListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseCartMetaDataList>> {
        return this.api.cartMetaDataListWithHttpInfo(param.entityId, param.count, param.pageCursor, param.entity, param.storeId, param.langId, param.key, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Using this method, you can get a list of metadata for various entities (products, options, customers, orders). Usually this is data created by third-party plugins.
     * cart.meta_data.list
     * @param param the request object
     */
    public cartMetaDataList(param: CartApiCartMetaDataListRequest, options?: Configuration): Promise<ModelResponseCartMetaDataList> {
        return this.api.cartMetaDataList(param.entityId, param.count, param.pageCursor, param.entity, param.storeId, param.langId, param.key, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Set meta data for a specific entity
     * cart.meta_data.set
     * @param param the request object
     */
    public cartMetaDataSetWithHttpInfo(param: CartApiCartMetaDataSetRequest, options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        return this.api.cartMetaDataSetWithHttpInfo(param.entityId, param.key, param.value, param.namespace, param.entity, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Set meta data for a specific entity
     * cart.meta_data.set
     * @param param the request object
     */
    public cartMetaDataSet(param: CartApiCartMetaDataSetRequest, options?: Configuration): Promise<AttributeAdd200Response> {
        return this.api.cartMetaDataSet(param.entityId, param.key, param.value, param.namespace, param.entity, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Unset meta data for a specific entity
     * cart.meta_data.unset
     * @param param the request object
     */
    public cartMetaDataUnsetWithHttpInfo(param: CartApiCartMetaDataUnsetRequest, options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        return this.api.cartMetaDataUnsetWithHttpInfo(param.entityId, param.key, param.id, param.entity, param.storeId,  options).toPromise();
    }

    /**
     * Unset meta data for a specific entity
     * cart.meta_data.unset
     * @param param the request object
     */
    public cartMetaDataUnset(param: CartApiCartMetaDataUnsetRequest, options?: Configuration): Promise<BasketLiveShippingServiceDelete200Response> {
        return this.api.cartMetaDataUnset(param.entityId, param.key, param.id, param.entity, param.storeId,  options).toPromise();
    }

    /**
     * Returns a list of supported API methods.
     * cart.methods
     * @param param the request object
     */
    public cartMethodsWithHttpInfo(param: CartApiCartMethodsRequest = {}, options?: Configuration): Promise<HttpInfo<CartMethods200Response>> {
        return this.api.cartMethodsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of supported API methods.
     * cart.methods
     * @param param the request object
     */
    public cartMethods(param: CartApiCartMethodsRequest = {}, options?: Configuration): Promise<CartMethods200Response> {
        return this.api.cartMethods( options).toPromise();
    }

    /**
     * Get a list of third-party plugins installed on the store.
     * cart.plugin.list
     * @param param the request object
     */
    public cartPluginListWithHttpInfo(param: CartApiCartPluginListRequest = {}, options?: Configuration): Promise<HttpInfo<CartPluginList200Response>> {
        return this.api.cartPluginListWithHttpInfo(param.start, param.count, param.storeId,  options).toPromise();
    }

    /**
     * Get a list of third-party plugins installed on the store.
     * cart.plugin.list
     * @param param the request object
     */
    public cartPluginList(param: CartApiCartPluginListRequest = {}, options?: Configuration): Promise<CartPluginList200Response> {
        return this.api.cartPluginList(param.start, param.count, param.storeId,  options).toPromise();
    }

    /**
     * Add new script to the storefront
     * cart.script.add
     * @param param the request object
     */
    public cartScriptAddWithHttpInfo(param: CartApiCartScriptAddRequest = {}, options?: Configuration): Promise<HttpInfo<CartScriptAdd200Response>> {
        return this.api.cartScriptAddWithHttpInfo(param.name, param.description, param.html, param.src, param.loadMethod, param.scope, param.events, param.storeId,  options).toPromise();
    }

    /**
     * Add new script to the storefront
     * cart.script.add
     * @param param the request object
     */
    public cartScriptAdd(param: CartApiCartScriptAddRequest = {}, options?: Configuration): Promise<CartScriptAdd200Response> {
        return this.api.cartScriptAdd(param.name, param.description, param.html, param.src, param.loadMethod, param.scope, param.events, param.storeId,  options).toPromise();
    }

    /**
     * Remove script from the storefront
     * cart.script.delete
     * @param param the request object
     */
    public cartScriptDeleteWithHttpInfo(param: CartApiCartScriptDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.cartScriptDeleteWithHttpInfo(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Remove script from the storefront
     * cart.script.delete
     * @param param the request object
     */
    public cartScriptDelete(param: CartApiCartScriptDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.cartScriptDelete(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Get scripts installed to the storefront
     * cart.script.list
     * @param param the request object
     */
    public cartScriptListWithHttpInfo(param: CartApiCartScriptListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCartScriptList>> {
        return this.api.cartScriptListWithHttpInfo(param.start, param.count, param.pageCursor, param.scriptIds, param.storeId, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get scripts installed to the storefront
     * cart.script.list
     * @param param the request object
     */
    public cartScriptList(param: CartApiCartScriptListRequest = {}, options?: Configuration): Promise<ModelResponseCartScriptList> {
        return this.api.cartScriptList(param.start, param.count, param.pageCursor, param.scriptIds, param.storeId, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of shipping zones
     * cart.shipping_zones.list
     * @param param the request object
     */
    public cartShippingZonesListWithHttpInfo(param: CartApiCartShippingZonesListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCartShippingZonesList>> {
        return this.api.cartShippingZonesListWithHttpInfo(param.start, param.count, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of shipping zones
     * cart.shipping_zones.list
     * @param param the request object
     */
    public cartShippingZonesList(param: CartApiCartShippingZonesListRequest = {}, options?: Configuration): Promise<ModelResponseCartShippingZonesList> {
        return this.api.cartShippingZonesList(param.start, param.count, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.
     * cart.validate
     * @param param the request object
     */
    public cartValidateWithHttpInfo(param: CartApiCartValidateRequest = {}, options?: Configuration): Promise<HttpInfo<CartValidate200Response>> {
        return this.api.cartValidateWithHttpInfo(param.validateVersion,  options).toPromise();
    }

    /**
     * This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.
     * cart.validate
     * @param param the request object
     */
    public cartValidate(param: CartApiCartValidateRequest = {}, options?: Configuration): Promise<CartValidate200Response> {
        return this.api.cartValidate(param.validateVersion,  options).toPromise();
    }

}

import { ObservableCategoryApi } from "./ObservableAPI";
import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";

export interface CategoryApiCategoryAddRequest {
    /**
     * Defines category\&#39;s name that has to be added
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    name: string
    /**
     * Defines category\&#39;s description
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    description?: string
    /**
     * Defines short description
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    shortDescription?: string
    /**
     * Adds categories specified by parent id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    parentId?: string
    /**
     * Defines category\&#39;s visibility status
     * Defaults to: true
     * @type boolean
     * @memberof CategoryApicategoryAdd
     */
    avail?: boolean
    /**
     * Entity\&#39;s date creation
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    createdTime?: string
    /**
     * Entity\&#39;s date modification
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    modifiedTime?: string
    /**
     * Sort number in the list
     * Defaults to: 0
     * @type number
     * @memberof CategoryApicategoryAdd
     */
    sortOrder?: number
    /**
     * Defines unique meta title for each entity
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    metaTitle?: string
    /**
     * Defines unique meta description of a entity
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    metaDescription?: string
    /**
     * Defines unique meta keywords for each entity
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    metaKeywords?: string
    /**
     * Defines unique category\&#39;s URL for SEO
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    seoUrl?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    storeId?: string
    /**
     * Create category in the stores that is specified by comma-separated stores\&#39; id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    storesIds?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAdd
     */
    langId?: string
}

export interface CategoryApiCategoryAddBatchRequest {
    /**
     * 
     * @type CategoryAddBatch
     * @memberof CategoryApicategoryAddBatch
     */
    categoryAddBatch: CategoryAddBatch
}

export interface CategoryApiCategoryAssignRequest {
    /**
     * Defines category assign, specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAssign
     */
    categoryId: string
    /**
     * Defines category assign to the product, specified by product id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAssign
     */
    productId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryAssign
     */
    storeId?: string
}

export interface CategoryApiCategoryCountRequest {
    /**
     * Counts categories specified by parent id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    parentId?: string
    /**
     * Counts category specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    storeId?: string
    /**
     * Counts category specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    langId?: string
    /**
     * Defines category\&#39;s visibility status
     * Defaults to: true
     * @type boolean
     * @memberof CategoryApicategoryCount
     */
    avail?: boolean
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    modifiedTo?: string
    /**
     * A categorization for the product
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    productType?: string
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    findValue?: string
    /**
     * Counts categories that are searched specified by field
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    findWhere?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryCount
     */
    reportRequestId?: string
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof CategoryApicategoryCount
     */
    disableReportCache?: boolean
}

export interface CategoryApiCategoryDeleteRequest {
    /**
     * Defines category removal, specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryDelete
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryDelete
     */
    storeId?: string
}

export interface CategoryApiCategoryFindRequest {
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryFind
     */
    findValue: string
    /**
     * Entity search that is specified by the comma-separated unique fields
     * Defaults to: &#39;name&#39;
     * @type string
     * @memberof CategoryApicategoryFind
     */
    findWhere?: string
    /**
     * Entity search that is specified by comma-separated parameters
     * Defaults to: &#39;whole_words&#39;
     * @type string
     * @memberof CategoryApicategoryFind
     */
    findParams?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryFind
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryFind
     */
    langId?: string
}

export interface CategoryApiCategoryImageAddRequest {
    /**
     * Defines category id where the image should be added
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageAdd
     */
    categoryId: string
    /**
     * Defines image\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageAdd
     */
    imageName: string
    /**
     * Defines URL of the image that has to be added
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageAdd
     */
    url: string
    /**
     * Defines image\&#39;s types that are specified by comma-separated list
     * Defaults to: undefined
     * @type &#39;base&#39; | &#39;thumbnail&#39;
     * @memberof CategoryApicategoryImageAdd
     */
    type: 'base' | 'thumbnail'
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageAdd
     */
    storeId?: string
    /**
     * Defines alternative text that has to be attached to the picture
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageAdd
     */
    label?: string
    /**
     * Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageAdd
     */
    mime?: string
    /**
     * Defines image’s position in the list
     * Defaults to: 0
     * @type number
     * @memberof CategoryApicategoryImageAdd
     */
    position?: number
}

export interface CategoryApiCategoryImageDeleteRequest {
    /**
     * Defines category id where the image should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageDelete
     */
    categoryId: string
    /**
     * Define image id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageDelete
     */
    imageId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryImageDelete
     */
    storeId?: string
}

export interface CategoryApiCategoryInfoRequest {
    /**
     * Retrieves category\&#39;s info specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    id: string
    /**
     * Retrieves category info  specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    storeId?: string
    /**
     * Retrieves category info  specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    langId?: string
    /**
     * The name of the requirements set for the provided schema.
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    schemaType?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,parent_id,name,description&#39;
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    exclude?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryInfo
     */
    reportRequestId?: string
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof CategoryApicategoryInfo
     */
    disableReportCache?: boolean
}

export interface CategoryApiCategoryListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CategoryApicategoryList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CategoryApicategoryList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    pageCursor?: string
    /**
     * Retrieves categories specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    storeId?: string
    /**
     * Retrieves categorys specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    langId?: string
    /**
     * Retrieves categories specified by parent id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    parentId?: string
    /**
     * Defines category\&#39;s visibility status
     * Defaults to: true
     * @type boolean
     * @memberof CategoryApicategoryList
     */
    avail?: boolean
    /**
     * A categorization for the product
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    productType?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    modifiedTo?: string
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    findValue?: string
    /**
     * Category search that is specified by field
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    findWhere?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,parent_id,name,description&#39;
     * @type string
     * @memberof CategoryApicategoryList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    exclude?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryList
     */
    reportRequestId?: string
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof CategoryApicategoryList
     */
    disableReportCache?: boolean
    /**
     * Disable cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof CategoryApicategoryList
     */
    disableCache?: boolean
}

export interface CategoryApiCategoryUnassignRequest {
    /**
     * Defines category unassign, specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUnassign
     */
    categoryId: string
    /**
     * Defines category unassign to the product, specified by product id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUnassign
     */
    productId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUnassign
     */
    storeId?: string
}

export interface CategoryApiCategoryUpdateRequest {
    /**
     * Defines category update specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    id: string
    /**
     * Defines new category’s name
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    name?: string
    /**
     * Defines new category\&#39;s description
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    description?: string
    /**
     * Defines short description
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    shortDescription?: string
    /**
     * Defines new parent category id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    parentId?: string
    /**
     * Defines category\&#39;s visibility status
     * Defaults to: undefined
     * @type boolean
     * @memberof CategoryApicategoryUpdate
     */
    avail?: boolean
    /**
     * Sort number in the list
     * Defaults to: undefined
     * @type number
     * @memberof CategoryApicategoryUpdate
     */
    sortOrder?: number
    /**
     * Entity\&#39;s date modification
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    modifiedTime?: string
    /**
     * Defines unique meta title for each entity
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    metaTitle?: string
    /**
     * Defines unique meta description of a entity
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    metaDescription?: string
    /**
     * Defines unique meta keywords for each entity
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    metaKeywords?: string
    /**
     * Defines unique category\&#39;s URL for SEO
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    seoUrl?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    storeId?: string
    /**
     * Update category in the stores that is specified by comma-separated stores\&#39; id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    storesIds?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryApicategoryUpdate
     */
    langId?: string
}

export class ObjectCategoryApi {
    private api: ObservableCategoryApi

    public constructor(configuration: Configuration, requestFactory?: CategoryApiRequestFactory, responseProcessor?: CategoryApiResponseProcessor) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add new category in store
     * category.add
     * @param param the request object
     */
    public categoryAddWithHttpInfo(param: CategoryApiCategoryAddRequest, options?: Configuration): Promise<HttpInfo<CategoryAdd200Response>> {
        return this.api.categoryAddWithHttpInfo(param.name, param.description, param.shortDescription, param.parentId, param.avail, param.createdTime, param.modifiedTime, param.sortOrder, param.metaTitle, param.metaDescription, param.metaKeywords, param.seoUrl, param.storeId, param.storesIds, param.langId,  options).toPromise();
    }

    /**
     * Add new category in store
     * category.add
     * @param param the request object
     */
    public categoryAdd(param: CategoryApiCategoryAddRequest, options?: Configuration): Promise<CategoryAdd200Response> {
        return this.api.categoryAdd(param.name, param.description, param.shortDescription, param.parentId, param.avail, param.createdTime, param.modifiedTime, param.sortOrder, param.metaTitle, param.metaDescription, param.metaKeywords, param.seoUrl, param.storeId, param.storesIds, param.langId,  options).toPromise();
    }

    /**
     * Add new categories to the store.
     * category.add.batch
     * @param param the request object
     */
    public categoryAddBatchWithHttpInfo(param: CategoryApiCategoryAddBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.categoryAddBatchWithHttpInfo(param.categoryAddBatch,  options).toPromise();
    }

    /**
     * Add new categories to the store.
     * category.add.batch
     * @param param the request object
     */
    public categoryAddBatch(param: CategoryApiCategoryAddBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.categoryAddBatch(param.categoryAddBatch,  options).toPromise();
    }

    /**
     * Assign category to product
     * category.assign
     * @param param the request object
     */
    public categoryAssignWithHttpInfo(param: CategoryApiCategoryAssignRequest, options?: Configuration): Promise<HttpInfo<CategoryAssign200Response>> {
        return this.api.categoryAssignWithHttpInfo(param.categoryId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Assign category to product
     * category.assign
     * @param param the request object
     */
    public categoryAssign(param: CategoryApiCategoryAssignRequest, options?: Configuration): Promise<CategoryAssign200Response> {
        return this.api.categoryAssign(param.categoryId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Count categories in store.
     * category.count
     * @param param the request object
     */
    public categoryCountWithHttpInfo(param: CategoryApiCategoryCountRequest = {}, options?: Configuration): Promise<HttpInfo<CategoryCount200Response>> {
        return this.api.categoryCountWithHttpInfo(param.parentId, param.storeId, param.langId, param.avail, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.productType, param.findValue, param.findWhere, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Count categories in store.
     * category.count
     * @param param the request object
     */
    public categoryCount(param: CategoryApiCategoryCountRequest = {}, options?: Configuration): Promise<CategoryCount200Response> {
        return this.api.categoryCount(param.parentId, param.storeId, param.langId, param.avail, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.productType, param.findValue, param.findWhere, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Delete category in store
     * category.delete
     * @param param the request object
     */
    public categoryDeleteWithHttpInfo(param: CategoryApiCategoryDeleteRequest, options?: Configuration): Promise<HttpInfo<CategoryDelete200Response>> {
        return this.api.categoryDeleteWithHttpInfo(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Delete category in store
     * category.delete
     * @param param the request object
     */
    public categoryDelete(param: CategoryApiCategoryDeleteRequest, options?: Configuration): Promise<CategoryDelete200Response> {
        return this.api.categoryDelete(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Search category in store. \"Laptop\" is specified here by default.
     * category.find
     * @param param the request object
     */
    public categoryFindWithHttpInfo(param: CategoryApiCategoryFindRequest, options?: Configuration): Promise<HttpInfo<CategoryFind200Response>> {
        return this.api.categoryFindWithHttpInfo(param.findValue, param.findWhere, param.findParams, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Search category in store. \"Laptop\" is specified here by default.
     * category.find
     * @param param the request object
     */
    public categoryFind(param: CategoryApiCategoryFindRequest, options?: Configuration): Promise<CategoryFind200Response> {
        return this.api.categoryFind(param.findValue, param.findWhere, param.findParams, param.storeId, param.langId,  options).toPromise();
    }

    /**
     * Add image to category
     * category.image.add
     * @param param the request object
     */
    public categoryImageAddWithHttpInfo(param: CategoryApiCategoryImageAddRequest, options?: Configuration): Promise<HttpInfo<CategoryImageAdd200Response>> {
        return this.api.categoryImageAddWithHttpInfo(param.categoryId, param.imageName, param.url, param.type, param.storeId, param.label, param.mime, param.position,  options).toPromise();
    }

    /**
     * Add image to category
     * category.image.add
     * @param param the request object
     */
    public categoryImageAdd(param: CategoryApiCategoryImageAddRequest, options?: Configuration): Promise<CategoryImageAdd200Response> {
        return this.api.categoryImageAdd(param.categoryId, param.imageName, param.url, param.type, param.storeId, param.label, param.mime, param.position,  options).toPromise();
    }

    /**
     * Delete image
     * category.image.delete
     * @param param the request object
     */
    public categoryImageDeleteWithHttpInfo(param: CategoryApiCategoryImageDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.categoryImageDeleteWithHttpInfo(param.categoryId, param.imageId, param.storeId,  options).toPromise();
    }

    /**
     * Delete image
     * category.image.delete
     * @param param the request object
     */
    public categoryImageDelete(param: CategoryApiCategoryImageDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.categoryImageDelete(param.categoryId, param.imageId, param.storeId,  options).toPromise();
    }

    /**
     * Get category info about category ID*** or specify other category ID.
     * category.info
     * @param param the request object
     */
    public categoryInfoWithHttpInfo(param: CategoryApiCategoryInfoRequest, options?: Configuration): Promise<HttpInfo<CategoryInfo200Response>> {
        return this.api.categoryInfoWithHttpInfo(param.id, param.storeId, param.langId, param.schemaType, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Get category info about category ID*** or specify other category ID.
     * category.info
     * @param param the request object
     */
    public categoryInfo(param: CategoryApiCategoryInfoRequest, options?: Configuration): Promise<CategoryInfo200Response> {
        return this.api.categoryInfo(param.id, param.storeId, param.langId, param.schemaType, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Get list of categories from store.
     * category.list
     * @param param the request object
     */
    public categoryListWithHttpInfo(param: CategoryApiCategoryListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCategoryList>> {
        return this.api.categoryListWithHttpInfo(param.start, param.count, param.pageCursor, param.storeId, param.langId, param.parentId, param.avail, param.productType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.findValue, param.findWhere, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache, param.disableCache,  options).toPromise();
    }

    /**
     * Get list of categories from store.
     * category.list
     * @param param the request object
     */
    public categoryList(param: CategoryApiCategoryListRequest = {}, options?: Configuration): Promise<ModelResponseCategoryList> {
        return this.api.categoryList(param.start, param.count, param.pageCursor, param.storeId, param.langId, param.parentId, param.avail, param.productType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.findValue, param.findWhere, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache, param.disableCache,  options).toPromise();
    }

    /**
     * Unassign category to product
     * category.unassign
     * @param param the request object
     */
    public categoryUnassignWithHttpInfo(param: CategoryApiCategoryUnassignRequest, options?: Configuration): Promise<HttpInfo<CategoryAssign200Response>> {
        return this.api.categoryUnassignWithHttpInfo(param.categoryId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Unassign category to product
     * category.unassign
     * @param param the request object
     */
    public categoryUnassign(param: CategoryApiCategoryUnassignRequest, options?: Configuration): Promise<CategoryAssign200Response> {
        return this.api.categoryUnassign(param.categoryId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Update category in store
     * category.update
     * @param param the request object
     */
    public categoryUpdateWithHttpInfo(param: CategoryApiCategoryUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.categoryUpdateWithHttpInfo(param.id, param.name, param.description, param.shortDescription, param.parentId, param.avail, param.sortOrder, param.modifiedTime, param.metaTitle, param.metaDescription, param.metaKeywords, param.seoUrl, param.storeId, param.storesIds, param.langId,  options).toPromise();
    }

    /**
     * Update category in store
     * category.update
     * @param param the request object
     */
    public categoryUpdate(param: CategoryApiCategoryUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.categoryUpdate(param.id, param.name, param.description, param.shortDescription, param.parentId, param.avail, param.sortOrder, param.modifiedTime, param.metaTitle, param.metaDescription, param.metaKeywords, param.seoUrl, param.storeId, param.storesIds, param.langId,  options).toPromise();
    }

}

import { ObservableCustomerApi } from "./ObservableAPI";
import { CustomerApiRequestFactory, CustomerApiResponseProcessor} from "../apis/CustomerApi";

export interface CustomerApiCustomerAddRequest {
    /**
     * 
     * @type CustomerAdd
     * @memberof CustomerApicustomerAdd
     */
    customerAdd: CustomerAdd
}

export interface CustomerApiCustomerAddressAddRequest {
    /**
     * 
     * @type CustomerAddressAdd
     * @memberof CustomerApicustomerAddressAdd
     */
    customerAddressAdd: CustomerAddressAdd
}

export interface CustomerApiCustomerAttributeListRequest {
    /**
     * Retrieves orders specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerAttributeList
     */
    customerId: string
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CustomerApicustomerAttributeList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerAttributeList
     */
    pageCursor?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerAttributeList
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerAttributeList
     */
    langId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerAttributeList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof CustomerApicustomerAttributeList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerAttributeList
     */
    exclude?: string
}

export interface CustomerApiCustomerCountRequest {
    /**
     * Counts customers specified by ids
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    ids?: string
    /**
     * Retrieve entities starting from the specified id.
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    sinceId?: string
    /**
     * The numeric ID of the customer list in Demandware.
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    customerListId?: string
    /**
     * Customer group_id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    groupId?: string
    /**
     * Counts customer specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    storeId?: string
    /**
     * Defines category\&#39;s visibility status
     * Defaults to: true
     * @type boolean
     * @memberof CustomerApicustomerCount
     */
    avail?: boolean
    /**
     * Indicates whether to include guest customers in the total count.
     * Defaults to: false
     * @type boolean
     * @memberof CustomerApicustomerCount
     */
    includeGuests?: boolean
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    findValue?: string
    /**
     * Counts customers that are searched specified by field
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    findWhere?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerCount
     */
    modifiedTo?: string
}

export interface CustomerApiCustomerDeleteRequest {
    /**
     * Identifies customer specified by the id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerDelete
     */
    id: string
}

export interface CustomerApiCustomerFindRequest {
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerFind
     */
    findValue: string
    /**
     * Entity search that is specified by the comma-separated unique fields
     * Defaults to: &#39;email&#39;
     * @type string
     * @memberof CustomerApicustomerFind
     */
    findWhere?: string
    /**
     * Entity search that is specified by comma-separated parameters
     * Defaults to: &#39;whole_words&#39;
     * @type string
     * @memberof CustomerApicustomerFind
     */
    findParams?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerFind
     */
    storeId?: string
    /**
     * Indicates whether to search among guest customers when looking up a customer.
     * Defaults to: false
     * @type boolean
     * @memberof CustomerApicustomerFind
     */
    includeGuests?: boolean
}

export interface CustomerApiCustomerGroupAddRequest {
    /**
     * Customer group name
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupAdd
     */
    name: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupAdd
     */
    storeId?: string
    /**
     * Assign customer group to the stores that is specified by comma-separated stores\&#39; id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupAdd
     */
    storesIds?: string
}

export interface CustomerApiCustomerGroupListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CustomerApicustomerGroupList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CustomerApicustomerGroupList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupList
     */
    pageCursor?: string
    /**
     * Groups that will be assigned to a customer
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupList
     */
    groupIds?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupList
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupList
     */
    langId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,additional_fields&#39;
     * @type string
     * @memberof CustomerApicustomerGroupList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerGroupList
     */
    exclude?: string
    /**
     * Disable cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof CustomerApicustomerGroupList
     */
    disableCache?: boolean
}

export interface CustomerApiCustomerInfoRequest {
    /**
     * Retrieves customer\&#39;s info specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerInfo
     */
    id: string
    /**
     * Retrieves customer info specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerInfo
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,email,first_name,last_name&#39;
     * @type string
     * @memberof CustomerApicustomerInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerInfo
     */
    exclude?: string
}

export interface CustomerApiCustomerListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CustomerApicustomerList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CustomerApicustomerList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    pageCursor?: string
    /**
     * Retrieves customers specified by ids
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    ids?: string
    /**
     * Retrieve entities starting from the specified id.
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    sinceId?: string
    /**
     * The numeric ID of the customer list in Demandware.
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    customerListId?: string
    /**
     * Customer group_id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    groupId?: string
    /**
     * Retrieves customers specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    storeId?: string
    /**
     * Defines category\&#39;s visibility status
     * Defaults to: true
     * @type boolean
     * @memberof CustomerApicustomerList
     */
    avail?: boolean
    /**
     * Indicates whether to include guest customers in the list results.
     * Defaults to: false
     * @type boolean
     * @memberof CustomerApicustomerList
     */
    includeGuests?: boolean
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    findValue?: string
    /**
     * Customer search that is specified by field
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    findWhere?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    modifiedTo?: string
    /**
     * Set field to sort by
     * Defaults to: &#39;created_time&#39;
     * @type string
     * @memberof CustomerApicustomerList
     */
    sortBy?: string
    /**
     * Set sorting direction
     * Defaults to: &#39;asc&#39;
     * @type string
     * @memberof CustomerApicustomerList
     */
    sortDirection?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,email,first_name,last_name&#39;
     * @type string
     * @memberof CustomerApicustomerList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerList
     */
    exclude?: string
}

export interface CustomerApiCustomerUpdateRequest {
    /**
     * 
     * @type CustomerUpdate
     * @memberof CustomerApicustomerUpdate
     */
    customerUpdate: CustomerUpdate
}

export interface CustomerApiCustomerWishlistListRequest {
    /**
     * Retrieves orders specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerWishlistList
     */
    customerId: string
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof CustomerApicustomerWishlistList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof CustomerApicustomerWishlistList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerWishlistList
     */
    pageCursor?: string
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerWishlistList
     */
    id?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof CustomerApicustomerWishlistList
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;{return_code,return_message,pagination,result}&#39;
     * @type string
     * @memberof CustomerApicustomerWishlistList
     */
    responseFields?: string
}

export class ObjectCustomerApi {
    private api: ObservableCustomerApi

    public constructor(configuration: Configuration, requestFactory?: CustomerApiRequestFactory, responseProcessor?: CustomerApiResponseProcessor) {
        this.api = new ObservableCustomerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add customer into store.
     * customer.add
     * @param param the request object
     */
    public customerAddWithHttpInfo(param: CustomerApiCustomerAddRequest, options?: Configuration): Promise<HttpInfo<CustomerAdd200Response>> {
        return this.api.customerAddWithHttpInfo(param.customerAdd,  options).toPromise();
    }

    /**
     * Add customer into store.
     * customer.add
     * @param param the request object
     */
    public customerAdd(param: CustomerApiCustomerAddRequest, options?: Configuration): Promise<CustomerAdd200Response> {
        return this.api.customerAdd(param.customerAdd,  options).toPromise();
    }

    /**
     * Add customer address.
     * customer.address.add
     * @param param the request object
     */
    public customerAddressAddWithHttpInfo(param: CustomerApiCustomerAddressAddRequest, options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        return this.api.customerAddressAddWithHttpInfo(param.customerAddressAdd,  options).toPromise();
    }

    /**
     * Add customer address.
     * customer.address.add
     * @param param the request object
     */
    public customerAddressAdd(param: CustomerApiCustomerAddressAddRequest, options?: Configuration): Promise<AttributeAdd200Response> {
        return this.api.customerAddressAdd(param.customerAddressAdd,  options).toPromise();
    }

    /**
     * Get attributes for specific customer
     * customer.attribute.list
     * @param param the request object
     */
    public customerAttributeListWithHttpInfo(param: CustomerApiCustomerAttributeListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseCustomerAttributeList>> {
        return this.api.customerAttributeListWithHttpInfo(param.customerId, param.count, param.pageCursor, param.storeId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get attributes for specific customer
     * customer.attribute.list
     * @param param the request object
     */
    public customerAttributeList(param: CustomerApiCustomerAttributeListRequest, options?: Configuration): Promise<ModelResponseCustomerAttributeList> {
        return this.api.customerAttributeList(param.customerId, param.count, param.pageCursor, param.storeId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get number of customers from store.
     * customer.count
     * @param param the request object
     */
    public customerCountWithHttpInfo(param: CustomerApiCustomerCountRequest = {}, options?: Configuration): Promise<HttpInfo<CustomerCount200Response>> {
        return this.api.customerCountWithHttpInfo(param.ids, param.sinceId, param.customerListId, param.groupId, param.storeId, param.avail, param.includeGuests, param.findValue, param.findWhere, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo,  options).toPromise();
    }

    /**
     * Get number of customers from store.
     * customer.count
     * @param param the request object
     */
    public customerCount(param: CustomerApiCustomerCountRequest = {}, options?: Configuration): Promise<CustomerCount200Response> {
        return this.api.customerCount(param.ids, param.sinceId, param.customerListId, param.groupId, param.storeId, param.avail, param.includeGuests, param.findValue, param.findWhere, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo,  options).toPromise();
    }

    /**
     * Delete customer from store.
     * customer.delete
     * @param param the request object
     */
    public customerDeleteWithHttpInfo(param: CustomerApiCustomerDeleteRequest, options?: Configuration): Promise<HttpInfo<CustomerDelete200Response>> {
        return this.api.customerDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete customer from store.
     * customer.delete
     * @param param the request object
     */
    public customerDelete(param: CustomerApiCustomerDeleteRequest, options?: Configuration): Promise<CustomerDelete200Response> {
        return this.api.customerDelete(param.id,  options).toPromise();
    }

    /**
     * Find customers in store.
     * customer.find
     * @param param the request object
     */
    public customerFindWithHttpInfo(param: CustomerApiCustomerFindRequest, options?: Configuration): Promise<HttpInfo<CustomerFind200Response>> {
        return this.api.customerFindWithHttpInfo(param.findValue, param.findWhere, param.findParams, param.storeId, param.includeGuests,  options).toPromise();
    }

    /**
     * Find customers in store.
     * customer.find
     * @param param the request object
     */
    public customerFind(param: CustomerApiCustomerFindRequest, options?: Configuration): Promise<CustomerFind200Response> {
        return this.api.customerFind(param.findValue, param.findWhere, param.findParams, param.storeId, param.includeGuests,  options).toPromise();
    }

    /**
     * Create customer group.
     * customer.group.add
     * @param param the request object
     */
    public customerGroupAddWithHttpInfo(param: CustomerApiCustomerGroupAddRequest, options?: Configuration): Promise<HttpInfo<CustomerGroupAdd200Response>> {
        return this.api.customerGroupAddWithHttpInfo(param.name, param.storeId, param.storesIds,  options).toPromise();
    }

    /**
     * Create customer group.
     * customer.group.add
     * @param param the request object
     */
    public customerGroupAdd(param: CustomerApiCustomerGroupAddRequest, options?: Configuration): Promise<CustomerGroupAdd200Response> {
        return this.api.customerGroupAdd(param.name, param.storeId, param.storesIds,  options).toPromise();
    }

    /**
     * Get list of customers groups.
     * customer.group.list
     * @param param the request object
     */
    public customerGroupListWithHttpInfo(param: CustomerApiCustomerGroupListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCustomerGroupList>> {
        return this.api.customerGroupListWithHttpInfo(param.start, param.count, param.pageCursor, param.groupIds, param.storeId, param.langId, param.responseFields, param.params, param.exclude, param.disableCache,  options).toPromise();
    }

    /**
     * Get list of customers groups.
     * customer.group.list
     * @param param the request object
     */
    public customerGroupList(param: CustomerApiCustomerGroupListRequest = {}, options?: Configuration): Promise<ModelResponseCustomerGroupList> {
        return this.api.customerGroupList(param.start, param.count, param.pageCursor, param.groupIds, param.storeId, param.langId, param.responseFields, param.params, param.exclude, param.disableCache,  options).toPromise();
    }

    /**
     * Get customers\' details from store.
     * customer.info
     * @param param the request object
     */
    public customerInfoWithHttpInfo(param: CustomerApiCustomerInfoRequest, options?: Configuration): Promise<HttpInfo<CustomerInfo200Response>> {
        return this.api.customerInfoWithHttpInfo(param.id, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get customers\' details from store.
     * customer.info
     * @param param the request object
     */
    public customerInfo(param: CustomerApiCustomerInfoRequest, options?: Configuration): Promise<CustomerInfo200Response> {
        return this.api.customerInfo(param.id, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of customers from store.
     * customer.list
     * @param param the request object
     */
    public customerListWithHttpInfo(param: CustomerApiCustomerListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseCustomerList>> {
        return this.api.customerListWithHttpInfo(param.start, param.count, param.pageCursor, param.ids, param.sinceId, param.customerListId, param.groupId, param.storeId, param.avail, param.includeGuests, param.findValue, param.findWhere, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.sortBy, param.sortDirection, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of customers from store.
     * customer.list
     * @param param the request object
     */
    public customerList(param: CustomerApiCustomerListRequest = {}, options?: Configuration): Promise<ModelResponseCustomerList> {
        return this.api.customerList(param.start, param.count, param.pageCursor, param.ids, param.sinceId, param.customerListId, param.groupId, param.storeId, param.avail, param.includeGuests, param.findValue, param.findWhere, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.sortBy, param.sortDirection, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Update information of customer in store.
     * customer.update
     * @param param the request object
     */
    public customerUpdateWithHttpInfo(param: CustomerApiCustomerUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.customerUpdateWithHttpInfo(param.customerUpdate,  options).toPromise();
    }

    /**
     * Update information of customer in store.
     * customer.update
     * @param param the request object
     */
    public customerUpdate(param: CustomerApiCustomerUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.customerUpdate(param.customerUpdate,  options).toPromise();
    }

    /**
     * Get a Wish List of customer from the store.
     * customer.wishlist.list
     * @param param the request object
     */
    public customerWishlistListWithHttpInfo(param: CustomerApiCustomerWishlistListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseCustomerWishlistList>> {
        return this.api.customerWishlistListWithHttpInfo(param.customerId, param.start, param.count, param.pageCursor, param.id, param.storeId, param.responseFields,  options).toPromise();
    }

    /**
     * Get a Wish List of customer from the store.
     * customer.wishlist.list
     * @param param the request object
     */
    public customerWishlistList(param: CustomerApiCustomerWishlistListRequest, options?: Configuration): Promise<ModelResponseCustomerWishlistList> {
        return this.api.customerWishlistList(param.customerId, param.start, param.count, param.pageCursor, param.id, param.storeId, param.responseFields,  options).toPromise();
    }

}

import { ObservableMarketplaceApi } from "./ObservableAPI";
import { MarketplaceApiRequestFactory, MarketplaceApiResponseProcessor} from "../apis/MarketplaceApi";

export interface MarketplaceApiMarketplaceProductFindRequest {
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof MarketplaceApimarketplaceProductFind
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    pageCursor?: string
    /**
     * Defines search keyword
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    keyword?: string
    /**
     * Defines product add that is specified by comma-separated categories id
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    categoriesIds?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    storeId?: string
    /**
     * Amazon Standard Identification Number.
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    asin?: string
    /**
     * European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    ean?: string
    /**
     * Global Trade Item Number. An GTIN is an identifier for trade items.
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    gtin?: string
    /**
     * Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    upc?: string
    /**
     * Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    mpn?: string
    /**
     * International Standard Book Number. An ISBN is a unique identifier for books.
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    isbn?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof MarketplaceApimarketplaceProductFind
     */
    exclude?: string
}

export class ObjectMarketplaceApi {
    private api: ObservableMarketplaceApi

    public constructor(configuration: Configuration, requestFactory?: MarketplaceApiRequestFactory, responseProcessor?: MarketplaceApiResponseProcessor) {
        this.api = new ObservableMarketplaceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search product in global catalog.
     * marketplace.product.find
     * @param param the request object
     */
    public marketplaceProductFindWithHttpInfo(param: MarketplaceApiMarketplaceProductFindRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseMarketplaceProductFind>> {
        return this.api.marketplaceProductFindWithHttpInfo(param.count, param.pageCursor, param.keyword, param.categoriesIds, param.storeId, param.asin, param.ean, param.gtin, param.upc, param.mpn, param.isbn, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Search product in global catalog.
     * marketplace.product.find
     * @param param the request object
     */
    public marketplaceProductFind(param: MarketplaceApiMarketplaceProductFindRequest = {}, options?: Configuration): Promise<ModelResponseMarketplaceProductFind> {
        return this.api.marketplaceProductFind(param.count, param.pageCursor, param.keyword, param.categoriesIds, param.storeId, param.asin, param.ean, param.gtin, param.upc, param.mpn, param.isbn, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

}

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiOrderAbandonedListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof OrderApiorderAbandonedList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof OrderApiorderAbandonedList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    pageCursor?: string
    /**
     * Retrieves orders specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    customerId?: string
    /**
     * Retrieves orders specified by customer email
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    customerEmail?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    storeId?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    modifiedTo?: string
    /**
     * Filter empty emails
     * Defaults to: false
     * @type boolean
     * @memberof OrderApiorderAbandonedList
     */
    skipEmptyEmail?: boolean
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;customer,totals,items&#39;
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderAbandonedList
     */
    exclude?: string
}

export interface OrderApiOrderAddRequest {
    /**
     * 
     * @type OrderAdd
     * @memberof OrderApiorderAdd
     */
    orderAdd: OrderAdd
}

export interface OrderApiOrderCalculateRequest {
    /**
     * 
     * @type OrderCalculate
     * @memberof OrderApiorderCalculate
     */
    orderCalculate: OrderCalculate
}

export interface OrderApiOrderCountRequest {
    /**
     * Counts orders specified by order ids
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    orderIds?: string
    /**
     * Counts orders specified by ids
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    ids?: string
    /**
     * Counts orders quantity specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    customerId?: string
    /**
     * Counts orders quantity specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    storeId?: string
    /**
     * Counts orders quantity specified by customer email
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    customerEmail?: string
    /**
     * Counts orders quantity specified by order status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    orderStatus?: string
    /**
     * Retrieves orders specified by order statuses
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrderApiorderCount
     */
    orderStatusIds?: Array<string>
    /**
     * Counts orders quantity specified by order status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    ebayOrderStatus?: string
    /**
     * Counts orders quantity specified by financial status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    financialStatus?: string
    /**
     * Retrieves orders count specified by financial status ids
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrderApiorderCount
     */
    financialStatusIds?: Array<string>
    /**
     * Retrieves order with a fulfillment channel
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    fulfillmentChannel?: string
    /**
     * Create order with fulfillment status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    fulfillmentStatus?: string
    /**
     * Retrieve entities according to shipping method
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    shippingMethod?: string
    /**
     * Retrieves order with delivery method
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    deliveryMethod?: string
    /**
     * Order tags
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    tags?: string
    /**
     * Retrieves order with ship node type
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    shipNodeType?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderCount
     */
    modifiedTo?: string
}

export interface OrderApiOrderFinancialStatusListRequest {
}

export interface OrderApiOrderFulfillmentStatusListRequest {
    /**
     * Available statuses for the specified action.
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderFulfillmentStatusList
     */
    action?: string
}

export interface OrderApiOrderInfoRequest {
    /**
     * Retrieves order info specified by id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderInfo
     */
    id?: string
    /**
     * Retrieves order’s info specified by order id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderInfo
     */
    orderId?: string
    /**
     * Defines store id where the order should be found
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderInfo
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;order_id,customer,totals,address,items,bundles,status&#39;
     * @type string
     * @memberof OrderApiorderInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderInfo
     */
    exclude?: string
    /**
     * If the value is \&#39;true\&#39; and order exist in our cache, we will return order.info response from cache
     * Defaults to: false
     * @type boolean
     * @memberof OrderApiorderInfo
     */
    enableCache?: boolean
    /**
     * Use the latest platform API version
     * Defaults to: false
     * @type boolean
     * @memberof OrderApiorderInfo
     */
    useLatestApiVersion?: boolean
    /**
     * &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt;
     * Defaults to: undefined
     * @type number
     * @memberof OrderApiorderInfo
     */
    roundingPrecision?: number
}

export interface OrderApiOrderListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof OrderApiorderList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof OrderApiorderList
     */
    count?: number
    /**
     * Used to retrieve orders via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    pageCursor?: string
    /**
     * Retrieves orders specified by ids
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    ids?: string
    /**
     * Retrieves orders specified by order ids
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    orderIds?: string
    /**
     * Retrieve entities starting from the specified id.
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    sinceId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    storeId?: string
    /**
     * Retrieves orders specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    customerId?: string
    /**
     * Retrieves orders specified by customer email
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    customerEmail?: string
    /**
     * Retrieves order’s info specified by basket id.
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    basketId?: string
    /**
     * Currency Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    currencyId?: string
    /**
     * Filter orders by customer\&#39;s phone number
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    phone?: string
    /**
     * Retrieves orders specified by order status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    orderStatus?: string
    /**
     * Retrieves orders specified by order statuses
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrderApiorderList
     */
    orderStatusIds?: Array<string>
    /**
     * Retrieves orders specified by order status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    ebayOrderStatus?: string
    /**
     * Retrieves orders specified by financial status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    financialStatus?: string
    /**
     * Retrieves orders specified by financial status ids
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrderApiorderList
     */
    financialStatusIds?: Array<string>
    /**
     * Create order with fulfillment status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    fulfillmentStatus?: string
    /**
     * Retrieves orders specified by return status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    returnStatus?: string
    /**
     * Retrieves order with a fulfillment channel
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    fulfillmentChannel?: string
    /**
     * Retrieve entities according to shipping method
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    shippingMethod?: string
    /**
     * Skipped orders by ids
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    skipOrderIds?: string
    /**
     * Filter deleted orders
     * Defaults to: undefined
     * @type boolean
     * @memberof OrderApiorderList
     */
    isDeleted?: boolean
    /**
     * Retrieve entities according to shipping country
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    shippingCountryIso3?: string
    /**
     * Retrieves order with delivery method
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    deliveryMethod?: string
    /**
     * Retrieves order with ship node type
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    shipNodeType?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    createdTo?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    modifiedTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    modifiedFrom?: string
    /**
     * Order tags
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    tags?: string
    /**
     * Set field to sort by
     * Defaults to: &#39;order_id&#39;
     * @type string
     * @memberof OrderApiorderList
     */
    sortBy?: string
    /**
     * Set sorting direction
     * Defaults to: &#39;asc&#39;
     * @type string
     * @memberof OrderApiorderList
     */
    sortDirection?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;order_id,customer,totals,address,items,bundles,status&#39;
     * @type string
     * @memberof OrderApiorderList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderList
     */
    exclude?: string
    /**
     * If the value is \&#39;true\&#39;, we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)
     * Defaults to: false
     * @type boolean
     * @memberof OrderApiorderList
     */
    enableCache?: boolean
    /**
     * Use the latest platform API version
     * Defaults to: false
     * @type boolean
     * @memberof OrderApiorderList
     */
    useLatestApiVersion?: boolean
    /**
     * &lt;p&gt;Specifies the rounding precision for fractional numeric values (such as prices, taxes, and weights).&lt;/p&gt; &lt;p&gt;Supported values range from &lt;b&gt;1&lt;/b&gt; to &lt;b&gt;6&lt;/b&gt;.&lt;/p&gt; &lt;p&gt;The default rounding precision may vary depending on the platform. You can retrieve the default value using the &lt;strong&gt;cart.info&lt;/strong&gt; method in the &lt;code&gt;default_rounding_precision&lt;/code&gt; field. &lt;/p&gt;&lt;p&gt;Values are rounded to the nearest number at the specified precision. Fractions of .5 or higher are rounded up, while fractions lower than .5 are rounded down.&lt;/p&gt;
     * Defaults to: undefined
     * @type number
     * @memberof OrderApiorderList
     */
    roundingPrecision?: number
}

export interface OrderApiOrderPreestimateShippingListRequest {
    /**
     * 
     * @type OrderPreestimateShippingList
     * @memberof OrderApiorderPreestimateShippingList
     */
    orderPreestimateShippingList: OrderPreestimateShippingList
}

export interface OrderApiOrderRefundAddRequest {
    /**
     * 
     * @type OrderRefundAdd
     * @memberof OrderApiorderRefundAdd
     */
    orderRefundAdd: OrderRefundAdd
}

export interface OrderApiOrderReturnAddRequest {
    /**
     * 
     * @type OrderReturnAdd
     * @memberof OrderApiorderReturnAdd
     */
    orderReturnAdd: OrderReturnAdd
}

export interface OrderApiOrderReturnDeleteRequest {
    /**
     * Return ID
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderReturnDelete
     */
    returnId: string
    /**
     * Defines the order id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderReturnDelete
     */
    orderId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderReturnDelete
     */
    storeId?: string
}

export interface OrderApiOrderReturnUpdateRequest {
    /**
     * 
     * @type OrderReturnUpdate
     * @memberof OrderApiorderReturnUpdate
     */
    orderReturnUpdate: OrderReturnUpdate
}

export interface OrderApiOrderShipmentAddRequest {
    /**
     * 
     * @type OrderShipmentAdd
     * @memberof OrderApiorderShipmentAdd
     */
    orderShipmentAdd: OrderShipmentAdd
}

export interface OrderApiOrderShipmentAddBatchRequest {
    /**
     * 
     * @type OrderShipmentAddBatch
     * @memberof OrderApiorderShipmentAddBatch
     */
    orderShipmentAddBatch: OrderShipmentAddBatch
}

export interface OrderApiOrderShipmentDeleteRequest {
    /**
     * Shipment id indicates the number of delivery
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentDelete
     */
    shipmentId: string
    /**
     * Defines the order for which the shipment will be deleted
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentDelete
     */
    orderId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentDelete
     */
    storeId?: string
}

export interface OrderApiOrderShipmentInfoRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentInfo
     */
    id: string
    /**
     * Defines the order id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentInfo
     */
    orderId: string
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof OrderApiorderShipmentInfo
     */
    start?: number
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentInfo
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,order_id,items,tracking_numbers&#39;
     * @type string
     * @memberof OrderApiorderShipmentInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentInfo
     */
    exclude?: string
}

export interface OrderApiOrderShipmentListRequest {
    /**
     * Retrieves shipments specified by order id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    orderId: string
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof OrderApiorderShipmentList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof OrderApiorderShipmentList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    pageCursor?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    storeId?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    modifiedTo?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,order_id,items,tracking_numbers&#39;
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderShipmentList
     */
    exclude?: string
}

export interface OrderApiOrderShipmentTrackingAddRequest {
    /**
     * 
     * @type OrderShipmentTrackingAdd
     * @memberof OrderApiorderShipmentTrackingAdd
     */
    orderShipmentTrackingAdd: OrderShipmentTrackingAdd
}

export interface OrderApiOrderShipmentUpdateRequest {
    /**
     * 
     * @type OrderShipmentUpdate
     * @memberof OrderApiorderShipmentUpdate
     */
    orderShipmentUpdate: OrderShipmentUpdate
}

export interface OrderApiOrderStatusListRequest {
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderStatusList
     */
    storeId?: string
    /**
     * Available statuses for the specified action.
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderStatusList
     */
    action?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderStatusList
     */
    responseFields?: string
}

export interface OrderApiOrderTransactionListRequest {
    /**
     * Retrieves order transactions specified by order ids
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderTransactionList
     */
    orderIds: string
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof OrderApiorderTransactionList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderTransactionList
     */
    pageCursor?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderTransactionList
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,order_id,amount,description&#39;
     * @type string
     * @memberof OrderApiorderTransactionList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderTransactionList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderTransactionList
     */
    exclude?: string
}

export interface OrderApiOrderUpdateRequest {
    /**
     * Defines the orders specified by order id
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    orderId: string
    /**
     * Defines store id where the order should be found
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    storeId?: string
    /**
     * Defines new order\&#39;s status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    orderStatus?: string
    /**
     * Update order financial status to specified
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    financialStatus?: string
    /**
     * Create order with fulfillment status
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    fulfillmentStatus?: string
    /**
     * Defines the cancellation reason when the order will be canceled
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    cancellationReason?: string
    /**
     * Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to \&#39;paid\&#39;
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    orderPaymentMethod?: string
    /**
     * Specifies order comment
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    comment?: string
    /**
     * Specifies admin\&#39;s order comment
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    adminComment?: string
    /**
     * Specifies private admin\&#39;s order comment
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    adminPrivateComment?: string
    /**
     * Specifies admin\&#39;s order invoice comment
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    invoiceAdminComment?: string
    /**
     * Specifies order\&#39;s  modification date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    dateModified?: string
    /**
     * Specifies order\&#39;s  finished date
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    dateFinished?: string
    /**
     * Send notifications to customer after order was created
     * Defaults to: false
     * @type boolean
     * @memberof OrderApiorderUpdate
     */
    sendNotifications?: boolean
    /**
     * Determines whether an invoice should be created if it has not already been created
     * Defaults to: undefined
     * @type boolean
     * @memberof OrderApiorderUpdate
     */
    createInvoice?: boolean
    /**
     * The source of the order
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    origin?: string
    /**
     * Order tags
     * Defaults to: undefined
     * @type string
     * @memberof OrderApiorderUpdate
     */
    tags?: string
}

export class ObjectOrderApi {
    private api: ObservableOrderApi

    public constructor(configuration: Configuration, requestFactory?: OrderApiRequestFactory, responseProcessor?: OrderApiResponseProcessor) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of orders that were left by customers before completing the order.
     * order.abandoned.list
     * @param param the request object
     */
    public orderAbandonedListWithHttpInfo(param: OrderApiOrderAbandonedListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseOrderAbandonedList>> {
        return this.api.orderAbandonedListWithHttpInfo(param.start, param.count, param.pageCursor, param.customerId, param.customerEmail, param.storeId, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.skipEmptyEmail, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of orders that were left by customers before completing the order.
     * order.abandoned.list
     * @param param the request object
     */
    public orderAbandonedList(param: OrderApiOrderAbandonedListRequest = {}, options?: Configuration): Promise<ModelResponseOrderAbandonedList> {
        return this.api.orderAbandonedList(param.start, param.count, param.pageCursor, param.customerId, param.customerEmail, param.storeId, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.skipEmptyEmail, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Add a new order to the cart.
     * order.add
     * @param param the request object
     */
    public orderAddWithHttpInfo(param: OrderApiOrderAddRequest, options?: Configuration): Promise<HttpInfo<OrderAdd200Response>> {
        return this.api.orderAddWithHttpInfo(param.orderAdd,  options).toPromise();
    }

    /**
     * Add a new order to the cart.
     * order.add
     * @param param the request object
     */
    public orderAdd(param: OrderApiOrderAddRequest, options?: Configuration): Promise<OrderAdd200Response> {
        return this.api.orderAdd(param.orderAdd,  options).toPromise();
    }

    /**
     * <p>Calculates the total cost of an order for a given customer and a set of products, as well as the available shipping methods based on the specified address. The calculation takes into account store product prices, discounts, taxes, shipping costs, and other store settings. The result includes a detailed breakdown of the final order cost by its components.</p> <p>Note that the final totals, taxes, and other amounts must include the corresponding values for the selected shipping method.</p><p>The result of this method can be used when creating an order using the <strong>order.add</strong> method.</p>
     * order.calculate
     * @param param the request object
     */
    public orderCalculateWithHttpInfo(param: OrderApiOrderCalculateRequest, options?: Configuration): Promise<HttpInfo<OrderCalculate200Response>> {
        return this.api.orderCalculateWithHttpInfo(param.orderCalculate,  options).toPromise();
    }

    /**
     * <p>Calculates the total cost of an order for a given customer and a set of products, as well as the available shipping methods based on the specified address. The calculation takes into account store product prices, discounts, taxes, shipping costs, and other store settings. The result includes a detailed breakdown of the final order cost by its components.</p> <p>Note that the final totals, taxes, and other amounts must include the corresponding values for the selected shipping method.</p><p>The result of this method can be used when creating an order using the <strong>order.add</strong> method.</p>
     * order.calculate
     * @param param the request object
     */
    public orderCalculate(param: OrderApiOrderCalculateRequest, options?: Configuration): Promise<OrderCalculate200Response> {
        return this.api.orderCalculate(param.orderCalculate,  options).toPromise();
    }

    /**
     * Count orders in store
     * order.count
     * @param param the request object
     */
    public orderCountWithHttpInfo(param: OrderApiOrderCountRequest = {}, options?: Configuration): Promise<HttpInfo<OrderCount200Response>> {
        return this.api.orderCountWithHttpInfo(param.orderIds, param.ids, param.customerId, param.storeId, param.customerEmail, param.orderStatus, param.orderStatusIds, param.ebayOrderStatus, param.financialStatus, param.financialStatusIds, param.fulfillmentChannel, param.fulfillmentStatus, param.shippingMethod, param.deliveryMethod, param.tags, param.shipNodeType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo,  options).toPromise();
    }

    /**
     * Count orders in store
     * order.count
     * @param param the request object
     */
    public orderCount(param: OrderApiOrderCountRequest = {}, options?: Configuration): Promise<OrderCount200Response> {
        return this.api.orderCount(param.orderIds, param.ids, param.customerId, param.storeId, param.customerEmail, param.orderStatus, param.orderStatusIds, param.ebayOrderStatus, param.financialStatus, param.financialStatusIds, param.fulfillmentChannel, param.fulfillmentStatus, param.shippingMethod, param.deliveryMethod, param.tags, param.shipNodeType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo,  options).toPromise();
    }

    /**
     * Retrieve list of financial statuses
     * order.financial_status.list
     * @param param the request object
     */
    public orderFinancialStatusListWithHttpInfo(param: OrderApiOrderFinancialStatusListRequest = {}, options?: Configuration): Promise<HttpInfo<OrderFinancialStatusList200Response>> {
        return this.api.orderFinancialStatusListWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve list of financial statuses
     * order.financial_status.list
     * @param param the request object
     */
    public orderFinancialStatusList(param: OrderApiOrderFinancialStatusListRequest = {}, options?: Configuration): Promise<OrderFinancialStatusList200Response> {
        return this.api.orderFinancialStatusList( options).toPromise();
    }

    /**
     * Retrieve list of fulfillment statuses
     * order.fulfillment_status.list
     * @param param the request object
     */
    public orderFulfillmentStatusListWithHttpInfo(param: OrderApiOrderFulfillmentStatusListRequest = {}, options?: Configuration): Promise<HttpInfo<OrderFulfillmentStatusList200Response>> {
        return this.api.orderFulfillmentStatusListWithHttpInfo(param.action,  options).toPromise();
    }

    /**
     * Retrieve list of fulfillment statuses
     * order.fulfillment_status.list
     * @param param the request object
     */
    public orderFulfillmentStatusList(param: OrderApiOrderFulfillmentStatusListRequest = {}, options?: Configuration): Promise<OrderFulfillmentStatusList200Response> {
        return this.api.orderFulfillmentStatusList(param.action,  options).toPromise();
    }

    /**
     * Info about a specific order by ID
     * order.info
     * @param param the request object
     */
    public orderInfoWithHttpInfo(param: OrderApiOrderInfoRequest = {}, options?: Configuration): Promise<HttpInfo<OrderInfo200Response>> {
        return this.api.orderInfoWithHttpInfo(param.id, param.orderId, param.storeId, param.params, param.responseFields, param.exclude, param.enableCache, param.useLatestApiVersion, param.roundingPrecision,  options).toPromise();
    }

    /**
     * Info about a specific order by ID
     * order.info
     * @param param the request object
     */
    public orderInfo(param: OrderApiOrderInfoRequest = {}, options?: Configuration): Promise<OrderInfo200Response> {
        return this.api.orderInfo(param.id, param.orderId, param.storeId, param.params, param.responseFields, param.exclude, param.enableCache, param.useLatestApiVersion, param.roundingPrecision,  options).toPromise();
    }

    /**
     * Get list of orders from store.
     * order.list
     * @param param the request object
     */
    public orderListWithHttpInfo(param: OrderApiOrderListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseOrderList>> {
        return this.api.orderListWithHttpInfo(param.start, param.count, param.pageCursor, param.ids, param.orderIds, param.sinceId, param.storeId, param.customerId, param.customerEmail, param.basketId, param.currencyId, param.phone, param.orderStatus, param.orderStatusIds, param.ebayOrderStatus, param.financialStatus, param.financialStatusIds, param.fulfillmentStatus, param.returnStatus, param.fulfillmentChannel, param.shippingMethod, param.skipOrderIds, param.isDeleted, param.shippingCountryIso3, param.deliveryMethod, param.shipNodeType, param.createdTo, param.createdFrom, param.modifiedTo, param.modifiedFrom, param.tags, param.sortBy, param.sortDirection, param.params, param.responseFields, param.exclude, param.enableCache, param.useLatestApiVersion, param.roundingPrecision,  options).toPromise();
    }

    /**
     * Get list of orders from store.
     * order.list
     * @param param the request object
     */
    public orderList(param: OrderApiOrderListRequest = {}, options?: Configuration): Promise<ModelResponseOrderList> {
        return this.api.orderList(param.start, param.count, param.pageCursor, param.ids, param.orderIds, param.sinceId, param.storeId, param.customerId, param.customerEmail, param.basketId, param.currencyId, param.phone, param.orderStatus, param.orderStatusIds, param.ebayOrderStatus, param.financialStatus, param.financialStatusIds, param.fulfillmentStatus, param.returnStatus, param.fulfillmentChannel, param.shippingMethod, param.skipOrderIds, param.isDeleted, param.shippingCountryIso3, param.deliveryMethod, param.shipNodeType, param.createdTo, param.createdFrom, param.modifiedTo, param.modifiedFrom, param.tags, param.sortBy, param.sortDirection, param.params, param.responseFields, param.exclude, param.enableCache, param.useLatestApiVersion, param.roundingPrecision,  options).toPromise();
    }

    /**
     * Retrieve list of order preestimated shipping methods
     * order.preestimate_shipping.list
     * @param param the request object
     */
    public orderPreestimateShippingListWithHttpInfo(param: OrderApiOrderPreestimateShippingListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseOrderPreestimateShippingList>> {
        return this.api.orderPreestimateShippingListWithHttpInfo(param.orderPreestimateShippingList,  options).toPromise();
    }

    /**
     * Retrieve list of order preestimated shipping methods
     * order.preestimate_shipping.list
     * @param param the request object
     */
    public orderPreestimateShippingList(param: OrderApiOrderPreestimateShippingListRequest, options?: Configuration): Promise<ModelResponseOrderPreestimateShippingList> {
        return this.api.orderPreestimateShippingList(param.orderPreestimateShippingList,  options).toPromise();
    }

    /**
     * Add a refund to the order.
     * order.refund.add
     * @param param the request object
     */
    public orderRefundAddWithHttpInfo(param: OrderApiOrderRefundAddRequest, options?: Configuration): Promise<HttpInfo<OrderRefundAdd200Response>> {
        return this.api.orderRefundAddWithHttpInfo(param.orderRefundAdd,  options).toPromise();
    }

    /**
     * Add a refund to the order.
     * order.refund.add
     * @param param the request object
     */
    public orderRefundAdd(param: OrderApiOrderRefundAddRequest, options?: Configuration): Promise<OrderRefundAdd200Response> {
        return this.api.orderRefundAdd(param.orderRefundAdd,  options).toPromise();
    }

    /**
     * Create new return request.
     * order.return.add
     * @param param the request object
     */
    public orderReturnAddWithHttpInfo(param: OrderApiOrderReturnAddRequest, options?: Configuration): Promise<HttpInfo<OrderReturnAdd200Response>> {
        return this.api.orderReturnAddWithHttpInfo(param.orderReturnAdd,  options).toPromise();
    }

    /**
     * Create new return request.
     * order.return.add
     * @param param the request object
     */
    public orderReturnAdd(param: OrderApiOrderReturnAddRequest, options?: Configuration): Promise<OrderReturnAdd200Response> {
        return this.api.orderReturnAdd(param.orderReturnAdd,  options).toPromise();
    }

    /**
     * Delete return.
     * order.return.delete
     * @param param the request object
     */
    public orderReturnDeleteWithHttpInfo(param: OrderApiOrderReturnDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        return this.api.orderReturnDeleteWithHttpInfo(param.returnId, param.orderId, param.storeId,  options).toPromise();
    }

    /**
     * Delete return.
     * order.return.delete
     * @param param the request object
     */
    public orderReturnDelete(param: OrderApiOrderReturnDeleteRequest, options?: Configuration): Promise<AttributeValueDelete200Response> {
        return this.api.orderReturnDelete(param.returnId, param.orderId, param.storeId,  options).toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.return.update
     * @param param the request object
     */
    public orderReturnUpdateWithHttpInfo(param: OrderApiOrderReturnUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.orderReturnUpdateWithHttpInfo(param.orderReturnUpdate,  options).toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.return.update
     * @param param the request object
     */
    public orderReturnUpdate(param: OrderApiOrderReturnUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.orderReturnUpdate(param.orderReturnUpdate,  options).toPromise();
    }

    /**
     * Add a shipment to the order.
     * order.shipment.add
     * @param param the request object
     */
    public orderShipmentAddWithHttpInfo(param: OrderApiOrderShipmentAddRequest, options?: Configuration): Promise<HttpInfo<OrderShipmentAdd200Response>> {
        return this.api.orderShipmentAddWithHttpInfo(param.orderShipmentAdd,  options).toPromise();
    }

    /**
     * Add a shipment to the order.
     * order.shipment.add
     * @param param the request object
     */
    public orderShipmentAdd(param: OrderApiOrderShipmentAddRequest, options?: Configuration): Promise<OrderShipmentAdd200Response> {
        return this.api.orderShipmentAdd(param.orderShipmentAdd,  options).toPromise();
    }

    /**
     * Add a shipments to the orders.
     * order.shipment.add.batch
     * @param param the request object
     */
    public orderShipmentAddBatchWithHttpInfo(param: OrderApiOrderShipmentAddBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.orderShipmentAddBatchWithHttpInfo(param.orderShipmentAddBatch,  options).toPromise();
    }

    /**
     * Add a shipments to the orders.
     * order.shipment.add.batch
     * @param param the request object
     */
    public orderShipmentAddBatch(param: OrderApiOrderShipmentAddBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.orderShipmentAddBatch(param.orderShipmentAddBatch,  options).toPromise();
    }

    /**
     * Delete order\'s shipment.
     * order.shipment.delete
     * @param param the request object
     */
    public orderShipmentDeleteWithHttpInfo(param: OrderApiOrderShipmentDeleteRequest, options?: Configuration): Promise<HttpInfo<OrderShipmentDelete200Response>> {
        return this.api.orderShipmentDeleteWithHttpInfo(param.shipmentId, param.orderId, param.storeId,  options).toPromise();
    }

    /**
     * Delete order\'s shipment.
     * order.shipment.delete
     * @param param the request object
     */
    public orderShipmentDelete(param: OrderApiOrderShipmentDeleteRequest, options?: Configuration): Promise<OrderShipmentDelete200Response> {
        return this.api.orderShipmentDelete(param.shipmentId, param.orderId, param.storeId,  options).toPromise();
    }

    /**
     * Get information of shipment.
     * order.shipment.info
     * @param param the request object
     */
    public orderShipmentInfoWithHttpInfo(param: OrderApiOrderShipmentInfoRequest, options?: Configuration): Promise<HttpInfo<OrderShipmentInfo200Response>> {
        return this.api.orderShipmentInfoWithHttpInfo(param.id, param.orderId, param.start, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get information of shipment.
     * order.shipment.info
     * @param param the request object
     */
    public orderShipmentInfo(param: OrderApiOrderShipmentInfoRequest, options?: Configuration): Promise<OrderShipmentInfo200Response> {
        return this.api.orderShipmentInfo(param.id, param.orderId, param.start, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of shipments per order.
     * order.shipment.list
     * @param param the request object
     */
    public orderShipmentListWithHttpInfo(param: OrderApiOrderShipmentListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseOrderShipmentList>> {
        return this.api.orderShipmentListWithHttpInfo(param.orderId, param.start, param.count, param.pageCursor, param.storeId, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of shipments per order.
     * order.shipment.list
     * @param param the request object
     */
    public orderShipmentList(param: OrderApiOrderShipmentListRequest, options?: Configuration): Promise<ModelResponseOrderShipmentList> {
        return this.api.orderShipmentList(param.orderId, param.start, param.count, param.pageCursor, param.storeId, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Add order shipment\'s tracking info.
     * order.shipment.tracking.add
     * @param param the request object
     */
    public orderShipmentTrackingAddWithHttpInfo(param: OrderApiOrderShipmentTrackingAddRequest, options?: Configuration): Promise<HttpInfo<OrderShipmentTrackingAdd200Response>> {
        return this.api.orderShipmentTrackingAddWithHttpInfo(param.orderShipmentTrackingAdd,  options).toPromise();
    }

    /**
     * Add order shipment\'s tracking info.
     * order.shipment.tracking.add
     * @param param the request object
     */
    public orderShipmentTrackingAdd(param: OrderApiOrderShipmentTrackingAddRequest, options?: Configuration): Promise<OrderShipmentTrackingAdd200Response> {
        return this.api.orderShipmentTrackingAdd(param.orderShipmentTrackingAdd,  options).toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.shipment.update
     * @param param the request object
     */
    public orderShipmentUpdateWithHttpInfo(param: OrderApiOrderShipmentUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.orderShipmentUpdateWithHttpInfo(param.orderShipmentUpdate,  options).toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.shipment.update
     * @param param the request object
     */
    public orderShipmentUpdate(param: OrderApiOrderShipmentUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.orderShipmentUpdate(param.orderShipmentUpdate,  options).toPromise();
    }

    /**
     * Retrieve list of statuses
     * order.status.list
     * @param param the request object
     */
    public orderStatusListWithHttpInfo(param: OrderApiOrderStatusListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseOrderStatusList>> {
        return this.api.orderStatusListWithHttpInfo(param.storeId, param.action, param.responseFields,  options).toPromise();
    }

    /**
     * Retrieve list of statuses
     * order.status.list
     * @param param the request object
     */
    public orderStatusList(param: OrderApiOrderStatusListRequest = {}, options?: Configuration): Promise<ModelResponseOrderStatusList> {
        return this.api.orderStatusList(param.storeId, param.action, param.responseFields,  options).toPromise();
    }

    /**
     * Retrieve list of order transaction
     * order.transaction.list
     * @param param the request object
     */
    public orderTransactionListWithHttpInfo(param: OrderApiOrderTransactionListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseOrderTransactionList>> {
        return this.api.orderTransactionListWithHttpInfo(param.orderIds, param.count, param.pageCursor, param.storeId, param.params, param.responseFields, param.exclude,  options).toPromise();
    }

    /**
     * Retrieve list of order transaction
     * order.transaction.list
     * @param param the request object
     */
    public orderTransactionList(param: OrderApiOrderTransactionListRequest, options?: Configuration): Promise<ModelResponseOrderTransactionList> {
        return this.api.orderTransactionList(param.orderIds, param.count, param.pageCursor, param.storeId, param.params, param.responseFields, param.exclude,  options).toPromise();
    }

    /**
     * Update existing order.
     * order.update
     * @param param the request object
     */
    public orderUpdateWithHttpInfo(param: OrderApiOrderUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.orderUpdateWithHttpInfo(param.orderId, param.storeId, param.orderStatus, param.financialStatus, param.fulfillmentStatus, param.cancellationReason, param.orderPaymentMethod, param.comment, param.adminComment, param.adminPrivateComment, param.invoiceAdminComment, param.dateModified, param.dateFinished, param.sendNotifications, param.createInvoice, param.origin, param.tags,  options).toPromise();
    }

    /**
     * Update existing order.
     * order.update
     * @param param the request object
     */
    public orderUpdate(param: OrderApiOrderUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.orderUpdate(param.orderId, param.storeId, param.orderStatus, param.financialStatus, param.fulfillmentStatus, param.cancellationReason, param.orderPaymentMethod, param.comment, param.adminComment, param.adminPrivateComment, param.invoiceAdminComment, param.dateModified, param.dateFinished, param.sendNotifications, param.createInvoice, param.origin, param.tags,  options).toPromise();
    }

}

import { ObservableProductApi } from "./ObservableAPI";
import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";

export interface ProductApiProductAddRequest {
    /**
     * 
     * @type ProductAdd
     * @memberof ProductApiproductAdd
     */
    productAdd: ProductAdd
}

export interface ProductApiProductAddBatchRequest {
    /**
     * 
     * @type ProductAddBatch
     * @memberof ProductApiproductAddBatch
     */
    productAddBatch: ProductAddBatch
}

export interface ProductApiProductAttributeListRequest {
    /**
     * Retrieves attributes specified by product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    productId: string
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductAttributeList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ProductApiproductAttributeList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    pageCursor?: string
    /**
     * Retrieves info for specified attribute_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    attributeId?: string
    /**
     * Defines product\&#39;s variants specified by variant id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    variantId?: string
    /**
     * Filter by attribute_group_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    attributeGroupId?: string
    /**
     * Retrieves attributes specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    langId?: string
    /**
     * Retrieves attributes specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    storeId?: string
    /**
     * Retrieves attributes specified by set_name in Magento
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    setName?: string
    /**
     * Set field to sort by
     * Defaults to: &#39;attribute_id&#39;
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    sortBy?: string
    /**
     * Set sorting direction
     * Defaults to: &#39;asc&#39;
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    sortDirection?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;attribute_id,name&#39;
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeList
     */
    exclude?: string
}

export interface ProductApiProductAttributeValueSetRequest {
    /**
     * Defines product id where the attribute should be added
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueSet
     */
    productId: string
    /**
     * Filter by attribute_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueSet
     */
    attributeId?: string
    /**
     * Filter by attribute_group_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueSet
     */
    attributeGroupId?: string
    /**
     * Define attribute name
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueSet
     */
    attributeName?: string
    /**
     * Define attribute value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueSet
     */
    value?: string
    /**
     * Define attribute value id
     * Defaults to: undefined
     * @type number
     * @memberof ProductApiproductAttributeValueSet
     */
    valueId?: number
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueSet
     */
    langId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueSet
     */
    storeId?: string
}

export interface ProductApiProductAttributeValueUnsetRequest {
    /**
     * Product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueUnset
     */
    productId: string
    /**
     * Attribute Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueUnset
     */
    attributeId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductAttributeValueUnset
     */
    storeId?: string
    /**
     * Boolean, whether or not to unset default value of the attribute, if applicable
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductAttributeValueUnset
     */
    includeDefault?: boolean
    /**
     * Is reindex required
     * Defaults to: true
     * @type boolean
     * @memberof ProductApiproductAttributeValueUnset
     */
    reindex?: boolean
    /**
     * Is cache clear required
     * Defaults to: true
     * @type boolean
     * @memberof ProductApiproductAttributeValueUnset
     */
    clearCache?: boolean
}

export interface ProductApiProductBrandListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductBrandList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ProductApiproductBrandList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    pageCursor?: string
    /**
     * Retrieves brands specified by brand ids
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    brandIds?: string
    /**
     * Retrieves product brands specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    categoryId?: string
    /**
     * Retrieves brands specified by parent id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    parentId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    langId?: string
    /**
     * Entity search that is specified by the comma-separated unique fields
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    findWhere?: string
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    findValue?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    modifiedTo?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,short_description,active,url&#39;
     * @type string
     * @memberof ProductApiproductBrandList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductBrandList
     */
    exclude?: string
}

export interface ProductApiProductChildItemFindRequest {
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemFind
     */
    findValue?: string
    /**
     * Entity search that is specified by the comma-separated unique fields
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemFind
     */
    findWhere?: string
    /**
     * Entity search that is specified by comma-separated parameters
     * Defaults to: &#39;whole_words&#39;
     * @type string
     * @memberof ProductApiproductChildItemFind
     */
    findParams?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemFind
     */
    storeId?: string
}

export interface ProductApiProductChildItemInfoRequest {
    /**
     * Filter by parent product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    productId: string
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    langId?: string
    /**
     * Currency Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    currencyId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemInfo
     */
    exclude?: string
    /**
     * Use the latest platform API version
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductChildItemInfo
     */
    useLatestApiVersion?: boolean
}

export interface ProductApiProductChildItemListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductChildItemList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ProductApiproductChildItemList
     */
    count?: number
    /**
     * Used to retrieve products child items via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    pageCursor?: string
    /**
     * Filter by parent product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    productId?: string
    /**
     * Filter by parent product ids
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    productIds?: string
    /**
     * Filter by products variant\&#39;s sku
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    sku?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    langId?: string
    /**
     * Currency Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    currencyId?: string
    /**
     * Specifies the set of available/not available products for sale
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductChildItemList
     */
    availSale?: boolean
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    findValue?: string
    /**
     * Child products search that is specified by field
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    findWhere?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    modifiedTo?: string
    /**
     * Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductChildItemList
     */
    returnGlobal?: boolean
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    exclude?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductChildItemList
     */
    reportRequestId?: string
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductChildItemList
     */
    disableReportCache?: boolean
    /**
     * Use the latest platform API version
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductChildItemList
     */
    useLatestApiVersion?: boolean
}

export interface ProductApiProductCountRequest {
    /**
     * Counts products specified by product ids
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    productIds?: string
    /**
     * Retrieve entities starting from the specified id.
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    sinceId?: string
    /**
     * Defines product add that is specified by comma-separated categories id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    categoriesIds?: string
    /**
     * Counts products specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    categoryId?: string
    /**
     * Counts products specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    storeId?: string
    /**
     * Counts products specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    langId?: string
    /**
     * Specifies the set of visible/invisible products
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductCount
     */
    availView?: boolean
    /**
     * Specifies the set of available/not available products for sale
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductCount
     */
    availSale?: boolean
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    modifiedTo?: string
    /**
     * Retrieves brands specified by brand name
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    brandName?: string
    /**
     * Defines product attributes
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProductApiproductCount
     */
    productAttributes?: Array<string>
    /**
     * Defines product\&#39;s status
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    status?: string
    /**
     * Defines products\&#39;s type
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    type?: string
    /**
     * Filter items by visibility status
     * Defaults to: &#39;everywhere&#39;
     * @type string
     * @memberof ProductApiproductCount
     */
    visible?: string
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    findValue?: string
    /**
     * Counts products that are searched specified by field
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    findWhere?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCount
     */
    reportRequestId?: string
    /**
     * Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductCount
     */
    returnGlobal?: boolean
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductCount
     */
    disableReportCache?: boolean
    /**
     * Use the latest platform API version
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductCount
     */
    useLatestApiVersion?: boolean
}

export interface ProductApiProductCurrencyAddRequest {
    /**
     * Specifies standardized currency code
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCurrencyAdd
     */
    iso3: string
    /**
     * Defines the numerical identifier against to the major currency
     * Defaults to: undefined
     * @type number
     * @memberof ProductApiproductCurrencyAdd
     */
    rate: number
    /**
     * Defines currency\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCurrencyAdd
     */
    name?: string
    /**
     * Specifies whether the currency is available
     * Defaults to: true
     * @type boolean
     * @memberof ProductApiproductCurrencyAdd
     */
    avail?: boolean
    /**
     * Defines the symbol that is located before the currency
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCurrencyAdd
     */
    symbolLeft?: string
    /**
     * Defines the symbol that is located after the currency
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCurrencyAdd
     */
    symbolRight?: string
    /**
     * Specifies currency\&#39;s default meaning
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductCurrencyAdd
     */
    _default?: boolean
}

export interface ProductApiProductCurrencyListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductCurrencyList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ProductApiproductCurrencyList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCurrencyList
     */
    pageCursor?: string
    /**
     * Specifies the set of default/not default currencies
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductCurrencyList
     */
    _default?: boolean
    /**
     * Specifies the set of available/not available currencies
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductCurrencyList
     */
    avail?: boolean
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCurrencyList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;name,iso3,default,avail&#39;
     * @type string
     * @memberof ProductApiproductCurrencyList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductCurrencyList
     */
    exclude?: string
}

export interface ProductApiProductDeleteRequest {
    /**
     * Product id that will be removed
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductDelete
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductDelete
     */
    storeId?: string
}

export interface ProductApiProductDeleteBatchRequest {
    /**
     * 
     * @type ProductDeleteBatch
     * @memberof ProductApiproductDeleteBatch
     */
    productDeleteBatch: ProductDeleteBatch
}

export interface ProductApiProductFindRequest {
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductFind
     */
    findValue: string
    /**
     * Entity search that is specified by the comma-separated unique fields
     * Defaults to: &#39;name&#39;
     * @type string
     * @memberof ProductApiproductFind
     */
    findWhere?: string
    /**
     * Entity search that is specified by comma-separated parameters
     * Defaults to: &#39;whole_words&#39;
     * @type string
     * @memberof ProductApiproductFind
     */
    findParams?: string
    /**
     * Parameter\&#39;s value specifies the entity that has to be found
     * Defaults to: &#39;product&#39;
     * @type string
     * @memberof ProductApiproductFind
     */
    findWhat?: string
    /**
     * Search products specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductFind
     */
    langId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductFind
     */
    storeId?: string
}

export interface ProductApiProductImageAddRequest {
    /**
     * 
     * @type ProductImageAdd
     * @memberof ProductApiproductImageAdd
     */
    productImageAdd: ProductImageAdd
}

export interface ProductApiProductImageDeleteRequest {
    /**
     * Defines product id where the image should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageDelete
     */
    productId: string
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageDelete
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageDelete
     */
    storeId?: string
}

export interface ProductApiProductImageUpdateRequest {
    /**
     * Defines product id where the image should be updated
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    productId: string
    /**
     * Defines image update specified by image id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    id: string
    /**
     * Defines product\&#39;s variants ids
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    variantIds?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    langId?: string
    /**
     * Defines image\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    imageName?: string
    /**
     * Defines image\&#39;s types that are specified by comma-separated list
     * Defaults to: &#39;additional&#39;
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    type?: string
    /**
     * Defines alternative text that has to be attached to the picture
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductImageUpdate
     */
    label?: string
    /**
     * Defines image’s position in the list
     * Defaults to: undefined
     * @type number
     * @memberof ProductApiproductImageUpdate
     */
    position?: number
    /**
     * Define is hide image
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductImageUpdate
     */
    hidden?: boolean
}

export interface ProductApiProductInfoRequest {
    /**
     * Retrieves product\&#39;s info specified by product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductInfo
     */
    id: string
    /**
     * Retrieves product info specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductInfo
     */
    storeId?: string
    /**
     * Retrieves product info specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductInfo
     */
    langId?: string
    /**
     * Currency Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductInfo
     */
    currencyId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,description,price,categories_ids&#39;
     * @type string
     * @memberof ProductApiproductInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductInfo
     */
    exclude?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductInfo
     */
    reportRequestId?: string
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductInfo
     */
    disableReportCache?: boolean
    /**
     * Use the latest platform API version
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductInfo
     */
    useLatestApiVersion?: boolean
}

export interface ProductApiProductListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ProductApiproductList
     */
    count?: number
    /**
     * Used to retrieve products via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    pageCursor?: string
    /**
     * Retrieves products specified by product ids
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    productIds?: string
    /**
     * Retrieve entities starting from the specified id.
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    sinceId?: string
    /**
     * Retrieves products specified by categories ids
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    categoriesIds?: string
    /**
     * Retrieves products specified by category id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    categoryId?: string
    /**
     * Retrieves products specified by store id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    storeId?: string
    /**
     * Retrieves products specified by language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    langId?: string
    /**
     * Currency Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    currencyId?: string
    /**
     * Specifies the set of visible/invisible products
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductList
     */
    availView?: boolean
    /**
     * Specifies the set of available/not available products for sale
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductList
     */
    availSale?: boolean
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    modifiedTo?: string
    /**
     * Filter by product\&#39;s sku
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    sku?: string
    /**
     * Retrieves brands specified by brand name
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    brandName?: string
    /**
     * Defines product attributes
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProductApiproductList
     */
    productAttributes?: Array<string>
    /**
     * Defines product\&#39;s status
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    status?: string
    /**
     * Defines products\&#39;s type
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    type?: string
    /**
     * Filter items by visibility status
     * Defaults to: &#39;everywhere&#39;
     * @type string
     * @memberof ProductApiproductList
     */
    visible?: string
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    findValue?: string
    /**
     * Product search that is specified by field
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    findWhere?: string
    /**
     * Determines the type of products to be returned. If set to \&#39;true\&#39;, only global products will be returned; if set to \&#39;false\&#39;, only local products will be returned.
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductList
     */
    returnGlobal?: boolean
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,description,price,categories_ids&#39;
     * @type string
     * @memberof ProductApiproductList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    exclude?: string
    /**
     * Set field to sort by
     * Defaults to: &#39;id&#39;
     * @type string
     * @memberof ProductApiproductList
     */
    sortBy?: string
    /**
     * Set sorting direction
     * Defaults to: &#39;asc&#39;
     * @type string
     * @memberof ProductApiproductList
     */
    sortDirection?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    reportRequestId?: string
    /**
     * Disable cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductList
     */
    disableCache?: boolean
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductList
     */
    disableReportCache?: boolean
    /**
     * Use the latest platform API version
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductList
     */
    useLatestApiVersion?: boolean
    /**
     * A categorization for the product
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductList
     */
    productType?: string
}

export interface ProductApiProductManufacturerAddRequest {
    /**
     * Defines products specified by product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    productId: string
    /**
     * Defines product’s manufacturer\&#39;s name
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    manufacturer: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    storeId?: string
    /**
     * Defines unique meta title for each entity
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    metaTitle?: string
    /**
     * Defines unique meta keywords for each entity
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    metaKeywords?: string
    /**
     * Defines unique meta description of a entity
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    metaDescription?: string
    /**
     * Defines unique search keywords
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    searchKeywords?: string
    /**
     * Image Url
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    imageUrl?: string
    /**
     * Defines unique URL for SEO
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductManufacturerAdd
     */
    seoUrl?: string
}

export interface ProductApiProductOptionAddRequest {
    /**
     * 
     * @type ProductOptionAdd
     * @memberof ProductApiproductOptionAdd
     */
    productOptionAdd: ProductOptionAdd
}

export interface ProductApiProductOptionAssignRequest {
    /**
     * Defines product id where the option should be assigned
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionAssign
     */
    productId: string
    /**
     * Defines option id which has to be assigned
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionAssign
     */
    optionId: string
    /**
     * Defines if the option is required
     * Defaults to: false
     * @type boolean
     * @memberof ProductApiproductOptionAssign
     */
    required?: boolean
    /**
     * Sort number in the list
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductOptionAssign
     */
    sortOrder?: number
    /**
     * Defines option values that has to be assigned
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionAssign
     */
    optionValues?: string
    /**
     * Is cache clear required
     * Defaults to: true
     * @type boolean
     * @memberof ProductApiproductOptionAssign
     */
    clearCache?: boolean
}

export interface ProductApiProductOptionDeleteRequest {
    /**
     * Defines option id that should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionDelete
     */
    optionId: string
    /**
     * Defines product id where the option should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionDelete
     */
    productId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionDelete
     */
    storeId?: string
}

export interface ProductApiProductOptionListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductOptionList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ProductApiproductOptionList
     */
    count?: number
    /**
     * Retrieves products\&#39; options specified by product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionList
     */
    productId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionList
     */
    langId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionList
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,name,description&#39;
     * @type string
     * @memberof ProductApiproductOptionList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionList
     */
    exclude?: string
}

export interface ProductApiProductOptionValueAddRequest {
    /**
     * Defines product id where the option value should be added
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueAdd
     */
    productId: string
    /**
     * Defines option id where the value has to be added
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueAdd
     */
    optionId: string
    /**
     * Defines option value that has to be added
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueAdd
     */
    optionValue?: string
    /**
     * Sort number in the list
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductOptionValueAdd
     */
    sortOrder?: number
    /**
     * Defines the value that will be displayed for the option value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueAdd
     */
    displayValue?: string
    /**
     * Defines as a default
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductApiproductOptionValueAdd
     */
    isDefault?: boolean
    /**
     * Is cache clear required
     * Defaults to: true
     * @type boolean
     * @memberof ProductApiproductOptionValueAdd
     */
    clearCache?: boolean
}

export interface ProductApiProductOptionValueAssignRequest {
    /**
     * Defines product\&#39;s option id where the value has to be assigned
     * Defaults to: undefined
     * @type number
     * @memberof ProductApiproductOptionValueAssign
     */
    productOptionId: number
    /**
     * Defines value id that has to be assigned
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueAssign
     */
    optionValueId: string
    /**
     * Is cache clear required
     * Defaults to: true
     * @type boolean
     * @memberof ProductApiproductOptionValueAssign
     */
    clearCache?: boolean
}

export interface ProductApiProductOptionValueDeleteRequest {
    /**
     * Defines option id where the value should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueDelete
     */
    optionId: string
    /**
     * Defines option value id that should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueDelete
     */
    optionValueId: string
    /**
     * Defines product id where the option value should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueDelete
     */
    productId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueDelete
     */
    storeId?: string
}

export interface ProductApiProductOptionValueUpdateRequest {
    /**
     * Defines product id where the option value should be updated
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueUpdate
     */
    productId: string
    /**
     * Defines option id where the value has to be updated
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueUpdate
     */
    optionId: string
    /**
     * Defines value id that has to be assigned
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueUpdate
     */
    optionValueId: string
    /**
     * Defines option value that has to be added
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueUpdate
     */
    optionValue?: string
    /**
     * Defines new product option price
     * Defaults to: undefined
     * @type number
     * @memberof ProductApiproductOptionValueUpdate
     */
    price?: number
    /**
     * Defines new products\&#39; options quantity
     * Defaults to: undefined
     * @type number
     * @memberof ProductApiproductOptionValueUpdate
     */
    quantity?: number
    /**
     * Defines the value that will be displayed for the option value
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductOptionValueUpdate
     */
    displayValue?: string
    /**
     * Is cache clear required
     * Defaults to: true
     * @type boolean
     * @memberof ProductApiproductOptionValueUpdate
     */
    clearCache?: boolean
}

export interface ProductApiProductPriceAddRequest {
    /**
     * 
     * @type ProductPriceAdd
     * @memberof ProductApiproductPriceAdd
     */
    productPriceAdd: ProductPriceAdd
}

export interface ProductApiProductPriceDeleteRequest {
    /**
     * Defines the product where the price has to be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductPriceDelete
     */
    productId: string
    /**
     * Defines product\&#39;s group prices
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductPriceDelete
     */
    groupPrices?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductPriceDelete
     */
    storeId?: string
}

export interface ProductApiProductPriceUpdateRequest {
    /**
     * 
     * @type ProductPriceUpdate
     * @memberof ProductApiproductPriceUpdate
     */
    productPriceUpdate: ProductPriceUpdate
}

export interface ProductApiProductReviewListRequest {
    /**
     * Product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    productId: string
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ProductApiproductReviewList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ProductApiproductReviewList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    pageCursor?: string
    /**
     * Retrieves reviews specified by ids
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    ids?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    langId?: string
    /**
     * Defines status
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    status?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    createdTo?: string
    /**
     * Retrieves orders specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    customerId?: string
    /**
     * Set field to sort by
     * Defaults to: &#39;id&#39;
     * @type string
     * @memberof ProductApiproductReviewList
     */
    sortBy?: string
    /**
     * Set sorting direction
     * Defaults to: &#39;asc&#39;
     * @type string
     * @memberof ProductApiproductReviewList
     */
    sortDirection?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time&#39;
     * @type string
     * @memberof ProductApiproductReviewList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductReviewList
     */
    exclude?: string
}

export interface ProductApiProductStoreAssignRequest {
    /**
     * Defines id of the product which should be assigned to a store
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductStoreAssign
     */
    productId: string
    /**
     * Defines id of the store product should be assigned to
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductStoreAssign
     */
    storeId: string
}

export interface ProductApiProductTaxAddRequest {
    /**
     * 
     * @type ProductTaxAdd
     * @memberof ProductApiproductTaxAdd
     */
    productTaxAdd: ProductTaxAdd
}

export interface ProductApiProductUpdateRequest {
    /**
     * 
     * @type ProductUpdate
     * @memberof ProductApiproductUpdate
     */
    productUpdate: ProductUpdate
}

export interface ProductApiProductUpdateBatchRequest {
    /**
     * 
     * @type ProductUpdateBatch
     * @memberof ProductApiproductUpdateBatch
     */
    productUpdateBatch: ProductUpdateBatch
}

export interface ProductApiProductVariantAddRequest {
    /**
     * 
     * @type ProductVariantAdd
     * @memberof ProductApiproductVariantAdd
     */
    productVariantAdd: ProductVariantAdd
}

export interface ProductApiProductVariantAddBatchRequest {
    /**
     * 
     * @type ProductVariantAddBatch
     * @memberof ProductApiproductVariantAddBatch
     */
    productVariantAddBatch: ProductVariantAddBatch
}

export interface ProductApiProductVariantDeleteRequest {
    /**
     * Defines variant removal, specified by variant id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantDelete
     */
    id: string
    /**
     * Defines product\&#39;s id where the variant has to be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantDelete
     */
    productId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantDelete
     */
    storeId?: string
}

export interface ProductApiProductVariantDeleteBatchRequest {
    /**
     * 
     * @type ProductVariantDeleteBatch
     * @memberof ProductApiproductVariantDeleteBatch
     */
    productVariantDeleteBatch: ProductVariantDeleteBatch
}

export interface ProductApiProductVariantImageAddRequest {
    /**
     * 
     * @type ProductVariantImageAdd
     * @memberof ProductApiproductVariantImageAdd
     */
    productVariantImageAdd: ProductVariantImageAdd
}

export interface ProductApiProductVariantImageDeleteRequest {
    /**
     * Defines product id where the variant image should be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantImageDelete
     */
    productId: string
    /**
     * Defines product\&#39;s variants specified by variant id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantImageDelete
     */
    productVariantId: string
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantImageDelete
     */
    id: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantImageDelete
     */
    storeId?: string
}

export interface ProductApiProductVariantPriceAddRequest {
    /**
     * 
     * @type ProductVariantPriceAdd
     * @memberof ProductApiproductVariantPriceAdd
     */
    productVariantPriceAdd: ProductVariantPriceAdd
}

export interface ProductApiProductVariantPriceDeleteRequest {
    /**
     * Defines the variant where the price has to be deleted
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantPriceDelete
     */
    id: string
    /**
     * Product id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantPriceDelete
     */
    productId: string
    /**
     * Defines variants\&#39;s group prices
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantPriceDelete
     */
    groupPrices: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiproductVariantPriceDelete
     */
    storeId?: string
}

export interface ProductApiProductVariantPriceUpdateRequest {
    /**
     * 
     * @type ProductVariantPriceUpdate
     * @memberof ProductApiproductVariantPriceUpdate
     */
    productVariantPriceUpdate: ProductVariantPriceUpdate
}

export interface ProductApiProductVariantUpdateRequest {
    /**
     * 
     * @type ProductVariantUpdate
     * @memberof ProductApiproductVariantUpdate
     */
    productVariantUpdate: ProductVariantUpdate
}

export interface ProductApiProductVariantUpdateBatchRequest {
    /**
     * 
     * @type ProductVariantUpdateBatch
     * @memberof ProductApiproductVariantUpdateBatch
     */
    productVariantUpdateBatch: ProductVariantUpdateBatch
}

export class ObjectProductApi {
    private api: ObservableProductApi

    public constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add new product to store.
     * product.add
     * @param param the request object
     */
    public productAddWithHttpInfo(param: ProductApiProductAddRequest, options?: Configuration): Promise<HttpInfo<ProductAdd200Response>> {
        return this.api.productAddWithHttpInfo(param.productAdd,  options).toPromise();
    }

    /**
     * Add new product to store.
     * product.add
     * @param param the request object
     */
    public productAdd(param: ProductApiProductAddRequest, options?: Configuration): Promise<ProductAdd200Response> {
        return this.api.productAdd(param.productAdd,  options).toPromise();
    }

    /**
     * Add new products to the store.
     * product.add.batch
     * @param param the request object
     */
    public productAddBatchWithHttpInfo(param: ProductApiProductAddBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.productAddBatchWithHttpInfo(param.productAddBatch,  options).toPromise();
    }

    /**
     * Add new products to the store.
     * product.add.batch
     * @param param the request object
     */
    public productAddBatch(param: ProductApiProductAddBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.productAddBatch(param.productAddBatch,  options).toPromise();
    }

    /**
     * Get list of attributes and values.
     * product.attribute.list
     * @param param the request object
     */
    public productAttributeListWithHttpInfo(param: ProductApiProductAttributeListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseProductAttributeList>> {
        return this.api.productAttributeListWithHttpInfo(param.productId, param.start, param.count, param.pageCursor, param.attributeId, param.variantId, param.attributeGroupId, param.langId, param.storeId, param.setName, param.sortBy, param.sortDirection, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of attributes and values.
     * product.attribute.list
     * @param param the request object
     */
    public productAttributeList(param: ProductApiProductAttributeListRequest, options?: Configuration): Promise<ModelResponseProductAttributeList> {
        return this.api.productAttributeList(param.productId, param.start, param.count, param.pageCursor, param.attributeId, param.variantId, param.attributeGroupId, param.langId, param.storeId, param.setName, param.sortBy, param.sortDirection, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Set attribute value to product.
     * product.attribute.value.set
     * @param param the request object
     */
    public productAttributeValueSetWithHttpInfo(param: ProductApiProductAttributeValueSetRequest, options?: Configuration): Promise<HttpInfo<ProductAttributeValueSet200Response>> {
        return this.api.productAttributeValueSetWithHttpInfo(param.productId, param.attributeId, param.attributeGroupId, param.attributeName, param.value, param.valueId, param.langId, param.storeId,  options).toPromise();
    }

    /**
     * Set attribute value to product.
     * product.attribute.value.set
     * @param param the request object
     */
    public productAttributeValueSet(param: ProductApiProductAttributeValueSetRequest, options?: Configuration): Promise<ProductAttributeValueSet200Response> {
        return this.api.productAttributeValueSet(param.productId, param.attributeId, param.attributeGroupId, param.attributeName, param.value, param.valueId, param.langId, param.storeId,  options).toPromise();
    }

    /**
     * Removes attribute value for a product.
     * product.attribute.value.unset
     * @param param the request object
     */
    public productAttributeValueUnsetWithHttpInfo(param: ProductApiProductAttributeValueUnsetRequest, options?: Configuration): Promise<HttpInfo<ProductAttributeValueUnset200Response>> {
        return this.api.productAttributeValueUnsetWithHttpInfo(param.productId, param.attributeId, param.storeId, param.includeDefault, param.reindex, param.clearCache,  options).toPromise();
    }

    /**
     * Removes attribute value for a product.
     * product.attribute.value.unset
     * @param param the request object
     */
    public productAttributeValueUnset(param: ProductApiProductAttributeValueUnsetRequest, options?: Configuration): Promise<ProductAttributeValueUnset200Response> {
        return this.api.productAttributeValueUnset(param.productId, param.attributeId, param.storeId, param.includeDefault, param.reindex, param.clearCache,  options).toPromise();
    }

    /**
     * Get list of brands from your store.
     * product.brand.list
     * @param param the request object
     */
    public productBrandListWithHttpInfo(param: ProductApiProductBrandListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseProductBrandList>> {
        return this.api.productBrandListWithHttpInfo(param.start, param.count, param.pageCursor, param.brandIds, param.categoryId, param.parentId, param.storeId, param.langId, param.findWhere, param.findValue, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of brands from your store.
     * product.brand.list
     * @param param the request object
     */
    public productBrandList(param: ProductApiProductBrandListRequest = {}, options?: Configuration): Promise<ModelResponseProductBrandList> {
        return this.api.productBrandList(param.start, param.count, param.pageCursor, param.brandIds, param.categoryId, param.parentId, param.storeId, param.langId, param.findWhere, param.findValue, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Search product child item (bundled item or configurable product variant) in store catalog.
     * product.child_item.find
     * @param param the request object
     */
    public productChildItemFindWithHttpInfo(param: ProductApiProductChildItemFindRequest = {}, options?: Configuration): Promise<HttpInfo<ProductChildItemFind200Response>> {
        return this.api.productChildItemFindWithHttpInfo(param.findValue, param.findWhere, param.findParams, param.storeId,  options).toPromise();
    }

    /**
     * Search product child item (bundled item or configurable product variant) in store catalog.
     * product.child_item.find
     * @param param the request object
     */
    public productChildItemFind(param: ProductApiProductChildItemFindRequest = {}, options?: Configuration): Promise<ProductChildItemFind200Response> {
        return this.api.productChildItemFind(param.findValue, param.findWhere, param.findParams, param.storeId,  options).toPromise();
    }

    /**
     * Get child for specific product.
     * product.child_item.info
     * @param param the request object
     */
    public productChildItemInfoWithHttpInfo(param: ProductApiProductChildItemInfoRequest, options?: Configuration): Promise<HttpInfo<ProductChildItemInfo200Response>> {
        return this.api.productChildItemInfoWithHttpInfo(param.productId, param.id, param.storeId, param.langId, param.currencyId, param.responseFields, param.params, param.exclude, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Get child for specific product.
     * product.child_item.info
     * @param param the request object
     */
    public productChildItemInfo(param: ProductApiProductChildItemInfoRequest, options?: Configuration): Promise<ProductChildItemInfo200Response> {
        return this.api.productChildItemInfo(param.productId, param.id, param.storeId, param.langId, param.currencyId, param.responseFields, param.params, param.exclude, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Get a list of a product\'s child items, such as variants or bundle components. The total_count field in the response indicates the total number of items in the context of the current filter.
     * product.child_item.list
     * @param param the request object
     */
    public productChildItemListWithHttpInfo(param: ProductApiProductChildItemListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseProductChildItemList>> {
        return this.api.productChildItemListWithHttpInfo(param.start, param.count, param.pageCursor, param.productId, param.productIds, param.sku, param.storeId, param.langId, param.currencyId, param.availSale, param.findValue, param.findWhere, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.returnGlobal, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Get a list of a product\'s child items, such as variants or bundle components. The total_count field in the response indicates the total number of items in the context of the current filter.
     * product.child_item.list
     * @param param the request object
     */
    public productChildItemList(param: ProductApiProductChildItemListRequest = {}, options?: Configuration): Promise<ModelResponseProductChildItemList> {
        return this.api.productChildItemList(param.start, param.count, param.pageCursor, param.productId, param.productIds, param.sku, param.storeId, param.langId, param.currencyId, param.availSale, param.findValue, param.findWhere, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.returnGlobal, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Count products in store.
     * product.count
     * @param param the request object
     */
    public productCountWithHttpInfo(param: ProductApiProductCountRequest = {}, options?: Configuration): Promise<HttpInfo<ProductCount200Response>> {
        return this.api.productCountWithHttpInfo(param.productIds, param.sinceId, param.categoriesIds, param.categoryId, param.storeId, param.langId, param.availView, param.availSale, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.brandName, param.productAttributes, param.status, param.type, param.visible, param.findValue, param.findWhere, param.reportRequestId, param.returnGlobal, param.disableReportCache, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Count products in store.
     * product.count
     * @param param the request object
     */
    public productCount(param: ProductApiProductCountRequest = {}, options?: Configuration): Promise<ProductCount200Response> {
        return this.api.productCount(param.productIds, param.sinceId, param.categoriesIds, param.categoryId, param.storeId, param.langId, param.availView, param.availSale, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.brandName, param.productAttributes, param.status, param.type, param.visible, param.findValue, param.findWhere, param.reportRequestId, param.returnGlobal, param.disableReportCache, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Add currency and/or set default in store
     * product.currency.add
     * @param param the request object
     */
    public productCurrencyAddWithHttpInfo(param: ProductApiProductCurrencyAddRequest, options?: Configuration): Promise<HttpInfo<ProductCurrencyAdd200Response>> {
        return this.api.productCurrencyAddWithHttpInfo(param.iso3, param.rate, param.name, param.avail, param.symbolLeft, param.symbolRight, param._default,  options).toPromise();
    }

    /**
     * Add currency and/or set default in store
     * product.currency.add
     * @param param the request object
     */
    public productCurrencyAdd(param: ProductApiProductCurrencyAddRequest, options?: Configuration): Promise<ProductCurrencyAdd200Response> {
        return this.api.productCurrencyAdd(param.iso3, param.rate, param.name, param.avail, param.symbolLeft, param.symbolRight, param._default,  options).toPromise();
    }

    /**
     * Get list of currencies
     * product.currency.list
     * @param param the request object
     */
    public productCurrencyListWithHttpInfo(param: ProductApiProductCurrencyListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseProductCurrencyList>> {
        return this.api.productCurrencyListWithHttpInfo(param.start, param.count, param.pageCursor, param._default, param.avail, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of currencies
     * product.currency.list
     * @param param the request object
     */
    public productCurrencyList(param: ProductApiProductCurrencyListRequest = {}, options?: Configuration): Promise<ModelResponseProductCurrencyList> {
        return this.api.productCurrencyList(param.start, param.count, param.pageCursor, param._default, param.avail, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Product delete
     * product.delete
     * @param param the request object
     */
    public productDeleteWithHttpInfo(param: ProductApiProductDeleteRequest, options?: Configuration): Promise<HttpInfo<CustomerDelete200Response>> {
        return this.api.productDeleteWithHttpInfo(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Product delete
     * product.delete
     * @param param the request object
     */
    public productDelete(param: ProductApiProductDeleteRequest, options?: Configuration): Promise<CustomerDelete200Response> {
        return this.api.productDelete(param.id, param.storeId,  options).toPromise();
    }

    /**
     * Remove product from the store.
     * product.delete.batch
     * @param param the request object
     */
    public productDeleteBatchWithHttpInfo(param: ProductApiProductDeleteBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.productDeleteBatchWithHttpInfo(param.productDeleteBatch,  options).toPromise();
    }

    /**
     * Remove product from the store.
     * product.delete.batch
     * @param param the request object
     */
    public productDeleteBatch(param: ProductApiProductDeleteBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.productDeleteBatch(param.productDeleteBatch,  options).toPromise();
    }

    /**
     * Search product in store catalog. \"Apple\" is specified here by default.
     * product.find
     * @param param the request object
     */
    public productFindWithHttpInfo(param: ProductApiProductFindRequest, options?: Configuration): Promise<HttpInfo<ProductFind200Response>> {
        return this.api.productFindWithHttpInfo(param.findValue, param.findWhere, param.findParams, param.findWhat, param.langId, param.storeId,  options).toPromise();
    }

    /**
     * Search product in store catalog. \"Apple\" is specified here by default.
     * product.find
     * @param param the request object
     */
    public productFind(param: ProductApiProductFindRequest, options?: Configuration): Promise<ProductFind200Response> {
        return this.api.productFind(param.findValue, param.findWhere, param.findParams, param.findWhat, param.langId, param.storeId,  options).toPromise();
    }

    /**
     * Add image to product
     * product.image.add
     * @param param the request object
     */
    public productImageAddWithHttpInfo(param: ProductApiProductImageAddRequest, options?: Configuration): Promise<HttpInfo<ProductImageAdd200Response>> {
        return this.api.productImageAddWithHttpInfo(param.productImageAdd,  options).toPromise();
    }

    /**
     * Add image to product
     * product.image.add
     * @param param the request object
     */
    public productImageAdd(param: ProductApiProductImageAddRequest, options?: Configuration): Promise<ProductImageAdd200Response> {
        return this.api.productImageAdd(param.productImageAdd,  options).toPromise();
    }

    /**
     * Delete image
     * product.image.delete
     * @param param the request object
     */
    public productImageDeleteWithHttpInfo(param: ProductApiProductImageDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.productImageDeleteWithHttpInfo(param.productId, param.id, param.storeId,  options).toPromise();
    }

    /**
     * Delete image
     * product.image.delete
     * @param param the request object
     */
    public productImageDelete(param: ProductApiProductImageDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.productImageDelete(param.productId, param.id, param.storeId,  options).toPromise();
    }

    /**
     * Update details of image
     * product.image.update
     * @param param the request object
     */
    public productImageUpdateWithHttpInfo(param: ProductApiProductImageUpdateRequest, options?: Configuration): Promise<HttpInfo<ProductImageUpdate200Response>> {
        return this.api.productImageUpdateWithHttpInfo(param.productId, param.id, param.variantIds, param.storeId, param.langId, param.imageName, param.type, param.label, param.position, param.hidden,  options).toPromise();
    }

    /**
     * Update details of image
     * product.image.update
     * @param param the request object
     */
    public productImageUpdate(param: ProductApiProductImageUpdateRequest, options?: Configuration): Promise<ProductImageUpdate200Response> {
        return this.api.productImageUpdate(param.productId, param.id, param.variantIds, param.storeId, param.langId, param.imageName, param.type, param.label, param.position, param.hidden,  options).toPromise();
    }

    /**
     * Get information about a specific product by its ID. In the case of a multistore configuration, use the store_id filter to get a response in the context of a specific store.
     * product.info
     * @param param the request object
     */
    public productInfoWithHttpInfo(param: ProductApiProductInfoRequest, options?: Configuration): Promise<HttpInfo<ProductInfo200Response>> {
        return this.api.productInfoWithHttpInfo(param.id, param.storeId, param.langId, param.currencyId, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Get information about a specific product by its ID. In the case of a multistore configuration, use the store_id filter to get a response in the context of a specific store.
     * product.info
     * @param param the request object
     */
    public productInfo(param: ProductApiProductInfoRequest, options?: Configuration): Promise<ProductInfo200Response> {
        return this.api.productInfo(param.id, param.storeId, param.langId, param.currencyId, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache, param.useLatestApiVersion,  options).toPromise();
    }

    /**
     * Get list of products from your store. Returns 10 products by default.
     * product.list
     * @param param the request object
     */
    public productListWithHttpInfo(param: ProductApiProductListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseProductList>> {
        return this.api.productListWithHttpInfo(param.start, param.count, param.pageCursor, param.productIds, param.sinceId, param.categoriesIds, param.categoryId, param.storeId, param.langId, param.currencyId, param.availView, param.availSale, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.sku, param.brandName, param.productAttributes, param.status, param.type, param.visible, param.findValue, param.findWhere, param.returnGlobal, param.params, param.responseFields, param.exclude, param.sortBy, param.sortDirection, param.reportRequestId, param.disableCache, param.disableReportCache, param.useLatestApiVersion, param.productType,  options).toPromise();
    }

    /**
     * Get list of products from your store. Returns 10 products by default.
     * product.list
     * @param param the request object
     */
    public productList(param: ProductApiProductListRequest = {}, options?: Configuration): Promise<ModelResponseProductList> {
        return this.api.productList(param.start, param.count, param.pageCursor, param.productIds, param.sinceId, param.categoriesIds, param.categoryId, param.storeId, param.langId, param.currencyId, param.availView, param.availSale, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.sku, param.brandName, param.productAttributes, param.status, param.type, param.visible, param.findValue, param.findWhere, param.returnGlobal, param.params, param.responseFields, param.exclude, param.sortBy, param.sortDirection, param.reportRequestId, param.disableCache, param.disableReportCache, param.useLatestApiVersion, param.productType,  options).toPromise();
    }

    /**
     * Add manufacturer to store and assign to product
     * product.manufacturer.add
     * @param param the request object
     */
    public productManufacturerAddWithHttpInfo(param: ProductApiProductManufacturerAddRequest, options?: Configuration): Promise<HttpInfo<ProductManufacturerAdd200Response>> {
        return this.api.productManufacturerAddWithHttpInfo(param.productId, param.manufacturer, param.storeId, param.metaTitle, param.metaKeywords, param.metaDescription, param.searchKeywords, param.imageUrl, param.seoUrl,  options).toPromise();
    }

    /**
     * Add manufacturer to store and assign to product
     * product.manufacturer.add
     * @param param the request object
     */
    public productManufacturerAdd(param: ProductApiProductManufacturerAddRequest, options?: Configuration): Promise<ProductManufacturerAdd200Response> {
        return this.api.productManufacturerAdd(param.productId, param.manufacturer, param.storeId, param.metaTitle, param.metaKeywords, param.metaDescription, param.searchKeywords, param.imageUrl, param.seoUrl,  options).toPromise();
    }

    /**
     * Add product option from store.
     * product.option.add
     * @param param the request object
     */
    public productOptionAddWithHttpInfo(param: ProductApiProductOptionAddRequest, options?: Configuration): Promise<HttpInfo<ProductOptionAdd200Response>> {
        return this.api.productOptionAddWithHttpInfo(param.productOptionAdd,  options).toPromise();
    }

    /**
     * Add product option from store.
     * product.option.add
     * @param param the request object
     */
    public productOptionAdd(param: ProductApiProductOptionAddRequest, options?: Configuration): Promise<ProductOptionAdd200Response> {
        return this.api.productOptionAdd(param.productOptionAdd,  options).toPromise();
    }

    /**
     * Assign option from product.
     * product.option.assign
     * @param param the request object
     */
    public productOptionAssignWithHttpInfo(param: ProductApiProductOptionAssignRequest, options?: Configuration): Promise<HttpInfo<ProductOptionAssign200Response>> {
        return this.api.productOptionAssignWithHttpInfo(param.productId, param.optionId, param.required, param.sortOrder, param.optionValues, param.clearCache,  options).toPromise();
    }

    /**
     * Assign option from product.
     * product.option.assign
     * @param param the request object
     */
    public productOptionAssign(param: ProductApiProductOptionAssignRequest, options?: Configuration): Promise<ProductOptionAssign200Response> {
        return this.api.productOptionAssign(param.productId, param.optionId, param.required, param.sortOrder, param.optionValues, param.clearCache,  options).toPromise();
    }

    /**
     * Product option delete.
     * product.option.delete
     * @param param the request object
     */
    public productOptionDeleteWithHttpInfo(param: ProductApiProductOptionDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.productOptionDeleteWithHttpInfo(param.optionId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Product option delete.
     * product.option.delete
     * @param param the request object
     */
    public productOptionDelete(param: ProductApiProductOptionDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.productOptionDelete(param.optionId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Get list of options.
     * product.option.list
     * @param param the request object
     */
    public productOptionListWithHttpInfo(param: ProductApiProductOptionListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseProductOptionList>> {
        return this.api.productOptionListWithHttpInfo(param.start, param.count, param.productId, param.langId, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of options.
     * product.option.list
     * @param param the request object
     */
    public productOptionList(param: ProductApiProductOptionListRequest = {}, options?: Configuration): Promise<ModelResponseProductOptionList> {
        return this.api.productOptionList(param.start, param.count, param.productId, param.langId, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Add product option item from option.
     * product.option.value.add
     * @param param the request object
     */
    public productOptionValueAddWithHttpInfo(param: ProductApiProductOptionValueAddRequest, options?: Configuration): Promise<HttpInfo<ProductOptionValueAdd200Response>> {
        return this.api.productOptionValueAddWithHttpInfo(param.productId, param.optionId, param.optionValue, param.sortOrder, param.displayValue, param.isDefault, param.clearCache,  options).toPromise();
    }

    /**
     * Add product option item from option.
     * product.option.value.add
     * @param param the request object
     */
    public productOptionValueAdd(param: ProductApiProductOptionValueAddRequest, options?: Configuration): Promise<ProductOptionValueAdd200Response> {
        return this.api.productOptionValueAdd(param.productId, param.optionId, param.optionValue, param.sortOrder, param.displayValue, param.isDefault, param.clearCache,  options).toPromise();
    }

    /**
     * Assign product option item from product.
     * product.option.value.assign
     * @param param the request object
     */
    public productOptionValueAssignWithHttpInfo(param: ProductApiProductOptionValueAssignRequest, options?: Configuration): Promise<HttpInfo<ProductOptionValueAssign200Response>> {
        return this.api.productOptionValueAssignWithHttpInfo(param.productOptionId, param.optionValueId, param.clearCache,  options).toPromise();
    }

    /**
     * Assign product option item from product.
     * product.option.value.assign
     * @param param the request object
     */
    public productOptionValueAssign(param: ProductApiProductOptionValueAssignRequest, options?: Configuration): Promise<ProductOptionValueAssign200Response> {
        return this.api.productOptionValueAssign(param.productOptionId, param.optionValueId, param.clearCache,  options).toPromise();
    }

    /**
     * Product option value delete.
     * product.option.value.delete
     * @param param the request object
     */
    public productOptionValueDeleteWithHttpInfo(param: ProductApiProductOptionValueDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.productOptionValueDeleteWithHttpInfo(param.optionId, param.optionValueId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Product option value delete.
     * product.option.value.delete
     * @param param the request object
     */
    public productOptionValueDelete(param: ProductApiProductOptionValueDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.productOptionValueDelete(param.optionId, param.optionValueId, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Update product option item from option.
     * product.option.value.update
     * @param param the request object
     */
    public productOptionValueUpdateWithHttpInfo(param: ProductApiProductOptionValueUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.productOptionValueUpdateWithHttpInfo(param.productId, param.optionId, param.optionValueId, param.optionValue, param.price, param.quantity, param.displayValue, param.clearCache,  options).toPromise();
    }

    /**
     * Update product option item from option.
     * product.option.value.update
     * @param param the request object
     */
    public productOptionValueUpdate(param: ProductApiProductOptionValueUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.productOptionValueUpdate(param.productId, param.optionId, param.optionValueId, param.optionValue, param.price, param.quantity, param.displayValue, param.clearCache,  options).toPromise();
    }

    /**
     * Add some prices to the product.
     * product.price.add
     * @param param the request object
     */
    public productPriceAddWithHttpInfo(param: ProductApiProductPriceAddRequest, options?: Configuration): Promise<HttpInfo<CartValidate200Response>> {
        return this.api.productPriceAddWithHttpInfo(param.productPriceAdd,  options).toPromise();
    }

    /**
     * Add some prices to the product.
     * product.price.add
     * @param param the request object
     */
    public productPriceAdd(param: ProductApiProductPriceAddRequest, options?: Configuration): Promise<CartValidate200Response> {
        return this.api.productPriceAdd(param.productPriceAdd,  options).toPromise();
    }

    /**
     * Delete some prices of the product
     * product.price.delete
     * @param param the request object
     */
    public productPriceDeleteWithHttpInfo(param: ProductApiProductPriceDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.productPriceDeleteWithHttpInfo(param.productId, param.groupPrices, param.storeId,  options).toPromise();
    }

    /**
     * Delete some prices of the product
     * product.price.delete
     * @param param the request object
     */
    public productPriceDelete(param: ProductApiProductPriceDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.productPriceDelete(param.productId, param.groupPrices, param.storeId,  options).toPromise();
    }

    /**
     * Update some prices of the product.
     * product.price.update
     * @param param the request object
     */
    public productPriceUpdateWithHttpInfo(param: ProductApiProductPriceUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.productPriceUpdateWithHttpInfo(param.productPriceUpdate,  options).toPromise();
    }

    /**
     * Update some prices of the product.
     * product.price.update
     * @param param the request object
     */
    public productPriceUpdate(param: ProductApiProductPriceUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.productPriceUpdate(param.productPriceUpdate,  options).toPromise();
    }

    /**
     * Get reviews of a specific product.
     * product.review.list
     * @param param the request object
     */
    public productReviewListWithHttpInfo(param: ProductApiProductReviewListRequest, options?: Configuration): Promise<HttpInfo<ModelResponseProductReviewList>> {
        return this.api.productReviewListWithHttpInfo(param.productId, param.start, param.count, param.pageCursor, param.ids, param.storeId, param.langId, param.status, param.createdFrom, param.createdTo, param.customerId, param.sortBy, param.sortDirection, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get reviews of a specific product.
     * product.review.list
     * @param param the request object
     */
    public productReviewList(param: ProductApiProductReviewListRequest, options?: Configuration): Promise<ModelResponseProductReviewList> {
        return this.api.productReviewList(param.productId, param.start, param.count, param.pageCursor, param.ids, param.storeId, param.langId, param.status, param.createdFrom, param.createdTo, param.customerId, param.sortBy, param.sortDirection, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Assign product to store
     * product.store.assign
     * @param param the request object
     */
    public productStoreAssignWithHttpInfo(param: ProductApiProductStoreAssignRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.productStoreAssignWithHttpInfo(param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Assign product to store
     * product.store.assign
     * @param param the request object
     */
    public productStoreAssign(param: ProductApiProductStoreAssignRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.productStoreAssign(param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Add tax class and tax rate to store and assign to product.
     * product.tax.add
     * @param param the request object
     */
    public productTaxAddWithHttpInfo(param: ProductApiProductTaxAddRequest, options?: Configuration): Promise<HttpInfo<ProductTaxAdd200Response>> {
        return this.api.productTaxAddWithHttpInfo(param.productTaxAdd,  options).toPromise();
    }

    /**
     * Add tax class and tax rate to store and assign to product.
     * product.tax.add
     * @param param the request object
     */
    public productTaxAdd(param: ProductApiProductTaxAddRequest, options?: Configuration): Promise<ProductTaxAdd200Response> {
        return this.api.productTaxAdd(param.productTaxAdd,  options).toPromise();
    }

    /**
     * This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.
     * product.update
     * @param param the request object
     */
    public productUpdateWithHttpInfo(param: ProductApiProductUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.productUpdateWithHttpInfo(param.productUpdate,  options).toPromise();
    }

    /**
     * This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.
     * product.update
     * @param param the request object
     */
    public productUpdate(param: ProductApiProductUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.productUpdate(param.productUpdate,  options).toPromise();
    }

    /**
     * Update products on the store.
     * product.update.batch
     * @param param the request object
     */
    public productUpdateBatchWithHttpInfo(param: ProductApiProductUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.productUpdateBatchWithHttpInfo(param.productUpdateBatch,  options).toPromise();
    }

    /**
     * Update products on the store.
     * product.update.batch
     * @param param the request object
     */
    public productUpdateBatch(param: ProductApiProductUpdateBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.productUpdateBatch(param.productUpdateBatch,  options).toPromise();
    }

    /**
     * Add variant to product.
     * product.variant.add
     * @param param the request object
     */
    public productVariantAddWithHttpInfo(param: ProductApiProductVariantAddRequest, options?: Configuration): Promise<HttpInfo<ProductVariantAdd200Response>> {
        return this.api.productVariantAddWithHttpInfo(param.productVariantAdd,  options).toPromise();
    }

    /**
     * Add variant to product.
     * product.variant.add
     * @param param the request object
     */
    public productVariantAdd(param: ProductApiProductVariantAddRequest, options?: Configuration): Promise<ProductVariantAdd200Response> {
        return this.api.productVariantAdd(param.productVariantAdd,  options).toPromise();
    }

    /**
     * Add new product variants to the store.
     * product.variant.add.batch
     * @param param the request object
     */
    public productVariantAddBatchWithHttpInfo(param: ProductApiProductVariantAddBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.productVariantAddBatchWithHttpInfo(param.productVariantAddBatch,  options).toPromise();
    }

    /**
     * Add new product variants to the store.
     * product.variant.add.batch
     * @param param the request object
     */
    public productVariantAddBatch(param: ProductApiProductVariantAddBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.productVariantAddBatch(param.productVariantAddBatch,  options).toPromise();
    }

    /**
     * Delete variant.
     * product.variant.delete
     * @param param the request object
     */
    public productVariantDeleteWithHttpInfo(param: ProductApiProductVariantDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        return this.api.productVariantDeleteWithHttpInfo(param.id, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Delete variant.
     * product.variant.delete
     * @param param the request object
     */
    public productVariantDelete(param: ProductApiProductVariantDeleteRequest, options?: Configuration): Promise<AttributeValueDelete200Response> {
        return this.api.productVariantDelete(param.id, param.productId, param.storeId,  options).toPromise();
    }

    /**
     * Remove product variants from the store.
     * product.variant.delete.batch
     * @param param the request object
     */
    public productVariantDeleteBatchWithHttpInfo(param: ProductApiProductVariantDeleteBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.productVariantDeleteBatchWithHttpInfo(param.productVariantDeleteBatch,  options).toPromise();
    }

    /**
     * Remove product variants from the store.
     * product.variant.delete.batch
     * @param param the request object
     */
    public productVariantDeleteBatch(param: ProductApiProductVariantDeleteBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.productVariantDeleteBatch(param.productVariantDeleteBatch,  options).toPromise();
    }

    /**
     * Add image to product
     * product.variant.image.add
     * @param param the request object
     */
    public productVariantImageAddWithHttpInfo(param: ProductApiProductVariantImageAddRequest, options?: Configuration): Promise<HttpInfo<ProductVariantImageAdd200Response>> {
        return this.api.productVariantImageAddWithHttpInfo(param.productVariantImageAdd,  options).toPromise();
    }

    /**
     * Add image to product
     * product.variant.image.add
     * @param param the request object
     */
    public productVariantImageAdd(param: ProductApiProductVariantImageAddRequest, options?: Configuration): Promise<ProductVariantImageAdd200Response> {
        return this.api.productVariantImageAdd(param.productVariantImageAdd,  options).toPromise();
    }

    /**
     * Delete  image to product
     * product.variant.image.delete
     * @param param the request object
     */
    public productVariantImageDeleteWithHttpInfo(param: ProductApiProductVariantImageDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.productVariantImageDeleteWithHttpInfo(param.productId, param.productVariantId, param.id, param.storeId,  options).toPromise();
    }

    /**
     * Delete  image to product
     * product.variant.image.delete
     * @param param the request object
     */
    public productVariantImageDelete(param: ProductApiProductVariantImageDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.productVariantImageDelete(param.productId, param.productVariantId, param.id, param.storeId,  options).toPromise();
    }

    /**
     * Add some prices to the product variant.
     * product.variant.price.add
     * @param param the request object
     */
    public productVariantPriceAddWithHttpInfo(param: ProductApiProductVariantPriceAddRequest, options?: Configuration): Promise<HttpInfo<CartValidate200Response>> {
        return this.api.productVariantPriceAddWithHttpInfo(param.productVariantPriceAdd,  options).toPromise();
    }

    /**
     * Add some prices to the product variant.
     * product.variant.price.add
     * @param param the request object
     */
    public productVariantPriceAdd(param: ProductApiProductVariantPriceAddRequest, options?: Configuration): Promise<CartValidate200Response> {
        return this.api.productVariantPriceAdd(param.productVariantPriceAdd,  options).toPromise();
    }

    /**
     * Delete some prices of the product variant.
     * product.variant.price.delete
     * @param param the request object
     */
    public productVariantPriceDeleteWithHttpInfo(param: ProductApiProductVariantPriceDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.productVariantPriceDeleteWithHttpInfo(param.id, param.productId, param.groupPrices, param.storeId,  options).toPromise();
    }

    /**
     * Delete some prices of the product variant.
     * product.variant.price.delete
     * @param param the request object
     */
    public productVariantPriceDelete(param: ProductApiProductVariantPriceDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.productVariantPriceDelete(param.id, param.productId, param.groupPrices, param.storeId,  options).toPromise();
    }

    /**
     * Update some prices of the product variant.
     * product.variant.price.update
     * @param param the request object
     */
    public productVariantPriceUpdateWithHttpInfo(param: ProductApiProductVariantPriceUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.productVariantPriceUpdateWithHttpInfo(param.productVariantPriceUpdate,  options).toPromise();
    }

    /**
     * Update some prices of the product variant.
     * product.variant.price.update
     * @param param the request object
     */
    public productVariantPriceUpdate(param: ProductApiProductVariantPriceUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.productVariantPriceUpdate(param.productVariantPriceUpdate,  options).toPromise();
    }

    /**
     * Update variant.
     * product.variant.update
     * @param param the request object
     */
    public productVariantUpdateWithHttpInfo(param: ProductApiProductVariantUpdateRequest, options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        return this.api.productVariantUpdateWithHttpInfo(param.productVariantUpdate,  options).toPromise();
    }

    /**
     * Update variant.
     * product.variant.update
     * @param param the request object
     */
    public productVariantUpdate(param: ProductApiProductVariantUpdateRequest, options?: Configuration): Promise<AccountConfigUpdate200Response> {
        return this.api.productVariantUpdate(param.productVariantUpdate,  options).toPromise();
    }

    /**
     * Update products variants on the store.
     * product.variant.update.batch
     * @param param the request object
     */
    public productVariantUpdateBatchWithHttpInfo(param: ProductApiProductVariantUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        return this.api.productVariantUpdateBatchWithHttpInfo(param.productVariantUpdateBatch,  options).toPromise();
    }

    /**
     * Update products variants on the store.
     * product.variant.update.batch
     * @param param the request object
     */
    public productVariantUpdateBatch(param: ProductApiProductVariantUpdateBatchRequest, options?: Configuration): Promise<CategoryAddBatch200Response> {
        return this.api.productVariantUpdateBatch(param.productVariantUpdateBatch,  options).toPromise();
    }

}

import { ObservableReturnApi } from "./ObservableAPI";
import { ReturnApiRequestFactory, ReturnApiResponseProcessor} from "../apis/ReturnApi";

export interface ReturnApiReturnActionListRequest {
}

export interface ReturnApiReturnCountRequest {
    /**
     * Counts return requests specified by order ids
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    orderIds?: string
    /**
     * Counts return requests quantity specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    customerId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    storeId?: string
    /**
     * Defines status
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    status?: string
    /**
     * Retrieves returns specified by return type
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    returnType?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    modifiedTo?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnCount
     */
    reportRequestId?: string
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof ReturnApireturnCount
     */
    disableReportCache?: boolean
}

export interface ReturnApiReturnInfoRequest {
    /**
     * Entity id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnInfo
     */
    id: string
    /**
     * Defines the order id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnInfo
     */
    orderId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnInfo
     */
    storeId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,order_products&#39;
     * @type string
     * @memberof ReturnApireturnInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnInfo
     */
    exclude?: string
}

export interface ReturnApiReturnListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof ReturnApireturnList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof ReturnApireturnList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    pageCursor?: string
    /**
     * Defines the order id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    orderId?: string
    /**
     * Retrieves return requests specified by order ids
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    orderIds?: string
    /**
     * Retrieves return requests specified by customer id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    customerId?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    storeId?: string
    /**
     * Defines status
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    status?: string
    /**
     * Retrieves returns specified by return type
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    returnType?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    modifiedTo?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,order_products&#39;
     * @type string
     * @memberof ReturnApireturnList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    exclude?: string
    /**
     * Report request id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnList
     */
    reportRequestId?: string
    /**
     * Disable report cache for current request
     * Defaults to: false
     * @type boolean
     * @memberof ReturnApireturnList
     */
    disableReportCache?: boolean
}

export interface ReturnApiReturnReasonListRequest {
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof ReturnApireturnReasonList
     */
    storeId?: string
}

export interface ReturnApiReturnStatusListRequest {
}

export class ObjectReturnApi {
    private api: ObservableReturnApi

    public constructor(configuration: Configuration, requestFactory?: ReturnApiRequestFactory, responseProcessor?: ReturnApiResponseProcessor) {
        this.api = new ObservableReturnApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve list of return actions
     * return.action.list
     * @param param the request object
     */
    public returnActionListWithHttpInfo(param: ReturnApiReturnActionListRequest = {}, options?: Configuration): Promise<HttpInfo<ReturnActionList200Response>> {
        return this.api.returnActionListWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve list of return actions
     * return.action.list
     * @param param the request object
     */
    public returnActionList(param: ReturnApiReturnActionListRequest = {}, options?: Configuration): Promise<ReturnActionList200Response> {
        return this.api.returnActionList( options).toPromise();
    }

    /**
     * Count returns in store
     * return.count
     * @param param the request object
     */
    public returnCountWithHttpInfo(param: ReturnApiReturnCountRequest = {}, options?: Configuration): Promise<HttpInfo<ReturnCount200Response>> {
        return this.api.returnCountWithHttpInfo(param.orderIds, param.customerId, param.storeId, param.status, param.returnType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Count returns in store
     * return.count
     * @param param the request object
     */
    public returnCount(param: ReturnApiReturnCountRequest = {}, options?: Configuration): Promise<ReturnCount200Response> {
        return this.api.returnCount(param.orderIds, param.customerId, param.storeId, param.status, param.returnType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Retrieve return information.
     * return.info
     * @param param the request object
     */
    public returnInfoWithHttpInfo(param: ReturnApiReturnInfoRequest, options?: Configuration): Promise<HttpInfo<ReturnInfo200Response>> {
        return this.api.returnInfoWithHttpInfo(param.id, param.orderId, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Retrieve return information.
     * return.info
     * @param param the request object
     */
    public returnInfo(param: ReturnApiReturnInfoRequest, options?: Configuration): Promise<ReturnInfo200Response> {
        return this.api.returnInfo(param.id, param.orderId, param.storeId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of return requests from store.
     * return.list
     * @param param the request object
     */
    public returnListWithHttpInfo(param: ReturnApiReturnListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseReturnList>> {
        return this.api.returnListWithHttpInfo(param.start, param.count, param.pageCursor, param.orderId, param.orderIds, param.customerId, param.storeId, param.status, param.returnType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Get list of return requests from store.
     * return.list
     * @param param the request object
     */
    public returnList(param: ReturnApiReturnListRequest = {}, options?: Configuration): Promise<ModelResponseReturnList> {
        return this.api.returnList(param.start, param.count, param.pageCursor, param.orderId, param.orderIds, param.customerId, param.storeId, param.status, param.returnType, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude, param.reportRequestId, param.disableReportCache,  options).toPromise();
    }

    /**
     * Retrieve list of return reasons
     * return.reason.list
     * @param param the request object
     */
    public returnReasonListWithHttpInfo(param: ReturnApiReturnReasonListRequest = {}, options?: Configuration): Promise<HttpInfo<ReturnReasonList200Response>> {
        return this.api.returnReasonListWithHttpInfo(param.storeId,  options).toPromise();
    }

    /**
     * Retrieve list of return reasons
     * return.reason.list
     * @param param the request object
     */
    public returnReasonList(param: ReturnApiReturnReasonListRequest = {}, options?: Configuration): Promise<ReturnReasonList200Response> {
        return this.api.returnReasonList(param.storeId,  options).toPromise();
    }

    /**
     * Retrieve list of statuses
     * return.status.list
     * @param param the request object
     */
    public returnStatusListWithHttpInfo(param: ReturnApiReturnStatusListRequest = {}, options?: Configuration): Promise<HttpInfo<ReturnStatusList200Response>> {
        return this.api.returnStatusListWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve list of statuses
     * return.status.list
     * @param param the request object
     */
    public returnStatusList(param: ReturnApiReturnStatusListRequest = {}, options?: Configuration): Promise<ReturnStatusList200Response> {
        return this.api.returnStatusList( options).toPromise();
    }

}

import { ObservableSubscriberApi } from "./ObservableAPI";
import { SubscriberApiRequestFactory, SubscriberApiResponseProcessor} from "../apis/SubscriberApi";

export interface SubscriberApiSubscriberListRequest {
    /**
     * Retrieves subscribers specified by ids
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    ids?: string
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof SubscriberApisubscriberList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof SubscriberApisubscriberList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    pageCursor?: string
    /**
     * Filter by subscription status
     * Defaults to: undefined
     * @type boolean
     * @memberof SubscriberApisubscriberList
     */
    subscribed?: boolean
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    storeId?: string
    /**
     * Filter subscribers by email
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    email?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    createdTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    modifiedFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    modifiedTo?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberApisubscriberList
     */
    exclude?: string
}

export class ObjectSubscriberApi {
    private api: ObservableSubscriberApi

    public constructor(configuration: Configuration, requestFactory?: SubscriberApiRequestFactory, responseProcessor?: SubscriberApiResponseProcessor) {
        this.api = new ObservableSubscriberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get subscribers list
     * subscriber.list
     * @param param the request object
     */
    public subscriberListWithHttpInfo(param: SubscriberApiSubscriberListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseSubscriberList>> {
        return this.api.subscriberListWithHttpInfo(param.ids, param.start, param.count, param.pageCursor, param.subscribed, param.storeId, param.email, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get subscribers list
     * subscriber.list
     * @param param the request object
     */
    public subscriberList(param: SubscriberApiSubscriberListRequest = {}, options?: Configuration): Promise<ModelResponseSubscriberList> {
        return this.api.subscriberList(param.ids, param.start, param.count, param.pageCursor, param.subscribed, param.storeId, param.email, param.createdFrom, param.createdTo, param.modifiedFrom, param.modifiedTo, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

}

import { ObservableTaxApi } from "./ObservableAPI";
import { TaxApiRequestFactory, TaxApiResponseProcessor} from "../apis/TaxApi";

export interface TaxApiTaxClassInfoRequest {
    /**
     * Retrieves taxes specified by class id
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassInfo
     */
    taxClassId: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassInfo
     */
    storeId?: string
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassInfo
     */
    langId?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassInfo
     */
    responseFields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;tax_class_id,name,avail&#39;
     * @type string
     * @memberof TaxApitaxClassInfo
     */
    params?: string
    /**
     * Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassInfo
     */
    exclude?: string
}

export interface TaxApiTaxClassListRequest {
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof TaxApitaxClassList
     */
    count?: number
    /**
     * Used to retrieve entities via cursor-based pagination (it can\&#39;t be used with any other filtering parameter)
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    pageCursor?: string
    /**
     * Store Id
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    storeId?: string
    /**
     * Entity search that is specified by some value
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    findValue?: string
    /**
     * Tax class search that is specified by field
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    findWhere?: string
    /**
     * Retrieve entities to their creation date
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    createdTo?: string
    /**
     * Retrieve entities from their creation date
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    createdFrom?: string
    /**
     * Retrieve entities to their modification date
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    modifiedTo?: string
    /**
     * Retrieve entities from their modification date
     * Defaults to: undefined
     * @type string
     * @memberof TaxApitaxClassList
     */
    modifiedFrom?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;{return_code,return_message,pagination,result}&#39;
     * @type string
     * @memberof TaxApitaxClassList
     */
    responseFields?: string
}

export class ObjectTaxApi {
    private api: ObservableTaxApi

    public constructor(configuration: Configuration, requestFactory?: TaxApiRequestFactory, responseProcessor?: TaxApiResponseProcessor) {
        this.api = new ObservableTaxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this method to get information about a tax class and its rates. It allows you to calculate the tax percentage for a specific customer\'s address. This information contains relatively static data that rarely changes, so API2Cart may cache certain data to reduce the load on the store and speed up request execution. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, use the cart.validate method.
     * tax.class.info
     * @param param the request object
     */
    public taxClassInfoWithHttpInfo(param: TaxApiTaxClassInfoRequest, options?: Configuration): Promise<HttpInfo<ModelResponseTaxClassInfo>> {
        return this.api.taxClassInfoWithHttpInfo(param.taxClassId, param.storeId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Use this method to get information about a tax class and its rates. It allows you to calculate the tax percentage for a specific customer\'s address. This information contains relatively static data that rarely changes, so API2Cart may cache certain data to reduce the load on the store and speed up request execution. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, use the cart.validate method.
     * tax.class.info
     * @param param the request object
     */
    public taxClassInfo(param: TaxApiTaxClassInfoRequest, options?: Configuration): Promise<ModelResponseTaxClassInfo> {
        return this.api.taxClassInfo(param.taxClassId, param.storeId, param.langId, param.responseFields, param.params, param.exclude,  options).toPromise();
    }

    /**
     * Get list of tax classes from your store.
     * tax.class.list
     * @param param the request object
     */
    public taxClassListWithHttpInfo(param: TaxApiTaxClassListRequest = {}, options?: Configuration): Promise<HttpInfo<ModelResponseTaxClassList>> {
        return this.api.taxClassListWithHttpInfo(param.count, param.pageCursor, param.storeId, param.findValue, param.findWhere, param.createdTo, param.createdFrom, param.modifiedTo, param.modifiedFrom, param.responseFields,  options).toPromise();
    }

    /**
     * Get list of tax classes from your store.
     * tax.class.list
     * @param param the request object
     */
    public taxClassList(param: TaxApiTaxClassListRequest = {}, options?: Configuration): Promise<ModelResponseTaxClassList> {
        return this.api.taxClassList(param.count, param.pageCursor, param.storeId, param.findValue, param.findWhere, param.createdTo, param.createdFrom, param.modifiedTo, param.modifiedFrom, param.responseFields,  options).toPromise();
    }

}

import { ObservableWebhookApi } from "./ObservableAPI";
import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";

export interface WebhookApiWebhookCountRequest {
    /**
     * The entity you want to filter webhooks by (e.g. order or product)
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCount
     */
    entity?: string
    /**
     * The action you want to filter webhooks by (e.g. order or product)
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCount
     */
    action?: string
    /**
     * The webhook status you want to filter webhooks by
     * Defaults to: undefined
     * @type boolean
     * @memberof WebhookApiwebhookCount
     */
    active?: boolean
}

export interface WebhookApiWebhookCreateRequest {
    /**
     * Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    entity: string
    /**
     * Specify what action (event) will trigger the webhook (e.g add, delete, or update)
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    action: string
    /**
     * Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    callback?: string
    /**
     * The name you give to the webhook
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    label?: string
    /**
     * Fields the webhook should send
     * Defaults to: &#39;force_all&#39;
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    fields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    responseFields?: string
    /**
     * Webhook status
     * Defaults to: true
     * @type boolean
     * @memberof WebhookApiwebhookCreate
     */
    active?: boolean
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    langId?: string
    /**
     * Defines store id where the webhook should be assigned
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookCreate
     */
    storeId?: string
}

export interface WebhookApiWebhookDeleteRequest {
    /**
     * Webhook id
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookDelete
     */
    id: string
}

export interface WebhookApiWebhookEventsRequest {
}

export interface WebhookApiWebhookListRequest {
    /**
     * This parameter sets the number from which you want to get entities
     * Defaults to: 0
     * @type number
     * @memberof WebhookApiwebhookList
     */
    start?: number
    /**
     * This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * Defaults to: 10
     * @type number
     * @memberof WebhookApiwebhookList
     */
    count?: number
    /**
     * The entity you want to filter webhooks by (e.g. order or product)
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookList
     */
    entity?: string
    /**
     * The action you want to filter webhooks by (e.g. add, update, or delete)
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookList
     */
    action?: string
    /**
     * The webhook status you want to filter webhooks by
     * Defaults to: undefined
     * @type boolean
     * @memberof WebhookApiwebhookList
     */
    active?: boolean
    /**
     * List of сomma-separated webhook ids
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookList
     */
    ids?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: &#39;id,entity,action,callback&#39;
     * @type string
     * @memberof WebhookApiwebhookList
     */
    params?: string
}

export interface WebhookApiWebhookUpdateRequest {
    /**
     * Webhook id
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookUpdate
     */
    id: string
    /**
     * Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookUpdate
     */
    callback?: string
    /**
     * The name you give to the webhook
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookUpdate
     */
    label?: string
    /**
     * Fields the webhook should send
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookUpdate
     */
    fields?: string
    /**
     * Set this parameter in order to choose which entity fields you want to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookUpdate
     */
    responseFields?: string
    /**
     * Webhook status
     * Defaults to: undefined
     * @type boolean
     * @memberof WebhookApiwebhookUpdate
     */
    active?: boolean
    /**
     * Language id
     * Defaults to: undefined
     * @type string
     * @memberof WebhookApiwebhookUpdate
     */
    langId?: string
}

export class ObjectWebhookApi {
    private api: ObservableWebhookApi

    public constructor(configuration: Configuration, requestFactory?: WebhookApiRequestFactory, responseProcessor?: WebhookApiResponseProcessor) {
        this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count registered webhooks on the store.
     * webhook.count
     * @param param the request object
     */
    public webhookCountWithHttpInfo(param: WebhookApiWebhookCountRequest = {}, options?: Configuration): Promise<HttpInfo<WebhookCount200Response>> {
        return this.api.webhookCountWithHttpInfo(param.entity, param.action, param.active,  options).toPromise();
    }

    /**
     * Count registered webhooks on the store.
     * webhook.count
     * @param param the request object
     */
    public webhookCount(param: WebhookApiWebhookCountRequest = {}, options?: Configuration): Promise<WebhookCount200Response> {
        return this.api.webhookCount(param.entity, param.action, param.active,  options).toPromise();
    }

    /**
     * Create webhook on the store and subscribe to it.
     * webhook.create
     * @param param the request object
     */
    public webhookCreateWithHttpInfo(param: WebhookApiWebhookCreateRequest, options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceCreate200Response>> {
        return this.api.webhookCreateWithHttpInfo(param.entity, param.action, param.callback, param.label, param.fields, param.responseFields, param.active, param.langId, param.storeId,  options).toPromise();
    }

    /**
     * Create webhook on the store and subscribe to it.
     * webhook.create
     * @param param the request object
     */
    public webhookCreate(param: WebhookApiWebhookCreateRequest, options?: Configuration): Promise<BasketLiveShippingServiceCreate200Response> {
        return this.api.webhookCreate(param.entity, param.action, param.callback, param.label, param.fields, param.responseFields, param.active, param.langId, param.storeId,  options).toPromise();
    }

    /**
     * Delete registered webhook on the store.
     * webhook.delete
     * @param param the request object
     */
    public webhookDeleteWithHttpInfo(param: WebhookApiWebhookDeleteRequest, options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        return this.api.webhookDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete registered webhook on the store.
     * webhook.delete
     * @param param the request object
     */
    public webhookDelete(param: WebhookApiWebhookDeleteRequest, options?: Configuration): Promise<AttributeDelete200Response> {
        return this.api.webhookDelete(param.id,  options).toPromise();
    }

    /**
     * List all Webhooks that are available on this store.
     * webhook.events
     * @param param the request object
     */
    public webhookEventsWithHttpInfo(param: WebhookApiWebhookEventsRequest = {}, options?: Configuration): Promise<HttpInfo<WebhookEvents200Response>> {
        return this.api.webhookEventsWithHttpInfo( options).toPromise();
    }

    /**
     * List all Webhooks that are available on this store.
     * webhook.events
     * @param param the request object
     */
    public webhookEvents(param: WebhookApiWebhookEventsRequest = {}, options?: Configuration): Promise<WebhookEvents200Response> {
        return this.api.webhookEvents( options).toPromise();
    }

    /**
     * List registered webhook on the store.
     * webhook.list
     * @param param the request object
     */
    public webhookListWithHttpInfo(param: WebhookApiWebhookListRequest = {}, options?: Configuration): Promise<HttpInfo<WebhookList200Response>> {
        return this.api.webhookListWithHttpInfo(param.start, param.count, param.entity, param.action, param.active, param.ids, param.params,  options).toPromise();
    }

    /**
     * List registered webhook on the store.
     * webhook.list
     * @param param the request object
     */
    public webhookList(param: WebhookApiWebhookListRequest = {}, options?: Configuration): Promise<WebhookList200Response> {
        return this.api.webhookList(param.start, param.count, param.entity, param.action, param.active, param.ids, param.params,  options).toPromise();
    }

    /**
     * Update Webhooks parameters.
     * webhook.update
     * @param param the request object
     */
    public webhookUpdateWithHttpInfo(param: WebhookApiWebhookUpdateRequest, options?: Configuration): Promise<HttpInfo<ProductImageUpdate200Response>> {
        return this.api.webhookUpdateWithHttpInfo(param.id, param.callback, param.label, param.fields, param.responseFields, param.active, param.langId,  options).toPromise();
    }

    /**
     * Update Webhooks parameters.
     * webhook.update
     * @param param the request object
     */
    public webhookUpdate(param: WebhookApiWebhookUpdateRequest, options?: Configuration): Promise<ProductImageUpdate200Response> {
        return this.api.webhookUpdate(param.id, param.callback, param.label, param.fields, param.responseFields, param.active, param.langId,  options).toPromise();
    }

}
