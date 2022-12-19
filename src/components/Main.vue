<template>
  <div class="main">
    <List :parities="parities.filter((p) => p.amount > 0)" :keyword="''"></List>
    <Pie :parities="parities.filter((p) => p.amount > 0)"></Pie>
  </div>
</template>

<script>
import List from './List.vue';
import Pie from './Pie.vue';

export default {
  data() {
    return {
      ownedParities: [],
    };
  },
  components: {
    List,
    Pie,
  },
  created() {
    this.parities.forEach((p) => this.ownedParities.push(p));
  },
  props: ['parities'],
};
</script>

<style>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-block: 2rem;
}
.search-results {
  height: 700px;
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
}
</style>
