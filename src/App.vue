
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
    <Menu />
    <Liste_CV />
    <div id="Core">
      <Question id="question" />
      <component id="cv" :is="store.displayCv" />
    </div>
    <div>
      <Export />
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
}

#cv{
  width: 60%;
  height: 1000px;
  overflow: auto;
}


</style>
