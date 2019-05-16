<template>
  <div class="content">
    <div class="seven_echarts"  id="seven"></div>
    <div class="demo1_echarts"  id="demo1"></div>

    <div class="demo2_echarts"  id="demo2"></div>
    <div class="demo3_echarts"  id="demo3"></div>
    <div class="demo4_echarts"  id="demo4"></div>


  </div>

</template>

<script>
  export default {
    name: "demo2",

    data() {
      return {
        seven_chart: null,
        demo1_chart: null,
        demo2_chart: null,
        demo3_chart: null,

        seven_option: {
          title: {
            text: 'GRAPES降水检测',//感觉头部有点乱，没使用自带的标题
            x: 'left',
            align: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [{name: 'T639'},
              {name: 'GRAPES'},
              {name: 'GRAPESPAR'}],
            bottom: 350,
            left: 100,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              magicType: {
                type: ['line']//这里添加图表样式，如['line','bar']折现加柱状
              }
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1DEC", "6DEC", "11DEC", "16DEC", "21DEC", "26DEC", "31DEC"]
          },
          yAxis: {
            nameLocation: 'end',
            type: 'value',
            axisLabel: {
              formatter: '{value} '
            }
          },
          series: [
            {
              name: 'GRAPES',
              data: [0.8, 0.79, 0.72, 0.86, 0.81, 0.77, 0.82],
              type: 'line',
              symbol: 'triangle',//三角形
              symbolSize: 10,//三角大小
              lineStyle: {
                normal: {//虚线
                  color: 'red',
                  type: 'dashed'
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 3,
                  borderColor: 'red',
                  color: 'red'
                }
              }
            },
            /* {
                  name:'最低气温',
                  type:'line',
                  data:[0,-1,-3,-4,0,-2,-4],
                  lineStyle:{//设置折线色颜色
                    color:'#3f89ec'
                  },
                  itemStyle:{//设置折线折点的颜色
                    normal : {
                      color:'#3f89ec'
                    }
                  }
                },*/
            {
              name: 'T639',
              type: 'line',
              data: [0.85, 0.7, 0.82, 0.79, 0.88, 0.77, 0.89],
              lineStyle: {//设置折线色颜色,不设置默认为红
                color: 'black'
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: 'black'
                }
              }
            },
            /* {
                  name:'GRAPES',
                  type:'line',
                  data:[0.68,0.75,0.68,0.84,0.98,0.77,0.89],
                  lineStyle:{//设置折线色颜色,不设置默认为红
                    color:'red'
                  },
                  itemStyle:{//设置折线折点的颜色
                    normal : {
                      color:'red'
                    }
                  }
                },*/
            {
              name: 'GRAPESPAR',
              type: 'line',
              data: [0.8, 0.85, 0.78, 0.84, 0.88, 0.87, 0.89],
              symbol: 'image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557829283004&di=dc38a9a4e512949084b45a9260e9a963&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D2675801298%2C2422093698%26fm%3D191%26app%3D48%26wm%3D1%2C17%2C90%2C45%2C20%2C7%26wmo%3D0%2C0%26n%3D0%26g%3D0n%26f%3DJPEG%3Fsec%3D1853310920%26t%3D6cb8c84bc4e3e8e0443f3972bfc09717',//三角形  小圆点pin 菱形diamond  朝上箭头arrow  圆边正方形roundRect rect 圆circle
              symbolSize: 10,
              lineStyle: {//设置折线色颜色,不设置默认为红
                normal: {//虚线属性
                  color: 'green',
                  type: 'dashed'//虚线dashed
                }
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: 'green'
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 3,
                  borderColor: 'green',
                  color: 'green'
                }
              }
            },
            /* {
                  name:'平行于y轴的趋势线',
                  type:'line',
                  markLine: {
                    name:'aa',
                    data: [
                      {
                        name: '0℃标准线',
                        yAxis: 0,
                        lineStyle:{//设置折线色颜色
                          color:'red'
                        },
                      },
                    ],
                    symbol: ['arrow', 'none'],//将箭头向左  默认值是向右的
                    label:{
                      show:true,
                      position:'middle',//markline描述位于中间   right，left，middle
                      formatter: '{b}: {c}',//显示name中的描述
                    }
                  }
                }*/
          ],
        },
        demo1_option: {
          title: {
            text: 'ACCCCCCCCCC-----------',//感觉头部有点乱，没使用自带的标题
            x: 'left',
            align: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [{name: 'T639'},
              {name: 'GRAPES'},
              {name: 'GRAPESPAR'}],
            bottom: 350,
            left: 100,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            axisLine: {onZero: false},
            axisLabel: {
              formatter: '{value} '
            },
            boundaryGap: false,
            data: ['49', '96', '144', '192', '240']

          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} '
            }
          },
          series: [
            {
              name: 'AC',
              type: 'line',
              smooth: true,
              lineStyle: {
                normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetY: 10
                }
              },
              data: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]
            }
          ]
        },
        demo2_option: {
          title: {
            text: 'demo2',//感觉头部有点乱，没使用自带的标题
            // subtext: '纯属虚构'
            x: 'left',
            align: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['最高气温', '最低气温',]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              magicType: {type: 'line'},//柱状图和西和折线图切换
              //restore: {},//刷新
              saveAsImage: {},//保存图片
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["0", "46", "96", "144", "192", "240"]
          },
          yAxis: {

            nameLocation: 'end',
            type: 'value',
            axisLabel: {
              formatter: '{value} '
            }
          },
          series: [
            {
              name: 'A',
              type: 'line',
              smooth: true,//控制弧度
              data: [0, -0.03, -0.06, -0.09, -0.12,0, 0.03, 0.06, 0.09, 0.12,0.15],
              lineStyle: {//设置折线色颜色
                color: '#3f89ec'
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: '#3f89ec'
                }
              }
            },
            {
              name: 'B',
              type: 'line',
              smooth: true,
              data: [0, 0.15,0.03,0.042,0.055, 0.06, 0.09, 0.12,0.15],
              lineStyle: {//设置折线色颜色
                color: 'black'
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: 'black'
                }
              }
            },
            {
              name: '平行于y轴的趋势线',
              type: 'line',
              markLine: {
                name: 'aa',
                data: [
                  {
                    name: '标准线',
                    yAxis: 0,
                    lineStyle: {//设置折线色颜色
                      color: 'red'
                    },
                  },
                ],
                symbol: ['none'],//将箭头向左  默认值是向右的
                label: {
                  show: true,
                  position: 'middle',//markline描述位于中间   right，left，middle
                  formatter: '{b}: {c}',//显示name中的描述
                }
              }
            },
            {
              name:'barC',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: 'rgba(255, 255, 255, 0)',
                  barBorderColor: 'green',
                  barBorderWidth: 1,
                  barBorderRadius: 0,
                }
              },
              silent: true,
              barWidth: 50,
              barGap: '-130%', // Make series be overlap
              data: [0.17, 0.18, 0.05, 0.12]
            },
            {
            name:'barD',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: 'rgba(255, 255, 255, 0)',
                  // color: 'rgba(128, 128, 128, 0.1)',

                  barBorderColor: 'red',
                  barBorderWidth: 1,
                  barBorderRadius: 0,
                }
              },
              barWidth: 70,
              //z: 10,
              data: [0.1, 0.15, 0.12, 0.17]
            }

          ],
        },
        demo3_option:{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        },
        demo4_option:{
          title : {
            text: '温度计式图表',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AizJXrAEa'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              //type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params){
              return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
            }
          },
          legend: {
            selectedMode:false,
            data:[{name:'Acutal',z:2},{name: 'Forecast',z:4,buttom:20}]
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              data : ['Cosco','CMA','APL','OOCL','Wanhai','Zim']
            }
          ],
          yAxis : [
            {
              type : 'value',
              boundaryGap: [0, 0.1]
            }
          ],
          series : [
            {
              name:'Acutal',
              type:'bar',
              stack: 'sum',
              barCategoryGap: '50%',
              itemStyle: {
                normal: {
                  color: '#fff',
                  barBorderColor: 'tomato',
                  barBorderWidth: 1,
                  barBorderRadius:0,
                  label : {
                    show: true, position: 'insideTop'
                  }
                }
              },

              data:[260, 200, 220, 120, 100, 80]
            },
            {
              name:'Forecast',
              type:'bar',
              stack: 'sum',
              itemStyle: {
                normal: {
                  color: '#fff',
                  barBorderColor: 'tomato',
                  barBorderWidth: 1,
                  barBorderRadius:0,
                  label : {
                    show: true,
                    position: 'top',
                    textStyle: {
                      color: 'tomato'
                    }
                  }
                }
              },

              data:[40, 80, 50, 80,80, 70]

            }

          ]
        }



          }

    },

    mounted:function (){
      this.get_echarts();
      //this.get_demo1();
      this.get_demo2();
      this.get_demo3()
      this.get_demo4()
    },
    methods:{
      get_echarts:function(){
        this.seven_chart = this.echarts.init(document.getElementById("seven"));
        // 把配置和数据放这里
        this.seven_chart.setOption(this.seven_option)

      },
      get_demo1:function(){
        this.demo1_chart = this.echarts.init(document.getElementById("demo1"));
            // 把配置和数据放这里
            this.demo1_chart.setOption(this.demo1_option)
      },
      get_demo2:function(){

        this.demo2_chart = this.echarts.init(document.getElementById("demo2"));
        // 把配置和数据放这里
        this.demo2_chart.setOption(this.demo2_option)
      },
      get_demo3:function(){

        this.demo3_chart = this.echarts.init(document.getElementById("demo3"));
        // 把配置和数据放这里
        this.demo3_chart.setOption(this.demo3_option)
      },
      get_demo4:function(){

        this.demo4_chart = this.echarts.init(document.getElementById("demo4"));
        // 把配置和数据放这里
        this.demo4_chart.setOption(this.demo4_option)
      }

    },

  }
</script>

<style scoped>
 .content{ width:800px; height:800px}
 .content p{  color: #666666; }
 .seven_echarts{ height: 600px; width:700px; }
/*
 .demo1_echarts{ height: 600px; width:700px; }
*/

 .demo2_echarts{ height: 600px; width:700px; }
 .demo3_echarts{ height: 600px; width:700px; }

 .demo4_echarts{ height: 600px; width:700px; }
</style>
