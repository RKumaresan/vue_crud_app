<template>
  <v-card class="mx-auto w-100" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <div class="d-flex space-between align-center px-5 w-100">
          <v-app-bar-title>Home</v-app-bar-title>
          <div>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar
                  class="cursor-pointer"
                  color="info"
                  size="x-large"
                  v-bind="attrs"
                  v-on="on"
                >
                  R
                </v-avatar>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menuItems"
                  :key="i"
                  @click="item.action"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-app-bar>
      <v-main> </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  router.push("/logout");
};

const menuItems = ref([{ title: "Logout", action: logout }]);
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
