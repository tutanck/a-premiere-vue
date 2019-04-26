<template>
  <div>
    <img :src="img">
    <img src="../../assets/marge.png">
    <h1>Hello {{firstname}} {{lastname}} from {{from}}!!!!</h1>
  </div>
</template>


<script>
export default {
  props:['firstname','lastname','from','img'],
  /* data() {
    return {
      person: {
        firstname: "Homer",
        lastname: "Simpson"
      },
      from: "Springfield"
    };
  } */
};
</script>


<style>
</style>