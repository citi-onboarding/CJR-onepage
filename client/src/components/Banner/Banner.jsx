import { useState, useEffect } from 'react';
import GreenShape from '../../assets/shape.svg';
import SmallShape from '../../assets/small-shape.png';
import api from '../../services/api';

import './Banner.css';

function Banner() {
  const [banner, setBanner] = useState([]);

  const loadBanner = async () => {
    const res = await api.get('banner');
    setBanner(res.data);
  };

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <>
          <div class='banner-background' id='Início'>
          <div class='container'>
          <div className="banner-section">
              <div class='banner-something'>
                  <div class='banner-up'>
                      <div class='banner-text'>
                        <>
                            <h1>{banner[0]?.name}</h1>
                            <p>{banner[0]?.description}</p>
                        </>
                      </div>
                  </div>
                  <div class='banner-image'>
                    <img id='squares' src={GreenShape} />
                  </div>
              </div>
              <img id='small-squares' src={SmallShape}/>
          </div>
          </div>
          <div class='banner-down' id='bottom-banner'></div>
          </div>
    </>
  );
}

export default Banner;