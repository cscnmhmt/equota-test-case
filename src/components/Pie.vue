<template>
  <div class="pie">
    <GChart
      :type="chartType"
      :data="chartData"
      :options="chartOptions"
    ></GChart>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts/legacy';

export default {
  name: 'GoogleChart',
  data() {
    return {
      chartData: [['Parity', 'Amount']],
      chartType: 'PieChart',
      chartOptions: {
        width: 600,
        height: 600,
        legend: 'none',
      },
    };
  },
  components: {
    GChart,
  },
  updated() {
    this.parities.forEach((p) =>
      this.chartData.push([p.symbol, Number(p.amount)])
    );
    console.log('pie updated');
  },
  created() {
    this.parities.forEach((p) =>
      this.chartData.push([p.symbol, Number(p.amount)])
    );
    console.log('pie created');
  },
  props: ['parities'],
};
</script>

<style scoped>
.pie {
  display: flex;
  justify-content: center;
  padding-inline: 3rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
