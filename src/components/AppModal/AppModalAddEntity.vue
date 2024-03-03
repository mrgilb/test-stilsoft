<template>
  <form class="app-modal-add-entity" @submit.prevent>
    <p class="app-modal-add-entity__title">Добавьте сущность</p>

    <label class="app-modal-add-entity__field">
      <input
        type="text"
        class="app-modal-add-entity__input"
        :class="$v.entityName.$error ? 'app-modal-add-entity__input_error' : null"
        v-model="entityName"
        placeholder="Введите текст"
        @input="$v.$touch()"
        @blur="$v.$touch()"
      />
      <span></span>
    </label>

    <AppSelect
      class="app-modal-add-entity__field"
      :value="selectedValue ? enumList[selectedValue] : ''"
      :list="list"
      @selected="handlerSelected"
    />

    <div class="app-modal-add-entity__controls">
      <button @click="handlerClickConfirm">Добавить</button>
      <button @click="handlerClickCancel">Отменить</button>
    </div>
  </form>
</template>

<script>
import { ENUM_LIST } from "@/assets/js/constants";
import AppSelect from "@/components/AppSelect.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "AppModalAddEntity",
  components: { AppSelect },
  data() {
    return {
      entityName: "",
      enumList: ENUM_LIST,
      selectedValue: 1,
    };
  },
  methods: {
    handlerSelected(item) {
      this.selectedValue = item.id;
    },
    handlerClickConfirm() {
      this.$v.$touch()

      if (this.$v.$invalid) return

      this.$store.commit('addCard', {text: this.entityName, enumValue: this.selectedValue})

      this.$store.commit('setStateModal', {
        isOpen: false,
        currentModal: null,
        handlerConfirm: null
      })
    },
    handlerClickCancel() {
      this.$store.commit('setStateModal', {
        isOpen: false,
        currentModal: null,
        handlerConfirm: null
      })
    }
  },
  validations: {
    entityName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
  },
  computed: {
    list() {
      const arr = [];

      for (const [key, value] of Object.entries(this.enumList)) {
        arr.push({
          id: key,
          text: value,
        });
      }

      return arr;
    },
  },
};
</script>

<style scoped lang="scss">
.app-modal-add-entity {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 24px;
    margin: 0 0 32px 0;
  }

  &__field {
    input {
      width: 100%;
      box-sizing: border-box;
    }
  }

  &__field + &__field {
    width: 100%;
    margin-top: 12px;
  }

  &__controls {
    margin-top: 32px;
    display: grid;
    grid-auto-flow: column;
    gap: 24px;
  }

  &__input {
    outline: none;

    &_error {
      border: 2px solid red;
    }
  }
}
</style>
