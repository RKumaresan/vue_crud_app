<template>
  <div class="auth-wrapper">
    <v-sheet>
      <v-card class="mx-auto px-6 py-8" :width="cardWidth">
        <slot></slot>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  bgClass: {
    type: String,
    default: "bg-light-gray",
  },
  cardWidth: {
    type: Number,
    default: 350,
  },
});
</script>

<style scoped>
.auth-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://img.freepik.com/free-photo/3d-rendering-luxury-business-meeting-working-room-executive-office_105762-1997.jpg?size=626&ext=jpg&ga=GA1.2.933170389.1689772930&semt=ais");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>