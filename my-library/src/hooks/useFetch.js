import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timerOut = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Data could not be fetched!");
          }
          const json = await response.json();

          setData(json);

          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(error.message);
          setLoading(false);
        }
      };

      fetchData();
    }, 500);
    return () => clearTimeout(timerOut);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
