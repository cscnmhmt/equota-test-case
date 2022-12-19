<template>
  <div>
    <div class="form">
      <input
        type="text"
        class="search-coin"
        placeholder="Search"
        v-model="query"
        @input="handleSearch"
      />
      <!-- search button -->
      <button class="search-btn" @click="handleSearch">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    handleSearch() {
      this.$emit('searchReq', this.query);
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
  padding-inline: 1rem;
}

.search-coin {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 50px;
  padding-inline: 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

.search-btn {
  position: absolute;
  right: 1.3rem;
  top: 0.35rem;
  width: 120px;
  height: 40px;
  background-color: #080708;
  color: #fff;
  font-size: 0.95rem;
  font-weight: bold;
  border-radius: 0.5rem;
}

:where(.loading, .empty-input) {
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
