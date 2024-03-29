<template>
  <v-card>
    <v-card-title
      class="custom-color-green white--text justify-center mt-5 text-center"
    >
      <h1 class="text-h5 text-sm-h4 font-weight-bold">Massage anti-stress</h1>
    </v-card-title>

    <v-card-text class="pa-5 black--text">
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="custom-color-green--text mb-5">
            Qu’est-ce que le massage anti-stress ?
          </h2>

          <p>
            C’est un massage <b>lent et à l’écoute de vos tissus</b>. Les
            manoeuvres peuvent être plus profondes si votre corps me le permet
            mais tout en restant dans la <b>douceur</b>.
          </p>

          <p>
            La lenteur des manoeuvres vous permet de
            <b
              >reprendre «conscience» de votre propre corps et de vos propres
              besoins</b
            >.
          </p>

          <p>
            Des manoeuvres de
            <b>massage du ventre et de décongestion du diaphragme</b> sont
            incluses dans votre soin.
          </p>

          <p>
            Le massage du ventre permet d’amener une
            <b>plus grande détente</b> et la décongestion du diaphragme va
            donner de l’espace à celui-ci, et donc à votre respiration (<i
              >ce muscle assure à lui seul 60 à 75% du changement de volume
              pulmonaire lors de l'inspiration</i
            >).
          </p>

          <p>
            La durée idéale pour profiter pleinement de ce soin est de 90
            minutes.
          </p>

          <p>
            <b
              >Sachez que je m’adapte en fonction de vos besoins ! Ce soin est
              donc <u>personnalisable</u>.</b
            >
          </p>
        </v-col>

        <v-col cols="12" sm="8">
          <v-img
            src="/img/services/massage_anti-stress.jpg"
            alt=""
            :aspect-ratio="1920 / 1280"
          ></v-img>
        </v-col>

        <v-col cols="12">
          <h3 class="custom-color-green--text mb-5">Pour qui ?</h3>
          <p>
            Il s’adresse
            <b>aux personnes exposées à de vifs états émotionnels</b> provoqués
            par :
          </p>
          <ul>
            <li>La perte d’un être cher ;</li>
            <li>La perte d’un emploi ;</li>
            <li>Un feu, un accident, un traumatisme ;</li>
            <li>
              Pour les personnes touchées par le <b>cancer</b> (<i
                >avis écrit du médecin requis</i
              >) ;
            </li>
            <li>Pour les <b>personnes aidantes</b> ;</li>
            <li>
              Personnes souffrant d’<b>anxiété</b>, de <b>dépression</b> ;
            </li>
            <li>Et autre difficulté.</li>
          </ul>

          <p>
            Bref, pour toutes personnes dont les émotions prennent beaucoup
            «trop» de place et chamboule leur quotidien.
          </p>

          <p>
            En fait, c’est un soin
            <b
              >considéré dans la catégorie des massages réconfortants dans une
              approche psychocorporelle</b
            >.
          </p>
        </v-col>

        <v-col cols="12">
          <h3 class="custom-color-green--text mb-5">Les bienfaits</h3>
          <ul>
            <li>Améliore l’état d’esprit par la détente ;</li>
            <li>
              Relaĉhe les tensions psychologiques et physiques causés par le
              stress ;
            </li>
            <li>Réduit la dépression ;</li>
            <li>
              Améliore le mouvement respiratoire par la décongestion du
              diaphragme ;
            </li>
            <li>Aide à contrer l’insomnie ;</li>
            <li>Améliore le facteur énergie ;</li>
            <li>
              Diminue les douleurs associées à la maladie ou à ses traitements.
            </li>
          </ul>
        </v-col>

        <v-col cols="12" class="mt-4">
          <h3 class="custom-color-green--text mb-5">
            Ce qu’il faut aussi savoir
          </h3>
          <ul>
            <li>
              Ce soin est
              <b
                >complémentaire à une thérapie mentale, mais ne la remplace
                pas</b
              >
              ;
            </li>
            <li>
              Comme dans toute thérapie, ce n’est pas un soin miracle car il
              faut aussi que vous ayez la volonté de vous reconnecter.
              <b
                >Nous allons travailler en équipe, vous et moi pour atteindre
                cet objectif.</b
              >
              ;
            </li>
            <li>
              Comme c’est un travail d’équipe,
              <b
                >des conseils seront donnés à la fin du soin pour augmenter son
                efficacité</b
              >
              ;
            </li>
            <li>
              C’est un programme qui se fait
              <b
                >idéalement sur plusieurs séances : les effets seront encore
                plus grands et plus efficaces</b
              >
              ;
            </li>
            <li>
              Pour vulgariser le tout : c’est comme une voiture, pour mieux
              «fonctionner» il faut penser à s’entretenir et prendre soin de soi
              !
            </li>
            <li>
              <b
                >Je souhaite être cette personne qui vous accompagne vers votre
                mieux-être, avec bienveillance, sans jugement et respect de
                votre soi.</b
              >
            </li>
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
        'Massage anti-stress |  Virginie Dang | Masso-kinésithérapeute & Orthothérapeute',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Qu’est-ce que le massage anti-stress ? Pour qui ? Les bienfaits et ce qu’il faut aussi savoir. Prise de rendez-vous pour un massage anti-stress.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kine-serenite.ca/soins/massage-anti-stress/',
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
