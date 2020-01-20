# 2019-nCoV
武汉肺炎 - 2019-nCoV

# 数据接口
请求方式：POST
请求链接：https://api.st.link/angelia/2019ncov
返回简要说明：
errcode：错误码：0表示正常；-1表示错误
timestamp：服务端当前时间戳
news：最新的50条新闻
hotpot：用于绘制地图点聚合的坐标和数量
返回结果样例：
```
{
    "errcode": 0,
    "timestamp": 1579501665,
    "news": [
        {
            "msgid": "0747ac5b-76c8-40ef-b5d3-c7ea8386c266",
            "message": "北京2名发热患者确诊感染新型冠状病毒，曾到访武汉，已隔离治疗，无呼吸道症状",
            "timestamp": 1579478400
        },
        {
            "msgid": "542dc99e-7521-45bc-a4f7-3f3dd38e52e6",
            "message": "湖北武汉新增136例，累计198例，出院25例，重症35例，危重症9例，死亡3例",
            "timestamp": 1579478400
        },
        {
            "msgid": "68e119c3-77e7-4286-aa74-a6ca197af7a2",
            "message": "韩国一例确诊病例",
            "timestamp": 1579478400
        }
    ],
    "hotpot": [
        {
            "area": "武汉",
            "lng": 30.592849,
            "lat": 114.305539,
            "num": 198
        },
        {
            "area": "深圳",
            "lng": 22.543096,
            "lat": 114.057865,
            "num": 19
        },
        {
            "area": "北京",
            "lng": 116.391433,
            "lat": 39.901843,
            "num": 2
        }
    ]
}
```