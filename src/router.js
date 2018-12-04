import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/pages/Home.vue';
import About from '@/components/pages/About.vue';
import ReportAll from '@/components/pages/ReportAll.vue';
import Contact from '@/components/pages/Contact.vue';
import Report from '@/components/pages/Report.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/report_all',
      component: ReportAll
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/report',
      component: Report
    }
  ]
});

export default router;
