<template>
  <div class="app-modal-confirm">
    <p class="app-modal-confirm__title">Удалить запись?</p>
    <div class="app-modal-confirm__controls">
      <button @click="handlerAccept">Да</button>
      <button @click="handlerCancel">Нет</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppModalConfirm",
  methods: {
    handlerAccept() {
      this.$store.getters.getHandlerConfirm();
      this.$store.commit('setStateModal', false)
    },
    handlerCancel() {
      this.$store.commit('setStateModal', false)
    }
  }
};
</script>
<style scoped lang="scss">
.app-modal-confirm {
  &__title {
    font-size: 24px;
    margin: 0;
  }
  &__controls {
    margin-top: 12px;
    display: grid;
    grid-auto-flow: column;
    gap: 24px;
  }
}
</style>
