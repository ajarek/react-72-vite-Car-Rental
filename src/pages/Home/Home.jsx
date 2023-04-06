import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import './Home.css'
import List from '../../components/List/List'
import cars from '../../assets/cars.json'

export const homeLoader = () => {
  const data = cars || []
  return data
}

const Home = () => {
  const navigate = useNavigate()

  const data = useLoaderData()

  const handleEdit = (e, id) => {
    navigate(`/home-edit/${id}/`)
  }

  return (
    <div className='home'>
      <p>
        All the cars we offer meet the highest standards, both visually and
        technically, but it is the segment of comfortable cars that will satisfy
        the expectations of even the most demanding drivers. The innovations
        used in such cars make every trip a real experience.
      </p>
      <h2>Choose a car: </h2>
      <List
        array={data}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default Home
