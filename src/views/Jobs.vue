<template>
  <div class="jobs container-fluid">
    <div class="row">
      <job v-for="job in jobs" :jobProp="job" :key="job._id" />
      <div class="col"></div>
    </div>
  </div>
</template>


<script>
import Job from "../components/Job";

export default {
  name: "jobs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getJobs");
  },
  computed: {
    jobs() {
      return this.$store.state.jobs; //getting jobs from data
    }
  },
  methods: {},
  components: { Job }
};
</script>


<style scoped>
</style>