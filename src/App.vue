<script setup>

import Menu from "@/components/Menu.vue";
import Liste_CV from "@/components/Liste_CV.vue";
import Question from "@/components/Question.vue";
import {useCvStore} from "@/components/Store";
import Export from "@/components/Export.vue";

const store = useCvStore();


</script>

<template>

    <div class="wrapper">
      <Menu></Menu>

      <Liste_CV></Liste_CV>
      <div id="Core">
        <Question id="question"></Question>
        <component id="cv" :is="store.displayCv"></component>
      </div>
      <div><Export></Export>

      </div>
    </div>
</template>

<style scoped>
#Core{
  display: flex;
}


#question{
  display: flex;
  width: 40%;
  //overflow: hidden;
}

#cv{
  width: 60%;
  height: 1000px;
  overflow: auto;
}


</style>
