<template>
<div class="diagrams">
  <div id="headtext"><h1>Итоги явки</h1></div>
  <div class="formed_box">

  <div v-for="tps_item in tpss.tps" :key="tps_item.id">
    <diagram  :item="tps_item" />
  </div>
  
  <div style="grid-area: end">
      <label>Последнее обновление</label>
      <div class="time">{{ tpss.time }}</div>
    </div>
  </div>
  <button @click="$router.push('/')">
                <a style="font-size: 15px;">Вернуться на домашнюю страницу</a>
        </button>
  </div>
</template>

<script>
//import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import Diagram from '@/components/diagram.vue'
import tpss from '@/json/tpsList.json'

export default {
  name: 'diagrams',
  components: {
    // Vue3ChartJs
    Diagram
  },
  data(){
    return{
       tpss
      }
  }
  // setup() {
  //     var pieChart = {
  //     id: 'pie',
  //     type: 'pie',
  //     data: {
  //       datasets: [
  //         { 
  //           backgroundColor: [
  //             '#E46651',
  //             '#5c5466'
  //           ],
  //           data: [tpss.tps[i].total_voted, (tpss.tps[i].total_all-tpss.tps[i].total_voted)],
  //         }
  //       ]
  //     }
  //   }

  //   return {
  //     pieChart
  //   }
  // }
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

/* .dia {
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
} */

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

button, .button{
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-bottom: 10px;
    top: 5px;

    width: 200px;
    height: 45px;

    box-shadow: inset 0 -25px rgba(0, 0, 0, 17%);
    background: #303752;
    border-radius: 3px;
}

button a, .button a{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    vertical-align: middle;
    font-family: Roboto Mono;
    font-style: normal;
    font-size: 30px;
    color: #E3E3E3;
    text-decoration: none;
    letter-spacing: 0.05em;
}
</style> 