import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import MainPage from "./pages/mainpage/MainPage"
import NotFound from "./pages/notfound/NotFound"
import Home from "./pages/home/Home"
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
      path:"/customer",
      element:<MainPage/>
    },{
      path:"*",
      element:<NotFound/>
    },{
      path:"/",
      element:<Home/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App