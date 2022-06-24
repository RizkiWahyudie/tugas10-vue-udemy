import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/interface/BaseCard.vue'
import BaseButton from './components/interface/BaseButton.vue'
import BaseError from './components/interface/BaseError.vue'

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-error', BaseError);

app.mount('#app');