<script setup>
import { CURR_REVIEWS as REVIEWS } from './reviews';
</script>

<template>
        <ol>
            <li v-for="rev in REVIEWS">
                <router-link :to="'/reviews/' + rev.id">{{ rev.reviewerName }} needs a review for {{ rev.projectName }}
                </router-link>
            </li>
        </ol>
</template>
