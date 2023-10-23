<template>
  <v-container>
    <router-link to="/add">
      <v-btn color="primary" class="ma-5">Add New Item</v-btn>
    </router-link>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" md="4">
        <v-card>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.description }}</v-card-subtitle>
          <v-card-actions>
            <router-link :to="'/edit/' + item.id">
              <v-btn color="primary">Edit</v-btn>
            </router-link>
            <v-btn @click="deleteItem(item.id)" color="error">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);

    const deleteItem = (id) => {
      store.dispatch("deleteItem", id);
    };

    return {
      items,
      deleteItem,
    };
  },
};
</script>
