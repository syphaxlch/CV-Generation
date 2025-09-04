<script setup>
import {reactive, ref} from "vue";
import {PhPlus, PhTrash} from "@phosphor-icons/vue";
import {useCvStore} from "@/components/Store";
import index from "vuex";

const store = useCvStore();


let PersonalDetails = ref(
    [{name: 'Nom', value: '', placeholder: 'Entrez votre nom'},
      {name: 'Prénom', value: '', placeholder: 'Entrez votre prénom'},
      {name: 'Addresse', value: '', placeholder: 'Entrez votre adresse'},
      {name: 'Couriel',value: '', placeholder: 'Entrez votre couriel'},
      {name: 'Téléphone',value: '', placeholder: 'Entrez votre numéro de Téléphone'}
    ]);

let experiences = reactive(
    [
      {
        employeur: {name: "Nom de l'employeur", value: "", placeholder: "Entrer le nom de l'employeur", type: "text"},
        poste: {name: "Intitulé du poste", value: "", placeholder: "Entrer l'intitulé du poste", type: "text"},
        date_debut: {name: "Date de début", value: "", placeholder: "YYYY", type: "number", min: "1900", max: "2099"},
        date_fin: {name: "Date de fin", value: "", placeholder: "YYYY", type: "number", min: "1900", max: "2099"}
      }
    ]);



let diplomes = reactive(
    [
      {
        diplome: {name: "Diplome",value: "", placeholder: "Entrer le nom du diplome"},
        Etablissement: {name: "Etablissement", value: "", placeholder: "Entrer le nom de votre etabliseement"},
        Ville: {name: "Ville",value: "", placeholder: "Entrer la ville de votre etabliseement"},
        date_obtention: {
          name: "Date dedebut",
          value: "",
          placeholder: "YYYY",
          type: "number",
          min: "1900",
          max: "2099"
        },
        date_fin: {
          name: "Date d'obtention",
          value: "",
          placeholder: "YYYY",
          type: "number",
          min: "1900",
          max: "2099"}
      }
    ]);
let Apropos = ref({name: "A propos", value: "", placeholder:"A propos"});

let photo = reactive([
  {name: "Photo", value: "",placeholder:"Télécharger votre photo",type:"file"}
]);
let langues = reactive([
  {
    langue: {name: "Langue", value: "", placeholder: "Entrer une langue", type: "text"},
    niveau: {name: "Niveau", value: "", placeholder: "/5", type: "number", min: "1", max: "5"}
  }]);

let competences = reactive([

  {name:"competence", value:"",placeholder: "Entrer une competence"}
]);

let divers = reactive([
  {name: "Divers", value: "",placeholder:"Entrer des informations supplementaire",type:"text"}
]);

let links = reactive([
]);

const LinkAdd = ref('');
const NameAdd = ref('');
function submitPerso(evt) {
  if (NameAdd.value !== "" && LinkAdd.value !== "") {
    links.push({
      name: NameAdd.value,
      link: LinkAdd.value
    })
    //Réinitialisation des valeurs des champs à une chaine vide
    LinkAdd.value = "";
    NameAdd.value = "";
  }
  //Cela empeche le comportement par default du formulaire
  evt.preventDefault();
}
function addDiplome(){
  diplomes.push({
    diplome: {name: "Diplome", value: "", placeholder: "Entrer le nom du diplome"},
    Etablissement: {name: "Etablissement", value: "", placeholder: "Entrer le nom de votre etabliseement"},
    Ville: {name: "Ville",value: "", placeholder: "Entrer la ville de votre etabliseement"},
    date_obtention: {
      name: "Date de début",
      value: "",
      placeholder: "YYYY",
      type: "number",
      min: "1900",
      max: "2099"
    },
    date_fin: {name: "Date d'obtention",
      value: "",
      placeholder: "YYYY",
      type: "number",
      min: "1900",
      max: "2099"}
  });
}
function addExperience(){
  experiences.push({
    employeur: {name: "Nom de l'employeur",value: "", placeholder: "Entrer le nom de l'employeur", type: "text"},
    poste: {name: "Intitulé du poste", value: "", placeholder: "Entrer l'intitulé du poste", type: "text"},
    date_debut: {name: "Date de début",value: "", placeholder: "YYYY", type: "number", min: "1900", max: "2099"},
    date_fin: {name: "Date de fin",value: "", placeholder: "YYYY", type: "number", min: "1900", max: "2099"}
  });
}
function addDiver(){
  divers.push({name: "Divers", value: "",placeholder:"Entrer des informations suppleentaire",type:"text"});
}
function addLangue(){
  langues.push({
    langue: {name: "Langue", value: "", placeholder: "Entrer une langue", type: "text"},
    niveau: {name: "Niveau", value: "", placeholder: "/5", type: "number", min: "1", max: "5"}
  })};

function addCompetence(){
  competences.push({
    competence:{name:"competence",value:"",placeholder: "Entrer une competence"}
  })}

function deleteElement(link,links) {
  const index = links.indexOf(link);
  links.splice(index, 1);
}

store.PersonalDetails = PersonalDetails;
store.diplomes = diplomes;
store.links = links;
store.experiences = experiences;
store.divers = divers;
store.Apropos = Apropos;
store.langues = langues;
store.competences = competences;

console.log();
</script>


<template>
  <div class="container">
    <div class="infoPerso">
      <h2> Coordonnés personnelles </h2>
      <form>
        <div v-for="item in PersonalDetails" class="info">
          <label>{{ item.name}}</label><input v-model="item.value" :placeholder="item.placeholder" type="text"/>
        </div>
      </form>
      <div>
        <ul >
          <li class="linkTop">
            <i></i><span class="text">Nom du lien</span><span>Adresse du lien</span>
          </li>

          <li v-for="link in links" id="DisplayLink">
            <i class="icon icon-wrapper" @click="deleteElement(link,links)">
              <PhTrash :size="20" weight="duotone"></PhTrash>
            </i>
            <span class="text">{{ link.name }}</span><span>{{ link.link }}</span>
          </li>
          <li>
            <form action="" @submit="submitPerso" class="linkTop">
              <i class="icon icon-plus" @click="submitPerso">
                <ph-plus :size="20"/>
              </i>
              <input v-model="NameAdd" placeholder="entrez le nom de votre lien" type="text"/>
              <input v-model="LinkAdd" placeholder="entrez l'addresse de votre lien" type="text"/>
            </form>
          </li>
        </ul>
      </div>

    </div>
    <div class="experience">
      <h2>Expérience professionnelle</h2>
      <div v-for="(experience,index) in experiences" :key="index"  class="infopro">
        <form>
          <div v-for="item in experience">
            <label>{{ item.name }}</label>
            <input v-model="item.value" :max="item.max"
                   :min="item.min" :placeholder="item.placeholder" :type="item.type"/>
          </div>
        </form>
        <i class="icon icon-wrapper" v-if="index > 0" @click="deleteElement(experience,experiences)">
          <PhTrash :size="20" weight="duotone"></PhTrash>
        </i>
      </div>
<!--      <ul v-for="experience in experiences">-->
<!--        <p><b>{{ experience.date_debut["value"] }}-{{ experience.date_fin["value"] }}</b>| <br>-->
<!--          {{ experience.poste["value"] }} <br>-->
<!--          <i>{{ experience.employeur["value"] }}</i>-->
<!--        </p>-->
<!--      </ul>-->
      <div class="icons">
        <i class="icon icon-plus" @click="addExperience()">
          <ph-plus :size="20"/>
        </i>
      </div>
    </div>
    <div class="divers">
      <h2>A propos </h2>
      <form>
        <input class="Apropo" v-model="Apropos.value" :placeholder="Apropos.placeholder" type="text" size="4"/>
      </form>
    </div>


    <div class="diplome">
      <h2>Diplome</h2>
      <div v-for="(diplome, index) in diplomes" :key="index" class="infopro">
        <form>
          <div v-for="item in diplome" >
            <label>{{ item.name }}</label>
            <input v-model="item.value" :max="item.max" :min="item.min" :placeholder="item.placeholder"
                   :type="item.type"/>
          </div>
        </form>
        <i class="icon icon-wrapper" v-if="index > 0" @click="deleteElement(diplome,diplomes)">
          <PhTrash :size="20" weight="duotone"></PhTrash>
        </i>
      </div>
      <div class="icons">
        <i class="icon icon-plus" @click="addDiplome()">
          <ph-plus :size="20"/>
        </i>
      </div>
    </div>
    <div class="divers">
      <h2>Divers</h2>
      <div v-for="(diver, index) in divers" :key="index" class="infopro">
        <form>
          <input v-model="diver.value" :placeholder="diver.placeholder"
                 :type="diver.type"/>
          <p>{{diver.value}}</p>
        </form>
        <i class="icon icon-wrapper" v-if="index > 0" @click="deleteElement(diver,divers)">
          <PhTrash :size="20" weight="duotone"></PhTrash>
        </i>
      </div>
      <div class="icons">
        <i class="icon icon-plus" @click="addDiver()">
          <ph-plus :size="20"/>
        </i>
      </div>
    </div>

    <div class="langues">
      <h2>Langues </h2>
      <div v-for="(langue,index) in langues"  :key="index" class="infopro">
        <form>
          <div class="info" v-for="(item,index_langue) in langue" :key="index_langue">
            <label>{{ item.name}}</label>
            <input v-if="index_langue = 0" v-model="item.value" :placeholder="item.placeholder" :type="item.type"/>
            <input v-if="index_langue = 1" v-model="item.value" :max="item.max"
                   :min="item.min" :placeholder="item.placeholder" :type="item.type"/>
          </div>
        </form>
        <i class="icon icon-wrapper" v-if="index > 0" @click="deleteElement(langue,langues)">
          <PhTrash :size="20" weight="duotone"></PhTrash>
        </i>
      </div>
      <div class="icons">
        <i class="icon icon-plus" @click="addLangue()">
          <ph-plus :size="20"/>
        </i>
      </div>
    </div>


    <div class="competences">
      <h2>Competences</h2>
      <div v-for="(competence, index) in competences" :key="index" class="infopro">
        <form>
          <input v-model="competence.value" :placeholder="competence.placeholder"
                 type="text"/>
        </form>
        <i class="icon icon-wrapper" v-if="index > 0" @click="deleteElement(competence,competences)">
          <PhTrash :size="20" weight="duotone"></PhTrash>
        </i>
      </div>
      <div class="icons">
        <i class="icon icon-plus" @click="addCompetence()">
          <ph-plus :size="20"/>
        </i>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
//overflow-wrap: anywhere;
}
h2{
  text-align: center;
}
.container{
  height: 1000px;
  overflow-y: auto;
  margin-right: 20px;
  padding: 20px;
}

.info {
  margin: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.info input{
  width: 85%;
}

.info label{
  width: 15%;
}

.linkTop{
  display: flex;
  flex-direction: row;
}

.linkTop span{
  align-self: center;
  width: 45%
}

.linkTop i{
  padding: 10px;
  width: 10%;
}

form {
  display: flex;
  align-content: center;
  flex-direction: column;
}

form input {
  width: 50%;
  height: 35px;
  border: 1px solid blue;
  margin: 5px;
}

form i {
  margin-right: 5px;
}

form i:hover {
  background-color: #BFBFBF;
}

ul {
  list-style-type: none;
}

.icon-plus{
  cursor: pointer;
  background: blue;
  color: white;
  width: 10%;
  text-align: center;
  padding: 10px;
}
.icon-wrapper {
  cursor: pointer;
  background: red;
  color: white;
  width: 70px;
  text-align: center;
  padding: 10px;

}
.Liens input {
  width: 48%;
}

.Liens button {
  width: 4%;
}

#DisplayLink {
  display: flex;
  flex-direction: row;

}

li {
  align-items: center;
}

#DisplayLink span {
  width: 100%;
}

PhTrash {
  margin-right: 5px;
}

p {
  width: 100%;
}

.infopro {

}
.icons{
  display: flex;
  flex-direction: row;
  justify-content:flex-end;

}
.experience, .competences, .langues, .divers, .diplome, .infoPerso{
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background: #e5e5e5;
  padding: 10px;
  margin: 5px;
}

.experience form div{
  display: flex;
  flex-direction: row;
}

.infopro{
  border: 1px solid black;
  background: #cccccc;
  padding: 10px;
  margin: 5px;
}

.infopro div{
  flex-direction: row;
}

.infopro form div{
  align-items: center;
}

.infopro div label{
  width: 20%;
}

.infopro div input{
  width: 80%
}

.Apropo{

  width: auto;
  //margin-left: 10px;
  min-height: 100px;
}

</style>