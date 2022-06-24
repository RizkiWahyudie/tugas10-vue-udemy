<template>
    <div :class="card">
        <slot name="basecard"></slot>
    </div>
</template>

<script>
export default {
    computed: {
        card() {
            return 'rounded-xl shadow p-4 mx-auto my-8 max-w-xl'
        }
    }
}
</script>