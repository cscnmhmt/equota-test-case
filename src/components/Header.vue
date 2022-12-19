<template>
  <div class="header">
    <button class="add-stock" @click="showModal = true">Add / Update</button>
    <button class="refresh">Refresh</button>
    <Modal
      v-if="showModal"
      :parities="parities"
      :wallet="wallet"
      v-on:close="closeModal"
    ></Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';
export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
  props: ['parities', 'wallet'],
};
</script>

<style scoped>
.header {
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
:where(.add-stock, .refresh) {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.95rem;
  font-weight: bold;
  width: 150px;
  height: 45px;
  border-radius: 0.5rem;
}

.add-stock {
  color: #fff;
  background-color: #3772ff;
  border: 1px solid #3772ff;
}
.refresh {
  color: #3772ff;
  background-color: transparent;
  border: 1px solid #3772ff;
}
</style>
