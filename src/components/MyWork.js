import React, { useState, useEffect } from "react";
import "./MyWork.css";
import SingleWork from "./SingleWork";

export default function MyWork() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://myportfolio-101c0.firebaseio.com/works.json"
    );
    const fetchedData = await response.json();

    if (fetchedData) {
      const works = Object.keys(fetchedData).map((key) => {
        return {
          ...fetchedData[key],
        };
      });
      setData(works);
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data !== 0 ? (
        data.map((work) => {
          console.log(work);
          
          return (
           <SingleWork data={work} key={work.id} />
          );
        })
      ) : (
        <h1>Please submit your works</h1>
      )}
    </div>
  );
}
