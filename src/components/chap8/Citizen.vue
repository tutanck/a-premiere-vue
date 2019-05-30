<template>
   <div id="citizen">
    <table>
      <tr><td><label>ID : </label>{{citizen.id}}</td></tr>
      <tr><td><label>Firstname : </label>{{citizen.firstname}}</td></tr>
      <tr><td><label>Lastname : </label>{{citizen.lastname}}</td></tr>
      <tr><td><label>Age : </label>{{citizen.age}}</td></tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
import VueResource from "vue-resource";
import Vuex from 'vuex'
Vue.use(VueResource); 


export default {
  computed: {
      ...Vuex.mapGetters({citizen: 'SelectedCitizen'})
  }
}
</script>
