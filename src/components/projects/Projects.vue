<script setup>
import { data as projectsData} from "./projects";
const data = projectsData;
</script>

<template>
    <ol v-for="project in data">
        <li v-if="project.done">
            <router-link :to="'/projects/' + project.name">{{ project.name }} - Done</router-link>
        </li>
        <li v-else v-bind:class="project.unlocked ? 'unlocked' : 'locked'">
            <router-link :to="'/projects/' + project.name">{{ project.name }}</router-link>
        </li>
    </ol>
</template>
