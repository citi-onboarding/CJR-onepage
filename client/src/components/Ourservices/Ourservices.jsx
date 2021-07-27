import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Slider from "react-slick";
import api from '../../services/api';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Ourservices.css';
import Button from '../Button/Button';

function Ourservices() {
  const [services, setServices] = useState([]);

  const loadServices = async () => {
    const res = await api.get('Ourservices');
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 650,
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
    <div class='services-background' id="Serviços">
    <div class='container'>
    <div className="services-section">
        <div id='services-title'>Nossos serviços e produtos</div>
        <div id='services-carousel'>
          <Slider {...settings}>
            {services?.map(({ _id, name, image, description }) => (
              <div key={_id} className="services-card">
                               
                <div id='carousel-text'>
                  <div class='service-name'><p>{name}</p></div>
                  <div class='service-description'><p>{description}</p></div>
                </div>
                <div id='carousel-images'>
                  <img src={image[0]?.url} alt="Exemplos de Serviços" />
                </div> 
              </div>
            ))}
          </Slider>
        </div>
        <div id='services-button'>
          <Button />
        </div>
    </div>
    </div>
    </div>

  );
}

export default Ourservices;
