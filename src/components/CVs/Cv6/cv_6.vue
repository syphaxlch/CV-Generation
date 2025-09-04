<script setup>
// import {PersonalDetails} from "./Question.vue";
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
  <div>
    <main>
      <h1>Curriculum vitæ</h1>
      <div class="entete_cv">
        <div class="entete_contenue">
          <p>
            <i class="ph-duotone ph-identification-badge"></i> {{ PersonalDetails[0].value }}
            {{ PersonalDetails[1].value }}
          </p>
          <p></p>
          <i class="ph-duotone ph-house-line"></i> {{ PersonalDetails[2].value }}

        </div>

        <div>
          <img src="src/assets/photo.png" alt="photo">
          <!-- site de l'image https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg-31.ccm2.net%2Fir8UXffPl_HpDZ8-T9D26P7mC-c%3D%2F910x%2Fsmart%2F8c42e62b03764588a459408f80c41e81%2Fccmcms-hugo%2F29874657.jpg&tbnid=YocYLr79EmDXNM&vet=12ahUKEwie2L7quPWBAxV0UjUKHQz4BHYQMygIegQIARB_..i&imgrefurl=https%3A%2F%2Fhugolescargot.journaldesfemmes.fr%2Fcomptines-enfants%2Fconte-pour-enfant%2F53741-la-petite-poule-rousse%2F&docid=K3aRT1p5nSh8aM&w=910&h=643&q=poule&client=ubuntu&ved=2ahUKEwie2L7quPWBAxV0UjUKHQz4BHYQMygIegQIARB_ -->
        </div>

        <div class="entete_contenue">
          <p><i class="ph-duotone ph-at"></i> <a href="mailto">{{ PersonalDetails[3].value }}</a></p>
          <p><i class="ph-duotone ph-phone"></i> <a href="tel:4242424242">{{ PersonalDetails[4].value }}</a></p>

          <div v-for="link in links">
            <i class="ph-duotone ph-link-simple"></i>
            <a :href="link.link"> {{ link.name }} </a>
          </div>
        </div>
      </div>

      <div class="core_cv">
        <div class="langue">
          <div>
            <h2> À propos </h2>
            <p>{{ Apropos.value }}
            </p>
            <h2> Langues </h2>
            <table>
              <tr v-for="langue in langues">
                <td>{{langue.langue["value"]}}</td>
                <td>{{langue.niveau["value"]}}</td>
              </tr>
            </table>
            <h2> Compétences </h2>
            <ul v-for="competence in competences">
              <p>
                {{competence.value}}
              </p>
            </ul>


            <h2> Divers </h2>
            <ul v-for="diver in divers">
              <p>
                {{diver.value}}
              </p>
            </ul>
            <p></p>
          </div>
        </div>


        <div class="experience_formation">
          <div class="experience">
            <h2> Expériences professionnelles</h2>

            <ul v-for="experience in experiences">
              <p><b>{{ experience.date_debut["value"] }}-{{ experience.date_fin["value"] }}</b>| <br>
                {{ experience.poste["value"] }} <br>
                <i>{{ experience.employeur["value"] }}</i>
              </p>
            </ul>
          </div>
          <div class="formation">
            <h2>Formations</h2>
            <ul v-for="diplome in diplomes">
              <li> {{diplome.diplome["value"]}}
                <p> {{diplome.date_obtention["value"]}}-{{diplome.date_fin["value"]}} | {{diplome.Etablissement["value"]}}, {{diplome.Ville["value"]}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
  </body>
</template>

<style scoped>



body {
  /* exterieur du cv*/
  background-color: aqua;
  display: flex;
  justify-content: center;
}

main {
  margin: 15px;
  background-color: #BFBFBF;
  background-position: center;
  background-image: url(src/assets/background oeuf.png);
  /* lien : https://img.freepik.com/vecteurs-premium/oeuf-or-isole-fond-translucide-pour-jour-paques_8443-3.jpg*/
  max-width: 800px;
  border: 15px;
  border-style: dashed;

}

main h1 {
  border: 2px;
  border-style: solid;
  text-align: center;
  background-color: rgb(30, 210, 160);
  border-radius: 15px;
}

img {
  margin: 5px 0px;
  justify-content: center;
  width: 150px;
  border-radius: 50px;
  /*arrondie sur la photo*/
}

.entete_cv {
  display: flex;
  justify-content: space-between;
  background-color: rgb(160, 101, 255);
  margin: 25px;
  border: 5px;
  border-style: groove;
  border-color: rgb(225, 177, 44);
}

.entete_contenue {
  margin: 0 15px;
  flex-basis: 30%;
}

.core_cv {
  display: flex;
  margin: 15px 0px;
}

.langue { /*section gauche du corps du CV */
  margin: 0px 5px;
  flex-basis: 40%;
  background-color: rgb(30, 210, 160);
  border: 1px;
  border-style: solid;
  border-radius: 2px;
}

.langue div {
  margin: 0px 15px;
}

.langue p {
  text-align: justify;
}

.experience_formation { /*section droite*/
  margin: 0px 5px;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
}

.experience_formation div {
  margin-bottom: 30px;
  background-color: rgb(30, 210, 160);
  border: 1px;
  border-style: solid;
  border-radius: 2px;
}

.experience_formation div * {
  margin-right: 15px;
  margin-left: 15px;
}
</style>