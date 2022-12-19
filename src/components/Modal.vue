<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <button class="modal-close" @click="closeModal">&#215;</button>
      </div>
      <div class="modal-body">
        <Search v-on:searchReq="handleSearch"></Search>
        <List :parities="parities" :wallet="wallet" :keyword="keyword"></List>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';
import List from './List.vue';

export default {
  name: 'modal',
  data() {
    return {
      keyword: '',
    };
  },
  components: {
    Search,
    List,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    handleSearch(keyword) {
      this.keyword = keyword;
    },
  },
  props: ['parities', 'wallet'],
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-content {
  width: 1000px;
  height: 700px;
  background-color: white;
  padding: 20px;
  border-radius: 0.5rem;
}

.modal-header {
  position: relative;
}

.modal .modal-close {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  font-size: 2rem;
}

.modal-body {
  margin-top: 2.5rem;
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
