import Dashboard from './components/Content/Dashboard';
import Users from './components/Content/Users';
import Posts from './components/Content/Posts';
import Body from './components/Content/Body';

const routes = [
  {
    path: '/',
    component: <Body />
  }, {
    path: '/dashboard',
    component: <Dashboard />
  }, {
    path: '/users',
    component: <Users />
  }, {
    path: '/posts',
    component: <Posts />
  },
];
  
export default routes;