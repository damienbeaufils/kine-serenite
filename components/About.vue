<template>
  <v-card id="a-propos">
    <v-card-title class="custom-color-green white--text justify-center">
      <h2 class="text-h5 text-sm-h4">À propos</h2>
    </v-card-title>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="3">
          <v-img
            src="/img/virginie_dang_photo_profil.jpg"
            alt="Photo de profil de Virginie Dang"
            class="rounded mx-auto mt-5"
            :max-height="$vuetify.breakpoint.xsOnly ? '200px' : 'none'"
            :max-width="$vuetify.breakpoint.xsOnly ? '200px' : 'none'"
          >
          </v-img>
        </v-col>

        <v-col cols="12" sm="9">
          <v-card flat>
            <v-card-text class="custom-color-green--text pb-0">
              <h3 class="custom-color-green--text my-5">> Qui suis-je ?</h3>

              <p>
                Je suis Virginie et
                <b
                  >aller à la rencontre de l’autre pour l’aider a toujours fait
                  parti de mes valeurs.</b
                >
              </p>

              <p>
                J’ai découvert une véritable passion pour la massothérapie
                depuis 2020 — un feu intérieur que je nourris chaque jour :
                <b
                  >c’est ce mélange riche entre la compréhension du corps
                  humain, de l’esprit et la puissance du lien humain</b
                >.
              </p>

              <h3 class="custom-color-green--text my-5">
                > Quelle est ma mission ?
              </h3>

              <p>
                Mes mains sont le prolongement de mon cœur, ce lieu où je me
                sens chez moi. À travers elles, j’aimerais vous offrir un peu de
                réconfort, d’apaisement et un espace pour vous reconnecter à
                vous-même.
              </p>
              <p class="mb-0">
                Je veux alors vous offrir un moment de répit où le corps est
                accompagné dans le mouvement, afin de préserver l’autonomie avec
                douceur et bienveillance.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-card flat>
        <v-card-text class="custom-color-green--text">
          <h3 class="custom-color-green--text my-5">> Mes formations :</h3>
          <ul>
            <li>
              <i>En cours jusqu’à novembre 2026</i> - Formation Masso-Oncologie
              Chrysalide, École de massothérapie et kinésithérapie l'Hêtre, 160h
              – 2026
            </li>
            <li>
              Formation Massage Thaïlandais sur table, École de massothérapie et
              kinésithérapie l'Hêtre, 35h – 2025
            </li>
            <li>
              Formation Anatomie Musculaire Avancée et Points Gâchettes, École
              de massothérapie et kinésithérapie l'Hêtre, 30h – 2025
            </li>
            <li>
              Formation Anatomie sur cadavre, Université du Québec à
              Trois-Rivières, 6h – 2024
            </li>
            <li>
              Formation viscérale (massage du ventre), École de massothérapie et
              kinésithérapie l'Hêtre, 21h – 2023
            </li>
            <li>
              Deep Tissue sans huile (tissus profonds), Kiné-Concept Guijek, 45h
              – 2022
            </li>
            <li>
              Orthothérapie (incluant Point Knap, isométrie/isoposture),
              Académie de Massage Scientifique, 200h – 2022
            </li>
            <li>
              Vacuothérapie : problématiques générales et sportives, Académie de
              Massage Scientifique, 12h – 2021
            </li>
            <li>
              Massothérapie avancée (kinésithérapie, massage femme enceinte et
              enfants, lomi-Lomi, oncologie, oscillation rythmée), 176h – 2021
            </li>
            <li>
              Drainage Lymphatique, méthode Dr. Leduc, Académie de Massage
              Scientifique , 24h – 2021
            </li>
            <li>
              Massage suédois international intramusculaire et de détente,
              Académie de Massage Scientifique, 424h – 2021
            </li>
            <li>
              Introduction au massage Suédois Cinétique, Institut Kiné-Concept,
              15h – 2020
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
<script lang="ts"></script>

<style>
ul li {
  margin-bottom: 4px;
}
</style>
