import React from 'react'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
  } from 'react-router-dom';

import LandingPage from './Pages/LandingPage'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
      ],
    },
  ]);

function App() {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }

export default App