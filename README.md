# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




---------------------------------------------------------

githab project name 

npm create vite@latest router-job-project -- --template react

cd ...

npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest
npm install --save prop-types

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


plugins: [require("daisyui")],

env: { browser: true, es2020: true, node: true },

@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev

------------------------------------------------------------------------
main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './pages/ErrorPage';
import Root from './LayOut/Root';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>outlet body</div>,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


-----------------------------------------------------------------------------
folder

pages
components
utility



Error.jsx

-----------------------------------------------------------

import PropTypes from 'prop-types';

MyComponent.propTypes = {
  myProp: PropTypes.bool
};
























