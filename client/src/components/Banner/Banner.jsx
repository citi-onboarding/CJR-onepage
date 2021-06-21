import { useState, useEffect } from 'react';
import axios from 'axios';

import './Banner.css';

function Banner() {
  const [banner, setBanner] = useState([]);

  const loadBanner = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    setBanner(res.data);
  };

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <>
          <div className="banner-section">
              <div class='banner-container'>
                  {banner?.map(({ name, description }) => (
                      <div class="banner-text">
                          <h1>{name}</h1>
                          <p>{description}</p>
                      </div>
                  ))}
                  <img src="../../assets/shape.svg" />
                  <div id='greendiv'></div>
              </div>
          </div>
    </>
  );
}

export default Banner;