import {createRouter,createWebHistory} from 'vue-router';
import Home from '/src/views/Home.vue';
import Form from '/src/views/Form.vue';
import About from '/src/views/About.vue';
import Contact from '/src/views/Contact.vue';

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
   
    {
        path:'/form',
        name:'Registration',
        component:Form
    },
    {
        path:'/About',
        name:'Aboutus',
        component:About
    },
    {
        path:'/Contact',
        name:'Contact',
        component:Contact
    }
]
const router=createRouter({history: createWebHistory(),
    routes
})
export default router;