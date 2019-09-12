<template>
  <div class="jobs container-fluid"></div>
</template>


<script>
export default {
  name: "jobs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getJobs");
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>