<template>
  <div class="app-card">
    <p class="app-card__field">
      <span> Картинка </span>
      <a :href="img" target="_blank"> Ссылка на картинку </a>
    </p>

    <p class="app-card__text app-card__field">
      <span>Текст</span>
      {{ text }}
    </p>

    <p class="app-card__number app-card__field">
      <span>Число</span>
      {{ id }}
    </p>

    <label class="app-card__boolean app-card__field">
      <span> Булево </span>
      <input :checked="boolean" type="checkbox" :name="`card-${id}`" disabled />
    </label>

    <p class="app-card__date app-card__field">
      <span>Дата</span>
      <DatePicker v-model="editableDate" value-type="format" format="YYYY-MM-DD" />
    </p>

    <p class="app-card__enum app-card__field">
      <span>enum</span>
      {{ enumMap[enumValue] }}
    </p>

    <button class="app-card__delete" @click.stop="handlerClickDelete">
      удалить
    </button>
  </div>
</template>

<script>
import { ENUM_LIST } from "@/assets/js/constants";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "AppCard",
  components: { DatePicker },
  props: {
    text: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    boolean: {
      type: Boolean,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    enumValue: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      enumMap: ENUM_LIST,
      editableDate: this.date,
    };
  },
  emits: ["delete"],
  methods: {
    handlerClickDelete() {
      this.$emit("delete", this.id);
    },
  },
};
</script>

<style scoped lang="scss">
.app-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  position: relative;

  &__field {
    display: grid;
    gap: 16px;

    span {
      font-weight: 600;
    }
  }

  &__delete {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px 8px 0 0;
  }
}
</style>
