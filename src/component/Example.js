import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Example = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5500/api/example')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Data from Backend:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Example;
