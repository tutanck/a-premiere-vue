<template>
  <div id="page">
    <div id="head">
      <img src="../../assets/simpsons.png">
    </div>
    <div id="content">
      <citizens></citizens>
      <citizen></citizen>
    </div>
  </div>
</template>

<script>
import citizens from "./Citizens";
import citizen from "./Citizen";

export default {
  components: { citizens, citizen }
};
</script>
