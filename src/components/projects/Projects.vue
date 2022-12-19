<script setup>
import { data as projectsData} from "./projects";
const data = projectsData;
</script>

<template>
    <ol>
        <li v-for="project in data">
            <router-link v-if="project.done" :to="'/projects/' + project.name">{{ project.name }} - Done</router-link>
            <router-link v-else v-bind:class="project.unlocked ? 'unlocked' : 'locked'" :to="'/projects/' + project.name">{{ project.name }}</router-link>
        </li>
    </ol>
</template>
