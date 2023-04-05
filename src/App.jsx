import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Main from './layouts/Main/Main'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    
    
    children: [
      {
        index: true,
        element: <Home />,
        
      },
     
    ],
  },
])

function App() {
  return (
    <div className='App'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
