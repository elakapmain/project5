<script setup>
import JobCardSingle from './JobCardSingle.vue';
</script>

<template>
    <div class="grid grid-cols-3 gap-10 p-10">
        <JobCardSingle v-for="card in 20" :key="card"></JobCardSingle>
    </div>
</template>