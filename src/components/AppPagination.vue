<script>
export default {
  name: "AppPagination",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  emits: ["paginate"],
  methods: {
    handlerClick(page) {
      this.$emit("paginate", page);
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
      <button
        class="app-pagination__btn"
        :class="
          Number(item) === Number($store.getters.getCurrentPage)
            ? 'app-pagination__btn_active'
            : null
        "
        @click.stop="handlerClick(item)"
      >
        {{ item }}
      </button>
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

  &__btn {
    &_active {
      pointer-events: none;
      font-weight: 600;
    }
  }
}
</style>
