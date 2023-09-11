import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import MainPage from "./pages/mainpage/MainPage"


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
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App