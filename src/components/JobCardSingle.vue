<script setup>
import { onMounted, ref } from 'vue';
import { faker } from '@faker-js/faker';
import { split } from 'postcss/lib/list';

const companyName = faker.company.name()
const jobName = faker.person.jobTitle()
const jobLocation = ref('')
const jobDesc = faker.lorem.lines(2)
const bulletsArray = ref([])

const getBullets = () => {
    const array = (faker.lorem.lines({min: 1, max: 3})).split("\n")

    bulletsArray.value = array
}

const getCity = () => {
    const city = faker.location.city()
    const state = faker.location.state()
    const zip = faker.location.zipCode()

    jobLocation.value = city + ", " + state + " " + zip
}

onMounted(() => {
    getBullets()
    getCity()
})
</script>

<template>
    <RouterLink :to="{ name: 'JobDetails', params: {id: jobName }}">
        <div class="border border-gray-600 rounded-xl shadow-xl bg-stone-200 h-full">
        <img :src="faker.image.urlLoremFlickr({ width: 640, height: 240, category: 'job'})" class="rounded-t-xl">
        <div class="p-4">
            <p class="mb-2 text-2xl font-bold">{{ jobName }}</p>
            <p class="mb-3 font-normal">{{ companyName }}</p>
            <p class="mb-3 font-bold">{{ jobLocation }}</p>
            <p class="mb-3 font-normal">{{ jobDesc }}</p>
            <p class="mb-2 text-1xl font-bold">Duties</p>
            
            <ul class="list-disc list-outside pl-5">
                <li v-for="bullet in bulletsArray" :key="bullet">{{ bullet }}</li>
            </ul>
        </div>
    </div>
    </RouterLink>
</template>