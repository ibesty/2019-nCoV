import React, { useState, useEffect, useCallback } from 'react'
import axois from 'axios'

import echarts from 'echarts'
import 'echarts/map/js/china'
import ReactEcharts from "echarts-for-react"

import styles from './index.module.scss'

// import mockGet from './data'

import Timeline from '../../components/timeline/index'

const api = 'https://api.st.link/angelia/2019ncov'

function getCityCoord(name) {
  const city = window.citys.find(c => c.name.indexOf(name) === 0)
  if (city) {
    return city.lnglat
  }
  return []
}

function setCitysCount(spots) {
  let citys = []
  for (let s of spots) {
    const findedCity = citys.find(c => c.name === s.to)
    if (findedCity) {
      findedCity.symbolSize = s.num
    } else {
      citys.push({
        name: s.from,
        value: getCityCoord(s.from),
        "symbolSize": 2,
        "itemStyle": {
          "normal": {
            "color": "red"
          }
        }
      })
    }
    citys.push({
      name: s.to,
      value: getCityCoord(s.to),
      "symbolSize": s.num,
      "itemStyle": {
        "normal": {
          "color": "red"
        }
      }
    })
  }

  return citys
}

export default () => {
  const [spots, setSpots] = useState([])
  const [news, setNews] = useState([])
  const [status, setStatus] = useState({})

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axois.post(api)
      // const data = await mockGet()
      // console.log(data)
      if (data.errcode === 0) {
        const { news, hotspot, status } = data
        setNews(news)
        setSpots(hotspot)
        setStatus(status)
      }
    } catch (error) {
      console.error(error)
    }
  })

  useEffect(() => {
    fetchData()
  }, [])

  const getOption = useCallback((hotspot = []) => {
    const routes = hotspot.map(spot => {
      return {
        "fromName": spot.from,
        "toName": spot.to,
        "coords": [
          getCityCoord(spot.from),
          getCityCoord(spot.to)
        ]
      }
    });

    const citys = setCitysCount(spots)
    // console.log(citys)

    let option = {
      backgroundColor: '#404a59',
      // title: {
      //   text: '武汉新型冠状病毒热点追踪',
      //   left: 'center',
      //   textStyle: {
      //     color: '#fff'
      //   }
      // },
      legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'china',
        label: {
          // normal: {
          //   show: true,
          //   color: '#999'
          // },
          emphasis: {
            show: true,
            color: '#fff'
          }
        },

        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#404a59'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      }
    }

    // if (hotspot.length > 0) {
    // console.log(citys)
    option.series = [{
      name: '地点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}',
          fontSize: 6
        },
        // emphasis: {
        //   show: true,
        //   position: 'right',
        //   formatter: '{a}'
        // }
      },
      symbolSize: 2,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          color: '#46bee9'
        }
      },
      data: citys
    }, {
      name: '线路',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      large: true,
      effect: {
        show: true,
        constantSpeed: 30,
        symbol: 'pin',
        symbolSize: 3,
        trailLength: 0,
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F58158'
          }, {
            offset: 1,
            color: 'red'
          }], false),
          width: 1,
          opacity: 0.2,
          curveness: 0.1
        }
      },
      data: routes
    }]
    // }

    // console.log(routes)
    // console.log(option)
    return option
  }, [spots])

  return (
    <div className={styles['index']}>
    <div className={styles['header']}>
      <div className={styles['title']}>武汉新型冠状病毒肺炎热点追踪</div>
      <div className={styles['status']}>
        <div>确诊: {status['确诊']}</div>
        {/* <div>疑似: {status['疑似']}</div> */}
        <div>死亡: {status['死亡']}</div>
      </div>
    </div>
      <ReactEcharts
        id="map" className={styles['map']}
        option={getOption(spots)}
      />
      <Timeline news={news}/>
      {/* <div id="map" className={styles['map']}></div> */}
    </div>
  )
}