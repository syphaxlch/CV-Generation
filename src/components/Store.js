import {defineStore} from "pinia";
import {reactive, ref} from "vue";


export const useCvStore = defineStore('store', () => {
    const Apropos = ref();
    const displayCv = ref();
    const PersonalDetails = ref();
    const experiences = ref();
    const diplomes = ref();
    const links = ref();
    const divers = ref();
    const langues = ref();
    const competences = ref();
    return {displayCv, PersonalDetails ,experiences, diplomes, links, divers,langues,competences, Apropos}
})