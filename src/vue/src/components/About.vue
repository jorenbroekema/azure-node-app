<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    computedCount() {
      return this.$store.state.todos;
    },
  },
  created() {},
};
</script>

<template>
  <h1>About</h1>
  <span> Count: {{ computedCount }}</span>
</template>

<style scoped></style>
