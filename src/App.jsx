import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
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
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      }
     
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
