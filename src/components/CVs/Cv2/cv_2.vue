<script setup>
// import {PersonalDetails} from "./Question.vue";
</script>


    <template>
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="new-style.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>CV Nouveau Style</title>
          </head>
          <body>
            <section class="main-content">
              <header>
                <section class="pic">
                  <h1>Mehdi Zaaboub</h1>
                  <img src="src/assets/photo.png" width="200" alt="profile">
                </section>
                <section class="profile">
                  <p>
                    Jeune étudiant dynamique en informatique à l'UQAC, passionné par les nouvelles technologies et le sport de haut niveau. Ma détermination, ma curiosité et ma quête incessante de connaissances me permettront de contribuer de manière significative à des projets innovants et d'exceller dans ce domaine dynamique.
                  </p>
                </section>
              </header>
              <section class="contact">
                <h2>Contact</h2>
                <ul class="contact-list">
                  <li>
                    <img src="images/email-icon.png" width="30" alt="email">
                    <a href="mailto:mzaaboub1@etu.uqac.ca">mzaaboub1@etu.uqac.ca</a>
                  </li>
                  <li>
                    <img src="images/phone-icon.png" width="30" alt="tel">
                    <a href="tel:5819929399">581-992-9399</a>
                  </li>
                  <!-- Ajoutez d'autres informations de contact au besoin -->
                </ul>
              </section>
              <section class="langues">
                <h2>Langues</h2>
                <ul>
                  <li>Français</li>
                  <li>Anglais</li>
                  <li>Arabe</li>
                  <li>Espagnol</li>
                </ul>
              </section>
              <section class="competence">
                <h2>Compétences</h2>
                <ul>
                  <li>MS Office (Word, Excel ...)</li>
                  <li>SQL</li>
                  <li>Java</li>
                  <li>HTML, CSS, JS</li>
                  <li>Python</li>
                  <li>C++</li>
                  <!-- Ajoutez d'autres compétences au besoin -->
                </ul>
              </section>
              <section class="formation">
                <h2>Formation</h2>
                <ul>
                  <li>
                    <span>2022 - Aujourd'hui</span>
                    <h4>Baccalauréat en informatique</h4>
                    <p>UQAC, Chicoutimi, QC</p>
                  </li>
                  <li>
                    <span>2019 - 2021</span>
                    <h4>Préparatoire intégrée_cycle</h4>
                    <p>École Polytechnique Privée de Sousse, Tunisie</p>
                  </li>
                  <li>
                    <span>2015 - 2019</span>
                    <h4>Collégiales en sciences techniques</h4>
                    <p>Lycée des étoiles 14 janvier, Sousse, Tunisie</p>
                  </li>
                  <!-- Ajoutez d'autres formations au besoin -->
                </ul>
              </section>
              <section class="experience-pro">
                <h2>Expérience Professionnelle</h2>
                <ul>
                  <li>
                    <span>2021 - 2022</span>
                    <h4>Conseiller à la vente</h4>
                    <p>La Baie d'Hudson</p>
                  </li>
                  <li>
                    <span>2022 - 2023</span>
                    <h4>Gérant</h4>
                    <p>Sungluss-Hut</p>
                  </li>
                  <li>
                    <span>2017 - Aujourd'hui</span>
                    <h4>Coach de tennis</h4>
                    <p>Tennis Club Tunis</p>
                  </li>
                  <li>
                    <span>2017 - Aujourd'hui</span>
                    <h4>Préparateur physique</h4>
                    <p>Tennis Club de Sousse</p>
                  </li>
                  <!-- Ajoutez d'autres expériences professionnelles au besoin -->
                </ul>
              </section>
              <section class="activites-sociales">
                <h2>Activités et Engagements Sociaux</h2>
                <ul>
                  <li>
                    <span>2020 - 2021</span>
                    <h4>Vice-président événementiel</h4>
                    <p>Club Tunivision EPS, Tunisie</p>
                  </li>
                  <li>
                    <span>2019 - 2020</span>
                    <h4>Assistant événementiel</h4>
                    <p>Club Tunivision EPS, Tunisie</p>
                  </li>
                  <!-- Ajoutez d'autres activités sociales au besoin -->
                </ul>
              </section>
            </section>
          </body>
        </html>
      </template>
      
      <style scoped>
        body {
          font-family: 'Roboto', sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
          color: #333;
        }
      
        header {
          background-color: #3498db;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
      
        .pic img {
          border-radius: 50%;
        }
      
        .profile {
          text-align: justify;
          padding: 20px;
          color: #555;
        }
      
        .contact, .langues, .competence, .formation, .experience-pro, .activites-sociales {
          padding: 20px;
          background-color: #fff;
          margin-top: 20px;
        }
      
        h2 {
          color: #333;
          border-top: 1px solid #ddd;
          padding-top: 10px;
        }
      
        ul {
          list-style: none;
          padding: 0;
        }
      
        li {
          margin-bottom: 10px;
        }
      
        span {
          display: inline-block;
          margin-bottom: 5px;
        }
      </style>
      
