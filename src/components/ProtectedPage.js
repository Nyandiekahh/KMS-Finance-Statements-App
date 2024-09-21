import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.logged_in_as);
      } catch (error) {
        console.error('Error fetching protected data', error);
      }
    };
    fetchData();
  }, []);

  return <div>Welcome, {data}</div>;
};

export default ProtectedPage;
