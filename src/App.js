//import CSS
import "./App.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home'
import Register from './components/register/Register';
import Login from './components/login/Login';
import Technologies from './components/technologies/Technologies';
import Java from './components/java/Java';
import Nodejs from './components/nodejs/Nodejs';
import Vue from './components/vue/Vue'
import UserProfile from "./components/user-profile/UserProfile";

//create a  component
function App() {

  //create BrowserRouter onject
  const browserRouterObj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'user-profile',
          element:<UserProfile />
        },
        {
          path:'technologies',
          element:<Technologies />,
          children:[
            {
              path:'java',
              element:<Java />
            },
            {
              path:'nodejs',
              element:<Nodejs />
            },
            {
              path:'vue',
              element:<Vue />
            }
          ]
        }
      ]
    }
  ])

  return (
    <div className="main">
     {/* Provide browserRouterObj */}
     <RouterProvider router={browserRouterObj} />
    </div>
  );
}

export default App;
