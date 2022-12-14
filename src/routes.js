import { createWebHistory, createRouter } from 'vue-router';
import CoachesDetails from './pages/coaches/CoachesDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegister from './pages/coaches/CoachesRegister.vue';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches'},
        { path: '/coaches', component: CoachesList},
        { path: '/coaches/:id', component: CoachesDetails, props:true, children: [
            {path:'contact', component: ContactCoach }//coaches/c1/contact
        ]},
        { path: '/register', component: CoachesRegister},
        { path: '/requests', component: RequestsRecieved},
        { path: '/:not-found(.*)', component: NotFound},
        

    ]
});

export default router;