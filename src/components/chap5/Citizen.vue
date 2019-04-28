<template>
  <div>
    <img src="../../assets/simpsons.png">
    <table>
      <tr v-for="citizen in citizens">
        <td>{{citizen.firstname}}</td>
        <td>{{citizen.lastname}}</td>
        <td>{{citizen.age}}</td>
      </tr>
    </table>
    <button @click="addCitizen">Add</button>
    <label>#citizens {{counter}}</label>
  </div>
</template>


<script>
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource); //TODO ask what it does

export default {
  http: {
    root: "http://localhost:3000"
  },
  data() {
    return {
      citizens: []
    };
  },
  props: ["firstname", "lastname", "age"],
  methods: {
    addCitizen() {
      this.citizens.push({ firstname: "Lisa", lastname: "Simpson", age: "10" });
    }
  },
  computed: {
    counter() {
      return this.citizens.length;
    }
  },
  mounted() {
    this.$resource("citizens")
      .get()
      .then(response => {
        console.log(response);
        this.citizens = response.data;
      })
      .catch(error => console.log("erreur", error));
  }
};
</script>