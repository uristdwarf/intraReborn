<script>
export default {
    computed: {
        projectName() {
            return this.$route.params.projectName;
        }
    }

}
</script>
<script setup>
import { userProps } from './user';
    console.log("Hello World!");
    const props = defineProps(userProps);
    // TODO: Check if id == 0 and go to login page
</script>
<template>
    <ol>
        <li>
            <router-link to="/projects">Go to projects</router-link>
        </li>
        <li>
            <router-link to="/reviews">Go to your current pending reviews</router-link>
        </li>
        <li>
            <router-link to="/" v:bind=props>Go to user page</router-link>
        </li>
    </ol>
    <router-view/>
</template>
