<template>
  <header class="wrapper flex justify-between">
    <h1>header</h1>
    <button
      to="/login"
      v-if="status === 'unauthenticated'"
      @click="handleLogin"
    >
      Login
    </button>
    <h1 v-if="status === 'authenticated' && data && data.user">
      {{ data.user.name }}
    </h1>
  </header>
</template>

<script setup lang="ts">
const { status, data, signIn } = useSession();

const handleLogin = async () => {
  await signIn('google');
};
</script>
