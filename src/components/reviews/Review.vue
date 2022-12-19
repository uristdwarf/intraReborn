<script setup>
import { GetReviewByID } from "./reviews";
import { useRoute } from "vue-router";
const route = useRoute();

const review = GetReviewByID(route.params.id);
</script>

<template>
    <ul>
        <li v-for="(value, key) in review">{{ key }}: {{ value }}</li>
    </ul>
</template>
