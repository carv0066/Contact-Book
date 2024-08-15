import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AddContact from '../components/AddContact.vue';
import Details from '../components/Details.vue';
import EditContact from '../components/EditContact.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/add', name: 'AddContact', component: AddContact },
    { path: '/details/:id', name: 'Details', component: Details, props: true },
    { path: '/edit/:id', name: 'EditContact', component: EditContact, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
