<template>
  <div class="content">
    <div class="demo1_echarts"  id="demo1"></div>
    <div class="demo2_echarts"  id="demo2"></div>
    <div class="demo3_echarts"  id="demo3"></div>
  </div>

</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "demo3",
    data() {
      return {
        demo1_chart: null,
        demo1_option: {
          xAxis: {
            data: ['a', 'b', 'c', 'd'],
            axisTick: {show: false},
            axisLabel: {
              //formatter: 'barGap: \'-100%\''
            }
          },
          yAxis: {
            splitLine: {show: false}
          },
          animationDurationUpdate: 1200,
          series: [{
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
            barGap: '-100%', // Make series be overlap
            data: [60, 60, 60, 60]
          }, {
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
            z: 10,
            data: [100, 60, 70, 25]
          }]
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
            data: ['', '',]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            //containLabel: true
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
                color: 'red'
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: 'red'
                }
              }
            },
            {
              name: 'B',
              type: 'line',
              smooth: true,
              data: [0, 0.15,0.03,0.042,0.055, 0.06, 0.09, 0.12,0.15],
              lineStyle: {//设置折线色颜色
                color: 'green'
              },
              itemStyle: {//设置折线折点的颜色
                normal: {
                  color: 'green'
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
              data: [0, 0.15,0.03,0.042,0.055, 0.06, 0.09, 0.12,0.15],
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
              data: [0, -0.03, -0.06, -0.09, -0.12,0, 0.03, 0.06, 0.09, 0.12,0.15],
            }
            /*{
              name: 'boxplot',
              type: 'boxplot',
              data: [0, 0.15,0.03,0.042,0.055, 0.06, 0.09, 0.12,0.15],
              tooltip: {
                formatter: function (param) {
                  return [
                    'Experiment ' + param.name + ': ',
                    'upper: ' + param.data[5],
                    'Q3: ' + param.data[4],
                    'median: ' + param.data[3],
                    'Q1: ' + param.data[2],
                    'lower: ' + param.data[1]
                  ].join('<br/>');
                }
              }
            },
            {
              name: 'outlier',
              type: 'scatter',
              data: [0, 0.15,0.03,0.042,0.055, 0.06, 0.09, 0.12,0.15],
            }*/
          ],
        },
        demo3_option:{
          xAxis: {
            data: [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
          },
          yAxis: {
            splitArea: {
              show: false
            }
          },
          series: [
            {
              type: 'boxplot',
              data: [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],

            },

          ]
        }
          }
    },

    mounted:function (){
      //this.get_demo1();
      this.get_demo2();
      this.get_demo3();
    },
    methods:{
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

    },

  }
</script>

<style scoped>
 .content{ width:900px; height:800px;margin:0 auto}
 .content p{  color: #666666; }

/*
 .demo1_echarts{ height: 600px; width:700px; }
*/

 .demo2_echarts{ height: 600px; width:600px; }
 .demo3_echarts{ height: 600px; width:600px; }

</style>
