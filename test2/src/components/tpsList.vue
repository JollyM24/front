<template>
    <div class="dia en" v-for="tps in tpss" :key="tps.id">
      <p>ТИК №{{ tps.id }}</p>
      <vue3-chart-js class="pie" :id="pieChart.id" :type="pieChart.type" :data="pieChart.data"/>
    </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import tpsItem from '@/components/tpsItem'

export default({
    name: 'dia',
    components: {
    Vue3ChartJs,
    tpsItem
    },
    data:{
        tpss: [tpsItem]
    },
    setup() {
    const savedCount = localStorage.getItem("count");
    const savedCount2 = localStorage.getItem("count2");

    const pieChart = {
      id: 'pie',
      type: 'pie',
      data: {
        datasets: [
          {
            backgroundColor: [
              '#5c5466',
              '#E46651'
            ],
            data: [savedCount, savedCount2]
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
})
</script>

<style scoped>
.dia {
  position: static;
  display: table-cell;   
  flex: 1 0 auto; 
  border-radius: 30px; 
  box-sizing: border-box;
  padding: 50px;
}

.en{
  background-color: rgba(14, 11, 17, 0.435);
}

.pie{
  display: block; 
  box-sizing: border-box;
  max-height: 100%;
  max-width:  100%;
}
</style>