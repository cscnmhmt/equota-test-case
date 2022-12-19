<template>
  <div class="search-results">
    <!-- <div v-for="parity in wallet">
      <div
        v-if="parity.symbol.toLowerCase().indexOf(keyword.toLowerCase()) >= 0"
      >
        <OwnedItem
          :parities="parities"
          :parity="parity"
          :wallet="wallet"
        ></OwnedItem>
      </div>
    </div> -->
    <div v-for="parity in parities">
      <div
        v-if="parity.symbol.toLowerCase().indexOf(keyword.toLowerCase()) >= 0"
      >
        <div v-if="parity.amount > 0">
          <OwnedItem
            :parities="parities"
            :parity="parity"
            :wallet="wallet"
          ></OwnedItem>
        </div>
        <div v-else>
          <Item :parities="parities" :parity="parity" :wallet="wallet"></Item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import OwnedItem from './OwnedItem.vue';

export default {
  data() {
    return {
      extractedParities: [],
    };
  },
  components: {
    Item,
    OwnedItem,
  },
  methods: {
    checkIfOwned(parity) {
      return parity.hasOwnProperty('amount');
    },
  },
  props: ['parities', 'wallet', 'keyword'],
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
.search-results {
  height: 520px;
  margin-top: 1rem;
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
}
</style>
