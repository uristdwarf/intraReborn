<script setup>
// TODO: Get project data from API
import { getProjectByName } from "./projects";
import { useRoute } from "vue-router";
const route = useRoute();

const proj = getProjectByName(route.params.name);
</script>

<template>
    <li v-for="(value, key) in proj">{{ key }}: {{ value }}</li>
</template>
