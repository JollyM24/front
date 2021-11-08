<template>
    <div class="dia">
        <!-- <h2>ТИК №{{item.id}}</h2> -->
        <!-- <vue3-chart-js class="pie" 
          :type="pieChart.type"
          :data="item"/> -->
          <!-- <canvas ref="pieDiagram" />
        <h4>Всего жителей: {{ item.total_all}} </h4> -->
    </div>
</template>

<script>
//import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'Diagram',
  props: {
    item: {
      type: Object,
      default: null
    },
  },
  // mounted(props) {
  //   let ctx = this.$refs.pieDiagram.getContext("2d");

  //   const totalVotedDataset = props.item.total_voted;
  //   const totalNotVotedDataset = props.item.total_all - props.item.total_voted;
  //   const colors = ['#E46651', '#5c5466']; 
  //   const data = {
  //     // labels,
  //     datasets: [
  //       {
  //         data: [totalVotedDataset, totalNotVotedDataset],
  //         backgroundColor: colors,
  //       }
  //     ],
  //   };

  //   new Chart(ctx, {
  //     type: "pie",
  //     data
  //   });
  // },
  // created() {
  //   Chart.register(...registerables);
  // },
  //   name: 'Diagram',
  //   components: Vue3ChartJs,
  //   props: {
  //       item: {
  //           type: Object,
  //           default: null
  //       },
  //   },
  //   setup(props) {
  //     console.log(props.item.total_voted);

  //     const pieChart = {
  //     id: 'pie',
  //     type: 'pie',
  //     data: {
  //       datasets: [
  //         { 
  //           backgroundColor: [
  //             '#E46651',
  //             '#5c5466'
  //           ],
  //           data: [props.item.total_voted, (props.item.total_all-props.item.total_voted)],
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

<style scope>
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
</style>