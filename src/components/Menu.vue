<script setup>

</script>

<template>
  <li>
    <ul> <a href="#">Accueil</a></ul>
    <ul> <a href="#cv">CV</a></ul>
<!--    <ul> <a href="Export.vue">Export</a></ul>-->
  </li>

</template>

<style scoped>
li{
  display: flex;
  flex-direction: row;
  background-color: #333333;
}

ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

}

a{
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}


li a:hover {
  background-color: #111111;
  color: rgba(210, 218, 226,1.0);
}

</style>