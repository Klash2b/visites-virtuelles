<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items">
        <v-col :key="i" cols="12" md="4">
          <v-hover v-slot:default="{ hover }">
            <a :href="publicPath + item.url">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="225px !important">
                  <v-card-title class="title white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="text-center text-bottom">{{ item.title }}</p>

                      <div>
                        <p
                          class="ma-0 body-1 font-weight-bold font-italic text-left"
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="caption font-weight-medium font-italic text-left"
                        >
                          {{ item.subtext }}
                        </p>
                      </div>

                      <!-- <div class="align-self-center">
                        <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        :class="{ 'show-btns': hover }"
                        color="transparent"
                        icon
                      >
                        <v-icon
                          :class="{ 'show-btns': hover }"
                          color="transparent"
                        >
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                      </div> -->
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </a>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    // icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      {
        title: "Île-Rousse",
        // text: "Village fleuri et fleuron touristique Corse",
        // subtext: "Newly released songs. Updated daily.",
        img:
          "http://www.vacances-corses.com/wp-content/uploads/2012/11/lama-village-700x357.jpg",
        url: "visites/lama/index.html",
      },
      {
        title: "Balagne",
        // text: "Greatest Rock Hits",
        // subtext: "Lose yourself in rock tunes.",
        img:
          "http://www.vacances-corses.com/wp-content/uploads/2014/06/1280px-Santa_Luc%C3%ACa_dAttal%C3%A0-700x357.jpg",
        url: "visites/sainte-lucie/test2.html",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
  computed: {
    ...mapState({
      publicPath: "publicPathState",
    }),
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.text-bottom {
  margin-top: 160px;
  text-decoration: none;
}

.v-application a {
  text-decoration: none;
}
/* .show-btns {
  color: rgba(255, 255, 255, 1) !important;
} */
</style>
