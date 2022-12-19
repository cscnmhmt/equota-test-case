<template>
  <div class="pie">
    <GChart
      :type="chartType"
      :data="[
        ['Parity', 'Amount'],
        ...this.parities.map((p) => [p.symbol, Number(p.amount)]),
      ]"
      :options="chartOptions"
    ></GChart>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts/legacy';

export default {
  data() {
    return {
      chartType: 'PieChart',
      chartOptions: {
        width: 700,
        height: 700,
        legend: 'none',
      },
    };
  },
  components: {
    GChart,
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
