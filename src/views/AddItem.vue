<template>
  <v-container>
    <v-text-field v-model="itemName" label="Item Name"></v-text-field>
    <v-text-field v-model="itemDescription" label="Description"></v-text-field>

    <v-btn @click="onAddItem">Add</v-btn>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const itemName = ref("");
    const itemDescription = ref("");

    const onAddItem = () => {
      const newItem = {
        id: Date.now(),
        name: itemName.value,
        description: itemDescription.value,
      };

      store.dispatch("addItem", newItem);

      itemName.value = "";
      itemDescription.value = "";

      router.push("/");
    };

    return {
      itemName,
      itemDescription,
      onAddItem,
    };
  },
};
</script>
