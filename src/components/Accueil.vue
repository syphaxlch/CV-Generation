<template>
  <div id="page">
    <div class="txt">
      <h1>Bienvenue à la page d'accueil</h1>
      <p><strong>Construisez votre avenir professionnel en un clic avec notre outil de création de CV intuitif et efficace !</strong></p>
      <br>
      <button class="button" @click="$emit('start')">Commencer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
}
</script>

<style scoped>
.button {
  padding: 10px 20px;
  font-size: 1.2em;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.button:hover {
  background: #0056b3;
}
</style>
