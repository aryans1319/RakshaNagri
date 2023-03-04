import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import {
    createBrowserRouter,
    RouterProvider,Outlet
  } from "react-router-dom"; 
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Sidebar from './Sidebar';
import CreatePost from './CreatePost';
import MyAccount from './MyAccount';
const AppLayout = () => {
  return (
    <>
      <Header />
      <div className='flex'>
          {/* <div className='h-28 w-79 bg-slate-400'>
              <Sidebar/>
          </div> */}
          <div className='w-full h-[745px]'>
              <Outlet/>
          </div>
      </div>
      <Footer />
    </>
  );
};

  const appRouter= createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <AppLayout/>,
      children:[
        {
          path: "/",
          exact: true,
          element: <Body/>,
        },
        {
          path:'/create',
          exact: true,
          element: <CreatePost/>
        },{
          path:'/account',
          exact: true,
          element: <MyAccount/>
        } 
      ]
    },
  ])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
