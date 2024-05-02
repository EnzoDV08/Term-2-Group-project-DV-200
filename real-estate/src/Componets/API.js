import React, { useState, useEffect } from 'react';
import axios from 'axios';

function API  () {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
    .get('https://realty-in-us.p.rapidapi.com/properties/v3/list', {
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': '8896e86008mshcdb4da5dde0a9cap1333cejsna708d8bd7d91',
        'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
      },
      data: {
        limit: 200,
        offset: 0,
        postal_code: '90004',
        status: [
          'for_sale',
          'ready_to_build'
        ],
        sort: {
          direction: 'desc',
          field: 'list_date'
        }
      }
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log('Error fetching data: ', error);
    });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

 return (
  <div>
    
  </div>
);
}

export default API;
