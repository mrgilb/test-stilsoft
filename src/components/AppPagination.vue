<script>
export default {
  name: "AppPagination",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <ul class="app-pagination">
    <li
      class="app-pagination__item"
      v-for="item in count"
      :key="item"
    >
      <router-link
        class="app-pagination__btn"
        :to="`/${item}`"
        :class="
          Number(item) === Number($store.getters.getCurrentPage)
            ? 'app-pagination__btn_active'
            : null
        "
      >
        {{ item }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.app-pagination {
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  width: fit-content;
  gap: 8px;
  margin: 0 auto;
  padding: 0;


  &__btn {
    text-decoration: none;
    color: black;
    width: 30px;
    height: 30px;
    background: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &_active {
      pointer-events: none;
      font-weight: 600;
    }
  }
}
</style>
