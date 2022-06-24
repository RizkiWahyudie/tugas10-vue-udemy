<template>
    <li>
        <base-card>
            <template #basecard>
                <div>
                    <header>
                        <h3 class="font-semibold text-2xl">{{title}}</h3>
                        <base-button
                            @click="deleteData(id)"
                            class="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-200 rounded-lg text-lg px-3 pt-2 pb-2.5 mr-1"
                        ><i class="uil uil-trash"></i></base-button>
                    </header>
                    <p>{{description}}</p>
                    <nav>
                        <a :href="link" target="_blank">View Resource</a>
                    </nav>
                </div>
            </template>
        </base-card>
    </li>
</template>

<script>
export default {
    props: {
        id: String,
        title: String,
        description: String,
        link: String
    },
    inject: ['deleteData']
}
</script>

<style scoped>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}

a:hover,
a:active {
    color: #c89300;
}
</style>