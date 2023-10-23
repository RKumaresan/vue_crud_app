<template>
  <AuthWrapper cardWidth="400">
    <v-form @submit.prevent="onSubmit" v-model="formValid">
      <v-text-field
        v-model="inputVal.firstName"
        label="First Name"
        :rules="[requiredField('First Name')]"
        clearable
      />
      <v-text-field
        v-model="inputVal.lastName"
        label="Last Name"
        :rules="[requiredField('Last Name')]"
        clearable
      />
      <v-text-field
        v-model="inputVal.email"
        label="Email"
        :rules="[requiredField('Email')]"
        clearable
      />
      <v-text-field
        v-model="inputVal.password"
        label="Password"
        type="password"
        :rules="[requiredField('Password')]"
        clearable
      />
      <v-text-field
        v-model="inputVal.confirmPassword"
        label="Confirm Password"
        type="password"
        :rules="[requiredField('Confirm Password'), passwordMatch]"
        clearable
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
        Sign-Up
      </v-btn>
    </v-form>
    <div class="mt-4 text-center">
      Already have an account?
      <router-link to="/login" class="text-link">Login</router-link>
    </div>
  </AuthWrapper>
</template>

<script setup>
import AuthWrapper from "../components/Auth/AuthWrapper.vue";
import { ref } from "vue";

const inputVal = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const loading = ref(false);
const formValid = ref(false);

const requiredField = (fieldName) => (val) =>
  !!val || `${fieldName} is required`;

const passwordMatch = (val) =>
  val === inputVal.value.password || "Passwords must match";

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
