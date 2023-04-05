import { Outlet, useLoaderData } from 'react-router-dom'
 import Nav from '../../components/Nav/Nav'
import  './Main.css'



const Main = () => {

  return (
    <div className='main-layout'>
      <Nav/>
      lol
      <Outlet />
    </div>
  )
}

export default Main