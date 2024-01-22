import { useEffect, useState } from 'react'
import './App.css'
import { FilterNav } from './components/Filter'
import { Header } from './components/Header'
import Card from './components/Card'
import { Restaurant } from './types'

function App() {

  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  useEffect(() => {
    getData().then((data) => {
      setRestaurants(data.restaurants)
    })
  }, [])
  console.log(restaurants)
  return (
    <>
      <Header />
      <FilterNav />
      <div className='grid grid-cols-4'>
        {restaurants.map((restaurant) => <Card restaurant={restaurant} />)}
      </div>
    </>
  )
}

export default App

async function getData() {
  const baseUrl = 'https://restaurant-api.dicoding.dev/'
  const response = await fetch(`${baseUrl}list`)
  const responseJson = await response.json()
  return responseJson
}