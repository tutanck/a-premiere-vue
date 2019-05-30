<template>
<!-- eslint-disable -->
    <div id="citizens">
    <table>
      <tr v-for="citizen in citizens" @click="selectCitizen(citizen)">
        <td>{{citizen.firstname}}</td>
        <td>{{citizen.lastname}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource); 

export default {
  http: {
    root: "http://localhost:3000"
  },
  data() {
    return {
      citizens: []
    };
  },
  methods: {
    selectCitizen(citizen) {
      bus.$emit('selectedCitizen', citizen.id);
    }
  },
  mounted() {
    this.$resource("citizens")
      .get()
      .then(response => {
        this.citizens = response.data;
      })
      .catch(error => console.log("erreur", error));
  }
};
</script>


<style>
  #citizens {
    display:inline-block;
  }
  table{
    margin: 0 auto;
  }
</style>