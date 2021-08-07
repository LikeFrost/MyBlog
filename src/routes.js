import BasicLayout from '@/layouts/BasicLayout';
import FullPage from './pages/FullPage';
import UserLayout from '@/layouts/UserLayout'
import Home from './pages/FullPage/components/Home';
import Lab from './pages/FullPage/components/Lab';
import Competition from './pages/FullPage/components/Competition';
import Project from './pages/FullPage/components/Project';
import Link from './pages/FullPage/components/Link';


const routerConfig = [
  {
    path:'/about',
    component : UserLayout,
    children:[
      {
        path:'/lab',
        component:Lab,
      },
      {
        path:'/competition',
        component:Competition,
      },
      {
        path:'/project',
        component:Project,
      },
      {
        path:'/Link',
        component:Link
      }
    ]
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path:'/home',
        component:Home,
      },
      {
        path: '/',
        component: FullPage,
      },
    ],
  },
];
export default routerConfig;
