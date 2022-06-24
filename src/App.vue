<template>
    <div>
        <the-header :title="title"></the-header>
        <the-resource></the-resource>
    </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/layouts/TheResource.vue';

export default {
    components: {
        TheHeader,
        TheResource
    },
    data() {
        return {
            title: 'List Data',
        }
    },
}
</script>