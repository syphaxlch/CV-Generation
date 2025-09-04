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
  <div class="cv-container">
    <div class="cv-header">
      <img src="src/assets/photo.png" alt="Profile Picture">
      <h1 class="name">{{ PersonalDetails[0].value }} {{ PersonalDetails[1].value }}</h1>
    </div>
    <div class="cv-content">
      <div class="about-me">
        <h2>About Me</h2>
        <p>{{ Apropos.value }}</p>
      </div>
      <div class="education">
        <h2>Education</h2>
        <ul v-for="diplome in diplomes">
          <li>
            <strong>{{ diplome.diplome["value"] }}</strong>
            <p><em>{{ diplome.Etablissement["value"] }}, {{ diplome.Ville["value"] }}</em></p>
            <p>{{ diplome.date_obtention["value"] }}-{{ diplome.date_fin["value"] }}</p>
          </li>
        </ul>
      </div>
      <div class="experience">
        <h2>Professional Experience</h2>
        <ul v-for="experience in experiences">
          <li>
            <p><b>{{ experience.date_debut["value"] }}-{{ experience.date_fin["value"] }}</b>| <br>
              {{ experience.poste["value"] }} <br>
              <i>{{ experience.employeur["value"] }}</i>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="cv-sidebar">
      <div class="contact-info">
        <h2>Contact Information</h2>
        <a href="mailto:">{{ PersonalDetails[3].value }}</a>
        <a href="callto:">{{ PersonalDetails[4].value }}</a>
        <a href="https://www.facebook.com/{{ PersonalDetails[0].value }}{{ PersonalDetails[1].value }}" target="_blank">
          Facebook
        </a>
        <a href="{{ PersonalDetails[2].value }}" target="_blank">Address</a>
      </div>
      <div class="skills">
        <h2>Skills</h2>
        <ul v-for="competence in competences">
          <li>{{competence.value }}</li>
        </ul>
      </div>
      <div class="languages">
        <h2>Languages</h2>
        <ul v-for="langue in langues">
          <li>{{ langue.langue["value"] }} : {{ langue.niveau["value"] }}</li>
        </ul>
      </div>
      <div class="interests">
        <h2>Interests</h2>
        <ul v-for="diver in divers">
          <li>{{ diver.value }}</li>
        </ul>
      </div>
    </div>
  </div>
  </body>


</template>

<style scoped>
body {
  color: #333;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 40px; /* Increased padding for a larger CV */
}

.cv-container {
  max-width: 1200px; /* Increased maximum width */
  margin: auto;
  display: flex;
  background-color: rgb(198, 236, 235);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cv-header {
  flex: 1;
  padding: 40px; /* Increased padding */
  text-align: center;
  background-color: #6ea2c4;
  color: rgb(107, 176, 184);
}

.cv-header img {
  width: 200px; /* Increased image size */
  height: 200px; /* Increased image size */
  border-radius: 50%;
}

.name {
  margin: 20px 0; /* Increased margin */
  font-size: 30px; /* Increased font size */
}

.cv-content {
  flex: 2;
  padding: 40px; /* Increased padding */
}

.cv-content h2 {
  color: #3498db;
}

.cv-sidebar {
  flex: 1;
  padding: 40px; /* Increased padding */
  background-color: #c9cdcf;
}

.cv-sidebar h2 {
  color: #2c3e50;
}

.contact-info a {
  display: block;
  margin-bottom: 20px; /* Increased margin */
  color: #3498db;
  text-decoration: none;
}

.skills,
.languages,
.interests {
  margin-top: 40px; /* Increased margin */
}

.skills ul,
.languages ul,
.interests ul {
  list-style-type: none;
  padding: 0;
}

.skills li,
.languages li,
.interests li {
  margin-bottom: 15px; /* Increased margin */
}

</style>