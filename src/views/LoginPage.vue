<template>
    <form class="m-10 flex justify-center items-center" @submit.prevent>
        <div>
            <div>
                <label for="username" class="font-bold block">Username</label>
                <input class="w-96 p-2 border-2 rounded-md" id="username" v-model="username" type="text" placeholder="Username">
            </div>
            <div>
                <label for="password" class="font-bold block mt-4">Password</label>
                <input class="w-96 p-2 border-2 rounded-md" id="password" v-model="password" type="password" placeholder="Password">
            </div>

            <button @click="logUserIn" class="mt-4 w-full bg-green-500 px-4 py-2 rounded-md hover:bg-green-800 hover:text-white">LOGIN</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useAuth } from '../composables/useAuth';

const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
    if (await login(username.value, password.value)) {
        if (route.query.redirect) {
            router.push(route.query.redirect)
        } else {
            router.push({name: 'ProfilePage'})
        }
    } else {
        logout()
    }
}
</script>