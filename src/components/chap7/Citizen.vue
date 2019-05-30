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

/* eslint-disable */
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource); 

export default {
  data(){
    return {
      citizen : {}
    }
  },
  http:{
    root : 'http://localhost:3000'
  },
  created(){
    bus.$on('selectedCitizen',seletcedCitizen=>{
      this.$resource("citizens{/id}/details")
      .get({id:seletcedCitizen})
      .then(response => {
        this.citizen = response.data[0];
      })
      .catch(error => console.log("erreur", error));
    })
  }
}
</script>
