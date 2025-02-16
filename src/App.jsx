import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./component/Navbar"
import Homes from "./component/Homes"
import Paste from "./component/Paste"
import ViewPaste from "./component/ViewPaste"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Homes/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
)


function App() {
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
