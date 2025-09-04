<script setup>
import {useCvStore} from "@/components/Store";

const store = useCvStore();
const PersonalDetails = store.PersonalDetails;
const experiences = store.experiences;
const diplomes = store.diplomes;
const links = store.links;
const Apropos = store.Apropos;
const langues = store.langues;
const divers = store.divers;
const competences = store.competences;
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
  </head>

  <body>
  <div class="corpsCV">

    <header>
      <img src="src/assets/photo.png" alt="my PIC">
      <h1 class="nom_prenom">{{ PersonalDetails[0].value }}
        {{ PersonalDetails[1].value }}</h1>


      <a href="mailto:"><i class="fa fa-solid fa-envelope" style="color: #690f0f;">
        {{ PersonalDetails[3].value }}</i></a>

      <a href="callto:"><i class="fa fa-solid fa-phone" style="color: #690f0f;">
        {{ PersonalDetails[4].value }}</i></a>

      <a href=""><i class="fa fa-brands fa-facebook"
                                                        style="color: #690f0f;"> {{ PersonalDetails[0].value }}
        {{ PersonalDetails[1].value }}</i></a>

      <a href=""><i
          class="fa fa-solid fa-house" style="color: #690f0f;"> {{ PersonalDetails[2].value }}</i></a>




    </header>
    <div class="contenu">
      <div class="borderAF">
        <h2><i class="fa-solid fa-circle-info" style="color: #690f0f;"></i> À propos de moi :</h2>
        <p>{{ Apropos.value }}</p>

        <h2><i class="fa-solid fa-graduation-cap" style="color: #690f0f;"></i> Formations :</h2>

        <ul v-for="diplome in diplomes">
          <li>
            <strong>{{diplome.diplome["value"]}}</strong>
            <p><em>{{diplome.Etablissement["value"]}}, {{diplome.Ville["value"]}}
            </em></p>
            <p>{{diplome.date_obtention["value"]}}-{{diplome.date_fin["value"]}}</p>
          </li>

        </ul>
      </div>
      <div class="borderautre">
        <h2><i class="fa-solid fa-briefcase" style="color: #690f0f;"></i> Expériences professionnelles :
        </h2>
        <ul v-for="experience in experiences">
          <p><b>{{ experience.date_debut["value"] }}-{{ experience.date_fin["value"] }}</b>| <br>
            {{ experience.poste["value"] }} <br>
            <i>{{ experience.employeur["value"] }}</i>
          </p>
        </ul>
      </div>
    </div>



    <div class="borderautre">
      <h2><i class="fa-solid fa-brain" style="color: #690f0f;"></i> Compétences :</h2>
      <ul v-for="competence in competences">
        <li>{{competence.value}}</li>
      </ul>
      <h2><i class="fa-solid fa-language" style="color: #690f0f;"></i> Langues :</h2>
      <ul v-for="langue in langues">
        <li>{{langue.langue["value"]}} : {{langue.niveau["value"]}}</li>
      </ul>

      <h2><i class="fa-solid fa-earth-americas" style="color: #690f0f;"></i> Divers :</h2>
      <ul v-for="diver in divers">
        <li>{{diver.value}}</li>
      </ul>
    </div>

  </div>

  </body>
  </html>
</template>

<style scoped>
body {
  color: rgb(35, 35, 35);
  font-family: Arial, sans-serif;
  background-color: rgb(209, 82, 51);
  margin: 0;
  padding: 20px;

}

.corpsCV {
  max-width: 800px;
  margin: auto;
  background-color: #e9aea3;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

p {
  line-height: 1.2;
}

header {
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 45%;
}

.nom_prenom {
  font-size: 30px;
  margin: 13px 0;

}

li {
  margin-bottom: 20px;
}

.fa {
  /*pour les liens a */
  font-size: 15px;
  padding: 10px;

}

.borderAF {
  border: 2px solid rgb(235, 106, 73);
  border-radius: 10px;
  padding: 10px;
  background-color: #eb9696;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.borderautre {
  margin-top: 10px;
  border: 2px solid rgb(235, 73, 73);
  border-radius: 10px;
  padding: 10px;
  background-color: #eb9696;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>