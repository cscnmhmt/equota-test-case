<template>
  <div id="app">
    <Header :parities="parities" v-on:refreshData="getData"></Header>
    <Main :parities="parities"></Main>
  </div>
</template>

<script>
import { get24Ticket } from './api/ticker.js';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'app',
  data() {
    return {
      parities: [],
    };
  },
  components: {
    Header,
    Main,
  },
  methods: {
    getData() {
      get24Ticket()
        .then((res) => res.json())
        .then((data) => {
          const promise = new Promise((resolve, reject) => {
            resolve(
              data.map((item, index) =>
                Object.defineProperty(item, 'amount', {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  value:
                    this.parities.length > 0 ? this.parities[index].amount : 0,
                })
              )
            );
          });
          promise.then((data) => (this.parities = data));
        })
        .catch((err) => console.error('Error:', err));
    },
  },
  mounted() {
    this.getData();
  },
  created() {
    this.interval = setInterval(() => {
      this.getData();
    }, 1200000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped></style>
