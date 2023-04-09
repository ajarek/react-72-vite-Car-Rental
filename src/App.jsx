import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { homeLoader } from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import HomeEdit from './pages/HomeEdit/HomeEdit'
import Error from './pages/Error/Error'
import OrderSummary, { noteAction } from './pages/OrderSummary/OrderSummary'
import Main from './layouts/Main/Main'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'home-edit',
        errorElement: <Error />,
        children: [
          {
            path: ':id',
            action: noteAction,
            element: <HomeEdit />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: '/summary',
        element: <OrderSummary />,
        errorElement: <Error />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
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
