// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountCartAdd } from '../models/AccountCartAdd';
import { AccountCartAdd200Response } from '../models/AccountCartAdd200Response';
import { AccountCartList200Response } from '../models/AccountCartList200Response';
import { AccountConfigUpdate200Response } from '../models/AccountConfigUpdate200Response';
import { AccountFailedWebhooks200Response } from '../models/AccountFailedWebhooks200Response';
import { AccountSupportedPlatforms200Response } from '../models/AccountSupportedPlatforms200Response';

/**
 * no description
 */
export class AccountApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.
     * account.cart.add
     * @param accountCartAdd 
     */
    public async accountCartAdd(accountCartAdd: AccountCartAdd, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountCartAdd' is not null or undefined
        if (accountCartAdd === null || accountCartAdd === undefined) {
            throw new RequiredError("AccountApi", "accountCartAdd", "accountCartAdd");
        }


        // Path Params
        const localVarPath = '/account.cart.add.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(accountCartAdd, "AccountCartAdd", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This method lets you get a list of online stores connected to your API2Cart account. You can get the number of API requests to each store if you specify a period using parameters (request_from_date, request_to_date). The total_calls field is displayed only if there are parameters (request_from_date, request_to_date).
     * account.cart.list
     * @param storeUrl A web address of a store
     * @param storeKey Find store by store key
     * @param requestFromDate Retrieve entities from their creation date
     * @param requestToDate Retrieve entities to their creation date
     * @param params Set this parameter in order to choose which entity fields you want to retrieve
     * @param exclude Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all
     */
    public async accountCartList(storeUrl?: string, storeKey?: string, requestFromDate?: string, requestToDate?: string, params?: string, exclude?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/account.cart.list.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (storeUrl !== undefined) {
            requestContext.setQueryParam("store_url", ObjectSerializer.serialize(storeUrl, "string", ""));
        }

        // Query Params
        if (storeKey !== undefined) {
            requestContext.setQueryParam("store_key", ObjectSerializer.serialize(storeKey, "string", ""));
        }

        // Query Params
        if (requestFromDate !== undefined) {
            requestContext.setQueryParam("request_from_date", ObjectSerializer.serialize(requestFromDate, "string", ""));
        }

        // Query Params
        if (requestToDate !== undefined) {
            requestContext.setQueryParam("request_to_date", ObjectSerializer.serialize(requestToDate, "string", ""));
        }

        // Query Params
        if (params !== undefined) {
            requestContext.setQueryParam("params", ObjectSerializer.serialize(params, "string", ""));
        }

        // Query Params
        if (exclude !== undefined) {
            requestContext.setQueryParam("exclude", ObjectSerializer.serialize(exclude, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this method to automate the change of credentials used to connect online stores. The list of supported parameters differs depending on the platform.
     * account.config.update
     * @param replaceParameters Identifies if there is a necessity to replace parameters
     * @param newStoreUrl The web address of the store you want to update to connect to API2Cart
     * @param newStoreKey Update store key
     * @param bridgeUrl This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
     * @param storeRoot Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter)
     * @param dbTablesPrefix DB tables prefix
     * @param userAgent This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store\&#39;s firewall may block specific values.
     * @param _3dcartPrivateKey 3DCart Private Key
     * @param _3dcartAccessToken 3DCart Token
     * @param _3dcartapiApiKey 3DCart API Key
     * @param amazonSpClientId Amazon SP API app client id
     * @param amazonSpClientSecret Amazon SP API app client secret
     * @param amazonSpRefreshToken Amazon SP API OAuth refresh token
     * @param amazonSpAwsRegion Amazon AWS Region
     * @param amazonSpApiEnvironment Amazon SP API environment
     * @param amazonSellerId Amazon Seller ID (Merchant token)
     * @param aspdotnetstorefrontApiUser It\&#39;s a AspDotNetStorefront account for which API is available
     * @param aspdotnetstorefrontApiPass AspDotNetStorefront API Password
     * @param americommerceAppId Americommerce App ID
     * @param americommerceAppSecret Americommerce App Secret
     * @param americommerceAccessToken Americommerce Access Token
     * @param americommerceRefreshToken Americommerce Refresh Token
     * @param bigcommerceapiAdminAccount It\&#39;s a BigCommerce account for which API is enabled
     * @param bigcommerceapiApiPath BigCommerce API URL
     * @param bigcommerceapiApiKey Bigcommerce API Key
     * @param bigcommerceapiClientId Client ID of the requesting app
     * @param bigcommerceapiAccessToken Access token authorizing the app to access resources on behalf of a user
     * @param bigcommerceapiContext API Path section unique to the store
     * @param bolApiKey Bol API Key
     * @param bolApiSecret Bol API Secret
     * @param bolRetailerId Bol Retailer ID
     * @param demandwareClientId Demandware client id
     * @param demandwareApiPassword Demandware api password
     * @param demandwareUserName Demandware user name
     * @param demandwareUserPassword Demandware user password
     * @param ebayClientId Application ID (AppID).
     * @param ebayClientSecret Shared Secret from eBay application
     * @param ebayRuname The RuName value that eBay assigns to your application.
     * @param ebayAccessToken Used to authenticate API requests.
     * @param ebayRefreshToken Used to renew the access token.
     * @param ebayEnvironment eBay environment
     * @param ebaySiteId eBay global ID
     * @param ecwidAcessToken Access token authorizing the app to access resources on behalf of a user
     * @param ecwidStoreId Store Id
     * @param lazadaAppId Lazada App ID
     * @param lazadaAppSecret Lazada App Secret
     * @param lazadaRefreshToken Lazada Refresh Token
     * @param lazadaRegion Lazada API endpoint Region
     * @param etsyKeystring Etsy keystring
     * @param etsySharedSecret Etsy shared secret
     * @param etsyAccessToken Access token authorizing the app to access resources on behalf of a user
     * @param etsyTokenSecret Secret token authorizing the app to access resources on behalf of a user
     * @param etsyClientId Etsy Client Id
     * @param etsyRefreshToken Etsy Refresh token
     * @param facebookAppId Facebook App ID
     * @param facebookAppSecret Facebook App Secret
     * @param facebookAccessToken Facebook Access Token
     * @param facebookBusinessId Facebook Business ID
     * @param netoApiKey Neto API Key
     * @param netoApiUsername Neto User Name
     * @param shoplineAccessToken Shopline APP Key
     * @param shoplineAppKey Shopline APP Key
     * @param shoplineAppSecret Shopline App Secret
     * @param shoplineSharedSecret Shopline Shared Secret
     * @param shopifyAccessToken Access token authorizing the app to access resources on behalf of a user
     * @param shopifyClientId Shopify Client ID
     * @param shopifyApiKey Shopify API Key
     * @param shopifyApiPassword Shopify API Password
     * @param shopifySharedSecret Shared secret
     * @param shopeePartnerId Shopee Partner ID
     * @param shopeePartnerKey Shopee Partner Key
     * @param shopeeShopId Shopee SHOP ID
     * @param shopeeRefreshToken Shopee Refresh Token
     * @param shopeeRegion Shopee API endpoint Region. Use for Chinese Mainland or Brazil.
     * @param shopeeEnvironment Shopee Environment
     * @param shoplazzaAccessToken Access token authorizing the app to access resources on behalf of a user
     * @param shoplazzaSharedSecret Shared secret
     * @param mivaAccessToken Miva access token
     * @param mivaSignature Miva signature
     * @param shopwareAccessKey Shopware access key
     * @param unasApiKey UNAS API Key
     * @param shopwareApiKey Shopware api key
     * @param shopwareApiSecret Shopware client secret access key
     * @param bigcartelUserName Subdomain of store
     * @param bigcartelPassword BigCartel account password
     * @param bricklinkConsumerKey Bricklink Consumer Key
     * @param bricklinkConsumerSecret Bricklink Consumer Secret
     * @param bricklinkToken Bricklink Access Token
     * @param bricklinkTokenSecret Bricklink Access Token Secret
     * @param volusionLogin It\&#39;s a Volusion account for which API is enabled
     * @param volusionPassword Volusion API Password
     * @param walmartClientId Walmart client ID. For the region \&#39;ca\&#39; use Consumer ID
     * @param walmartClientSecret Walmart client secret. For the region \&#39;ca\&#39; use Private Key
     * @param walmartEnvironment Walmart environment
     * @param walmartChannelType Walmart WM_CONSUMER.CHANNEL.TYPE header
     * @param walmartRegion Walmart region
     * @param squareClientId Square (Weebly) Client ID
     * @param squareClientSecret Square (Weebly) Client Secret
     * @param squareRefreshToken Square (Weebly) Refresh Token
     * @param squarespaceApiKey Squarespace API Key
     * @param squarespaceClientId Squarespace Connector Client ID
     * @param squarespaceClientSecret Squarespace Connector Client Secret
     * @param squarespaceAccessToken Squarespace access token
     * @param squarespaceRefreshToken Squarespace refresh token
     * @param hybrisClientId Omni Commerce Connector Client ID
     * @param hybrisClientSecret Omni Commerce Connector Client Secret
     * @param hybrisUsername User Name
     * @param hybrisPassword User password
     * @param hybrisWebsites Websites to stores mapping data
     * @param lightspeedApiKey LightSpeed api key
     * @param lightspeedApiSecret LightSpeed api secret
     * @param commercehqApiKey CommerceHQ api key
     * @param commercehqApiPassword CommerceHQ api password
     * @param wcConsumerKey Woocommerce consumer key
     * @param wcConsumerSecret Woocommerce consumer secret
     * @param magentoConsumerKey Magento Consumer Key
     * @param magentoConsumerSecret Magento Consumer Secret
     * @param magentoAccessToken Magento Access Token
     * @param magentoTokenSecret Magento Token Secret
     * @param prestashopWebserviceKey Prestashop webservice key
     * @param wixAppId Wix App ID
     * @param wixAppSecretKey Wix App Secret Key
     * @param wixInstanceId Wix Instance ID
     * @param wixRefreshToken Wix refresh token
     * @param mercadoLibreAppId Mercado Libre App ID
     * @param mercadoLibreAppSecretKey Mercado Libre App Secret Key
     * @param mercadoLibreRefreshToken Mercado Libre Refresh Token
     * @param zidClientId Zid Client ID
     * @param zidClientSecret Zid Client Secret
     * @param zidAccessToken Zid Access Token
     * @param zidAuthorization Zid Authorization
     * @param zidRefreshToken Zid refresh token
     * @param flipkartClientId Flipkart Client ID
     * @param flipkartClientSecret Flipkart Client Secret
     * @param allegroClientId Allegro Client ID
     * @param allegroClientSecret Allegro Client Secret
     * @param allegroAccessToken Allegro Access Token
     * @param allegroRefreshToken Allegro Refresh Token
     * @param allegroEnvironment Allegro Environment
     * @param zohoClientId Zoho Client ID
     * @param zohoClientSecret Zoho Client Secret
     * @param zohoRefreshToken Zoho Refresh Token
     * @param zohoRegion Zoho API endpoint Region
     * @param tiendanubeUserId Tiendanube User ID
     * @param tiendanubeAccessToken Tiendanube Access Token
     * @param tiendanubeClientSecret Tiendanube Client Secret
     * @param ottoClientId Otto Client ID
     * @param ottoClientSecret Otto Client Secret
     * @param ottoAppId Otto App ID
     * @param ottoRefreshToken Otto Refresh Token
     * @param ottoEnvironment Otto Environment
     * @param ottoAccessToken Otto Access Token
     * @param tiktokshopAppKey TikTok Shop App Key
     * @param tiktokshopAppSecret TikTok Shop App Secret
     * @param tiktokshopRefreshToken TikTok Shop Refresh Token
     * @param tiktokshopAccessToken TikTok Shop Access Token
     * @param sallaClientId Salla Client ID
     * @param sallaClientSecret Salla Client Secret
     * @param sallaRefreshToken Salla Refresh Token
     * @param sallaAccessToken Salla Access Token
     * @param temuAppKey Temu App Key
     * @param temuAppSecret Temu App Secret
     * @param temuAccessToken Temu Access Token
     * @param temuRegion Temu API endpoint Region.
     * @param scapiClientId Salesforce Commerce API Client ID
     * @param scapiClientSecret Salesforce Commerce API Client Secret
     * @param scapiOrganizationId Salesforce Commerce Organization ID
     * @param scapiShortCode Salesforce Commerce Short Code
     * @param scapiScopes Salesforce Commerce API Scopes
     * @param idempotencyKey A unique identifier associated with a specific request. Repeated requests with the same &lt;strong&gt;idempotency_key&lt;/strong&gt; return a cached response without re-executing the business logic. &lt;strong&gt;Please note that the cache lifetime is 15 minutes.&lt;/strong&gt;
     */
    public async accountConfigUpdate(replaceParameters?: boolean, newStoreUrl?: string, newStoreKey?: string, bridgeUrl?: string, storeRoot?: string, dbTablesPrefix?: string, userAgent?: string, _3dcartPrivateKey?: string, _3dcartAccessToken?: string, _3dcartapiApiKey?: string, amazonSpClientId?: string, amazonSpClientSecret?: string, amazonSpRefreshToken?: string, amazonSpAwsRegion?: string, amazonSpApiEnvironment?: string, amazonSellerId?: string, aspdotnetstorefrontApiUser?: string, aspdotnetstorefrontApiPass?: string, americommerceAppId?: string, americommerceAppSecret?: string, americommerceAccessToken?: string, americommerceRefreshToken?: string, bigcommerceapiAdminAccount?: string, bigcommerceapiApiPath?: string, bigcommerceapiApiKey?: string, bigcommerceapiClientId?: string, bigcommerceapiAccessToken?: string, bigcommerceapiContext?: string, bolApiKey?: string, bolApiSecret?: string, bolRetailerId?: number, demandwareClientId?: string, demandwareApiPassword?: string, demandwareUserName?: string, demandwareUserPassword?: string, ebayClientId?: string, ebayClientSecret?: string, ebayRuname?: string, ebayAccessToken?: string, ebayRefreshToken?: string, ebayEnvironment?: string, ebaySiteId?: number, ecwidAcessToken?: string, ecwidStoreId?: string, lazadaAppId?: string, lazadaAppSecret?: string, lazadaRefreshToken?: string, lazadaRegion?: string, etsyKeystring?: string, etsySharedSecret?: string, etsyAccessToken?: string, etsyTokenSecret?: string, etsyClientId?: string, etsyRefreshToken?: string, facebookAppId?: string, facebookAppSecret?: string, facebookAccessToken?: string, facebookBusinessId?: string, netoApiKey?: string, netoApiUsername?: string, shoplineAccessToken?: string, shoplineAppKey?: string, shoplineAppSecret?: string, shoplineSharedSecret?: string, shopifyAccessToken?: string, shopifyClientId?: string, shopifyApiKey?: string, shopifyApiPassword?: string, shopifySharedSecret?: string, shopeePartnerId?: string, shopeePartnerKey?: string, shopeeShopId?: string, shopeeRefreshToken?: string, shopeeRegion?: string, shopeeEnvironment?: string, shoplazzaAccessToken?: string, shoplazzaSharedSecret?: string, mivaAccessToken?: string, mivaSignature?: string, shopwareAccessKey?: string, unasApiKey?: string, shopwareApiKey?: string, shopwareApiSecret?: string, bigcartelUserName?: string, bigcartelPassword?: string, bricklinkConsumerKey?: string, bricklinkConsumerSecret?: string, bricklinkToken?: string, bricklinkTokenSecret?: string, volusionLogin?: string, volusionPassword?: string, walmartClientId?: string, walmartClientSecret?: string, walmartEnvironment?: string, walmartChannelType?: string, walmartRegion?: string, squareClientId?: string, squareClientSecret?: string, squareRefreshToken?: string, squarespaceApiKey?: string, squarespaceClientId?: string, squarespaceClientSecret?: string, squarespaceAccessToken?: string, squarespaceRefreshToken?: string, hybrisClientId?: string, hybrisClientSecret?: string, hybrisUsername?: string, hybrisPassword?: string, hybrisWebsites?: Array<string>, lightspeedApiKey?: string, lightspeedApiSecret?: string, commercehqApiKey?: string, commercehqApiPassword?: string, wcConsumerKey?: string, wcConsumerSecret?: string, magentoConsumerKey?: string, magentoConsumerSecret?: string, magentoAccessToken?: string, magentoTokenSecret?: string, prestashopWebserviceKey?: string, wixAppId?: string, wixAppSecretKey?: string, wixInstanceId?: string, wixRefreshToken?: string, mercadoLibreAppId?: string, mercadoLibreAppSecretKey?: string, mercadoLibreRefreshToken?: string, zidClientId?: number, zidClientSecret?: string, zidAccessToken?: string, zidAuthorization?: string, zidRefreshToken?: string, flipkartClientId?: string, flipkartClientSecret?: string, allegroClientId?: string, allegroClientSecret?: string, allegroAccessToken?: string, allegroRefreshToken?: string, allegroEnvironment?: string, zohoClientId?: string, zohoClientSecret?: string, zohoRefreshToken?: string, zohoRegion?: string, tiendanubeUserId?: number, tiendanubeAccessToken?: string, tiendanubeClientSecret?: string, ottoClientId?: string, ottoClientSecret?: string, ottoAppId?: string, ottoRefreshToken?: string, ottoEnvironment?: string, ottoAccessToken?: string, tiktokshopAppKey?: string, tiktokshopAppSecret?: string, tiktokshopRefreshToken?: string, tiktokshopAccessToken?: string, sallaClientId?: string, sallaClientSecret?: string, sallaRefreshToken?: string, sallaAccessToken?: string, temuAppKey?: string, temuAppSecret?: string, temuAccessToken?: string, temuRegion?: string, scapiClientId?: string, scapiClientSecret?: string, scapiOrganizationId?: string, scapiShortCode?: string, scapiScopes?: string, idempotencyKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











































































































































































        // Path Params
        const localVarPath = '/account.config.update.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (replaceParameters !== undefined) {
            requestContext.setQueryParam("replace_parameters", ObjectSerializer.serialize(replaceParameters, "boolean", ""));
        }

        // Query Params
        if (newStoreUrl !== undefined) {
            requestContext.setQueryParam("new_store_url", ObjectSerializer.serialize(newStoreUrl, "string", ""));
        }

        // Query Params
        if (newStoreKey !== undefined) {
            requestContext.setQueryParam("new_store_key", ObjectSerializer.serialize(newStoreKey, "string", ""));
        }

        // Query Params
        if (bridgeUrl !== undefined) {
            requestContext.setQueryParam("bridge_url", ObjectSerializer.serialize(bridgeUrl, "string", ""));
        }

        // Query Params
        if (storeRoot !== undefined) {
            requestContext.setQueryParam("store_root", ObjectSerializer.serialize(storeRoot, "string", ""));
        }

        // Query Params
        if (dbTablesPrefix !== undefined) {
            requestContext.setQueryParam("db_tables_prefix", ObjectSerializer.serialize(dbTablesPrefix, "string", ""));
        }

        // Query Params
        if (userAgent !== undefined) {
            requestContext.setQueryParam("user_agent", ObjectSerializer.serialize(userAgent, "string", ""));
        }

        // Query Params
        if (_3dcartPrivateKey !== undefined) {
            requestContext.setQueryParam("3dcart_private_key", ObjectSerializer.serialize(_3dcartPrivateKey, "string", ""));
        }

        // Query Params
        if (_3dcartAccessToken !== undefined) {
            requestContext.setQueryParam("3dcart_access_token", ObjectSerializer.serialize(_3dcartAccessToken, "string", ""));
        }

        // Query Params
        if (_3dcartapiApiKey !== undefined) {
            requestContext.setQueryParam("3dcartapi_api_key", ObjectSerializer.serialize(_3dcartapiApiKey, "string", ""));
        }

        // Query Params
        if (amazonSpClientId !== undefined) {
            requestContext.setQueryParam("amazon_sp_client_id", ObjectSerializer.serialize(amazonSpClientId, "string", ""));
        }

        // Query Params
        if (amazonSpClientSecret !== undefined) {
            requestContext.setQueryParam("amazon_sp_client_secret", ObjectSerializer.serialize(amazonSpClientSecret, "string", ""));
        }

        // Query Params
        if (amazonSpRefreshToken !== undefined) {
            requestContext.setQueryParam("amazon_sp_refresh_token", ObjectSerializer.serialize(amazonSpRefreshToken, "string", ""));
        }

        // Query Params
        if (amazonSpAwsRegion !== undefined) {
            requestContext.setQueryParam("amazon_sp_aws_region", ObjectSerializer.serialize(amazonSpAwsRegion, "string", ""));
        }

        // Query Params
        if (amazonSpApiEnvironment !== undefined) {
            requestContext.setQueryParam("amazon_sp_api_environment", ObjectSerializer.serialize(amazonSpApiEnvironment, "string", ""));
        }

        // Query Params
        if (amazonSellerId !== undefined) {
            requestContext.setQueryParam("amazon_seller_id", ObjectSerializer.serialize(amazonSellerId, "string", ""));
        }

        // Query Params
        if (aspdotnetstorefrontApiUser !== undefined) {
            requestContext.setQueryParam("aspdotnetstorefront_api_user", ObjectSerializer.serialize(aspdotnetstorefrontApiUser, "string", ""));
        }

        // Query Params
        if (aspdotnetstorefrontApiPass !== undefined) {
            requestContext.setQueryParam("aspdotnetstorefront_api_pass", ObjectSerializer.serialize(aspdotnetstorefrontApiPass, "string", ""));
        }

        // Query Params
        if (americommerceAppId !== undefined) {
            requestContext.setQueryParam("americommerce_app_id", ObjectSerializer.serialize(americommerceAppId, "string", ""));
        }

        // Query Params
        if (americommerceAppSecret !== undefined) {
            requestContext.setQueryParam("americommerce_app_secret", ObjectSerializer.serialize(americommerceAppSecret, "string", ""));
        }

        // Query Params
        if (americommerceAccessToken !== undefined) {
            requestContext.setQueryParam("americommerce_access_token", ObjectSerializer.serialize(americommerceAccessToken, "string", ""));
        }

        // Query Params
        if (americommerceRefreshToken !== undefined) {
            requestContext.setQueryParam("americommerce_refresh_token", ObjectSerializer.serialize(americommerceRefreshToken, "string", ""));
        }

        // Query Params
        if (bigcommerceapiAdminAccount !== undefined) {
            requestContext.setQueryParam("bigcommerceapi_admin_account", ObjectSerializer.serialize(bigcommerceapiAdminAccount, "string", ""));
        }

        // Query Params
        if (bigcommerceapiApiPath !== undefined) {
            requestContext.setQueryParam("bigcommerceapi_api_path", ObjectSerializer.serialize(bigcommerceapiApiPath, "string", ""));
        }

        // Query Params
        if (bigcommerceapiApiKey !== undefined) {
            requestContext.setQueryParam("bigcommerceapi_api_key", ObjectSerializer.serialize(bigcommerceapiApiKey, "string", ""));
        }

        // Query Params
        if (bigcommerceapiClientId !== undefined) {
            requestContext.setQueryParam("bigcommerceapi_client_id", ObjectSerializer.serialize(bigcommerceapiClientId, "string", ""));
        }

        // Query Params
        if (bigcommerceapiAccessToken !== undefined) {
            requestContext.setQueryParam("bigcommerceapi_access_token", ObjectSerializer.serialize(bigcommerceapiAccessToken, "string", ""));
        }

        // Query Params
        if (bigcommerceapiContext !== undefined) {
            requestContext.setQueryParam("bigcommerceapi_context", ObjectSerializer.serialize(bigcommerceapiContext, "string", ""));
        }

        // Query Params
        if (bolApiKey !== undefined) {
            requestContext.setQueryParam("bol_api_key", ObjectSerializer.serialize(bolApiKey, "string", ""));
        }

        // Query Params
        if (bolApiSecret !== undefined) {
            requestContext.setQueryParam("bol_api_secret", ObjectSerializer.serialize(bolApiSecret, "string", ""));
        }

        // Query Params
        if (bolRetailerId !== undefined) {
            requestContext.setQueryParam("bol_retailer_id", ObjectSerializer.serialize(bolRetailerId, "number", ""));
        }

        // Query Params
        if (demandwareClientId !== undefined) {
            requestContext.setQueryParam("demandware_client_id", ObjectSerializer.serialize(demandwareClientId, "string", ""));
        }

        // Query Params
        if (demandwareApiPassword !== undefined) {
            requestContext.setQueryParam("demandware_api_password", ObjectSerializer.serialize(demandwareApiPassword, "string", ""));
        }

        // Query Params
        if (demandwareUserName !== undefined) {
            requestContext.setQueryParam("demandware_user_name", ObjectSerializer.serialize(demandwareUserName, "string", ""));
        }

        // Query Params
        if (demandwareUserPassword !== undefined) {
            requestContext.setQueryParam("demandware_user_password", ObjectSerializer.serialize(demandwareUserPassword, "string", ""));
        }

        // Query Params
        if (ebayClientId !== undefined) {
            requestContext.setQueryParam("ebay_client_id", ObjectSerializer.serialize(ebayClientId, "string", ""));
        }

        // Query Params
        if (ebayClientSecret !== undefined) {
            requestContext.setQueryParam("ebay_client_secret", ObjectSerializer.serialize(ebayClientSecret, "string", ""));
        }

        // Query Params
        if (ebayRuname !== undefined) {
            requestContext.setQueryParam("ebay_runame", ObjectSerializer.serialize(ebayRuname, "string", ""));
        }

        // Query Params
        if (ebayAccessToken !== undefined) {
            requestContext.setQueryParam("ebay_access_token", ObjectSerializer.serialize(ebayAccessToken, "string", ""));
        }

        // Query Params
        if (ebayRefreshToken !== undefined) {
            requestContext.setQueryParam("ebay_refresh_token", ObjectSerializer.serialize(ebayRefreshToken, "string", ""));
        }

        // Query Params
        if (ebayEnvironment !== undefined) {
            requestContext.setQueryParam("ebay_environment", ObjectSerializer.serialize(ebayEnvironment, "string", ""));
        }

        // Query Params
        if (ebaySiteId !== undefined) {
            requestContext.setQueryParam("ebay_site_id", ObjectSerializer.serialize(ebaySiteId, "number", ""));
        }

        // Query Params
        if (ecwidAcessToken !== undefined) {
            requestContext.setQueryParam("ecwid_acess_token", ObjectSerializer.serialize(ecwidAcessToken, "string", ""));
        }

        // Query Params
        if (ecwidStoreId !== undefined) {
            requestContext.setQueryParam("ecwid_store_id", ObjectSerializer.serialize(ecwidStoreId, "string", ""));
        }

        // Query Params
        if (lazadaAppId !== undefined) {
            requestContext.setQueryParam("lazada_app_id", ObjectSerializer.serialize(lazadaAppId, "string", ""));
        }

        // Query Params
        if (lazadaAppSecret !== undefined) {
            requestContext.setQueryParam("lazada_app_secret", ObjectSerializer.serialize(lazadaAppSecret, "string", ""));
        }

        // Query Params
        if (lazadaRefreshToken !== undefined) {
            requestContext.setQueryParam("lazada_refresh_token", ObjectSerializer.serialize(lazadaRefreshToken, "string", ""));
        }

        // Query Params
        if (lazadaRegion !== undefined) {
            requestContext.setQueryParam("lazada_region", ObjectSerializer.serialize(lazadaRegion, "string", ""));
        }

        // Query Params
        if (etsyKeystring !== undefined) {
            requestContext.setQueryParam("etsy_keystring", ObjectSerializer.serialize(etsyKeystring, "string", ""));
        }

        // Query Params
        if (etsySharedSecret !== undefined) {
            requestContext.setQueryParam("etsy_shared_secret", ObjectSerializer.serialize(etsySharedSecret, "string", ""));
        }

        // Query Params
        if (etsyAccessToken !== undefined) {
            requestContext.setQueryParam("etsy_access_token", ObjectSerializer.serialize(etsyAccessToken, "string", ""));
        }

        // Query Params
        if (etsyTokenSecret !== undefined) {
            requestContext.setQueryParam("etsy_token_secret", ObjectSerializer.serialize(etsyTokenSecret, "string", ""));
        }

        // Query Params
        if (etsyClientId !== undefined) {
            requestContext.setQueryParam("etsy_client_id", ObjectSerializer.serialize(etsyClientId, "string", ""));
        }

        // Query Params
        if (etsyRefreshToken !== undefined) {
            requestContext.setQueryParam("etsy_refresh_token", ObjectSerializer.serialize(etsyRefreshToken, "string", ""));
        }

        // Query Params
        if (facebookAppId !== undefined) {
            requestContext.setQueryParam("facebook_app_id", ObjectSerializer.serialize(facebookAppId, "string", ""));
        }

        // Query Params
        if (facebookAppSecret !== undefined) {
            requestContext.setQueryParam("facebook_app_secret", ObjectSerializer.serialize(facebookAppSecret, "string", ""));
        }

        // Query Params
        if (facebookAccessToken !== undefined) {
            requestContext.setQueryParam("facebook_access_token", ObjectSerializer.serialize(facebookAccessToken, "string", ""));
        }

        // Query Params
        if (facebookBusinessId !== undefined) {
            requestContext.setQueryParam("facebook_business_id", ObjectSerializer.serialize(facebookBusinessId, "string", ""));
        }

        // Query Params
        if (netoApiKey !== undefined) {
            requestContext.setQueryParam("neto_api_key", ObjectSerializer.serialize(netoApiKey, "string", ""));
        }

        // Query Params
        if (netoApiUsername !== undefined) {
            requestContext.setQueryParam("neto_api_username", ObjectSerializer.serialize(netoApiUsername, "string", ""));
        }

        // Query Params
        if (shoplineAccessToken !== undefined) {
            requestContext.setQueryParam("shopline_access_token", ObjectSerializer.serialize(shoplineAccessToken, "string", ""));
        }

        // Query Params
        if (shoplineAppKey !== undefined) {
            requestContext.setQueryParam("shopline_app_key", ObjectSerializer.serialize(shoplineAppKey, "string", ""));
        }

        // Query Params
        if (shoplineAppSecret !== undefined) {
            requestContext.setQueryParam("shopline_app_secret", ObjectSerializer.serialize(shoplineAppSecret, "string", ""));
        }

        // Query Params
        if (shoplineSharedSecret !== undefined) {
            requestContext.setQueryParam("shopline_shared_secret", ObjectSerializer.serialize(shoplineSharedSecret, "string", ""));
        }

        // Query Params
        if (shopifyAccessToken !== undefined) {
            requestContext.setQueryParam("shopify_access_token", ObjectSerializer.serialize(shopifyAccessToken, "string", ""));
        }

        // Query Params
        if (shopifyClientId !== undefined) {
            requestContext.setQueryParam("shopify_client_id", ObjectSerializer.serialize(shopifyClientId, "string", ""));
        }

        // Query Params
        if (shopifyApiKey !== undefined) {
            requestContext.setQueryParam("shopify_api_key", ObjectSerializer.serialize(shopifyApiKey, "string", ""));
        }

        // Query Params
        if (shopifyApiPassword !== undefined) {
            requestContext.setQueryParam("shopify_api_password", ObjectSerializer.serialize(shopifyApiPassword, "string", ""));
        }

        // Query Params
        if (shopifySharedSecret !== undefined) {
            requestContext.setQueryParam("shopify_shared_secret", ObjectSerializer.serialize(shopifySharedSecret, "string", ""));
        }

        // Query Params
        if (shopeePartnerId !== undefined) {
            requestContext.setQueryParam("shopee_partner_id", ObjectSerializer.serialize(shopeePartnerId, "string", ""));
        }

        // Query Params
        if (shopeePartnerKey !== undefined) {
            requestContext.setQueryParam("shopee_partner_key", ObjectSerializer.serialize(shopeePartnerKey, "string", ""));
        }

        // Query Params
        if (shopeeShopId !== undefined) {
            requestContext.setQueryParam("shopee_shop_id", ObjectSerializer.serialize(shopeeShopId, "string", ""));
        }

        // Query Params
        if (shopeeRefreshToken !== undefined) {
            requestContext.setQueryParam("shopee_refresh_token", ObjectSerializer.serialize(shopeeRefreshToken, "string", ""));
        }

        // Query Params
        if (shopeeRegion !== undefined) {
            requestContext.setQueryParam("shopee_region", ObjectSerializer.serialize(shopeeRegion, "string", ""));
        }

        // Query Params
        if (shopeeEnvironment !== undefined) {
            requestContext.setQueryParam("shopee_environment", ObjectSerializer.serialize(shopeeEnvironment, "string", ""));
        }

        // Query Params
        if (shoplazzaAccessToken !== undefined) {
            requestContext.setQueryParam("shoplazza_access_token", ObjectSerializer.serialize(shoplazzaAccessToken, "string", ""));
        }

        // Query Params
        if (shoplazzaSharedSecret !== undefined) {
            requestContext.setQueryParam("shoplazza_shared_secret", ObjectSerializer.serialize(shoplazzaSharedSecret, "string", ""));
        }

        // Query Params
        if (mivaAccessToken !== undefined) {
            requestContext.setQueryParam("miva_access_token", ObjectSerializer.serialize(mivaAccessToken, "string", ""));
        }

        // Query Params
        if (mivaSignature !== undefined) {
            requestContext.setQueryParam("miva_signature", ObjectSerializer.serialize(mivaSignature, "string", ""));
        }

        // Query Params
        if (shopwareAccessKey !== undefined) {
            requestContext.setQueryParam("shopware_access_key", ObjectSerializer.serialize(shopwareAccessKey, "string", ""));
        }

        // Query Params
        if (unasApiKey !== undefined) {
            requestContext.setQueryParam("unas_api_key", ObjectSerializer.serialize(unasApiKey, "string", ""));
        }

        // Query Params
        if (shopwareApiKey !== undefined) {
            requestContext.setQueryParam("shopware_api_key", ObjectSerializer.serialize(shopwareApiKey, "string", ""));
        }

        // Query Params
        if (shopwareApiSecret !== undefined) {
            requestContext.setQueryParam("shopware_api_secret", ObjectSerializer.serialize(shopwareApiSecret, "string", ""));
        }

        // Query Params
        if (bigcartelUserName !== undefined) {
            requestContext.setQueryParam("bigcartel_user_name", ObjectSerializer.serialize(bigcartelUserName, "string", ""));
        }

        // Query Params
        if (bigcartelPassword !== undefined) {
            requestContext.setQueryParam("bigcartel_password", ObjectSerializer.serialize(bigcartelPassword, "string", ""));
        }

        // Query Params
        if (bricklinkConsumerKey !== undefined) {
            requestContext.setQueryParam("bricklink_consumer_key", ObjectSerializer.serialize(bricklinkConsumerKey, "string", ""));
        }

        // Query Params
        if (bricklinkConsumerSecret !== undefined) {
            requestContext.setQueryParam("bricklink_consumer_secret", ObjectSerializer.serialize(bricklinkConsumerSecret, "string", ""));
        }

        // Query Params
        if (bricklinkToken !== undefined) {
            requestContext.setQueryParam("bricklink_token", ObjectSerializer.serialize(bricklinkToken, "string", ""));
        }

        // Query Params
        if (bricklinkTokenSecret !== undefined) {
            requestContext.setQueryParam("bricklink_token_secret", ObjectSerializer.serialize(bricklinkTokenSecret, "string", ""));
        }

        // Query Params
        if (volusionLogin !== undefined) {
            requestContext.setQueryParam("volusion_login", ObjectSerializer.serialize(volusionLogin, "string", ""));
        }

        // Query Params
        if (volusionPassword !== undefined) {
            requestContext.setQueryParam("volusion_password", ObjectSerializer.serialize(volusionPassword, "string", ""));
        }

        // Query Params
        if (walmartClientId !== undefined) {
            requestContext.setQueryParam("walmart_client_id", ObjectSerializer.serialize(walmartClientId, "string", ""));
        }

        // Query Params
        if (walmartClientSecret !== undefined) {
            requestContext.setQueryParam("walmart_client_secret", ObjectSerializer.serialize(walmartClientSecret, "string", ""));
        }

        // Query Params
        if (walmartEnvironment !== undefined) {
            requestContext.setQueryParam("walmart_environment", ObjectSerializer.serialize(walmartEnvironment, "string", ""));
        }

        // Query Params
        if (walmartChannelType !== undefined) {
            requestContext.setQueryParam("walmart_channel_type", ObjectSerializer.serialize(walmartChannelType, "string", ""));
        }

        // Query Params
        if (walmartRegion !== undefined) {
            requestContext.setQueryParam("walmart_region", ObjectSerializer.serialize(walmartRegion, "string", ""));
        }

        // Query Params
        if (squareClientId !== undefined) {
            requestContext.setQueryParam("square_client_id", ObjectSerializer.serialize(squareClientId, "string", ""));
        }

        // Query Params
        if (squareClientSecret !== undefined) {
            requestContext.setQueryParam("square_client_secret", ObjectSerializer.serialize(squareClientSecret, "string", ""));
        }

        // Query Params
        if (squareRefreshToken !== undefined) {
            requestContext.setQueryParam("square_refresh_token", ObjectSerializer.serialize(squareRefreshToken, "string", ""));
        }

        // Query Params
        if (squarespaceApiKey !== undefined) {
            requestContext.setQueryParam("squarespace_api_key", ObjectSerializer.serialize(squarespaceApiKey, "string", ""));
        }

        // Query Params
        if (squarespaceClientId !== undefined) {
            requestContext.setQueryParam("squarespace_client_id", ObjectSerializer.serialize(squarespaceClientId, "string", ""));
        }

        // Query Params
        if (squarespaceClientSecret !== undefined) {
            requestContext.setQueryParam("squarespace_client_secret", ObjectSerializer.serialize(squarespaceClientSecret, "string", ""));
        }

        // Query Params
        if (squarespaceAccessToken !== undefined) {
            requestContext.setQueryParam("squarespace_access_token", ObjectSerializer.serialize(squarespaceAccessToken, "string", ""));
        }

        // Query Params
        if (squarespaceRefreshToken !== undefined) {
            requestContext.setQueryParam("squarespace_refresh_token", ObjectSerializer.serialize(squarespaceRefreshToken, "string", ""));
        }

        // Query Params
        if (hybrisClientId !== undefined) {
            requestContext.setQueryParam("hybris_client_id", ObjectSerializer.serialize(hybrisClientId, "string", ""));
        }

        // Query Params
        if (hybrisClientSecret !== undefined) {
            requestContext.setQueryParam("hybris_client_secret", ObjectSerializer.serialize(hybrisClientSecret, "string", ""));
        }

        // Query Params
        if (hybrisUsername !== undefined) {
            requestContext.setQueryParam("hybris_username", ObjectSerializer.serialize(hybrisUsername, "string", ""));
        }

        // Query Params
        if (hybrisPassword !== undefined) {
            requestContext.setQueryParam("hybris_password", ObjectSerializer.serialize(hybrisPassword, "string", ""));
        }

        // Query Params
        if (hybrisWebsites !== undefined) {
            const serializedParams = ObjectSerializer.serialize(hybrisWebsites, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("hybris_websites", serializedParam);
            }
        }

        // Query Params
        if (lightspeedApiKey !== undefined) {
            requestContext.setQueryParam("lightspeed_api_key", ObjectSerializer.serialize(lightspeedApiKey, "string", ""));
        }

        // Query Params
        if (lightspeedApiSecret !== undefined) {
            requestContext.setQueryParam("lightspeed_api_secret", ObjectSerializer.serialize(lightspeedApiSecret, "string", ""));
        }

        // Query Params
        if (commercehqApiKey !== undefined) {
            requestContext.setQueryParam("commercehq_api_key", ObjectSerializer.serialize(commercehqApiKey, "string", ""));
        }

        // Query Params
        if (commercehqApiPassword !== undefined) {
            requestContext.setQueryParam("commercehq_api_password", ObjectSerializer.serialize(commercehqApiPassword, "string", ""));
        }

        // Query Params
        if (wcConsumerKey !== undefined) {
            requestContext.setQueryParam("wc_consumer_key", ObjectSerializer.serialize(wcConsumerKey, "string", ""));
        }

        // Query Params
        if (wcConsumerSecret !== undefined) {
            requestContext.setQueryParam("wc_consumer_secret", ObjectSerializer.serialize(wcConsumerSecret, "string", ""));
        }

        // Query Params
        if (magentoConsumerKey !== undefined) {
            requestContext.setQueryParam("magento_consumer_key", ObjectSerializer.serialize(magentoConsumerKey, "string", ""));
        }

        // Query Params
        if (magentoConsumerSecret !== undefined) {
            requestContext.setQueryParam("magento_consumer_secret", ObjectSerializer.serialize(magentoConsumerSecret, "string", ""));
        }

        // Query Params
        if (magentoAccessToken !== undefined) {
            requestContext.setQueryParam("magento_access_token", ObjectSerializer.serialize(magentoAccessToken, "string", ""));
        }

        // Query Params
        if (magentoTokenSecret !== undefined) {
            requestContext.setQueryParam("magento_token_secret", ObjectSerializer.serialize(magentoTokenSecret, "string", ""));
        }

        // Query Params
        if (prestashopWebserviceKey !== undefined) {
            requestContext.setQueryParam("prestashop_webservice_key", ObjectSerializer.serialize(prestashopWebserviceKey, "string", ""));
        }

        // Query Params
        if (wixAppId !== undefined) {
            requestContext.setQueryParam("wix_app_id", ObjectSerializer.serialize(wixAppId, "string", ""));
        }

        // Query Params
        if (wixAppSecretKey !== undefined) {
            requestContext.setQueryParam("wix_app_secret_key", ObjectSerializer.serialize(wixAppSecretKey, "string", ""));
        }

        // Query Params
        if (wixInstanceId !== undefined) {
            requestContext.setQueryParam("wix_instance_id", ObjectSerializer.serialize(wixInstanceId, "string", ""));
        }

        // Query Params
        if (wixRefreshToken !== undefined) {
            requestContext.setQueryParam("wix_refresh_token", ObjectSerializer.serialize(wixRefreshToken, "string", ""));
        }

        // Query Params
        if (mercadoLibreAppId !== undefined) {
            requestContext.setQueryParam("mercado_libre_app_id", ObjectSerializer.serialize(mercadoLibreAppId, "string", ""));
        }

        // Query Params
        if (mercadoLibreAppSecretKey !== undefined) {
            requestContext.setQueryParam("mercado_libre_app_secret_key", ObjectSerializer.serialize(mercadoLibreAppSecretKey, "string", ""));
        }

        // Query Params
        if (mercadoLibreRefreshToken !== undefined) {
            requestContext.setQueryParam("mercado_libre_refresh_token", ObjectSerializer.serialize(mercadoLibreRefreshToken, "string", ""));
        }

        // Query Params
        if (zidClientId !== undefined) {
            requestContext.setQueryParam("zid_client_id", ObjectSerializer.serialize(zidClientId, "number", ""));
        }

        // Query Params
        if (zidClientSecret !== undefined) {
            requestContext.setQueryParam("zid_client_secret", ObjectSerializer.serialize(zidClientSecret, "string", ""));
        }

        // Query Params
        if (zidAccessToken !== undefined) {
            requestContext.setQueryParam("zid_access_token", ObjectSerializer.serialize(zidAccessToken, "string", ""));
        }

        // Query Params
        if (zidAuthorization !== undefined) {
            requestContext.setQueryParam("zid_authorization", ObjectSerializer.serialize(zidAuthorization, "string", ""));
        }

        // Query Params
        if (zidRefreshToken !== undefined) {
            requestContext.setQueryParam("zid_refresh_token", ObjectSerializer.serialize(zidRefreshToken, "string", ""));
        }

        // Query Params
        if (flipkartClientId !== undefined) {
            requestContext.setQueryParam("flipkart_client_id", ObjectSerializer.serialize(flipkartClientId, "string", ""));
        }

        // Query Params
        if (flipkartClientSecret !== undefined) {
            requestContext.setQueryParam("flipkart_client_secret", ObjectSerializer.serialize(flipkartClientSecret, "string", ""));
        }

        // Query Params
        if (allegroClientId !== undefined) {
            requestContext.setQueryParam("allegro_client_id", ObjectSerializer.serialize(allegroClientId, "string", ""));
        }

        // Query Params
        if (allegroClientSecret !== undefined) {
            requestContext.setQueryParam("allegro_client_secret", ObjectSerializer.serialize(allegroClientSecret, "string", ""));
        }

        // Query Params
        if (allegroAccessToken !== undefined) {
            requestContext.setQueryParam("allegro_access_token", ObjectSerializer.serialize(allegroAccessToken, "string", ""));
        }

        // Query Params
        if (allegroRefreshToken !== undefined) {
            requestContext.setQueryParam("allegro_refresh_token", ObjectSerializer.serialize(allegroRefreshToken, "string", ""));
        }

        // Query Params
        if (allegroEnvironment !== undefined) {
            requestContext.setQueryParam("allegro_environment", ObjectSerializer.serialize(allegroEnvironment, "string", ""));
        }

        // Query Params
        if (zohoClientId !== undefined) {
            requestContext.setQueryParam("zoho_client_id", ObjectSerializer.serialize(zohoClientId, "string", ""));
        }

        // Query Params
        if (zohoClientSecret !== undefined) {
            requestContext.setQueryParam("zoho_client_secret", ObjectSerializer.serialize(zohoClientSecret, "string", ""));
        }

        // Query Params
        if (zohoRefreshToken !== undefined) {
            requestContext.setQueryParam("zoho_refresh_token", ObjectSerializer.serialize(zohoRefreshToken, "string", ""));
        }

        // Query Params
        if (zohoRegion !== undefined) {
            requestContext.setQueryParam("zoho_region", ObjectSerializer.serialize(zohoRegion, "string", ""));
        }

        // Query Params
        if (tiendanubeUserId !== undefined) {
            requestContext.setQueryParam("tiendanube_user_id", ObjectSerializer.serialize(tiendanubeUserId, "number", ""));
        }

        // Query Params
        if (tiendanubeAccessToken !== undefined) {
            requestContext.setQueryParam("tiendanube_access_token", ObjectSerializer.serialize(tiendanubeAccessToken, "string", ""));
        }

        // Query Params
        if (tiendanubeClientSecret !== undefined) {
            requestContext.setQueryParam("tiendanube_client_secret", ObjectSerializer.serialize(tiendanubeClientSecret, "string", ""));
        }

        // Query Params
        if (ottoClientId !== undefined) {
            requestContext.setQueryParam("otto_client_id", ObjectSerializer.serialize(ottoClientId, "string", ""));
        }

        // Query Params
        if (ottoClientSecret !== undefined) {
            requestContext.setQueryParam("otto_client_secret", ObjectSerializer.serialize(ottoClientSecret, "string", ""));
        }

        // Query Params
        if (ottoAppId !== undefined) {
            requestContext.setQueryParam("otto_app_id", ObjectSerializer.serialize(ottoAppId, "string", ""));
        }

        // Query Params
        if (ottoRefreshToken !== undefined) {
            requestContext.setQueryParam("otto_refresh_token", ObjectSerializer.serialize(ottoRefreshToken, "string", ""));
        }

        // Query Params
        if (ottoEnvironment !== undefined) {
            requestContext.setQueryParam("otto_environment", ObjectSerializer.serialize(ottoEnvironment, "string", ""));
        }

        // Query Params
        if (ottoAccessToken !== undefined) {
            requestContext.setQueryParam("otto_access_token", ObjectSerializer.serialize(ottoAccessToken, "string", ""));
        }

        // Query Params
        if (tiktokshopAppKey !== undefined) {
            requestContext.setQueryParam("tiktokshop_app_key", ObjectSerializer.serialize(tiktokshopAppKey, "string", ""));
        }

        // Query Params
        if (tiktokshopAppSecret !== undefined) {
            requestContext.setQueryParam("tiktokshop_app_secret", ObjectSerializer.serialize(tiktokshopAppSecret, "string", ""));
        }

        // Query Params
        if (tiktokshopRefreshToken !== undefined) {
            requestContext.setQueryParam("tiktokshop_refresh_token", ObjectSerializer.serialize(tiktokshopRefreshToken, "string", ""));
        }

        // Query Params
        if (tiktokshopAccessToken !== undefined) {
            requestContext.setQueryParam("tiktokshop_access_token", ObjectSerializer.serialize(tiktokshopAccessToken, "string", ""));
        }

        // Query Params
        if (sallaClientId !== undefined) {
            requestContext.setQueryParam("salla_client_id", ObjectSerializer.serialize(sallaClientId, "string", ""));
        }

        // Query Params
        if (sallaClientSecret !== undefined) {
            requestContext.setQueryParam("salla_client_secret", ObjectSerializer.serialize(sallaClientSecret, "string", ""));
        }

        // Query Params
        if (sallaRefreshToken !== undefined) {
            requestContext.setQueryParam("salla_refresh_token", ObjectSerializer.serialize(sallaRefreshToken, "string", ""));
        }

        // Query Params
        if (sallaAccessToken !== undefined) {
            requestContext.setQueryParam("salla_access_token", ObjectSerializer.serialize(sallaAccessToken, "string", ""));
        }

        // Query Params
        if (temuAppKey !== undefined) {
            requestContext.setQueryParam("temu_app_key", ObjectSerializer.serialize(temuAppKey, "string", ""));
        }

        // Query Params
        if (temuAppSecret !== undefined) {
            requestContext.setQueryParam("temu_app_secret", ObjectSerializer.serialize(temuAppSecret, "string", ""));
        }

        // Query Params
        if (temuAccessToken !== undefined) {
            requestContext.setQueryParam("temu_access_token", ObjectSerializer.serialize(temuAccessToken, "string", ""));
        }

        // Query Params
        if (temuRegion !== undefined) {
            requestContext.setQueryParam("temu_region", ObjectSerializer.serialize(temuRegion, "string", ""));
        }

        // Query Params
        if (scapiClientId !== undefined) {
            requestContext.setQueryParam("scapi_client_id", ObjectSerializer.serialize(scapiClientId, "string", ""));
        }

        // Query Params
        if (scapiClientSecret !== undefined) {
            requestContext.setQueryParam("scapi_client_secret", ObjectSerializer.serialize(scapiClientSecret, "string", ""));
        }

        // Query Params
        if (scapiOrganizationId !== undefined) {
            requestContext.setQueryParam("scapi_organization_id", ObjectSerializer.serialize(scapiOrganizationId, "string", ""));
        }

        // Query Params
        if (scapiShortCode !== undefined) {
            requestContext.setQueryParam("scapi_short_code", ObjectSerializer.serialize(scapiShortCode, "string", ""));
        }

        // Query Params
        if (scapiScopes !== undefined) {
            requestContext.setQueryParam("scapi_scopes", ObjectSerializer.serialize(scapiScopes, "string", ""));
        }

        // Query Params
        if (idempotencyKey !== undefined) {
            requestContext.setQueryParam("idempotency_key", ObjectSerializer.serialize(idempotencyKey, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["StoreKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.
     * account.failed_webhooks
     * @param start This parameter sets the number from which you want to get entities
     * @param count This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250
     * @param ids List of сomma-separated webhook ids
     */
    public async accountFailedWebhooks(start?: number, count?: number, ids?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/account.failed_webhooks.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "number", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.
     * account.supported_platforms
     */
    public async accountSupportedPlatforms(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/account.supported_platforms.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AccountApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountCartAdd
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountCartAddWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountCartAdd200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountCartAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountCartAdd200Response", ""
            ) as AccountCartAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountCartAdd200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountCartAdd200Response", ""
            ) as AccountCartAdd200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountCartList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountCartListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountCartList200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountCartList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountCartList200Response", ""
            ) as AccountCartList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountCartList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountCartList200Response", ""
            ) as AccountCartList200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountConfigUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountConfigUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountConfigUpdate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountConfigUpdate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountConfigUpdate200Response", ""
            ) as AccountConfigUpdate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountFailedWebhooks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountFailedWebhooksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountFailedWebhooks200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountFailedWebhooks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountFailedWebhooks200Response", ""
            ) as AccountFailedWebhooks200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountFailedWebhooks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountFailedWebhooks200Response", ""
            ) as AccountFailedWebhooks200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountSupportedPlatforms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountSupportedPlatformsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountSupportedPlatforms200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountSupportedPlatforms200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountSupportedPlatforms200Response", ""
            ) as AccountSupportedPlatforms200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountSupportedPlatforms200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountSupportedPlatforms200Response", ""
            ) as AccountSupportedPlatforms200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
