import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';
import './App.css'
import { FilterNav } from './components/Filter'
import { Header } from './components/Header'
import Card from './components/Card'
import { Restaurant } from './types'

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [category, setCategory] = useState<string>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    getData(category).then((data) => {
      setRestaurants(data.restaurants)
    })
  }, [category])

  return (
    <Router>
      <Header />
      <FilterNav isOpen={isOpen} setIsOpen={setIsOpen} category={category} setCategory={setCategory} />
      <Routes>
        <Route path="/" element={
          <div className='md:grid grid-cols-4'>
            {restaurants.map((restaurant) => <Card restaurant={restaurant} />)}
          </div>
        } />
        <Route path="/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  )
}

export default App

async function getData(category: string | undefined) {
  const baseUrl = 'https://restaurant-api.dicoding.dev/';
  const url = category ? `${baseUrl}search?q=${encodeURIComponent(category)}` : `${baseUrl}list`;
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
}

