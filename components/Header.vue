<template>
  <v-app-bar flat color="white" height="100">
    <nuxt-link to="/">
      <v-img
        src="/img/virginie_dang_massotherapeute_logo.png"
        max-width="90"
        contain
      ></v-img>
    </nuxt-link>

    <div class="ml-5">
      <nuxt-link to="/">
        <span class="custom-color-pink--text text-h5">Virginie Dang</span>
        <br />
        <span class="custom-color-green--text text-body-1"
          >Massothérapeute,<br />Kinésithérapeute,<br />Orthothérapeute</span
        >
      </nuxt-link>
    </div>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-none d-md-none d-lg-flex">
      <v-btn text href="/#mission" class="mr-5 custom-color-green white--text">
        Ma mission
      </v-btn>

      <v-btn text href="/#soins" class="mr-5 custom-color-green white--text">
        Soins
      </v-btn>

      <v-btn text href="/#soins" class="mr-5 custom-color-green white--text">
        Horaires, tarifs & adresse
      </v-btn>

      <v-btn
        text
        nuxt
        to="/politiques-annulation-confidentialite/"
        class="custom-color-green white--text"
      >
        Politiques d’annulation et de confidentialité
      </v-btn>
    </div>
    <v-menu>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" class="d-flex d-lg-none" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-btn text href="/#mission" class="custom-color-green--text">
              Ma mission
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text href="/#services" class="custom-color-green--text">
              Soins
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text href="/#horaires" class="custom-color-green--text">
              Horaires, tarifs & adresse
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn
              text
              nuxt
              to="/politiques-annulation-confidentialite/"
              class="custom-color-green--text"
            >
              Politiques d’annulation<br />et de confidentialité
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.cursive {
  font-family: 'Parisienne', cursive !important;
}

a {
  text-decoration: none;
}

.text-h6 {
  line-height: 0;
}
</style>
