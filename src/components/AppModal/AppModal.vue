<template>
  <div class="app-modal" v-if="isOpen">
    <div class="app-modal__inner" @click.stop>
      <component :is="modalEnum[currentModal]" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { MODAL_ENUM } from "@/assets/js/constants";

export default {
  name: "AppModal",
  computed: {
    ...mapGetters({
      currentModal: "getCurrentModal",
      isOpen: "getState",
    }),
  },
  data() {
    return {
      modalEnum: MODAL_ENUM,
    };
  },
  methods: {
    handlerKeyDown(evt) {
      if (evt.key === "Escape") {
        this.$store.commit("setStateModal", {
          isOpen: false,
          currentModal: null,
          handlerConfirm: null,
        });
      }
    },
    handlerCLickOutside() {
      this.$store.commit("setStateModal", {
        isOpen: false,
        currentModal: null,
        handlerConfirm: null,
      });
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handlerKeyDown);
    document.addEventListener("click", this.handlerCLickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handlerKeyDown);
    document.removeEventListener("click", this.handlerCLickOutside);
  },
};
</script>
<style scoped lang="scss">
.app-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: 100vh;
  background: rgba(3, 3, 3, 0.7);
  justify-content: center;
  align-items: center;
  overflow: auto;

  &__inner {
    padding: 40px;
    border-radius: 24px;
    background: white;
  }
}
</style>
