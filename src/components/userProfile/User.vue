<script setup>
import { MOCK_USER } from '../../user';

const data = MOCK_USER;
</script>  

<template>
    <p>{{data.displayName}}</p>
    <p>Current Level: {{data.level}}</p>
    <p>Current XP: {{data.xp}}</p>
    <p>Current points: {{data.points}} (Used to unlock projects)</p>
    <p>Reviews:</p>
    <li v-for="review in data.currentReviews">
        {{ review.displayName }} is requesting a review for {{ review.project }}
    </li>
</template>
