<template>
  <div id="page">
    <div id="head">
      <img src="../../assets/simpsons.png">
    </div>
    <div id="content">
      <citizens v-on:selected="setSelected($event)"></citizens>
      <citizen :citizen="selectedCitizen"></citizen>
    </div>
  </div>
</template>

<script>
import citizens from "./Citizens";
import citizen from "./Citizen";

export default {
  data() {
    return {
      selectedCitizen: {}
    };
  },
  components: { citizens, citizen },
  methods: {
    setSelected(selectedCitizen) {
      this.selectedCitizen = selectedCitizen;
    }
  }
};
</script>
