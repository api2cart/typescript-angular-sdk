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
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.
     * account.cart.add
     * @param accountCartAdd
     */
    public accountCartAddWithHttpInfo(accountCartAdd: AccountCartAdd, _options?: Configuration): Promise<HttpInfo<AccountCartAdd200Response>> {
        const result = this.api.accountCartAddWithHttpInfo(accountCartAdd, _options);
        return result.toPromise();
    }

    /**
     * Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.
     * account.cart.add
     * @param accountCartAdd
     */
    public accountCartAdd(accountCartAdd: AccountCartAdd, _options?: Configuration): Promise<AccountCartAdd200Response> {
        const result = this.api.accountCartAdd(accountCartAdd, _options);
        return result.toPromise();
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
    public accountCartListWithHttpInfo(storeUrl?: string, storeKey?: string, requestFromDate?: string, requestToDate?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<AccountCartList200Response>> {
        const result = this.api.accountCartListWithHttpInfo(storeUrl, storeKey, requestFromDate, requestToDate, params, exclude, _options);
        return result.toPromise();
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
    public accountCartList(storeUrl?: string, storeKey?: string, requestFromDate?: string, requestToDate?: string, params?: string, exclude?: string, _options?: Configuration): Promise<AccountCartList200Response> {
        const result = this.api.accountCartList(storeUrl, storeKey, requestFromDate, requestToDate, params, exclude, _options);
        return result.toPromise();
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
    public accountConfigUpdateWithHttpInfo(replaceParameters?: boolean, newStoreUrl?: string, newStoreKey?: string, bridgeUrl?: string, storeRoot?: string, dbTablesPrefix?: string, userAgent?: string, _3dcartPrivateKey?: string, _3dcartAccessToken?: string, _3dcartapiApiKey?: string, amazonSpClientId?: string, amazonSpClientSecret?: string, amazonSpRefreshToken?: string, amazonSpAwsRegion?: string, amazonSpApiEnvironment?: string, amazonSellerId?: string, aspdotnetstorefrontApiUser?: string, aspdotnetstorefrontApiPass?: string, bigcommerceapiAdminAccount?: string, bigcommerceapiApiPath?: string, bigcommerceapiApiKey?: string, bigcommerceapiClientId?: string, bigcommerceapiAccessToken?: string, bigcommerceapiContext?: string, bolApiKey?: string, bolApiSecret?: string, bolRetailerId?: number, demandwareClientId?: string, demandwareApiPassword?: string, demandwareUserName?: string, demandwareUserPassword?: string, ebayClientId?: string, ebayClientSecret?: string, ebayRuname?: string, ebayAccessToken?: string, ebayRefreshToken?: string, ebayEnvironment?: string, ebaySiteId?: number, ecwidAcessToken?: string, ecwidStoreId?: string, lazadaAppId?: string, lazadaAppSecret?: string, lazadaRefreshToken?: string, lazadaRegion?: string, etsyKeystring?: string, etsySharedSecret?: string, etsyAccessToken?: string, etsyTokenSecret?: string, etsyClientId?: string, etsyRefreshToken?: string, facebookAppId?: string, facebookAppSecret?: string, facebookAccessToken?: string, facebookBusinessId?: string, netoApiKey?: string, netoApiUsername?: string, shoplineAccessToken?: string, shoplineAppKey?: string, shoplineAppSecret?: string, shoplineSharedSecret?: string, shopifyAccessToken?: string, shopifyApiKey?: string, shopifyApiPassword?: string, shopifySharedSecret?: string, shopeePartnerId?: string, shopeePartnerKey?: string, shopeeShopId?: string, shopeeRefreshToken?: string, shopeeRegion?: string, shopeeEnvironment?: string, shoplazzaAccessToken?: string, shoplazzaSharedSecret?: string, mivaAccessToken?: string, mivaSignature?: string, shopwareAccessKey?: string, unasApiKey?: string, shopwareApiKey?: string, shopwareApiSecret?: string, bigcartelUserName?: string, bigcartelPassword?: string, bricklinkConsumerKey?: string, bricklinkConsumerSecret?: string, bricklinkToken?: string, bricklinkTokenSecret?: string, volusionLogin?: string, volusionPassword?: string, walmartClientId?: string, walmartClientSecret?: string, walmartEnvironment?: string, walmartChannelType?: string, walmartRegion?: string, squareClientId?: string, squareClientSecret?: string, squareRefreshToken?: string, squarespaceApiKey?: string, squarespaceClientId?: string, squarespaceClientSecret?: string, squarespaceAccessToken?: string, squarespaceRefreshToken?: string, hybrisClientId?: string, hybrisClientSecret?: string, hybrisUsername?: string, hybrisPassword?: string, hybrisWebsites?: Array<string>, lightspeedApiKey?: string, lightspeedApiSecret?: string, commercehqApiKey?: string, commercehqApiPassword?: string, wcConsumerKey?: string, wcConsumerSecret?: string, magentoConsumerKey?: string, magentoConsumerSecret?: string, magentoAccessToken?: string, magentoTokenSecret?: string, prestashopWebserviceKey?: string, wixAppId?: string, wixAppSecretKey?: string, wixInstanceId?: string, wixRefreshToken?: string, mercadoLibreAppId?: string, mercadoLibreAppSecretKey?: string, mercadoLibreRefreshToken?: string, zidClientId?: number, zidClientSecret?: string, zidAccessToken?: string, zidAuthorization?: string, zidRefreshToken?: string, flipkartClientId?: string, flipkartClientSecret?: string, allegroClientId?: string, allegroClientSecret?: string, allegroAccessToken?: string, allegroRefreshToken?: string, allegroEnvironment?: string, zohoClientId?: string, zohoClientSecret?: string, zohoRefreshToken?: string, zohoRegion?: string, tiendanubeUserId?: number, tiendanubeAccessToken?: string, tiendanubeClientSecret?: string, ottoClientId?: string, ottoClientSecret?: string, ottoAppId?: string, ottoRefreshToken?: string, ottoEnvironment?: string, ottoAccessToken?: string, tiktokshopAppKey?: string, tiktokshopAppSecret?: string, tiktokshopRefreshToken?: string, tiktokshopAccessToken?: string, sallaClientId?: string, sallaClientSecret?: string, sallaRefreshToken?: string, sallaAccessToken?: string, temuAppKey?: string, temuAppSecret?: string, temuAccessToken?: string, temuRegion?: string, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.accountConfigUpdateWithHttpInfo(replaceParameters, newStoreUrl, newStoreKey, bridgeUrl, storeRoot, dbTablesPrefix, userAgent, _3dcartPrivateKey, _3dcartAccessToken, _3dcartapiApiKey, amazonSpClientId, amazonSpClientSecret, amazonSpRefreshToken, amazonSpAwsRegion, amazonSpApiEnvironment, amazonSellerId, aspdotnetstorefrontApiUser, aspdotnetstorefrontApiPass, bigcommerceapiAdminAccount, bigcommerceapiApiPath, bigcommerceapiApiKey, bigcommerceapiClientId, bigcommerceapiAccessToken, bigcommerceapiContext, bolApiKey, bolApiSecret, bolRetailerId, demandwareClientId, demandwareApiPassword, demandwareUserName, demandwareUserPassword, ebayClientId, ebayClientSecret, ebayRuname, ebayAccessToken, ebayRefreshToken, ebayEnvironment, ebaySiteId, ecwidAcessToken, ecwidStoreId, lazadaAppId, lazadaAppSecret, lazadaRefreshToken, lazadaRegion, etsyKeystring, etsySharedSecret, etsyAccessToken, etsyTokenSecret, etsyClientId, etsyRefreshToken, facebookAppId, facebookAppSecret, facebookAccessToken, facebookBusinessId, netoApiKey, netoApiUsername, shoplineAccessToken, shoplineAppKey, shoplineAppSecret, shoplineSharedSecret, shopifyAccessToken, shopifyApiKey, shopifyApiPassword, shopifySharedSecret, shopeePartnerId, shopeePartnerKey, shopeeShopId, shopeeRefreshToken, shopeeRegion, shopeeEnvironment, shoplazzaAccessToken, shoplazzaSharedSecret, mivaAccessToken, mivaSignature, shopwareAccessKey, unasApiKey, shopwareApiKey, shopwareApiSecret, bigcartelUserName, bigcartelPassword, bricklinkConsumerKey, bricklinkConsumerSecret, bricklinkToken, bricklinkTokenSecret, volusionLogin, volusionPassword, walmartClientId, walmartClientSecret, walmartEnvironment, walmartChannelType, walmartRegion, squareClientId, squareClientSecret, squareRefreshToken, squarespaceApiKey, squarespaceClientId, squarespaceClientSecret, squarespaceAccessToken, squarespaceRefreshToken, hybrisClientId, hybrisClientSecret, hybrisUsername, hybrisPassword, hybrisWebsites, lightspeedApiKey, lightspeedApiSecret, commercehqApiKey, commercehqApiPassword, wcConsumerKey, wcConsumerSecret, magentoConsumerKey, magentoConsumerSecret, magentoAccessToken, magentoTokenSecret, prestashopWebserviceKey, wixAppId, wixAppSecretKey, wixInstanceId, wixRefreshToken, mercadoLibreAppId, mercadoLibreAppSecretKey, mercadoLibreRefreshToken, zidClientId, zidClientSecret, zidAccessToken, zidAuthorization, zidRefreshToken, flipkartClientId, flipkartClientSecret, allegroClientId, allegroClientSecret, allegroAccessToken, allegroRefreshToken, allegroEnvironment, zohoClientId, zohoClientSecret, zohoRefreshToken, zohoRegion, tiendanubeUserId, tiendanubeAccessToken, tiendanubeClientSecret, ottoClientId, ottoClientSecret, ottoAppId, ottoRefreshToken, ottoEnvironment, ottoAccessToken, tiktokshopAppKey, tiktokshopAppSecret, tiktokshopRefreshToken, tiktokshopAccessToken, sallaClientId, sallaClientSecret, sallaRefreshToken, sallaAccessToken, temuAppKey, temuAppSecret, temuAccessToken, temuRegion, _options);
        return result.toPromise();
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
    public accountConfigUpdate(replaceParameters?: boolean, newStoreUrl?: string, newStoreKey?: string, bridgeUrl?: string, storeRoot?: string, dbTablesPrefix?: string, userAgent?: string, _3dcartPrivateKey?: string, _3dcartAccessToken?: string, _3dcartapiApiKey?: string, amazonSpClientId?: string, amazonSpClientSecret?: string, amazonSpRefreshToken?: string, amazonSpAwsRegion?: string, amazonSpApiEnvironment?: string, amazonSellerId?: string, aspdotnetstorefrontApiUser?: string, aspdotnetstorefrontApiPass?: string, bigcommerceapiAdminAccount?: string, bigcommerceapiApiPath?: string, bigcommerceapiApiKey?: string, bigcommerceapiClientId?: string, bigcommerceapiAccessToken?: string, bigcommerceapiContext?: string, bolApiKey?: string, bolApiSecret?: string, bolRetailerId?: number, demandwareClientId?: string, demandwareApiPassword?: string, demandwareUserName?: string, demandwareUserPassword?: string, ebayClientId?: string, ebayClientSecret?: string, ebayRuname?: string, ebayAccessToken?: string, ebayRefreshToken?: string, ebayEnvironment?: string, ebaySiteId?: number, ecwidAcessToken?: string, ecwidStoreId?: string, lazadaAppId?: string, lazadaAppSecret?: string, lazadaRefreshToken?: string, lazadaRegion?: string, etsyKeystring?: string, etsySharedSecret?: string, etsyAccessToken?: string, etsyTokenSecret?: string, etsyClientId?: string, etsyRefreshToken?: string, facebookAppId?: string, facebookAppSecret?: string, facebookAccessToken?: string, facebookBusinessId?: string, netoApiKey?: string, netoApiUsername?: string, shoplineAccessToken?: string, shoplineAppKey?: string, shoplineAppSecret?: string, shoplineSharedSecret?: string, shopifyAccessToken?: string, shopifyApiKey?: string, shopifyApiPassword?: string, shopifySharedSecret?: string, shopeePartnerId?: string, shopeePartnerKey?: string, shopeeShopId?: string, shopeeRefreshToken?: string, shopeeRegion?: string, shopeeEnvironment?: string, shoplazzaAccessToken?: string, shoplazzaSharedSecret?: string, mivaAccessToken?: string, mivaSignature?: string, shopwareAccessKey?: string, unasApiKey?: string, shopwareApiKey?: string, shopwareApiSecret?: string, bigcartelUserName?: string, bigcartelPassword?: string, bricklinkConsumerKey?: string, bricklinkConsumerSecret?: string, bricklinkToken?: string, bricklinkTokenSecret?: string, volusionLogin?: string, volusionPassword?: string, walmartClientId?: string, walmartClientSecret?: string, walmartEnvironment?: string, walmartChannelType?: string, walmartRegion?: string, squareClientId?: string, squareClientSecret?: string, squareRefreshToken?: string, squarespaceApiKey?: string, squarespaceClientId?: string, squarespaceClientSecret?: string, squarespaceAccessToken?: string, squarespaceRefreshToken?: string, hybrisClientId?: string, hybrisClientSecret?: string, hybrisUsername?: string, hybrisPassword?: string, hybrisWebsites?: Array<string>, lightspeedApiKey?: string, lightspeedApiSecret?: string, commercehqApiKey?: string, commercehqApiPassword?: string, wcConsumerKey?: string, wcConsumerSecret?: string, magentoConsumerKey?: string, magentoConsumerSecret?: string, magentoAccessToken?: string, magentoTokenSecret?: string, prestashopWebserviceKey?: string, wixAppId?: string, wixAppSecretKey?: string, wixInstanceId?: string, wixRefreshToken?: string, mercadoLibreAppId?: string, mercadoLibreAppSecretKey?: string, mercadoLibreRefreshToken?: string, zidClientId?: number, zidClientSecret?: string, zidAccessToken?: string, zidAuthorization?: string, zidRefreshToken?: string, flipkartClientId?: string, flipkartClientSecret?: string, allegroClientId?: string, allegroClientSecret?: string, allegroAccessToken?: string, allegroRefreshToken?: string, allegroEnvironment?: string, zohoClientId?: string, zohoClientSecret?: string, zohoRefreshToken?: string, zohoRegion?: string, tiendanubeUserId?: number, tiendanubeAccessToken?: string, tiendanubeClientSecret?: string, ottoClientId?: string, ottoClientSecret?: string, ottoAppId?: string, ottoRefreshToken?: string, ottoEnvironment?: string, ottoAccessToken?: string, tiktokshopAppKey?: string, tiktokshopAppSecret?: string, tiktokshopRefreshToken?: string, tiktokshopAccessToken?: string, sallaClientId?: string, sallaClientSecret?: string, sallaRefreshToken?: string, sallaAccessToken?: string, temuAppKey?: string, temuAppSecret?: string, temuAccessToken?: string, temuRegion?: string, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.accountConfigUpdate(replaceParameters, newStoreUrl, newStoreKey, bridgeUrl, storeRoot, dbTablesPrefix, userAgent, _3dcartPrivateKey, _3dcartAccessToken, _3dcartapiApiKey, amazonSpClientId, amazonSpClientSecret, amazonSpRefreshToken, amazonSpAwsRegion, amazonSpApiEnvironment, amazonSellerId, aspdotnetstorefrontApiUser, aspdotnetstorefrontApiPass, bigcommerceapiAdminAccount, bigcommerceapiApiPath, bigcommerceapiApiKey, bigcommerceapiClientId, bigcommerceapiAccessToken, bigcommerceapiContext, bolApiKey, bolApiSecret, bolRetailerId, demandwareClientId, demandwareApiPassword, demandwareUserName, demandwareUserPassword, ebayClientId, ebayClientSecret, ebayRuname, ebayAccessToken, ebayRefreshToken, ebayEnvironment, ebaySiteId, ecwidAcessToken, ecwidStoreId, lazadaAppId, lazadaAppSecret, lazadaRefreshToken, lazadaRegion, etsyKeystring, etsySharedSecret, etsyAccessToken, etsyTokenSecret, etsyClientId, etsyRefreshToken, facebookAppId, facebookAppSecret, facebookAccessToken, facebookBusinessId, netoApiKey, netoApiUsername, shoplineAccessToken, shoplineAppKey, shoplineAppSecret, shoplineSharedSecret, shopifyAccessToken, shopifyApiKey, shopifyApiPassword, shopifySharedSecret, shopeePartnerId, shopeePartnerKey, shopeeShopId, shopeeRefreshToken, shopeeRegion, shopeeEnvironment, shoplazzaAccessToken, shoplazzaSharedSecret, mivaAccessToken, mivaSignature, shopwareAccessKey, unasApiKey, shopwareApiKey, shopwareApiSecret, bigcartelUserName, bigcartelPassword, bricklinkConsumerKey, bricklinkConsumerSecret, bricklinkToken, bricklinkTokenSecret, volusionLogin, volusionPassword, walmartClientId, walmartClientSecret, walmartEnvironment, walmartChannelType, walmartRegion, squareClientId, squareClientSecret, squareRefreshToken, squarespaceApiKey, squarespaceClientId, squarespaceClientSecret, squarespaceAccessToken, squarespaceRefreshToken, hybrisClientId, hybrisClientSecret, hybrisUsername, hybrisPassword, hybrisWebsites, lightspeedApiKey, lightspeedApiSecret, commercehqApiKey, commercehqApiPassword, wcConsumerKey, wcConsumerSecret, magentoConsumerKey, magentoConsumerSecret, magentoAccessToken, magentoTokenSecret, prestashopWebserviceKey, wixAppId, wixAppSecretKey, wixInstanceId, wixRefreshToken, mercadoLibreAppId, mercadoLibreAppSecretKey, mercadoLibreRefreshToken, zidClientId, zidClientSecret, zidAccessToken, zidAuthorization, zidRefreshToken, flipkartClientId, flipkartClientSecret, allegroClientId, allegroClientSecret, allegroAccessToken, allegroRefreshToken, allegroEnvironment, zohoClientId, zohoClientSecret, zohoRefreshToken, zohoRegion, tiendanubeUserId, tiendanubeAccessToken, tiendanubeClientSecret, ottoClientId, ottoClientSecret, ottoAppId, ottoRefreshToken, ottoEnvironment, ottoAccessToken, tiktokshopAppKey, tiktokshopAppSecret, tiktokshopRefreshToken, tiktokshopAccessToken, sallaClientId, sallaClientSecret, sallaRefreshToken, sallaAccessToken, temuAppKey, temuAppSecret, temuAccessToken, temuRegion, _options);
        return result.toPromise();
    }

    /**
     * If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.
     * account.failed_webhooks
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [ids] List of сomma-separated webhook ids
     */
    public accountFailedWebhooksWithHttpInfo(start?: number, count?: number, ids?: string, _options?: Configuration): Promise<HttpInfo<AccountFailedWebhooks200Response>> {
        const result = this.api.accountFailedWebhooksWithHttpInfo(start, count, ids, _options);
        return result.toPromise();
    }

    /**
     * If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.
     * account.failed_webhooks
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [ids] List of сomma-separated webhook ids
     */
    public accountFailedWebhooks(start?: number, count?: number, ids?: string, _options?: Configuration): Promise<AccountFailedWebhooks200Response> {
        const result = this.api.accountFailedWebhooks(start, count, ids, _options);
        return result.toPromise();
    }

    /**
     * Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.
     * account.supported_platforms
     */
    public accountSupportedPlatformsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<AccountSupportedPlatforms200Response>> {
        const result = this.api.accountSupportedPlatformsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.
     * account.supported_platforms
     */
    public accountSupportedPlatforms(_options?: Configuration): Promise<AccountSupportedPlatforms200Response> {
        const result = this.api.accountSupportedPlatforms(_options);
        return result.toPromise();
    }


}



import { ObservableAttributeApi } from './ObservableAPI';

import { AttributeApiRequestFactory, AttributeApiResponseProcessor} from "../apis/AttributeApi";
export class PromiseAttributeApi {
    private api: ObservableAttributeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AttributeApiRequestFactory,
        responseProcessor?: AttributeApiResponseProcessor
    ) {
        this.api = new ObservableAttributeApi(configuration, requestFactory, responseProcessor);
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
    public attributeAddWithHttpInfo(type: 'text' | 'select' | 'textarea' | 'date' | 'price' | 'multiselect' | 'boolean', name: string, code?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, position?: number, attributeGroupId?: string, isGlobal?: string, isSearchable?: boolean, isFilterable?: string, isComparable?: boolean, isHtmlAllowedOnFront?: boolean, isFilterableInSearch?: boolean, isConfigurable?: boolean, isVisibleInAdvancedSearch?: boolean, isUsedForPromoRules?: boolean, usedInProductListing?: boolean, usedForSortBy?: boolean, applyTo?: string, _options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        const result = this.api.attributeAddWithHttpInfo(type, name, code, storeId, langId, visible, required, position, attributeGroupId, isGlobal, isSearchable, isFilterable, isComparable, isHtmlAllowedOnFront, isFilterableInSearch, isConfigurable, isVisibleInAdvancedSearch, isUsedForPromoRules, usedInProductListing, usedForSortBy, applyTo, _options);
        return result.toPromise();
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
    public attributeAdd(type: 'text' | 'select' | 'textarea' | 'date' | 'price' | 'multiselect' | 'boolean', name: string, code?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, position?: number, attributeGroupId?: string, isGlobal?: string, isSearchable?: boolean, isFilterable?: string, isComparable?: boolean, isHtmlAllowedOnFront?: boolean, isFilterableInSearch?: boolean, isConfigurable?: boolean, isVisibleInAdvancedSearch?: boolean, isUsedForPromoRules?: boolean, usedInProductListing?: boolean, usedForSortBy?: boolean, applyTo?: string, _options?: Configuration): Promise<AttributeAdd200Response> {
        const result = this.api.attributeAdd(type, name, code, storeId, langId, visible, required, position, attributeGroupId, isGlobal, isSearchable, isFilterable, isComparable, isHtmlAllowedOnFront, isFilterableInSearch, isConfigurable, isVisibleInAdvancedSearch, isUsedForPromoRules, usedInProductListing, usedForSortBy, applyTo, _options);
        return result.toPromise();
    }

    /**
     * Assign attribute to the group
     * attribute.assign.group
     * @param id Entity id
     * @param groupId Attribute group_id
     * @param [attributeSetId] Attribute set id
     */
    public attributeAssignGroupWithHttpInfo(id: string, groupId: string, attributeSetId?: string, _options?: Configuration): Promise<HttpInfo<AttributeAssignGroup200Response>> {
        const result = this.api.attributeAssignGroupWithHttpInfo(id, groupId, attributeSetId, _options);
        return result.toPromise();
    }

    /**
     * Assign attribute to the group
     * attribute.assign.group
     * @param id Entity id
     * @param groupId Attribute group_id
     * @param [attributeSetId] Attribute set id
     */
    public attributeAssignGroup(id: string, groupId: string, attributeSetId?: string, _options?: Configuration): Promise<AttributeAssignGroup200Response> {
        const result = this.api.attributeAssignGroup(id, groupId, attributeSetId, _options);
        return result.toPromise();
    }

    /**
     * Assign attribute to the attribute set
     * attribute.assign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     * @param [groupId] Attribute group_id
     */
    public attributeAssignSetWithHttpInfo(id: string, attributeSetId: string, groupId?: string, _options?: Configuration): Promise<HttpInfo<AttributeAssignGroup200Response>> {
        const result = this.api.attributeAssignSetWithHttpInfo(id, attributeSetId, groupId, _options);
        return result.toPromise();
    }

    /**
     * Assign attribute to the attribute set
     * attribute.assign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     * @param [groupId] Attribute group_id
     */
    public attributeAssignSet(id: string, attributeSetId: string, groupId?: string, _options?: Configuration): Promise<AttributeAssignGroup200Response> {
        const result = this.api.attributeAssignSet(id, attributeSetId, groupId, _options);
        return result.toPromise();
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
    public attributeAttributesetListWithHttpInfo(start?: number, count?: number, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseAttributeAttributesetList>> {
        const result = this.api.attributeAttributesetListWithHttpInfo(start, count, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public attributeAttributesetList(start?: number, count?: number, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseAttributeAttributesetList> {
        const result = this.api.attributeAttributesetList(start, count, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public attributeCountWithHttpInfo(type?: string, attributeSetId?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, system?: boolean, _options?: Configuration): Promise<HttpInfo<AttributeCount200Response>> {
        const result = this.api.attributeCountWithHttpInfo(type, attributeSetId, storeId, langId, visible, required, system, _options);
        return result.toPromise();
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
    public attributeCount(type?: string, attributeSetId?: string, storeId?: string, langId?: string, visible?: boolean, required?: boolean, system?: boolean, _options?: Configuration): Promise<AttributeCount200Response> {
        const result = this.api.attributeCount(type, attributeSetId, storeId, langId, visible, required, system, _options);
        return result.toPromise();
    }

    /**
     * Delete attribute from store
     * attribute.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public attributeDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.attributeDeleteWithHttpInfo(id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete attribute from store
     * attribute.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public attributeDelete(id: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.attributeDelete(id, storeId, _options);
        return result.toPromise();
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
    public attributeGroupListWithHttpInfo(start?: number, count?: number, attributeSetId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseAttributeGroupList>> {
        const result = this.api.attributeGroupListWithHttpInfo(start, count, attributeSetId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public attributeGroupList(start?: number, count?: number, attributeSetId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseAttributeGroupList> {
        const result = this.api.attributeGroupList(start, count, attributeSetId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public attributeInfoWithHttpInfo(id: string, attributeSetId?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<AttributeInfo200Response>> {
        const result = this.api.attributeInfoWithHttpInfo(id, attributeSetId, storeId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public attributeInfo(id: string, attributeSetId?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<AttributeInfo200Response> {
        const result = this.api.attributeInfo(id, attributeSetId, storeId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public attributeListWithHttpInfo(start?: number, count?: number, attributeIds?: string, attributeSetId?: string, storeId?: string, langId?: string, type?: string, visible?: boolean, required?: boolean, system?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseAttributeList>> {
        const result = this.api.attributeListWithHttpInfo(start, count, attributeIds, attributeSetId, storeId, langId, type, visible, required, system, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public attributeList(start?: number, count?: number, attributeIds?: string, attributeSetId?: string, storeId?: string, langId?: string, type?: string, visible?: boolean, required?: boolean, system?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseAttributeList> {
        const result = this.api.attributeList(start, count, attributeIds, attributeSetId, storeId, langId, type, visible, required, system, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Get list of supported attributes types
     * attribute.type.list
     */
    public attributeTypeListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<AttributeTypeList200Response>> {
        const result = this.api.attributeTypeListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get list of supported attributes types
     * attribute.type.list
     */
    public attributeTypeList(_options?: Configuration): Promise<AttributeTypeList200Response> {
        const result = this.api.attributeTypeList(_options);
        return result.toPromise();
    }

    /**
     * Unassign attribute from group
     * attribute.unassign.group
     * @param id Entity id
     * @param groupId Customer group_id
     */
    public attributeUnassignGroupWithHttpInfo(id: string, groupId: string, _options?: Configuration): Promise<HttpInfo<AttributeUnassignGroup200Response>> {
        const result = this.api.attributeUnassignGroupWithHttpInfo(id, groupId, _options);
        return result.toPromise();
    }

    /**
     * Unassign attribute from group
     * attribute.unassign.group
     * @param id Entity id
     * @param groupId Customer group_id
     */
    public attributeUnassignGroup(id: string, groupId: string, _options?: Configuration): Promise<AttributeUnassignGroup200Response> {
        const result = this.api.attributeUnassignGroup(id, groupId, _options);
        return result.toPromise();
    }

    /**
     * Unassign attribute from attribute set
     * attribute.unassign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     */
    public attributeUnassignSetWithHttpInfo(id: string, attributeSetId: string, _options?: Configuration): Promise<HttpInfo<AttributeUnassignGroup200Response>> {
        const result = this.api.attributeUnassignSetWithHttpInfo(id, attributeSetId, _options);
        return result.toPromise();
    }

    /**
     * Unassign attribute from attribute set
     * attribute.unassign.set
     * @param id Entity id
     * @param attributeSetId Attribute set id
     */
    public attributeUnassignSet(id: string, attributeSetId: string, _options?: Configuration): Promise<AttributeUnassignGroup200Response> {
        const result = this.api.attributeUnassignSet(id, attributeSetId, _options);
        return result.toPromise();
    }

    /**
     * Update attribute data
     * attribute.update
     * @param id Entity id
     * @param name Defines new attributes\&#39;s name
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeUpdateWithHttpInfo(id: string, name: string, storeId?: string, langId?: string, _options?: Configuration): Promise<HttpInfo<AttributeUpdate200Response>> {
        const result = this.api.attributeUpdateWithHttpInfo(id, name, storeId, langId, _options);
        return result.toPromise();
    }

    /**
     * Update attribute data
     * attribute.update
     * @param id Entity id
     * @param name Defines new attributes\&#39;s name
     * @param [storeId] Store Id
     * @param [langId] Language id
     */
    public attributeUpdate(id: string, name: string, storeId?: string, langId?: string, _options?: Configuration): Promise<AttributeUpdate200Response> {
        const result = this.api.attributeUpdate(id, name, storeId, langId, _options);
        return result.toPromise();
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
    public attributeValueAddWithHttpInfo(attributeId: string, name: string, code?: string, description?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        const result = this.api.attributeValueAddWithHttpInfo(attributeId, name, code, description, storeId, langId, _options);
        return result.toPromise();
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
    public attributeValueAdd(attributeId: string, name: string, code?: string, description?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<AttributeAdd200Response> {
        const result = this.api.attributeValueAdd(attributeId, name, code, description, storeId, langId, _options);
        return result.toPromise();
    }

    /**
     * Delete attribute value.
     * attribute.value.delete
     * @param id Entity id
     * @param attributeId Attribute Id
     * @param [storeId] Store Id
     */
    public attributeValueDeleteWithHttpInfo(id: string, attributeId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        const result = this.api.attributeValueDeleteWithHttpInfo(id, attributeId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete attribute value.
     * attribute.value.delete
     * @param id Entity id
     * @param attributeId Attribute Id
     * @param [storeId] Store Id
     */
    public attributeValueDelete(id: string, attributeId: string, storeId?: string, _options?: Configuration): Promise<AttributeValueDelete200Response> {
        const result = this.api.attributeValueDelete(id, attributeId, storeId, _options);
        return result.toPromise();
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
    public attributeValueUpdateWithHttpInfo(id: string, attributeId: string, name?: string, description?: string, code?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<HttpInfo<AttributeUpdate200Response>> {
        const result = this.api.attributeValueUpdateWithHttpInfo(id, attributeId, name, description, code, storeId, langId, _options);
        return result.toPromise();
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
    public attributeValueUpdate(id: string, attributeId: string, name?: string, description?: string, code?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<AttributeUpdate200Response> {
        const result = this.api.attributeValueUpdate(id, attributeId, name, description, code, storeId, langId, _options);
        return result.toPromise();
    }


}



import { ObservableBasketApi } from './ObservableAPI';

import { BasketApiRequestFactory, BasketApiResponseProcessor} from "../apis/BasketApi";
export class PromiseBasketApi {
    private api: ObservableBasketApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasketApiRequestFactory,
        responseProcessor?: BasketApiResponseProcessor
    ) {
        this.api = new ObservableBasketApi(configuration, requestFactory, responseProcessor);
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
    public basketInfoWithHttpInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<BasketInfo200Response>> {
        const result = this.api.basketInfoWithHttpInfo(id, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public basketInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<BasketInfo200Response> {
        const result = this.api.basketInfo(id, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public basketItemAddWithHttpInfo(customerId: string, productId: string, variantId?: string, quantity?: number, storeId?: string, _options?: Configuration): Promise<HttpInfo<BasketItemAdd200Response>> {
        const result = this.api.basketItemAddWithHttpInfo(customerId, productId, variantId, quantity, storeId, _options);
        return result.toPromise();
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
    public basketItemAdd(customerId: string, productId: string, variantId?: string, quantity?: number, storeId?: string, _options?: Configuration): Promise<BasketItemAdd200Response> {
        const result = this.api.basketItemAdd(customerId, productId, variantId, quantity, storeId, _options);
        return result.toPromise();
    }

    /**
     * Create live shipping rate service.
     * basket.live_shipping_service.create
     * @param name Shipping Service Name
     * @param callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceCreateWithHttpInfo(name: string, callback: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceCreate200Response>> {
        const result = this.api.basketLiveShippingServiceCreateWithHttpInfo(name, callback, storeId, _options);
        return result.toPromise();
    }

    /**
     * Create live shipping rate service.
     * basket.live_shipping_service.create
     * @param name Shipping Service Name
     * @param callback Callback url that returns shipping rates. It should be able to accept POST requests with json data.
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceCreate(name: string, callback: string, storeId?: string, _options?: Configuration): Promise<BasketLiveShippingServiceCreate200Response> {
        const result = this.api.basketLiveShippingServiceCreate(name, callback, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete live shipping rate service.
     * basket.live_shipping_service.delete
     * @param id Entity id
     */
    public basketLiveShippingServiceDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        const result = this.api.basketLiveShippingServiceDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete live shipping rate service.
     * basket.live_shipping_service.delete
     * @param id Entity id
     */
    public basketLiveShippingServiceDelete(id: number, _options?: Configuration): Promise<BasketLiveShippingServiceDelete200Response> {
        const result = this.api.basketLiveShippingServiceDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of live shipping rate services.
     * basket.live_shipping_service.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceListWithHttpInfo(start?: number, count?: number, storeId?: string, _options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceList200Response>> {
        const result = this.api.basketLiveShippingServiceListWithHttpInfo(start, count, storeId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of live shipping rate services.
     * basket.live_shipping_service.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public basketLiveShippingServiceList(start?: number, count?: number, storeId?: string, _options?: Configuration): Promise<BasketLiveShippingServiceList200Response> {
        const result = this.api.basketLiveShippingServiceList(start, count, storeId, _options);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
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
    public batchJobListWithHttpInfo(count?: number, pageCursor?: string, ids?: string, createdFrom?: string, createdTo?: string, processedFrom?: string, processedTo?: string, responseFields?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseBatchJobList>> {
        const result = this.api.batchJobListWithHttpInfo(count, pageCursor, ids, createdFrom, createdTo, processedFrom, processedTo, responseFields, _options);
        return result.toPromise();
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
    public batchJobList(count?: number, pageCursor?: string, ids?: string, createdFrom?: string, createdTo?: string, processedFrom?: string, processedTo?: string, responseFields?: string, _options?: Configuration): Promise<ModelResponseBatchJobList> {
        const result = this.api.batchJobList(count, pageCursor, ids, createdFrom, createdTo, processedFrom, processedTo, responseFields, _options);
        return result.toPromise();
    }

    /**
     * Get job result data
     * batch.job.result
     * @param id Entity id
     */
    public batchJobResultWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ResponseBatchJobResult>> {
        const result = this.api.batchJobResultWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get job result data
     * batch.job.result
     * @param id Entity id
     */
    public batchJobResult(id: string, _options?: Configuration): Promise<ResponseBatchJobResult> {
        const result = this.api.batchJobResult(id, _options);
        return result.toPromise();
    }


}



import { ObservableBridgeApi } from './ObservableAPI';

import { BridgeApiRequestFactory, BridgeApiResponseProcessor} from "../apis/BridgeApi";
export class PromiseBridgeApi {
    private api: ObservableBridgeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BridgeApiRequestFactory,
        responseProcessor?: BridgeApiResponseProcessor
    ) {
        this.api = new ObservableBridgeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete bridge from the store.
     * bridge.delete
     */
    public bridgeDeleteWithHttpInfo(_options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        const result = this.api.bridgeDeleteWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Delete bridge from the store.
     * bridge.delete
     */
    public bridgeDelete(_options?: Configuration): Promise<AttributeValueDelete200Response> {
        const result = this.api.bridgeDelete(_options);
        return result.toPromise();
    }

    /**
     * Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.
     * bridge.download
     * @param [whitelabel] Identifies if there is a necessity to download whitelabel bridge.
     */
    public bridgeDownloadWithHttpInfo(whitelabel?: boolean, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.bridgeDownloadWithHttpInfo(whitelabel, _options);
        return result.toPromise();
    }

    /**
     * Download bridge for store.</br>Please note that the method would not work if you call it from Swagger UI.
     * bridge.download
     * @param [whitelabel] Identifies if there is a necessity to download whitelabel bridge.
     */
    public bridgeDownload(whitelabel?: boolean, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.bridgeDownload(whitelabel, _options);
        return result.toPromise();
    }

    /**
     * Update bridge in the store.
     * bridge.update
     */
    public bridgeUpdateWithHttpInfo(_options?: Configuration): Promise<HttpInfo<AttributeUpdate200Response>> {
        const result = this.api.bridgeUpdateWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Update bridge in the store.
     * bridge.update
     */
    public bridgeUpdate(_options?: Configuration): Promise<AttributeUpdate200Response> {
        const result = this.api.bridgeUpdate(_options);
        return result.toPromise();
    }


}



import { ObservableCartApi } from './ObservableAPI';

import { CartApiRequestFactory, CartApiResponseProcessor} from "../apis/CartApi";
export class PromiseCartApi {
    private api: ObservableCartApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CartApiRequestFactory,
        responseProcessor?: CartApiResponseProcessor
    ) {
        this.api = new ObservableCartApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get count of cart catalog price rules discounts.
     * cart.catalog_price_rules.count
     */
    public cartCatalogPriceRulesCountWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CartCatalogPriceRulesCount200Response>> {
        const result = this.api.cartCatalogPriceRulesCountWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get count of cart catalog price rules discounts.
     * cart.catalog_price_rules.count
     */
    public cartCatalogPriceRulesCount(_options?: Configuration): Promise<CartCatalogPriceRulesCount200Response> {
        const result = this.api.cartCatalogPriceRulesCount(_options);
        return result.toPromise();
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
    public cartCatalogPriceRulesListWithHttpInfo(start?: number, count?: number, pageCursor?: string, ids?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCartCatalogPriceRulesList>> {
        const result = this.api.cartCatalogPriceRulesListWithHttpInfo(start, count, pageCursor, ids, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartCatalogPriceRulesList(start?: number, count?: number, pageCursor?: string, ids?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCartCatalogPriceRulesList> {
        const result = this.api.cartCatalogPriceRulesList(start, count, pageCursor, ids, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Use this method to create a coupon with specified conditions.
     * cart.coupon.add
     * @param cartCouponAdd
     */
    public cartCouponAddWithHttpInfo(cartCouponAdd: CartCouponAdd, _options?: Configuration): Promise<HttpInfo<CartCouponAdd200Response>> {
        const result = this.api.cartCouponAddWithHttpInfo(cartCouponAdd, _options);
        return result.toPromise();
    }

    /**
     * Use this method to create a coupon with specified conditions.
     * cart.coupon.add
     * @param cartCouponAdd
     */
    public cartCouponAdd(cartCouponAdd: CartCouponAdd, _options?: Configuration): Promise<CartCouponAdd200Response> {
        const result = this.api.cartCouponAdd(cartCouponAdd, _options);
        return result.toPromise();
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
    public cartCouponConditionAddWithHttpInfo(couponId: string, entity: 'order' | 'order_shipping_address' | 'product' | 'customer', key: 'total' | 'subtotal' | 'shipping_total' | 'total_quantity' | 'total_weight' | 'country' | 'product_id' | 'variant_id' | 'category_id' | 'customer_id' | 'item_price' | 'item_total_price' | 'item_quantity' | 'carrier_id', operator: string, value: string, target?: string, includeTax?: boolean, includeShipping?: boolean, storeId?: string, _options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        const result = this.api.cartCouponConditionAddWithHttpInfo(couponId, entity, key, operator, value, target, includeTax, includeShipping, storeId, _options);
        return result.toPromise();
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
    public cartCouponConditionAdd(couponId: string, entity: 'order' | 'order_shipping_address' | 'product' | 'customer', key: 'total' | 'subtotal' | 'shipping_total' | 'total_quantity' | 'total_weight' | 'country' | 'product_id' | 'variant_id' | 'category_id' | 'customer_id' | 'item_price' | 'item_total_price' | 'item_quantity' | 'carrier_id', operator: string, value: string, target?: string, includeTax?: boolean, includeShipping?: boolean, storeId?: string, _options?: Configuration): Promise<BasketLiveShippingServiceDelete200Response> {
        const result = this.api.cartCouponConditionAdd(couponId, entity, key, operator, value, target, includeTax, includeShipping, storeId, _options);
        return result.toPromise();
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
    public cartCouponCountWithHttpInfo(storeId?: string, avail?: boolean, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, _options?: Configuration): Promise<HttpInfo<CartCouponCount200Response>> {
        const result = this.api.cartCouponCountWithHttpInfo(storeId, avail, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, _options);
        return result.toPromise();
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
    public cartCouponCount(storeId?: string, avail?: boolean, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, _options?: Configuration): Promise<CartCouponCount200Response> {
        const result = this.api.cartCouponCount(storeId, avail, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, _options);
        return result.toPromise();
    }

    /**
     * Delete coupon
     * cart.coupon.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartCouponDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.cartCouponDeleteWithHttpInfo(id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete coupon
     * cart.coupon.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartCouponDelete(id: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.cartCouponDelete(id, storeId, _options);
        return result.toPromise();
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
    public cartCouponListWithHttpInfo(start?: number, count?: number, pageCursor?: string, couponsIds?: string, storeId?: string, langId?: string, avail?: boolean, status?: string, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCartCouponList>> {
        const result = this.api.cartCouponListWithHttpInfo(start, count, pageCursor, couponsIds, storeId, langId, avail, status, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartCouponList(start?: number, count?: number, pageCursor?: string, couponsIds?: string, storeId?: string, langId?: string, avail?: boolean, status?: string, dateStartFrom?: string, dateStartTo?: string, dateEndFrom?: string, dateEndTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCartCouponList> {
        const result = this.api.cartCouponList(start, count, pageCursor, couponsIds, storeId, langId, avail, status, dateStartFrom, dateStartTo, dateEndFrom, dateEndTo, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Remove store from API2Cart
     * cart.delete
     * @param [deleteBridge] Identifies if there is a necessity to delete bridge
     */
    public cartDeleteWithHttpInfo(deleteBridge?: boolean, _options?: Configuration): Promise<HttpInfo<CartDelete200Response>> {
        const result = this.api.cartDeleteWithHttpInfo(deleteBridge, _options);
        return result.toPromise();
    }

    /**
     * Remove store from API2Cart
     * cart.delete
     * @param [deleteBridge] Identifies if there is a necessity to delete bridge
     */
    public cartDelete(deleteBridge?: boolean, _options?: Configuration): Promise<CartDelete200Response> {
        const result = this.api.cartDelete(deleteBridge, _options);
        return result.toPromise();
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
    public cartGiftcardAddWithHttpInfo(amount: number, code?: string, ownerEmail?: string, recipientEmail?: string, recipientName?: string, ownerName?: string, _options?: Configuration): Promise<HttpInfo<CartGiftcardAdd200Response>> {
        const result = this.api.cartGiftcardAddWithHttpInfo(amount, code, ownerEmail, recipientEmail, recipientName, ownerName, _options);
        return result.toPromise();
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
    public cartGiftcardAdd(amount: number, code?: string, ownerEmail?: string, recipientEmail?: string, recipientName?: string, ownerName?: string, _options?: Configuration): Promise<CartGiftcardAdd200Response> {
        const result = this.api.cartGiftcardAdd(amount, code, ownerEmail, recipientEmail, recipientName, ownerName, _options);
        return result.toPromise();
    }

    /**
     * Get gift cards count.
     * cart.giftcard.count
     * @param [storeId] Store Id
     */
    public cartGiftcardCountWithHttpInfo(storeId?: string, _options?: Configuration): Promise<HttpInfo<CartGiftcardCount200Response>> {
        const result = this.api.cartGiftcardCountWithHttpInfo(storeId, _options);
        return result.toPromise();
    }

    /**
     * Get gift cards count.
     * cart.giftcard.count
     * @param [storeId] Store Id
     */
    public cartGiftcardCount(storeId?: string, _options?: Configuration): Promise<CartGiftcardCount200Response> {
        const result = this.api.cartGiftcardCount(storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete giftcard
     * cart.giftcard.delete
     * @param id Entity id
     */
    public cartGiftcardDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.cartGiftcardDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete giftcard
     * cart.giftcard.delete
     * @param id Entity id
     */
    public cartGiftcardDelete(id: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.cartGiftcardDelete(id, _options);
        return result.toPromise();
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
    public cartGiftcardListWithHttpInfo(start?: number, count?: number, pageCursor?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCartGiftCardList>> {
        const result = this.api.cartGiftcardListWithHttpInfo(start, count, pageCursor, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartGiftcardList(start?: number, count?: number, pageCursor?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCartGiftCardList> {
        const result = this.api.cartGiftcardList(start, count, pageCursor, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.
     * cart.info
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartInfoWithHttpInfo(storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<CartInfo200Response>> {
        const result = this.api.cartInfoWithHttpInfo(storeId, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.
     * cart.info
     * @param [storeId] Store Id
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [params] Set this parameter in order to choose which entity fields you want to retrieve
     * @param [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public cartInfo(storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<CartInfo200Response> {
        const result = this.api.cartInfo(storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartMetaDataListWithHttpInfo(entityId: string, count?: number, pageCursor?: string, entity?: string, storeId?: string, langId?: string, key?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCartMetaDataList>> {
        const result = this.api.cartMetaDataListWithHttpInfo(entityId, count, pageCursor, entity, storeId, langId, key, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartMetaDataList(entityId: string, count?: number, pageCursor?: string, entity?: string, storeId?: string, langId?: string, key?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCartMetaDataList> {
        const result = this.api.cartMetaDataList(entityId, count, pageCursor, entity, storeId, langId, key, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartMetaDataSetWithHttpInfo(entityId: string, key: string, value: string, namespace: string, entity?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        const result = this.api.cartMetaDataSetWithHttpInfo(entityId, key, value, namespace, entity, storeId, langId, _options);
        return result.toPromise();
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
    public cartMetaDataSet(entityId: string, key: string, value: string, namespace: string, entity?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<AttributeAdd200Response> {
        const result = this.api.cartMetaDataSet(entityId, key, value, namespace, entity, storeId, langId, _options);
        return result.toPromise();
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
    public cartMetaDataUnsetWithHttpInfo(entityId: string, key: string, id: string, entity?: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceDelete200Response>> {
        const result = this.api.cartMetaDataUnsetWithHttpInfo(entityId, key, id, entity, storeId, _options);
        return result.toPromise();
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
    public cartMetaDataUnset(entityId: string, key: string, id: string, entity?: string, storeId?: string, _options?: Configuration): Promise<BasketLiveShippingServiceDelete200Response> {
        const result = this.api.cartMetaDataUnset(entityId, key, id, entity, storeId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of supported API methods.
     * cart.methods
     */
    public cartMethodsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CartMethods200Response>> {
        const result = this.api.cartMethodsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of supported API methods.
     * cart.methods
     */
    public cartMethods(_options?: Configuration): Promise<CartMethods200Response> {
        const result = this.api.cartMethods(_options);
        return result.toPromise();
    }

    /**
     * Get a list of third-party plugins installed on the store.
     * cart.plugin.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public cartPluginListWithHttpInfo(start?: number, count?: number, storeId?: string, _options?: Configuration): Promise<HttpInfo<CartPluginList200Response>> {
        const result = this.api.cartPluginListWithHttpInfo(start, count, storeId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of third-party plugins installed on the store.
     * cart.plugin.list
     * @param [start] This parameter sets the number from which you want to get entities
     * @param [count] This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param [storeId] Store Id
     */
    public cartPluginList(start?: number, count?: number, storeId?: string, _options?: Configuration): Promise<CartPluginList200Response> {
        const result = this.api.cartPluginList(start, count, storeId, _options);
        return result.toPromise();
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
    public cartScriptAddWithHttpInfo(name?: string, description?: string, html?: string, src?: string, loadMethod?: string, scope?: string, events?: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<CartScriptAdd200Response>> {
        const result = this.api.cartScriptAddWithHttpInfo(name, description, html, src, loadMethod, scope, events, storeId, _options);
        return result.toPromise();
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
    public cartScriptAdd(name?: string, description?: string, html?: string, src?: string, loadMethod?: string, scope?: string, events?: string, storeId?: string, _options?: Configuration): Promise<CartScriptAdd200Response> {
        const result = this.api.cartScriptAdd(name, description, html, src, loadMethod, scope, events, storeId, _options);
        return result.toPromise();
    }

    /**
     * Remove script from the storefront
     * cart.script.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartScriptDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.cartScriptDeleteWithHttpInfo(id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Remove script from the storefront
     * cart.script.delete
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public cartScriptDelete(id: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.cartScriptDelete(id, storeId, _options);
        return result.toPromise();
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
    public cartScriptListWithHttpInfo(start?: number, count?: number, pageCursor?: string, scriptIds?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCartScriptList>> {
        const result = this.api.cartScriptListWithHttpInfo(start, count, pageCursor, scriptIds, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartScriptList(start?: number, count?: number, pageCursor?: string, scriptIds?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCartScriptList> {
        const result = this.api.cartScriptList(start, count, pageCursor, scriptIds, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartShippingZonesListWithHttpInfo(start?: number, count?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCartShippingZonesList>> {
        const result = this.api.cartShippingZonesListWithHttpInfo(start, count, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public cartShippingZonesList(start?: number, count?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCartShippingZonesList> {
        const result = this.api.cartShippingZonesList(start, count, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.
     * cart.validate
     * @param [validateVersion] Specify if api2cart should validate cart version
     */
    public cartValidateWithHttpInfo(validateVersion?: boolean, _options?: Configuration): Promise<HttpInfo<CartValidate200Response>> {
        const result = this.api.cartValidateWithHttpInfo(validateVersion, _options);
        return result.toPromise();
    }

    /**
     * This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.
     * cart.validate
     * @param [validateVersion] Specify if api2cart should validate cart version
     */
    public cartValidate(validateVersion?: boolean, _options?: Configuration): Promise<CartValidate200Response> {
        const result = this.api.cartValidate(validateVersion, _options);
        return result.toPromise();
    }


}



import { ObservableCategoryApi } from './ObservableAPI';

import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";
export class PromiseCategoryApi {
    private api: ObservableCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryApiRequestFactory,
        responseProcessor?: CategoryApiResponseProcessor
    ) {
        this.api = new ObservableCategoryApi(configuration, requestFactory, responseProcessor);
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
    public categoryAddWithHttpInfo(name: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, createdTime?: string, modifiedTime?: string, sortOrder?: number, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Promise<HttpInfo<CategoryAdd200Response>> {
        const result = this.api.categoryAddWithHttpInfo(name, description, shortDescription, parentId, avail, createdTime, modifiedTime, sortOrder, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options);
        return result.toPromise();
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
    public categoryAdd(name: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, createdTime?: string, modifiedTime?: string, sortOrder?: number, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Promise<CategoryAdd200Response> {
        const result = this.api.categoryAdd(name, description, shortDescription, parentId, avail, createdTime, modifiedTime, sortOrder, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options);
        return result.toPromise();
    }

    /**
     * Add new categories to the store.
     * category.add.batch
     * @param categoryAddBatch
     */
    public categoryAddBatchWithHttpInfo(categoryAddBatch: CategoryAddBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.categoryAddBatchWithHttpInfo(categoryAddBatch, _options);
        return result.toPromise();
    }

    /**
     * Add new categories to the store.
     * category.add.batch
     * @param categoryAddBatch
     */
    public categoryAddBatch(categoryAddBatch: CategoryAddBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.categoryAddBatch(categoryAddBatch, _options);
        return result.toPromise();
    }

    /**
     * Assign category to product
     * category.assign
     * @param categoryId Defines category assign, specified by category id
     * @param productId Defines category assign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryAssignWithHttpInfo(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<CategoryAssign200Response>> {
        const result = this.api.categoryAssignWithHttpInfo(categoryId, productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Assign category to product
     * category.assign
     * @param categoryId Defines category assign, specified by category id
     * @param productId Defines category assign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryAssign(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Promise<CategoryAssign200Response> {
        const result = this.api.categoryAssign(categoryId, productId, storeId, _options);
        return result.toPromise();
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
    public categoryCountWithHttpInfo(parentId?: string, storeId?: string, langId?: string, avail?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, productType?: string, findValue?: string, findWhere?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<HttpInfo<CategoryCount200Response>> {
        const result = this.api.categoryCountWithHttpInfo(parentId, storeId, langId, avail, createdFrom, createdTo, modifiedFrom, modifiedTo, productType, findValue, findWhere, reportRequestId, disableReportCache, _options);
        return result.toPromise();
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
    public categoryCount(parentId?: string, storeId?: string, langId?: string, avail?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, productType?: string, findValue?: string, findWhere?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<CategoryCount200Response> {
        const result = this.api.categoryCount(parentId, storeId, langId, avail, createdFrom, createdTo, modifiedFrom, modifiedTo, productType, findValue, findWhere, reportRequestId, disableReportCache, _options);
        return result.toPromise();
    }

    /**
     * Delete category in store
     * category.delete
     * @param id Defines category removal, specified by category id
     * @param [storeId] Store Id
     */
    public categoryDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<CategoryDelete200Response>> {
        const result = this.api.categoryDeleteWithHttpInfo(id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete category in store
     * category.delete
     * @param id Defines category removal, specified by category id
     * @param [storeId] Store Id
     */
    public categoryDelete(id: string, storeId?: string, _options?: Configuration): Promise<CategoryDelete200Response> {
        const result = this.api.categoryDelete(id, storeId, _options);
        return result.toPromise();
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
    public categoryFindWithHttpInfo(findValue: string, findWhere?: string, findParams?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<HttpInfo<CategoryFind200Response>> {
        const result = this.api.categoryFindWithHttpInfo(findValue, findWhere, findParams, storeId, langId, _options);
        return result.toPromise();
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
    public categoryFind(findValue: string, findWhere?: string, findParams?: string, storeId?: string, langId?: string, _options?: Configuration): Promise<CategoryFind200Response> {
        const result = this.api.categoryFind(findValue, findWhere, findParams, storeId, langId, _options);
        return result.toPromise();
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
    public categoryImageAddWithHttpInfo(categoryId: string, imageName: string, url: string, type: 'base' | 'thumbnail', storeId?: string, label?: string, mime?: string, position?: number, _options?: Configuration): Promise<HttpInfo<CategoryImageAdd200Response>> {
        const result = this.api.categoryImageAddWithHttpInfo(categoryId, imageName, url, type, storeId, label, mime, position, _options);
        return result.toPromise();
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
    public categoryImageAdd(categoryId: string, imageName: string, url: string, type: 'base' | 'thumbnail', storeId?: string, label?: string, mime?: string, position?: number, _options?: Configuration): Promise<CategoryImageAdd200Response> {
        const result = this.api.categoryImageAdd(categoryId, imageName, url, type, storeId, label, mime, position, _options);
        return result.toPromise();
    }

    /**
     * Delete image
     * category.image.delete
     * @param categoryId Defines category id where the image should be deleted
     * @param imageId Define image id
     * @param [storeId] Store Id
     */
    public categoryImageDeleteWithHttpInfo(categoryId: string, imageId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.categoryImageDeleteWithHttpInfo(categoryId, imageId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete image
     * category.image.delete
     * @param categoryId Defines category id where the image should be deleted
     * @param imageId Define image id
     * @param [storeId] Store Id
     */
    public categoryImageDelete(categoryId: string, imageId: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.categoryImageDelete(categoryId, imageId, storeId, _options);
        return result.toPromise();
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
    public categoryInfoWithHttpInfo(id: string, storeId?: string, langId?: string, schemaType?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<HttpInfo<CategoryInfo200Response>> {
        const result = this.api.categoryInfoWithHttpInfo(id, storeId, langId, schemaType, responseFields, params, exclude, reportRequestId, disableReportCache, _options);
        return result.toPromise();
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
    public categoryInfo(id: string, storeId?: string, langId?: string, schemaType?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<CategoryInfo200Response> {
        const result = this.api.categoryInfo(id, storeId, langId, schemaType, responseFields, params, exclude, reportRequestId, disableReportCache, _options);
        return result.toPromise();
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
    public categoryListWithHttpInfo(start?: number, count?: number, pageCursor?: string, storeId?: string, langId?: string, parentId?: string, avail?: boolean, productType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, findValue?: string, findWhere?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, disableCache?: boolean, _options?: Configuration): Promise<HttpInfo<ModelResponseCategoryList>> {
        const result = this.api.categoryListWithHttpInfo(start, count, pageCursor, storeId, langId, parentId, avail, productType, createdFrom, createdTo, modifiedFrom, modifiedTo, findValue, findWhere, responseFields, params, exclude, reportRequestId, disableReportCache, disableCache, _options);
        return result.toPromise();
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
    public categoryList(start?: number, count?: number, pageCursor?: string, storeId?: string, langId?: string, parentId?: string, avail?: boolean, productType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, findValue?: string, findWhere?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, disableCache?: boolean, _options?: Configuration): Promise<ModelResponseCategoryList> {
        const result = this.api.categoryList(start, count, pageCursor, storeId, langId, parentId, avail, productType, createdFrom, createdTo, modifiedFrom, modifiedTo, findValue, findWhere, responseFields, params, exclude, reportRequestId, disableReportCache, disableCache, _options);
        return result.toPromise();
    }

    /**
     * Unassign category to product
     * category.unassign
     * @param categoryId Defines category unassign, specified by category id
     * @param productId Defines category unassign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryUnassignWithHttpInfo(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<CategoryAssign200Response>> {
        const result = this.api.categoryUnassignWithHttpInfo(categoryId, productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Unassign category to product
     * category.unassign
     * @param categoryId Defines category unassign, specified by category id
     * @param productId Defines category unassign to the product, specified by product id
     * @param [storeId] Store Id
     */
    public categoryUnassign(categoryId: string, productId: string, storeId?: string, _options?: Configuration): Promise<CategoryAssign200Response> {
        const result = this.api.categoryUnassign(categoryId, productId, storeId, _options);
        return result.toPromise();
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
    public categoryUpdateWithHttpInfo(id: string, name?: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, sortOrder?: number, modifiedTime?: string, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.categoryUpdateWithHttpInfo(id, name, description, shortDescription, parentId, avail, sortOrder, modifiedTime, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options);
        return result.toPromise();
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
    public categoryUpdate(id: string, name?: string, description?: string, shortDescription?: string, parentId?: string, avail?: boolean, sortOrder?: number, modifiedTime?: string, metaTitle?: string, metaDescription?: string, metaKeywords?: string, seoUrl?: string, storeId?: string, storesIds?: string, langId?: string, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.categoryUpdate(id, name, description, shortDescription, parentId, avail, sortOrder, modifiedTime, metaTitle, metaDescription, metaKeywords, seoUrl, storeId, storesIds, langId, _options);
        return result.toPromise();
    }


}



import { ObservableCustomerApi } from './ObservableAPI';

import { CustomerApiRequestFactory, CustomerApiResponseProcessor} from "../apis/CustomerApi";
export class PromiseCustomerApi {
    private api: ObservableCustomerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerApiRequestFactory,
        responseProcessor?: CustomerApiResponseProcessor
    ) {
        this.api = new ObservableCustomerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add customer into store.
     * customer.add
     * @param customerAdd
     */
    public customerAddWithHttpInfo(customerAdd: CustomerAdd, _options?: Configuration): Promise<HttpInfo<CustomerAdd200Response>> {
        const result = this.api.customerAddWithHttpInfo(customerAdd, _options);
        return result.toPromise();
    }

    /**
     * Add customer into store.
     * customer.add
     * @param customerAdd
     */
    public customerAdd(customerAdd: CustomerAdd, _options?: Configuration): Promise<CustomerAdd200Response> {
        const result = this.api.customerAdd(customerAdd, _options);
        return result.toPromise();
    }

    /**
     * Add customer address.
     * customer.address.add
     * @param customerAddressAdd
     */
    public customerAddressAddWithHttpInfo(customerAddressAdd: CustomerAddressAdd, _options?: Configuration): Promise<HttpInfo<AttributeAdd200Response>> {
        const result = this.api.customerAddressAddWithHttpInfo(customerAddressAdd, _options);
        return result.toPromise();
    }

    /**
     * Add customer address.
     * customer.address.add
     * @param customerAddressAdd
     */
    public customerAddressAdd(customerAddressAdd: CustomerAddressAdd, _options?: Configuration): Promise<AttributeAdd200Response> {
        const result = this.api.customerAddressAdd(customerAddressAdd, _options);
        return result.toPromise();
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
    public customerAttributeListWithHttpInfo(customerId: string, count?: number, pageCursor?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCustomerAttributeList>> {
        const result = this.api.customerAttributeListWithHttpInfo(customerId, count, pageCursor, storeId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public customerAttributeList(customerId: string, count?: number, pageCursor?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCustomerAttributeList> {
        const result = this.api.customerAttributeList(customerId, count, pageCursor, storeId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public customerCountWithHttpInfo(ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Promise<HttpInfo<CustomerCount200Response>> {
        const result = this.api.customerCountWithHttpInfo(ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, _options);
        return result.toPromise();
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
    public customerCount(ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Promise<CustomerCount200Response> {
        const result = this.api.customerCount(ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, _options);
        return result.toPromise();
    }

    /**
     * Delete customer from store.
     * customer.delete
     * @param id Identifies customer specified by the id
     */
    public customerDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<CustomerDelete200Response>> {
        const result = this.api.customerDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete customer from store.
     * customer.delete
     * @param id Identifies customer specified by the id
     */
    public customerDelete(id: string, _options?: Configuration): Promise<CustomerDelete200Response> {
        const result = this.api.customerDelete(id, _options);
        return result.toPromise();
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
    public customerFindWithHttpInfo(findValue: string, findWhere?: string, findParams?: string, storeId?: string, includeGuests?: boolean, _options?: Configuration): Promise<HttpInfo<CustomerFind200Response>> {
        const result = this.api.customerFindWithHttpInfo(findValue, findWhere, findParams, storeId, includeGuests, _options);
        return result.toPromise();
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
    public customerFind(findValue: string, findWhere?: string, findParams?: string, storeId?: string, includeGuests?: boolean, _options?: Configuration): Promise<CustomerFind200Response> {
        const result = this.api.customerFind(findValue, findWhere, findParams, storeId, includeGuests, _options);
        return result.toPromise();
    }

    /**
     * Create customer group.
     * customer.group.add
     * @param name Customer group name
     * @param [storeId] Store Id
     * @param [storesIds] Assign customer group to the stores that is specified by comma-separated stores\&#39; id
     */
    public customerGroupAddWithHttpInfo(name: string, storeId?: string, storesIds?: string, _options?: Configuration): Promise<HttpInfo<CustomerGroupAdd200Response>> {
        const result = this.api.customerGroupAddWithHttpInfo(name, storeId, storesIds, _options);
        return result.toPromise();
    }

    /**
     * Create customer group.
     * customer.group.add
     * @param name Customer group name
     * @param [storeId] Store Id
     * @param [storesIds] Assign customer group to the stores that is specified by comma-separated stores\&#39; id
     */
    public customerGroupAdd(name: string, storeId?: string, storesIds?: string, _options?: Configuration): Promise<CustomerGroupAdd200Response> {
        const result = this.api.customerGroupAdd(name, storeId, storesIds, _options);
        return result.toPromise();
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
    public customerGroupListWithHttpInfo(start?: number, count?: number, pageCursor?: string, groupIds?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, disableCache?: boolean, _options?: Configuration): Promise<HttpInfo<ModelResponseCustomerGroupList>> {
        const result = this.api.customerGroupListWithHttpInfo(start, count, pageCursor, groupIds, storeId, langId, responseFields, params, exclude, disableCache, _options);
        return result.toPromise();
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
    public customerGroupList(start?: number, count?: number, pageCursor?: string, groupIds?: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, disableCache?: boolean, _options?: Configuration): Promise<ModelResponseCustomerGroupList> {
        const result = this.api.customerGroupList(start, count, pageCursor, groupIds, storeId, langId, responseFields, params, exclude, disableCache, _options);
        return result.toPromise();
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
    public customerInfoWithHttpInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<CustomerInfo200Response>> {
        const result = this.api.customerInfoWithHttpInfo(id, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public customerInfo(id: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<CustomerInfo200Response> {
        const result = this.api.customerInfo(id, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public customerListWithHttpInfo(start?: number, count?: number, pageCursor?: string, ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCustomerList>> {
        const result = this.api.customerListWithHttpInfo(start, count, pageCursor, ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, sortBy, sortDirection, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public customerList(start?: number, count?: number, pageCursor?: string, ids?: string, sinceId?: string, customerListId?: string, groupId?: string, storeId?: string, avail?: boolean, includeGuests?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseCustomerList> {
        const result = this.api.customerList(start, count, pageCursor, ids, sinceId, customerListId, groupId, storeId, avail, includeGuests, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, sortBy, sortDirection, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Update information of customer in store.
     * customer.update
     * @param customerUpdate
     */
    public customerUpdateWithHttpInfo(customerUpdate: CustomerUpdate, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.customerUpdateWithHttpInfo(customerUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update information of customer in store.
     * customer.update
     * @param customerUpdate
     */
    public customerUpdate(customerUpdate: CustomerUpdate, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.customerUpdate(customerUpdate, _options);
        return result.toPromise();
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
    public customerWishlistListWithHttpInfo(customerId: string, start?: number, count?: number, pageCursor?: string, id?: string, storeId?: string, responseFields?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseCustomerWishlistList>> {
        const result = this.api.customerWishlistListWithHttpInfo(customerId, start, count, pageCursor, id, storeId, responseFields, _options);
        return result.toPromise();
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
    public customerWishlistList(customerId: string, start?: number, count?: number, pageCursor?: string, id?: string, storeId?: string, responseFields?: string, _options?: Configuration): Promise<ModelResponseCustomerWishlistList> {
        const result = this.api.customerWishlistList(customerId, start, count, pageCursor, id, storeId, responseFields, _options);
        return result.toPromise();
    }


}



import { ObservableMarketplaceApi } from './ObservableAPI';

import { MarketplaceApiRequestFactory, MarketplaceApiResponseProcessor} from "../apis/MarketplaceApi";
export class PromiseMarketplaceApi {
    private api: ObservableMarketplaceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MarketplaceApiRequestFactory,
        responseProcessor?: MarketplaceApiResponseProcessor
    ) {
        this.api = new ObservableMarketplaceApi(configuration, requestFactory, responseProcessor);
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
    public marketplaceProductFindWithHttpInfo(count?: number, pageCursor?: string, keyword?: string, categoriesIds?: string, storeId?: string, asin?: string, ean?: string, gtin?: string, upc?: string, mpn?: string, isbn?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseMarketplaceProductFind>> {
        const result = this.api.marketplaceProductFindWithHttpInfo(count, pageCursor, keyword, categoriesIds, storeId, asin, ean, gtin, upc, mpn, isbn, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public marketplaceProductFind(count?: number, pageCursor?: string, keyword?: string, categoriesIds?: string, storeId?: string, asin?: string, ean?: string, gtin?: string, upc?: string, mpn?: string, isbn?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseMarketplaceProductFind> {
        const result = this.api.marketplaceProductFind(count, pageCursor, keyword, categoriesIds, storeId, asin, ean, gtin, upc, mpn, isbn, responseFields, params, exclude, _options);
        return result.toPromise();
    }


}



import { ObservableOrderApi } from './ObservableAPI';

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class PromiseOrderApi {
    private api: ObservableOrderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
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
    public orderAbandonedListWithHttpInfo(start?: number, count?: number, pageCursor?: string, customerId?: string, customerEmail?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, skipEmptyEmail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseOrderAbandonedList>> {
        const result = this.api.orderAbandonedListWithHttpInfo(start, count, pageCursor, customerId, customerEmail, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, skipEmptyEmail, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public orderAbandonedList(start?: number, count?: number, pageCursor?: string, customerId?: string, customerEmail?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, skipEmptyEmail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseOrderAbandonedList> {
        const result = this.api.orderAbandonedList(start, count, pageCursor, customerId, customerEmail, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, skipEmptyEmail, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Add a new order to the cart.
     * order.add
     * @param orderAdd
     */
    public orderAddWithHttpInfo(orderAdd: OrderAdd, _options?: Configuration): Promise<HttpInfo<OrderAdd200Response>> {
        const result = this.api.orderAddWithHttpInfo(orderAdd, _options);
        return result.toPromise();
    }

    /**
     * Add a new order to the cart.
     * order.add
     * @param orderAdd
     */
    public orderAdd(orderAdd: OrderAdd, _options?: Configuration): Promise<OrderAdd200Response> {
        const result = this.api.orderAdd(orderAdd, _options);
        return result.toPromise();
    }

    /**
     * <p>Calculates the total cost of an order for a given customer and a set of products, as well as the available shipping methods based on the specified address. The calculation takes into account store product prices, discounts, taxes, shipping costs, and other store settings. The result includes a detailed breakdown of the final order cost by its components.</p> <p>Note that the final totals, taxes, and other amounts must include the corresponding values for the selected shipping method.</p><p>The result of this method can be used when creating an order using the <strong>order.add</strong> method.</p>
     * order.calculate
     * @param orderCalculate
     */
    public orderCalculateWithHttpInfo(orderCalculate: OrderCalculate, _options?: Configuration): Promise<HttpInfo<OrderCalculate200Response>> {
        const result = this.api.orderCalculateWithHttpInfo(orderCalculate, _options);
        return result.toPromise();
    }

    /**
     * <p>Calculates the total cost of an order for a given customer and a set of products, as well as the available shipping methods based on the specified address. The calculation takes into account store product prices, discounts, taxes, shipping costs, and other store settings. The result includes a detailed breakdown of the final order cost by its components.</p> <p>Note that the final totals, taxes, and other amounts must include the corresponding values for the selected shipping method.</p><p>The result of this method can be used when creating an order using the <strong>order.add</strong> method.</p>
     * order.calculate
     * @param orderCalculate
     */
    public orderCalculate(orderCalculate: OrderCalculate, _options?: Configuration): Promise<OrderCalculate200Response> {
        const result = this.api.orderCalculate(orderCalculate, _options);
        return result.toPromise();
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
    public orderCountWithHttpInfo(orderIds?: string, ids?: string, customerId?: string, storeId?: string, customerEmail?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentChannel?: string, fulfillmentStatus?: string, shippingMethod?: string, deliveryMethod?: string, tags?: string, shipNodeType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Promise<HttpInfo<OrderCount200Response>> {
        const result = this.api.orderCountWithHttpInfo(orderIds, ids, customerId, storeId, customerEmail, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentChannel, fulfillmentStatus, shippingMethod, deliveryMethod, tags, shipNodeType, createdFrom, createdTo, modifiedFrom, modifiedTo, _options);
        return result.toPromise();
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
    public orderCount(orderIds?: string, ids?: string, customerId?: string, storeId?: string, customerEmail?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentChannel?: string, fulfillmentStatus?: string, shippingMethod?: string, deliveryMethod?: string, tags?: string, shipNodeType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, _options?: Configuration): Promise<OrderCount200Response> {
        const result = this.api.orderCount(orderIds, ids, customerId, storeId, customerEmail, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentChannel, fulfillmentStatus, shippingMethod, deliveryMethod, tags, shipNodeType, createdFrom, createdTo, modifiedFrom, modifiedTo, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of financial statuses
     * order.financial_status.list
     */
    public orderFinancialStatusListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<OrderFinancialStatusList200Response>> {
        const result = this.api.orderFinancialStatusListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieve list of financial statuses
     * order.financial_status.list
     */
    public orderFinancialStatusList(_options?: Configuration): Promise<OrderFinancialStatusList200Response> {
        const result = this.api.orderFinancialStatusList(_options);
        return result.toPromise();
    }

    /**
     * Retrieve list of fulfillment statuses
     * order.fulfillment_status.list
     * @param [action] Available statuses for the specified action.
     */
    public orderFulfillmentStatusListWithHttpInfo(action?: string, _options?: Configuration): Promise<HttpInfo<OrderFulfillmentStatusList200Response>> {
        const result = this.api.orderFulfillmentStatusListWithHttpInfo(action, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of fulfillment statuses
     * order.fulfillment_status.list
     * @param [action] Available statuses for the specified action.
     */
    public orderFulfillmentStatusList(action?: string, _options?: Configuration): Promise<OrderFulfillmentStatusList200Response> {
        const result = this.api.orderFulfillmentStatusList(action, _options);
        return result.toPromise();
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
     */
    public orderInfoWithHttpInfo(id?: string, orderId?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<HttpInfo<OrderInfo200Response>> {
        const result = this.api.orderInfoWithHttpInfo(id, orderId, storeId, params, responseFields, exclude, enableCache, useLatestApiVersion, _options);
        return result.toPromise();
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
     */
    public orderInfo(id?: string, orderId?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<OrderInfo200Response> {
        const result = this.api.orderInfo(id, orderId, storeId, params, responseFields, exclude, enableCache, useLatestApiVersion, _options);
        return result.toPromise();
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
     */
    public orderListWithHttpInfo(start?: number, count?: number, pageCursor?: string, ids?: string, orderIds?: string, sinceId?: string, storeId?: string, customerId?: string, customerEmail?: string, basketId?: string, currencyId?: string, phone?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentStatus?: string, returnStatus?: string, fulfillmentChannel?: string, shippingMethod?: string, skipOrderIds?: string, isDeleted?: boolean, shippingCountryIso3?: string, deliveryMethod?: string, shipNodeType?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, tags?: string, sortBy?: string, sortDirection?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<HttpInfo<ModelResponseOrderList>> {
        const result = this.api.orderListWithHttpInfo(start, count, pageCursor, ids, orderIds, sinceId, storeId, customerId, customerEmail, basketId, currencyId, phone, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentStatus, returnStatus, fulfillmentChannel, shippingMethod, skipOrderIds, isDeleted, shippingCountryIso3, deliveryMethod, shipNodeType, createdTo, createdFrom, modifiedTo, modifiedFrom, tags, sortBy, sortDirection, params, responseFields, exclude, enableCache, useLatestApiVersion, _options);
        return result.toPromise();
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
     */
    public orderList(start?: number, count?: number, pageCursor?: string, ids?: string, orderIds?: string, sinceId?: string, storeId?: string, customerId?: string, customerEmail?: string, basketId?: string, currencyId?: string, phone?: string, orderStatus?: string, orderStatusIds?: Array<string>, ebayOrderStatus?: string, financialStatus?: string, financialStatusIds?: Array<string>, fulfillmentStatus?: string, returnStatus?: string, fulfillmentChannel?: string, shippingMethod?: string, skipOrderIds?: string, isDeleted?: boolean, shippingCountryIso3?: string, deliveryMethod?: string, shipNodeType?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, tags?: string, sortBy?: string, sortDirection?: string, params?: string, responseFields?: string, exclude?: string, enableCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<ModelResponseOrderList> {
        const result = this.api.orderList(start, count, pageCursor, ids, orderIds, sinceId, storeId, customerId, customerEmail, basketId, currencyId, phone, orderStatus, orderStatusIds, ebayOrderStatus, financialStatus, financialStatusIds, fulfillmentStatus, returnStatus, fulfillmentChannel, shippingMethod, skipOrderIds, isDeleted, shippingCountryIso3, deliveryMethod, shipNodeType, createdTo, createdFrom, modifiedTo, modifiedFrom, tags, sortBy, sortDirection, params, responseFields, exclude, enableCache, useLatestApiVersion, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of order preestimated shipping methods
     * order.preestimate_shipping.list
     * @param orderPreestimateShippingList
     */
    public orderPreestimateShippingListWithHttpInfo(orderPreestimateShippingList: OrderPreestimateShippingList, _options?: Configuration): Promise<HttpInfo<ModelResponseOrderPreestimateShippingList>> {
        const result = this.api.orderPreestimateShippingListWithHttpInfo(orderPreestimateShippingList, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of order preestimated shipping methods
     * order.preestimate_shipping.list
     * @param orderPreestimateShippingList
     */
    public orderPreestimateShippingList(orderPreestimateShippingList: OrderPreestimateShippingList, _options?: Configuration): Promise<ModelResponseOrderPreestimateShippingList> {
        const result = this.api.orderPreestimateShippingList(orderPreestimateShippingList, _options);
        return result.toPromise();
    }

    /**
     * Add a refund to the order.
     * order.refund.add
     * @param orderRefundAdd
     */
    public orderRefundAddWithHttpInfo(orderRefundAdd: OrderRefundAdd, _options?: Configuration): Promise<HttpInfo<OrderRefundAdd200Response>> {
        const result = this.api.orderRefundAddWithHttpInfo(orderRefundAdd, _options);
        return result.toPromise();
    }

    /**
     * Add a refund to the order.
     * order.refund.add
     * @param orderRefundAdd
     */
    public orderRefundAdd(orderRefundAdd: OrderRefundAdd, _options?: Configuration): Promise<OrderRefundAdd200Response> {
        const result = this.api.orderRefundAdd(orderRefundAdd, _options);
        return result.toPromise();
    }

    /**
     * Create new return request.
     * order.return.add
     * @param orderReturnAdd
     */
    public orderReturnAddWithHttpInfo(orderReturnAdd: OrderReturnAdd, _options?: Configuration): Promise<HttpInfo<OrderReturnAdd200Response>> {
        const result = this.api.orderReturnAddWithHttpInfo(orderReturnAdd, _options);
        return result.toPromise();
    }

    /**
     * Create new return request.
     * order.return.add
     * @param orderReturnAdd
     */
    public orderReturnAdd(orderReturnAdd: OrderReturnAdd, _options?: Configuration): Promise<OrderReturnAdd200Response> {
        const result = this.api.orderReturnAdd(orderReturnAdd, _options);
        return result.toPromise();
    }

    /**
     * Delete return.
     * order.return.delete
     * @param returnId Return ID
     * @param orderId Defines the order id
     * @param [storeId] Store Id
     */
    public orderReturnDeleteWithHttpInfo(returnId: string, orderId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        const result = this.api.orderReturnDeleteWithHttpInfo(returnId, orderId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete return.
     * order.return.delete
     * @param returnId Return ID
     * @param orderId Defines the order id
     * @param [storeId] Store Id
     */
    public orderReturnDelete(returnId: string, orderId: string, storeId?: string, _options?: Configuration): Promise<AttributeValueDelete200Response> {
        const result = this.api.orderReturnDelete(returnId, orderId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.return.update
     * @param orderReturnUpdate
     */
    public orderReturnUpdateWithHttpInfo(orderReturnUpdate: OrderReturnUpdate, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.orderReturnUpdateWithHttpInfo(orderReturnUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.return.update
     * @param orderReturnUpdate
     */
    public orderReturnUpdate(orderReturnUpdate: OrderReturnUpdate, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.orderReturnUpdate(orderReturnUpdate, _options);
        return result.toPromise();
    }

    /**
     * Add a shipment to the order.
     * order.shipment.add
     * @param orderShipmentAdd
     */
    public orderShipmentAddWithHttpInfo(orderShipmentAdd: OrderShipmentAdd, _options?: Configuration): Promise<HttpInfo<OrderShipmentAdd200Response>> {
        const result = this.api.orderShipmentAddWithHttpInfo(orderShipmentAdd, _options);
        return result.toPromise();
    }

    /**
     * Add a shipment to the order.
     * order.shipment.add
     * @param orderShipmentAdd
     */
    public orderShipmentAdd(orderShipmentAdd: OrderShipmentAdd, _options?: Configuration): Promise<OrderShipmentAdd200Response> {
        const result = this.api.orderShipmentAdd(orderShipmentAdd, _options);
        return result.toPromise();
    }

    /**
     * Add a shipments to the orders.
     * order.shipment.add.batch
     * @param orderShipmentAddBatch
     */
    public orderShipmentAddBatchWithHttpInfo(orderShipmentAddBatch: OrderShipmentAddBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.orderShipmentAddBatchWithHttpInfo(orderShipmentAddBatch, _options);
        return result.toPromise();
    }

    /**
     * Add a shipments to the orders.
     * order.shipment.add.batch
     * @param orderShipmentAddBatch
     */
    public orderShipmentAddBatch(orderShipmentAddBatch: OrderShipmentAddBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.orderShipmentAddBatch(orderShipmentAddBatch, _options);
        return result.toPromise();
    }

    /**
     * Delete order\'s shipment.
     * order.shipment.delete
     * @param shipmentId Shipment id indicates the number of delivery
     * @param orderId Defines the order for which the shipment will be deleted
     * @param [storeId] Store Id
     */
    public orderShipmentDeleteWithHttpInfo(shipmentId: string, orderId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<OrderShipmentDelete200Response>> {
        const result = this.api.orderShipmentDeleteWithHttpInfo(shipmentId, orderId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete order\'s shipment.
     * order.shipment.delete
     * @param shipmentId Shipment id indicates the number of delivery
     * @param orderId Defines the order for which the shipment will be deleted
     * @param [storeId] Store Id
     */
    public orderShipmentDelete(shipmentId: string, orderId: string, storeId?: string, _options?: Configuration): Promise<OrderShipmentDelete200Response> {
        const result = this.api.orderShipmentDelete(shipmentId, orderId, storeId, _options);
        return result.toPromise();
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
    public orderShipmentInfoWithHttpInfo(id: string, orderId: string, start?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<OrderShipmentInfo200Response>> {
        const result = this.api.orderShipmentInfoWithHttpInfo(id, orderId, start, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public orderShipmentInfo(id: string, orderId: string, start?: number, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<OrderShipmentInfo200Response> {
        const result = this.api.orderShipmentInfo(id, orderId, start, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public orderShipmentListWithHttpInfo(orderId: string, start?: number, count?: number, pageCursor?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseOrderShipmentList>> {
        const result = this.api.orderShipmentListWithHttpInfo(orderId, start, count, pageCursor, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public orderShipmentList(orderId: string, start?: number, count?: number, pageCursor?: string, storeId?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseOrderShipmentList> {
        const result = this.api.orderShipmentList(orderId, start, count, pageCursor, storeId, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Add order shipment\'s tracking info.
     * order.shipment.tracking.add
     * @param orderShipmentTrackingAdd
     */
    public orderShipmentTrackingAddWithHttpInfo(orderShipmentTrackingAdd: OrderShipmentTrackingAdd, _options?: Configuration): Promise<HttpInfo<OrderShipmentTrackingAdd200Response>> {
        const result = this.api.orderShipmentTrackingAddWithHttpInfo(orderShipmentTrackingAdd, _options);
        return result.toPromise();
    }

    /**
     * Add order shipment\'s tracking info.
     * order.shipment.tracking.add
     * @param orderShipmentTrackingAdd
     */
    public orderShipmentTrackingAdd(orderShipmentTrackingAdd: OrderShipmentTrackingAdd, _options?: Configuration): Promise<OrderShipmentTrackingAdd200Response> {
        const result = this.api.orderShipmentTrackingAdd(orderShipmentTrackingAdd, _options);
        return result.toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.shipment.update
     * @param orderShipmentUpdate
     */
    public orderShipmentUpdateWithHttpInfo(orderShipmentUpdate: OrderShipmentUpdate, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.orderShipmentUpdateWithHttpInfo(orderShipmentUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update order\'s shipment information.
     * order.shipment.update
     * @param orderShipmentUpdate
     */
    public orderShipmentUpdate(orderShipmentUpdate: OrderShipmentUpdate, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.orderShipmentUpdate(orderShipmentUpdate, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of statuses
     * order.status.list
     * @param [storeId] Store Id
     * @param [action] Available statuses for the specified action.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public orderStatusListWithHttpInfo(storeId?: string, action?: string, responseFields?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseOrderStatusList>> {
        const result = this.api.orderStatusListWithHttpInfo(storeId, action, responseFields, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of statuses
     * order.status.list
     * @param [storeId] Store Id
     * @param [action] Available statuses for the specified action.
     * @param [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     */
    public orderStatusList(storeId?: string, action?: string, responseFields?: string, _options?: Configuration): Promise<ModelResponseOrderStatusList> {
        const result = this.api.orderStatusList(storeId, action, responseFields, _options);
        return result.toPromise();
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
    public orderTransactionListWithHttpInfo(orderIds: string, count?: number, pageCursor?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseOrderTransactionList>> {
        const result = this.api.orderTransactionListWithHttpInfo(orderIds, count, pageCursor, storeId, params, responseFields, exclude, _options);
        return result.toPromise();
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
    public orderTransactionList(orderIds: string, count?: number, pageCursor?: string, storeId?: string, params?: string, responseFields?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseOrderTransactionList> {
        const result = this.api.orderTransactionList(orderIds, count, pageCursor, storeId, params, responseFields, exclude, _options);
        return result.toPromise();
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
    public orderUpdateWithHttpInfo(orderId: string, storeId?: string, orderStatus?: string, financialStatus?: string, fulfillmentStatus?: string, cancellationReason?: string, orderPaymentMethod?: string, comment?: string, adminComment?: string, adminPrivateComment?: string, invoiceAdminComment?: string, dateModified?: string, dateFinished?: string, sendNotifications?: boolean, createInvoice?: boolean, origin?: string, tags?: string, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.orderUpdateWithHttpInfo(orderId, storeId, orderStatus, financialStatus, fulfillmentStatus, cancellationReason, orderPaymentMethod, comment, adminComment, adminPrivateComment, invoiceAdminComment, dateModified, dateFinished, sendNotifications, createInvoice, origin, tags, _options);
        return result.toPromise();
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
    public orderUpdate(orderId: string, storeId?: string, orderStatus?: string, financialStatus?: string, fulfillmentStatus?: string, cancellationReason?: string, orderPaymentMethod?: string, comment?: string, adminComment?: string, adminPrivateComment?: string, invoiceAdminComment?: string, dateModified?: string, dateFinished?: string, sendNotifications?: boolean, createInvoice?: boolean, origin?: string, tags?: string, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.orderUpdate(orderId, storeId, orderStatus, financialStatus, fulfillmentStatus, cancellationReason, orderPaymentMethod, comment, adminComment, adminPrivateComment, invoiceAdminComment, dateModified, dateFinished, sendNotifications, createInvoice, origin, tags, _options);
        return result.toPromise();
    }


}



import { ObservableProductApi } from './ObservableAPI';

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class PromiseProductApi {
    private api: ObservableProductApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add new product to store.
     * product.add
     * @param productAdd
     */
    public productAddWithHttpInfo(productAdd: ProductAdd, _options?: Configuration): Promise<HttpInfo<ProductAdd200Response>> {
        const result = this.api.productAddWithHttpInfo(productAdd, _options);
        return result.toPromise();
    }

    /**
     * Add new product to store.
     * product.add
     * @param productAdd
     */
    public productAdd(productAdd: ProductAdd, _options?: Configuration): Promise<ProductAdd200Response> {
        const result = this.api.productAdd(productAdd, _options);
        return result.toPromise();
    }

    /**
     * Add new products to the store.
     * product.add.batch
     * @param productAddBatch
     */
    public productAddBatchWithHttpInfo(productAddBatch: ProductAddBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.productAddBatchWithHttpInfo(productAddBatch, _options);
        return result.toPromise();
    }

    /**
     * Add new products to the store.
     * product.add.batch
     * @param productAddBatch
     */
    public productAddBatch(productAddBatch: ProductAddBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.productAddBatch(productAddBatch, _options);
        return result.toPromise();
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
    public productAttributeListWithHttpInfo(productId: string, start?: number, count?: number, pageCursor?: string, attributeId?: string, variantId?: string, attributeGroupId?: string, langId?: string, storeId?: string, setName?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseProductAttributeList>> {
        const result = this.api.productAttributeListWithHttpInfo(productId, start, count, pageCursor, attributeId, variantId, attributeGroupId, langId, storeId, setName, sortBy, sortDirection, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public productAttributeList(productId: string, start?: number, count?: number, pageCursor?: string, attributeId?: string, variantId?: string, attributeGroupId?: string, langId?: string, storeId?: string, setName?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseProductAttributeList> {
        const result = this.api.productAttributeList(productId, start, count, pageCursor, attributeId, variantId, attributeGroupId, langId, storeId, setName, sortBy, sortDirection, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public productAttributeValueSetWithHttpInfo(productId: string, attributeId?: string, attributeGroupId?: string, attributeName?: string, value?: string, valueId?: number, langId?: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<ProductAttributeValueSet200Response>> {
        const result = this.api.productAttributeValueSetWithHttpInfo(productId, attributeId, attributeGroupId, attributeName, value, valueId, langId, storeId, _options);
        return result.toPromise();
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
    public productAttributeValueSet(productId: string, attributeId?: string, attributeGroupId?: string, attributeName?: string, value?: string, valueId?: number, langId?: string, storeId?: string, _options?: Configuration): Promise<ProductAttributeValueSet200Response> {
        const result = this.api.productAttributeValueSet(productId, attributeId, attributeGroupId, attributeName, value, valueId, langId, storeId, _options);
        return result.toPromise();
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
    public productAttributeValueUnsetWithHttpInfo(productId: string, attributeId: string, storeId?: string, includeDefault?: boolean, reindex?: boolean, clearCache?: boolean, _options?: Configuration): Promise<HttpInfo<ProductAttributeValueUnset200Response>> {
        const result = this.api.productAttributeValueUnsetWithHttpInfo(productId, attributeId, storeId, includeDefault, reindex, clearCache, _options);
        return result.toPromise();
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
    public productAttributeValueUnset(productId: string, attributeId: string, storeId?: string, includeDefault?: boolean, reindex?: boolean, clearCache?: boolean, _options?: Configuration): Promise<ProductAttributeValueUnset200Response> {
        const result = this.api.productAttributeValueUnset(productId, attributeId, storeId, includeDefault, reindex, clearCache, _options);
        return result.toPromise();
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
    public productBrandListWithHttpInfo(start?: number, count?: number, pageCursor?: string, brandIds?: string, categoryId?: string, parentId?: string, storeId?: string, langId?: string, findWhere?: string, findValue?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseProductBrandList>> {
        const result = this.api.productBrandListWithHttpInfo(start, count, pageCursor, brandIds, categoryId, parentId, storeId, langId, findWhere, findValue, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public productBrandList(start?: number, count?: number, pageCursor?: string, brandIds?: string, categoryId?: string, parentId?: string, storeId?: string, langId?: string, findWhere?: string, findValue?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseProductBrandList> {
        const result = this.api.productBrandList(start, count, pageCursor, brandIds, categoryId, parentId, storeId, langId, findWhere, findValue, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Search product child item (bundled item or configurable product variant) in store catalog.
     * product.child_item.find
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     */
    public productChildItemFindWithHttpInfo(findValue?: string, findWhere?: string, findParams?: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<ProductChildItemFind200Response>> {
        const result = this.api.productChildItemFindWithHttpInfo(findValue, findWhere, findParams, storeId, _options);
        return result.toPromise();
    }

    /**
     * Search product child item (bundled item or configurable product variant) in store catalog.
     * product.child_item.find
     * @param [findValue] Entity search that is specified by some value
     * @param [findWhere] Entity search that is specified by the comma-separated unique fields
     * @param [findParams] Entity search that is specified by comma-separated parameters
     * @param [storeId] Store Id
     */
    public productChildItemFind(findValue?: string, findWhere?: string, findParams?: string, storeId?: string, _options?: Configuration): Promise<ProductChildItemFind200Response> {
        const result = this.api.productChildItemFind(findValue, findWhere, findParams, storeId, _options);
        return result.toPromise();
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
    public productChildItemInfoWithHttpInfo(productId: string, id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, useLatestApiVersion?: boolean, _options?: Configuration): Promise<HttpInfo<ProductChildItemInfo200Response>> {
        const result = this.api.productChildItemInfoWithHttpInfo(productId, id, storeId, langId, currencyId, responseFields, params, exclude, useLatestApiVersion, _options);
        return result.toPromise();
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
    public productChildItemInfo(productId: string, id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, useLatestApiVersion?: boolean, _options?: Configuration): Promise<ProductChildItemInfo200Response> {
        const result = this.api.productChildItemInfo(productId, id, storeId, langId, currencyId, responseFields, params, exclude, useLatestApiVersion, _options);
        return result.toPromise();
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
    public productChildItemListWithHttpInfo(start?: number, count?: number, pageCursor?: string, productId?: string, productIds?: string, sku?: string, storeId?: string, langId?: string, currencyId?: string, availSale?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, returnGlobal?: boolean, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<HttpInfo<ModelResponseProductChildItemList>> {
        const result = this.api.productChildItemListWithHttpInfo(start, count, pageCursor, productId, productIds, sku, storeId, langId, currencyId, availSale, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, returnGlobal, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options);
        return result.toPromise();
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
    public productChildItemList(start?: number, count?: number, pageCursor?: string, productId?: string, productIds?: string, sku?: string, storeId?: string, langId?: string, currencyId?: string, availSale?: boolean, findValue?: string, findWhere?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, returnGlobal?: boolean, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<ModelResponseProductChildItemList> {
        const result = this.api.productChildItemList(start, count, pageCursor, productId, productIds, sku, storeId, langId, currencyId, availSale, findValue, findWhere, createdFrom, createdTo, modifiedFrom, modifiedTo, returnGlobal, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options);
        return result.toPromise();
    }

    /**
     * Count products in store.
     * product.count
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
    public productCountWithHttpInfo(productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, brandName?: string, productAttributes?: Array<string>, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, reportRequestId?: string, returnGlobal?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<HttpInfo<ProductCount200Response>> {
        const result = this.api.productCountWithHttpInfo(productIds, sinceId, categoriesIds, categoryId, storeId, langId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, brandName, productAttributes, status, type, visible, findValue, findWhere, reportRequestId, returnGlobal, disableReportCache, useLatestApiVersion, _options);
        return result.toPromise();
    }

    /**
     * Count products in store.
     * product.count
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
    public productCount(productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, brandName?: string, productAttributes?: Array<string>, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, reportRequestId?: string, returnGlobal?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<ProductCount200Response> {
        const result = this.api.productCount(productIds, sinceId, categoriesIds, categoryId, storeId, langId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, brandName, productAttributes, status, type, visible, findValue, findWhere, reportRequestId, returnGlobal, disableReportCache, useLatestApiVersion, _options);
        return result.toPromise();
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
    public productCurrencyAddWithHttpInfo(iso3: string, rate: number, name?: string, avail?: boolean, symbolLeft?: string, symbolRight?: string, _default?: boolean, _options?: Configuration): Promise<HttpInfo<ProductCurrencyAdd200Response>> {
        const result = this.api.productCurrencyAddWithHttpInfo(iso3, rate, name, avail, symbolLeft, symbolRight, _default, _options);
        return result.toPromise();
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
    public productCurrencyAdd(iso3: string, rate: number, name?: string, avail?: boolean, symbolLeft?: string, symbolRight?: string, _default?: boolean, _options?: Configuration): Promise<ProductCurrencyAdd200Response> {
        const result = this.api.productCurrencyAdd(iso3, rate, name, avail, symbolLeft, symbolRight, _default, _options);
        return result.toPromise();
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
    public productCurrencyListWithHttpInfo(start?: number, count?: number, pageCursor?: string, _default?: boolean, avail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseProductCurrencyList>> {
        const result = this.api.productCurrencyListWithHttpInfo(start, count, pageCursor, _default, avail, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public productCurrencyList(start?: number, count?: number, pageCursor?: string, _default?: boolean, avail?: boolean, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseProductCurrencyList> {
        const result = this.api.productCurrencyList(start, count, pageCursor, _default, avail, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Product delete
     * product.delete
     * @param id Product id that will be removed
     * @param [storeId] Store Id
     */
    public productDeleteWithHttpInfo(id: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<CustomerDelete200Response>> {
        const result = this.api.productDeleteWithHttpInfo(id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Product delete
     * product.delete
     * @param id Product id that will be removed
     * @param [storeId] Store Id
     */
    public productDelete(id: string, storeId?: string, _options?: Configuration): Promise<CustomerDelete200Response> {
        const result = this.api.productDelete(id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Remove product from the store.
     * product.delete.batch
     * @param productDeleteBatch
     */
    public productDeleteBatchWithHttpInfo(productDeleteBatch: ProductDeleteBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.productDeleteBatchWithHttpInfo(productDeleteBatch, _options);
        return result.toPromise();
    }

    /**
     * Remove product from the store.
     * product.delete.batch
     * @param productDeleteBatch
     */
    public productDeleteBatch(productDeleteBatch: ProductDeleteBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.productDeleteBatch(productDeleteBatch, _options);
        return result.toPromise();
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
    public productFindWithHttpInfo(findValue: string, findWhere?: string, findParams?: string, findWhat?: string, langId?: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<ProductFind200Response>> {
        const result = this.api.productFindWithHttpInfo(findValue, findWhere, findParams, findWhat, langId, storeId, _options);
        return result.toPromise();
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
    public productFind(findValue: string, findWhere?: string, findParams?: string, findWhat?: string, langId?: string, storeId?: string, _options?: Configuration): Promise<ProductFind200Response> {
        const result = this.api.productFind(findValue, findWhere, findParams, findWhat, langId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Add image to product
     * product.image.add
     * @param productImageAdd
     */
    public productImageAddWithHttpInfo(productImageAdd: ProductImageAdd, _options?: Configuration): Promise<HttpInfo<ProductImageAdd200Response>> {
        const result = this.api.productImageAddWithHttpInfo(productImageAdd, _options);
        return result.toPromise();
    }

    /**
     * Add image to product
     * product.image.add
     * @param productImageAdd
     */
    public productImageAdd(productImageAdd: ProductImageAdd, _options?: Configuration): Promise<ProductImageAdd200Response> {
        const result = this.api.productImageAdd(productImageAdd, _options);
        return result.toPromise();
    }

    /**
     * Delete image
     * product.image.delete
     * @param productId Defines product id where the image should be deleted
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productImageDeleteWithHttpInfo(productId: string, id: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.productImageDeleteWithHttpInfo(productId, id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete image
     * product.image.delete
     * @param productId Defines product id where the image should be deleted
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productImageDelete(productId: string, id: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.productImageDelete(productId, id, storeId, _options);
        return result.toPromise();
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
    public productImageUpdateWithHttpInfo(productId: string, id: string, variantIds?: string, storeId?: string, langId?: string, imageName?: string, type?: string, label?: string, position?: number, hidden?: boolean, _options?: Configuration): Promise<HttpInfo<ProductImageUpdate200Response>> {
        const result = this.api.productImageUpdateWithHttpInfo(productId, id, variantIds, storeId, langId, imageName, type, label, position, hidden, _options);
        return result.toPromise();
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
    public productImageUpdate(productId: string, id: string, variantIds?: string, storeId?: string, langId?: string, imageName?: string, type?: string, label?: string, position?: number, hidden?: boolean, _options?: Configuration): Promise<ProductImageUpdate200Response> {
        const result = this.api.productImageUpdate(productId, id, variantIds, storeId, langId, imageName, type, label, position, hidden, _options);
        return result.toPromise();
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
    public productInfoWithHttpInfo(id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<HttpInfo<ProductInfo200Response>> {
        const result = this.api.productInfoWithHttpInfo(id, storeId, langId, currencyId, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options);
        return result.toPromise();
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
    public productInfo(id: string, storeId?: string, langId?: string, currencyId?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, useLatestApiVersion?: boolean, _options?: Configuration): Promise<ProductInfo200Response> {
        const result = this.api.productInfo(id, storeId, langId, currencyId, responseFields, params, exclude, reportRequestId, disableReportCache, useLatestApiVersion, _options);
        return result.toPromise();
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
    public productListWithHttpInfo(start?: number, count?: number, pageCursor?: string, productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, currencyId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sku?: string, brandName?: string, productAttributes?: Array<string>, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, returnGlobal?: boolean, params?: string, responseFields?: string, exclude?: string, sortBy?: string, sortDirection?: string, reportRequestId?: string, disableCache?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, productType?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseProductList>> {
        const result = this.api.productListWithHttpInfo(start, count, pageCursor, productIds, sinceId, categoriesIds, categoryId, storeId, langId, currencyId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, sku, brandName, productAttributes, status, type, visible, findValue, findWhere, returnGlobal, params, responseFields, exclude, sortBy, sortDirection, reportRequestId, disableCache, disableReportCache, useLatestApiVersion, productType, _options);
        return result.toPromise();
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
    public productList(start?: number, count?: number, pageCursor?: string, productIds?: string, sinceId?: string, categoriesIds?: string, categoryId?: string, storeId?: string, langId?: string, currencyId?: string, availView?: boolean, availSale?: boolean, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, sku?: string, brandName?: string, productAttributes?: Array<string>, status?: string, type?: string, visible?: string, findValue?: string, findWhere?: string, returnGlobal?: boolean, params?: string, responseFields?: string, exclude?: string, sortBy?: string, sortDirection?: string, reportRequestId?: string, disableCache?: boolean, disableReportCache?: boolean, useLatestApiVersion?: boolean, productType?: string, _options?: Configuration): Promise<ModelResponseProductList> {
        const result = this.api.productList(start, count, pageCursor, productIds, sinceId, categoriesIds, categoryId, storeId, langId, currencyId, availView, availSale, createdFrom, createdTo, modifiedFrom, modifiedTo, sku, brandName, productAttributes, status, type, visible, findValue, findWhere, returnGlobal, params, responseFields, exclude, sortBy, sortDirection, reportRequestId, disableCache, disableReportCache, useLatestApiVersion, productType, _options);
        return result.toPromise();
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
    public productManufacturerAddWithHttpInfo(productId: string, manufacturer: string, storeId?: string, metaTitle?: string, metaKeywords?: string, metaDescription?: string, searchKeywords?: string, imageUrl?: string, seoUrl?: string, _options?: Configuration): Promise<HttpInfo<ProductManufacturerAdd200Response>> {
        const result = this.api.productManufacturerAddWithHttpInfo(productId, manufacturer, storeId, metaTitle, metaKeywords, metaDescription, searchKeywords, imageUrl, seoUrl, _options);
        return result.toPromise();
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
    public productManufacturerAdd(productId: string, manufacturer: string, storeId?: string, metaTitle?: string, metaKeywords?: string, metaDescription?: string, searchKeywords?: string, imageUrl?: string, seoUrl?: string, _options?: Configuration): Promise<ProductManufacturerAdd200Response> {
        const result = this.api.productManufacturerAdd(productId, manufacturer, storeId, metaTitle, metaKeywords, metaDescription, searchKeywords, imageUrl, seoUrl, _options);
        return result.toPromise();
    }

    /**
     * Add product option from store.
     * product.option.add
     * @param productOptionAdd
     */
    public productOptionAddWithHttpInfo(productOptionAdd: ProductOptionAdd, _options?: Configuration): Promise<HttpInfo<ProductOptionAdd200Response>> {
        const result = this.api.productOptionAddWithHttpInfo(productOptionAdd, _options);
        return result.toPromise();
    }

    /**
     * Add product option from store.
     * product.option.add
     * @param productOptionAdd
     */
    public productOptionAdd(productOptionAdd: ProductOptionAdd, _options?: Configuration): Promise<ProductOptionAdd200Response> {
        const result = this.api.productOptionAdd(productOptionAdd, _options);
        return result.toPromise();
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
    public productOptionAssignWithHttpInfo(productId: string, optionId: string, required?: boolean, sortOrder?: number, optionValues?: string, clearCache?: boolean, _options?: Configuration): Promise<HttpInfo<ProductOptionAssign200Response>> {
        const result = this.api.productOptionAssignWithHttpInfo(productId, optionId, required, sortOrder, optionValues, clearCache, _options);
        return result.toPromise();
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
    public productOptionAssign(productId: string, optionId: string, required?: boolean, sortOrder?: number, optionValues?: string, clearCache?: boolean, _options?: Configuration): Promise<ProductOptionAssign200Response> {
        const result = this.api.productOptionAssign(productId, optionId, required, sortOrder, optionValues, clearCache, _options);
        return result.toPromise();
    }

    /**
     * Product option delete.
     * product.option.delete
     * @param optionId Defines option id that should be deleted
     * @param productId Defines product id where the option should be deleted
     * @param [storeId] Store Id
     */
    public productOptionDeleteWithHttpInfo(optionId: string, productId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.productOptionDeleteWithHttpInfo(optionId, productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Product option delete.
     * product.option.delete
     * @param optionId Defines option id that should be deleted
     * @param productId Defines product id where the option should be deleted
     * @param [storeId] Store Id
     */
    public productOptionDelete(optionId: string, productId: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.productOptionDelete(optionId, productId, storeId, _options);
        return result.toPromise();
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
    public productOptionListWithHttpInfo(start?: number, count?: number, productId?: string, langId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseProductOptionList>> {
        const result = this.api.productOptionListWithHttpInfo(start, count, productId, langId, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public productOptionList(start?: number, count?: number, productId?: string, langId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseProductOptionList> {
        const result = this.api.productOptionList(start, count, productId, langId, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public productOptionValueAddWithHttpInfo(productId: string, optionId: string, optionValue?: string, sortOrder?: number, displayValue?: string, isDefault?: boolean, clearCache?: boolean, _options?: Configuration): Promise<HttpInfo<ProductOptionValueAdd200Response>> {
        const result = this.api.productOptionValueAddWithHttpInfo(productId, optionId, optionValue, sortOrder, displayValue, isDefault, clearCache, _options);
        return result.toPromise();
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
    public productOptionValueAdd(productId: string, optionId: string, optionValue?: string, sortOrder?: number, displayValue?: string, isDefault?: boolean, clearCache?: boolean, _options?: Configuration): Promise<ProductOptionValueAdd200Response> {
        const result = this.api.productOptionValueAdd(productId, optionId, optionValue, sortOrder, displayValue, isDefault, clearCache, _options);
        return result.toPromise();
    }

    /**
     * Assign product option item from product.
     * product.option.value.assign
     * @param productOptionId Defines product\&#39;s option id where the value has to be assigned
     * @param optionValueId Defines value id that has to be assigned
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueAssignWithHttpInfo(productOptionId: number, optionValueId: string, clearCache?: boolean, _options?: Configuration): Promise<HttpInfo<ProductOptionValueAssign200Response>> {
        const result = this.api.productOptionValueAssignWithHttpInfo(productOptionId, optionValueId, clearCache, _options);
        return result.toPromise();
    }

    /**
     * Assign product option item from product.
     * product.option.value.assign
     * @param productOptionId Defines product\&#39;s option id where the value has to be assigned
     * @param optionValueId Defines value id that has to be assigned
     * @param [clearCache] Is cache clear required
     */
    public productOptionValueAssign(productOptionId: number, optionValueId: string, clearCache?: boolean, _options?: Configuration): Promise<ProductOptionValueAssign200Response> {
        const result = this.api.productOptionValueAssign(productOptionId, optionValueId, clearCache, _options);
        return result.toPromise();
    }

    /**
     * Product option value delete.
     * product.option.value.delete
     * @param optionId Defines option id where the value should be deleted
     * @param optionValueId Defines option value id that should be deleted
     * @param productId Defines product id where the option value should be deleted
     * @param [storeId] Store Id
     */
    public productOptionValueDeleteWithHttpInfo(optionId: string, optionValueId: string, productId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.productOptionValueDeleteWithHttpInfo(optionId, optionValueId, productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Product option value delete.
     * product.option.value.delete
     * @param optionId Defines option id where the value should be deleted
     * @param optionValueId Defines option value id that should be deleted
     * @param productId Defines product id where the option value should be deleted
     * @param [storeId] Store Id
     */
    public productOptionValueDelete(optionId: string, optionValueId: string, productId: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.productOptionValueDelete(optionId, optionValueId, productId, storeId, _options);
        return result.toPromise();
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
    public productOptionValueUpdateWithHttpInfo(productId: string, optionId: string, optionValueId: string, optionValue?: string, price?: number, quantity?: number, displayValue?: string, clearCache?: boolean, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.productOptionValueUpdateWithHttpInfo(productId, optionId, optionValueId, optionValue, price, quantity, displayValue, clearCache, _options);
        return result.toPromise();
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
    public productOptionValueUpdate(productId: string, optionId: string, optionValueId: string, optionValue?: string, price?: number, quantity?: number, displayValue?: string, clearCache?: boolean, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.productOptionValueUpdate(productId, optionId, optionValueId, optionValue, price, quantity, displayValue, clearCache, _options);
        return result.toPromise();
    }

    /**
     * Add some prices to the product.
     * product.price.add
     * @param productPriceAdd
     */
    public productPriceAddWithHttpInfo(productPriceAdd: ProductPriceAdd, _options?: Configuration): Promise<HttpInfo<CartValidate200Response>> {
        const result = this.api.productPriceAddWithHttpInfo(productPriceAdd, _options);
        return result.toPromise();
    }

    /**
     * Add some prices to the product.
     * product.price.add
     * @param productPriceAdd
     */
    public productPriceAdd(productPriceAdd: ProductPriceAdd, _options?: Configuration): Promise<CartValidate200Response> {
        const result = this.api.productPriceAdd(productPriceAdd, _options);
        return result.toPromise();
    }

    /**
     * Delete some prices of the product
     * product.price.delete
     * @param productId Defines the product where the price has to be deleted
     * @param [groupPrices] Defines product\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productPriceDeleteWithHttpInfo(productId: string, groupPrices?: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.productPriceDeleteWithHttpInfo(productId, groupPrices, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete some prices of the product
     * product.price.delete
     * @param productId Defines the product where the price has to be deleted
     * @param [groupPrices] Defines product\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productPriceDelete(productId: string, groupPrices?: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.productPriceDelete(productId, groupPrices, storeId, _options);
        return result.toPromise();
    }

    /**
     * Update some prices of the product.
     * product.price.update
     * @param productPriceUpdate
     */
    public productPriceUpdateWithHttpInfo(productPriceUpdate: ProductPriceUpdate, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.productPriceUpdateWithHttpInfo(productPriceUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update some prices of the product.
     * product.price.update
     * @param productPriceUpdate
     */
    public productPriceUpdate(productPriceUpdate: ProductPriceUpdate, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.productPriceUpdate(productPriceUpdate, _options);
        return result.toPromise();
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
    public productReviewListWithHttpInfo(productId: string, start?: number, count?: number, pageCursor?: string, ids?: string, storeId?: string, langId?: string, status?: string, createdFrom?: string, createdTo?: string, customerId?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseProductReviewList>> {
        const result = this.api.productReviewListWithHttpInfo(productId, start, count, pageCursor, ids, storeId, langId, status, createdFrom, createdTo, customerId, sortBy, sortDirection, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public productReviewList(productId: string, start?: number, count?: number, pageCursor?: string, ids?: string, storeId?: string, langId?: string, status?: string, createdFrom?: string, createdTo?: string, customerId?: string, sortBy?: string, sortDirection?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseProductReviewList> {
        const result = this.api.productReviewList(productId, start, count, pageCursor, ids, storeId, langId, status, createdFrom, createdTo, customerId, sortBy, sortDirection, responseFields, params, exclude, _options);
        return result.toPromise();
    }

    /**
     * Assign product to store
     * product.store.assign
     * @param productId Defines id of the product which should be assigned to a store
     * @param storeId Defines id of the store product should be assigned to
     */
    public productStoreAssignWithHttpInfo(productId: string, storeId: string, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.productStoreAssignWithHttpInfo(productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Assign product to store
     * product.store.assign
     * @param productId Defines id of the product which should be assigned to a store
     * @param storeId Defines id of the store product should be assigned to
     */
    public productStoreAssign(productId: string, storeId: string, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.productStoreAssign(productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Add tax class and tax rate to store and assign to product.
     * product.tax.add
     * @param productTaxAdd
     */
    public productTaxAddWithHttpInfo(productTaxAdd: ProductTaxAdd, _options?: Configuration): Promise<HttpInfo<ProductTaxAdd200Response>> {
        const result = this.api.productTaxAddWithHttpInfo(productTaxAdd, _options);
        return result.toPromise();
    }

    /**
     * Add tax class and tax rate to store and assign to product.
     * product.tax.add
     * @param productTaxAdd
     */
    public productTaxAdd(productTaxAdd: ProductTaxAdd, _options?: Configuration): Promise<ProductTaxAdd200Response> {
        const result = this.api.productTaxAdd(productTaxAdd, _options);
        return result.toPromise();
    }

    /**
     * This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.
     * product.update
     * @param productUpdate
     */
    public productUpdateWithHttpInfo(productUpdate: ProductUpdate, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.productUpdateWithHttpInfo(productUpdate, _options);
        return result.toPromise();
    }

    /**
     * This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.
     * product.update
     * @param productUpdate
     */
    public productUpdate(productUpdate: ProductUpdate, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.productUpdate(productUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update products on the store.
     * product.update.batch
     * @param productUpdateBatch
     */
    public productUpdateBatchWithHttpInfo(productUpdateBatch: ProductUpdateBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.productUpdateBatchWithHttpInfo(productUpdateBatch, _options);
        return result.toPromise();
    }

    /**
     * Update products on the store.
     * product.update.batch
     * @param productUpdateBatch
     */
    public productUpdateBatch(productUpdateBatch: ProductUpdateBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.productUpdateBatch(productUpdateBatch, _options);
        return result.toPromise();
    }

    /**
     * Add variant to product.
     * product.variant.add
     * @param productVariantAdd
     */
    public productVariantAddWithHttpInfo(productVariantAdd: ProductVariantAdd, _options?: Configuration): Promise<HttpInfo<ProductVariantAdd200Response>> {
        const result = this.api.productVariantAddWithHttpInfo(productVariantAdd, _options);
        return result.toPromise();
    }

    /**
     * Add variant to product.
     * product.variant.add
     * @param productVariantAdd
     */
    public productVariantAdd(productVariantAdd: ProductVariantAdd, _options?: Configuration): Promise<ProductVariantAdd200Response> {
        const result = this.api.productVariantAdd(productVariantAdd, _options);
        return result.toPromise();
    }

    /**
     * Add new product variants to the store.
     * product.variant.add.batch
     * @param productVariantAddBatch
     */
    public productVariantAddBatchWithHttpInfo(productVariantAddBatch: ProductVariantAddBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.productVariantAddBatchWithHttpInfo(productVariantAddBatch, _options);
        return result.toPromise();
    }

    /**
     * Add new product variants to the store.
     * product.variant.add.batch
     * @param productVariantAddBatch
     */
    public productVariantAddBatch(productVariantAddBatch: ProductVariantAddBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.productVariantAddBatch(productVariantAddBatch, _options);
        return result.toPromise();
    }

    /**
     * Delete variant.
     * product.variant.delete
     * @param id Defines variant removal, specified by variant id
     * @param productId Defines product\&#39;s id where the variant has to be deleted
     * @param [storeId] Store Id
     */
    public productVariantDeleteWithHttpInfo(id: string, productId: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeValueDelete200Response>> {
        const result = this.api.productVariantDeleteWithHttpInfo(id, productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete variant.
     * product.variant.delete
     * @param id Defines variant removal, specified by variant id
     * @param productId Defines product\&#39;s id where the variant has to be deleted
     * @param [storeId] Store Id
     */
    public productVariantDelete(id: string, productId: string, storeId?: string, _options?: Configuration): Promise<AttributeValueDelete200Response> {
        const result = this.api.productVariantDelete(id, productId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Remove product variants from the store.
     * product.variant.delete.batch
     * @param productVariantDeleteBatch
     */
    public productVariantDeleteBatchWithHttpInfo(productVariantDeleteBatch: ProductVariantDeleteBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.productVariantDeleteBatchWithHttpInfo(productVariantDeleteBatch, _options);
        return result.toPromise();
    }

    /**
     * Remove product variants from the store.
     * product.variant.delete.batch
     * @param productVariantDeleteBatch
     */
    public productVariantDeleteBatch(productVariantDeleteBatch: ProductVariantDeleteBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.productVariantDeleteBatch(productVariantDeleteBatch, _options);
        return result.toPromise();
    }

    /**
     * Add image to product
     * product.variant.image.add
     * @param productVariantImageAdd
     */
    public productVariantImageAddWithHttpInfo(productVariantImageAdd: ProductVariantImageAdd, _options?: Configuration): Promise<HttpInfo<ProductVariantImageAdd200Response>> {
        const result = this.api.productVariantImageAddWithHttpInfo(productVariantImageAdd, _options);
        return result.toPromise();
    }

    /**
     * Add image to product
     * product.variant.image.add
     * @param productVariantImageAdd
     */
    public productVariantImageAdd(productVariantImageAdd: ProductVariantImageAdd, _options?: Configuration): Promise<ProductVariantImageAdd200Response> {
        const result = this.api.productVariantImageAdd(productVariantImageAdd, _options);
        return result.toPromise();
    }

    /**
     * Delete  image to product
     * product.variant.image.delete
     * @param productId Defines product id where the variant image should be deleted
     * @param productVariantId Defines product\&#39;s variants specified by variant id
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productVariantImageDeleteWithHttpInfo(productId: string, productVariantId: string, id: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.productVariantImageDeleteWithHttpInfo(productId, productVariantId, id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete  image to product
     * product.variant.image.delete
     * @param productId Defines product id where the variant image should be deleted
     * @param productVariantId Defines product\&#39;s variants specified by variant id
     * @param id Entity id
     * @param [storeId] Store Id
     */
    public productVariantImageDelete(productId: string, productVariantId: string, id: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.productVariantImageDelete(productId, productVariantId, id, storeId, _options);
        return result.toPromise();
    }

    /**
     * Add some prices to the product variant.
     * product.variant.price.add
     * @param productVariantPriceAdd
     */
    public productVariantPriceAddWithHttpInfo(productVariantPriceAdd: ProductVariantPriceAdd, _options?: Configuration): Promise<HttpInfo<CartValidate200Response>> {
        const result = this.api.productVariantPriceAddWithHttpInfo(productVariantPriceAdd, _options);
        return result.toPromise();
    }

    /**
     * Add some prices to the product variant.
     * product.variant.price.add
     * @param productVariantPriceAdd
     */
    public productVariantPriceAdd(productVariantPriceAdd: ProductVariantPriceAdd, _options?: Configuration): Promise<CartValidate200Response> {
        const result = this.api.productVariantPriceAdd(productVariantPriceAdd, _options);
        return result.toPromise();
    }

    /**
     * Delete some prices of the product variant.
     * product.variant.price.delete
     * @param id Defines the variant where the price has to be deleted
     * @param productId Product id
     * @param groupPrices Defines variants\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productVariantPriceDeleteWithHttpInfo(id: string, productId: string, groupPrices: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.productVariantPriceDeleteWithHttpInfo(id, productId, groupPrices, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete some prices of the product variant.
     * product.variant.price.delete
     * @param id Defines the variant where the price has to be deleted
     * @param productId Product id
     * @param groupPrices Defines variants\&#39;s group prices
     * @param [storeId] Store Id
     */
    public productVariantPriceDelete(id: string, productId: string, groupPrices: string, storeId?: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.productVariantPriceDelete(id, productId, groupPrices, storeId, _options);
        return result.toPromise();
    }

    /**
     * Update some prices of the product variant.
     * product.variant.price.update
     * @param productVariantPriceUpdate
     */
    public productVariantPriceUpdateWithHttpInfo(productVariantPriceUpdate: ProductVariantPriceUpdate, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.productVariantPriceUpdateWithHttpInfo(productVariantPriceUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update some prices of the product variant.
     * product.variant.price.update
     * @param productVariantPriceUpdate
     */
    public productVariantPriceUpdate(productVariantPriceUpdate: ProductVariantPriceUpdate, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.productVariantPriceUpdate(productVariantPriceUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update variant.
     * product.variant.update
     * @param productVariantUpdate
     */
    public productVariantUpdateWithHttpInfo(productVariantUpdate: ProductVariantUpdate, _options?: Configuration): Promise<HttpInfo<AccountConfigUpdate200Response>> {
        const result = this.api.productVariantUpdateWithHttpInfo(productVariantUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update variant.
     * product.variant.update
     * @param productVariantUpdate
     */
    public productVariantUpdate(productVariantUpdate: ProductVariantUpdate, _options?: Configuration): Promise<AccountConfigUpdate200Response> {
        const result = this.api.productVariantUpdate(productVariantUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update products variants on the store.
     * product.variant.update.batch
     * @param productVariantUpdateBatch
     */
    public productVariantUpdateBatchWithHttpInfo(productVariantUpdateBatch: ProductVariantUpdateBatch, _options?: Configuration): Promise<HttpInfo<CategoryAddBatch200Response>> {
        const result = this.api.productVariantUpdateBatchWithHttpInfo(productVariantUpdateBatch, _options);
        return result.toPromise();
    }

    /**
     * Update products variants on the store.
     * product.variant.update.batch
     * @param productVariantUpdateBatch
     */
    public productVariantUpdateBatch(productVariantUpdateBatch: ProductVariantUpdateBatch, _options?: Configuration): Promise<CategoryAddBatch200Response> {
        const result = this.api.productVariantUpdateBatch(productVariantUpdateBatch, _options);
        return result.toPromise();
    }


}



import { ObservableReturnApi } from './ObservableAPI';

import { ReturnApiRequestFactory, ReturnApiResponseProcessor} from "../apis/ReturnApi";
export class PromiseReturnApi {
    private api: ObservableReturnApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReturnApiRequestFactory,
        responseProcessor?: ReturnApiResponseProcessor
    ) {
        this.api = new ObservableReturnApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve list of return actions
     * return.action.list
     */
    public returnActionListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ReturnActionList200Response>> {
        const result = this.api.returnActionListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieve list of return actions
     * return.action.list
     */
    public returnActionList(_options?: Configuration): Promise<ReturnActionList200Response> {
        const result = this.api.returnActionList(_options);
        return result.toPromise();
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
    public returnCountWithHttpInfo(orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<HttpInfo<ReturnCount200Response>> {
        const result = this.api.returnCountWithHttpInfo(orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, reportRequestId, disableReportCache, _options);
        return result.toPromise();
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
    public returnCount(orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<ReturnCount200Response> {
        const result = this.api.returnCount(orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, reportRequestId, disableReportCache, _options);
        return result.toPromise();
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
    public returnInfoWithHttpInfo(id: string, orderId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ReturnInfo200Response>> {
        const result = this.api.returnInfoWithHttpInfo(id, orderId, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public returnInfo(id: string, orderId?: string, storeId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ReturnInfo200Response> {
        const result = this.api.returnInfo(id, orderId, storeId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public returnListWithHttpInfo(start?: number, count?: number, pageCursor?: string, orderId?: string, orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<HttpInfo<ModelResponseReturnList>> {
        const result = this.api.returnListWithHttpInfo(start, count, pageCursor, orderId, orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, reportRequestId, disableReportCache, _options);
        return result.toPromise();
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
    public returnList(start?: number, count?: number, pageCursor?: string, orderId?: string, orderIds?: string, customerId?: string, storeId?: string, status?: string, returnType?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, reportRequestId?: string, disableReportCache?: boolean, _options?: Configuration): Promise<ModelResponseReturnList> {
        const result = this.api.returnList(start, count, pageCursor, orderId, orderIds, customerId, storeId, status, returnType, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, reportRequestId, disableReportCache, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of return reasons
     * return.reason.list
     * @param [storeId] Store Id
     */
    public returnReasonListWithHttpInfo(storeId?: string, _options?: Configuration): Promise<HttpInfo<ReturnReasonList200Response>> {
        const result = this.api.returnReasonListWithHttpInfo(storeId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of return reasons
     * return.reason.list
     * @param [storeId] Store Id
     */
    public returnReasonList(storeId?: string, _options?: Configuration): Promise<ReturnReasonList200Response> {
        const result = this.api.returnReasonList(storeId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve list of statuses
     * return.status.list
     */
    public returnStatusListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ReturnStatusList200Response>> {
        const result = this.api.returnStatusListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieve list of statuses
     * return.status.list
     */
    public returnStatusList(_options?: Configuration): Promise<ReturnStatusList200Response> {
        const result = this.api.returnStatusList(_options);
        return result.toPromise();
    }


}



import { ObservableSubscriberApi } from './ObservableAPI';

import { SubscriberApiRequestFactory, SubscriberApiResponseProcessor} from "../apis/SubscriberApi";
export class PromiseSubscriberApi {
    private api: ObservableSubscriberApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriberApiRequestFactory,
        responseProcessor?: SubscriberApiResponseProcessor
    ) {
        this.api = new ObservableSubscriberApi(configuration, requestFactory, responseProcessor);
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
    public subscriberListWithHttpInfo(ids?: string, start?: number, count?: number, pageCursor?: string, subscribed?: boolean, storeId?: string, email?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseSubscriberList>> {
        const result = this.api.subscriberListWithHttpInfo(ids, start, count, pageCursor, subscribed, storeId, email, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public subscriberList(ids?: string, start?: number, count?: number, pageCursor?: string, subscribed?: boolean, storeId?: string, email?: string, createdFrom?: string, createdTo?: string, modifiedFrom?: string, modifiedTo?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseSubscriberList> {
        const result = this.api.subscriberList(ids, start, count, pageCursor, subscribed, storeId, email, createdFrom, createdTo, modifiedFrom, modifiedTo, responseFields, params, exclude, _options);
        return result.toPromise();
    }


}



import { ObservableTaxApi } from './ObservableAPI';

import { TaxApiRequestFactory, TaxApiResponseProcessor} from "../apis/TaxApi";
export class PromiseTaxApi {
    private api: ObservableTaxApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaxApiRequestFactory,
        responseProcessor?: TaxApiResponseProcessor
    ) {
        this.api = new ObservableTaxApi(configuration, requestFactory, responseProcessor);
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
    public taxClassInfoWithHttpInfo(taxClassId: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseTaxClassInfo>> {
        const result = this.api.taxClassInfoWithHttpInfo(taxClassId, storeId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public taxClassInfo(taxClassId: string, storeId?: string, langId?: string, responseFields?: string, params?: string, exclude?: string, _options?: Configuration): Promise<ModelResponseTaxClassInfo> {
        const result = this.api.taxClassInfo(taxClassId, storeId, langId, responseFields, params, exclude, _options);
        return result.toPromise();
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
    public taxClassListWithHttpInfo(count?: number, pageCursor?: string, storeId?: string, findValue?: string, findWhere?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, responseFields?: string, _options?: Configuration): Promise<HttpInfo<ModelResponseTaxClassList>> {
        const result = this.api.taxClassListWithHttpInfo(count, pageCursor, storeId, findValue, findWhere, createdTo, createdFrom, modifiedTo, modifiedFrom, responseFields, _options);
        return result.toPromise();
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
    public taxClassList(count?: number, pageCursor?: string, storeId?: string, findValue?: string, findWhere?: string, createdTo?: string, createdFrom?: string, modifiedTo?: string, modifiedFrom?: string, responseFields?: string, _options?: Configuration): Promise<ModelResponseTaxClassList> {
        const result = this.api.taxClassList(count, pageCursor, storeId, findValue, findWhere, createdTo, createdFrom, modifiedTo, modifiedFrom, responseFields, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookApi } from './ObservableAPI';

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
export class PromiseWebhookApi {
    private api: ObservableWebhookApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookApiRequestFactory,
        responseProcessor?: WebhookApiResponseProcessor
    ) {
        this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Count registered webhooks on the store.
     * webhook.count
     * @param [entity] The entity you want to filter webhooks by (e.g. order or product)
     * @param [action] The action you want to filter webhooks by (e.g. order or product)
     * @param [active] The webhook status you want to filter webhooks by
     */
    public webhookCountWithHttpInfo(entity?: string, action?: string, active?: boolean, _options?: Configuration): Promise<HttpInfo<WebhookCount200Response>> {
        const result = this.api.webhookCountWithHttpInfo(entity, action, active, _options);
        return result.toPromise();
    }

    /**
     * Count registered webhooks on the store.
     * webhook.count
     * @param [entity] The entity you want to filter webhooks by (e.g. order or product)
     * @param [action] The action you want to filter webhooks by (e.g. order or product)
     * @param [active] The webhook status you want to filter webhooks by
     */
    public webhookCount(entity?: string, action?: string, active?: boolean, _options?: Configuration): Promise<WebhookCount200Response> {
        const result = this.api.webhookCount(entity, action, active, _options);
        return result.toPromise();
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
    public webhookCreateWithHttpInfo(entity: string, action: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, storeId?: string, _options?: Configuration): Promise<HttpInfo<BasketLiveShippingServiceCreate200Response>> {
        const result = this.api.webhookCreateWithHttpInfo(entity, action, callback, label, fields, responseFields, active, langId, storeId, _options);
        return result.toPromise();
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
    public webhookCreate(entity: string, action: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, storeId?: string, _options?: Configuration): Promise<BasketLiveShippingServiceCreate200Response> {
        const result = this.api.webhookCreate(entity, action, callback, label, fields, responseFields, active, langId, storeId, _options);
        return result.toPromise();
    }

    /**
     * Delete registered webhook on the store.
     * webhook.delete
     * @param id Webhook id
     */
    public webhookDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<AttributeDelete200Response>> {
        const result = this.api.webhookDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete registered webhook on the store.
     * webhook.delete
     * @param id Webhook id
     */
    public webhookDelete(id: string, _options?: Configuration): Promise<AttributeDelete200Response> {
        const result = this.api.webhookDelete(id, _options);
        return result.toPromise();
    }

    /**
     * List all Webhooks that are available on this store.
     * webhook.events
     */
    public webhookEventsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<WebhookEvents200Response>> {
        const result = this.api.webhookEventsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List all Webhooks that are available on this store.
     * webhook.events
     */
    public webhookEvents(_options?: Configuration): Promise<WebhookEvents200Response> {
        const result = this.api.webhookEvents(_options);
        return result.toPromise();
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
    public webhookListWithHttpInfo(start?: number, count?: number, entity?: string, action?: string, active?: boolean, ids?: string, params?: string, _options?: Configuration): Promise<HttpInfo<WebhookList200Response>> {
        const result = this.api.webhookListWithHttpInfo(start, count, entity, action, active, ids, params, _options);
        return result.toPromise();
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
    public webhookList(start?: number, count?: number, entity?: string, action?: string, active?: boolean, ids?: string, params?: string, _options?: Configuration): Promise<WebhookList200Response> {
        const result = this.api.webhookList(start, count, entity, action, active, ids, params, _options);
        return result.toPromise();
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
    public webhookUpdateWithHttpInfo(id: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, _options?: Configuration): Promise<HttpInfo<ProductImageUpdate200Response>> {
        const result = this.api.webhookUpdateWithHttpInfo(id, callback, label, fields, responseFields, active, langId, _options);
        return result.toPromise();
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
    public webhookUpdate(id: string, callback?: string, label?: string, fields?: string, responseFields?: string, active?: boolean, langId?: string, _options?: Configuration): Promise<ProductImageUpdate200Response> {
        const result = this.api.webhookUpdate(id, callback, label, fields, responseFields, active, langId, _options);
        return result.toPromise();
    }


}



