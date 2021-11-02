<template>
<div class="diagrams">
  <div id="headtext"><h1>Итоги явки</h1></div>
  <div class="formed_box">

    <!-- <div v-for="tps_item in tpss.tps" :key="tps_item.id">

    <div class="dia">
        <h2>ТИК № {{ tps_item.id }}</h2>
        <vue3-chart-js class="pie"
        :data="tps_item[0]"/>
        <h4>Всего жителей: {{ tps_item.total_all }}</h4>
      </div>

    </div> -->
    <!-- <tpsList :tpss="tpss">
      <div class="dia en" v-for="tps in tpss" :key="tps.id">
      <p>ТИК №{{ tps.id }}</p>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
    </div> -->
    <!-- <div class="dia" style="grid-area: a;">
      <h2>ТИК №1</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
      <h4>Всего жителей: {{ total_all }}</h4>
      </div>
    <div class="dia" style="grid-area: b;">
      <h2>ТИК №2</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
      <h4>Всего жителей: {{ total_all }}</h4>
    </div>
    <div  class="dia" style="grid-area: c;">
      <h2>ТИК №3</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
      <h4>Всего жителей: {{ total_all }}</h4>
    </div>
    <div  class="dia" style="grid-area: d;">
      <h2>ТИК №4</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
      <h4>Всего жителей: {{ total_all }}</h4>
    </div>
    <div  class="dia" style="grid-area: e;">
      <h2>ТИК №5</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
      <h4>Всего жителей: {{ total_all }}</h4>
    </div> -->
    <div style="grid-area: end">
      <label>Последнее обновление</label>
      <div class="time">{{ tpss.time }}</div>
    </div>
  </div>
</div>
</template>

<script>
// import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import tpss from '@/json/tpsList.json'

export default {
  name: 'diagrams',
  // components: {
  //   Vue3ChartJs
  // },
  data() {
      return {
        tpss
      }
  },

  setup () {
    console.log(tpss.time);

    const pieChart = {
      id: 'pie',
      type: 'pie',
      data: {
        datasets: [
          { 
            backgroundColor: [
              '#E46651',
              '#5c5466'
            ],
            data: [tpss.tps[0].total_voted, (tpss.tps[0].total_all-tpss.tps[0].total_voted)]
          }
        ]
      }
    }

    return {
      pieChart
    }
    
  },
}
</script>

<style scoped>
#headtext{
    position: relative;
    text-align: center;
    margin: auto;

    font-family: Open Sans;
    font-size: 10px;
    letter-spacing: 0.12em;
    color: #1e162f;
    
    text-transform: uppercase;
}

.formed_box{
    position: relative;
    margin: 0 10%;
    padding: 20px 40px ;

    width:80%;
    height: 650px;
    background: rgba(255, 255, 255, 0.564);
    border-radius: 10px;
    box-sizing: border-box;

    /* display: grid;
    grid-template-areas:
    "a a b b c c"
    ". d d e e ."
    ". . end end . .";
    grid-gap: 10px; */
}

.dia {
  position: relative;
  display: table-cell;   
  flex: 1 0 auto; 
  border-radius: 10px; 
  box-sizing: border-box;
  padding: 0 10px;
  
  background-color: rgba(12, 11, 17, 0.435);
}

.dia h2{
  text-align: center;
  margin: 8px auto;
  font-size: 18px;
  text-transform: uppercase;
}

.dia h4{
  text-align: right;
  font-family: Roboto Mono;
  font-style: italic;
  color: #1e162f;
}

.pie{
  display: block; 
  margin: 0 auto;
  box-sizing: border-box;
  max-height: 150px;
  max-width: 150px;
}

label {
  font-family: Open Sans;
  letter-spacing: 0.12em;
  color: #1e162f;
}

.time {
  outline: none;
    width: 100%;
    height: 30px;
    margin: 10px;
    padding: 12px;

    font-family: Roboto Mono;
    font-style: italic;
    font-size: 24px;
    color: #1e162f;
    background: rgba(14, 11, 17, 0.435);
    border-radius: 10px;
}
</style> 