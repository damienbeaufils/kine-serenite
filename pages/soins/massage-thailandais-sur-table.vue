<template>
  <v-card>
    <v-card-title
      class="custom-color-green white--text justify-center mt-5 text-center"
    >
      <h1 class="text-h5 text-sm-h4 font-weight-bold">
        Massage thaïlandais sur table
      </h1>
    </v-card-title>

    <v-card-text class="pa-5 black--text">
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-img
            src="/img/services/massage_thailandais_1171.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="/img/services/massage_thailandais_1215.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            src="/img/services/massage_thailandais_1198.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>

        <v-col cols="12">
          <h2 class="custom-color-green--text mb-5">
            Qu’est ce que le massage thaïlandais sur table ?
          </h2>

          <p>
            Ce massage est normalement donné sur vêtements souples de type sport
            (legging, pantalon de sport, t-shirt sans motif).
          </p>
        </v-col>

        <v-col cols="12" sm="6">
          <v-img
            src="/img/services/massage_thailandais_1191.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            src="/img/services/massage_thailandais_1233.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>

        <v-col cols="12">
          <h3 class="custom-color-green--text mb-5">
            Pour qui peut s’adresser ce soin ?
          </h3>
          <ul>
            <li>
              Pour les personnes qui préfèrent recevoir des soins habillés.
            </li>
            <li>Pour changer les</li>
          </ul>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-btn
            href="https://www.gorendezvous.com/virginiedang"
            target="_blank"
            class="custom-color-pink custom-color-green--text my-3 pa-7 px-sm-15 font-weight-bold text-sm-h6 text-subtitle-1"
          >
            Prendre rendez-vous
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  head() {
    return {
      title:
        'Massage thaïlandais sur table |  Virginie Dang | Masso-kinésithérapeute & Orthothérapeute',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Qu’est-ce que le massage thaïlandais sur table ? Pour qui ? Les bienfaits et ce qu’il faut aussi savoir. Prise de rendez-vous pour un massage thaïlandais sur table.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kine-serenite.ca/soins/massage-thailandais-sur-table/',
        },
      ],
    }
  },
}
</script>

<style scoped>
li {
  margin-bottom: 0.75rem;
}

small li {
  margin-bottom: 0;
}

ul + p {
  margin-top: 1rem;
}

.v-card + p {
  margin-top: 1rem;
}
</style>
