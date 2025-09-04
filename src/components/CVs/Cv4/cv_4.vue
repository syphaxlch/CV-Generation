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
      <img alt="" src="src/assets/photo.png">
      <div class="coordonnees">
        <h2></h2>
        <a href="mailto:"><i class="fa fa-solid fa-envelope"
                                              style="color: #690f0f;margin-bottom: 10px;margin-left: 10px;">
          {{ PersonalDetails[3].value }}</i></a>

        <a href="callto:"><i class="fa fa-solid fa-phone"
                                         style="color: #690f0f;margin-bottom: 10px;margin-left: 10px;">
          {{ PersonalDetails[4].value }}</i></a>

        <a href=""><i class="fa fa-brands fa-facebook"
                                                          style="color: #690f0f;margin-bottom: 10px;margin-left: 10px;">
          {{ PersonalDetails[0].value }}
          {{ PersonalDetails[1].value }}</i></a>

        <a href="https://www.google.com/maps/place/617+Rue+Audet,+Chicoutimi,+QC+G7J+2W4/"><i
            class="fa fa-solid fa-house" style="color: #690f0f;margin-bottom: 10px;margin-left: 10px;"> {{ PersonalDetails[2].value }}</i></a>
      </div>
      <div>
        <h2><i class="fa-solid fa-language" style="color: #690f0f;"></i> Langues :</h2>
        <ul v-for="langue in langues">
          <li>{{langue.langue["value"]}} : {{langue.niveau["value"]}}</li>
        </ul>

        <h2><i class="fa-solid fa-earth-americas" style="color: #690f0f;"></i> Divers :</h2>
        <ul v-for="diver in divers">
          <li>{{diver.value}}</li>
        </ul>

        <h2><i class="fa-solid fa-brain" style="color: #690f0f;"></i> Compétences :</h2>
        <ul v-for="competence in competences">
          <li>{{competence.value}}</li>
        </ul>
      </div>
    </div>
    <div class="droite">
      <p class="etudiant"><strong class="nom">{{ PersonalDetails[0].value }}
        {{ PersonalDetails[1].value }}</strong><br>
        Etudiant</p>
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
</div>
  </body>

</template>

<style scoped>
body {
  color: #333;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;

}

.corpsCV {
  max-width: 800px;
  margin: auto;
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);


}

.gauche {

  flex: 1;
  background-color: #ddd;
  padding: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.droite {

  flex: 2;
  margin-top: auto;
  background-color: #ddd;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}

li {
  margin-bottom: 10px;
}

.etudiant {
  margin-left: 15px;
  margin-top: 8px;
}

.nom {

  font-size: 30px;
}

.borderAF,
.borderautre {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>