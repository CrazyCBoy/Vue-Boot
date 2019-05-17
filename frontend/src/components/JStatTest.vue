<template>
    <div style="width: 600px;height: 500px;margin: 0 auto">


    <input style="width: 700px;height: 100px;font-size: 30px" v-model="arr">
      <input style="width: 700px;height: 100px;font-size: 30px" v-model="sdn">

      <p>
    jStat.tci( value, alpha, sd, n)<br>
    Returns a 1-alpha confidence interval for the value given the standard deviation and the sample size n.<br>
    返回给定标准差和样本容量n的值的1-alpha置信区间。<br>
    jStat.tci( value, alpha, array)<br>
    Returns a 1-alpha confidence interval for the value given the data from the array.<br>
    返回数组中给定数据的值的1减alpha置信区间。</p>
    </div>
</template>

<script>
  var jStat = require('jStat').jStat;

    export default {
        name: "JStatTest",

      data() {
          return{
            arr:jStat.tci( 0.5, 0.05, [0.1,0.5]),
            //da:jStat.tci(1,2)
            sdn:jStat.tci( 1, 0.05, -8.6,8.5),
          }
      }
    }
</script>

<style scoped>

</style>
