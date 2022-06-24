<template>
    <div class="px-8 pt-8 mx-auto max-w-[40rem] text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <ul class="flex flex-wrap -mb-px">
            <!-- BaseButton memanggil slots untuk button dan styling props mode -->
            <base-button
                @click="setSelectedTab('resource-main')"
                :mode="classData"
            >List Data</base-button>
            <base-button
                @click="setSelectedTab('resource-add')"
                :mode="addData"
            >Add List</base-button>
        </ul>
    </div>
    <!-- Keep alive untuk menghindari penghapusan secara otomatis untuk inputan -->
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import ResourceMain from '../resource/ResourceMain.vue';
import ResourceAdd from '../resource/ResourceAdd.vue';

export default {
    components: {
        ResourceMain,
        ResourceAdd
    },
    computed: {
        classData() {
            // apabila selectedTab nya sedang aktif di resource main, 
            // maka class flat tidak didefinisikan
            return this.selectedTab === 'resource-main' ? this.btnActive : this.btnNonActive
        },
        addData() {
            return this.selectedTab === 'resource-add' ? this.btnActive : this.btnNonActive
        },
        btnActive() {
            return 'inline-block p-4 text-emerald-600 border-b-2 border-emerald-600 dark:text-emerald-500 dark:border-emerald-500'
        },
        btnNonActive() {
            return 'inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
        }
    },
    data() {
        return {
            selectedTab: 'resource-main',
            resource: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official vue.js documentation',
                    link: 'https://vuejs.org'
                }, 
                {
                    id: 'google',
                    title: 'Google Chrome',
                    description: 'The official google documentation',
                    link: 'https://google.com'
                }
            ]
        }
    },
    // Provide disini kenapa didefinisikan di TheResource.vue?
    // kenapa ga di App.vue? 
    // jika di file TheResource.vue kan langsung ngirim data ke Resource Main, kenapa ga pake props?
    // Nah disitu masalahnya, jika menggunakan props kasus disini tidak dapat mendefinisikan props
    // Karena component disini di setting secara dinamis
    // Maka dari itu menggunakan provide + inject untuk mempassing data
    provide() {
        return {
            addResources: this.addResource,
            resources: this.resource,
            deleteData: this.removeData
        };
    },
    methods:{
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, desc, link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: desc,
                link: link
            }
            this.resource.unshift(newResource);
            this.selectedTab = 'resource-main'
        },
        removeData(dataId) {
            const dataIndex = this.resource.findIndex(data => data.id === dataId);
            this.resource.splice(dataIndex, 1);
        }
    },
}
</script>