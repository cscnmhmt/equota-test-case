<template>
  <div class="coin-list-item">
    <div class="symbol">
      <div class="symbol-name">{{ parity.symbol }}</div>
      <div class="symbol-info">
        <div class="last-price">
          <span class="label">Last price:</span>
          <span class="value">{{ Number(parity.lastPrice).toFixed(4) }}</span>
        </div>
        <span>-</span>
        <div class="avg-price">
          <span class="label">Weigh. Avg price:</span>
          <span class="value">{{
            Number(parity.weightedAvgPrice).toFixed(4)
          }}</span>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="number">
        <input type="number" min="1" v-model="amount" />
      </div>
      <!-- if i dont have this show add button -->
      <div class="single-button">
        <!-- after added show button group belove -->
        <button class="add-portf" @click="addToWallet">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 1,
    };
  },
  methods: {
    addToWallet() {
      this.parity.amount = this.amount;
    },
  },
  created() {
    this.amount = 1;
  },
  props: ['parities', 'parity'],
};
</script>

<style scoped>
.symbol {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.symbol-name {
  width: fit-content;
  padding: 0rem 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: #080708;
  background-color: #e6e8e62c;
  border: 2px solid #080708;
  border-radius: 50px;
}
.symbol-info {
  display: flex;
  gap: 0.5rem;
}
.label {
  font-weight: normal;
  margin-right: 0.2rem;
}
.value {
  font-weight: bold;
}

.action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.number input {
  width: 90px;
  height: 40px;
  padding-inline: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  margin-right: 1.5rem;
}
input[type='number']::-webkit-inner-spin-button {
  opacity: 1;
}

.add-portf {
  color: #fff;
  width: 208px;
  height: 40px;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  background-color: #36a727;
}
</style>
