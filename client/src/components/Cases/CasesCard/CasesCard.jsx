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



  return (
    <>
    <div className="case-section">
      <div class='1'>
      <Cases/>
      </div>
      <div class='2'>
      <Slider>
      {casesCard?.map(({ _id, title, image, description}) => (
        <div key={_id} className="cases-card">
          <img id='card-image'src={image[0]?.url} alt="Case de Exemplo"/>
          <p id="case-card-title">{title}</p>
          <p id="case-card-description">{description}</p>
        </div>
      ))}
      </Slider>
      </div>
    </div>
    </>
  );
}


export default CasesCard;