import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Slider from "react-slick";
import BudgetButton from "../../assets/Button.svg";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import './Ourservices.css';

function Ourservices() {
  const [services, setServices] = useState([]);

  const loadServices = async () => {
    const res = await axios.get('http://localhost:3001/api/Ourservices');
    setServices(res.data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  
  
  return (
    <div class='services-background'>
    <div class='container'>
    <div className="services-section">
        <div id='services-title'><h4>Nossos serviços e produtos</h4></div>
        <div id='services-carousel'>
          <Slider {...settings}>
            {services?.map(({ _id, name, image, description }) => (
              <div key={_id} className="services-card">
                <div id='carousel-images'><img src={image[0]?.url} alt="Exemplos de Serviços" /></div>
                <div id='carousel-text'>
                  <div class='service-name'><p>{name}</p></div>
                  <div class='service-description'><p>{description}</p></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div id='services-button'><a href="https://contatocjr.typeform.com/to/WyhLH3?typeform-embed=embed-fullpage"><img src={BudgetButton} /></a></div>
    </div>
    </div>
    </div>

  );
}

export default Ourservices;
