import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import MainPage from "./pages/mainpage/MainPage"
import NotFound from "./pages/notfound/NotFound"
import Home from "./pages/home/Home"
import Account from "./pages/account/Account"
import Contact from "./pages/contactUs/Contact"
import Supplier from "./pages/supplier/Supplier"

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/",
      element:<MainPage/>
    },{
      path:"*",
      element:<NotFound/>
    },{
      path:"/home",
      element:<Home/>
    },{
      path:"/account",
      element:<Account/>
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/supplier",
      element:<Supplier/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App