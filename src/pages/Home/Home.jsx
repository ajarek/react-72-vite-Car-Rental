import React from 'react'
import './Home.css'
import List from '../../components/List/List'
import cars from '../../assets/cars.json'
const Home = () => {
  console.log(cars);
  return (
    <div className='home'>
      <p>All the cars we offer meet the highest standards, both visually and technically, but it is the segment of comfortable cars that will satisfy the expectations of even the most demanding drivers. The innovations used in such cars make every trip a real experience.</p>
      <h2>Choose a car: </h2>
      <List array={cars}/>
    </div>
  )
}

export default Home