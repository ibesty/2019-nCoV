export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        "errcode": 0,
        "timestamp": 1579540468,
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
          },
          {
            "msgid": "ed069ecc-c5e2-4b5b-bb58-7e7ff20c3fe4",
            "message": "广东深圳66岁男性，曾到访武汉。1月3日出现发热，4日回到深圳。11日转移至隔离医院，18日标本送中国疾控中心检测呈阳性，19日正式确认感染",
            "timestamp": 1579478400
          },
          {
            "msgid": "2b2aad77-fc63-4a55-b7b5-d997ef48d86f",
            "message": "湖北武汉新增17例，累计62例，出院15例，重症8例，死亡2例",
            "timestamp": 1579305600
          },
          {
            "msgid": "32c58724-47ee-4b4b-806e-2717ab77ecb0",
            "message": "泰国曼谷74岁中国籍女子，其于1月13日抵达泰国",
            "timestamp": 1579219200
          },
          {
            "msgid": "d671786f-9542-4b49-a7be-c7ee642af618",
            "message": "湖北武汉新增4例，累计45例，出院15例，重症5例，死亡2例",
            "timestamp": 1579219200
          },
          {
            "msgid": "558ba8e0-6e66-43cc-bb2b-77b0097397c8",
            "message": "日本神奈川县30+岁男性，曾到访武汉。1月3日出现发热，6日回到日本。15日已经出院，但在中国的家人仍在进行观察",
            "timestamp": 1579132800
          },
          {
            "msgid": "a18738ee-6398-4d97-8c03-85b21de04417",
            "message": "湖北武汉新增死亡1例，男性，69岁\r\n累计41例，出院12例，重症5例，死亡2例",
            "timestamp": 1579046400
          },
          {
            "msgid": "8f7bd7ab-2d52-4fd4-8561-9173c1b62ebb",
            "message": "泰国曼谷于1月8日武汉-曼谷航班，检测出疑似病例，61岁中国籍女性。后经实验室确认为新型冠状病毒。报道发布时情况稳定好转",
            "timestamp": 1578873600
          },
          {
            "msgid": "a0f9f123-a478-4030-ae5f-633f0ccb93c8",
            "message": "湖北武汉报告首例死亡\r\n累计41例（排除若干无相关病例），出院2例、重症7例",
            "timestamp": 1578700800
          },
          {
            "msgid": "06633f9f-4eee-4184-b9c6-5a14fda07ee3",
            "message": "湖北武汉不明原因肺炎患者44例，其中重症11例",
            "timestamp": 1578009600
          },
          {
            "msgid": "c8888a5b-2915-45ff-8add-496bf1f3c84f",
            "message": "湖北武汉出现27例不明原因肺炎病例，其中7例严重",
            "timestamp": 1577750400
          }
        ],
        "hotspot": [
          {
            "from": "武汉",
            "to": "深圳",
            "num": 10
          },
          {
            "from": "武汉",
            "to": "北京",
            "num": 2
          },
          {
            "from": "北京",
            "to": "深圳",
            "num": 1
          }
        ]
      })
    }, 1000);
  })
}