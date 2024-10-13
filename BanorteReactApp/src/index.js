import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WelcomePageApp from './Pages/AppWelcomePage.js';
import LoginPageApp from './Pages/LoginPage.js';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPageApp />,
  },
  {
    path: "/welcome",
    element: <WelcomePageApp />,
  },
  {
    path: "/app",
    element: <App/>,
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
