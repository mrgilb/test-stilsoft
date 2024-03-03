<template>
  <div class="home">
    <h1>ТЗ Стилсофт</h1>

    <div class="home__head">
      <AppSearch :value="searchValue" @update="handlerSearchUpdate" />
      <button class="home__add" @click.stop="handlerAddEntity">добавить</button>
      <AppSelect
        class="home__select"
        :value="selectList[selectValue].text"
        :list="selectList"
        @selected="handlerSelected"
      />
    </div>

    <AppList :list="selectValue === 1 ? sortedList : list">
      <template v-slot:card="{ card }">
        <AppCard
          :enum-value="card.enum"
          :date="card.date"
          :boolean="card.boolean"
          :id="card.id"
          :text="card.name"
          :img="card.img"
          @delete="handlerDeleteCard"
        />
      </template>
    </AppList>

    <router-view />

    <AppPagination :count="totalPages" @paginate="handlerPaginate" />

    <AppModal />
  </div>
</template>

<script>
import AppList from "@/components/AppList.vue";
import { mapGetters } from "vuex";
import AppCard from "@/components/AppCard.vue";
import AppPagination from "@/components/AppPagination.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppModal from "@/components/AppModal/AppModal.vue";
import AppSelect from "@/components/AppSelect.vue";

export default {
  name: "HomeView",
  data() {
    return {
      selectValue: 0,
      selectList: [
        {
          id: 0,
          text: "По умолчанию",
        },
        {
          id: 1,
          text: "По алфавиту",
        },
      ],
    };
  },
  components: {
    AppSelect,
    AppModal,
    AppSearch,
    AppPagination,
    AppCard,
    AppList,
  },
  computed: {
    ...mapGetters({
      list: "geListByPage",
      sortedList: "getSortedListByPage",
      currentPage: "getCurrentPage",
      totalPages: "getTotalPages",
      searchValue: "getSearchValue",
    }),
  },
  methods: {
    handlerPaginate(page) {
      this.$store.commit("setCurrentPage", page);
    },
    handlerSearchUpdate(value) {
      this.$store.commit("setSearchValue", value);
    },
    handlerDeleteCard(id) {
      this.$store.commit("setStateModal", {
        isOpen: true,
        currentModal: 0,
        handlerConfirm: () => {
          this.$store.commit("deleteCardById", id);
        },
      });
    },
    handlerAddEntity() {
      this.$store.commit("setStateModal", {
        isOpen: true,
        currentModal: 1,
        handlerConfirm: () => {},
      });
    },
    handlerSelected(value) {
      this.selectValue = value.id;
    },
  },
  watch: {
    currentPage() {},
  },
  mounted() {
    this.$store.commit("setCurrentPage", this.$route.query.currentPage || 1);
  },
};
</script>

<style scoped lang="scss">
.home {
  padding: 40px;

  &__head {
    display: flex;
  }

  &__add {
    margin-left: 24px;
  }

  &__select {
    margin-left: auto;
  }
}
</style>
