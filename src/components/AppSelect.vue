<template>
  <div class="app-select">
    <input
      type="text"
      :value="value"
      readonly
      :placeholder="placeholder"
      @click="isOpen = !isOpen"
    />

    <div class="app-select__list-container" :style="height">
      <ul class="app-select__list" ref="list">
        <li class="app-select__item" v-for="item in list" :key="item.id">
          <button class="app-select__btn" @click="handlerClickOption(item)">
            {{ item.text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  data() {
    return {
      isOpen: false,
    };
  },
  emits: ["selected"],
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
    placeholder: {
      type: String,
      required: false,
      default: "Выберите значение",
    },
    value: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: {
    height() {
      return this.isOpen
        ? `height: ${this.$refs.list.offsetHeight}px`
        : "height: 0px";
    },
  },
  methods: {
    handlerClickOption(item) {
      this.$emit("selected", item);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
.app-select {
  position: relative;

  input {
    width: 100%;
    box-sizing: border-box;
  }

  &__list-container {
    height: 0;
    overflow: hidden;
    position: absolute;
    transition: height 0.3s ease;
    width: 100%;
    z-index: 2;
  }

  &__list {
    margin: 0;
    background: white;
    padding: 10px;
  }

  &__item {
    margin-top: 2px;
    display: flex;

    &:first-child {
      margin-top: 0;
    }
  }

  &__btn {
    border: none;
    background: transparent;
    width: 100%;

    &:hover {
      background: aliceblue;
    }
  }
}
</style>
