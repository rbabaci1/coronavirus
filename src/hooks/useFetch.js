import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return response;
};
