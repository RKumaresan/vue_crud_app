<template>
  <AuthWrapper bgClass="bg-deep-purple" :cardWidth="350">
    <v-form @submit.prevent="onSubmit" v-model="formValid">
      <v-text-field
        v-model="inputVal.email"
        label="Email"
        :rules="[requiredField('Email')]"
        clearable
        class="mb-2"
        :color="inputVal.email ? 'success' : 'error'"
      />
      <v-text-field
        v-model="inputVal.password"
        label="Password"
        placeholder="Enter your password"
        :rules="[requiredField('Password')]"
        clearable
        :color="inputVal.password ? 'success' : 'error'"
      />
      <v-btn
        :disabled="!formValid"
        color="success"
        size="large"
        type="submit"
        variant="elevated"
        block
        :loading="loading"
      >
        Sign-In
      </v-btn>
    </v-form>
    <div class="mt-4 text-center">
      Don't have an account?
      <router-link to="/register" class="text-link">Register</router-link>
    </div>
  </AuthWrapper>
</template>

<script setup>
import AuthWrapper from "../components/Auth/AuthWrapper.vue";
import { ref } from "vue";

const inputVal = ref({ email: "", password: "" });
const loading = ref(false);
const formValid = ref(false);

const requiredField = (fieldName) => (val) =>
  !!val || `${fieldName} is required`;

const onSubmit = () => {
  if (!formValid.value) return;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<style scoped>
.text-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
}
</style>
