import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useRoutes
} from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home/index';
import Layout from './components/Layout';
import PostListPage from './pages/Post';
import UserListPage from './pages/User';

const PostEdit = (id) => {
  return (
    <>
      <h2>Post: {id}</h2>

      <button type="button">
        Post Edit
      </button>

      <Link to="/users">Back to Post</Link>
    </>
  );
};

function Categories() {
  return (
    <>
      <h2>Categories</h2>
    </>
  );
}
const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};


const routes = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        path: '/'
      },
      {
        element: <UserListPage />,
        path: '/users'
      },
      {
        element: <PostListPage />,
        path: '/posts',
        children: [
          {
            index: true,
            element: <PostEdit />,
            path: ":id"
          },
        ]
      },
      {
        element: <Categories />,
        path: '/categories'
      },
      {
        element: <NoMatch />,
        path: '*'
      },
    ],
  },
  {
    element: <Auth />,
    path: '/login'
  }
];

// export default function Router() {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="users" element={<UserList />}></Route>
//         <Route path="posts" element={<PostList />}></Route>
//         <Route path="categories" element={<Categories />}></Route>
//         <Route path="*" element={<NoMatch />} />
//       </Route>
//     </Routes>
//   );
// };

/**
 * 
 * @returns Routes
 */
export default function Router() {
  return (
    useRoutes(routes)
  );
};
