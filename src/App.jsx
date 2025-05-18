import { useState, useEffect } from 'react'
import './assets/styles/App.css'
import RestaurantCard from './components/RestaurantCard'
import Banner from './components/Banner'
import Loader from './components/Loader'
import { useRestaurants } from './context/RestaurantContext'

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const { restaurants, loading } = useRestaurants();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader || loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Banner />
      <section className="restaurants-section">
        <div className="restaurant-grid">
          {restaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
