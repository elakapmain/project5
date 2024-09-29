<script setup>
import { ref } from 'vue';
import { faker } from '@faker-js/faker';

const companyName = faker.company.name()
const jobName = faker.person.jobTitle()
</script>

<template>
    <div class="border border-gray-600 rounded-xl shadow bg-slate-300 h-full">
        <img :src="faker.image.urlLoremFlickr({ width: 640, height: 240, category: 'logo'})" class="rounded-t-xl">
        <div class="p-4">
            <p class="mb-2 text-2xl font-bold">{{ jobName }}</p>
            <p class="mb-3 font-normal">{{ companyName }}</p>
        </div>
    </div>
</template>