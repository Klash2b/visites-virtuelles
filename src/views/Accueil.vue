<template>
  <div class="accueil">
    <HoverCards />
  </div>
</template>

<script>
import HoverCards from "@/components/HoverCards.vue";

export default {
  name: "Accueil",
  components: {
    HoverCards,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
}
</style>
