<template>
  <div class="house">
    House Details
    <h5>Price: {{house.price}}</h5>
    <h5>Bedrooms: {{house.bedrooms}}</h5>
    <h5>Bathrooms: {{house.bathrooms}}</h5>
    <img :src="house.imgUrl" alt />
    <h5>Description: {{house.description}}</h5>
    <h5>Levels: {{house.levels}}</h5>
    <h5>Year: {{house.year}}</h5>
  </div>
</template>


<script>
export default {
  name: "house",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      houseId: this.$route.params.houseId
    };
    this.$store.dispatch("getHouseById", payload);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>