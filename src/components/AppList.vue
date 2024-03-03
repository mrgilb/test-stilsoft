<script>
export default {
  name: "AppList",
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
  }
}
</script>

<template>
  <ul class="app-list">
    <li class="app-list__item" v-for="item in list" :key="item.id">
      <slot name="card" :card="item"/>
    </li>
  </ul>

</template>

<style scoped lang="scss">
.app-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  &__item {
    margin-top: 16px;
    border: 1px solid black;
    border-radius: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
