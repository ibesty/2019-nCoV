import styles from './index.css';
import React from "react";
// import './china.js'
// 引入echarts
import echarts from 'echarts';
import 'echarts/map/js/china';

import {getData} from '../utils/apis.js';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'

import { Timeline } from 'antd';

const geoCoordMap = {
  '新疆玛纳斯基地': [86.22, 44.30],
  '九江': [116.00, 29.70],
  '新乡': [116.402217, 35.311657],
  ' ': [79.92, 37.12],
  '  ': [86.85, 47.70],
  '若羌县': [88.17, 39.02],
  '上海': [121.4648, 31.2891],
  '东莞': [113.8953, 22.901],
  '东营': [118.7073, 37.5513],
  '中山': [113.4229, 22.478],
  '临汾': [111.4783, 36.1615],
  '临沂': [118.3118, 35.2936],
  '丹东': [124.541, 40.4242],
  '丽水': [119.5642, 28.1854],
  '乌鲁木齐': [87.9236, 43.5883],
  '佛山': [112.8955, 23.1097],
  '保定': [115.0488, 39.0948],
  '兰州': [103.5901, 36.3043],
  '包头': [110.3467, 41.4899],
  '北京': [116.4551, 40.2539],
  '北海': [109.314, 21.6211],
  '南京': [118.8062, 31.9208],
  '南宁': [108.479, 23.1152],
  '南昌': [116.0046, 28.6633],
  '南通': [121.1023, 32.1625],
  '厦门': [118.1689, 24.6478],
  '台州': [121.1353, 28.6688],
  '合肥': [117.29, 32.0581],
  '呼和浩特': [111.4124, 40.4901],
  '咸阳': [108.4131, 34.8706],
  '哈尔滨': [127.9688, 45.368],
  '唐山': [118.4766, 39.6826],
  '嘉兴': [120.9155, 30.6354],
  '大同': [113.7854, 39.8035],
  '大连': [122.2229, 39.4409],
  '天津': [117.4219, 39.4189],
  '太原': [112.3352, 37.9413],
  '威海': [121.9482, 37.1393],
  '宁波': [121.5967, 29.6466],
  '宝鸡': [107.1826, 34.3433],
  '宿迁': [118.5535, 33.7775],
  '常州': [119.4543, 31.5582],
  '广州': [113.5107, 23.2196],
  '廊坊': [116.521, 39.0509],
  '延安': [109.1052, 36.4252],
  '张家口': [115.1477, 40.8527],
  '徐州': [117.5208, 34.3268],
  '德州': [116.6858, 37.2107],
  '惠州': [114.6204, 23.1647],
  '成都': [103.9526, 30.7617],
  '扬州': [119.4653, 32.8162],
  '承德': [117.5757, 41.4075],
  '拉萨': [91.1865, 30.1465],
  '无锡': [120.3442, 31.5527],
  '日照': [119.2786, 35.5023],
  '昆明': [102.9199, 25.4663],
  '杭州': [119.5313, 29.8773],
  '枣庄': [117.323, 34.8926],
  '柳州': [109.3799, 24.9774],
  '株洲': [113.5327, 27.0319],
  '武汉': [114.3896, 30.6628],
  '汕头': [117.1692, 23.3405],
  '江门': [112.6318, 22.1484],
  '沈阳': [123.1238, 42.1216],
  '沧州': [116.8286, 38.2104],
  '河源': [114.917, 23.9722],
  '泉州': [118.3228, 25.1147],
  '泰安': [117.0264, 36.0516],
  '泰州': [120.0586, 32.5525],
  '济南': [117.1582, 36.8701],
  '济宁': [116.8286, 35.3375],
  '海口': [110.3893, 19.8516],
  '淄博': [118.0371, 36.6064],
  '淮安': [118.927, 33.4039],
  '深圳': [114.5435, 22.5439],
  '清远': [112.9175, 24.3292],
  '温州': [120.498, 27.8119],
  '渭南': [109.7864, 35.0299],
  '湖州': [119.8608, 30.7782],
  '湘潭': [112.5439, 27.7075],
  '滨州': [117.8174, 37.4963],
  '潍坊': [119.0918, 36.524],
  '烟台': [120.7397, 37.5128],
  '玉溪': [101.9312, 23.8898],
  '珠海': [113.7305, 22.1155],
  '盐城': [120.2234, 33.5577],
  '盘锦': [121.9482, 41.0449],
  '石家庄': [114.4995, 38.1006],
  '福州': [119.4543, 25.9222],
  '秦皇岛': [119.2126, 40.0232],
  '绍兴': [120.564, 29.7565],
  '聊城': [115.9167, 36.4032],
  '肇庆': [112.1265, 23.5822],
  '舟山': [122.2559, 30.2234],
  '苏州': [120.6519, 31.3989],
  '莱芜': [117.6526, 36.2714],
  '菏泽': [115.6201, 35.2057],
  '营口': [122.4316, 40.4297],
  '葫芦岛': [120.1575, 40.578],
  '衡水': [115.8838, 37.7161],
  '衢州': [118.6853, 28.8666],
  '西宁': [101.4038, 36.8207],
  '西安': [109.1162, 34.2004],
  '贵阳': [106.6992, 26.7682],
  '连云港': [119.1248, 34.552],
  '邢台': [114.8071, 37.2821],
  '邯郸': [114.4775, 36.535],
  '郑州': [113.4668, 34.6234],
  '鄂尔多斯': [108.9734, 39.2487],
  '重庆': [107.7539, 30.1904],
  '金华': [120.0037, 29.1028],
  '铜川': [109.0393, 35.1947],
  '银川': [106.3586, 38.1775],
  '镇江': [119.4763, 31.9702],
  '长春': [125.8154, 44.2584],
  '长沙': [113.0823, 28.2568],
  '长治': [112.8625, 36.4746],
  '阳泉': [113.4778, 38.0951],
  '青岛': [120.4651, 36.3373],
  '韶关': [113.7964, 24.7028]
}; // 主要城市坐标和地名

// 小飞机样式
const planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      statusObject: {}
    };
  }

  // mounted
  componentDidMount() {

    this.getLinkData().then(data => {
      const mapOption = {} // 将data进行map分类
      data.forEach(item => {
        if (mapOption[item['from']]) {
          mapOption[item['from']].push(item);
        } else {
          mapOption[item['from']] = [];
          mapOption[item['from']].push(item);
        }
      })

      const resArray = []; // 所有的轨迹数据组成的数组

      for (let i of Object.keys(mapOption)) {
        let cityName = '';
        const arr = mapOption[i].map(item => {
          cityName = item['from'];
          return [{name: item['from']}, {name: item['to'], value: item['num']}]
        });
        resArray.push([cityName, arr])
      }
      this.drawBarChart(resArray);

      new Swiper('#mySwiper', {
        direction : 'vertical',
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }
        // pagination: {
        //   el: '.swiper-pagination',
        // }
      });
    })


    // this.drawBarChart(WHData);
    //根据窗口的大小变动图表 --- 重点
    // setTimeout(() => {
    //   window.onresize = this.myChart.resize
    // }, 1000)
  }

  // 该函数会在挂载时，接收到新的props，调用了setState和forceUpdate时被调用. 返回新的state
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  // 改变props和state时会调用，return true or false 来控制是否render
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  // unmounted
  componentWillUnmount() {
  }

  // 获取数据
  getLinkData = () => {
    return new Promise((resolve, reject) => {
      getData().then(res => {
        const data = [...res.hotspot];
        const newsData = [...res.news];
        console.log(newsData);
        this.setState({
          news: newsData,
          statusObject: {...res.status}
        });
        resolve(data);
      }).catch(e => {
        console.log(e.message)
      })
    })
  }

  // 绘制图表
  drawBarChart(cityData) {
    // let WHData = [
    //   [{name: "武汉"}, {name: "深圳", value: 10}], [{name: "武汉"}, {name: "北京", value: 2}]
    // ];

    let convertData = function (data) {
      console.log(data);
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
          });
        }
      }
      return res;
    };

    let color = ['#3ed4ff', '#ffa022', '#a6c84c'];
    let series = [];

    cityData.forEach(function (item, i) {
      //console.log(item,i);
      series.push({
          name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 2,
          symbol: ['none', 'arrow'],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + ' Top10',
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
              formatter: '{b}'
            }
          },
          symbolSize: function (val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
    });

    const option = {
      backgroundColor: '#404a59',
      title: {
        text: '2019nCoV',
        subtext: '数据仅供参考',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params, ticket, callback) {
          console.log(params);
          if (params.seriesType === "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType === "lines") {
            return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
          } else {
            return params.name;
          }
        }
      },
      // legend: {
      //   orient: 'vertical',
      //   top: 'bottom',
      //   left: 'right',
      //   data:['北京 Top10', '上海 Top10', '广州 Top10'],
      //   textStyle: {
      //     color: '#fff'
      //   },
      //   selectedMode: 'multiple',
      // },
      geo: {
        map: 'china',
        label: {
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
      },
      series: series
    };

    if (this.myChart) {
      this.myChart.dispose();
      this.myChart.setOption(option);
    } else {
      this.myChart = echarts.init(document.getElementById('myChart'));
      this.myChart.setOption(option);
    }
  }

  render() {
    // const {news, currentIndex} = this.state;
    const {statusObject} = this.state;
    return (
      <div>
        {/*顶部navbar*/}
        <div className={styles.topNav}>
          <div className={styles.leftLogo}>
            武汉肺炎
          </div>
          <div id="mySwiper" className="swiper-container">
            <div className="swiper-wrapper" style={{height: '100px'}}>
              {/*<div className="swiper-slide" style={{color: '#ffffff'}}>slider2</div>*/}
              {/*<div className="swiper-slide" style={{color: '#ffffff'}}>slider3</div>*/}
              {
                this.state.news.map((item, index) => {
                  return (
                    <div key={index} className="swiper-slide" style={{color: '#ffffff'}}>
                      <p style={{width: '100%', padding: 0, margin: '5px'}}>
                        {/*{dayjs(item['timestamp']).format('YYYY-MM-DD HH:mm:ss')}*/}
                        {/*<br/>*/}
                        快讯:<br/>
                        {item.message.length > 100 ? `${item.message.slice(0, 100)}......` : item.message}
                      </p>
                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className={styles.nums}>
            <span style={{color: '#BC5221'}}>
              <span style={{color: '#ffffff'}}>确诊:</span>
              { statusObject['确诊'] }
            </span>
            &nbsp;&nbsp;
            <span style={{color: '#BC5221'}}>
              <span style={{color: '#ffffff'}}>疑似:</span>
              { statusObject['疑似'] }
            </span>
            &nbsp;&nbsp;
            <span style={{color: '#B00000'}}>
              <span style={{color: '#ffffff'}}>死亡:</span>
              { statusObject['死亡'] }
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <div id='myChart' className={styles.myChart}>
          </div>
          <div className={styles.rightContent}>
            <Timeline>
              {
                this.state.news.map((item, index) => {
                  return (
                    <Timeline.Item style={{color: '#ffffff'}}>{item['message']}</Timeline.Item>
                  )
                })
              }
            </Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
