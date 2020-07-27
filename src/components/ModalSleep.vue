<template>
  <v-carousel
    class="custom-carousel"
    cycle="true"
    height="inherit"
    interval="5000"
    hide-delimiters="false"
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      transition="fade-transition"
      reverse-transition="fade-transition"
      to="/"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "SleepScreen",
  components: {},
  data() {
    return {
      items: [
        {
          src: "https://picsum.photos/1920/1080?random=1",
        },
        {
          src: "https://picsum.photos/1920/1080?random=2",
        },
        {
          src: "https://picsum.photos/1920/1080?random=3",
        },
        {
          src: "https://picsum.photos/1920/1080?random=4",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.custom-carousel {
  height: 100vh !important;
  width: 100vw !important;
}
</style>
