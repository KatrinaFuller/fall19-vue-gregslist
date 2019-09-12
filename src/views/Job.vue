<template>
  <div class="job">
    Job Details
    <h5>Company: {{job.company}}</h5>
    <h5>Title: {{job.jobTitle}}</h5>
    <h5>Rate: {{job.rate}}</h5>
    <h5>Hours: {{job.hours}}</h5>
    <h5>Description: {{job.description}}</h5>
    <button class="btn btn-danger" @click="remove">Remove</button>
  </div>
</template>


<script>
export default {
  name: "job",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      jobId: this.$route.params.jobId
    };
    this.$store.dispatch("getJobById", payload);
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  },
  methods: {
    remove() {
      this.$store.dispatch("removeJob", this.job._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>