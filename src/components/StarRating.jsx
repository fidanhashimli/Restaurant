import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import '../assets/styles/components/StarRating.css';

const StarRating = ({ rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <FaStar 
            key={i} 
            className="star filled" 
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FaStarHalfAlt 
            key={i} 
            className="star half" 
          />
        );
      } else {
        stars.push(
          <FaRegStar 
            key={i} 
            className="star empty" 
          />
        );
      }
    }
    return stars;
  };

  return (
    <div 
      className="star-rating"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="stars">{renderStars()}</div>
      {isHovered && (
        <div className="rating-value">
          {rating.toFixed(1)}
        </div>
      )}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating; 