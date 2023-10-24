import './index.css';
import reportWebVitals from './reportWebVitals';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import Error from './Pages/Error'
import BlogPage from './Pages/BlogPage'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/dev.blogwiki",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/BlogPage",
    element: <BlogPage />,
    errorElement: <Error />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log);
