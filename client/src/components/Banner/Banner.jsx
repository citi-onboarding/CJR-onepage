import { useState, useEffect } from 'react';
import axios from 'axios';
import GreenShape from '../../assets/shape.svg';
import SmallShape from '../../assets/small-shape.png';

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
          <div class='banner-background'>
          <div class='container'>
          <div className="banner-section">
                  <div class='banner-up'>
                      <div class='banner-text'>
                          {banner?.map(({ name, description }) => (
                              <>
                                  <h1>{name}</h1>
                                  <p>{description}</p>
                              </>
                          ))}
                      </div>
                      <div class='banner-image'>
                          <img id='squares' src={GreenShape} />
                      </div>
                  </div>
              <img id='small-squares' src={SmallShape}/>
          </div>
          </div>
          <div class='banner-down'></div>
          </div>
    </>
  );
}

export default Banner;