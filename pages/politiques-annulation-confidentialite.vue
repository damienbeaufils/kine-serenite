<template>
  <v-card>
    <v-card-title
      class="custom-color-green white--text justify-center mt-5 text-center"
    >
      <h1 class="text-h5 text-sm-h4 font-weight-bold">
        Politiques d’annulation et de confidentialité
      </h1>
    </v-card-title>

    <v-card-text class="pa-5 black--text">
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="custom-color-green--text mb-5">Politique d’annulation</h2>
          <ol>
            <li>
              Il est possible d'annuler le rendez-vous plus de 24 heures avant
              sans frais. Vous pouvez m'appeler ou me texter, il me fera plaisir
              de vous proposer une autre plage horaire.
            </li>
            <li>
              Passé à
              <b
                >moins de 24h du rendez-vous, des frais de 50% du prix vous
                seront demandés avant de pouvoir prendre un autre rendez-vous</b
              >.
            </li>
            <li>
              Il est également impossible de modifier la durée d'un traitement à
              moins de 24h à l'avance. Dans le cas où vous devez quitter avant
              la fin, le soin devra être payé dans sa totalité malgré tout.
            </li>
            <li>
              <b
                >En cas d’absence sans avertissement, le montant total du soin
                sera dû avant de pouvoir reprendre un rendez-vous.</b
              >
            </li>
          </ol>
        </v-col>

        <v-col cols="12">
          <h2 class="custom-color-green--text mb-5">
            Politique de confidentialité
          </h2>
          <ol>
            <li>
              <b
                >Responsable de la protection des renseignements personnels :</b
              >
              Virginie Dang, propriétaire de Kiné-Sérénité (NEQ : 2277374767),
              entreprise enregistrée au registre des entreprises du Québec.
            </li>
            <li>
              <b
                >Contact de la personne responsable de la protection des
                renseignements personnels :</b
              >
              <a href="mailto:virginiedang.massotherapeute@gmail.com"
                >virginiedang.massotherapeute@gmail.com</a
              >
            </li>
            <li>
              <b>Éléments des renseignements personnels collectés :</b> nom,
              prénom, téléphone, adresse courriel, date de naissance,
              occupation, raison de la consultation, conditions de santé à
              savoir (opérations chirurgicales; blessures, fractures ou autres
              dans les 6 derniers mois; conditions pour lesquelles de la
              médication est prise; allergies; problèmes circulatoires,
              digestifs, articulaires, de peau, respiratoires; grossesse;
              douleurs; tensions).
            </li>
            <li>
              <b>Utilisation prévue des renseignements personnels :</b> les
              informations telles que le nom, le prénom, le téléphone et
              l'adresse courriel sont nécessaires pour faciliter la prise de
              rendez-vous et toute communication associée. Les autres
              renseignements sont essentiels pour personnaliser le massage en
              fonction de votre état de santé et de vos besoins.
            </li>
            <li>
              <b>Stockage des données :</b> les questionnaires santé sont pris
              en note dans Google Drive dans mon compte professionnel
              virginiedang.massotherapeute@gmail.com. Une
              double-authentification est requise pour pouvoir y accéder.
            </li>
            <li>
              <b>Accès aux données :</b> je suis la seule à connaître le mot de
              passe qui verrouille l'écran de mon ordinateur ou de ma tablette,
              et je le verrouille immédiatement dès que je m'en éloigne. Lorsque
              je quitte mon navigateur internet, la session de mon compte Google
              professionnel se déconnecte automatiquement. Pour pouvoir accéder
              de nouveau aux fichiers, une nouvelle connexion avec
              double-authentification est requise.
            </li>
            <li>
              <b>Aucun partage des données :</b> aucune de vos informations ne
              sera partagée à une tierce partie pour des statistiques, des
              publicités, des listes d'envoi publicitaire ou des références.
            </li>
            <li>
              <b>Droits des personnes concernées :</b> vous avez le droit de
              demander accès à vos renseignements personnels, ainsi que de
              demander leur rectification le cas échéant. La personne de contact
              est la personne nommée au point 2.
            </li>
            <li>
              <b>Délai de conservation des renseignements personnels :</b> les
              renseignements personnels sont conservés jusqu’à 7 ans après le
              dernier massage. Ensuite, ils seront supprimés définitivement du
              nuage informatique.
            </li>
          </ol>
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
        'Politiques d’annulation et de confidentialité |  Virginie Dang | Masso-kinésithérapeute & Orthothérapeute',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Description détaillée des politiques d'annulation et de confidentialité.",
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://kine-serenite.ca/politiques-annulation-confidentialite/',
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

li li {
  margin-top: 0.25rem;
}

ul + p {
  margin-top: 1rem;
}
</style>
