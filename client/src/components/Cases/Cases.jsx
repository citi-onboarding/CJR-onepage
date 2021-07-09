import { useState, useEffect } from 'react';
import api from '../../services/api';

import './Cases.css';

function Cases() {
  const [cases, setCases] = useState([]);

  const loadCases = async () => {
    const res = await api.get('casedescription');
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