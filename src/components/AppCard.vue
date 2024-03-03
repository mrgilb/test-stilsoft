<script>
export default {
  name: "AppCard",
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    number: {
      type: Number,
      required: true,
      default: null
    },
    boolean : {
      type: Boolean,
      required: true,
      default: false
    },
    date : {
      type: String,
      required: true,
      default: ''
    },
    selectedId: {
      type: Number,
      required: true,
      default: null
    },
  }
}
</script>

<template>
  <div class="app-card">
    <p class="app-card__text">
      {{ text }}
    </p>

    <p class="app-card__number">
      {{ number }}
    </p>

    <label class="app-card__boolean">
      <input :checked="boolean" type="checkbox" disabled>
    </label>


  </div>
</template>

<style scoped lang="scss">
.app-card {

}
</style>
