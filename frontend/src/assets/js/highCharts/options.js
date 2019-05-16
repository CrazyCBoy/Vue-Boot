module.exports = {
    bar: {
         chart: {
           type: 'columnrange',
           inverted: false
         },
         title: {
           text: 'Temperature variation by month'
         },
         subtitle: {
           text: 'Observed in Vik i Sogn, Norway, 2017'
         },
         xAxis: {
           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
         },
         yAxis: {
           title: {
             text: 'Temperature ( °C )'
           }
         },
         tooltip: {
           valueSuffix: '°C'
         },
         plotOptions: {
           columnrange: {
             //groupPadding :-0.1,
             //pointPadding : 5,
             //pointWidth: 30 ,
             groupPadding :0.5,
             dataLabels: {
               enabled: true,
               format: '{y}',
               // 设置每个柱自身的宽度
               //pointWidth :
               // x轴每个点只用一个柱，则这个属性设置的是相邻的两个点的柱之间的间距。
               // 如果x轴每个点有2个柱，则这个属性设置的是左侧点的右柱与右侧点的左柱之间的间距。
               // 0.5的含义是，如果x轴长100px,则间距是100*0.5=50px
               // 如果x轴一个点有两个柱，则这个属性设置的是这两个柱的间距。
               //groupPadding :-10 ,
               //设置柱子宽度
             }
           }
         },
         legend: {
           enabled: false
         },
         series: [{
           name: 'Temperatures',
           borderWidth: 2,
           borderColor:'black',
           color: 'rgba(255, 255, 255, 0)',
           pointWidth:40,
           data: [
             [-9.9, 10.3],
             [-8.6, 8.5],
             [-10.2, 11.8],
             [-1.7, 12.2],
             [-0.6, 23.1],
             [3.7, 25.4],
             [6.0, 26.2],
             [6.7, 21.4],
             [3.5, 19.5],
             [-1.3, 16.0],
             [-8.7, 9.4],
             [-9.0, 8.6]
           ]
         },
           {
             name: 'Temperatures',
             borderWidth: 2,
             borderColor:'red',
             color: 'rgba(255, 255, 255, 0)',
             pointWidth:30,
             data: [
               [-9.0, 12.3],
               [-7.6, 9.5],
               [-10.2, 14.8],
               [-13.5, 17.2],
               [-0.6, 23.1],
               [3.7, 25.4],
               [6.0, 26.2],
               [6.7, 21.4],
               [3.5, 19.5],
               [-1.3, 16.0],
               [-8.7, 9.4],
               [-9.0, 8.6]
             ]
           }]
       }

    /*bar: {
      chart: {
        type:'column'//指定图表的类型，默认是折线图（line）
      },
      credits: {
        enabled:false
      },//去掉地址
      title: {
        text: '我的第一个图表' //指定图表标题
      },
      colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
        '#24CBE5'  ],
      xAxis: {
        categories: ['1号', '2号', '3号','3号','3号'] //指定x轴分组
      },
      yAxis: {
        title: {
          text: '最近七天', //指定y轴的标题

        },
      },
      plotOptions: {
        column: {
          colorByPoint:true
        },
      },

      series: [{ //指定数据列
        name: '小明',
        data: [{
          y:1000,
          color:"red"}, 5000, 4000,5000,2000] //数据
      }]
    }*/

}
