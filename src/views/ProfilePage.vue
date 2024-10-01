<script setup>
import { faker } from '@faker-js/faker';

import { useAuth } from '../composables/useAuth';
const { isAuthenticated, logout, user } = useAuth()
</script>

<template>
    <main class="grid place-items-center gap-10 p-10">
        <img class="rounded-xl w-36" :src="faker.image.avatar()"/>
        <h1 class="text-4xl font-thin text-slate-800">Your Profile Page</h1>
        <h3>{{ user.email }}</h3>
    </main>
</template>