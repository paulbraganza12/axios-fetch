import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        header: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setData(res.data.collection))
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
