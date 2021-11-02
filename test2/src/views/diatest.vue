<template>
  <div style="width: 400px">
    <div style="display: flex; justify-content: center">
      <button type="button" @click="switchLegend">Swicth legends</button>
    </div>
    <DoughnutChart v-bind="doughnutChartProps" />
  </div>
</template>

<script lang='ts'>
import { computed, ref } from "vue";
// import { shuffle } from "lodash";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
const mockData = [
  {
    id: "1",
    total_all: 10,
    total_voted: 5,
  },
  {
    id: 2,
    total_all: 9,
    total_voted: 7,
  },
  {
    id: 3,
    total_all: 11,
    total_voted: 3,
  },
];

export default {
  name: "App",
  components: { DoughnutChart },
  setup() {
    const toggleLegend = ref(true);

    const totalVotedDataset = mockData.map((v) => v.total_voted);
    const totalAllDataset = mockData.map((v) => v.total_all);
    const colors = ["red", "green", "blue"]; // для фиксированного количества участков можно забить цвета гвоздями
    const labels = ["Участок 1", "Участок 2", "Участок 3"]; // названия участков тоже пока прибьем гвоздями + непонятно откуда их брать
    const testData = computed<ChartData<"doughnut">>(() => ({
      labels,
      datasets: [
        {
          data: totalVotedDataset,
          backgroundColor: colors,
        },
        {
          data: totalAllDataset,
          backgroundColor: colors,
        },
      ],
    }));

    const options = computed<ChartOptions<"doughnut">>(() => ({
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
