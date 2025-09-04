<script setup>
import {PhArrowLineUp} from "@phosphor-icons/vue";
import {reactive, ref} from "vue";
import {useCvStore} from "@/components/Store";
import Cv_6 from "@/components/CVs/Cv6/cv_6.vue";
import Cv_1 from "@/components/CVs/Cv1/cv_1.vue";
import Cv_2 from "@/components/CVs/Cv2/cv_2.vue";
import Cv_3 from "@/components/CVs/Cv3/cv_3.vue";
import Cv_4 from "@/components/CVs/Cv4/cv_4.vue";
import Cv_5 from "@/components/CVs/Cv5/cv_5.vue";
import Cv_7 from "@/components/CVs/Cv7/cv_7.vue";
import Cv_8 from "@/components/CVs/Cv8/cv_8.vue";
const store = useCvStore();


const ImageCv = reactive([
  {link: 'src/components/CVs/Cv1/Image.png', name: 'Cv_1', component: Cv_1},
  // {link: 'src/components/CVs/Cv2/Image.png', name: 'Cv_2', component: Cv_2},
  {link: 'src/components/CVs/Cv3/Image.png', name: 'Cv_3', component: Cv_3},
  {link: 'src/components/CVs/Cv4/Image.png', name: 'Cv_4', component: Cv_4},
  {link: 'src/components/CVs/Cv5/Image.png', name: 'Cv_5', component: Cv_5},
  {link: 'src/components/CVs/Cv6/Image.png', name: 'Cv_6', component: Cv_6},
  {link: 'src/components/CVs/Cv7/Image.png', name: 'Cv_7', component: Cv_7},
  {link: 'src/components/CVs/Cv8/Image.png', name: 'Cv_8', component: Cv_8},
]);

function ShowList() {  //Bouton pour masquer la liste des CV
  let ListElement = document.getElementById("listCv");
  if (getComputedStyle(ListElement).display === "none") {
    ListElement.style.display = "flex";
    document.getElementById("ButtonItem").style.transform = 'rotate(0deg)'
  } else {
    ListElement.style.display = "none";
    document.getElementById("ButtonItem").style.transform = 'rotate(180deg)'
  }
}

function selectCv(element){
  console.log(element);
  store.displayCv = ImageCv[ImageCv.indexOf(element)].component;
}


</script>

<template>
  <div>
    <ul id="listCv">
      <li v-for="item in ImageCv">
        <img :src=item.link :alt=item.name  @click="selectCv(item)">
      </li>
    </ul>
    <div class="ShowButton">
      <i>
        <button id="ButtonItem" v-on:click="ShowList()">
          <ph-arrow-line-up :size="16" weight="duotone"/>
        </button>
      </i>
    </div>

  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

li {

}

ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style-type: none;
  margin: 5px 0 0 0;
  padding: 0;
  overflow: scroll;
  width: 100%;
  background-color: #CCCCCC;
}

img {
  display: block;
  color: white;
  text-align: center;
  padding: 2px;
  text-decoration: none;
  width: 125px;
  height: 158px;
}

img:hover {
  background-color: #555555;
}

.ShowButton {
  display: flex;
  align-items: center;
}

.ShowButton button {
  align-items: center;
  width: 75px;
  border-radius: 15px;
  background-color: rgba(206, 214, 224, 1.0);
  border-style: solid;

}

.ShowButton i {

}

.ShowButton button:hover {
  background-color: rgba(164, 176, 190, 1.0);
}

</style>