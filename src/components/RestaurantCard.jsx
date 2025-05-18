import PropTypes from 'prop-types';
import StarRating from './StarRating';
import '../assets/styles/components/RestaurantCard.css';
import { FaUtensils } from 'react-icons/fa';

const RestaurantCard = ({ 
  name, 
  imageUrl, 
  secondaryImageUrl, 
  rating, 
  cuisine
}) => {
  return (
    <div className="restaurant-card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img src={secondaryImageUrl} alt={`${name} interior`} className="secondary-image" />
            <div className="back-overlay">
              <FaUtensils size={40} color="#ffffff" />
              <div className="back-info">
                <strong>{name}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="front">
          <div className="restaurant-image">
            <img src={imageUrl} alt={name} />
          </div>

          <div className="front-content">
            <span className="cuisine-badge">{cuisine}</span>
            <div className="restaurant-info">
              <h3>{name}</h3>
              <div className="restaurant-details">
                <StarRating rating={rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  secondaryImageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cuisine: PropTypes.string.isRequired,
};

export default RestaurantCard; 