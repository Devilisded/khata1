import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import MainPage from "./pages/mainpage/MainPage"
import NotFound from "./pages/notfound/NotFound"


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
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App