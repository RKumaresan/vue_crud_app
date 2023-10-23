<template>
  <v-container v-if="itemToEdit">
    <v-form @submit.prevent="updateItem">
      <v-text-field v-model="itemToEdit.name" label="Name"></v-text-field>
      <v-text-field
        v-model="itemToEdit.description"
        label="Description"
      ></v-text-field>
      <v-btn type="submit">Update</v-btn>
    </v-form>
  </v-container>
  <div v-else>Item not found.</div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const itemId = ref(Number(route.params.id));
    const itemToEdit = ref(store.getters.getItemById(itemId.value));

    const updateItem = () => {
      store.dispatch("editItem", itemToEdit.value);
      router.push("/");
    };

    onBeforeRouteUpdate((to, from, next) => {
      itemId.value = Number(to.params.id);
      itemToEdit.value = store.getters.getItemById(itemId.value);
      console.log('itemToEdit',itemToEdit.value)
      next();
    });

    return {
      itemToEdit,
      updateItem,
    };
  },
};
</script>
