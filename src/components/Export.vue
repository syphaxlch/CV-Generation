<script setup>
import jsPDF from "jspdf";

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
function downloadPdf()
{
  const doc = new jsPDF();
  doc.html(document.getElementById("cv"));
}


function exportCv(){
  let exp = {PersonalDetails: PersonalDetails,
    experiences: experiences,
    diplomes: diplomes,
    links: links,
    Apropos: Apropos,
    langues: langues,
    divers: divers,
    competences: competences,
  }

  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exp));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", "CV" + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function uploadCv(){

    const files = document.getElementById('selectFiles').files;
    if (files.length <= 0) {
      return false;
    }

    const fr = new FileReader();

    fr.onload = e => {
      console.log("test" + e.target.result);
      let perdu = JSON.parse(e.target.result);


      store.PersonalDetails = perdu.PersonalDetails;
      store.experiences = perdu.experiences;
      store.diplomes = perdu.diplomes;
      store.links = perdu.links;
      store.Apropos = perdu.Apropos;
      store.langues = perdu.langues;
      store.divers = perdu.divers;
      store.competences = perdu.competences;
      
      // console.log(links);
    }
    fr.readAsText(files.item(0));
}



</script>

<template>
<h1>Export du pdf</h1>
  <button @click="exportCv">Export</button>
  <input type="file" id="selectFiles" />
  <button id="import" @click="uploadCv">Import The File!</button>
<!--  <pre id="result"></pre>-->
<!--  <a download="CV.html" href="#cv"> telecharger en html </a>-->

</template>


<style scoped>
h1{
  color: black;
}
</style>