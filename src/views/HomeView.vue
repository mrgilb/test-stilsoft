<template>
  <div class="home">
    <h1>ТЗ Стилсофт</h1>

    <div class="home__head">
      <AppSearch :value="searchValue" @update="handlerSearchUpdate" />
      <button class="home__add" @click.stop="handlerAddEntity">добавить</button>
    </div>

    <AppList :list="list">
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

export default {
  name: "HomeView",
  components: {
    AppModal,
    AppSearch,
    AppPagination,
    AppCard,
    AppList,
  },
  computed: {
    ...mapGetters({
      list: "geListByPage",
      currentPage: "getCurrentPage",
      totalPages: "getTotalPages",
      searchValue: "getSearchValue",
    }),
  },
  methods: {
    handlerPaginate(page) {
      this.$store.commit("setCurrentPage", page);

      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          currentPage: this.currentPage,
        },
      });
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

    }
  },
  created() {
    this.$store.commit("setCurrentPage", this.$route.query.currentPage || 1);

    if (
      this.$route.path !== this.$route.path ||
      JSON.stringify(this.$route.query) !== JSON.stringify(this.$route.query)
    ) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          currentPage: this.currentPage,
        },
      });
    }
  },
};
</script>

<style scoped lang="scss">
.home {
  padding: 40px;

  &__add {
    margin-left: 24px;
  }
}
</style>
