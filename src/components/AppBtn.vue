<template>
  <button class="app-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppBtn",
  emits: ['click']
};
</script>

<style scoped lang="scss">
.app-btn {
  border-radius: 0;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
