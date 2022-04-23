import NotFound from './components/Comons/NotFound';
import Login from './components/Contents/Login';
import Dashboard from './components/Contents/Dashboard';
import Users from './components/Contents/Users';
import Posts from './components/Contents/Posts';
import Categories from './components/Contents/Categories';
import Profile from './components/Contents/Profile';
import Roles from './components/Contents/Roles';
import Maps from './components/Contents/Maps';

const routes = {
  parents: [{
    path: '/*',
    index: false,
    component: <NotFound />
  }, {
    path: '/login',
    index: false,
    component: <Login />
  }],
  children: [{
    path: '/',
    index: true,
    component: <Dashboard />
  }, {
    path: '/dashboard',
    index: false,
    component: <Dashboard />
  }, {
    path: '/users',
    index: false,
    component: <Users />
  }, {
    path: '/posts',
    index: false,
    component: <Posts />
  }, {
    path: '/categories',
    index: false,
    component: <Categories />
  }, {
    path: '/profile',
    index: false,
    component: <Profile />
  }, {
    path: '/roles',
    index: false,
    component: <Roles />
  }, {
    path: '/maps',
    index: false,
    component: <Maps />
  }]
};
  
export default routes;