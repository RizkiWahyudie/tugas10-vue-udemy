<template>
    <base-error v-if="inputInvalid" title="Invalid Input" @close="statusOkay">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter at least a few characters into each input field</p>
        </template>
        <template #actions>
            <base-button @click="statusOkay" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900">
                <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                Okay
            </base-button>
        </template>
    </base-error>
    <base-card>
        <template #basecard>
        <form @submit.prevent="submitData">
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-neutral-700">Title</label>
                <input ref="titleInput" type="text" :class="inputClass">
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-neutral-700">Description</label>
                <input type="text" ref="descInput" :class="inputClass">
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-neutral-700">Link</label>
                <input type="url" ref="linkInput" :class="inputClass">
            </div>
            <base-button type="submit" :mode="btnClass">Add Data</base-button>
        </form>
        </template>
    </base-card>
</template>

<script>
export default {
    inject: ['addResources'],
    data() {
        return {
            inputInvalid: false
        }
    },
    computed: {
        inputClass() {
            return 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        },
        btnClass() {
            return 'text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        }
    },
    methods: {
        submitData() {
            const titleValue = this.$refs.titleInput.value;
            const descValue = this.$refs.descInput.value;
            const linkValue = this.$refs.linkInput.value;
            if(
                titleValue.trim() === '' || 
                descValue.trim() === '' || 
                linkValue.trim() === ''
            ) 
            {
                this.inputInvalid = true
                return;
            }
            this.addResources(titleValue, descValue, linkValue);
        },
        statusOkay() {
            this.inputInvalid = false
        }
    }
}
</script>