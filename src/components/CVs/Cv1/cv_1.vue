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

<h1></h1>
    <section class="profile bordered-section">
        <header>
            <section class="pic">
                <!-- Titre avec le nom de l'auteur -->
                <h3>{{ PersonalDetails[0].value }}
                  {{ PersonalDetails[1].value }}</h3>
                <img src="src/assets/photo.png" width="130" alt="profile">
            </section>
            <!-- Section profile -->
            <section class="profile">
                <h2>Profile</h2>
                <ul>
                    <li>
                      {{ Apropos.value }}
                    </li>
                </ul>
            </section>
        </header>
        <div class="premiere_partie">
            <div class="colone">
                <!--Section contact -->
                <section class="contact">
                    <h2>contact</h2>
                    <ul class="contact-list">
                        <li>
                            <img src="images/icons8-email-96.png" width="30" alt="email"><br>
                            <a href="mailto:mzaaboub1@etu.uqac.ca">
                              {{ PersonalDetails[3].value }}</a>
                            <!-- Adresse e-mail de contact -->
                        </li>
                        <li>
                            <img src="images/tel.png" width="30" alt="tel"><br>
                            <a href="tel:5819929399">{{ PersonalDetails[4].value }}</a>
                            <!-- Numéro de téléphone -->
                        </li>
                        <li>
                            <img src="images/maps.png" width="30" alt="maps"><br>
                            <a href="">{{ PersonalDetails[2].value }}</a>

                        </li>
                    </ul>
                </section>

                <!-- Section de langues -->
                <section class="langues">
                    <h2>Langues</h2>
                    <ul v-for="langue in langues">
                        <li>{{langue.langue["value"]}}</li>
                    </ul>
                </section>
                <!-- Sectionde compretances -->
                <section class="competance">
                    <h2>Competances</h2>
                  <ul v-for="competence in competences">
                    <p>
                      {{competence.value}}
                    </p>
                  </ul>
                </section>
                <!-- Section centre d'interets -->
                <section class="centre_interets">
                    <h2>centre d'interets</h2>
                  <ul v-for="diver in divers">
                    <p>
                      {{diver.value}}
                    </p>
                  </ul>
                </section>
                <!-- Section qualité-->
                <section class="qualite">
                    <h2>Qualités</h2>
                    <ul>
                        <li>Esprit d'equipe</li>
                        <li>Capacité d'organisation</li>
                        <li>gestion de stress</li>
                        <li>sociable</li>
                    </ul>
                </section>

            </div>
            <div class="colone">
                <!-- Section de formation -->
                <section class="Formation">
                    <h2>Formation</h2>
                    <ul class="periode" v-for="diplome in diplomes">
                        <li class="list-item">
                            <div>
                                <div class="span-h4-container">
                                    <span>{{diplome.date_obtention["value"]}} {{diplome.date_fin["value"]}}</span>
                                    <h4>{{diplome.diplome["value"]}}</h4>
                                </div>
                                <p>{{diplome.Etablissement["value"]}}, {{diplome.Ville["value"]}}</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <!-- Section de formation professionnelle -->
                <section class="formation_pro">
                    <h2>Formation profetionnel</h2>

                    <ul class="periode" v-for="experience in experiences">
                        <li class="list-item" >
                            <div>
                                <div class="span-h4-container">
                                    <span>{{ experience.date_debut["value"] }} {{ experience.date_fin["value"] }}</span>
                                    <h4>{{ experience.poste["value"]}}</h4>
                                </div>
                                <p>{{experience.employeur["value"]}}</p>
                            </div>
                        </li>

                      </ul>
                </section>
                <!-- Section activités et engagements sociaux -->
                <section class="Activites">
                    <h2>activités et engagements sociaux</h2>

                    <ul class="periode">
                        <li class="list-item">
                            <div>
                                <div class="span-h4-container">
                                    <span>2020 2021</span>
                                    <h4>Vice-président évènementiel</h4>
                                </div>
                                <p>Club tunivision eps, Tunisie</p>
                            </div>
                        </li>
                        <li class="list-item">
                            <div>
                                <div class="span-h4-container">
                                    <span>2019 2020</span>
                                    <h4>assistant evènementiel</h4>
                                </div>
                                <p>Club tunivision eps, Tunisie</p>
                            </div>
                        </li>
                    </ul>
                </section>


            </div>
        </div>
    </section>

</body>

    </template>
    <style scoped>

    * {
        padding: 1;
        margin: 2;
        box-sizing: border-box;
    }
    
    html {
        color: black;
        font-family: "Cinzel";
    }
    
    body {
        padding: 2rem 2.5rem;
        background-image: url(images/back2.jpeg);
        background-size: 800px;
        background-size: cover;
    }
    
    h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        border-top: 1px solid #888;
        border-bottom: 1px solid #888;
        padding: 1rem;
    }
    
    h2 {
        font-size: 1.5rem;
        text-transform: uppercase;
        border-top: 1px solid #888;
        border-bottom: 1px solid #888;
        padding: 1rem;
        color: rgb(87, 23, 2);
        line-height: 1em;
    }
    
    h3 {
        font-size: 2rem;
        text-transform: uppercase;
        color: rgb(52, 102, 176);
        padding: 1rem;
    }
    
    h4 {
        font-size: 1rem;
        text-transform: lowercase;
        color: rgb(112, 88, 52);
        padding: 1rem;
        line-height: 1em;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    p {
        line-height: 1.5;
    }
    
    ul {
        list-style: none;
        margin: 0;
    }
    
    li {
        list-style: none;
    }
    
    span {
        margin-right: 10px;
        /* Adjust as needed for spacing */
    }
    
    p {
        margin-top: 10px;
        /* Adjust as needed */
    }
    
    .pic {
        text-align: center;
    }
    
    .pic img {
        border-radius: 999999px;
        width: 240px;
        height: 240px;
    }
    
    .profile {
        color: darkred;
        font-style: italic;
        text-align: center;
        text-transform: uppercase;
        padding: 1rem;
    }
    
    .profile li {
        text-align: center;
        padding: 1rem;
    }
    
    .contact {
        text-transform: uppercase;
        /* padding: 1rem; */
    }
    
    .contact-list {
        list-style: none;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
    }
    
    .contact-list li {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .contact-list li img,
    .contact-list li a {
        margin: -3px;
    }
    
    .competance>ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid: cap 10px;
    }
    
    .evenement {
        display: grid;
        grid-template-columns: 5ch 1fr;
        padding: 1rem;
    }
    
    .contenue {
        border-left: 1px;
        padding-left: 1rem;
        margin-left: 1rem;
        line-height: 0;
    }
    
    .premiere_partie {
        display: grid;
        grid-template-columns: 50% 0.8fr;
        grid-gap: 1rem;
    }
    
    .langues>ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid: cap 1rem;
    }
    
    .section {
        margin: 0;
    }
    
    .list-item {
        display: flex;
        flex-direction: column;
    }
    
    .span-h4-container {
        display: flex;
        align-items: center;
        /* margin-bottom: 10px; */
        /* Adjust as needed */
    }
    
    h4 {
        margin: 0;
        padding: 0;
        /* Adjust as needed */
    }
    
    .premiere_partie {
        display: grid;
        grid-template-columns: 1.5fr 2fr;
        /* 2/3 pour la première colonne, 1/3 pour la deuxième colonne */
        grid-gap: 1rem;
        /* Espace entre les colonnes */
    }
    
    .bordered-section {
        border: 20px solid rgb(60, 0, 0);
        /* Remplacez 'red' par la couleur de votre choix */
        padding: 0.5rem;
        /* Ajoute un peu d'espace à l'intérieur du contour */
    }
    
    @media (max-width: 800px) {
        /* Styles pour les écrans dont la largeur est de 768 pixels ou moins (typiquement des smartphones) */
    }
</style>