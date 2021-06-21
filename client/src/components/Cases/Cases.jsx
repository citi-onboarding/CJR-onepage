import { useState, useEffect } from 'react';
import axios from 'axios';

import './Cases.css';

function Cases() {
  const [cases, setCases] = useState([]);

  const loadCases = async () => {
    const res = await axios.get('http://localhost:3001/api/casedescription');
    setCases(res.data);
  };

  useEffect(() => {
    loadCases();
  }, []);

  

  return (
    <div className="casetext">
      {cases?.map(({ description }) => (
        <>
          <div class='um'>
            <h1 id='case-title'>Cases</h1>
          </div>
          <div class='dois'>
            <p id="case-description">{description}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Cases;