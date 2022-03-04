import Body from './components/Content/Body';
import Dashboard from './components/Content/Dashboard';
import Users from './components/Content/Users';
import Posts from './components/Content/Posts';
import Categories from './components/Content/Categories';
import Profile from './components/Content/Profile';
import Roles from './components/Content/Roles';
import Maps from './components/Content/Maps';

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
  }, {
    path: '/categories',
    component: <Categories />
  }, {
    path: '/profile',
    component: <Profile />
  }, {
    path: '/roles',
    component: <Roles />
  }, {
    path: '/maps',
    component: <Maps />
  },
];
  
export default routes;