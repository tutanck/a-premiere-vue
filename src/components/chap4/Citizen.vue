<template>
  <div>
    <img src="../../assets/homer.png">
    <table>
      <tr v-for="citizen in citizens">
        <td>{{citizen.firstname}}</td>
        <td>{{citizen.lastname}}</td>
        <td>{{citizen.age}}</td>
      </tr>
      <button @click="addCitizen">Add</button>
      <label>#citizens : {{counter}}</label>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      citizens: []
    };
  },
  props: ["firstname", "lastname", "age"],
  methods: {
    addCitizen() {
      this.citizens.push({
        firstname: "Lisa",
        lastname: "Simpson",
        age: 10
      });
    }
  },
  computed: {
    counter() {
      return this.citizens.length;
    }
  },
  mounted() {
    this.citizens.push({
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age
    });
  }
};
</script>


<style>
</style>