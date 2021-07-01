import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Cases from '../Cases.jsx';
import './CasesCard.css';

function CasesCard() {
  const [casesCard, setCasesCard] = useState([]);

  const loadCasesCard = async () => {
    const res = await axios.get('http://localhost:3001/api/cases');
    setCasesCard(res.data);
  };

  useEffect(() => {
    loadCasesCard();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div class='cases-background'>
      <div class='container'>
      <div className="case-section">
          <div class='case-left'>
            <Cases />
          </div>
          <div class='case-right'>
            <Slider {...settings}>
              {casesCard?.map(({ _id, title, image, description }) => (
                <div key={_id} className="cases-card">
                  <img id='card-image' src={image[0]?.url} alt="Case de Exemplo" />
                  <p id="case-card-title">{title}</p>
                  <p id="case-card-description">{description}</p>
                </div>
              ))}
            </Slider>
          </div>
      </div>
      </div>
      </div>
    </>
  );
}


export default CasesCard;