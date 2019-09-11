<template>
  <div class="houses container-fluid">
    <div class="row">
      <house v-for="house in houses" :houseProp="house" :key="house._id" />
      <div class="col-12">
        <CreateHouseModal />
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#create-house-modal"
        >List House</button>
      </div>
    </div>
  </div>
</template>


<script>
import House from "../components/House";
import CreateHouseModal from "../components/CreateHouseModal";

export default {
  name: "houses",

  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  methods: {},
  components: { House, CreateHouseModal }
};
</script>


<style scoped>
</style>