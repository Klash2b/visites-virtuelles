<template>
  <div class="accueil">
    <v-btn
      depressed
      height="64px"
      width="64px"
      @click="swapLanguage('co')"
      class="btnLangCorsica"
    >
      <v-img contain height="64px" width="64px" :src="images.corsica"></v-img>
    </v-btn>
    <v-btn
      depressed
      height="64px"
      width="64px"
      @click="swapLanguage('fr')"
      class="btnLangFrance"
    >
      <v-img contain height="64px" width="64px" :src="images.france"></v-img>
    </v-btn>
    <v-btn
      depressed
      height="64px"
      width="64px"
      @click="swapLanguage('it')"
      class="btnLangItaly"
    >
      <v-img contain height="64px" width="64px" :src="images.italy"></v-img>
    </v-btn>
    <v-btn
      fab
      large
      @click="displayVisites()"
      v-if="displayBtn"
      class="btnRetour"
    >
      <v-icon large>mdi-arrow-left-thick</v-icon>
    </v-btn>
    <MainVisites v-if="!displayBtn" />
    <Visites v-if="displayBtn" />
    <v-btn
      large
      @click="displayVisites()"
      v-if="!displayBtn"
      class="btnDisplay"
    >
      Découvrir d'autres sentiers
    </v-btn>
    <v-btn fab large @click="displayInfos()" class="btnInfo">
      <v-icon large>mdi-information-variant</v-icon>
    </v-btn>
    <v-overlay :absolute="absolute" :value="displayInfo" light>
      <v-card
        class="mx-auto"
        max-width="50vw"
        outlined
        light
        v-on-clickaway="displayInfos"
        @click="displayInfos"
      >
        <v-list-item three-line light>
          <v-list-item-content light>
            <div class="overline mb-4" light>Informations</div>
            <v-list-item-title class="headline mb-1" light
              >Le casque de Réalité Virtuelle</v-list-item-title
            >
            <v-list-item-subtitle light class="text-nowrap"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi rem itaque laborum at. Fuga unde sint asperiores
              laboriosam quis facilis sit maxime recusandae quo ullam sunt,
              cupiditate consequuntur aspernatur eveniet. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi rem itaque laborum at.
              Fuga unde sint asperiores laboriosam quis facilis sit maxime
              recusandae quo ullam sunt, cupiditate consequuntur aspernatur
              eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              rem itaque laborum at. Fuga unde sint asperiores laboriosam quis
              facilis sit maxime recusandae quo ullam sunt, cupiditate
              consequuntur aspernatur eveniet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi rem itaque laborum at.
              Fuga unde sint asperiores laboriosam quis facilis sit maxime
              recusandae quo ullam sunt, cupiditate consequuntur aspernatur
              eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              rem itaque laborum at. Fuga unde sint asperiores laboriosam quis
              facilis sit maxime recusandae quo ullam sunt, cupiditate
              consequuntur aspernatur eveniet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi rem itaque laborum at.
              Fuga unde sint asperiores laboriosam quis facilis sit maxime
              recusandae quo ullam sunt, cupiditate consequuntur aspernatur
              eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              rem itaque laborum at. Fuga unde sint asperiores laboriosam quis
              facilis sit maxime recusandae quo ullam sunt, cupiditate
              consequuntur aspernatur eveniet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi rem itaque laborum at.
              Fuga unde sint asperiores laboriosam quis facilis sit maxime
              recusandae quo ullam sunt, cupiditate consequuntur aspernatur
              eveniet. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import MainVisites from "@/components/MainVisites.vue";
import Visites from "@/components/Visites.vue";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  name: "Accueil",
  components: {
    MainVisites,
    Visites,
  },
  data() {
    return {
      displayBtn: false,
      displayInfo: false,
      absolute: true,
      images: {
        corsica: require("../assets/images/squareCorsica.png"),
        france: require("../assets/images/squareFrance.png"),
        italy: require("../assets/images/squareItaly.png"),
      },
    };
  },
  computed: {},
  methods: {
    displayVisites() {
      this.displayBtn = !this.displayBtn;
    },
    displayInfos() {
      this.displayInfo = !this.displayInfo;
    },
    swapLanguage(selectedLang) {
      if (selectedLang === "fr") {
        console.log("Langue choisie : Français");
        this.lang = 0;
      } else if (selectedLang === "co") {
        console.log("Langue choisie : Corse");
        this.lang = 1;
      } else if (selectedLang === "it") {
        console.log("Langue choisie : Italien");
        this.lang = 2;
      } else {
        console.log("Erreur");
      }
    },
  },
};
</script>

<style scoped>
.accueil {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
}

.btnRetour {
  position: absolute;
  top: 20px;
  left: 20px;
}

.btnDisplay {
  position: absolute;
  bottom: 20vh;
  height: 66px !important;
  min-width: 350px !important;
}

.btnInfo {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.btnOverlay {
  position: absolute;
  top: 0;
  right: 0;
}

.btnLangCorsica {
  right: 20px;
  top: 20px;
  position: absolute;
  border-radius: 14px;
}

.btnLangFrance {
  right: 20px;
  top: 104px;
  position: absolute;
  border-radius: 14px;
}

.btnLangItaly {
  right: 20px;
  top: 188px;
  position: absolute;
  border-radius: 14px;
}

.text-nowrap {
  -webkit-line-clamp: unset !important;
}
</style>
