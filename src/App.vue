<template>
  <v-app>
    <v-main>
      <ModalSleep v-if="isIdle" />
      <router-view v-if="!isIdle" />
    </v-main>
  </v-app>
</template>

<script>
import ModalSleep from "@/components/ModalSleep.vue";
export default {
  name: "App",

  components: {
    ModalSleep,
  },
  data: () => ({}),
  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    },
  },
};
</script>

<style scoped></style>
