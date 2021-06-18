import { useState, useEffect } from 'react';
import axios from 'axios';

import './Cases.css';

function Cases() {
  const [cases, setCases] = useState([]);

  const loadCases = async () => {
    const res = await axios.get('http://localhost:3001/api/case-descriptions');
    setCases(res.data);
  };

  useEffect(() => {
    loadCases();
  }, []);

  

  return (
    <div className="case">
      {cases?.map(({description}) => (
          <>
          <h1 id='case-title'>Cases</h1>
          <p id="case-description">{description}</p>
          </>
      ))}
    </div>
  );
}

export default Cases;