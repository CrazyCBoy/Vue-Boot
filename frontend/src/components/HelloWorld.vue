<template>
  <div >
    <!-- 折线图 -->

    <div id="chartmainline" style="width:320px; height:300px;"></div>

    <div id="chartmainline1" style="width:320px; height:300px;"></div>


    <div id="chartmainline2" style="width:320px; height:300px;"></div>

    <div id="chartmainline3" style="width:320px; height:300px;"></div>
    
  </div>
</template>

<script>
  const echarts = require("echarts");
export default {
  name: 'HelloWorld',
  data(){
    return{
      optionline:{
        title:{
          text:'ECharts 数据统计'
        },
        tooltip:{},
        legend:{
          data:['用户来源']
        },
        xAxis:{
          data:["Android","IOS","PC","Ohter","AA","BB"]
        },
        yAxis:{
        },
        series:[{
          name:'访问量',
          type:'line', //设置图表主题
          data:[500,200,360,100,50,10]
        }]
      },
      optionline1:{
        title:{
          text:'ECharts 数据统计1'
        },
        tooltip:{},
        legend:{
          data:['用户来源']
        },
        xAxis:{
          data:["Android","IOS","PC","Ohter","AA","BB"]
        },
        yAxis:{
        },
        series:[{
          name:'访问量',
          type:'line', //设置图表主题
          data:[500,200,360,100,50,10]
        }]
      },
      optionline2:{
        title:{
          text:'ECharts 数据统计2'
        },
        tooltip:{},
        legend:{
          data:['用户来源']
        },
        xAxis:{
          data:["Android","IOS","PC","Ohter","AA","BB"]
        },
        yAxis:{
        },
        series:[{
          name:'访问量',
          type:'line', //设置图表主题
          data:[500,200,360,100,50,10]
        }]
      },
      optionline3:{
        title:{
          text:'ECharts 数据统计3'
        },
        tooltip:{},
        legend:{
          data:['用户来源']
        },
        xAxis:{
          data:["Android","IOS","PC","Ohter","AA","BB"]
        },
        yAxis:{
        },
        series:[{
          name:'访问量',
          type:'line', //设置图表主题
          data:[500,200,360,100,50,10]
        }]
      },
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine: function(){
      //基于准本好的DOM，初始化echarts实例
      let chartmainline = this.$echarts.init(document.getElementById("chartmainline"));
      let chartmainline1 = this.$echarts.init(document.getElementById("chartmainline1"),'light');

      let chartmainline2 = this.$echarts.init(document.getElementById("chartmainline2"),'light');

      let chartmainline3 = this.$echarts.init(document.getElementById("chartmainline3"),'light');

      //绘制图表
      chartmainline.setOption(this.optionline);
      chartmainline1.setOption(this.optionline1);

      chartmainline2.setOption(this.optionline2);

      chartmainline3.setOption(this.optionline3);

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    display: inline-block;
    width: 50%;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
