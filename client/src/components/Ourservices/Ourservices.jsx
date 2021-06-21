import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
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
    dots: true,
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
          dots: true
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
        <div className="services-section">      
          <Slider {...settings}>
            {services?.map(({ _id, name, image, description }) => (
              <div key={_id} className="services-card">
                <div>
                <img src={image[0]?.url} alt="Exemplos de Serviços"/>
                </div>
                <div>
                <p className="services-title">{name}</p>
                <p>{description}</p>
                </div>
              </div>
              ))}      
          </Slider>
        </div>

  );
}

export default Ourservices;
