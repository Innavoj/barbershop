<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="name" label="Username"></v-text-field>
      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <v-btn type="submit" block class="mt-2" @click.prevent="registerUser">Submit</v-btn>
    </v-form>
  </v-sheet>
  {{ feedback }}
  {{ email }}
  {{ password }}
</template>

<script lang="ts"  setup>
import { Ref, ref } from 'vue';
import { useAppStore } from '@/store/app';

const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const feedback: Ref<string> = ref('');
const store = useAppStore();

const registerUser = async () => {
  feedback.value = "..."
  const response = await store.register(name.value, email.value, password.value)
  if (response === false) {
    feedback.value = "Login error"
  } else {
    feedback.value = "Login Succeded"
  }
}

</script>

<style scoped></style>
