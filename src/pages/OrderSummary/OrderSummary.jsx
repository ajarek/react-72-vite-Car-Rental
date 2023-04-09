import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import {
  saveStorage,
  fetchStorage,
  deleteStorage,
} from '../../helpers/localStorage'
import { homeLoader } from '../../pages/Home/Home'
import './OrderSummary.css'

export const noteAction = async ({ request }) => {
  deleteStorage('car')
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    saveStorage(formData, 'car')

    return redirect('/summary')
  } catch (err) {
    throw new Error(err.message)
  }
}

const OrderSummary = () => {
  const navigate = useNavigate()
  const info = fetchStorage('car')
  const car = homeLoader().find((el) => el.id === info[0].newId)
  const date1 = new Date(info[0].dateStart)
  const date2 = new Date(info[0].dateEnd)
  const date3 = date2 - date1
  const date =
    date3 / 1000 / 60 / 60 / 24 <= 0 ? 1 : date3 / 1000 / 60 / 60 / 24

  const handlePaid = () => {
    navigate('/')
  }
  return (
    <div className='order-summary'>
      <p>
        {' '}
        <b>{info[0].newName}</b>, you have rented a <b>{car.name}</b> car.{' '}
      </p>
      <div className='wrapper-date'>
        <p>
          from <b>{info[0].dateStart}</b>
        </p>
        <p>
          to <b>{info[0].dateEnd}</b>
        </p>
      </div>
      <p>
        Rental period up to <b>{date}</b> days.
      </p>
      <p>
        The place of rental and return is <b>{info[0].newCity}</b>
      </p>
      <div className='img'>
        <img
          src={car.src}
          alt={car.name}
        />
      </div>
      <p className='name'>{car.name}</p>
      <div className='wrapper-date'>
        <p className='fuel'>fuel: {car.fuel}</p>
        <p className='people'>number of people: {car.people}</p>
      </div>
      <p className='description'>description: {car.description}</p>
      <div className='wrapper-date'>
        <p className='description'>fee for 24h is: {car.price}$</p>
        <p className='description'>deposit: {car.deposit}$</p>
      </div>
      <div className='paid'>
        <h3>To be paid {car.price * date + car.deposit}$</h3>
      </div>
      <div className='btn-paid'>
        <button onClick={handlePaid}>I confirm and pay</button>
      </div>
    </div>
  )
}

export default OrderSummary
