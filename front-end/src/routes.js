import Body from './components/Contents/Body';
import Dashboard from './components/Contents/Dashboard';
import Users from './components/Contents/Users';
import Posts from './components/Contents/Posts';
import Categories from './components/Contents/Categories';
import Profile from './components/Contents/Profile';
import Roles from './components/Contents/Roles';
import Maps from './components/Contents/Maps';

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