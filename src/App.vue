<template>
  <div id="app">
    <Header :parities="parities" :wallet="wallet"></Header>
    <Main :parities="parities" :wallet="wallet"></Main>
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
      wallet: [],
    };
  },
  components: {
    Header,
    Main,
  },
  created() {
    get24Ticket()
      .then((res) => res.json())
      .then(
        (data) =>
          (this.parities = data
            .map((item) =>
              Object.defineProperty(item, 'amount', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: 0,
              })
            )
            .slice(0, 30))
      )
      .catch((err) => console.error('Error:', err));
  },
};
</script>

<style scoped></style>
