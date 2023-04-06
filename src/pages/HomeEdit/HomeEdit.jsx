import React from 'react'
import { redirect, useParams, useLoaderData } from 'react-router-dom'
import { homeLoader } from '../../pages/Home/Home'
import './HomeEdit.css'

const HomeEdit = () => {
  let { id } = useParams()
  const car = homeLoader().find((el) => el.id === id)
  return (
    <div className='home-edit'>
      <div className='car'>
        <div className='img'>
          <img
            src={car.src}
            alt={car.name}
          />
        </div>

        <div className='info-wrapper'>
          <div className='name'>{car.name}</div>
          <div className='fuel'>fuel: {car.fuel}</div>
          <div className='people'>number of people: {car.people}</div>
          <div className='description'>description: {car.description}</div>
        </div>
      </div>
      <div className='form'>Form</div>
    </div>
  )
}

export default HomeEdit
