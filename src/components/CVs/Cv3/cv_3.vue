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



  <body>
  <div class="corpsCV">
    <div class="gauche">
      <header>
        <img src="src/assets/photo.png" alt="my PIC">
        <h1 class="nom_prenom">{{ PersonalDetails[0].value }}
          {{ PersonalDetails[1].value }}</h1>


      </header>
      <div class="contenu">
        <div class="borderAF">
          <h2><i class="fa-solid fa-circle-info" style="color: #3f97ca;"></i> À propos de moi :</h2>
          <p>{{ Apropos.value }}</p>

          <h2><i class="fa-solid fa-graduation-cap" style="color: #3f97ca;"></i> Formations :</h2>

          <ul v-for="diplome in diplomes">
            <li>
              <strong>{{diplome.diplome["value"]}}</strong>
              <p><em>{{diplome.Etablissement["value"]}}, {{diplome.Ville["value"]}}
              </em></p>
              <p>{{diplome.date_obtention["value"]}}-{{diplome.date_fin["value"]}}</p>
            </li>

          </ul>
        </div>
        <div class="borderEXP">
          <h2><i class="fa-solid fa-briefcase" style="color: #3f97ca;"></i> Expériences professionnelles :
          </h2>
          <ul v-for="experience in experiences">
            <p><b>{{ experience.date_debut["value"] }}-{{ experience.date_fin["value"] }}</b>| <br>
              {{ experience.poste["value"] }} <br>
              <i>{{ experience.employeur["value"] }}</i>
            </p>
          </ul>
        </div>
      </div>
    </div>
    <div class="droite">
      <div>

        <a href=""><i class="fa fa-solid fa-envelope" style="color: #131f85;">
          </i>{{ PersonalDetails[3].value }}</a>

        <a href="callto:"><i class="fa fa-solid fa-phone" style="color: #131f85;">
          {{ PersonalDetails[4].value }}</i></a>

        <a href=""><i class="fa fa-brands fa-facebook"
                                                          style="color: #131f85;"> {{ PersonalDetails[0].value }}
          {{ PersonalDetails[1].value }}</i></a>

        <a href=""><i
            class="fa fa-solid fa-house" style="color: #131f85;"> {{ PersonalDetails[2].value }}</i></a>


      </div>
      <div class="borderautre">
        <h2><i class="fa-solid fa-brain" style="color: #3f97ca;"></i> Compétences :</h2>
        <ul v-for="competence in competences">
          <li>{{competence.value}}
          </li>
        </ul>
        <h2><i class="fa-solid fa-language" style="color: #3f97ca;"></i> Langues :</h2>
        <ul v-for="langue in langues">
          <li>{{langue.langue["value"]}} : {{langue.niveau["value"]}}</li>
        </ul>

        <h2><i class="fa-solid fa-earth-americas" style="color: #3f97ca;"></i> Divers :</h2>
        <ul v-for="diver in divers">
          <li>{{diver.value}}</li>
        </ul>
      </div>
    </div>
  </div>

  </body>

</template>

<style scoped>
body {
  color: rgb(35, 35, 35);
  font-family: Arial, sans-serif;
  background-color: rgb(73, 176, 235);
  margin: 0;
  padding: 20px;
}

.corpsCV {
  max-width: 800px;
  margin: auto;
  background-color: #a3d5e9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
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
  line-height: 1.5;
}

.fa {
  /*pour les liens a */
  font-size: 15px;
  padding: 15px;
  line-height: 1.5;
}

.gauche {
  flex: 2;
  padding-right: 20px;

}

.droite {
  flex: 1;
  background-color: #a3d5e9;

  padding: 20px;

}

.borderAF {
  border: 2px solid rgb(73, 176, 235);
  border-radius: 10px;
  padding: 10px;
  background-color: #96d3eb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.borderEXP {
  margin-top: 10px;
  border: 2px solid rgb(73, 176, 235);
  border-radius: 10px;
  padding: 10px;
  background-color: #96d3eb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.borderautre {
  margin-top: 57px;
  border: 2px solid rgb(73, 176, 235);
  border-radius: 10px;
  padding: 10px;
  background-color: #96d3eb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>