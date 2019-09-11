<template>
  <div class="houses"></div>
</template>


<script>
export default {
  name: "houses",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>