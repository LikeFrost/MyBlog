import BasicLayout from '@/layouts/BasicLayout';
import FullPage from './pages/FullPage';
import UserLayout from '@/layouts/UserLayout'
import Home from './pages/FullPage/components/Home';
import Lab from './pages/FullPage/components/Lab';

const routerConfig = [
  {
    path:'/about',
    component : UserLayout,
    children:[
      {
        path:'/lab',
        component:Lab,
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
