<template>
  <form @submit="$emit('add-todo', $event)" class="todo__form">
    <label>
      Todo
      <input name="todo" type="text" />
    </label>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  emits: ["add-todo"],
};
</script>

<style scoped>
.todo__form {
  display: flex;
  gap: 1rem;
  width: max-content;
  margin: 0 auto;
}

input {
  margin-left: 0.5rem;
}
</style>
