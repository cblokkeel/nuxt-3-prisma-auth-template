<template>
  <header class="wrapper flex justify-between">
    <h1>header</h1>
    <button to="/login" v-if="!isUserAuthanticated" @click="handleLogin">
      Login
    </button>
    <div v-if="isUserAuthanticated">
      {{ data?.user?.name }}
      <button @click="handleLogout">Logout</button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { status, data, signIn, signOut } = useSession();

const handleLogin = async () => {
  await signIn('google');
};

const handleLogout = async () => {
  await signOut();
};

const isUserAuthanticated = computed(() => {
  return status.value === 'authenticated';
});
</script>
