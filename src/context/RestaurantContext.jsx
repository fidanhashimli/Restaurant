import { createContext, useContext, useState, useEffect } from 'react';
import { restaurants as initialRestaurants } from '../data/restaurants';
import PropTypes from 'prop-types';

const RestaurantContext = createContext();

export const useRestaurants = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurants must be used within a RestaurantProvider');
  }
  return context;
};

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRestaurants = () => {
      setLoading(true);
      setRestaurants(initialRestaurants);
      setLoading(false);
    };

    loadRestaurants();
  }, []);

  const value = {
    restaurants,
    loading
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

RestaurantProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; 
