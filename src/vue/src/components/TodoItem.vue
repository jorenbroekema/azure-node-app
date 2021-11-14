<script>
export default {
  props: {
    item: Object,
    date: Date,
  },
  methods: {
    edit(ev) {
      this.$emit('update', {
        id: this.item.id,
        value: ev.target.innerText,
      });
    },
  },
  emits: ['clear', 'update'],
};
</script>

<template>
  <div class="todo__container">
    <p contenteditable @blur="edit" class="todo__text">
      {{ item.name }}
    </p>
    <input @change="$emit('clear', this.item.id)" type="checkbox" />
  </div>
</template>

<style scoped>
.todo__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  padding: 1rem 2rem;
  margin: 1rem auto;
  border-radius: 0.5rem;
  background-color: lightgreen;
}

.todo__date > p {
  margin: 0;
}
</style>
