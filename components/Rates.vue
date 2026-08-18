<template>
  <div>
    <v-card class="custom-color-light-grey mt-10">
      <v-card-title
        class="justify-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
      >
        Les types de soin offerts
      </v-card-title>

      <v-card-text class="custom-color-green--text px-sm-15">
        <div class="mb-6 mx-sm-5">
          <v-card rounded>
            <v-card-text
              class="custom-color-green--text custom-color-yellow text-center font-weight-bold py-3 mb-3"
            >
              Massage professionnel réalisé sur table de massage
            </v-card-text>
          </v-card>
          <p>
            À la clinique de Physiothérapie France Roy ou à mon bureau à
            Clermont.
            <br />
            C’est un soin combinant des techniques de massage suédois, tissus
            profonds et thaïlandais sur table.
          </p>
          <p class="font-weight-bold">
            L’objectif est de favoriser le relâchement des tensions et de
            promouvoir un état de détente.
          </p>
        </div>

        <div class="my-5 mx-sm-5">
          <v-card rounded>
            <v-card-text
              class="custom-color-green--text custom-color-yellow text-center font-weight-bold py-3 mb-3"
            >
              Massage de confort adapté aux personnes en perte d’autonomie,
              offert à domicile, en CHSLD ou à l’hôpital -<br
                class="hidden-md-and-down"
              />
              <i>ce soin ne se donne pas sur une table de massage</i>
            </v-card-text>
          </v-card>
          <p>
            C’est un soin de confort dans une <u>installation adaptée</u> (dans
            votre fauteuil, une chaise longue, etc.), alliés à des mobilisations
            douces - <i>des mouvements guidés des bras, des jambes</i> - visant
            à préserver la souplesse, encourager le mouvement et relâcher les
            tensions.
          </p>
          <p class="font-weight-bold">
            Le but est surtout de vous déposer et de vous reconnecter avec
            vous-même, juste le temps du soin.
          </p>
          <p>
            Plus de détail en cliquant ici :&nbsp;<nuxt-link
              class="text-decoration-underline font-weight-bold"
              to="/soins/massage-de-repit/"
              >Massage de répit</nuxt-link
            >
          </p>
        </div>
      </v-card-text>
    </v-card>

    <v-card class="custom-color-light-grey mt-10">
      <v-card-title
        class="justify-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
      >
        Tarifs
      </v-card-title>

      <v-card-text class="custom-color-green--text text-center">
        <v-card class="mx-sm-15 my-5">
          <v-card-title
            class="custom-color-green--text text-center justify-center font-weight-bold mt-1 font-italic"
          >
            <div>
              Massage professionnel réalisé sur table de massage<br
                class="hidden-md-and-down"
              />
              <small class="red--text"
                >(je ne prends plus de nouveaux clients jusqu’à nouvel
                ordre)</small
              >
            </div>
          </v-card-title>

          <v-card-text class="custom-color-green--text pt-0">
            <v-simple-table class="rates-table">
              <template #default>
                <thead>
                  <tr>
                    <th class="text-center">Durée</th>
                    <th class="text-left">Description</th>
                    <th class="text-right">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-weight-bold text-no-wrap">60 min</td>
                    <td class="text-left">
                      Massage sur table où vous êtes confortablement allongé sur
                      le ventre puis sur le dos tout au long de la séance - à la
                      clinique de Physiothérapie France Roy ou à mon bureau à
                      Clermont.
                    </td>
                    <td class="text-right font-weight-bold text-no-wrap">
                      90 $
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>

        <v-card class="mx-sm-15 my-sm-5">
          <v-card-title
            class="custom-color-green--text text-center justify-center font-weight-bold mt-1 font-italic"
          >
            Massage adapté à domicile – approche centrée sur l'humain
          </v-card-title>

          <v-card-text class="custom-color-green--text pt-0">
            <v-simple-table class="rates-table">
              <template #default>
                <thead>
                  <tr>
                    <th class="text-center">Durée</th>
                    <th class="text-left">Description</th>
                    <th class="text-right">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-weight-bold text-no-wrap">15-20 min</td>
                    <td class="text-left">
                      Un premier pas tout en douceur, pour apprivoiser le
                      toucher à votre rythme.
                    </td>
                    <td class="text-right font-weight-bold text-no-wrap">
                      40 $
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold text-no-wrap">30 min</td>
                    <td class="text-left">
                      Un moment de présence et de détente, là où vous en êtes
                      aujourd’hui.
                    </td>
                    <td class="text-right font-weight-bold text-no-wrap">
                      60 $
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold text-no-wrap">45 min</td>
                    <td class="text-left">
                      Du temps pour vraiment prendre soin de vous, sans se
                      presser.
                    </td>
                    <td class="text-right font-weight-bold text-no-wrap">
                      80 $
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold text-no-wrap">60 min</td>
                    <td class="text-left">
                      Une heure entière pour s’abandonner, laisser le corps se
                      relâcher pleinement.
                    </td>
                    <td class="text-right font-weight-bold text-no-wrap">
                      95 $
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>

          <v-card-text class="pt-0">
            <v-card rounded flat class="mx-sm-5">
              <v-card-text class="custom-color-green--text text-left">
                <p class="font-weight-bold mb-1">Frais de déplacement en sus</p>
                <p class="mb-1">
                  <span class="font-weight-bold">10 $</span> - Clermont,
                  St-Agnès, Pointe-au-Pic, Cap-à-l’Aigle
                </p>
                <p class="mb-1">
                  <span class="font-weight-bold">20 $</span> - St-Fidèle,
                  St-Hilarion, Notre-Dame-des-Monts, St-Aimé-des-Lacs
                </p>
                <p class="mb-0">
                  <span class="font-weight-bold">30 $</span> - Baie-Saint-Paul,
                  St-Siméon, Les Éboulements, St-Irénée
                </p>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>

        <p class="font-italic mt-3 mt-sm-0">
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

      <v-col cols="12" sm="6" class="mx-auto">
        <v-card class="custom-color-light-grey mt-5 mt-sm-10">
          <v-card-title
            class="justify-center text-center custom-color-green mx-5 mx-sm-15 white--text font-weight-bold card-header rounded py-2"
          >
            À domicile / en CHSLD / à l’hôpital -
            <br class="hidden-md-and-down" />sur demande
          </v-card-title>

          <v-card-text class="custom-color-green--text text-center mt-1">
            <p>
              Offert uniquement pour les personnes en perte d’autonomie ne
              pouvant recevoir un massage sur une table traditionnelle et leurs
              proches aidants.
            </p>
          </v-card-text>

          <v-card-actions
            class="custom-color-green--text justify-center text-center pb-5"
          >
            <div>
              <p class="font-weight-bold mb-2">Écrivez-moi via :</p>
              <ul class="contact text-left ml-sm-5">
                <li>
                  Facebook Messenger :
                  <a
                    class="text-decoration-underline"
                    href="https://www.facebook.com/virginiedang.massotherapeute"
                    target="_blank"
                    >facebook.com/virginiedang.massotherapeute</a
                  >
                </li>
                <li>
                  Par courriel :
                  <a
                    class="text-decoration-underline"
                    href="mailto:virginiedang.massotherapeute@gmail.com"
                    target="_blank"
                    >virginiedang.massotherapeute@gmail.com</a
                  >
                </li>
                <li>
                  Par téléphone (laissez-moi un message vocal) :
                  <a
                    class="text-decoration-underline"
                    href="tel:4187901294"
                    target="_blank"
                    >(418) 790-1294</a
                  >
                </li>
              </ul>
            </div>
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

.rates-table.v-data-table {
  background-color: transparent;
}

.rates-table.v-data-table >>> th {
  color: #45818e !important;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.rates-table.v-data-table >>> td {
  color: #45818e;
  vertical-align: middle;
  white-space: normal;
}

@media only screen and (min-width: 600px) {
  .map {
    margin-top: 2.5rem;
  }
}
ul.contact li {
  word-break: break-all;
}
</style>
