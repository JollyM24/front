<template>
  <div class="formed_box">
    <!-- <tpsList :tpss="tpss">
      <div class="dia en" v-for="tps in tpss" :key="tps.id">
      <p>ТИК №{{ tps.id }}</p>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
    </div> -->
    <div id="headtext">ИТОГИ ЯВКИ</div>
    <div class="dia en">
      <h2>ТИК №1</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
    <div class="dia en">
      <h2>ТИК №2</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
    <div  class="dia en">
      <h2>ТИК №3</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
    <div  class="dia en">
      <h2>ТИК №4</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
    <div  class="dia en">
      <h2>ТИК №5</h2>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
    <div id="headtext">
      <label>Последнее обновление</label>
      <div class="time">time</div>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'diagrams',
  components: {
    Vue3ChartJs
  },

  setup () {
    const savedCount = localStorage.getItem("count");//пришло
    const savedCount2 = localStorage.getItem("count2");//всего

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
            data: [savedCount, (savedCount2-savedCount)]
          }
        ]
      }
    }

    return {
      pieChart,
      savedCount,
      savedCount2
    }
  },
}
</script>

<style scoped>
#headtext{
    position: relative;
    text-align: center;
    margin: auto;
    grid-column: span 3;

    font-family: Open Sans;
    font-size: 32px;
    letter-spacing: 0.12em;
    color: #000000;
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

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 30px 200px 200px;
    grid-gap: 20px;
}

.dia {
  position: relative;
  display: table-cell;   
  flex: 1 0 auto; 
  border-radius: 30px; 
  box-sizing: border-box;
  padding: 0 10%;
  margin-top: 20px;
}

.en{
  background-color: rgba(14, 11, 17, 0.435);
}

.end {
    grid-column: span 3;
}

.dia h2{
  text-align: center;
  margin: 8px auto;
  text-transform: uppercase;
}

.pie{
  display: block; 
  margin: 0 auto;
  box-sizing: border-box;
  max-height: 65%;
  max-width: 50%;
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
    color: #000000;
    background: rgba(14, 11, 17, 0.435);
    border-radius: 10px;
}
</style> 