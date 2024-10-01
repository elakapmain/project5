<script setup>
  import { useAuth } from '../composables/useAuth';
  const { isAuthenticated, logout, user } = useAuth()
</script>

<!-- TODO: FIX THIS NAVBAR -->

<template>
  <nav class="backdrop-blur-lg sticky top-0 w-auto space-x-4
  flex items-center h-20 bg-slate-600 bg-opacity-75 text-lg">
    <div class="mx-8 flex">
      <h1 class="p-3 text-white font-bold">Remote Job Listings</h1>
      <RouterLink :to="{name: 'Home'}" class="text-white p-3">Home</RouterLink>
      <RouterLink :to="{name: 'Other'}" class="text-white p-3">Other</RouterLink>
      <div v-if="isAuthenticated" class="flex items-center">
        <RouterLink :to="{name: 'ProfilePage'}" class="text-white p-3">Profile</RouterLink>
        <p class="text-white mx-4">Welcome {{ user.email }}</p>
      <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 text-red-100 hover:bg-red-700">Log out</button>
      </div>
      <div v-else class="flex">
        <RouterLink  :to="{name: 'LoginPage'}" class="text-white p-3">Log In</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  & .router-link-active {
    @apply underline underline-offset-8;
  }
}
</style>
