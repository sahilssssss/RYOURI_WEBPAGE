import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to RYOURI, where we blend culinary artistry with warm hospitality. <br/> Our vision is simple : to create a haven where exquisite cuisine meets exceptional service. Join us on a gastronomic journey that celebrates the love of food, family, and friends. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">RYOURI has a rich history of delighting diners with delectable dishes. Since our inception, we've strived to create a legacy of culinary excellence and warm memories.<br/>Our journey reflects a deep affection for exceptional cuisine and sincere hospitality</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
