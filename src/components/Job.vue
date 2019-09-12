<template>
  <div class="car col-3 border rounded" @click="viewJob()">
    <h5>Company: {{jobProp.company}}</h5>
    <h5>Title: {{jobProp.jobTitle}}</h5>
  </div>
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