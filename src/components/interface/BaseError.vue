<template>
<teleport to='body'>
    <div @click="$emit('close')"></div>
    <dialog open class="p-6 mb-4 bg-red-200 rounded-lg fixed z-50 top-[30vh] left-0 max-w-[500px] overflow-hidden">
        <header class="text-red-700 font-semibold text-xl flex">
            <slot name="header">
                <i class="uil uil-info-circle mr-2"></i>
                <h2>{{title}}</h2>
            </slot>
        </header>
        <section class="py-3 text-red-700">
            <slot></slot>
        </section>
        <menu>
            <slot name="actions"></slot>
        </menu>
    </dialog>
</teleport>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }
    },
    emits: ['close']
}
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

menu {
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
</style>