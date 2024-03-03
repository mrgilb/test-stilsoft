<template>
  <input
    class="app-search"
    type="text"
    @input="handlerInput($event.target.value)"
    :value="value"
    placeholder="Введите ФИО"
  />
</template>

<script>
export default {
  name: "AppSearch",
  props: {
    value: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: ["update"],
  methods: {
    handlerInput(value) {
      this.$emit("update", value);
    },
  },
};
</script>

<style scoped lang="scss">
.app-search {
}
</style>
