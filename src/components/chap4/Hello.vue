<template>
  <div>
    <img src="../../assets/homer.png">
    <h1>Hello {{person.firstname}} {{person.lastname}} from {{from}}!!!!</h1>
    <label>
      firstname :
      <input type="text" v-model="person.firstname">
    </label>
    <label>
      lastname :
      <input type="text" v-model="person.lastname">
    </label>
    <label>
      from :
      <input type="text" v-model="from">
    </label>
  </div>
</template>


<script>
export default {
  data() {
    return {
      person: {
        firstname: "Homer",
        lastname: "Simpson"
      },
      from: "Springfield"
    };
  }
};
</script>


<style>
</style>