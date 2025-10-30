<template>
  <div>
    <v-card class="custom-color-light-grey mt-10">
      <v-card-title
        class="justify-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
      >
        Spécialisation et tarif
      </v-card-title>

      <v-card-subtitle
        class="custom-color-green--text text-center font-weight-bold mt-1"
      >
        Massothérapie et kinésithérapie
        <br />
        Massage thaïlandais sur table allié à des techniques de massage suédois
        et tissus profonds.
      </v-card-subtitle>

      <v-card-text class="custom-color-green--text text-center">
        <p class="text-decoration-underline">
          Rendez-vous de 60 minutes uniquement : 85$
        </p>
        <p class="font-italic">
          Reçus disponibles en massothérapie, kinésithérapie et orthothérapie
          pour fins d’assurances
        </p>
        <p>
          <a
            href="https://rmpq.ca/repertoire-des-membres/clermont/virginie-dang-778809/"
            target="_blank"
          >
            <v-img
              src="/img/rmpq.jpg"
              alt="Membre du Réseau des massothérapeutes professionnels du Québec (RMPQ)"
              max-width="500"
              class="mx-auto"
            ></v-img>
          </a>
        </p>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="custom-color-light-grey mt-10">
          <v-card-title
            class="justify-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
          >
            Lundi, mercredi, jeudi
          </v-card-title>

          <v-card-subtitle
            class="custom-color-green--text text-center font-weight-bold text-decoration-underline mt-1"
          >
            Clinique de physiothérapie France Roy
          </v-card-subtitle>

          <v-card-text
            class="custom-color-green--text justify-center text-center pb-0"
          >
            <p>
              425 Bd de Comporté, La Malbaie, QC G5A 1W5
              <br />
              <a
                class="text-decoration-underline"
                href="https://www.physiotherapiefranceroy.com/"
                target="_blank"
                >physiotherapiefranceroy.com</a
              >
            </p>

            <p>
              <span class="font-weight-bold">Horaires :</span>
              <br />
              Lundi & mercredi - 14h30 à 19h45 (dernier à 18h45)
              <br />
              Jeudi - 09h30 à 14h45 (dernier à 13h45)
            </p>
          </v-card-text>

          <v-card-actions
            class="custom-color-green--text justify-center text-center pb-2"
          >
            <p>
              <span class="font-weight-bold">Prendre rendez-vous :</span>
              <br />
              Appelez au <a href="tel:4186653980">(418) 665-3980</a> directement
              à la clinique de physiothérapie pour un rendez-vous.
            </p>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card class="custom-color-light-grey mt-5 mt-sm-10">
          <v-card-title
            class="justify-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
          >
            Mardi
          </v-card-title>

          <v-card-subtitle class="custom-color-green--text text-center mt-1">
            <p class="font-weight-bold text-decoration-underline mb-3">
              Je pratique chez nous les mardis.
            </p>
            <p class="font-weight-bold red--text mb-2">
              Non adapté pour les personnes à mobilité réduite
            </p>
          </v-card-subtitle>

          <v-card-text
            class="custom-color-green--text justify-center text-center pb-0"
          >
            <p>2 rue Beauregard, Clermont, QC G4A 0A2</p>
            <p>
              <span class="font-weight-bold">Horaires :</span>
              <br />
              Mardi - 09h00 à 17h30 (dernier à 16h30)
            </p>
          </v-card-text>

          <v-card-actions
            class="custom-color-green--text justify-center text-center pb-2"
          >
            <p>
              <span class="font-weight-bold">Prendre rendez-vous :</span>
              <br />
              Appelez au <a href="tel:4187901294">(418) 790-1294</a> ou sur
              Gorendezvous :
              <a
                class="text-decoration-underline"
                href="https://www.gorendezvous.com/virginiedang"
                target="_blank"
                >gorendezvous.com/virginiedang</a
              >
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.no-bullets {
  padding: 0 !important;
}
.no-bullets li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: unset;
}

address {
  font-style: normal;
}

.card-header {
  position: relative;
  top: -1.5rem;
}

@media only screen and (min-width: 600px) {
  .map {
    margin-top: 2.5rem;
  }
}
</style>
