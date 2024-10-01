<template>
  <nav class="backdrop-blur-lg sticky top-0 w-auto space-x-4
  flex items-center h-20 bg-slate-600 bg-opacity-75 text-lg">
    <div class="mx-8 flex">
      <h1 class="p-3 text-white font-bold">Remote Job Listings</h1>
      <RouterLink to="/" class="text-white p-3 rounded-xl">Home</RouterLink>
      <RouterLink to="/other" class="text-white p-3 rounded-xl">Other</RouterLink>
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
