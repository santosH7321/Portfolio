import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Page/Home';
import About from './Components/Page/About';
import NotFoundPage from './Components/Page/NotFoundPage';
import ProfilePage from './Components/Page/ProfilePage';
import Layout from './Components/Layout/Layout';


const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [
    {
      element: <Home />
    },
  ]
},
{
  path: '/about',
  element: <About />
},
{
  path: '/profile',
  element: <ProfilePage />
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


