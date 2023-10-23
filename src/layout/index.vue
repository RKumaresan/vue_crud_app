<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item
            v-for="item in drawerItems"
            :key="item.title"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.path"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <Header :items="drawerItems" />
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Header from "./header.vue";
export default {
  name: "LayoutElement",
  data() {
    return {
      drawer: true,
      rail: true,
      drawerItems: [
        { icon: "mdi-home-city", title: "Home", path: "/home" },
        { icon: "mdi-information", title: "About", path: "/about" },
        { icon: "mdi-cog", title: "Settings", path: "/settings" },
      ],
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.active-route {
  background-color: #e0e0e0 !important;
}
.v-navigation-drawer {
  background: linear-gradient(
    to bottom left,
    rgba(19, 84, 122, 0.8),
    rgba(128, 208, 199, 0.8)
  );
}
</style>