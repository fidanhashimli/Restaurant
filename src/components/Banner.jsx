import '../assets/styles/components/Banner.css';
import { FaAngleDown } from 'react-icons/fa';

const Banner = () => {
  const scrollToRestaurants = () => {
    const restaurantSection = document.querySelector('.restaurant-grid');
    restaurantSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="banner">
      <div className="background-image">
        <div className="overlay"></div>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <span>Fine Dining</span>
          <span>Azərbaycan Mətbəxi</span>
          <span>Pan-Asian</span>
          <span>Dəniz Məhsulları</span>
          <span>Restoranlar</span>
          <span>Beynəlxalq Mətbəx</span>
          <span>Azərbaycan Mətbəxi</span>
        </div>
      </div>
      <button className="scroll-button" onClick={scrollToRestaurants}>
        <FaAngleDown />
        <span>Restoranları Kəşf Et</span>
      </button>
    </div>
  );
};

export default Banner; 