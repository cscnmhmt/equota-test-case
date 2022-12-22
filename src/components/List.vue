<template>
  <div class="search-results">
    <div
      v-for="parity in parities.filter(
        (p) => p.symbol.toLowerCase().indexOf(keyword.toLowerCase()) >= 0
      )"
    >
      <div v-if="parity.amount > 0">
        <OwnedItem :parities="parities" :parity="parity"></OwnedItem>
      </div>
      <div v-else>
        <Item :parities="parities" :parity="parity"></Item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import OwnedItem from './OwnedItem.vue';

export default {
  components: {
    Item,
    OwnedItem,
  },
  props: ['parities', 'keyword'],
};
</script>

<style>
.coin-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.095) 0px 0px 0px 1px;
}

.modal-body {
  height: 720px;
  overflow: auto;
}
</style>
