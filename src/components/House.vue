<template>
  <div class="house col-3 border rounded" @click="viewHouse()">
    <h5>Bedrooms: {{houseProp.bedrooms}}</h5>
    <h5>Bathrooms: {{houseProp.bathrooms}}</h5>
    <h5>Price: {{houseProp.price}}</h5>
  </div>
</template>


<script>
export default {
  name: "house",
  props: ["houseProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewHouse() {
      this.$router.push({
        name: "house",
        params: { houseId: this.houseProp._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>