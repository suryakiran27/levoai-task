import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetchList = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log({ url });

  const getDataHandler = async (url) => {
    setLoading(true)
    try {
      const response = await axios.get(url);
      console.log("response:", response);
      if(response.status === 200){
        setData(response.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getDataHandler(url);
  }, []);

  return [data, loading];
};

export default useFetchList;
