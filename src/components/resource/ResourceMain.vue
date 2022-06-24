<template>
    <ul>
        <resource-learning
            v-for="src in resources"
            :key="src.id"
            :id="src.id"
            :title="src.title"
            :description="src.description"
            :link="src.link"
        ></resource-learning>
    </ul>
</template>

<script>
import ResourceLearning from './ResourceLearning.vue';

export default {
    components: {
        ResourceLearning
    },
    inject: ['resources']
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>