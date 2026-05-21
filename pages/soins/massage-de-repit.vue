<template>
  <v-card>
    <v-card-title
      class="custom-color-green white--text justify-center mt-5 text-center"
    >
      <h1 class="text-h5 text-sm-h4 font-weight-bold">
        Massage de répit (pour personnes en perte d’autonomie) - Uniquement à
        domicile / en CHSLD / à l’hôpital
      </h1>
    </v-card-title>

    <v-card-text class="pa-5 black--text">
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="custom-color-green--text mb-5">
            Qu’est ce que le massage de répit ?
          </h2>

          <p>
            Il est offert uniquement pour les personnes ne pouvant s’installer
            sur une table traditionnelle de massage et leurs proches aidants.
          </p>

          <p>
            L'objectif est plutôt d’offrir un massage confortable et sécuritaire
            <b>directement dans vos installations</b>, selon vos capacités et
            vos besoins (fauteuil inclinable, chaise, divan, etc.). Ils ne
            visent pas la performance ou le traitement musculaire intensif.
          </p>

          <p>
            J’apporte avec moi le matériel nécessaire pour créer un
            environnement apaisant et adapté : une chaise longue, un appui-tête
            portatif pouvant être installé sur n’importe quelle table, une
            enceinte pour une musique douce ainsi qu’un gel de massage neutre.
            <u
              >Je ne me déplace pas avec une table de massage traditionnelle.</u
            >
          </p>

          <p>
            Chaque soin est personnalisé afin de privilégier votre confort,
            votre bien-être et le respect de vos limites.
          </p>

          <p>Je m’adapte à vous pour :</p>
          <ul>
            <li>
              <b>l’installation</b> : dans votre fauteuil roulant, une chaise
              longue, le lazyboy, dans votre divan… De mon côté, j’apporte une
              chaise longue ainsi qu’un appui-tête portatif qui se dépose sur
              n’importe quelle table.
            </li>
            <li><b>la durée du massage</b> : 15-20, 30, 45 ou 60 minutes.</li>
            <li>
              <b>vos besoins</b> : juste la tête ; ou les mains, les pieds, la
              tête et un peu de dos …
            </li>
          </ul>
          <p>En gros : vous choisissez car c’est votre moment de réconfort.</p>
        </v-col>

        <v-col cols="12" sm="6" class="order-2 order-sm-0">
          <h3 class="custom-color-green--text mb-5">Pour qui ?</h3>
          <p>Ce soin s’adresse notamment aux personnes vivant avec :</p>
          <ul>
            <li>le cancer ;</li>
            <li>la SLA ;</li>
            <li>le Parkinson ;</li>
            <li>l’Alzheimer ;</li>
            <li>d’autres maladies dégénératives.</li>
          </ul>
          <p>Ainsi qu’aux personnes :</p>
          <ul>
            <li>en fauteuil roulant ;</li>
            <li>tétraplégiques ;</li>
            <li>hospitalisées ;</li>
            <li>l’en CHSLD ;</li>
            <li>en fin de vie.</li>
          </ul>

          <p>Et je n’oublie pas les proches aidants.</p>
        </v-col>

        <v-col cols="12" sm="6" class="mx-auto my-auto order-1 order-sm-0">
          <v-img
            src="/img/services/massage_de_repit.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
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
        'Massage de répit |  Virginie Dang | Masso-kinésithérapeute & Orthothérapeute',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Qu’est-ce que le massage de répit ? Pour qui ? Prise de rendez-vous pour un massage de répit (pour personnes en perte d’autonomie). Uniquement à domicile / en CHSLD / à l’hôpital.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kine-serenite.ca/soins/massage-de-repit/',
        },
      ],
    }
  },
}
</script>

<style scoped>
li {
  margin-bottom: 0.5rem;
}

ul + p {
  margin-top: 1rem;
}
</style>
