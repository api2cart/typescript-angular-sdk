# .AccountApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountCartAdd**](AccountApi.md#accountCartAdd) | **POST** /account.cart.add.json | account.cart.add
[**accountCartList**](AccountApi.md#accountCartList) | **GET** /account.cart.list.json | account.cart.list
[**accountConfigUpdate**](AccountApi.md#accountConfigUpdate) | **PUT** /account.config.update.json | account.config.update
[**accountFailedWebhooks**](AccountApi.md#accountFailedWebhooks) | **GET** /account.failed_webhooks.json | account.failed_webhooks
[**accountSupportedPlatforms**](AccountApi.md#accountSupportedPlatforms) | **GET** /account.supported_platforms.json | account.supported_platforms


# **accountCartAdd**
> AccountCartAdd200Response accountCartAdd(accountCartAdd)

Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.

### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiAccountCartAddRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiAccountCartAddRequest = {
  
  accountCartAdd: {
    cartId: "Opencart14",
    storeUrl: "http://mystore.com",
    bridgeUrl: "https://your-store.com/custom/bridge/path/bridge.php",
    storeRoot: "/home/www/stores/magento1922",
    storeKey: "ab37fc230bc5df63a5be1b11220949be",
    validateVersion: true,
    verify: false,
    dbTablesPrefix: "oc_",
    userAgent: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
    ftpHost: "ftp.mystore.com",
    ftpUser: "user",
    ftpPassword: "G4}q215D4_H9$Be",
    ftpPort: 22,
    ftpStoreDir: "/public",
    _3dcartPrivateKey: "7dba81f90bdbe25e7000e73214ca51b",
    _3dcartAccessToken: "4Grr_ZCLNNoSUuhAjesKuchxo9SL",
    _3dcartapiApiKey: "82cc921c6a5c67082cc921c6a5c6707e1d6e6862ba3201a",
    amazonSpClientId: "amzn1.application-oa2-client.11e000e1f47d4998aca3733716d3b5a4",
    amazonSpClientSecret: "2c987428209f235443221255bde064f4bdf8a65165a80f5d22760a83cb",
    amazonSpRefreshToken: "Atzr|IwEBIPUI-bwRTdDgKNQ_g56C30wGqymtx30c9MdDC7Emwmojhs20k5BBG2hHtJiGZ_7OfG7khd1RuQr6KEst4qyWbo_eXi5S_T_VOxzJUuksG1cFOGFpFK-cnhReNzAeZIpZeJT7_ROy1csEFlQfC8FJS3bsbSkkbTz2ZcTN7_7ey0HVlhyfFizgROeSeOI24Wjs9l_KKzZW0jvi_oC2cxlIcyknnHLK6KMNz2rTXqQJWRtlK9xPJDdbcUa5STA8MQru91cxNBpSkZN_cq9OOELhbsIGKD75y7nZ3yJU4uHQC_9iBQQoFm0biKgi-kEQwOhwws8",
    amazonSpAwsRegion: "us-east-1",
    amazonSpApiEnvironment: "sandbox",
    amazonSellerId: "13P636B2M1N4WR",
    aspdotnetstorefrontApiUser: "admin",
    aspdotnetstorefrontApiPass: "f6471ef78f72b41849a8b8b67791b0b5",
    americommerceAppId: "1",
    americommerceAppSecret: "9fd3d282d65a007a2b9d541b5e0e410b2cecd6199632db53503b93637b8a6000",
    americommerceAccessToken: "1e721f59b610e2666caea03094600765",
    americommerceRefreshToken: "520c011444af41d916543cdda859a5114",
    bigcommerceapiAdminAccount: "admin",
    bigcommerceapiApiPath: "http://mystore.bigcommerce.com/api/v1",
    bigcommerceapiApiKey: "6b89704cd75738cb0f9f6468d5462aba",
    bigcommerceapiClientId: "p1r37bt131z86675nofv9xmhietoe4t",
    bigcommerceapiAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    bigcommerceapiContext: "stores/etplnf8o8v",
    bolApiKey: "51369628-feee-11ed-be56-0242ac120002",
    bolApiSecret: "8fGzEsbEP5z2MNZubmIil87m-sWzTkj?KDQKrmzmU!fA6aAUNMdKRp7LMWHwE!G37UMfnWByHBGSXJHkAG?QcuYTO2uklv4idIHwUMLHK!OO1yfRlWh!",
    bolRetailerId: 145001,
    bigcartelUserName: "subdomain",
    bigcartelPassword: "4GrrZCLNNoSUuhAjesKuchxo9SL",
    bricklinkConsumerKey: "26F6CDA087D9444EAA71AC09E7A1D39A",
    bricklinkConsumerSecret: "a46abc3kxyinlbggy06i9g975xqo6gjq",
    bricklinkToken: "ktv4n9rgrj0evjuy2t6p2xlb1f8u5pmy",
    bricklinkTokenSecret: "a46abc3kxyinlbggy06i9g975xqo6gjq",
    demandwareClientId: "b849eb85-v8b9-1dw8-9fe2-97e1d6ffc7b0",
    demandwareApiPassword: "testpassword",
    demandwareUserName: "admin",
    demandwareUserPassword: "12345",
    ebayClientId: "a9psel85v1wy5faeyjw03y0r",
    ebayClientSecret: "gmz3iz45x2",
    ebayRuname: "gmz3iz45x2",
    ebayAccessToken: "v^1.1#i ... AjRV4yNjA=",
    ebayRefreshToken: "v^1.1#i ... rAewqVasdA=",
    ebayEnvironment: "sandbox",
    ebaySiteId: 101,
    walmartClientId: "423f6A24-123z-8654-989u-6fa96478289",
    walmartClientSecret: "1gf85fea-8974-2648-w12w-rt54284tdf54",
    walmartEnvironment: "production",
    walmartChannelType: "0f3e4dd4-0514-4346-b39d-af0e00ea066d",
    walmartRegion: "us",
    ecwidAcessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    ecwidStoreId: "1",
    lazadaAppId: "112577",
    lazadaAppSecret: "er33raICJ79Q5b0EsR9stmRnjE9XQ2WH",
    lazadaRefreshToken: "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUkcxw4zewU337mVVb5br",
    lazadaRegion: "Malaysia",
    lightspeedApiKey: "cf5444729c2abd6b6a5d983691767cb5",
    lightspeedApiSecret: "2620ee52a8bc942f9d5d3a575f4d363e",
    etsyKeystring: "a9psel85v1wy5faeyjw03y0r",
    etsySharedSecret: "gmz3iz45x2",
    etsyAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    etsyTokenSecret: "igse8e4rdmzkxdi937qe69d59en1imw",
    etsyClientId: "w0fi0igk2w29bjcd7ydr2s35",
    etsyRefreshToken: "223577551.L07_RE-y7unmKf2dox4djsHkVxwpUfs1ikG_uQmHhF-aASEReNn_Qns1Wqn3dDa0ZMxrt9CIael3dgudeDZb31ZUdS",
    facebookAppId: "6516912365277570",
    facebookAppSecret: "737cf6bd2879cb6c7e5a8ff9cd63f3d46b0b5b7b",
    facebookAccessToken: "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUAhqbS58clzJwyp1rYRMpP31QJGziqtYbKypdVx3Cs0RpuufoUeLsbfX195XIB8VTlkcxw4zewU337mVVb5br",
    facebookBusinessId: "294042786906655",
    netoApiKey: "bbca57d8ff3c3677128112c15556d9e3",
    netoApiUsername: "mylogin",
    shoplineAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    shoplineAppKey: "737cf6bd2879cb6c7e5a8ff9cd63f3d46b0b5b7b",
    shoplineAppSecret: "1701d123bb5cc14cd2732dcaed90638316c0a09",
    shoplineSharedSecret: "1701d123bb5cc14cd2732dcaed90638316c0a09",
    shopifyAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    shopifyClientId: "b5defe55db3f6836fb4e0e6624ff9577",
    shopifyApiKey: "bbca57d8ff3c3677128112c15556d9e3",
    shopifyApiPassword: "860f3a6fc87632301a42cd88e4b5ab3d",
    shopifySharedSecret: "gmz3iz45x2",
    shopeePartnerId: "1276777",
    shopeePartnerKey: "6a46494b4d746576554646626775617a577542774850636375464d6a736d5598",
    shopeeShopId: "137968",
    shopeeRefreshToken: "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUkcxw4zewU987mVVb5br",
    shopeeRegion: "CN",
    shopeeEnvironment: "sandbox",
    shoplazzaAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    shoplazzaSharedSecret: "gmz3iz45x2",
    shopwareAccessKey: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    unasApiKey: "c238908e29ceb6e6ad3df15f89a6234709d3f000",
    shopwareApiKey: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    shopwareApiSecret: "V3NYNWg2b1dZdHBUWDN1cmdKdGhnenp5enVJYlJ0WlJvOFF2bnQ",
    mivaAccessToken: "227cbe434a1e358d72db0de993x9d9fd",
    mivaSignature: "1hpkrebfdsObGTor/0Gk9XcNBUQohrxrw67Sg9AM9ps=",
    tiendanubeUserId: 1234,
    tiendanubeAccessToken: "75bde7bb0b437475423e7e87c142c06052f80199",
    tiendanubeClientSecret: "5e3588f514a5ae0d0fa063d1b556531e25c83fa7e47472ed",
    volusionLogin: "admin",
    volusionPassword: "7943CA5F3990E00D9A4CCF0BD998211F",
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
    squareClientId: "sq0idp-qwer_1pvuTYe9cAf1lmxyQ",
    squareClientSecret: "c8d7077fce7b2b111111111898170695a01473a2ad",
    squareRefreshToken: "EQAAlquVXMr6xIcPu7qPkIEAZ0thqChhQuowrvZIqOlwhOwhtmyh4ZRfesdRc434",
    squarespaceApiKey: "8f7849d5-1411-47f2-9722-aa81c2a48d95",
    squarespaceClientId: "9UGbUtS2V96BxRGmfOjsGAhTdsr9Vxxx",
    squarespaceClientSecret: "GPZkUFkIKWg0KLE6rajsFMMYA9ma0udaaq2bYwBDXXX=",
    squarespaceAccessToken: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    squarespaceRefreshToken: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    commercehqApiKey: "sJrD-LM0eddhe63rfgfva0dDydXfre4",
    commercehqApiPassword: "4Grr_ZCLNNoSUuhAjesKuchxo9SL",
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
    zohoClientId: "1000.FLCHGI2LS1111111TOR4OGB697W4IX",
    zohoClientSecret: "c8d7077fce7b2b111111111898170695a01473a2ad",
    zohoRefreshToken: "1000.11111111111111111111111111111111.1b3ca6f054341a111118abf928beb33b",
    zohoRegion: "Europe",
    ottoClientId: "911a3dbf-d261-4763-cc81-052876465b55",
    ottoClientSecret: "9887a82a-2879-421e-a6wc-54e986b3458c",
    ottoAppId: "6eaef6a3-822e-425b-8mc9-53750063e34d",
    ottoRefreshToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    ottoEnvironment: "sandbox",
    ottoAccessToken: "eyJhbGciOiJS34535f45f54f5656deyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    tiktokshopAppKey: "6arbhkzno8nbv",
    tiktokshopAppSecret: "d95820a05a0cd54fb394fcd26fgat63999b183bc",
    tiktokshopRefreshToken: "TTP_NTUxZTNhYTQ2ZDk2YmRmZWNmYWY2YWY12345NGYwNjQ3YjkzYTllYjA0YmNlMw",
    tiktokshopAccessToken: "TTP_Fw8r12345kW03FYd09DG-9INtpw361hWthei12345iPJ5AUv99fLSCYD9-Uu12345TgNRzKZxi5-tfFMtdWqglEt5_iCk",
    sallaClientId: "1bxxxcf9-5xx4-xxx-bxxf-929b8xxxxe11",
    sallaClientSecret: "8x88axxxc25e1fxxxa1c06fxxx150xx5",
    sallaRefreshToken: "oxy_rt_zxxxxiY2xxZWWxxxxlU-tROxxxxx2JzS2fwzxxxxxkU.p3xxxkCIyFexxxxP50WwZYfhw5_wg1xxxxV5F-8xxXc",
    sallaAccessToken: "oxy_rt_zxxxxiY2xxZWWxxxxlU-tROxxxxx2JzS2fwzxxxxxkU.p3xxxkCIyFexxxxP50WwZYfhw5_wg1xxxxV5F-8xxXc",
    temuAppKey: "4ebbc9190ae410443d65b4c2faca9811",
    temuAppSecret: "4782d2d827276688bf4758bed55dbdd4bbe79a78",
    temuAccessToken: "uplv3hfyt5kcwoymrgnajnbl1ow5qxlz4sqhev6hl3xosz5dejrtyl2jre6",
    temuRegion: "US",
    scapiClientId: "b941ec85-v6b2-1dw8-9fe2-98e1d6eec7b1",
    scapiClientSecret: "testpassword",
    scapiOrganizationId: "f_ecom_xxxx_001",
    scapiShortCode: "zs5ksm25",
    scapiScopes: "sfcc.catalogs,sfcc.orders,sfcc.products",
  },
};

const data = await apiInstance.accountCartAdd(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountCartAdd** | **AccountCartAdd**|  |


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

# **accountCartList**
> AccountCartList200Response accountCartList()

This method lets you get a list of online stores connected to your API2Cart account. You can get the number of API requests to each store if you specify a period using parameters (request_from_date, request_to_date). The total_calls field is displayed only if there are parameters (request_from_date, request_to_date).

### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiAccountCartListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiAccountCartListRequest = {
    // A web address of a store (optional)
  storeUrl: "http://mystore.com",
    // Find store by store key (optional)
  storeKey: "ab37fc230bc5df63a5be1b11220949be",
    // Retrieve entities from their creation date (optional)
  requestFromDate: "2010-07-29",
    // Retrieve entities to their creation date (optional)
  requestToDate: "2100-08-29",
    // Set this parameter in order to choose which entity fields you want to retrieve (optional)
  params: "url,store_key",
    // Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
  exclude: "url,store_key",
};

const data = await apiInstance.accountCartList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeUrl** | [**string**] | A web address of a store | (optional) defaults to undefined
 **storeKey** | [**string**] | Find store by store key | (optional) defaults to undefined
 **requestFromDate** | [**string**] | Retrieve entities from their creation date | (optional) defaults to undefined
 **requestToDate** | [**string**] | Retrieve entities to their creation date | (optional) defaults to undefined
 **params** | [**string**] | Set this parameter in order to choose which entity fields you want to retrieve | (optional) defaults to 'force_all'
 **exclude** | [**string**] | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | (optional) defaults to undefined


### Return type

**AccountCartList200Response**

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

# **accountConfigUpdate**
> AccountConfigUpdate200Response accountConfigUpdate()

Use this method to automate the change of credentials used to connect online stores. The list of supported parameters differs depending on the platform.

### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiAccountConfigUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiAccountConfigUpdateRequest = {
    // Identifies if there is a necessity to replace parameters (optional)
  replaceParameters: true,
    // The web address of the store you want to update to connect to API2Cart (optional)
  newStoreUrl: "http://mystore.com",
    // Update store key (optional)
  newStoreKey: "b636495648de3086f6f57b1bd4be548f",
    // This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) (optional)
  bridgeUrl: "https://your-store.com/custom/bridge/path/bridge.php",
    // Absolute path to the store root directory (used with \"bridge_url\" parameter) (optional)
  storeRoot: "/home/www/stores/magento1922",
    // DB tables prefix (optional)
  dbTablesPrefix: "oc_",
    // This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store\'s firewall may block specific values. (optional)
  userAgent: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
    // 3DCart Private Key (optional)
  _3dcartPrivateKey: "7dba81f90bdbe25e7000e73214ca51b",
    // 3DCart Token (optional)
  _3dcartAccessToken: "4Grr_ZCLNNoSUuhAjesKuchxo9SL",
    // 3DCart API Key (optional)
  _3dcartapiApiKey: "82cc921c6a5c67082cc921c6a5c6707e1d6e6862ba3201a",
    // Amazon SP API app client id (optional)
  amazonSpClientId: "amzn1.application-oa2-client.11e000e1f47d4998aca3733716d3b5a4",
    // Amazon SP API app client secret (optional)
  amazonSpClientSecret: "2c987428209f235443221255bde064f4bdf8a65165a80f5d22760a83cb",
    // Amazon SP API OAuth refresh token (optional)
  amazonSpRefreshToken: "Atzr|IwEBIPUI-bwRTdDgKNQ_g56C30wGqymtx30c9MdDC7Emwmojhs20k5BBG2hHtJiGZ_7OfG7khd1RuQr6KEst4qyWbo_eXi5S_T_VOxzJUuksG1cFOGFpFK-cnhReNzAeZIpZeJT7_ROy1csEFlQfC8FJS3bsbSkkbTz2ZcTN7_7ey0HVlhyfFizgROeSeOI24Wjs9l_KKzZW0jvi_oC2cxlIcyknnHLK6KMNz2rTXqQJWRtlK9xPJDdbcUa5STA8MQru91cxNBpSkZN_cq9OOELhbsIGKD75y7nZ3yJU4uHQC_9iBQQoFm0biKgi-kEQwOhwws8",
    // Amazon AWS Region (optional)
  amazonSpAwsRegion: "us-east-1",
    // Amazon SP API environment (optional)
  amazonSpApiEnvironment: "sandbox",
    // Amazon Seller ID (Merchant token) (optional)
  amazonSellerId: "13P636B2M1N4WR",
    // It\'s a AspDotNetStorefront account for which API is available (optional)
  aspdotnetstorefrontApiUser: "admin",
    // AspDotNetStorefront API Password (optional)
  aspdotnetstorefrontApiPass: "f6471ef78f72b41849a8b8b67791b0b5",
    // Americommerce App ID (optional)
  americommerceAppId: "1",
    // Americommerce App Secret (optional)
  americommerceAppSecret: "9fd3d282d65a007a2b9d541b5e0e410b2cecd6199632db53503b93637b8a6000",
    // Americommerce Access Token (optional)
  americommerceAccessToken: "1e721f59b610e2666caea03094600765",
    // Americommerce Refresh Token (optional)
  americommerceRefreshToken: "520c011444af41d916543cdda859a5114",
    // It\'s a BigCommerce account for which API is enabled (optional)
  bigcommerceapiAdminAccount: "admin",
    // BigCommerce API URL (optional)
  bigcommerceapiApiPath: "http://mystore.bigcommerce.com/api/v1",
    // Bigcommerce API Key (optional)
  bigcommerceapiApiKey: "6b89704cd75738cb0f9f6468d5462aba",
    // Client ID of the requesting app (optional)
  bigcommerceapiClientId: "p1r37bt131z86675nofv9xmhietoe4t",
    // Access token authorizing the app to access resources on behalf of a user (optional)
  bigcommerceapiAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    // API Path section unique to the store (optional)
  bigcommerceapiContext: "stores/etplnf8o8v",
    // Bol API Key (optional)
  bolApiKey: "51369628-feee-11ed-be56-0242ac120002",
    // Bol API Secret (optional)
  bolApiSecret: "8fGzEsbEP5z2MNZubmIil87m-sWzTkj?KDQKrmzmU!fA6aAUNMdKRp7LMWHwE!G37UMfnWByHBGSXJHkAG?QcuYTO2uklv4idIHwUMLHK!OO1yfRlWh!",
    // Bol Retailer ID (optional)
  bolRetailerId: 145001,
    // Demandware client id (optional)
  demandwareClientId: "b849eb85-v8b9-1dw8-9fe2-97e1d6ffc7b0",
    // Demandware api password (optional)
  demandwareApiPassword: "testpassword",
    // Demandware user name (optional)
  demandwareUserName: "admin",
    // Demandware user password (optional)
  demandwareUserPassword: "12345",
    // Application ID (AppID). (optional)
  ebayClientId: "a9psel85v1wy5faeyjw03y0r",
    // Shared Secret from eBay application (optional)
  ebayClientSecret: "gmz3iz45x2",
    // The RuName value that eBay assigns to your application. (optional)
  ebayRuname: "gmz3iz45x2",
    // Used to authenticate API requests. (optional)
  ebayAccessToken: "v^1.1#i ... AjRV4yNjA=",
    // Used to renew the access token. (optional)
  ebayRefreshToken: "v^1.1#i ... rAewqVasdA=",
    // eBay environment (optional)
  ebayEnvironment: "sandbox",
    // eBay global ID (optional)
  ebaySiteId: 101,
    // Access token authorizing the app to access resources on behalf of a user (optional)
  ecwidAcessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Store Id (optional)
  ecwidStoreId: "1",
    // Lazada App ID (optional)
  lazadaAppId: "112577",
    // Lazada App Secret (optional)
  lazadaAppSecret: "er33raICJ79Q5b0EsR9stmRnjE9XQ2WH",
    // Lazada Refresh Token (optional)
  lazadaRefreshToken: "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUkcxw4zewU337mVVb5br",
    // Lazada API endpoint Region (optional)
  lazadaRegion: "Malaysia",
    // Etsy keystring (optional)
  etsyKeystring: "a9psel85v1wy5faeyjw03y0r",
    // Etsy shared secret (optional)
  etsySharedSecret: "gmz3iz45x2",
    // Access token authorizing the app to access resources on behalf of a user (optional)
  etsyAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Secret token authorizing the app to access resources on behalf of a user (optional)
  etsyTokenSecret: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Etsy Client Id (optional)
  etsyClientId: "w0fi0igk2w29bjcd7ydr2s35",
    // Etsy Refresh token (optional)
  etsyRefreshToken: "223577551.L07_RE-y7unmKf2dox4djsHkVxwpUfs1ikG_uQmHhF-aASEReNn_Qns1Wqn3dDa0ZMxrt9CIael3dgudeDZb31ZUdS",
    // Facebook App ID (optional)
  facebookAppId: "6516912365277570",
    // Facebook App Secret (optional)
  facebookAppSecret: "737cf6bd2879cb6c7e5a8ff9cd63f3d46b0b5b7b",
    // Facebook Access Token (optional)
  facebookAccessToken: "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUAhqbS58clzJwyp1rYRMpP31QJGziqtYbKypdVx3Cs0RpuufoUeLsbfX195XIB8VTlkcxw4zewU337mVVb5br",
    // Facebook Business ID (optional)
  facebookBusinessId: "294042786906655",
    // Neto API Key (optional)
  netoApiKey: "bbca57d8ff3c3677128112c15556d9e3",
    // Neto User Name (optional)
  netoApiUsername: "mylogin",
    // Shopline APP Key (optional)
  shoplineAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Shopline APP Key (optional)
  shoplineAppKey: "737cf6bd2879cb6c7e5a8ff9cd63f3d46b0b5b7b",
    // Shopline App Secret (optional)
  shoplineAppSecret: "1701d123bb5cc14cd2732dcaed90638316c0a09",
    // Shopline Shared Secret (optional)
  shoplineSharedSecret: "1701d123bb5cc14cd2732dcaed90638316c0a09",
    // Access token authorizing the app to access resources on behalf of a user (optional)
  shopifyAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Shopify Client ID (optional)
  shopifyClientId: "b5defe55db3f6836fb4e0e6624ff9577",
    // Shopify API Key (optional)
  shopifyApiKey: "bbca57d8ff3c3677128112c15556d9e3",
    // Shopify API Password (optional)
  shopifyApiPassword: "860f3a6fc87632301a42cd88e4b5ab3d",
    // Shared secret (optional)
  shopifySharedSecret: "gmz3iz45x2",
    // Shopee Partner ID (optional)
  shopeePartnerId: "1276777",
    // Shopee Partner Key (optional)
  shopeePartnerKey: "6a46494b4d746576554646626775617a577542774850636375464d6a736d5598",
    // Shopee SHOP ID (optional)
  shopeeShopId: "137968",
    // Shopee Refresh Token (optional)
  shopeeRefreshToken: "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUkcxw4zewU987mVVb5br",
    // Shopee API endpoint Region. Use for Chinese Mainland or Brazil. (optional)
  shopeeRegion: "CN",
    // Shopee Environment (optional)
  shopeeEnvironment: "sandbox",
    // Access token authorizing the app to access resources on behalf of a user (optional)
  shoplazzaAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Shared secret (optional)
  shoplazzaSharedSecret: "gmz3iz45x2",
    // Miva access token (optional)
  mivaAccessToken: "227cbe434a1e358d72db0de993x9d9fd",
    // Miva signature (optional)
  mivaSignature: "1hpkrebfdsObGTor/0Gk9XcNBUQohrxrw67Sg9AM9ps=",
    // Shopware access key (optional)
  shopwareAccessKey: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    // UNAS API Key (optional)
  unasApiKey: "c238908e29ceb6e6ad3df15f89a6234709d3f000",
    // Shopware api key (optional)
  shopwareApiKey: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    // Shopware client secret access key (optional)
  shopwareApiSecret: "V3NYNWg2b1dZdHBUWDN1cmdKdGhnenp5enVJYlJ0WlJvOFF2bnQ",
    // Subdomain of store (optional)
  bigcartelUserName: "subdomain",
    // BigCartel account password (optional)
  bigcartelPassword: "4GrrZCLNNoSUuhAjesKuchxo9SL",
    // Bricklink Consumer Key (optional)
  bricklinkConsumerKey: "26F6CDA087D9444EAA71AC09E7A1D39A",
    // Bricklink Consumer Secret (optional)
  bricklinkConsumerSecret: "a46abc3kxyinlbggy06i9g975xqo6gjq",
    // Bricklink Access Token (optional)
  bricklinkToken: "ktv4n9rgrj0evjuy2t6p2xlb1f8u5pmy",
    // Bricklink Access Token Secret (optional)
  bricklinkTokenSecret: "a46abc3kxyinlbggy06i9g975xqo6gjq",
    // It\'s a Volusion account for which API is enabled (optional)
  volusionLogin: "admin",
    // Volusion API Password (optional)
  volusionPassword: "7943CA5F3990E00D9A4CCF0BD998211F",
    // Walmart client ID. For the region \'ca\' use Consumer ID (optional)
  walmartClientId: "423f6A24-123z-8654-989u-6fa96478289",
    // Walmart client secret. For the region \'ca\' use Private Key (optional)
  walmartClientSecret: "1gf85fea-8974-2648-w12w-rt54284tdf54",
    // Walmart environment (optional)
  walmartEnvironment: "production",
    // Walmart WM_CONSUMER.CHANNEL.TYPE header (optional)
  walmartChannelType: "0f3e4dd4-0514-4346-b39d-af0e00ea066d",
    // Walmart region (optional)
  walmartRegion: "us",
    // Square (Weebly) Client ID (optional)
  squareClientId: "sq0idp-qwer_1pvuTYe9cAf1lmxyQ",
    // Square (Weebly) Client Secret (optional)
  squareClientSecret: "c8d7077fce7b2b111111111898170695a01473a2ad",
    // Square (Weebly) Refresh Token (optional)
  squareRefreshToken: "EQAAlquVXMr6xIcPu7qPkIEAZ0thqChhQuowrvZIqOlwhOwhtmyh4ZRfesdRc434",
    // Squarespace API Key (optional)
  squarespaceApiKey: "8f7849d5-1411-47f2-9722-aa81c2a48d95",
    // Squarespace Connector Client ID (optional)
  squarespaceClientId: "9UGbUtS2V96BxRGmfOjsGAhTdsr9Vxxx",
    // Squarespace Connector Client Secret (optional)
  squarespaceClientSecret: "GPZkUFkIKWg0KLE6rajsFMMYA9ma0udaaq2bYwBDXXX=",
    // Squarespace access token (optional)
  squarespaceAccessToken: "SWSCS3O1RJBSRNBYQLFIYJN2ZQ",
    // Squarespace refresh token (optional)
  squarespaceRefreshToken: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    // Omni Commerce Connector Client ID (optional)
  hybrisClientId: "api_client_1",
    // Omni Commerce Connector Client Secret (optional)
  hybrisClientSecret: "secret_phrase_1",
    // User Name (optional)
  hybrisUsername: "admin",
    // User password (optional)
  hybrisPassword: "nimda",
    // Websites to stores mapping data (optional)
  hybrisWebsites: [
    "hybris_websites[0][uid]=apparel-website&hybris_websites[0][url]=https://apparel.local/yacceleratorstorefront&hybris_websites[0][storeIds][0]=apparel-de&hybris_websites[0][storeIds][1]=apparel-uk",
  ],
    // LightSpeed api key (optional)
  lightspeedApiKey: "cf5444729c2abd6b6a5d983691767cb5",
    // LightSpeed api secret (optional)
  lightspeedApiSecret: "2620ee52a8bc942f9d5d3a575f4d363e",
    // CommerceHQ api key (optional)
  commercehqApiKey: "sJrD-LM0eddhe63rfgfva0dDydXfre4",
    // CommerceHQ api password (optional)
  commercehqApiPassword: "4Grr_ZCLNNoSUuhAjesKuchxo9SL",
    // Woocommerce consumer key (optional)
  wcConsumerKey: "ck_26d8e2ad604f3917e429df6961722282bdcf109d",
    // Woocommerce consumer secret (optional)
  wcConsumerSecret: "cs_931ced666118a15c5f7b4a33a15gf5589cbeba55",
    // Magento Consumer Key (optional)
  magentoConsumerKey: "ktv4n9rgrj0evjuy2t6p2xlb1f8u5pmy",
    // Magento Consumer Secret (optional)
  magentoConsumerSecret: "a46abc3kxyinlbggy06i9g975xqo6gjq",
    // Magento Access Token (optional)
  magentoAccessToken: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Magento Token Secret (optional)
  magentoTokenSecret: "igse8e4rdmzkxdi937qe69d59en1imw",
    // Prestashop webservice key (optional)
  prestashopWebserviceKey: "CKJ1ZEWRJWRLTPVBQJ9FGGRORD4AGS96",
    // Wix App ID (optional)
  wixAppId: "6b0b5b7b-7d87-45b5-bf34-ac6b438e63da",
    // Wix App Secret Key (optional)
  wixAppSecretKey: "316c0a09-f195-42be-74f6-a02cebb9cae6",
    // Wix Instance ID (optional)
  wixInstanceId: "58b893a4-6b16-5c2f-qt78-qa3r61t32rt8",
    // Wix refresh token (optional)
  wixRefreshToken: `
        OAUTH2.eyJraWQiOiJkZ0x3cjNRMCIsImFsZyI6IkhTMjU2In0.
        eyJkYXRhIjoie1wiaWRcIjpcImJlZjM3MmRmLTUyNGItNDI3NS05M2RkL
        Tg4NDBlOTU3ZWU2OFwifSIsImlhdCI6MTY0ODA0NTEyNiwiZXhwIjoxNzExMTE3MTI2fQ.
        VRR2lGSbcTVmaArtmyyhy6o4WRDwTn-nlDCQpZ97eYw
      `,
    // Mercado Libre App ID (optional)
  mercadoLibreAppId: "211188015100135",
    // Mercado Libre App Secret Key (optional)
  mercadoLibreAppSecretKey: "e2qoG2zklLlfP7cEngEJ94YjhkejkjAm",
    // Mercado Libre Refresh Token (optional)
  mercadoLibreRefreshToken: "TG-63h13529vb5464110188d2x9-703754376",
    // Zid Client ID (optional)
  zidClientId: 1234,
    // Zid Client Secret (optional)
  zidClientSecret: "nl5l1lE0vxgv6cV111fHsdlOOIfb0Ms5IR7l4Igs",
    // Zid Access Token (optional)
  zidAccessToken: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    // Zid Authorization (optional)
  zidAuthorization: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    // Zid refresh token (optional)
  zidRefreshToken: "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d",
    // Flipkart Client ID (optional)
  flipkartClientId: "19414773883a13a850b6a52350b7246499a24",
    // Flipkart Client Secret (optional)
  flipkartClientSecret: "nl5l1lE0vxgv6cV111fHsdlOOIfb0Ms5IR7l4Igs",
    // Allegro Client ID (optional)
  allegroClientId: "2915e189ce3d23d23d2327d204ae6a0bd",
    // Allegro Client Secret (optional)
  allegroClientSecret: "DNHtqdL2WPIefeUhQWYgtXPS23fgbfgasdsGHHJGhg3RTFDQWFGZmVoFRT5IfkQj1E7eR5",
    // Allegro Access Token (optional)
  allegroAccessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    // Allegro Refresh Token (optional)
  allegroRefreshToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    // Allegro Environment (optional)
  allegroEnvironment: "sandbox",
    // Zoho Client ID (optional)
  zohoClientId: "1000.FLCHGI2LS1111111TOR4OGB697W4IX",
    // Zoho Client Secret (optional)
  zohoClientSecret: "c8d7077fce7b2b111111111898170695a01473a2ad",
    // Zoho Refresh Token (optional)
  zohoRefreshToken: "1000.11111111111111111111111111111111.1b3ca6f054341a111118abf928beb33b",
    // Zoho API endpoint Region (optional)
  zohoRegion: "Europe",
    // Tiendanube User ID (optional)
  tiendanubeUserId: 1234,
    // Tiendanube Access Token (optional)
  tiendanubeAccessToken: "75bde7bb0b437475423e7e87c142c06052f80199",
    // Tiendanube Client Secret (optional)
  tiendanubeClientSecret: "5e3588f514a5ae0d0fa063d1b556531e25c83fa7e47472ed",
    // Otto Client ID (optional)
  ottoClientId: "911a3dbf-d261-4763-cc81-052876465b55",
    // Otto Client Secret (optional)
  ottoClientSecret: "9887a82a-2879-421e-a6wc-54e986b3458c",
    // Otto App ID (optional)
  ottoAppId: "6eaef6a3-822e-425b-8mc9-53750063e34d",
    // Otto Refresh Token (optional)
  ottoRefreshToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    // Otto Environment (optional)
  ottoEnvironment: "sandbox",
    // Otto Access Token (optional)
  ottoAccessToken: "eyJhbGciOiJS34535f45f54f5656deyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI",
    // TikTok Shop App Key (optional)
  tiktokshopAppKey: "6arbhkzno8nbv",
    // TikTok Shop App Secret (optional)
  tiktokshopAppSecret: "d95820a05a0cd54fb394fcd26fgat63999b183bc",
    // TikTok Shop Refresh Token (optional)
  tiktokshopRefreshToken: "TTP_NTUxZTNhYTQ2ZDk2YmRmZWNmYWY2YWY12345NGYwNjQ3YjkzYTllYjA0YmNlMw",
    // TikTok Shop Access Token (optional)
  tiktokshopAccessToken: "TTP_Fw8r12345kW03FYd09DG-9INtpw361hWthei12345iPJ5AUv99fLSCYD9-Uu12345TgNRzKZxi5-tfFMtdWqglEt5_iCk",
    // Salla Client ID (optional)
  sallaClientId: "1bxxxcf9-5xx4-xxx-bxxf-929b8xxxxe11",
    // Salla Client Secret (optional)
  sallaClientSecret: "8x88axxxc25e1fxxxa1c06fxxx150xx5",
    // Salla Refresh Token (optional)
  sallaRefreshToken: "oxy_rt_zxxxxiY2xxZWWxxxxlU-tROxxxxx2JzS2fwzxxxxxkU.p3xxxkCIyFexxxxP50WwZYfhw5_wg1xxxxV5F-8xxXc",
    // Salla Access Token (optional)
  sallaAccessToken: "oxy_rt_zxxxxiY2xxZWWxxxxlU-tROxxxxx2JzS2fwzxxxxxkU.p3xxxkCIyFexxxxP50WwZYfhw5_wg1xxxxV5F-8xxXc",
    // Temu App Key (optional)
  temuAppKey: "4ebbc9190ae410443d65b4c2faca9811",
    // Temu App Secret (optional)
  temuAppSecret: "4782d2d827276688bf4758bed55dbdd4bbe79a78",
    // Temu Access Token (optional)
  temuAccessToken: "uplv3hfyt5kcwoymrgnajnbl1ow5qxlz4sqhev6hl3xosz5dejrtyl2jre6",
    // Temu API endpoint Region. (optional)
  temuRegion: "US",
    // Salesforce Commerce API Client ID (optional)
  scapiClientId: "b941ec85-v6b2-1dw8-9fe2-98e1d6eec7b1",
    // Salesforce Commerce API Client Secret (optional)
  scapiClientSecret: "testpassword",
    // Salesforce Commerce Organization ID (optional)
  scapiOrganizationId: "f_ecom_xxxx_001",
    // Salesforce Commerce Short Code (optional)
  scapiShortCode: "zs5ksm25",
    // Salesforce Commerce API Scopes (optional)
  scapiScopes: "sfcc.catalogs,sfcc.orders,sfcc.products",
};

const data = await apiInstance.accountConfigUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replaceParameters** | [**boolean**] | Identifies if there is a necessity to replace parameters | (optional) defaults to undefined
 **newStoreUrl** | [**string**] | The web address of the store you want to update to connect to API2Cart | (optional) defaults to undefined
 **newStoreKey** | [**string**] | Update store key | (optional) defaults to undefined
 **bridgeUrl** | [**string**] | This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) | (optional) defaults to undefined
 **storeRoot** | [**string**] | Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter) | (optional) defaults to undefined
 **dbTablesPrefix** | [**string**] | DB tables prefix | (optional) defaults to undefined
 **userAgent** | [**string**] | This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store\&#39;s firewall may block specific values. | (optional) defaults to undefined
 **_3dcartPrivateKey** | [**string**] | 3DCart Private Key | (optional) defaults to undefined
 **_3dcartAccessToken** | [**string**] | 3DCart Token | (optional) defaults to undefined
 **_3dcartapiApiKey** | [**string**] | 3DCart API Key | (optional) defaults to undefined
 **amazonSpClientId** | [**string**] | Amazon SP API app client id | (optional) defaults to undefined
 **amazonSpClientSecret** | [**string**] | Amazon SP API app client secret | (optional) defaults to undefined
 **amazonSpRefreshToken** | [**string**] | Amazon SP API OAuth refresh token | (optional) defaults to undefined
 **amazonSpAwsRegion** | [**string**] | Amazon AWS Region | (optional) defaults to undefined
 **amazonSpApiEnvironment** | [**string**] | Amazon SP API environment | (optional) defaults to 'production'
 **amazonSellerId** | [**string**] | Amazon Seller ID (Merchant token) | (optional) defaults to undefined
 **aspdotnetstorefrontApiUser** | [**string**] | It\&#39;s a AspDotNetStorefront account for which API is available | (optional) defaults to undefined
 **aspdotnetstorefrontApiPass** | [**string**] | AspDotNetStorefront API Password | (optional) defaults to undefined
 **americommerceAppId** | [**string**] | Americommerce App ID | (optional) defaults to undefined
 **americommerceAppSecret** | [**string**] | Americommerce App Secret | (optional) defaults to undefined
 **americommerceAccessToken** | [**string**] | Americommerce Access Token | (optional) defaults to undefined
 **americommerceRefreshToken** | [**string**] | Americommerce Refresh Token | (optional) defaults to undefined
 **bigcommerceapiAdminAccount** | [**string**] | It\&#39;s a BigCommerce account for which API is enabled | (optional) defaults to undefined
 **bigcommerceapiApiPath** | [**string**] | BigCommerce API URL | (optional) defaults to undefined
 **bigcommerceapiApiKey** | [**string**] | Bigcommerce API Key | (optional) defaults to undefined
 **bigcommerceapiClientId** | [**string**] | Client ID of the requesting app | (optional) defaults to undefined
 **bigcommerceapiAccessToken** | [**string**] | Access token authorizing the app to access resources on behalf of a user | (optional) defaults to undefined
 **bigcommerceapiContext** | [**string**] | API Path section unique to the store | (optional) defaults to undefined
 **bolApiKey** | [**string**] | Bol API Key | (optional) defaults to undefined
 **bolApiSecret** | [**string**] | Bol API Secret | (optional) defaults to undefined
 **bolRetailerId** | [**number**] | Bol Retailer ID | (optional) defaults to undefined
 **demandwareClientId** | [**string**] | Demandware client id | (optional) defaults to undefined
 **demandwareApiPassword** | [**string**] | Demandware api password | (optional) defaults to undefined
 **demandwareUserName** | [**string**] | Demandware user name | (optional) defaults to undefined
 **demandwareUserPassword** | [**string**] | Demandware user password | (optional) defaults to undefined
 **ebayClientId** | [**string**] | Application ID (AppID). | (optional) defaults to undefined
 **ebayClientSecret** | [**string**] | Shared Secret from eBay application | (optional) defaults to undefined
 **ebayRuname** | [**string**] | The RuName value that eBay assigns to your application. | (optional) defaults to undefined
 **ebayAccessToken** | [**string**] | Used to authenticate API requests. | (optional) defaults to undefined
 **ebayRefreshToken** | [**string**] | Used to renew the access token. | (optional) defaults to undefined
 **ebayEnvironment** | [**string**] | eBay environment | (optional) defaults to undefined
 **ebaySiteId** | [**number**] | eBay global ID | (optional) defaults to 0
 **ecwidAcessToken** | [**string**] | Access token authorizing the app to access resources on behalf of a user | (optional) defaults to undefined
 **ecwidStoreId** | [**string**] | Store Id | (optional) defaults to undefined
 **lazadaAppId** | [**string**] | Lazada App ID | (optional) defaults to undefined
 **lazadaAppSecret** | [**string**] | Lazada App Secret | (optional) defaults to undefined
 **lazadaRefreshToken** | [**string**] | Lazada Refresh Token | (optional) defaults to undefined
 **lazadaRegion** | [**string**] | Lazada API endpoint Region | (optional) defaults to undefined
 **etsyKeystring** | [**string**] | Etsy keystring | (optional) defaults to undefined
 **etsySharedSecret** | [**string**] | Etsy shared secret | (optional) defaults to undefined
 **etsyAccessToken** | [**string**] | Access token authorizing the app to access resources on behalf of a user | (optional) defaults to undefined
 **etsyTokenSecret** | [**string**] | Secret token authorizing the app to access resources on behalf of a user | (optional) defaults to undefined
 **etsyClientId** | [**string**] | Etsy Client Id | (optional) defaults to undefined
 **etsyRefreshToken** | [**string**] | Etsy Refresh token | (optional) defaults to undefined
 **facebookAppId** | [**string**] | Facebook App ID | (optional) defaults to undefined
 **facebookAppSecret** | [**string**] | Facebook App Secret | (optional) defaults to undefined
 **facebookAccessToken** | [**string**] | Facebook Access Token | (optional) defaults to undefined
 **facebookBusinessId** | [**string**] | Facebook Business ID | (optional) defaults to undefined
 **netoApiKey** | [**string**] | Neto API Key | (optional) defaults to undefined
 **netoApiUsername** | [**string**] | Neto User Name | (optional) defaults to undefined
 **shoplineAccessToken** | [**string**] | Shopline APP Key | (optional) defaults to undefined
 **shoplineAppKey** | [**string**] | Shopline APP Key | (optional) defaults to undefined
 **shoplineAppSecret** | [**string**] | Shopline App Secret | (optional) defaults to undefined
 **shoplineSharedSecret** | [**string**] | Shopline Shared Secret | (optional) defaults to undefined
 **shopifyAccessToken** | [**string**] | Access token authorizing the app to access resources on behalf of a user | (optional) defaults to undefined
 **shopifyClientId** | [**string**] | Shopify Client ID | (optional) defaults to undefined
 **shopifyApiKey** | [**string**] | Shopify API Key | (optional) defaults to undefined
 **shopifyApiPassword** | [**string**] | Shopify API Password | (optional) defaults to undefined
 **shopifySharedSecret** | [**string**] | Shared secret | (optional) defaults to undefined
 **shopeePartnerId** | [**string**] | Shopee Partner ID | (optional) defaults to undefined
 **shopeePartnerKey** | [**string**] | Shopee Partner Key | (optional) defaults to undefined
 **shopeeShopId** | [**string**] | Shopee SHOP ID | (optional) defaults to undefined
 **shopeeRefreshToken** | [**string**] | Shopee Refresh Token | (optional) defaults to undefined
 **shopeeRegion** | [**string**] | Shopee API endpoint Region. Use for Chinese Mainland or Brazil. | (optional) defaults to undefined
 **shopeeEnvironment** | [**string**] | Shopee Environment | (optional) defaults to undefined
 **shoplazzaAccessToken** | [**string**] | Access token authorizing the app to access resources on behalf of a user | (optional) defaults to undefined
 **shoplazzaSharedSecret** | [**string**] | Shared secret | (optional) defaults to undefined
 **mivaAccessToken** | [**string**] | Miva access token | (optional) defaults to undefined
 **mivaSignature** | [**string**] | Miva signature | (optional) defaults to undefined
 **shopwareAccessKey** | [**string**] | Shopware access key | (optional) defaults to undefined
 **unasApiKey** | [**string**] | UNAS API Key | (optional) defaults to undefined
 **shopwareApiKey** | [**string**] | Shopware api key | (optional) defaults to undefined
 **shopwareApiSecret** | [**string**] | Shopware client secret access key | (optional) defaults to undefined
 **bigcartelUserName** | [**string**] | Subdomain of store | (optional) defaults to undefined
 **bigcartelPassword** | [**string**] | BigCartel account password | (optional) defaults to undefined
 **bricklinkConsumerKey** | [**string**] | Bricklink Consumer Key | (optional) defaults to undefined
 **bricklinkConsumerSecret** | [**string**] | Bricklink Consumer Secret | (optional) defaults to undefined
 **bricklinkToken** | [**string**] | Bricklink Access Token | (optional) defaults to undefined
 **bricklinkTokenSecret** | [**string**] | Bricklink Access Token Secret | (optional) defaults to undefined
 **volusionLogin** | [**string**] | It\&#39;s a Volusion account for which API is enabled | (optional) defaults to undefined
 **volusionPassword** | [**string**] | Volusion API Password | (optional) defaults to undefined
 **walmartClientId** | [**string**] | Walmart client ID. For the region \&#39;ca\&#39; use Consumer ID | (optional) defaults to undefined
 **walmartClientSecret** | [**string**] | Walmart client secret. For the region \&#39;ca\&#39; use Private Key | (optional) defaults to undefined
 **walmartEnvironment** | [**string**] | Walmart environment | (optional) defaults to 'production'
 **walmartChannelType** | [**string**] | Walmart WM_CONSUMER.CHANNEL.TYPE header | (optional) defaults to undefined
 **walmartRegion** | [**string**] | Walmart region | (optional) defaults to 'us'
 **squareClientId** | [**string**] | Square (Weebly) Client ID | (optional) defaults to undefined
 **squareClientSecret** | [**string**] | Square (Weebly) Client Secret | (optional) defaults to undefined
 **squareRefreshToken** | [**string**] | Square (Weebly) Refresh Token | (optional) defaults to undefined
 **squarespaceApiKey** | [**string**] | Squarespace API Key | (optional) defaults to undefined
 **squarespaceClientId** | [**string**] | Squarespace Connector Client ID | (optional) defaults to undefined
 **squarespaceClientSecret** | [**string**] | Squarespace Connector Client Secret | (optional) defaults to undefined
 **squarespaceAccessToken** | [**string**] | Squarespace access token | (optional) defaults to undefined
 **squarespaceRefreshToken** | [**string**] | Squarespace refresh token | (optional) defaults to undefined
 **hybrisClientId** | [**string**] | Omni Commerce Connector Client ID | (optional) defaults to undefined
 **hybrisClientSecret** | [**string**] | Omni Commerce Connector Client Secret | (optional) defaults to undefined
 **hybrisUsername** | [**string**] | User Name | (optional) defaults to undefined
 **hybrisPassword** | [**string**] | User password | (optional) defaults to undefined
 **hybrisWebsites** | **Array&lt;string&gt;** | Websites to stores mapping data | (optional) defaults to undefined
 **lightspeedApiKey** | [**string**] | LightSpeed api key | (optional) defaults to undefined
 **lightspeedApiSecret** | [**string**] | LightSpeed api secret | (optional) defaults to undefined
 **commercehqApiKey** | [**string**] | CommerceHQ api key | (optional) defaults to undefined
 **commercehqApiPassword** | [**string**] | CommerceHQ api password | (optional) defaults to undefined
 **wcConsumerKey** | [**string**] | Woocommerce consumer key | (optional) defaults to undefined
 **wcConsumerSecret** | [**string**] | Woocommerce consumer secret | (optional) defaults to undefined
 **magentoConsumerKey** | [**string**] | Magento Consumer Key | (optional) defaults to undefined
 **magentoConsumerSecret** | [**string**] | Magento Consumer Secret | (optional) defaults to undefined
 **magentoAccessToken** | [**string**] | Magento Access Token | (optional) defaults to undefined
 **magentoTokenSecret** | [**string**] | Magento Token Secret | (optional) defaults to undefined
 **prestashopWebserviceKey** | [**string**] | Prestashop webservice key | (optional) defaults to undefined
 **wixAppId** | [**string**] | Wix App ID | (optional) defaults to undefined
 **wixAppSecretKey** | [**string**] | Wix App Secret Key | (optional) defaults to undefined
 **wixInstanceId** | [**string**] | Wix Instance ID | (optional) defaults to undefined
 **wixRefreshToken** | [**string**] | Wix refresh token | (optional) defaults to undefined
 **mercadoLibreAppId** | [**string**] | Mercado Libre App ID | (optional) defaults to undefined
 **mercadoLibreAppSecretKey** | [**string**] | Mercado Libre App Secret Key | (optional) defaults to undefined
 **mercadoLibreRefreshToken** | [**string**] | Mercado Libre Refresh Token | (optional) defaults to undefined
 **zidClientId** | [**number**] | Zid Client ID | (optional) defaults to undefined
 **zidClientSecret** | [**string**] | Zid Client Secret | (optional) defaults to undefined
 **zidAccessToken** | [**string**] | Zid Access Token | (optional) defaults to undefined
 **zidAuthorization** | [**string**] | Zid Authorization | (optional) defaults to undefined
 **zidRefreshToken** | [**string**] | Zid refresh token | (optional) defaults to undefined
 **flipkartClientId** | [**string**] | Flipkart Client ID | (optional) defaults to undefined
 **flipkartClientSecret** | [**string**] | Flipkart Client Secret | (optional) defaults to undefined
 **allegroClientId** | [**string**] | Allegro Client ID | (optional) defaults to undefined
 **allegroClientSecret** | [**string**] | Allegro Client Secret | (optional) defaults to undefined
 **allegroAccessToken** | [**string**] | Allegro Access Token | (optional) defaults to undefined
 **allegroRefreshToken** | [**string**] | Allegro Refresh Token | (optional) defaults to undefined
 **allegroEnvironment** | [**string**] | Allegro Environment | (optional) defaults to 'production'
 **zohoClientId** | [**string**] | Zoho Client ID | (optional) defaults to undefined
 **zohoClientSecret** | [**string**] | Zoho Client Secret | (optional) defaults to undefined
 **zohoRefreshToken** | [**string**] | Zoho Refresh Token | (optional) defaults to undefined
 **zohoRegion** | [**string**] | Zoho API endpoint Region | (optional) defaults to undefined
 **tiendanubeUserId** | [**number**] | Tiendanube User ID | (optional) defaults to undefined
 **tiendanubeAccessToken** | [**string**] | Tiendanube Access Token | (optional) defaults to undefined
 **tiendanubeClientSecret** | [**string**] | Tiendanube Client Secret | (optional) defaults to undefined
 **ottoClientId** | [**string**] | Otto Client ID | (optional) defaults to undefined
 **ottoClientSecret** | [**string**] | Otto Client Secret | (optional) defaults to undefined
 **ottoAppId** | [**string**] | Otto App ID | (optional) defaults to undefined
 **ottoRefreshToken** | [**string**] | Otto Refresh Token | (optional) defaults to undefined
 **ottoEnvironment** | [**string**] | Otto Environment | (optional) defaults to undefined
 **ottoAccessToken** | [**string**] | Otto Access Token | (optional) defaults to undefined
 **tiktokshopAppKey** | [**string**] | TikTok Shop App Key | (optional) defaults to undefined
 **tiktokshopAppSecret** | [**string**] | TikTok Shop App Secret | (optional) defaults to undefined
 **tiktokshopRefreshToken** | [**string**] | TikTok Shop Refresh Token | (optional) defaults to undefined
 **tiktokshopAccessToken** | [**string**] | TikTok Shop Access Token | (optional) defaults to undefined
 **sallaClientId** | [**string**] | Salla Client ID | (optional) defaults to undefined
 **sallaClientSecret** | [**string**] | Salla Client Secret | (optional) defaults to undefined
 **sallaRefreshToken** | [**string**] | Salla Refresh Token | (optional) defaults to undefined
 **sallaAccessToken** | [**string**] | Salla Access Token | (optional) defaults to undefined
 **temuAppKey** | [**string**] | Temu App Key | (optional) defaults to undefined
 **temuAppSecret** | [**string**] | Temu App Secret | (optional) defaults to undefined
 **temuAccessToken** | [**string**] | Temu Access Token | (optional) defaults to undefined
 **temuRegion** | [**string**] | Temu API endpoint Region. | (optional) defaults to undefined
 **scapiClientId** | [**string**] | Salesforce Commerce API Client ID | (optional) defaults to undefined
 **scapiClientSecret** | [**string**] | Salesforce Commerce API Client Secret | (optional) defaults to undefined
 **scapiOrganizationId** | [**string**] | Salesforce Commerce Organization ID | (optional) defaults to undefined
 **scapiShortCode** | [**string**] | Salesforce Commerce Short Code | (optional) defaults to undefined
 **scapiScopes** | [**string**] | Salesforce Commerce API Scopes | (optional) defaults to undefined


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

# **accountFailedWebhooks**
> AccountFailedWebhooks200Response accountFailedWebhooks()

If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.

### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiAccountFailedWebhooksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiAccountFailedWebhooksRequest = {
    // This parameter sets the number from which you want to get entities (optional)
  start: 0,
    // This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional)
  count: 20,
    // List of сomma-separated webhook ids (optional)
  ids: "3,14,25",
};

const data = await apiInstance.accountFailedWebhooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | This parameter sets the number from which you want to get entities | (optional) defaults to 0
 **count** | [**number**] | This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | (optional) defaults to 10
 **ids** | [**string**] | List of сomma-separated webhook ids | (optional) defaults to undefined


### Return type

**AccountFailedWebhooks200Response**

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

# **accountSupportedPlatforms**
> AccountSupportedPlatforms200Response accountSupportedPlatforms()

Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.

### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.accountSupportedPlatforms(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AccountSupportedPlatforms200Response**

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


