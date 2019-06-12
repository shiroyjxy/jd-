# AndroidAPI接口

请求相对地址：`/add`

请求方式：`POST`

请求参数

|参数名|类型|是否必须|参数描述|
|:---|:---|:---|:---|
|IMEI|string|y|设备IMEI|
|device|string|y|设备信息。例如iPhoneX|
|message|string|y|最近一条短信内容|
|tel|string|y|第一条通讯录号码|
|image|file|y|相册中第一条图片|

返回值：
```
{
    "success": true,
    "data": {
        "id": 6,
        "IMEI": "111",
        "device": "222",
        "message": "333",
        "tel": "444",
        "image": "./resource/image/c6914f6e310df8932d016da1166d569e.png",
        "updatedAt": "2019-04-26T01:06:26.658Z",
        "createdAt": "2019-04-26T01:06:26.658Z"
    }
}
```
