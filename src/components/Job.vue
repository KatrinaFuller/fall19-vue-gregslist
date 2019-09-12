<template>
  <div class="car"></div>
</template>


<script>
export default {
  name: "car",
  props: ["jobProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewJob() {
      this.$router.push({ name: "job", params: { jobId: this.jobProp._id } });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>